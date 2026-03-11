import type { StepState } from '../components/EnhancedMemoryViz';

/**
 * 从 C 代码生成可视化步骤
 * 用于内存可视化工具，将代码执行过程分解为可逐步展示的状态
 */
export function generateStepsFromCode(code: string): StepState[] {
  const lines = code.split('\n');
  const steps: StepState[] = [];
  const variables: Record<string, string> = {};
  const arrays: Record<string, string[]> = {};
  let stepNum = 0;

  lines.forEach((line, lineIdx) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('#include') || trimmed.startsWith('#define')) {
      return;
    }

    let description = '';
    const stepVars: StepState['variables'] = [];

    // 数组声明 int arr[] = {1, 2, 3};
    const arrMatch = trimmed.match(/(?:int|uint32_t|char)\s+(\w+)\s*\[\s*\]?\s*=\s*\{([^}]+)\}/);
    if (arrMatch) {
      const arrName = arrMatch[1];
      const values = arrMatch[2].split(',').map(v => v.trim());
      arrays[arrName] = values;
      variables[arrName] = `[${values.join(', ')}]`;

      description = `${arrName} = {${values.join(', ')}}`;
      stepVars.push({
        name: arrName,
        value: `[${values.join(', ')}]`,
        changed: true
      });
    }

    // 变量声明 int a = 10; 或 uint8_t a = 0xFF;
    const declMatch = trimmed.match(/(?:int|uint32_t|uint8_t|uint16_t|int8_t|int16_t|char|short|long|float|double)\s+(\w+)\s*=\s*(.+?);?$/);
    if (declMatch && !arrMatch) {
      const varName = declMatch[1];
      let value = declMatch[2].replace(';', '').trim();

      if (value.startsWith('0x') || value.startsWith('0X')) {
        variables[varName] = value;
      } else if (!isNaN(parseInt(value))) {
        variables[varName] = value;
      } else if (value.startsWith('"') && value.endsWith('"')) {
        variables[varName] = value;
      } else if (value.startsWith("'") && value.endsWith("'")) {
        variables[varName] = value;
      }

      description = `${varName} = ${value}`;
      stepVars.push({
        name: varName,
        value: variables[varName] || value,
        changed: true
      });
    }

    // 指针声明 int *p = &a; 或 int *p = arr;
    const ptrDeclMatch = trimmed.match(/(?:int|uint32_t|char)\s*\*\s*(\w+)\s*=\s*(.+?);?$/);
    if (ptrDeclMatch && !trimmed.includes('&')) {
      const ptrName = ptrDeclMatch[1];
      const target = ptrDeclMatch[2].replace(';', '').trim();

      if (arrays[target]) {
        const addr = '0x' + (0x3000 + Object.keys(arrays).indexOf(target) * 16).toString(16);
        variables[ptrName] = addr;
        description = `${ptrName} = ${target} (指向数组首元素，地址 ${addr})`;
      } else {
        description = `${ptrName} = ${target}`;
        variables[ptrName] = target;
      }

      stepVars.push({
        name: ptrName,
        value: variables[ptrName],
        changed: true
      });
    }

    // 指针赋值 p = &a;
    const ptrMatch = trimmed.match(/^(\w+)\s*=\s*&(\w+)/);
    if (ptrMatch && !ptrDeclMatch) {
      const ptrName = ptrMatch[1];
      const targetName = ptrMatch[2];
      const targetAddr = '0x' + (0x1000 + Object.keys(variables).indexOf(targetName) * 4).toString(16);
      variables[ptrName] = targetAddr;

      description = `${ptrName} = &${targetName} (地址 ${targetAddr})`;
      stepVars.push({
        name: ptrName,
        value: targetAddr,
        changed: true
      });
    }

    // 数组访问赋值 arr[0] = 10;
    const arrAccessMatch = trimmed.match(/(\w+)\[(\d+)\]\s*=\s*(.+?);?$/);
    if (arrAccessMatch) {
      const arrName = arrAccessMatch[1];
      const idx = parseInt(arrAccessMatch[2]);
      const newVal = arrAccessMatch[3].replace(';', '').trim();

      if (arrays[arrName]) {
        const prevVal = arrays[arrName][idx] || '0';
        arrays[arrName][idx] = newVal;
        variables[arrName] = `[${arrays[arrName].join(', ')}]`;

        description = `${arrName}[${idx}] = ${newVal}`;
        stepVars.push({
          name: `${arrName}[${idx}]`,
          value: newVal,
          changed: true,
          previousValue: prevVal
        });
      }
    }

    // 解引用赋值 *p = 20;
    const derefMatch = trimmed.match(/^\*(\w+)\s*=\s*(.+?);?$/);
    if (derefMatch) {
      const ptrName = derefMatch[1];
      const newValue = derefMatch[2].replace(';', '').trim();

      description = `*${ptrName} = ${newValue} (通过指针修改值)`;

      // 找到被指向的变量并更新
      for (const [name, val] of Object.entries(variables)) {
        if (name !== ptrName && !val.startsWith('0x') && !val.startsWith('[')) {
          const prevVal = variables[name];
          variables[name] = newValue;
          stepVars.push({
            name,
            value: newValue,
            changed: true,
            previousValue: prevVal
          });
          break;
        }
      }
    }

    // 位操作 |=
    const orMatch = trimmed.match(/^(\w+)\s*\|\=\s*(.+?);?$/);
    if (orMatch) {
      const varName = orMatch[1];
      const operand = orMatch[2].replace(';', '').trim();

      const currentVal = variables[varName] || '0';
      let currentNum = 0;
      if (currentVal.startsWith('0x')) {
        currentNum = parseInt(currentVal, 16);
      } else {
        currentNum = parseInt(currentVal) || 0;
      }

      let operandNum = 0;
      const shiftMatch = operand.match(/\((\d+)\s*<<\s*(\d+)\)/);
      if (shiftMatch) {
        operandNum = parseInt(shiftMatch[1]) << parseInt(shiftMatch[2]);
      } else if (operand.startsWith('0x')) {
        operandNum = parseInt(operand, 16);
      } else {
        operandNum = parseInt(operand) || 0;
      }

      const newVal = currentNum | operandNum;
      variables[varName] = newVal.toString();

      description = `${varName} |= ${operand} → ${varName} = ${newVal}`;
      stepVars.push({
        name: varName,
        value: newVal.toString(),
        changed: true,
        previousValue: currentVal
      });
    }

    // 位操作 &=
    const andMatch = trimmed.match(/^(\w+)\s*&=\s*(.+?);?$/);
    if (andMatch && !orMatch) {
      const varName = andMatch[1];
      const operand = andMatch[2].replace(';', '').trim();

      const currentVal = variables[varName] || '0';
      let currentNum = currentVal.startsWith('0x') ? parseInt(currentVal, 16) : parseInt(currentVal) || 0;

      let operandNum = 0;
      const notMatch = operand.match(/~\s*\(?(\d+)\)?/);
      if (notMatch) {
        operandNum = ~parseInt(notMatch[1]);
      } else if (operand.startsWith('0x')) {
        operandNum = parseInt(operand, 16);
      } else {
        operandNum = parseInt(operand) || 0;
      }

      const newVal = currentNum & operandNum;
      variables[varName] = newVal.toString();

      description = `${varName} &= ${operand} → ${varName} = ${newVal}`;
      stepVars.push({
        name: varName,
        value: newVal.toString(),
        changed: true,
        previousValue: currentVal
      });
    }

    // 自增/自减 a++ 或 ++a
    const incMatch = trimmed.match(/^(\w+)\+\+$|^\+\+(\w+)$/);
    if (incMatch) {
      const varName = incMatch[1] || incMatch[2];
      const currentVal = variables[varName] || '0';
      const currentNum = parseInt(currentVal) || 0;
      const newVal = currentNum + 1;
      variables[varName] = newVal.toString();

      description = `${varName}++ → ${varName} = ${newVal}`;
      stepVars.push({
        name: varName,
        value: newVal.toString(),
        changed: true,
        previousValue: currentVal
      });
    }

    // 简单赋值 a = b + c 或 a = b * 2
    const assignMatch = trimmed.match(/^(\w+)\s*=\s*(\w+)\s*([\+\-\*\/\%])\s*(\w+|\d+);?$/);
    if (assignMatch && !declMatch && !ptrDeclMatch && !arrAccessMatch) {
      const varName = assignMatch[1];
      const left = assignMatch[2];
      const op = assignMatch[3];
      const right = assignMatch[4].replace(';', '');

      const leftVal = variables[left] ? parseInt(variables[left]) : parseInt(left) || 0;
      const rightVal = variables[right] ? parseInt(variables[right]) : parseInt(right) || 0;

      let result = 0;
      switch (op) {
        case '+': result = leftVal + rightVal; break;
        case '-': result = leftVal - rightVal; break;
        case '*': result = leftVal * rightVal; break;
        case '/': result = Math.floor(leftVal / rightVal); break;
        case '%': result = leftVal % rightVal; break;
      }

      const prevVal = variables[varName];
      variables[varName] = result.toString();

      description = `${varName} = ${left} ${op} ${right} = ${result}`;
      stepVars.push({
        name: varName,
        value: result.toString(),
        changed: true,
        previousValue: prevVal
      });
    }

    // 简单赋值 a = 10 或 a = b
    const simpleAssignMatch = trimmed.match(/^(\w+)\s*=\s*(\w+|\d+|0x[0-9a-fA-F]+);?$/);
    if (simpleAssignMatch && !declMatch && !ptrDeclMatch && !arrAccessMatch && !assignMatch) {
      const varName = simpleAssignMatch[1];
      let value = simpleAssignMatch[2].replace(';', '');

      // 如果右边是变量，取其值
      if (variables[value] && !value.match(/^\d/) && !value.startsWith('0x')) {
        value = variables[value];
      }

      const prevVal = variables[varName];
      variables[varName] = value;

      description = `${varName} = ${value}`;
      stepVars.push({
        name: varName,
        value: value,
        changed: true,
        previousValue: prevVal
      });
    }

    // printf 跳过，但如果有变量则显示当前状态
    if (trimmed.includes('printf')) {
      // 显示当前所有变量状态
      if (Object.keys(variables).length > 0) {
        description = '输出结果';
        for (const [name, val] of Object.entries(variables)) {
          stepVars.push({
            name,
            value: val,
            changed: false
          });
        }
      }
    }

    if (description || stepVars.length > 0) {
      steps.push({
        step: stepNum++,
        line: lineIdx + 1,
        description: description || trimmed,
        variables: stepVars
      });
    }
  });

  return steps;
}
