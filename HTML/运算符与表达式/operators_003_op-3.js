window.LESSON_DATA = {
  meta: {
    chapterId: 'operators',
    lessonId: 'op-3',
    title: '关系运算符和逻辑运算符',
    index: 3,
    filename: 'operators_003_op-3.js',
    keyPoints: ['关系运算符返回布尔值', '逻辑与&&和逻辑或||', '短路求值机制', '运算符优先级']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 关系运算符和逻辑运算符：条件判断的基础' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' }
    ]},
    { num: 3, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// a = 10, 地址 0x7ffc10' }
    ]},
    { num: 4, tokens: [] },
    { num: 5, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '20' },
      { type: 'punc', text: ';' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// b = 20, 地址 0x7ffc14' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// c = 10, 地址 0x7ffc18' }
    ]},
    { num: 10, tokens: [] },
    { num: 11, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// r1 = 1 (true): 10 < 20' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// CMP 指令比较，结果存入 r1' }
    ]},
    { num: 13, tokens: [] },
    { num: 14, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '==' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// r2 = 1 (true): 10 == 10' }
    ]},
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 相等比较，结果存入 r2' }
    ]},
    { num: 16, tokens: [] },
    { num: 17, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r3' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// r3 = 0 (false): 10 >= 20' }
    ]},
    { num: 18, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 大于等于比较，结果存入 r3' }
    ]},
    { num: 19, tokens: [] },
    { num: 20, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r4' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&&' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// r4 = 1 (true)' }
    ]},
    { num: 21, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 逻辑与：两个条件都为真时结果为真' }
    ]},
    { num: 22, tokens: [] },
    { num: 23, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r5' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '||' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// r5 = 1 (true)' }
    ]},
    { num: 24, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 逻辑或：一个条件为真时结果为真' }
    ]},
    { num: 25, tokens: [] },
    { num: 26, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r6' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '!' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '==' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// r6 = 1 (true): !(10==20)' }
    ]},
    { num: 27, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 逻辑非：真变假，假变真' }
    ]},
    { num: 28, tokens: [] },
    { num: 29, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]},
    { num: 30, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// x = 0, 用于短路测试' }
    ]},
    { num: 31, tokens: [] },
    { num: 32, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'r7' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '!=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&&' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '/' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// r7 = 0, 短路求值' }
    ]},
    { num: 33, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// x!=0 为假，右侧不执行，避免除零错误' }
    ]},
    { num: 34, tokens: [] },
    { num: 35, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'a', name: 'a', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '10' },
    { key: 'b', name: 'b', type: 'int', addr: '0x7ffc14', glowColor: 'rgba(168,85,247,0.35)', appearStep: 4, value: '20' },
    { key: 'c', name: 'c', type: 'int', addr: '0x7ffc18', glowColor: 'rgba(59,130,246,0.35)', appearStep: 7, value: '10' },
    { key: 'r1', name: 'r1', type: 'int', addr: '0x7ffc20', glowColor: 'rgba(249,115,22,0.35)', appearStep: 10, value: '1' },
    { key: 'r2', name: 'r2', type: 'int', addr: '0x7ffc24', glowColor: 'rgba(250,204,21,0.35)', appearStep: 13, value: '1' },
    { key: 'r3', name: 'r3', type: 'int', addr: '0x7ffc28', glowColor: 'rgba(239,68,68,0.35)', appearStep: 16, value: '0' },
    { key: 'r4', name: 'r4', type: 'int', addr: '0x7ffc2c', glowColor: 'rgba(34,197,94,0.35)', appearStep: 19, value: '1' },
    { key: 'r5', name: 'r5', type: 'int', addr: '0x7ffc30', glowColor: 'rgba(168,85,247,0.35)', appearStep: 22, value: '1' },
    { key: 'r6', name: 'r6', type: 'int', addr: '0x7ffc34', glowColor: 'rgba(59,130,246,0.35)', appearStep: 25, value: '1' },
    { key: 'x', name: 'x', type: 'int', addr: '0x7ffc38', glowColor: 'rgba(250,204,21,0.35)', appearStep: 28, value: '0' },
    { key: 'r7', name: 'r7', type: 'int', addr: '0x7ffc3c', glowColor: 'rgba(249,115,22,0.35)', appearStep: 31, value: '0' }
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
        detail: '程序即将开始运行，演示关系运算符和逻辑运算符'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：关系运算符和逻辑运算符 - 条件判断的基础',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示关系和逻辑运算'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { a: 10 },
      highlightVar: 'a',
      explanation: {
        icon: 'memory',
        text: 'int a = 10，a 保存在栈地址 0x7ffc10',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 10 写入栈地址 0x7ffc10，a 占用 4 字节'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { a: 10 },
      explanation: {
        icon: 'info',
        text: '阅读注释：a = 10, 地址 0x7ffc10',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 a 的位置'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3],
      vars: { a: 10, b: 20 },
      highlightVar: 'b',
      explanation: {
        icon: 'memory',
        text: 'int b = 20，b 保存在栈地址 0x7ffc14',
        color: 'purple',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 20 写入栈地址 0x7ffc14，b 占用 4 字节'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { a: 10, b: 20 },
      explanation: {
        icon: 'info',
        text: '阅读注释：b = 20, 地址 0x7ffc14',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 b 的位置'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 3, 5, 6],
      vars: { a: 10, b: 20 },
      explanation: {
        icon: 'info',
        text: '阅读注释：c = 10, 地址 0x7ffc18',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将声明 c'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { a: 10, b: 20, c: 10 },
      highlightVar: 'c',
      explanation: {
        icon: 'memory',
        text: 'int c = 10，c 保存在栈地址 0x7ffc18',
        color: 'cyan',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 10 写入栈地址 0x7ffc18，c 占用 4 字节'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { a: 10, b: 20, c: 10 },
      explanation: {
        icon: 'info',
        text: '阅读注释：c = 10, 地址 0x7ffc18',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 c 的位置'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9],
      vars: { a: 10, b: 20, c: 10 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r1 = 1 (true): 10 < 20',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示小于运算符'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { a: 10, b: 20, c: 10, r1: 1 },
      highlightVar: 'r1',
      explanation: {
        icon: 'calculator',
        text: 'a < b: 10 < 20 为真，r1 = 1',
        color: 'orange',
        actor: 'CPU',
        detail: 'CMP 指令比较 a 和 b 的值，设置标志位，SETL 指令根据标志位设置 r1 = 1 (true)'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { a: 10, b: 20, c: 10, r1: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：CMP 指令比较，结果存入 r1',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释底层比较指令'
      }
    },
    {
      step: 12,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12],
      vars: { a: 10, b: 20, c: 10, r1: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r2 = 1 (true): 10 == 10',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示等于运算符'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1 },
      highlightVar: 'r2',
      explanation: {
        icon: 'calculator',
        text: 'a == c: 10 == 10 为真，r2 = 1',
        color: 'yellow',
        actor: 'CPU',
        detail: 'CMP 指令比较 a 和 c 的值，相等时设置零标志位 ZF=1，SETE 指令设置 r2 = 1 (true)'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：相等比较，结果存入 r2',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认相等比较结果'
      }
    },
    {
      step: 15,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r3 = 0 (false): 10 >= 20',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示大于等于运算符'
      }
    },
    {
      step: 16,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0 },
      highlightVar: 'r3',
      explanation: {
        icon: 'calculator',
        text: 'a >= b: 10 >= 20 为假，r3 = 0',
        color: 'red',
        actor: 'CPU',
        detail: 'CMP 指令比较 a 和 b，10 不大于等于 20，SETGE 指令设置 r3 = 0 (false)'
      }
    },
    {
      step: 17,
      line: 18,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0 },
      explanation: {
        icon: 'info',
        text: '阅读注释：大于等于比较，结果存入 r3',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认关系运算结果'
      }
    },
    {
      step: 18,
      line: 20,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r4 = 1 (true)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示逻辑与运算'
      }
    },
    {
      step: 19,
      line: 20,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1 },
      highlightVar: 'r4',
      explanation: {
        icon: 'logic',
        text: '(a<b) && (b>c): true && true = true',
        color: 'green',
        actor: 'CPU',
        detail: '先计算 (a<b) 得 1，再计算 (b>c) 得 1，最后 AND 指令：1 && 1 = 1，存入 r4'
      }
    },
    {
      step: 20,
      line: 21,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：逻辑与：两个条件都为真时结果为真',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释&&运算符的规则'
      }
    },
    {
      step: 21,
      line: 23,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r5 = 1 (true)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示逻辑或运算'
      }
    },
    {
      step: 22,
      line: 23,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1, r5: 1 },
      highlightVar: 'r5',
      explanation: {
        icon: 'logic',
        text: '(a>b) || (b>c): false || true = true',
        color: 'purple',
        actor: 'CPU',
        detail: '先计算 (a>b) 得 0，再计算 (b>c) 得 1，最后 OR 指令：0 || 1 = 1，存入 r5'
      }
    },
    {
      step: 23,
      line: 24,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1, r5: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：逻辑或：一个条件为真时结果为真',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释||运算符的规则'
      }
    },
    {
      step: 24,
      line: 26,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1, r5: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r6 = 1 (true): !(10==20)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示逻辑非运算'
      }
    },
    {
      step: 25,
      line: 26,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1, r5: 1, r6: 1 },
      highlightVar: 'r6',
      explanation: {
        icon: 'logic',
        text: '!(a==b): !(10==20) = !0 = 1',
        color: 'cyan',
        actor: 'CPU',
        detail: '先计算 (a==b) 得 0，然后 NOT 指令：!0 = 1，存入 r6。假变真，真变假'
      }
    },
    {
      step: 26,
      line: 27,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1, r5: 1, r6: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：逻辑非：真变假，假变真',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释！运算符的规则'
      }
    },
    {
      step: 27,
      line: 29,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1, r5: 1, r6: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：x = 0, 用于短路测试',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示短路求值'
      }
    },
    {
      step: 28,
      line: 29,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1, r5: 1, r6: 1, x: 0 },
      highlightVar: 'x',
      explanation: {
        icon: 'memory',
        text: 'int x = 0，x 保存在栈地址 0x7ffc38',
        color: 'yellow',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 0 写入栈地址 0x7ffc38，x 用于演示短路求值'
      }
    },
    {
      step: 29,
      line: 30,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1, r5: 1, r6: 1, x: 0 },
      explanation: {
        icon: 'info',
        text: '阅读注释：x = 0, 用于短路测试',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 x 的值'
      }
    },
    {
      step: 30,
      line: 32,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1, r5: 1, r6: 1, x: 0 },
      explanation: {
        icon: 'info',
        text: '阅读注释：r7 = 0, 短路求值',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示短路求值机制'
      }
    },
    {
      step: 31,
      line: 32,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1, r5: 1, r6: 1, x: 0, r7: 0 },
      highlightVar: 'r7',
      explanation: {
        icon: 'alert',
        text: '短路求值：x!=0 为假，右侧 a/x 不执行',
        color: 'red',
        actor: 'CPU',
        detail: '关键！&&运算符左侧 (x!=0) = 0 为假，右侧 (a/x>1) 被跳过，避免除零错误！r7 = 0'
      }
    },
    {
      step: 32,
      line: 33,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1, r5: 1, r6: 1, x: 0, r7: 0 },
      explanation: {
        icon: 'check',
        text: '关键：短路求值避免了除零错误',
        color: 'green',
        actor: 'CPU',
        detail: '如果右侧执行会导致除零错误！&&和||都有短路特性：左侧决定结果时，右侧不执行'
      }
    },
    {
      step: 33,
      line: 35,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33],
      vars: { a: 10, b: 20, c: 10, r1: 1, r2: 1, r3: 0, r4: 1, r5: 1, r6: 1, x: 0, r7: 0 },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键结论：关系运算符返回 0 或 1，逻辑运算符支持短路求值优化'
      }
    }
  ],

  summary: {
    oneLiner: '掌握关系运算符和逻辑运算符，理解短路求值机制',
    pitfalls: [
      '关系运算符 (<, >, <=, >=, ==, !=) 返回 0(假) 或 1(真)',
      '逻辑与&&：左侧为假时右侧不执行（短路）',
      '逻辑或||：左侧为真时右侧不执行（短路）',
      '短路求值可用来避免错误，如 (x!=0) && (a/x>1)'
    ],
    transferQuestion: '为什么 (0 && printf("hi")) 不会输出 "hi"，而 (1 || printf("hi")) 也不会输出？',
    miniExercise: {
      bugCode: 'if (x != 0 & a/x > 1) {} // 使用&而不是&&会怎样？',
      hint: '使用单目运算符&不会短路！两侧都会执行，可能导致除零错误'
    }
  }
};
