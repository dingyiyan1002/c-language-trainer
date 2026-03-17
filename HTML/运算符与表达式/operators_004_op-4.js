window.LESSON_DATA = {
  meta: {
    chapterId: 'operators',
    lessonId: 'op-4',
    title: '位运算符：底层二进制操作',
    index: 4,
    filename: 'operators_004_op-4.js',
    keyPoints: ['按位与&或|异或^', '按位取反~', '左移<<和右移>>', '位运算的实际应用']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 位运算符：直接操作二进制位' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '12' },
      { type: 'punc', text: ';' }
    ]},
    { num: 3, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// a = 12 = 00001100(二进制)' }
    ]},
    { num: 4, tokens: [] },
    { num: 5, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// b = 10 = 00001010(二进制)' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// r1 = 8 = 00001000' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 按位与：两位都为 1 时结果为 1' }
    ]},
    { num: 10, tokens: [] },
    { num: 11, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '|' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// r2 = 14 = 00001110' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 按位或：至少一个为 1 时结果为 1' }
    ]},
    { num: 13, tokens: [] },
    { num: 14, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r3' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '^' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// r3 = 6 = 00000110' }
    ]},
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 按位异或：两位不同时为 1，相同时为 0' }
    ]},
    { num: 16, tokens: [] },
    { num: 17, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r4' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '~' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// r4 = -13(补码)' }
    ]},
    { num: 18, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 按位取反：0 变 1，1 变 0' }
    ]},
    { num: 19, tokens: [] },
    { num: 20, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r5' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<<' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// r5 = 48 = 12×4' }
    ]},
    { num: 21, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 左移 2 位：等价于乘以 2²=4' }
    ]},
    { num: 22, tokens: [] },
    { num: 23, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r6' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>>' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// r6 = 6 = 12/2' }
    ]},
    { num: 24, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 右移 1 位：等价于除以 2¹=2' }
    ]},
    { num: 25, tokens: [] },
    { num: 26, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]},
    { num: 27, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// flags 用于位标志测试' }
    ]},
    { num: 28, tokens: [] },
    { num: 29, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'READ' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 0001' }
    ]},
    { num: 30, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 读权限标志' }
    ]},
    { num: 31, tokens: [] },
    { num: 32, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'WRITE' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 0010' }
    ]},
    { num: 33, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 写权限标志' }
    ]},
    { num: 34, tokens: [] },
    { num: 35, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'EXEC' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '4' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 0100' }
    ]},
    { num: 36, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 执行权限标志' }
    ]},
    { num: 37, tokens: [] },
    { num: 38, tokens: [
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '|=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'READ' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// flags = 0|1 = 1' }
    ]},
    { num: 39, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 设置 READ 标志' }
    ]},
    { num: 40, tokens: [] },
    { num: 41, tokens: [
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '|=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'WRITE' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// flags = 1|2 = 3' }
    ]},
    { num: 42, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 设置 WRITE 标志' }
    ]},
    { num: 43, tokens: [] },
    { num: 44, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'hasRead' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'READ' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// hasRead = 1(有读权限)' }
    ]},
    { num: 45, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 检查 READ 标志' }
    ]},
    { num: 46, tokens: [] },
    { num: 47, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'hasExec' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'EXEC' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// hasExec = 0(无执行权限)' }
    ]},
    { num: 48, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 检查 EXEC 标志' }
    ]},
    { num: 49, tokens: [] },
    { num: 50, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'a', name: 'a', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '12' },
    { key: 'b', name: 'b', type: 'int', addr: '0x7ffc14', glowColor: 'rgba(168,85,247,0.35)', appearStep: 4, value: '10' },
    { key: 'r1', name: 'r1', type: 'int', addr: '0x7ffc18', glowColor: 'rgba(59,130,246,0.35)', appearStep: 7, value: '8' },
    { key: 'r2', name: 'r2', type: 'int', addr: '0x7ffc1c', glowColor: 'rgba(249,115,22,0.35)', appearStep: 10, value: '14' },
    { key: 'r3', name: 'r3', type: 'int', addr: '0x7ffc20', glowColor: 'rgba(250,204,21,0.35)', appearStep: 13, value: '6' },
    { key: 'r4', name: 'r4', type: 'int', addr: '0x7ffc24', glowColor: 'rgba(239,68,68,0.35)', appearStep: 16, value: '-13' },
    { key: 'r5', name: 'r5', type: 'int', addr: '0x7ffc28', glowColor: 'rgba(34,197,94,0.35)', appearStep: 19, value: '48' },
    { key: 'r6', name: 'r6', type: 'int', addr: '0x7ffc2c', glowColor: 'rgba(168,85,247,0.35)', appearStep: 22, value: '6' },
    { key: 'flags', name: 'flags', type: 'int', addr: '0x7ffc30', glowColor: 'rgba(59,130,246,0.35)', appearStep: 25, value: '3' },
    { key: 'READ', name: 'READ', type: 'int', addr: '0x7ffc34', glowColor: 'rgba(249,115,22,0.35)', appearStep: 28, value: '1' },
    { key: 'WRITE', name: 'WRITE', type: 'int', addr: '0x7ffc38', glowColor: 'rgba(250,204,21,0.35)', appearStep: 31, value: '2' },
    { key: 'EXEC', name: 'EXEC', type: 'int', addr: '0x7ffc3c', glowColor: 'rgba(239,68,68,0.35)', appearStep: 34, value: '4' },
    { key: 'hasRead', name: 'hasRead', type: 'int', addr: '0x7ffc40', glowColor: 'rgba(34,197,94,0.35)', appearStep: 43, value: '1' },
    { key: 'hasExec', name: 'hasExec', type: 'int', addr: '0x7ffc44', glowColor: 'rgba(168,85,247,0.35)', appearStep: 46, value: '0' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'rocket',
        text: '准备执行代码',
        color: 'blue',
        actor: 'System',
        detail: '程序即将开始运行，演示位运算符'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：位运算符 - 直接操作二进制位',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示底层二进制操作'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { a: 12 },
      highlightVar: 'a',
      explanation: {
        icon: 'memory',
        text: 'int a = 12，二进制：00001100',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将 12 写入 a。12 的二进制表示：8+4=12，即 00001100'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { a: 12 },
      explanation: {
        icon: 'info',
        text: '阅读注释：a = 12 = 00001100(二进制)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，显示 a 的二进制表示'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3],
      vars: { a: 12, b: 10 },
      highlightVar: 'b',
      explanation: {
        icon: 'memory',
        text: 'int b = 10，二进制：00001010',
        color: 'purple',
        actor: 'CPU',
        detail: 'MOV 指令将 10 写入 b。10 的二进制表示：8+2=10，即 00001010'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { a: 12, b: 10 },
      explanation: {
        icon: 'info',
        text: '阅读注释：b = 10 = 00001010(二进制)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，显示 b 的二进制表示'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 3, 5, 6],
      vars: { a: 12, b: 10 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r1 = 8 = 00001000',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示按位与运算'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { a: 12, b: 10, r1: 8 },
      highlightVar: 'r1',
      explanation: {
        icon: 'calculator',
        text: 'a & b: 00001100 & 00001010 = 00001000 = 8',
        color: 'orange',
        actor: 'CPU',
        detail: '按位与：对应位都为 1 时结果为 1。第 3 位 (8) 都为 1，结果 8'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { a: 12, b: 10, r1: 8 },
      explanation: {
        icon: 'info',
        text: '阅读注释：按位与：两位都为 1 时结果为 1',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释&运算符规则'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9],
      vars: { a: 12, b: 10, r1: 8 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r2 = 14 = 00001110',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示按位或运算'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { a: 12, b: 10, r1: 8, r2: 14 },
      highlightVar: 'r2',
      explanation: {
        icon: 'calculator',
        text: 'a | b: 00001100 | 00001010 = 00001110 = 14',
        color: 'yellow',
        actor: 'CPU',
        detail: '按位或：对应位至少一个为 1 时结果为 1。第 1,2,3 位有 1，结果 8+4+2=14'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { a: 12, b: 10, r1: 8, r2: 14 },
      explanation: {
        icon: 'info',
        text: '阅读注释：按位或：至少一个为 1 时结果为 1',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释 | 运算符规则'
      }
    },
    {
      step: 12,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12],
      vars: { a: 12, b: 10, r1: 8, r2: 14 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r3 = 6 = 00000110',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示按位异或运算'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6 },
      highlightVar: 'r3',
      explanation: {
        icon: 'calculator',
        text: 'a ^ b: 00001100 ^ 00001010 = 00000110 = 6',
        color: 'red',
        actor: 'CPU',
        detail: '按位异或：对应位不同时为 1。第 1 位 (2) 和第 2 位 (4) 不同，结果 2+4=6'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6 },
      explanation: {
        icon: 'info',
        text: '阅读注释：按位异或：两位不同时为 1，相同时为 0',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释^运算符规则'
      }
    },
    {
      step: 15,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r4 = -13(补码)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示按位取反'
      }
    },
    {
      step: 16,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13 },
      highlightVar: 'r4',
      explanation: {
        icon: 'calculator',
        text: '~a: ~00001100 = 11110011 = -13(补码)',
        color: 'green',
        actor: 'CPU',
        detail: '按位取反：0 变 1，1 变 0。在补码表示中，~12 = -13 (符号位也取反)'
      }
    },
    {
      step: 17,
      line: 18,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13 },
      explanation: {
        icon: 'info',
        text: '阅读注释：按位取反：0 变 1，1 变 0',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释~运算符规则'
      }
    },
    {
      step: 18,
      line: 20,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r5 = 48 = 12×4',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示左移运算'
      }
    },
    {
      step: 19,
      line: 20,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48 },
      highlightVar: 'r5',
      explanation: {
        icon: 'arrow-right',
        text: 'a << 2: 00001100 << 2 = 00110000 = 48',
        color: 'purple',
        actor: 'CPU',
        detail: '左移 2 位：所有位向左移动 2 位，右侧补 0。12×2² = 12×4 = 48'
      }
    },
    {
      step: 20,
      line: 21,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48 },
      explanation: {
        icon: 'info',
        text: '阅读注释：左移 2 位：等价于乘以 2²=4',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释左移的数学意义'
      }
    },
    {
      step: 21,
      line: 23,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r6 = 6 = 12/2',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示右移运算'
      }
    },
    {
      step: 22,
      line: 23,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6 },
      highlightVar: 'r6',
      explanation: {
        icon: 'arrow-left',
        text: 'a >> 1: 00001100 >> 1 = 00000110 = 6',
        color: 'cyan',
        actor: 'CPU',
        detail: '右移 1 位：所有位向右移动 1 位，左侧补符号位。12/2¹ = 12/2 = 6'
      }
    },
    {
      step: 23,
      line: 24,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6 },
      explanation: {
        icon: 'info',
        text: '阅读注释：右移 1 位：等价于除以 2¹=2',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释右移的数学意义'
      }
    },
    {
      step: 24,
      line: 26,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6 },
      explanation: {
        icon: 'info',
        text: '阅读注释：flags 用于位标志测试',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示位标志应用'
      }
    },
    {
      step: 25,
      line: 26,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 0 },
      highlightVar: 'flags',
      explanation: {
        icon: 'memory',
        text: 'int flags = 0，用于存储位标志',
        color: 'yellow',
        actor: 'CPU',
        detail: 'flags 变量初始化为 0，将用作位标志容器'
      }
    },
    {
      step: 26,
      line: 29,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 0 },
      explanation: {
        icon: 'info',
        text: '阅读注释：READ = 1 = 0001',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将定义权限标志'
      }
    },
    {
      step: 27,
      line: 29,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 0, READ: 1 },
      highlightVar: 'READ',
      explanation: {
        icon: 'flag',
        text: 'READ = 1 (0001)，读权限标志',
        color: 'green',
        actor: 'CPU',
        detail: '定义位标志常量：READ 占用第 0 位 (2⁰=1)'
      }
    },
    {
      step: 28,
      line: 30,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 0, READ: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：读权限标志',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 READ 标志用途'
      }
    },
    {
      step: 29,
      line: 32,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 0, READ: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：WRITE = 2 = 0010',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将定义写权限标志'
      }
    },
    {
      step: 30,
      line: 32,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 0, READ: 1, WRITE: 2 },
      highlightVar: 'WRITE',
      explanation: {
        icon: 'flag',
        text: 'WRITE = 2 (0010)，写权限标志',
        color: 'purple',
        actor: 'CPU',
        detail: '定义位标志常量：WRITE 占用第 1 位 (2¹=2)'
      }
    },
    {
      step: 31,
      line: 33,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 0, READ: 1, WRITE: 2 },
      explanation: {
        icon: 'info',
        text: '阅读注释：写权限标志',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 WRITE 标志用途'
      }
    },
    {
      step: 32,
      line: 35,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 0, READ: 1, WRITE: 2 },
      explanation: {
        icon: 'info',
        text: '阅读注释：EXEC = 4 = 0100',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将定义执行权限标志'
      }
    },
    {
      step: 33,
      line: 35,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 0, READ: 1, WRITE: 2, EXEC: 4 },
      highlightVar: 'EXEC',
      explanation: {
        icon: 'flag',
        text: 'EXEC = 4 (0100)，执行权限标志',
        color: 'red',
        actor: 'CPU',
        detail: '定义位标志常量：EXEC 占用第 2 位 (2²=4)'
      }
    },
    {
      step: 34,
      line: 36,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 0, READ: 1, WRITE: 2, EXEC: 4 },
      explanation: {
        icon: 'info',
        text: '阅读注释：执行权限标志',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 EXEC 标志用途'
      }
    },
    {
      step: 35,
      line: 38,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 0, READ: 1, WRITE: 2, EXEC: 4 },
      explanation: {
        icon: 'info',
        text: '阅读注释：flags = 0|1 = 1',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将设置 READ 标志'
      }
    },
    {
      step: 36,
      line: 38,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36, 38],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 1, READ: 1, WRITE: 2, EXEC: 4 },
      highlightVar: 'flags',
      explanation: {
        icon: 'memory',
        text: 'flags |= READ: flags = 0 | 1 = 1',
        color: 'orange',
        actor: 'CPU',
        detail: '使用|=设置标志位：0000 | 0001 = 0001。现在 flags 第 0 位为 1，表示有读权限'
      }
    },
    {
      step: 37,
      line: 39,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36, 38],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 1, READ: 1, WRITE: 2, EXEC: 4 },
      explanation: {
        icon: 'info',
        text: '阅读注释：设置 READ 标志',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认标志已设置'
      }
    },
    {
      step: 38,
      line: 41,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36, 38, 39],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 1, READ: 1, WRITE: 2, EXEC: 4 },
      explanation: {
        icon: 'info',
        text: '阅读注释：flags = 1|2 = 3',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将设置 WRITE 标志'
      }
    },
    {
      step: 39,
      line: 41,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36, 38, 39, 41],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 3, READ: 1, WRITE: 2, EXEC: 4 },
      highlightVar: 'flags',
      explanation: {
        icon: 'memory',
        text: 'flags |= WRITE: flags = 1 | 2 = 3',
        color: 'yellow',
        actor: 'CPU',
        detail: '使用|=设置标志位：0001 | 0010 = 0011。现在 flags 有读和写权限 (1+2=3)'
      }
    },
    {
      step: 40,
      line: 42,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36, 38, 39, 41],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 3, READ: 1, WRITE: 2, EXEC: 4 },
      explanation: {
        icon: 'info',
        text: '阅读注释：设置 WRITE 标志',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 WRITE 标志已设置'
      }
    },
    {
      step: 41,
      line: 44,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 3, READ: 1, WRITE: 2, EXEC: 4 },
      explanation: {
        icon: 'info',
        text: '阅读注释：hasRead = 1(有读权限)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将检查 READ 标志'
      }
    },
    {
      step: 42,
      line: 44,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42, 44],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 3, READ: 1, WRITE: 2, EXEC: 4, hasRead: 1 },
      highlightVar: 'hasRead',
      explanation: {
        icon: 'check',
        text: 'flags & READ: 0011 & 0001 = 0001 = 1(真)',
        color: 'green',
        actor: 'CPU',
        detail: '使用&检查标志位：3 & 1 = 1 ≠ 0，表示 READ 标志已设置，有读权限'
      }
    },
    {
      step: 43,
      line: 45,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42, 44],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 3, READ: 1, WRITE: 2, EXEC: 4, hasRead: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：检查 READ 标志',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认检查结果'
      }
    },
    {
      step: 44,
      line: 47,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42, 44, 45],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 3, READ: 1, WRITE: 2, EXEC: 4, hasRead: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：hasExec = 0(无执行权限)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将检查 EXEC 标志'
      }
    },
    {
      step: 45,
      line: 47,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42, 44, 45, 47],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 3, READ: 1, WRITE: 2, EXEC: 4, hasRead: 1, hasExec: 0 },
      highlightVar: 'hasExec',
      explanation: {
        icon: 'alert',
        text: 'flags & EXEC: 0011 & 0100 = 0000 = 0(假)',
        color: 'red',
        actor: 'CPU',
        detail: '使用&检查标志位：3 & 4 = 0，表示 EXEC 标志未设置，无执行权限'
      }
    },
    {
      step: 46,
      line: 48,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42, 44, 45, 47],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 3, READ: 1, WRITE: 2, EXEC: 4, hasRead: 1, hasExec: 0 },
      explanation: {
        icon: 'info',
        text: '阅读注释：检查 EXEC 标志',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认检查结果'
      }
    },
    {
      step: 47,
      line: 50,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42, 44, 45, 47, 48],
      vars: { a: 12, b: 10, r1: 8, r2: 14, r3: 6, r4: -13, r5: 48, r6: 6, flags: 3, READ: 1, WRITE: 2, EXEC: 4, hasRead: 1, hasExec: 0 },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键结论：位运算高效紧凑，常用于标志位、掩码、加密等底层操作'
      }
    }
  ],

  summary: {
    oneLiner: '掌握位运算符：& | ^ ~ << >> 及其实际应用',
    pitfalls: [
      '按位与&：对应位都为 1 时结果为 1，常用于检查标志位',
      '按位或 |：对应位至少一个为 1 时结果为 1，常用于设置标志位',
      '按位异或^：对应位不同时为 1，相同为 0，用于切换位',
      '左移<<和右移>>：分别等价于乘以 2ⁿ和除以 2ⁿ'
    ],
    transferQuestion: '如何用位运算判断一个数是奇数还是偶数？',
    miniExercise: {
      bugCode: 'if (flags & READ == 1) {} // 可能错误！',
      hint: '运算符优先级问题！== 优先级高于&，应写为：if ((flags & READ) != 0)'
    }
  }
};
