window.LESSON_DATA = {
  meta: {
    id: 'l1-function',
    title: '函数',
    chapter: 'level1',
    index: 5,
    filename: 'function-error.c',
    keyPoints: ['函数设计', '返回值规范', '错误码']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'sensor_init' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[INIT] Sensor initializing...\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 0=成功' }] },
    { num: 7, tokens: [{ type: 'punc', text: '}' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'sensor_read' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'value' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'value' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 11, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'op', text: '-' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// -1=空指针错误' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'op', text: '*' }, { type: 'id', text: 'value' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '42' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 模拟读数' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 0=成功' }] },
    { num: 15, tokens: [{ type: 'punc', text: '}' }] },
    { num: 16, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 17, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ret' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'sensor_init' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'ret' }, { type: 'ws', text: ' ' }, { type: 'op', text: '!=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 20, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[ERROR] Init failed: %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ret' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 21, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ret' }, { type: 'punc', text: ';' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sensor_value' }, { type: 'punc', text: ';' }] },
    { num: 24, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'ret' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'sensor_read' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'sensor_value' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 25, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'ret' }, { type: 'ws', text: ' ' }, { type: 'op', text: '!=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 26, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[ERROR] Read failed: %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ret' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 27, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ret' }, { type: 'punc', text: ';' }] },
    { num: 28, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 29, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[OK] Sensor value: %u\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sensor_value' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 30, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 31, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'ret', name: 'ret', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'sensor_value', name: 'sensor_value', type: 'uint8_t', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 6 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习函数设计与错误处理', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 18, executedLines: [16, 17], vars: { ret: 0 }, highlightVar: 'ret', isDanger: false, output: [], explanation: { icon: 'gear', text: '调用 sensor_init() 函数，返回 0 表示成功', color: 'green', actor: 'CPU', detail: 'CPU 执行函数调用：跳转到 sensor_init 代码，执行 printf 输出初始化信息，返回 0 存入 ret。嵌入式驱动开发中，0 表示成功是行业惯例。' }, prediction: { question: '嵌入式 C 函数返回值 0 通常表示什么？', options: ['失败', '成功', '不确定'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:ret', timing: 'function-call' },
    { step: 2, line: 5, executedLines: [16, 17, 18], vars: { ret: 0 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INIT] Sensor initializing...' }], explanation: { icon: 'terminal', text: 'sensor_init 内输出初始化信息', color: 'green', actor: 'CPU', detail: '函数内部执行 printf，输出传感器初始化日志。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'function-body' },
    { step: 3, line: 19, executedLines: [16, 17, 18, 6, 7], vars: { ret: 0 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INIT] Sensor initializing...' }], explanation: { icon: 'target', text: '判断 ret!=0，即 0!=0 为假', color: 'orange', actor: 'CPU', detail: 'ret=0 表示初始化成功，不进入错误处理分支。这是标准的错误检查模式：检查返回值是否非 0(失败)。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'condition-check' },
    { step: 4, line: 23, executedLines: [16, 17, 18, 6, 7, 19, 20, 21, 22], vars: { ret: 0 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INIT] Sensor initializing...' }], explanation: { icon: 'memory', text: '声明 uint8_t 变量 sensor_value，用于存储传感器读数', color: 'yellow', actor: 'CPU', detail: 'sensor_value 未初始化，内容是栈上残留数据 (不确定)。sensor_read 函数将通过指针参数写入实际值。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:sensor_value', timing: 'main-loop' },
    { step: 5, line: 24, executedLines: [16, 17, 18, 6, 7, 19, 20, 21, 22, 23], vars: { ret: 0 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INIT] Sensor initializing...' }], explanation: { icon: 'gear', text: '调用 sensor_read(&sensor_value)，传递变量地址', color: 'green', actor: 'CPU', detail: '&sensor_value 是取地址运算符，得到 sensor_value 的内存地址。函数接收指针参数，可以通过指针间接修改变量。这是 C 语言实现"引用传递"的方式。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'function-call' },
    { step: 6, line: 10, executedLines: [16, 17, 18, 6, 7, 19, 20, 21, 22, 23, 24], vars: { ret: 0 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INIT] Sensor initializing...' }], explanation: { icon: 'target', text: 'sensor_read 内判断 value==NULL', color: 'orange', actor: 'CPU', detail: '函数第一步检查指针有效性。这是防御性编程：在解引用指针前必须检查是否为 NULL，防止段错误。' }, prediction: { question: '为什么要检查指针是否为 NULL？', options: ['防止编译错误', '防止段错误', '提高性能'], answer: 1 }, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'function-body' },
    { step: 7, line: 13, executedLines: [16, 17, 18, 6, 7, 19, 20, 21, 22, 23, 24, 9, 10, 11, 12], vars: { ret: 0, sensor_value: 42 }, highlightVar: 'sensor_value', isDanger: false, output: [{ type: 'success', text: '[INIT] Sensor initializing...' }], explanation: { icon: 'bolt', text: '*value = 42，通过指针写入传感器读数', color: 'green', actor: 'CPU', detail: 'value 指针指向 sensor_value 的地址。*value=42 将 42 写入该地址，sensor_value 现在等于 42。这是指针的核心用途：间接访问和修改变量。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:sensor_value', timing: 'function-body' },
    { step: 8, line: 25, executedLines: [16, 17, 18, 6, 7, 19, 20, 21, 22, 23, 24, 9, 10, 11, 12, 13, 14, 15], vars: { ret: 0, sensor_value: 42 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INIT] Sensor initializing...' }], explanation: { icon: 'target', text: '判断 ret!=0，即 0!=0 为假', color: 'orange', actor: 'CPU', detail: 'sensor_read 返回 0 表示成功，不进入错误处理分支。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'condition-check' },
    { step: 9, line: 29, executedLines: [16, 17, 18, 6, 7, 19, 20, 21, 22, 23, 24, 9, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28], vars: { ret: 0, sensor_value: 42 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INIT] Sensor initializing...' }, { type: 'success', text: '[OK] Sensor value: 42' }], explanation: { icon: 'terminal', text: '输出传感器读数：[OK] Sensor value: 42', color: 'green', actor: 'CPU', detail: '%u 是无符号十进制格式符。sensor_value=42 被正确输出。这是典型的传感器读取流程：初始化→读取→错误检查→使用数据。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '函数返回值 0 表示成功、负数表示错误码，指针参数用于输出数据，使用前必须检查 NULL',
    pitfalls: [
      '嵌入式 C 函数返回值 0 表示成功，非 0(通常是负数) 表示错误码',
      '指针参数必须在解引用前检查 NULL，否则可能段错误',
      '错误应该立即检查并处理 (fail fast)，防止错误传播'
    ],
    transferQuestion: '如果 sensor_read(NULL) 传入空指针，函数会返回什么？',
    miniExercise: {
      bugCode: 'int *ptr = NULL;\n*ptr = 42;  // 这里会发生什么？',
      hint: '空指针解引用会导致段错误 (Segmentation Fault)'
    }
  }
};
