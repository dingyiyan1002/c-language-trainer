window.LESSON_DATA = {
  meta: {
    chapterId: 'bits',
    lessonId: 'bits-3',
    title: '位运算实战应用',
    index: 3,
    filename: 'bits_003_bits-3.js',
    keyPoints: ['判断奇偶性', '2 的幂次检查', '交换两个数', '计算绝对值', '位计数技巧']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 位运算实战：常见算法技巧' }] },
    { num: 2, tokens: [] },
    { num: 3, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '17' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 测试数字' }
    ]},
    { num: 4, tokens: [] },
    { num: 5, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'isOdd' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 判断奇偶：1= 奇数，0= 偶数' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 原理：奇数最低位为 1，偶数最低位为 0' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '16' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 测试数字' }
    ]},
    { num: 9, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'isPowerOfTwo' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: '(x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&&' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: '((x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: '))' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '==' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' },
    ]},
    { num: 10, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 16 是 2 的幂：0b10000 & 0b01111 = 0' }
    ]},
    { num: 11, tokens: [] },
    { num: 12, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 交换 a 和 b，不使用临时变量' }
    ]},
    { num: 13, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' },
    ]},
    { num: 14, tokens: [
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '^=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '   ' },
      { type: 'cmt', text: '// a = a ^ b = 5 ^ 10 = 15' }
    ]},
    { num: 15, tokens: [
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '^=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '   ' },
      { type: 'cmt', text: '// b = b ^ a = 10 ^ 15 = 5' }
    ]},
    { num: 16, tokens: [
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '^=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '   ' },
      { type: 'cmt', text: '// a = a ^ b = 15 ^ 5 = 10' }
    ]},
    { num: 17, tokens: [] },
    { num: 18, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'val' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'num', text: '42' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 计算绝对值，不使用分支' }
    ]},
    { num: 19, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'mask' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'val' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>>' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '31' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 负数 mask=-1，正数 mask=0' }
    ]},
    { num: 20, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'absVal' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'val' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'mask' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '^' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'mask' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// abs(-42) = 42' }
    ]},
    { num: 21, tokens: [] },
    { num: 22, tokens: [
      { type: 'kw', text: 'unsigned' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'num' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0b10110100' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 计算 1 的个数' }
    ]},
    { num: 23, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'count' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' },
    ]},
    { num: 24, tokens: [
      { type: 'kw', text: 'while' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'num' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 25, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'num' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'num' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ');' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 清除最低位的 1' }
    ]},
    { num: 26, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'count' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '         ' },
      { type: 'cmt', text: '// 计数器加 1' }
    ]},
    { num: 27, tokens: [
      { type: 'punc', text: '}' }
    ]},
    { num: 28, tokens: [] },
    { num: 29, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'n', name: 'n', type: 'int', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 2, value: '17 (00010001)' },
    { key: 'isOdd', name: 'isOdd', type: 'int', addr: '0x7ffd04', glowColor: 'rgba(239,68,68,0.35)', appearStep: 4, value: '1 (奇数)' },
    { key: 'x', name: 'x', type: 'int', addr: '0x7ffd08', glowColor: 'rgba(59,130,246,0.35)', appearStep: 7, value: '16 (00010000)' },
    { key: 'isPowerOfTwo', name: 'isPowerOfTwo', type: 'int', addr: '0x7ffd0c', glowColor: 'rgba(34,197,94,0.35)', appearStep: 8, value: '1 (true)' },
    { key: 'a', name: 'a', type: 'int', addr: '0x7ffd10', glowColor: 'rgba(249,115,22,0.35)', appearStep: 11, value: '5 → 15 → 15 → 10' },
    { key: 'b', name: 'b', type: 'int', addr: '0x7ffd14', glowColor: 'rgba(168,85,247,0.35)', appearStep: 12, value: '10 → 10 → 5 → 5' },
    { key: 'val', name: 'val', type: 'int', addr: '0x7ffd18', glowColor: 'rgba(239,68,68,0.35)', appearStep: 17, value: '-42' },
    { key: 'mask', name: 'mask', type: 'int', addr: '0x7ffd1c', glowColor: 'rgba(250,204,21,0.35)', appearStep: 18, value: '-1 (0xFFFFFFFF)' },
    { key: 'absVal', name: 'absVal', type: 'int', addr: '0x7ffd20', glowColor: 'rgba(34,197,94,0.35)', appearStep: 19, value: '42' },
    { key: 'num', name: 'num', type: 'unsigned int', addr: '0x7ffd24', glowColor: 'rgba(59,130,246,0.35)', appearStep: 21, value: '0b10110100' },
    { key: 'count', name: 'count', type: 'int', addr: '0x7ffd28', glowColor: 'rgba(249,115,22,0.35)', appearStep: 22, value: '0 → 1 → 2 → 3 → 4' }
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
        detail: '程序即将开始运行，演示位运算在实际算法中的应用技巧'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：位运算实战 - 常见算法技巧',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示位运算在实际编程中的巧妙应用'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [1],
      vars: { n: '17 (00010001)' },
      highlightVar: 'n',
      explanation: {
        icon: 'box',
        text: 'int n = 17：定义测试数字',
        color: 'green',
        actor: 'CPU',
        detail: 'n = 17，二进制表示为 00010001。将用于奇偶性判断演示'
      }
    },
    {
      step: 3,
      line: 5,
      executedLines: [1, 3, 4],
      vars: { n: '17 (00010001)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：使用 n & 1 判断奇偶性',
        color: 'blue',
        actor: 'CPU',
        detail: '这是判断奇偶最快的方法，比 n % 2 更高效'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 3, 4, 5],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)' },
      highlightVar: 'isOdd',
      explanation: {
        icon: 'calculator',
        text: 'isOdd = n & 1 = 1',
        color: 'red',
        actor: 'CPU',
        detail: '00010001 & 00000001 = 00000001 = 1。最低位为 1，所以 17 是奇数'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 3, 4, 5],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：原理 - 奇数最低位为 1，偶数最低位为 0',
        color: 'blue',
        actor: 'CPU',
        detail: '二进制表示中，奇数的第 0 位总是 1，偶数的第 0 位总是 0。这是二进制数的本质特性！'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 3, 4, 5, 6, 8],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：2 的幂次检查',
        color: 'blue',
        actor: 'CPU',
        detail: '使用巧妙的位运算技巧判断一个数是否为 2 的幂'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 3, 4, 5, 6, 8],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)' },
      highlightVar: 'x',
      explanation: {
        icon: 'box',
        text: 'int x = 16：测试数字',
        color: 'cyan',
        actor: 'CPU',
        detail: 'x = 16 = 2^4，二进制表示为 00010000，只有一个 1 位'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 3, 4, 5, 6, 8, 9],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)' },
      highlightVar: 'isPowerOfTwo',
      explanation: {
        icon: 'calculator',
        text: 'isPowerOfTwo = (x > 0) && (x & (x-1) == 0) = true',
        color: 'green',
        actor: 'CPU',
        detail: '16 & 15 = 00010000 & 00001111 = 0。2 的幂减 1 后，所有低位都变 1，与原数 AND 为 0'
      }
    },
    {
      step: 9,
      line: 10,
      executedLines: [1, 3, 4, 5, 6, 8, 9],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：16 是 2 的幂：0b10000 & 0b01111 = 0',
        color: 'blue',
        actor: 'CPU',
        detail: '2 的幂的二进制表示只有一个 1，减 1 后该位变 0，低位全变 1，AND 运算结果为 0'
      }
    },
    {
      step: 10,
      line: 12,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：XOR 交换算法',
        color: 'blue',
        actor: 'CPU',
        detail: '使用异或运算交换两个数，不需要临时变量。这是经典的面试算法题！'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '5', b: '10' },
      highlightVar: 'a',
      explanation: {
        icon: 'box',
        text: 'int a = 5, b = 10：初始化两个数',
        color: 'orange',
        actor: 'CPU',
        detail: 'a = 5 (0101), b = 10 (1010)。将通过三次 XOR 操作完成交换'
      }
    },
    {
      step: 12,
      line: 13,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '5', b: '10' },
      highlightVar: 'b',
      explanation: {
        icon: 'box',
        text: 'a = 5, b = 10：准备交换',
        color: 'purple',
        actor: 'CPU',
        detail: '初始状态：a=5, b=10。三步 XOR 交换即将开始'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '15', b: '10' },
      highlightVar: 'a',
      explanation: {
        icon: 'calculator',
        text: 'a ^= b：a = 5 ^ 10 = 15',
        color: 'red',
        actor: 'CPU',
        detail: '第一步：a = 0101 ^ 1010 = 1111 = 15。现在 a 存储了 XOR 结果'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '15', b: '5' },
      highlightVar: 'b',
      explanation: {
        icon: 'calculator',
        text: 'b ^= a：b = 10 ^ 15 = 5',
        color: 'purple',
        actor: 'CPU',
        detail: '第二步：b = 1010 ^ 1111 = 0101 = 5。利用 XOR 可逆性：b ^ (a^b) = a'
      }
    },
    {
      step: 15,
      line: 16,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5' },
      highlightVar: 'a',
      explanation: {
        icon: 'calculator',
        text: 'a ^= b：a = 15 ^ 5 = 10',
        color: 'orange',
        actor: 'CPU',
        detail: '第三步：a = 1111 ^ 0101 = 1010 = 10。完成交换！a=10, b=5。不需要临时变量！'
      }
    },
    {
      step: 16,
      line: 18,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5' },
      explanation: {
        icon: 'info',
        text: '阅读代码：无分支计算绝对值',
        color: 'blue',
        actor: 'CPU',
        detail: '使用位运算计算绝对值，避免 if 分支，提高性能'
      }
    },
    {
      step: 17,
      line: 18,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42' },
      highlightVar: 'val',
      explanation: {
        icon: 'box',
        text: 'int val = -42：测试负数',
        color: 'red',
        actor: 'CPU',
        detail: 'val = -42，补码表示为 0xFFFFFFD6。将计算其绝对值'
      }
    },
    {
      step: 18,
      line: 19,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)' },
      highlightVar: 'mask',
      explanation: {
        icon: 'calculator',
        text: 'mask = val >> 31 = -1',
        color: 'yellow',
        actor: 'CPU',
        detail: '负数右移 31 位，符号位扩展，得到全 1 (0xFFFFFFFF = -1)。正数右移得 0'
      }
    },
    {
      step: 19,
      line: 20,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42' },
      highlightVar: 'absVal',
      explanation: {
        icon: 'calculator',
        text: 'absVal = (val + mask) ^ mask = 42',
        color: 'green',
        actor: 'CPU',
        detail: '(-42 + (-1)) ^ (-1) = (-43) ^ (-1) = 42。负数时等价于 -val，正数时不变'
      }
    },
    {
      step: 20,
      line: 22,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42' },
      explanation: {
        icon: 'info',
        text: '阅读代码：计算二进制中 1 的个数',
        color: 'blue',
        actor: 'CPU',
        detail: '使用 Brian Kernighan 算法，高效统计 1 的个数'
      }
    },
    {
      step: 21,
      line: 22,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b10110100' },
      highlightVar: 'num',
      explanation: {
        icon: 'box',
        text: 'unsigned int num = 0b10110100',
        color: 'cyan',
        actor: 'CPU',
        detail: 'num = 10110100，包含 4 个 1。将通过循环清除 1 来计数'
      }
    },
    {
      step: 22,
      line: 23,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b10110100', count: '0' },
      highlightVar: 'count',
      explanation: {
        icon: 'box',
        text: 'int count = 0：初始化计数器',
        color: 'orange',
        actor: 'CPU',
        detail: 'count = 0，将统计 num 中 1 的个数'
      }
    },
    {
      step: 23,
      line: 24,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b10110100', count: '0' },
      explanation: {
        icon: 'info',
        text: '进入 while 循环：num != 0',
        color: 'blue',
        actor: 'CPU',
        detail: '循环条件：num 不为 0 时继续。每次循环清除一个 1'
      }
    },
    {
      step: 24,
      line: 25,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b10110000', count: '1' },
      highlightVar: 'num',
      explanation: {
        icon: 'calculator',
        text: 'num &= (num-1)：清除最低位的 1',
        color: 'yellow',
        actor: 'CPU',
        detail: '10110100 & 10110011 = 10110000。清除了第 2 位的 1。count = 1'
      }
    },
    {
      step: 25,
      line: 26,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b10110000', count: '1' },
      highlightVar: 'count',
      explanation: {
        icon: 'calculator',
        text: 'count++：计数器加 1',
        color: 'purple',
        actor: 'CPU',
        detail: '发现第一个 1，count = 1。继续循环...'
      }
    },
    {
      step: 26,
      line: 24,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26, 24],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b10110000', count: '1' },
      explanation: {
        icon: 'loop',
        text: '继续循环：num != 0',
        color: 'blue',
        actor: 'CPU',
        detail: 'num = 10110000 != 0，继续循环。还有 3 个 1 待统计'
      }
    },
    {
      step: 27,
      line: 25,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26, 24, 25],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b10100000', count: '2' },
      explanation: {
        icon: 'calculator',
        text: 'num &= (num-1)：再清除一个 1',
        color: 'yellow',
        actor: 'CPU',
        detail: '10110000 & 10101111 = 10100000。清除了第 4 位的 1。count = 2'
      }
    },
    {
      step: 28,
      line: 26,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26, 24, 25, 26],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b10100000', count: '2' },
      highlightVar: 'count',
      explanation: {
        icon: 'calculator',
        text: 'count++：count = 2',
        color: 'purple',
        actor: 'CPU',
        detail: '发现第二个 1，count = 2。继续循环...'
      }
    },
    {
      step: 29,
      line: 24,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26, 24, 25, 26, 24],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b10000000', count: '3' },
      explanation: {
        icon: 'calculator',
        text: '第三轮：清除第 7 位的 1',
        color: 'yellow',
        actor: 'CPU',
        detail: '10100000 & 10011111 = 10000000。count = 3'
      }
    },
    {
      step: 30,
      line: 26,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26, 24, 25, 26, 24, 25, 26],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b10000000', count: '3' },
      highlightVar: 'count',
      explanation: {
        icon: 'calculator',
        text: 'count++：count = 3',
        color: 'purple',
        actor: 'CPU',
        detail: '发现第三个 1，count = 3。继续循环...'
      }
    },
    {
      step: 31,
      line: 24,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26, 24, 25, 26, 24, 25, 26, 24],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b00000000', count: '4' },
      explanation: {
        icon: 'calculator',
        text: '第四轮：清除最后一个 1',
        color: 'yellow',
        actor: 'CPU',
        detail: '10000000 & 01111111 = 00000000。count = 4'
      }
    },
    {
      step: 32,
      line: 26,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26, 24, 25, 26, 24, 25, 26, 24, 25, 26],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b00000000', count: '4' },
      highlightVar: 'count',
      explanation: {
        icon: 'calculator',
        text: 'count++：count = 4',
        color: 'purple',
        actor: 'CPU',
        detail: '发现第四个 1，count = 4'
      }
    },
    {
      step: 33,
      line: 24,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26, 24, 25, 26, 24, 25, 26, 24, 25, 26, 24],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b00000000', count: '4' },
      explanation: {
        icon: 'check',
        text: '循环结束：num == 0',
        color: 'blue',
        actor: 'CPU',
        detail: 'num = 0，循环结束。最终 count = 4，表示 10110100 有 4 个 1'
      }
    },
    {
      step: 34,
      line: 29,
      executedLines: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26, 24, 25, 26, 24, 25, 26, 24, 25, 26, 24, 29],
      vars: { n: '17 (00010001)', isOdd: '1 (奇数)', x: '16 (00010000)', isPowerOfTwo: '1 (true)', a: '10', b: '5', val: '-42', mask: '-1 (0xFFFFFFFF)', absVal: '42', num: '0b00000000', count: '4' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键技巧：1) n&1 判奇偶  2) x&(x-1) 查 2 幂  3) XOR 交换  4) 移位绝对值  5) num&(num-1) 数 1 个'
      }
    }
  ],

  summary: {
    oneLiner: '掌握位运算在实际算法中的巧妙应用',
    pitfalls: [
      '判断奇偶：(n & 1) == 1 为奇数，== 0 为偶数',
      '2 的幂：(x > 0) && (x & (x-1) == 0)',
      'XOR 交换：a^=b; b^=a; a^=b; 三步完成交换',
      '绝对值：(val + mask) ^ mask，mask = val >> 31',
      '数 1 的个数：num &= (num-1) 每次清除一个 1'
    ],
    transferQuestion: '为什么 XOR 交换算法可以工作？它的数学原理是什么？',
    miniExercise: {
      bugCode: 'int isPowerOfTwo = (x & (x-1)) == 0;  // 错误！x=0 也会返回 true',
      hint: '修复：必须先检查 x > 0，因为 0 不是 2 的幂'
    }
  },

  predictions: [
    {
      question: '如何快速判断一个数是奇数？',
      options: [
        { text: 'n % 2 == 1', feedback: '可以，但不是最快。位运算更快。' },
        { text: 'n & 1', feedback: '正确！n & 1 直接检查最低位，是最快的方法。' },
        { text: 'n / 2 * 2 != n', feedback: '可以，但效率低。' },
        { text: 'n % 2 != 0', feedback: '可以，但位运算更快。' }
      ],
      correctIndex: 1
    },
    {
      question: 'XOR 交换算法中，为什么第二步 b ^= a 后 b 得到原 a 的值？',
      options: [
        { text: '因为 XOR 是可逆的', feedback: '正确！b ^ (a^b) = a ^ (b^b) = a ^ 0 = a' },
        { text: '因为 a 已经变了', feedback: '不完整，关键是 XOR 的性质。' },
        { text: '因为异或相同为 0', feedback: '部分正确，但没说明白原理。' },
        { text: '巧合', feedback: '错误！这是数学性质，不是巧合。' }
      ],
      correctIndex: 0
    }
  ],

  misconceptions: [
    {
      myth: 'XOR 交换总是比临时变量交换好',
      truth: 'XOR 交换虽然不用临时变量，但现代编译器会优化临时变量版本，且 XOR 版本可读性差，实际不推荐在代码中使用。'
    },
    {
      myth: 'x & (x-1) == 0 可以直接判断 2 的幂',
      truth: '必须先检查 x > 0！因为 0 & (0-1) = 0 & (-1) = 0，但 0 不是 2 的幂。完整公式：(x > 0) && ((x & (x-1)) == 0)。'
    },
    {
      myth: '位运算绝对值比 abs() 函数快',
      truth: '在现代 CPU 上，分支预测很高效，标准库的 abs() 通常经过优化。位运算绝对值主要是避免分支的技巧，实际性能需具体测试。'
    },
    {
      myth: 'num &= (num-1) 循环次数固定',
      truth: '循环次数等于 1 的个数！这是 Brian Kernighan 算法的优势，比逐位检查更高效。最坏情况 O(log n)，最好情况 O(1)。'
    }
  ]
};
