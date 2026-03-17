window.LESSON_DATA = {
  meta: {
    chapterId: 'pointers',
    lessonId: 'ptr-5',
    title: '双重指针与函数指针',
    index: 5,
    filename: 'pointers_005_ptr-5.js',
    keyPoints: ['双重指针声明与解引用', '修改指针的值', '函数指针类型', '回调函数机制']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 双重指针与函数指针：高级指针模式' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '               ' },
      { type: 'cmt', text: '// 整型变量 a = 10' }
    ]},
    { num: 3, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// a 地址：0x7ffc10, 值：10' }
    ]},
    { num: 4, tokens: [] },
    { num: 5, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '         ' },
      { type: 'cmt', text: '// 一级指针 p = &a' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// p 地址：0x7ffc20, 值：0x7ffc10' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'pp' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 二级指针 pp = &p' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// pp 地址：0x7ffc30, 值：0x7ffc20' }
    ]},
    { num: 10, tokens: [] },
    { num: 11, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'val1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '        ' },
      { type: 'cmt', text: '// val1 = *p = 10' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 一次解引用，得到 a 的值' }
    ]},
    { num: 13, tokens: [] },
    { num: 14, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'val2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'pp' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '       ' },
      { type: 'cmt', text: '// val2 = **pp = 10' }
    ]},
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 两次解引用：*pp 得到 p，**pp 得到 a' }
    ]},
    { num: 16, tokens: [] },
    { num: 17, tokens: [
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '20' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '             ' },
      { type: 'cmt', text: '// 通过*p 修改 a = 20' }
    ]},
    { num: 18, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// a 现在是 20' }
    ]},
    { num: 19, tokens: [] },
    { num: 20, tokens: [
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'modifyPtr' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'ptr' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: '{' },
      { type: 'ws', text: '   ' },
      { type: 'cmt', text: '// 双重指针参数' }
    ]},
    { num: 21, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'static' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'backup' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '99' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 静态变量' }
    ]},
    { num: 22, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'ptr' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'backup' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 修改传入的指针' }
    ]},
    { num: 23, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// *ptr = &backup，改变了 ptr 指向的目标' }
    ]},
    { num: 24, tokens: [
      { type: 'ws', text: '}' },
      { type: 'punc', text: '' }
    ]},
    { num: 25, tokens: [] },
    { num: 26, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'add' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '}' },
      { type: 'cmt', text: '// 普通函数' }
    ]},
    { num: 27, tokens: [] },
    { num: 28, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'funcPtr' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'add' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 函数指针' }
    ]},
    { num: 29, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// funcPtr 指向 add 函数入口地址' }
    ]},
    { num: 30, tokens: [] },
    { num: 31, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'result' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'funcPtr' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 通过函数指针调用' }
    ]},
    { num: 32, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// result = (*funcPtr)(3, 5) = add(3, 5) = 8' }
    ]},
    { num: 33, tokens: [] },
    { num: 34, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'a', name: 'a', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '10' },
    { key: 'p', name: 'p', type: 'int*', addr: '0x7ffc20', glowColor: 'rgba(168,85,247,0.35)', appearStep: 4, value: '0x7ffc10' },
    { key: 'pp', name: 'pp', type: 'int**', addr: '0x7ffc30', glowColor: 'rgba(59,130,246,0.35)', appearStep: 7, value: '0x7ffc20' },
    { key: 'val1', name: 'val1', type: 'int', addr: '0x7ffc40', glowColor: 'rgba(249,115,22,0.35)', appearStep: 10, value: '10' },
    { key: 'val2', name: 'val2', type: 'int', addr: '0x7ffc44', glowColor: 'rgba(250,204,21,0.35)', appearStep: 13, value: '10' },
    { key: 'a_modified', name: 'a', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(239,68,68,0.35)', appearStep: 16, value: '20' },
    { key: 'backup', name: 'backup', type: 'int', addr: '0x7ffc50', glowColor: 'rgba(34,197,94,0.35)', appearStep: 20, value: '99' },
    { key: 'funcPtr', name: 'funcPtr', type: 'int(*)(int,int)', addr: '0x7ffc60', glowColor: 'rgba(168,85,247,0.35)', appearStep: 27, value: '0x00401000' },
    { key: 'result', name: 'result', type: 'int', addr: '0x7ffc70', glowColor: 'rgba(250,204,21,0.35)', appearStep: 30, value: '8' }
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
        detail: '程序即将开始运行，演示双重指针与函数指针'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { a: '10' },
      explanation: {
        icon: 'info',
        text: '阅读注释：双重指针与函数指针 - 高级指针模式',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示高级指针用法'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { a: '10' },
      highlightVar: 'a',
      explanation: {
        icon: 'memory',
        text: 'int a = 10，a 分配地址 0x7ffc10',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 10 写入栈地址 0x7ffc10，a 占用 4 字节'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { a: '10' },
      explanation: {
        icon: 'info',
        text: '阅读注释：a 地址：0x7ffc10, 值：10',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 a 的状态'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3],
      vars: { a: '10', p: '0x7ffc10' },
      highlightVar: 'p',
      explanation: {
        icon: 'pointer',
        text: 'int *p = &a，p 保存 a 的地址',
        color: 'purple',
        actor: 'CPU',
        detail: 'LEA 指令加载 a 的地址 0x7ffc10，MOV 指令写入 p 变量地址 0x7ffc20。p 是指向 int 的指针'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { a: '10', p: '0x7ffc10' },
      explanation: {
        icon: 'info',
        text: '阅读注释：p 地址：0x7ffc20, 值：0x7ffc10',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，说明 p 本身也有地址'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 3, 5, 6],
      vars: { a: '10', p: '0x7ffc10' },
      explanation: {
        icon: 'info',
        text: '阅读注释：二级指针 pp = &p',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将创建双重指针'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { a: '10', p: '0x7ffc10', pp: '0x7ffc20' },
      highlightVar: 'pp',
      explanation: {
        icon: 'pointer',
        text: 'int **pp = &p，pp 保存 p 的地址',
        color: 'cyan',
        actor: 'CPU',
        detail: 'LEA 指令加载 p 的地址 0x7ffc20，MOV 指令写入 pp 变量地址 0x7ffc30。pp 是指向 int* 的指针，即 int**'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { a: '10', p: '0x7ffc10', pp: '0x7ffc20' },
      explanation: {
        icon: 'info',
        text: '阅读注释：pp 地址：0x7ffc30, 值：0x7ffc20',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，展示三级地址链：pp(0x7ffc30)→p(0x7ffc20)→a(0x7ffc10)'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9],
      vars: { a: '10', p: '0x7ffc10', pp: '0x7ffc20' },
      explanation: {
        icon: 'info',
        text: '阅读注释：val1 = *p = 10',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示一次解引用'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { a: '10', p: '0x7ffc10', pp: '0x7ffc20', val1: '10' },
      highlightVar: 'val1',
      explanation: {
        icon: 'memory',
        text: '*p：解引用 p，从 0x7ffc10 读取 10',
        color: 'orange',
        actor: 'CPU',
        detail: 'MOV 指令从 p 保存的地址 0x7ffc10 读取 int 值 10，写入 val1 变量地址 0x7ffc40'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { a: '10', p: '0x7ffc10', pp: '0x7ffc20', val1: '10' },
      explanation: {
        icon: 'info',
        text: '阅读注释：一次解引用，得到 a 的值',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认解引用结果'
      }
    },
    {
      step: 12,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12],
      vars: { a: '10', p: '0x7ffc10', pp: '0x7ffc20', val1: '10' },
      explanation: {
        icon: 'info',
        text: '阅读注释：val2 = **pp = 10',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示双重解引用'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { a: '10', p: '0x7ffc10', pp: '0x7ffc20', val1: '10', val2: '10' },
      highlightVar: 'val2',
      explanation: {
        icon: 'memory',
        text: '**pp：两次解引用，**pp = *p = a = 10',
        color: 'yellow',
        actor: 'CPU',
        detail: '第一次解引用*pp：从 0x7ffc30 读取 0x7ffc20 得到 p；第二次解引用*(*pp)：从 0x7ffc10 读取 10 得到 a'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { a: '10', p: '0x7ffc10', pp: '0x7ffc20', val1: '10', val2: '10' },
      explanation: {
        icon: 'info',
        text: '阅读注释：两次解引用：*pp 得到 p，**pp 得到 a',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释双重解引用过程'
      }
    },
    {
      step: 15,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
      vars: { a: '10', p: '0x7ffc10', pp: '0x7ffc20', val1: '10', val2: '10' },
      explanation: {
        icon: 'info',
        text: '阅读注释：通过*p 修改 a = 20',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示通过指针修改变量'
      }
    },
    {
      step: 16,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17],
      vars: { a: '20', p: '0x7ffc10', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20' },
      highlightVar: 'a_modified',
      explanation: {
        icon: 'memory',
        text: '*p = 20，通过指针修改 a 的值',
        color: 'red',
        actor: 'CPU',
        detail: 'MOV 指令将 20 写入 p 指向的地址 0x7ffc10，a 从 10 变为 20。这是指针的核心能力：间接修改!'
      }
    },
    {
      step: 17,
      line: 18,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17],
      vars: { a: '20', p: '0x7ffc10', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20' },
      explanation: {
        icon: 'info',
        text: '阅读注释：a 现在是 20',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认修改结果'
      }
    },
    {
      step: 18,
      line: 20,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18],
      vars: { a: '20', p: '0x7ffc10', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20' },
      explanation: {
        icon: 'info',
        text: 'modifyPtr 函数：双重指针参数',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示双重指针的典型应用：修改指针本身'
      }
    },
    {
      step: 19,
      line: 21,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20],
      vars: { a: '20', p: '0x7ffc10', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20', backup: '99' },
      highlightVar: 'backup',
      explanation: {
        icon: 'memory',
        text: 'static int backup = 99，静态变量',
        color: 'green',
        actor: 'CPU',
        detail: '静态变量 backup 分配在数据段地址 0x7ffc50，生命周期贯穿程序运行期，初始值 99'
      }
    },
    {
      step: 20,
      line: 22,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21],
      vars: { a: '20', p: '0x7ffc10', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20', backup: '99' },
      explanation: {
        icon: 'pointer',
        text: '*ptr = &backup，通过**ptr 修改指针 p',
        color: 'orange',
        actor: 'CPU',
        detail: '双重指针参数 ptr 保存 p 的地址 0x7ffc20，*ptr = &backup 将 backup 地址 0x7ffc50 写入 0x7ffc20，p 被修改!'
      }
    },
    {
      step: 21,
      line: 23,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 22],
      vars: { a: '20', p: '0x7ffc50', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20', backup: '99' },
      explanation: {
        icon: 'check',
        text: '双重指针的核心应用：修改传入的指针',
        color: 'green',
        actor: 'CPU',
        detail: '关键模式：void foo(T** ptr) 可以修改 T* 类型的指针本身，类似 int* 修改 int 变量'
      }
    },
    {
      step: 22,
      line: 24,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 22, 23],
      vars: { a: '20', p: '0x7ffc50', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20', backup: '99' },
      explanation: {
        icon: 'terminal',
        text: 'modifyPtr 函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回 main。p 现在指向 backup(0x7ffc50)，不再指向 a！这就是双重指针的威力'
      }
    },
    {
      step: 23,
      line: 26,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 22, 23, 24],
      vars: { a: '20', p: '0x7ffc50', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20', backup: '99' },
      explanation: {
        icon: 'info',
        text: 'int add(int x, int y) 函数定义',
        color: 'blue',
        actor: 'CPU',
        detail: '编译器记录 add 函数入口地址 0x00401000，返回 int，接受两个 int 参数'
      }
    },
    {
      step: 24,
      line: 27,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 22, 23, 24, 26],
      vars: { a: '20', p: '0x7ffc50', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20', backup: '99' },
      explanation: {
        icon: 'info',
        text: '阅读注释：函数指针',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将创建函数指针'
      }
    },
    {
      step: 25,
      line: 28,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 22, 23, 24, 26, 28],
      vars: { a: '20', p: '0x7ffc50', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20', backup: '99', funcPtr: '0x00401000' },
      highlightVar: 'funcPtr',
      explanation: {
        icon: 'pointer',
        text: '函数指针 funcPtr 指向 add 函数',
        color: 'purple',
        actor: 'CPU',
        detail: 'funcPtr 是函数指针，类型 int(*)(int,int)，保存 add 的入口地址 0x00401000。函数名 add 自动退化为函数地址!'
      }
    },
    {
      step: 26,
      line: 29,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 22, 23, 24, 26, 28],
      vars: { a: '20', p: '0x7ffc50', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20', backup: '99', funcPtr: '0x00401000' },
      explanation: {
        icon: 'info',
        text: '阅读注释：funcPtr 指向 add 函数入口地址',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认函数指针指向'
      }
    },
    {
      step: 27,
      line: 31,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 22, 23, 24, 26, 28, 29],
      vars: { a: '20', p: '0x7ffc50', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20', backup: '99', funcPtr: '0x00401000' },
      explanation: {
        icon: 'info',
        text: '阅读注释：通过函数指针调用',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示回调'
      }
    },
    {
      step: 28,
      line: 31,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 22, 23, 24, 26, 28, 29, 31],
      vars: { a: '20', p: '0x7ffc50', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20', backup: '99', funcPtr: '0x00401000', result: '8' },
      highlightVar: 'result',
      explanation: {
        icon: 'terminal',
        text: 'funcPtr(3, 5) = add(3, 5) = 8',
        color: 'yellow',
        actor: 'CPU',
        detail: 'CALL 指令跳转到 funcPtr 保存的地址 0x00401000(add 入口)，PUSH 参数 3 和 5，执行 add 函数，返回值 8 写入 EAX，赋给 result'
      }
    },
    {
      step: 29,
      line: 32,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 22, 23, 24, 26, 28, 29, 31],
      vars: { a: '20', p: '0x7ffc50', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20', backup: '99', funcPtr: '0x00401000', result: '8' },
      explanation: {
        icon: 'info',
        text: '阅读注释：result = (*funcPtr)(3, 5) = 8',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认函数指针调用结果'
      }
    },
    {
      step: 30,
      line: 34,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 22, 23, 24, 26, 28, 29, 31, 32],
      vars: { a: '20', p: '0x7ffc50', pp: '0x7ffc20', val1: '10', val2: '10', a_modified: '20', backup: '99', funcPtr: '0x00401000', result: '8' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。核心总结：int** 用于修改指针本身，函数指针实现回调机制，两者都是高级 C 编程的基石'
      }
    }
  ],

  summary: {
    oneLiner: '掌握双重指针与函数指针的声明、解引用和应用场景',
    pitfalls: [
      'int** pp 用于修改 int* 指针本身，类似 int* 用于修改 int 变量',
      '双重解引用**pp：第一次得到*p(指针),第二次得到值 (a)',
      '函数指针类型必须与目标函数签名匹配：返回类型 (*name)(参数列表)',
      '函数名自动退化为函数入口地址，可以赋给函数指针'
    ],
    transferQuestion: '如果想编写一个函数，能够修改传入的 int** 指针 (三级指针)，函数参数应该如何声明？',
    miniExercise: {
      bugCode: 'void setPtr(int *p) { p = NULL; } setPtr(myPtr); // myPtr 不变!',
      hint: '值传递只修改了 p 的副本！应使用双重指针：void setPtr(int **p) { *p = NULL; }'
    }
  }
};
