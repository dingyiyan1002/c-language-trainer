window.LESSON_DATA = {
  meta: {
    chapterId: 'bits',
    lessonId: 'bits-1',
    title: '位运算符基础',
    index: 1,
    filename: 'bits_001_bits-1.js',
    keyPoints: ['位运算符种类', '按位与 &', '按位或 |', '按位异或 ^', '按位取反 ~', '移位运算符']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 位运算符：直接操作整数的二进制位' }] },
    { num: 2, tokens: [] },
    { num: 3, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '12' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 二进制：0000 1100' }
    ]},
    { num: 4, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 二进制：0000 1010' }
    ]},
    { num: 5, tokens: [] },
    { num: 6, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'and' },
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
      { type: 'cmt', text: '// 按位与：0000 1000 = 8' }
    ]},
    { num: 7, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 规则：两位都为 1，结果才为 1' }
    ]},
    { num: 8, tokens: [] },
    { num: 9, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'or' },
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
      { type: 'cmt', text: '// 按位或：0000 1110 = 14' }
    ]},
    { num: 10, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 规则：两位至少一个为 1，结果为 1' }
    ]},
    { num: 11, tokens: [] },
    { num: 12, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'xor' },
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
      { type: 'cmt', text: '// 按位异或：0000 0110 = 6' }
    ]},
    { num: 13, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 规则：两位不同为 1，相同为 0' }
    ]},
    { num: 14, tokens: [] },
    { num: 15, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'not' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '~' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 按位取反：1111 0011 = -13 (补码)' }
    ]},
    { num: 16, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 规则：0 变 1，1 变 0 (包括符号位)' }
    ]},
    { num: 17, tokens: [] },
    { num: 18, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'left' },
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
      { type: 'cmt', text: '// 左移 2 位：0011 0000 = 48' }
    ]},
    { num: 19, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 规则：左侧丢弃，右侧补 0 (等价于 ×2²)' }
    ]},
    { num: 20, tokens: [] },
    { num: 21, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'right' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>>' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 右移 2 位：0000 0011 = 3' }
    ]},
    { num: 22, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 规则：右侧丢弃，左侧补符号位 (等价于 ÷2²)' }
    ]},
    { num: 23, tokens: [] },
    { num: 24, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'a', name: 'a', type: 'int', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 2, value: '12 (00001100)' },
    { key: 'b', name: 'b', type: 'int', addr: '0x7ffd04', glowColor: 'rgba(59,130,246,0.35)', appearStep: 3, value: '10 (00001010)' },
    { key: 'and', name: 'a & b', type: 'int', addr: '0x7ffd08', glowColor: 'rgba(249,115,22,0.35)', appearStep: 5, value: '8 (00001000)' },
    { key: 'or', name: 'a | b', type: 'int', addr: '0x7ffd0c', glowColor: 'rgba(168,85,247,0.35)', appearStep: 8, value: '14 (00001110)' },
    { key: 'xor', name: 'a ^ b', type: 'int', addr: '0x7ffd10', glowColor: 'rgba(239,68,68,0.35)', appearStep: 11, value: '6 (00000110)' },
    { key: 'not', name: '~a', type: 'int', addr: '0x7ffd14', glowColor: 'rgba(250,204,21,0.35)', appearStep: 14, value: '-13 (11110011)' },
    { key: 'left', name: 'a << 2', type: 'int', addr: '0x7ffd18', glowColor: 'rgba(34,197,94,0.35)', appearStep: 17, value: '48 (00110000)' },
    { key: 'right', name: 'a >> 2', type: 'int', addr: '0x7ffd1c', glowColor: 'rgba(59,130,246,0.35)', appearStep: 20, value: '3 (00000011)' }
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
        detail: '程序即将开始运行，演示位运算符的使用方法'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：位运算符 - 直接操作整数的二进制位',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示 C 语言的位级操作能力'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [1],
      vars: { a: '12 (00001100)' },
      highlightVar: 'a',
      explanation: {
        icon: 'box',
        text: 'int a = 12：定义整数 a',
        color: 'green',
        actor: 'CPU',
        detail: 'a = 12，二进制表示为 00001100 (8 位简化显示，实际 32 位)'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 3],
      vars: { a: '12 (00001100)', b: '10 (00001010)' },
      highlightVar: 'b',
      explanation: {
        icon: 'box',
        text: 'int b = 10：定义整数 b',
        color: 'cyan',
        actor: 'CPU',
        detail: 'b = 10，二进制表示为 00001010。两个数将用于位运算演示'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [1, 3, 4, 5],
      vars: { a: '12 (00001100)', b: '10 (00001010)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：按位与运算 a & b',
        color: 'blue',
        actor: 'CPU',
        detail: '& 是按位与运算符，将对 a 和 b 的每一位进行 AND 操作'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 3, 4, 5, 6],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)' },
      highlightVar: 'and',
      explanation: {
        icon: 'calculator',
        text: 'a & b = 8：按位与运算',
        color: 'orange',
        actor: 'CPU',
        detail: '逐位 AND：00001100 & 00001010 = 00001000。只有第 3 位 (从右数) 两位都是 1，结果为 8'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 3, 4, 5, 6],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：规则 - 两位都为 1，结果才为 1',
        color: 'blue',
        actor: 'CPU',
        detail: 'AND 真值表：0&0=0, 0&1=0, 1&0=0, 1&1=1。只有两个输入都为 1 时输出才为 1'
      }
    },
    {
      step: 7,
      line: 9,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：按位或运算 a | b',
        color: 'blue',
        actor: 'CPU',
        detail: '| 是按位或运算符，将对 a 和 b 的每一位进行 OR 操作'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)' },
      highlightVar: 'or',
      explanation: {
        icon: 'calculator',
        text: 'a | b = 14：按位或运算',
        color: 'purple',
        actor: 'CPU',
        detail: '逐位 OR:00001100 | 00001010 = 00001110。第 1、2、3 位至少有一个 1，结果为 14'
      }
    },
    {
      step: 9,
      line: 10,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：规则 - 两位至少一个为 1，结果为 1',
        color: 'blue',
        actor: 'CPU',
        detail: 'OR 真值表：0|0=0, 0|1=1, 1|0=1, 1|1=1。只要有一个输入为 1，输出就为 1'
      }
    },
    {
      step: 10,
      line: 12,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：按位异或运算 a ^ b',
        color: 'blue',
        actor: 'CPU',
        detail: '^ 是按位异或运算符，将对 a 和 b 的每一位进行 XOR 操作'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)', xor: '6 (00000110)' },
      highlightVar: 'xor',
      explanation: {
        icon: 'calculator',
        text: 'a ^ b = 6：按位异或运算',
        color: 'red',
        actor: 'CPU',
        detail: '逐位 XOR:00001100 ^ 00001010 = 00000110。第 1、2 位不同为 1，第 3 位相同为 0，结果为 6'
      }
    },
    {
      step: 12,
      line: 13,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)', xor: '6 (00000110)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：规则 - 两位不同为 1，相同为 0',
        color: 'blue',
        actor: 'CPU',
        detail: 'XOR 真值表：0^0=0, 0^1=1, 1^0=1, 1^1=0。输入不同时输出 1，相同时输出 0'
      }
    },
    {
      step: 13,
      line: 15,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)', xor: '6 (00000110)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：按位取反运算 ~a',
        color: 'blue',
        actor: 'CPU',
        detail: '~ 是按位取反运算符，是单目运算符，只对 a 进行操作'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)', xor: '6 (00000110)', not: '-13 (11110011)' },
      highlightVar: 'not',
      explanation: {
        icon: 'calculator',
        text: '~a = -13：按位取反运算',
        color: 'yellow',
        actor: 'CPU',
        detail: '~00001100 = 11110011。在补码表示中，~12 = -13。规则：~x = -(x+1)'
      }
    },
    {
      step: 15,
      line: 16,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)', xor: '6 (00000110)', not: '-13 (11110011)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：规则 - 0 变 1，1 变 0 (包括符号位)',
        color: 'blue',
        actor: 'CPU',
        detail: 'NOT 运算翻转所有位。正数取反得到负数，因为最高位 (符号位) 也翻转了'
      }
    },
    {
      step: 16,
      line: 18,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)', xor: '6 (00000110)', not: '-13 (11110011)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：左移运算 a << 2',
        color: 'blue',
        actor: 'CPU',
        detail: '<< 是左移运算符，将 a 的所有位向左移动 2 位'
      }
    },
    {
      step: 17,
      line: 18,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)', xor: '6 (00000110)', not: '-13 (11110011)', left: '48 (00110000)' },
      highlightVar: 'left',
      explanation: {
        icon: 'calculator',
        text: 'a << 2 = 48：左移 2 位',
        color: 'green',
        actor: 'CPU',
        detail: '00001100 << 2 = 00110000。左侧丢弃 2 位，右侧补 2 个 0。等价于 12 × 2² = 48'
      }
    },
    {
      step: 18,
      line: 19,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)', xor: '6 (00000110)', not: '-13 (11110011)', left: '48 (00110000)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：规则 - 左侧丢弃，右侧补 0 (等价于×2²)',
        color: 'blue',
        actor: 'CPU',
        detail: '左移 n 位等价于乘以 2 的 n 次方。但要注意溢出风险！'
      }
    },
    {
      step: 19,
      line: 21,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)', xor: '6 (00000110)', not: '-13 (11110011)', left: '48 (00110000)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：右移运算 a >> 2',
        color: 'blue',
        actor: 'CPU',
        detail: '>> 是右移运算符，将 a 的所有位向右移动 2 位'
      }
    },
    {
      step: 20,
      line: 21,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)', xor: '6 (00000110)', not: '-13 (11110011)', left: '48 (00110000)', right: '3 (00000011)' },
      highlightVar: 'right',
      explanation: {
        icon: 'calculator',
        text: 'a >> 2 = 3：右移 2 位',
        color: 'cyan',
        actor: 'CPU',
        detail: '00001100 >> 2 = 00000011。右侧丢弃 2 位，左侧补符号位 (正数补 0)。等价于 12 ÷ 2² = 3'
      }
    },
    {
      step: 21,
      line: 22,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)', xor: '6 (00000110)', not: '-13 (11110011)', left: '48 (00110000)', right: '3 (00000011)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：规则 - 右侧丢弃，左侧补符号位 (等价于÷2²)',
        color: 'blue',
        actor: 'CPU',
        detail: '右移 n 位等价于除以 2 的 n 次方 (向下取整)。负数右移时左侧补 1 (算术右移)'
      }
    },
    {
      step: 22,
      line: 24,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22, 24],
      vars: { a: '12 (00001100)', b: '10 (00001010)', and: '8 (00001000)', or: '14 (00001110)', xor: '6 (00000110)', not: '-13 (11110011)', left: '48 (00110000)', right: '3 (00000011)' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键点：1) & 按位与 - 都为 1 才为 1  2) | 按位或 - 有 1 就为 1  3) ^ 按位异或 - 不同为 1  4) ~ 按位取反  5) << 左移乘 2  6) >> 右移除 2'
      }
    }
  ],

  summary: {
    oneLiner: '掌握 6 种位运算符的规则和用法',
    pitfalls: [
      '& 按位与：两位都为 1，结果才为 1',
      '| 按位或：两位至少一个为 1，结果为 1',
      '^ 按位异或：两位不同为 1，相同为 0',
      '~ 按位取反：0 变 1，1 变 0，~x = -(x+1)',
      '<< 左移：左侧丢弃，右侧补 0，等价于×2ⁿ',
      '>> 右移：右侧丢弃，左侧补符号位，等价于÷2ⁿ'
    ],
    transferQuestion: '为什么异或运算可以用于交换两个数而不需要临时变量？',
    miniExercise: {
      bugCode: 'int x = 5; int result = x & 0;  // result = ? (用于清零)',
      hint: '任何数与 0 按位与都得 0。这是清零特定位的技巧'
    }
  },

  predictions: [
    {
      question: '12 & 10 的结果是多少？',
      options: [
        { text: '10', feedback: '错误！不是取较小值。' },
        { text: '12', feedback: '错误！不是取较大值。' },
        { text: '8', feedback: '正确！00001100 & 00001010 = 00001000 = 8' },
        { text: '22', feedback: '错误！不是相加。' }
      ],
      correctIndex: 2
    },
    {
      question: '~12 的结果是多少？',
      options: [
        { text: '12', feedback: '错误！不是保持不变。' },
        { text: '-12', feedback: '错误！不是简单变负。' },
        { text: '-13', feedback: '正确！~x = -(x+1)，所以~12 = -13' },
        { text: '3', feedback: '错误！' }
      ],
      correctIndex: 2
    }
  ],

  misconceptions: [
    {
      myth: '位运算符和逻辑运算符是一回事',
      truth: '位运算符 (&|^~) 逐位操作整数，逻辑运算符 (&&||!) 操作布尔值。5 & 3 = 1，但 5 && 3 = true(1)。'
    },
    {
      myth: '左移总是等价于乘法',
      truth: '左移 n 位等价于×2ⁿ，但可能溢出！32 位 int 左移超过 31 位是未定义行为。'
    },
    {
      myth: '右移总是等价于除法',
      truth: '右移 n 位等价于÷2ⁿ(向下取整)，但负数右移行为是实现定义的 (可能补 0 或补 1)。'
    },
    {
      myth: '~x = -x',
      truth: '~x = -(x+1)。在补码系统中，~x + x = -1，所以~12 = -13，不是 -12。'
    }
  ]
};
