window.LESSON_DATA = {
  meta: {
    chapterId: 'functions',
    lessonId: 'func-3',
    title: '函数参数与返回值',
    index: 3,
    filename: 'functions_003_func-3.js',
    keyPoints: ['参数传递机制', '返回值类型', '函数原型声明', '实参与形参']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 函数原型声明' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'add' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 3, tokens: [] },
    { num: 4, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'main' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 5, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 实参 a = 5' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 实参 b = 3' }
    ]},
    { num: 7, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'result' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'add' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 调用 add(5, 3)' }
    ]},
    { num: 8, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"result = %d\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'result' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]},
    { num: 10, tokens: [
      { type: 'punc', text: '}' }
    ]},
    { num: 11, tokens: [] },
    { num: 12, tokens: [
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
      { type: 'punc', text: '{' }
    ]},
    { num: 13, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'sum' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 形参 x=5, y=3' }
    ]},
    { num: 14, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'sum' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '              ' },
      { type: 'cmt', text: '// 返回值 8' }
    ]},
    { num: 15, tokens: [
      { type: 'punc', text: '}' }
    ]}
  ],

  varConfig: [
    { key: 'a', name: 'a', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(34,197,94,0.35)', appearStep: 4, value: '5' },
    { key: 'b', name: 'b', type: 'int', addr: '0x7ffc14', glowColor: 'rgba(168,85,247,0.35)', appearStep: 5, value: '3' },
    { key: 'result', name: 'result', type: 'int', addr: '0x7ffc18', glowColor: 'rgba(59,130,246,0.35)', appearStep: 6 },
    { key: 'x', name: 'x', type: 'int', addr: '0x7ffbf0', glowColor: 'rgba(249,115,22,0.35)', appearStep: 7, value: '5' },
    { key: 'y', name: 'y', type: 'int', addr: '0x7ffbf4', glowColor: 'rgba(250,204,21,0.35)', appearStep: 7, value: '3' },
    { key: 'sum', name: 'sum', type: 'int', addr: '0x7ffbf8', glowColor: 'rgba(239,68,68,0.35)', appearStep: 8, value: '8' }
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
        detail: '程序即将开始运行，演示函数参数传递与返回值机制'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：函数原型声明',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，告知编译器 add 函数的签名'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: {},
      explanation: {
        icon: 'gear',
        text: 'int add(int, int); 函数原型声明',
        color: 'purple',
        actor: 'Compiler',
        detail: '编译器记录 add 函数返回 int，接受两个 int 参数，以便后续调用时进行类型检查'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 2],
      vars: {},
      explanation: {
        icon: 'terminal',
        text: 'int main() 函数入口',
        color: 'green',
        actor: 'CPU',
        detail: '程序入口点，栈帧建立，准备执行 main 函数体'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 4],
      vars: { a: 5 },
      highlightVar: 'a',
      explanation: {
        icon: 'memory',
        text: 'int a = 5，实参 a 初始化为 5',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 5 写入栈地址 0x7ffc10，a 占用 4 字节'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 4, 5],
      vars: { a: 5, b: 3 },
      highlightVar: 'b',
      explanation: {
        icon: 'memory',
        text: 'int b = 3，实参 b 初始化为 3',
        color: 'purple',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 3 写入栈地址 0x7ffc14，b 占用 4 字节'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 2, 4, 5, 6],
      vars: { a: 5, b: 3, result: undefined },
      highlightVar: 'result',
      explanation: {
        icon: 'terminal',
        text: '调用 add(a, b)，准备参数',
        color: 'blue',
        actor: 'CPU',
        detail: 'CALL 指令前，PUSH 指令将实参 b(3) 和 a(5) 按从右到左顺序压栈，然后 CALL 跳转到 add 函数'
      }
    },
    {
      step: 7,
      line: 12,
      executedLines: [1, 2, 4, 5, 6, 7],
      vars: { a: 5, b: 3, result: undefined, x: 5, y: 3 },
      highlightVar: 'x',
      explanation: {
        icon: 'memory',
        text: 'add 函数栈帧建立，形参 x=5, y=3',
        color: 'orange',
        actor: 'CPU',
        detail: '被调用函数 add 建立新栈帧，形参 x 和 y 是实参 a 和 b 的副本，分别位于 0x7ffbf0 和 0x7ffbf4'
      }
    },
    {
      step: 8,
      line: 13,
      executedLines: [1, 2, 4, 5, 6, 7, 12],
      vars: { a: 5, b: 3, result: undefined, x: 5, y: 3, sum: 8 },
      highlightVar: 'sum',
      explanation: {
        icon: 'memory',
        text: 'int sum = x + y = 5 + 3 = 8',
        color: 'yellow',
        actor: 'CPU',
        detail: 'ADD 指令将 x(5) 和 y(3) 相加，结果 8 写入 sum 变量地址 0x7ffbf8'
      }
    },
    {
      step: 9,
      line: 14,
      executedLines: [1, 2, 4, 5, 6, 7, 12, 13],
      vars: { a: 5, b: 3, result: undefined, x: 5, y: 3, sum: 8 },
      explanation: {
        icon: 'terminal',
        text: 'return sum; 返回值 8',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将 sum(8) 放入 EAX 寄存器作为返回值，准备返回给调用者'
      }
    },
    {
      step: 10,
      line: 15,
      executedLines: [1, 2, 4, 5, 6, 7, 12, 13, 14],
      vars: { a: 5, b: 3, result: 8, x: 5, y: 3, sum: 8 },
      explanation: {
        icon: 'check',
        text: 'add 函数返回，result = 8',
        color: 'green',
        actor: 'CPU',
        detail: 'RET 指令返回 main，EAX 中的值 8 被赋给 result 变量，add 栈帧销毁，形参 x/y/sum 生命周期结束'
      }
    },
    {
      step: 11,
      line: 8,
      executedLines: [1, 2, 4, 5, 6, 7, 12, 13, 14, 15],
      vars: { a: 5, b: 3, result: 8 },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出 result = 8',
        color: 'blue',
        actor: 'CPU',
        detail: 'PUSH result 的值 8 到栈，CALL printf 格式化输出'
      }
    },
    {
      step: 12,
      line: 9,
      executedLines: [1, 2, 4, 5, 6, 7, 12, 13, 14, 15, 8],
      vars: { a: 5, b: 3, result: 8 },
      explanation: {
        icon: 'terminal',
        text: 'return 0; main 函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回操作系统，程序结束。关键点：实参和形参是独立变量，修改形参不影响实参'
      }
    }
  ],

  summary: {
    oneLiner: '掌握函数参数传递机制和返回值流程',
    pitfalls: [
      '实参和形参是值拷贝关系，修改形参不会影响实参',
      '函数原型声明必须在调用之前，否则编译器无法检查参数类型',
      '返回值通过 EAX 寄存器传递，返回后局部变量立即销毁',
      '参数压栈顺序通常是从右到左 (cdecl 调用约定)'
    ],
    transferQuestion: '如果想在函数内修改实参的值，应该使用什么方式传递参数？',
    miniExercise: {
      bugCode: 'void swap(int a, int b) { int t=a; a=b; b=t; } swap(x, y); // 无效交换',
      hint: '值传递只交换了副本，应使用指针传递：void swap(int *a, int *b)'
    }
  }
};
