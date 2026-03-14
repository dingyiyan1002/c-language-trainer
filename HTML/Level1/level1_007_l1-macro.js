window.LESSON_DATA = {
  meta: {
    id: 'l1-macro',
    title: '宏和预处理',
    chapter: 'level1',
    index: 7,
    filename: 'macro-config.c',
    keyPoints: ['#define 宏', 'BIT 位掩码宏', '条件编译']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'MAX_SENSORS' }, { type: 'ws', text: ' ' }, { type: 'num', text: '8' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 最大传感器数' }] },
    { num: 5, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'BIT' }, { type: 'punc', text: '(' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }] },
    { num: 6, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'DEBUG' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 调试开关' }] },
    { num: 7, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 8, tokens: [{ type: 'pp', text: '#ifdef' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'DEBUG' }] },
    { num: 9, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'LOG' }, { type: 'punc', text: '(' }, { type: 'id', text: 'msg' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'id', text: 'msg' }, { type: 'punc', text: ')' }] },
    { num: 10, tokens: [{ type: 'pp', text: '#else' }] },
    { num: 11, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'LOG' }, { type: 'punc', text: '(' }, { type: 'id', text: 'msg' }, { type: 'punc', text: ')' }] },
    { num: 12, tokens: [{ type: 'pp', text: '#endif' }] },
    { num: 13, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 14, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'reg' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x00' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'reg' }, { type: 'ws', text: ' ' }, { type: 'op', text: '|=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'BIT' }, { type: 'punc', text: '(' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 设置 bit0' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'reg' }, { type: 'ws', text: ' ' }, { type: 'op', text: '|=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'BIT' }, { type: 'punc', text: '(' }, { type: 'num', text: '3' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 设置 bit3' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'LOG' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[INIT] reg = 0x%02X\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'reg' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'count' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'MAX_SENSORS' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'LOG' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[INFO] Max sensors: %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'count' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 21, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 22, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'reg', name: 'reg', type: 'uint8_t', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'count', name: 'count', type: 'int', addr: '0x7ffc01', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 5 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习宏和预处理', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 4, executedLines: [1, 2], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '预处理指令 #define MAX_SENSORS 8', color: 'purple', actor: 'Preprocessor', detail: '预处理器在编译前处理#define 指令。MAX_SENSORS 被定义为 8，代码中所有 MAX_SENSORS 会被替换为 8。这是文本替换，不是变量赋值。' }, prediction: { question: '#define MAX_SENSORS 8 是变量定义吗？', options: ['是，int 类型变量', '否，是宏定义', '是，const 常量'], answer: 1 }, misconception: null, actor: 'Preprocessor', target: 'preprocessor', timing: 'pre-compile' },
    { step: 2, line: 5, executedLines: [1, 2, 3, 4], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '定义 BIT(n) 宏：(1 << n)', color: 'purple', actor: 'Preprocessor', detail: 'BIT(n) 是带参数的宏。BIT(0) 展开为 (1 << 0) = 1，BIT(3) 展开为 (1 << 3) = 8。嵌入式中常用这种宏生成位掩码，比直接写 0x01、0x08 更清晰。' }, prediction: null, misconception: null, actor: 'Preprocessor', target: 'preprocessor', timing: 'pre-compile' },
    { step: 3, line: 6, executedLines: [1, 2, 3, 4, 5], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '#define DEBUG 1，定义调试开关', color: 'purple', actor: 'Preprocessor', detail: 'DEBUG 宏用于条件编译。#ifdef DEBUG 可以控制是否包含调试代码。实际项目中常用这种模式控制日志输出。' }, prediction: null, misconception: null, actor: 'Preprocessor', target: 'preprocessor', timing: 'pre-compile' },
    { step: 4, line: 8, executedLines: [1, 2, 3, 4, 5, 6], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '#ifdef DEBUG，条件编译开始', color: 'purple', actor: 'Preprocessor', detail: '#ifdef 检查宏是否已定义。DEBUG 已定义为 1，所以条件为真，预处理器会包含#10 的 LOG 宏定义（带 printf 的版本）。如果 DEBUG 未定义，会使用#else 后的空定义。' }, prediction: { question: '如果删除#define DEBUG 1，LOG 宏会是什么？', options: ['printf(msg)', '空 (不输出)', '报错'], answer: 1 }, misconception: null, actor: 'Preprocessor', target: 'preprocessor', timing: 'pre-compile' },
    { step: 5, line: 15, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], vars: { reg: 0 }, highlightVar: 'reg', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 uint8_t reg = 0x00，寄存器', color: 'green', actor: 'CPU', detail: 'reg 模拟硬件寄存器，初始值为 0x00。嵌入式开发中常用宏定义寄存器位，提高代码可读性。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:reg', timing: 'main-loop' },
    { step: 6, line: 16, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], vars: { reg: 1 }, highlightVar: 'reg', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'reg |= BIT(0)，展开为 reg |= (1 << 0)', color: 'green', actor: 'CPU', detail: 'BIT(0) 宏展开：(1 << 0) = 1。reg |= 1 设置 bit0。0x00 | 0x01 = 0x01。使用宏比直接写 0x01 更清晰，代码自说明意图。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:reg', timing: 'main-loop' },
    { step: 7, line: 17, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], vars: { reg: 9 }, highlightVar: 'reg', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'reg |= BIT(3)，展开为 reg |= (1 << 3)', color: 'green', actor: 'CPU', detail: 'BIT(3) 宏展开：(1 << 3) = 8 = 0x08。reg |= 8: 0x01 | 0x08 = 0x09 = 00001001。bit0 和 bit3 被设置。宏让位操作更直观。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:reg', timing: 'main-loop' },
    { step: 8, line: 18, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], vars: { reg: 9 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INIT] reg = 0x09' }], explanation: { icon: 'terminal', text: 'LOG 宏展开为 printf，输出寄存器值', color: 'green', actor: 'CPU', detail: '因为 DEBUG=1，LOG(msg) 展开为 printf(msg)。输出 [INIT] reg = 0x09。如果删除#define DEBUG 1，LOG 为空定义，这行代码会被预处理器删除（无输出）。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 9, line: 19, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], vars: { reg: 9, count: 8 }, highlightVar: 'count', isDanger: false, output: [{ type: 'success', text: '[INIT] reg = 0x09' }], explanation: { icon: 'memory', text: '声明 int count = MAX_SENSORS', color: 'blue', actor: 'CPU', detail: 'MAX_SENSORS 宏展开为 8。count = 8。使用宏定义常量便于维护：如果要改最大传感器数，只需改#define 一处。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:count', timing: 'main-loop' },
    { step: 10, line: 20, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], vars: { reg: 9, count: 8 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INIT] reg = 0x09' }, { type: 'success', text: '[INFO] Max sensors: 8' }], explanation: { icon: 'terminal', text: 'LOG 输出：[INFO] Max sensors: 8', color: 'green', actor: 'CPU', detail: '调试日志输出系统配置信息。这种条件编译的日志系统在嵌入式开发中非常实用：发布时关闭 DEBUG 可移除所有日志代码，不占空间。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '#define 定义常量和宏，BIT(n) 生成位掩码，#ifdef 条件编译控制代码包含',
    pitfalls: [
      '宏是文本替换不是变量，#define MAX 8 不占运行时内存',
      'BIT(n) 宏展开为 (1 << n)，BIT(3) = 8 = 0x08，用于设置特定位',
      '#ifdef DEBUG 条件编译可控制调试代码，发布时关闭 DEBUG 移除日志'
    ],
    transferQuestion: '如果要关闭所有 LOG 输出，应该修改哪一行代码？',
    miniExercise: {
      bugCode: '#define BIT(n) 1 << n\\nuint8_t x = BIT(0) | BIT(3);  // 这个宏有什么问题？',
      hint: '宏参数没有括号，优先级可能出问题。应该写成 #define BIT(n) (1 << n)'
    }
  }
};
