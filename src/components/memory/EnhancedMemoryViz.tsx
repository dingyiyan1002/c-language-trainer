import { memo, useState, useEffect, useRef, useCallback } from 'react';

export interface StepState {
  step: number;
  line: number;
  description: string;
  variables: Array<{
    name: string;
    value: string;
    binary?: string;
    decimal?: string;
    hex?: string;
    changed?: boolean;
    previousValue?: string;
  }>;
}

interface EnhancedMemoryVizProps {
  steps: StepState[];
  isDarkMode?: boolean;
  autoPlay?: boolean;
  playSpeed?: number;
}

export const EnhancedMemoryViz = memo(function EnhancedMemoryViz({
  steps,
  isDarkMode = true,
  autoPlay = false,
  playSpeed = 1500
}: EnhancedMemoryVizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [speed, setSpeed] = useState(playSpeed);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const speedRef = useRef(speed); // 使用 ref 存储 speed，避免定时器重新创建

  // 同步 speedRef
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  // 自动播放逻辑 - 修复：使用 speedRef 避免定时器重新创建
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    // 如果已经到达最后一步，停止播放
    if (currentStep >= steps.length - 1) {
      setIsPlaying(false);
      return;
    }

    timerRef.current = setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, speedRef.current); // 使用 ref 读取最新速度

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying, currentStep, steps.length]); // 移除 speed 依赖

  // 键盘快捷键 - 修复：在自动播放时禁用步进快捷键
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return; // 在输入框中不拦截快捷键
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        if (!isPlaying) {
          setCurrentStep(prev => Math.min(steps.length - 1, prev + 1));
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        if (!isPlaying) {
          setCurrentStep(prev => Math.max(0, prev - 1));
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        setIsPlaying(prev => !prev);
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        e.stopPropagation();
        setCurrentStep(0);
        setIsPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [isPlaying, steps.length]);

  const handleStepChange = useCallback((index: number) => {
    // 点击跳转时检查是否需要停止播放
    setCurrentStep(Math.max(0, Math.min(steps.length - 1, index)));
  }, [steps.length]);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const handleSpeedChange = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
  }, []);

  if (!steps || steps.length === 0) {
    return null;
  }

  const step = steps[currentStep];
  const totalSteps = steps.length;

  const toBinary = useCallback((val: string): string => {
    try {
      let num: number;
      if (val.startsWith('0x') || val.startsWith('0X')) {
        num = parseInt(val, 16);
      } else {
        num = parseInt(val, 10);
      }
      if (isNaN(num)) return val;
      const binary = num.toString(2).padStart(8, '0').padStart(32, '0');
      return binary.slice(-32).replace(/(\d{4})/g, '$1 ').trim();
    } catch {
      return '';
    }
  }, []);

  const toHex = useCallback((val: string): string => {
    try {
      let num: number;
      if (val.startsWith('0x') || val.startsWith('0X')) {
        return val;
      }
      num = parseInt(val, 10);
      if (isNaN(num)) return val;
      return '0x' + num.toString(16).toUpperCase().padStart(8, '0');
    } catch {
      return val;
    }
  }, []);

  return (
    <div className={`rounded-xl overflow-hidden animate-fadeIn ${isDarkMode ? 'bg-[#0d1117] border border-purple-500/30' : 'bg-white border border-purple-200'}`}>
      {/* 头部 */}
      <div className={`flex items-center justify-between px-4 py-3 ${isDarkMode ? 'bg-purple-500/10 border-b border-purple-500/20' : 'bg-purple-50 border-b border-purple-100'}`}>
        <div className="flex items-center gap-2">
          <span className="text-lg">BarChart3</span>
          <span className={`font-medium ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>执行步骤可视化</span>
        </div>
        <div className="flex items-center gap-2">
          {/* 速度选择 */}
          <div className="flex items-center gap-1 mr-2">
            {[
              { label: '0.5x', value: 2000 },
              { label: '1x', value: 1000 },
              { label: '2x', value: 500 }
            ].map((s) => (
              <button
                key={s.value}
                onClick={() => handleSpeedChange(s.value)}
                className={`px-2 py-1 rounded text-xs transition-all ${
                  speed === s.value
                    ? 'bg-purple-500 text-white'
                    : isDarkMode
                      ? 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
          {/* 播放/暂停 */}
          <button
            onClick={togglePlay}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
              isPlaying
                ? 'bg-amber-500 text-white hover:bg-amber-600'
                : 'bg-emerald-500 text-white hover:bg-emerald-600'
            }`}
          >
            {isPlaying ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
                暂停
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                播放
              </>
            )}
          </button>
          <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} ml-2`}>
            {currentStep + 1} / {totalSteps}
          </span>
        </div>
      </div>

      {/* 进度条 */}
      <div className="px-4 py-2">
        <div className={`h-1.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* 步骤导航 */}
      <div className="flex gap-1 px-4 py-2 overflow-x-auto border-t border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}">
        {steps.map((s, idx) => {
          const isCurrent = idx === currentStep;
          const isPast = idx < currentStep;
          return (
            <button
              key={idx}
              onClick={() => handleStepChange(idx)}
              className={`px-3 py-1.5 text-xs rounded-lg transition-all whitespace-nowrap flex items-center gap-1 ${
                isCurrent
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25 scale-105'
                  : isPast
                    ? isDarkMode
                      ? 'bg-slate-800 text-emerald-400 hover:bg-slate-700'
                      : 'bg-slate-200 text-emerald-600 hover:bg-slate-300'
                    : isDarkMode
                      ? 'bg-slate-800/50 text-slate-500 hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
              }`}
            >
              {isPast && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
              第{s.line}行
            </button>
          );
        })}
      </div>

      {/* 当前步骤详情 */}
      <div className="p-4 space-y-4">
        {/* 步骤说明 */}
        <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>第{step.line}行</span>
            {step.description.includes('【重点】') && (
              <span className="text-xs bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">重点</span>
            )}
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            {step.description.replace(/【重点】/g, '')}
          </p>
        </div>

        {/* 变量状态表格 - 带动画 */}
        {step.variables.length > 0 && (
          <div className="space-y-2">
            <div className={`text-xs font-medium ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>变量状态</div>
            {step.variables.map((v, idx) => {
              const binary = v.binary || toBinary(v.value);
              const hex = v.hex || toHex(v.value);
              const decimal = v.decimal || (() => {
                try {
                  if (v.value.startsWith('0x')) return parseInt(v.value, 16).toString();
                  return v.value;
                } catch { return v.value; }
              })();

              return (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border transition-all duration-300 animate-fadeIn ${
                    v.changed
                      ? isDarkMode
                        ? 'bg-green-500/10 border-green-500/30 shadow-lg shadow-green-500/10'
                        : 'bg-green-50 border-green-200 shadow-lg shadow-green-500/10'
                      : isDarkMode
                        ? 'bg-slate-800/50 border-slate-700'
                        : 'bg-white border-slate-200'
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono font-medium ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                        {v.name}
                      </span>
                      {v.changed && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded animate-pulse">
                          已更新
                        </span>
                      )}
                    </div>
                    {v.changed && v.previousValue && (
                      <span className="text-xs text-slate-400">
                        <span className={isDarkMode ? 'text-slate-500' : 'text-slate-400'}>原:</span>
                        <span className={`line-through ml-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{v.previousValue}</span>
                        <span className="mx-1">→</span>
                        <span className="text-green-400 font-bold">{v.value}</span>
                      </span>
                    )}
                  </div>

                  {/* 二进制视图 - 位显示 */}
                  <div className="mb-2">
                    <span className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} mr-2`}>二进制:</span>
                    <div className="inline-flex gap-0.5 mt-1">
                      {binary.split(' ').map((group, groupIdx) => (
                        <div key={groupIdx} className="flex gap-0.5">
                          {group.split('').map((bit, bitIdx) => (
                            <span
                              key={`${groupIdx}-${bitIdx}`}
                              className={`w-4 h-5 text-xs flex items-center justify-center rounded ${
                                bit === '1'
                                  ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50'
                                  : 'bg-slate-700/50 text-slate-500 border border-slate-600/50'
                              }`}
                            >
                              {bit}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 十六进制和十进制 */}
                  <div className="flex gap-4 text-xs">
                    <div className={`flex items-center gap-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      <span className={isDarkMode ? 'text-slate-500' : 'text-slate-400'}>HEX:</span>
                      <span className="font-mono">{hex}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                      <span className={isDarkMode ? 'text-slate-500' : 'text-slate-400'}>DEC:</span>
                      <span className="font-mono">{decimal}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 导航按钮 - 带动画 */}
        <div className="flex justify-between items-center pt-4 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}">
          <button
            onClick={() => handleStepChange(currentStep - 1)}
            disabled={currentStep === 0}
            className={`group px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              currentStep === 0
                ? 'opacity-40 cursor-not-allowed'
                : isDarkMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:translate-x-[-2px]'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:translate-x-[-2px]'
            }`}
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            上一步
          </button>

          <div className="flex items-center gap-2 text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}">
            <span>快捷键:</span>
            <kbd className={`px-2 py-1 rounded ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>←</kbd>
            <kbd className={`px-2 py-1 rounded ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>→</kbd>
            <kbd className={`px-2 py-1 rounded ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>Enter</kbd>
          </div>

          <button
            onClick={() => handleStepChange(currentStep + 1)}
            disabled={currentStep === totalSteps - 1}
            className={`group px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              currentStep === totalSteps - 1
                ? 'opacity-40 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25 hover:translate-x-[2px]'
            }`}
          >
            下一步
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});

export default EnhancedMemoryViz;

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
