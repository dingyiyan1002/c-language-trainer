window.LESSON_DATA = {
  meta: {
    chapterId: 'operators',
    lessonId: 'op-5',
    title: '复合赋值和自增自减运算符',
    index: 5,
    filename: 'operators_005_op-5.js',
    keyPoints: ['自增++和自减--运算符', '前缀与后缀的区别', '复合赋值运算符+= -= *=等', '运算符优先级和结合性']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 复合赋值和自增自减：简洁的赋值操作' }] },
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
      { type: 'id', text: 'a' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// b = 10, 然后 a = 11(后缀)' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 后缀++：先使用原值，再自增' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '++' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// a 先变为 12, 然后 c = 12(前缀)' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 前缀++：先自增，再使用新值' }
    ]},
    { num: 10, tokens: [] },
    { num: 11, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'd' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'op', text: '--' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// d = 12, 然后 a = 11(后缀)' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 后缀--：先使用原值，再自减' }
    ]},
    { num: 13, tokens: [] },
    { num: 14, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'e' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '--' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// a 先变为 10, 然后 e = 10(前缀)' }
    ]},
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 前缀--：先自减，再使用新值' }
    ]},
    { num: 16, tokens: [] },
    { num: 17, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ';' }
    ]},
    { num: 18, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// x = 5, 用于复合赋值测试' }
    ]},
    { num: 19, tokens: [] },
    { num: 20, tokens: [
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// x = x + 3 = 8' }
    ]},
    { num: 21, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 等价于 x = x + 3' }
    ]},
    { num: 22, tokens: [] },
    { num: 23, tokens: [
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// x = x - 2 = 6' }
    ]},
    { num: 24, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 等价于 x = x - 2' }
    ]},
    { num: 25, tokens: [] },
    { num: 26, tokens: [
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '4' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// x = x * 4 = 24' }
    ]},
    { num: 27, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 等价于 x = x * 4' }
    ]},
    { num: 28, tokens: [] },
    { num: 29, tokens: [
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '/=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// x = x / 3 = 8(整数除法)' }
    ]},
    { num: 30, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 等价于 x = x / 3' }
    ]},
    { num: 31, tokens: [] },
    { num: 32, tokens: [
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '%=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// x = x % 5 = 3(取余)' }
    ]},
    { num: 33, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 等价于 x = x % 5' }
    ]},
    { num: 34, tokens: [] },
    { num: 35, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'result' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ';' }
    ]},
    { num: 36, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// result = 1, 用于复杂表达式' }
    ]},
    { num: 37, tokens: [] },
    { num: 38, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ';' }
    ]},
    { num: 39, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// i = 3' }
    ]},
    { num: 40, tokens: [] },
    { num: 41, tokens: [
      { type: 'id', text: 'result' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '++' },
      { type: 'id', text: 'i' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// result = 3 * 4 = 12' }
    ]},
    { num: 42, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 前缀++先自增，i 变为 4，然后相乘' }
    ]},
    { num: 43, tokens: [] },
    { num: 44, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'j' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// j = i = 4' }
    ]},
    { num: 45, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 复制 i 的当前值' }
    ]},
    { num: 46, tokens: [] },
    { num: 47, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'k' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'j' },
      { type: 'op', text: '++' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// k = 4 + 5 = 9, 然后 j=5, i=6' }
    ]},
    { num: 48, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 后缀++先使用原值，再各自增 1' }
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
    { key: 'a', name: 'a', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '10' },
    { key: 'b', name: 'b', type: 'int', addr: '0x7ffc14', glowColor: 'rgba(168,85,247,0.35)', appearStep: 4, value: '10' },
    { key: 'a_after_b', name: 'a(赋值 b 后)', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(59,130,246,0.35)', appearStep: 5, value: '11' },
    { key: 'c', name: 'c', type: 'int', addr: '0x7ffc18', glowColor: 'rgba(249,115,22,0.35)', appearStep: 7, value: '12' },
    { key: 'a_after_c', name: 'a(赋值 c 后)', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(250,204,21,0.35)', appearStep: 8, value: '12' },
    { key: 'd', name: 'd', type: 'int', addr: '0x7ffc1c', glowColor: 'rgba(239,68,68,0.35)', appearStep: 10, value: '12' },
    { key: 'a_after_d', name: 'a(赋值 d 后)', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(34,197,94,0.35)', appearStep: 11, value: '11' },
    { key: 'e', name: 'e', type: 'int', addr: '0x7ffc20', glowColor: 'rgba(168,85,247,0.35)', appearStep: 13, value: '10' },
    { key: 'a_after_e', name: 'a(赋值 e 后)', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(59,130,246,0.35)', appearStep: 14, value: '10' },
    { key: 'x', name: 'x', type: 'int', addr: '0x7ffc24', glowColor: 'rgba(249,115,22,0.35)', appearStep: 16, value: '3' },
    { key: 'result', name: 'result', type: 'int', addr: '0x7ffc28', glowColor: 'rgba(250,204,21,0.35)', appearStep: 34, value: '12' },
    { key: 'i', name: 'i', type: 'int', addr: '0x7ffc2c', glowColor: 'rgba(239,68,68,0.35)', appearStep: 37, value: '6' },
    { key: 'j', name: 'j', type: 'int', addr: '0x7ffc30', glowColor: 'rgba(34,197,94,0.35)', appearStep: 43, value: '5' },
    { key: 'k', name: 'k', type: 'int', addr: '0x7ffc34', glowColor: 'rgba(168,85,247,0.35)', appearStep: 46, value: '9' }
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
        detail: '程序即将开始运行，演示复合赋值和自增自减运算符'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：复合赋值和自增自减 - 简洁的赋值操作',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示简洁赋值语法'
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
      vars: { a: 10, b: 10 },
      highlightVar: 'b',
      explanation: {
        icon: 'arrow-right',
        text: 'int b = a++：b = 10(原值)，然后 a 自增为 11',
        color: 'orange',
        actor: 'CPU',
        detail: '后缀++：先将 a 的原值 10 赋给 b，然后 a 执行 INC 指令变为 11。关键：先赋值，后自增！'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { a: 11, b: 10 },
      explanation: {
        icon: 'info',
        text: '阅读注释：后缀++：先使用原值，再自增',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释后缀++的语义'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 3, 5, 6],
      vars: { a: 11, b: 10 },
      explanation: {
        icon: 'info',
        text: '阅读注释：a 先变为 12, 然后 c = 12(前缀)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示前缀++'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { a: 12, b: 10, c: 12 },
      highlightVar: 'c',
      explanation: {
        icon: 'arrow-right',
        text: 'int c = ++a：a 先自增为 12，然后 c = 12(新值)',
        color: 'yellow',
        actor: 'CPU',
        detail: '前缀++：a 先执行 INC 指令从 11 变为 12，然后将新值 12 赋给 c。关键：先自增，后赋值！'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { a: 12, b: 10, c: 12 },
      explanation: {
        icon: 'info',
        text: '阅读注释：前缀++：先自增，再使用新值',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释前缀++的语义'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9],
      vars: { a: 12, b: 10, c: 12 },
      explanation: {
        icon: 'info',
        text: '阅读注释：d = 12, 然后 a = 11(后缀)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示后缀--'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { a: 11, b: 10, c: 12, d: 12 },
      highlightVar: 'd',
      explanation: {
        icon: 'arrow-left',
        text: 'int d = a--：d = 12(原值)，然后 a 自减为 11',
        color: 'red',
        actor: 'CPU',
        detail: '后缀--：先将 a 的原值 12 赋给 d，然后 a 执行 DEC 指令变为 11。关键：先赋值，后自减！'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { a: 11, b: 10, c: 12, d: 12 },
      explanation: {
        icon: 'info',
        text: '阅读注释：后缀--：先使用原值，再自减',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释后缀--的语义'
      }
    },
    {
      step: 12,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12],
      vars: { a: 11, b: 10, c: 12, d: 12 },
      explanation: {
        icon: 'info',
        text: '阅读注释：a 先变为 10, 然后 e = 10(前缀)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示前缀--'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10 },
      highlightVar: 'e',
      explanation: {
        icon: 'arrow-left',
        text: 'int e = --a：a 先自减为 10，然后 e = 10(新值)',
        color: 'green',
        actor: 'CPU',
        detail: '前缀--：a 先执行 DEC 指令从 11 变为 10，然后将新值 10 赋给 e。关键：先自减，后赋值！'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10 },
      explanation: {
        icon: 'info',
        text: '阅读注释：前缀--：先自减，再使用新值',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释前缀--的语义'
      }
    },
    {
      step: 15,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10 },
      explanation: {
        icon: 'info',
        text: '阅读注释：x = 5, 用于复合赋值测试',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示复合赋值'
      }
    },
    {
      step: 16,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 5 },
      highlightVar: 'x',
      explanation: {
        icon: 'memory',
        text: 'int x = 5，x 保存在栈地址 0x7ffc24',
        color: 'purple',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 5 写入栈地址 0x7ffc24，x 用于演示复合赋值运算符'
      }
    },
    {
      step: 17,
      line: 18,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 5 },
      explanation: {
        icon: 'info',
        text: '阅读注释：x = 5, 用于复合赋值测试',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 x 的初始值'
      }
    },
    {
      step: 18,
      line: 20,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 5 },
      explanation: {
        icon: 'info',
        text: '阅读注释：x = x + 3 = 8',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示+=运算符'
      }
    },
    {
      step: 19,
      line: 20,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 8 },
      highlightVar: 'x',
      explanation: {
        icon: 'calculator',
        text: 'x += 3：x = 5 + 3 = 8',
        color: 'orange',
        actor: 'CPU',
        detail: '复合赋值+=：等价于 x = x + 3，但更简洁。ADD 指令将 3 加到 x 的当前值'
      }
    },
    {
      step: 20,
      line: 21,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 8 },
      explanation: {
        icon: 'info',
        text: '阅读注释：等价于 x = x + 3',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认+=的等价形式'
      }
    },
    {
      step: 21,
      line: 23,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 8 },
      explanation: {
        icon: 'info',
        text: '阅读注释：x = x - 2 = 6',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示-=运算符'
      }
    },
    {
      step: 22,
      line: 23,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 6 },
      highlightVar: 'x',
      explanation: {
        icon: 'calculator',
        text: 'x -= 2：x = 8 - 2 = 6',
        color: 'yellow',
        actor: 'CPU',
        detail: '复合赋值-=：等价于 x = x - 2。SUB 指令从 x 减去 2'
      }
    },
    {
      step: 23,
      line: 24,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 6 },
      explanation: {
        icon: 'info',
        text: '阅读注释：等价于 x = x - 2',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认-=的等价形式'
      }
    },
    {
      step: 24,
      line: 26,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 6 },
      explanation: {
        icon: 'info',
        text: '阅读注释：x = x * 4 = 24',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示*=运算符'
      }
    },
    {
      step: 25,
      line: 26,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 24 },
      highlightVar: 'x',
      explanation: {
        icon: 'calculator',
        text: 'x *= 4：x = 6 * 4 = 24',
        color: 'red',
        actor: 'CPU',
        detail: '复合赋值*=：等价于 x = x * 4。IMUL 指令将 x 乘以 4'
      }
    },
    {
      step: 26,
      line: 27,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 24 },
      explanation: {
        icon: 'info',
        text: '阅读注释：等价于 x = x * 4',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认*=的等价形式'
      }
    },
    {
      step: 27,
      line: 29,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 24 },
      explanation: {
        icon: 'info',
        text: '阅读注释：x = x / 3 = 8(整数除法)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示/=运算符'
      }
    },
    {
      step: 28,
      line: 29,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 8 },
      highlightVar: 'x',
      explanation: {
        icon: 'calculator',
        text: 'x /= 3：x = 24 / 3 = 8(整数除法)',
        color: 'green',
        actor: 'CPU',
        detail: '复合赋值/=：等价于 x = x / 3。IDIV 指令将 x 除以 3，结果为整数 8'
      }
    },
    {
      step: 29,
      line: 30,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 8 },
      explanation: {
        icon: 'info',
        text: '阅读注释：等价于 x = x / 3',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认/=的等价形式'
      }
    },
    {
      step: 30,
      line: 32,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 8 },
      explanation: {
        icon: 'info',
        text: '阅读注释：x = x % 5 = 3(取余)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示%=运算符'
      }
    },
    {
      step: 31,
      line: 32,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3 },
      highlightVar: 'x',
      explanation: {
        icon: 'calculator',
        text: 'x %= 5：x = 8 % 5 = 3(取余运算)',
        color: 'purple',
        actor: 'CPU',
        detail: '复合赋值%=：等价于 x = x % 5。IDIV 指令计算 8/5 的余数 3'
      }
    },
    {
      step: 32,
      line: 33,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3 },
      explanation: {
        icon: 'info',
        text: '阅读注释：等价于 x = x % 5',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认%=的等价形式'
      }
    },
    {
      step: 33,
      line: 35,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3 },
      explanation: {
        icon: 'info',
        text: '阅读注释：result = 1, 用于复杂表达式',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示复杂表达式'
      }
    },
    {
      step: 34,
      line: 35,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 1 },
      highlightVar: 'result',
      explanation: {
        icon: 'memory',
        text: 'int result = 1，result 保存在 0x7ffc28',
        color: 'cyan',
        actor: 'CPU',
        detail: 'MOV 指令将 1 写入 result，用于演示复杂表达式中的运算符优先级'
      }
    },
    {
      step: 35,
      line: 37,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 1 },
      explanation: {
        icon: 'info',
        text: '阅读注释：i = 3',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将声明 i'
      }
    },
    {
      step: 36,
      line: 37,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 37],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 1, i: 3 },
      highlightVar: 'i',
      explanation: {
        icon: 'memory',
        text: 'int i = 3，i 保存在栈地址 0x7ffc2c',
        color: 'yellow',
        actor: 'CPU',
        detail: 'MOV 指令将 3 写入 i，用于演示复杂表达式'
      }
    },
    {
      step: 37,
      line: 38,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 37],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 1, i: 3 },
      explanation: {
        icon: 'info',
        text: '阅读注释：复制 i 的当前值',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 i 的值'
      }
    },
    {
      step: 38,
      line: 41,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 37, 38],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 1, i: 3 },
      explanation: {
        icon: 'info',
        text: '阅读注释：result = 3 * 4 = 12',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示前缀++在表达式中的应用'
      }
    },
    {
      step: 39,
      line: 41,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 37, 38, 41],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 12, i: 4 },
      highlightVar: 'result',
      explanation: {
        icon: 'calculator',
        text: 'result = i * (++i)：i 先从 3 变为 4，然后 result = 3 * 4 = 12',
        color: 'orange',
        actor: 'CPU',
        detail: '关键！前缀++先执行，i 从 3 变为 4。但 i 在表达式中的值取决于求值顺序，此处演示左侧 i 使用原值 3，右侧++i 后 i=4，结果 3*4=12'
      }
    },
    {
      step: 40,
      line: 42,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 37, 38, 41],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 12, i: 4 },
      explanation: {
        icon: 'info',
        text: '阅读注释：前缀++先自增，i 变为 4，然后相乘',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释前缀++在表达式中的行为'
      }
    },
    {
      step: 41,
      line: 44,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 37, 38, 41, 42],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 12, i: 4 },
      explanation: {
        icon: 'info',
        text: '阅读注释：j = i = 4',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将复制 i 的值'
      }
    },
    {
      step: 42,
      line: 44,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 37, 38, 41, 42, 44],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 12, i: 4, j: 4 },
      highlightVar: 'j',
      explanation: {
        icon: 'memory',
        text: 'int j = i：j = 4，复制 i 的当前值',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令从地址 0x7ffc2c (i) 读取值 4，写入地址 0x7ffc30 (j)'
      }
    },
    {
      step: 43,
      line: 45,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 37, 38, 41, 42, 44],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 12, i: 4, j: 4 },
      explanation: {
        icon: 'info',
        text: '阅读注释：k = 4 + 5 = 9, 然后 j=5, i=6',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示复杂后缀表达式'
      }
    },
    {
      step: 44,
      line: 47,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 37, 38, 41, 42, 44, 45],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 12, i: 4, j: 4 },
      explanation: {
        icon: 'info',
        text: '阅读注释：后缀++先使用原值，再各自增 1',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释后缀++在表达式中的行为'
      }
    },
    {
      step: 45,
      line: 47,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 37, 38, 41, 42, 44, 45, 47],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 12, i: 6, j: 5, k: 9 },
      highlightVar: 'k',
      explanation: {
        icon: 'calculator',
        text: 'k = j++ + i++：k = 4 + 5 = 9，然后 j=5, i=6',
        color: 'purple',
        actor: 'CPU',
        detail: '关键！两个后缀++都先使用原值：j=4, i=5，相加得 9 赋给 k。表达式求值后，j 和 i 各自增 1：j=5, i=6'
      }
    },
    {
      step: 46,
      line: 48,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 37, 38, 41, 42, 44, 45, 47],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 12, i: 6, j: 5, k: 9 },
      explanation: {
        icon: 'info',
        text: '阅读注释：后缀++先使用原值，再各自增 1',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认后缀++的行为'
      }
    },
    {
      step: 47,
      line: 50,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 37, 38, 41, 42, 44, 45, 47, 48],
      vars: { a: 10, b: 10, c: 12, d: 12, e: 10, x: 3, result: 12, i: 6, j: 5, k: 9 },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键结论：前缀运算符先执行再用新值，后缀运算符先用原值再执行'
      }
    }
  ],

  summary: {
    oneLiner: '掌握自增自减和复合赋值运算符，理解前缀与后缀的本质区别',
    pitfalls: [
      '前缀++/--：先自增/减，再使用新值',
      '后缀++/--：先使用原值，再自增/减',
      '复合赋值 (+=, -=, *=, /=, %=) 等价于完整赋值，但更简洁',
      '同一表达式中多次修改同一变量会导致未定义行为，应避免'
    ],
    transferQuestion: '为什么 i = i++ + 1; 在不同编译器可能得到不同结果？',
    miniExercise: {
      bugCode: 'int i = 1; int x = i++ + ++i; // 未定义行为！',
      hint: '同一表达式中对同一变量多次修改是未定义行为，结果不可预测，应拆分为多个语句'
    }
  }
};
