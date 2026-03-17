window.LESSON_DATA = {
  meta: {
    chapterId: 'functions',
    lessonId: 'func-4',
    title: '指针参数与地址传递',
    index: 4,
    filename: 'functions_004_func-4.js',
    keyPoints: ['指针作为函数参数', '修改实参的值', 'swap 函数详解', '地址传递机制']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 指针参数：通过地址修改实参的值' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'swap' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'b' },
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
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// x = 10, 地址 0x7ffc10' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '20' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// y = 20, 地址 0x7ffc14' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"交换前：x = %d, y = %d\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 输出：x = 10, y = 20' }
    ]},
    { num: 10, tokens: [] },
    { num: 11, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'fn', text: 'swap' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'x' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'y' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 传递 x 和 y 的地址' }
    ]},
    { num: 12, tokens: [] },
    { num: 13, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"交换后：x = %d, y = %d\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 14, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 输出：x = 20, y = 10，成功交换！' }
    ]},
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]},
    { num: 16, tokens: [
      { type: 'punc', text: '}' }
    ]},
    { num: 17, tokens: [] },
    { num: 18, tokens: [
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'swap' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 19, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'temp' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '       ' },
      { type: 'cmt', text: '// temp = *a = 10' }
    ]},
    { num: 20, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '         ' },
      { type: 'cmt', text: '// *a = *b = 20，修改了 x' }
    ]},
    { num: 21, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'temp' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '       ' },
      { type: 'cmt', text: '// *b = temp = 10，修改了 y' }
    ]},
    { num: 22, tokens: [
      { type: 'punc', text: '}' }
    ]}
  ],

  varConfig: [
    { key: 'x', name: 'x', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(34,197,94,0.35)', appearStep: 4, value: '10' },
    { key: 'y', name: 'y', type: 'int', addr: '0x7ffc14', glowColor: 'rgba(168,85,247,0.35)', appearStep: 5, value: '20' },
    { key: 'a', name: 'a', type: 'int*', addr: '0x7ffbf0', glowColor: 'rgba(59,130,246,0.35)', appearStep: 11, value: '0x7ffc10' },
    { key: 'b', name: 'b', type: 'int*', addr: '0x7ffbf4', glowColor: 'rgba(249,115,22,0.35)', appearStep: 11, value: '0x7ffc14' },
    { key: 'temp', name: 'temp', type: 'int', addr: '0x7ffbf8', glowColor: 'rgba(250,204,21,0.35)', appearStep: 15, value: '10' }
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
        detail: '程序即将开始运行，演示指针参数传递机制'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：指针参数与地址传递',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示通过指针修改实参'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: {},
      explanation: {
        icon: 'gear',
        text: 'void swap(int *a, int *b); 函数原型声明',
        color: 'purple',
        actor: 'Compiler',
        detail: '编译器记录 swap 函数接受两个 int* 参数，无返回值'
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
      vars: { x: 10 },
      highlightVar: 'x',
      explanation: {
        icon: 'memory',
        text: 'int x = 10，x 保存在栈地址 0x7ffc10',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 10 写入栈地址 0x7ffc10，x 占用 4 字节'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 4, 5],
      vars: { x: 10, y: 20 },
      highlightVar: 'y',
      explanation: {
        icon: 'memory',
        text: 'int y = 20，y 保存在栈地址 0x7ffc14',
        color: 'purple',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 20 写入栈地址 0x7ffc14，y 占用 4 字节'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 4, 5, 6],
      vars: { x: 10, y: 20 },
      explanation: {
        icon: 'info',
        text: '阅读注释：输出 x = 10, y = 20',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将打印交换前的值'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 4, 5, 6, 8],
      vars: { x: 10, y: 20 },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出：x = 10, y = 20',
        color: 'yellow',
        actor: 'CPU',
        detail: 'PUSH x 和 y 的值到栈，CALL printf 格式化输出'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 4, 5, 6, 8],
      vars: { x: 10, y: 20 },
      explanation: {
        icon: 'info',
        text: '阅读注释：交换前的值',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认当前状态'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 4, 5, 6, 8, 9],
      vars: { x: 10, y: 20 },
      explanation: {
        icon: 'info',
        text: '阅读注释：传递 x 和 y 的地址',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将传递地址而非值'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 2, 4, 5, 6, 8, 9],
      vars: { x: 10, y: 20 },
      highlightVar: 'x',
      explanation: {
        icon: 'pointer',
        text: 'CALL swap(&x, &y)，传递地址 0x7ffc10 和 0x7ffc14',
        color: 'orange',
        actor: 'CPU',
        detail: 'LEA 指令加载 x 和 y 的地址，PUSH 压栈，CALL 跳转到 swap 函数。关键：传递的是地址，不是值拷贝！'
      }
    },
    {
      step: 11,
      line: 18,
      executedLines: [1, 2, 4, 5, 6, 8, 9, 11],
      vars: { x: 10, y: 20, a: '0x7ffc10', b: '0x7ffc14' },
      highlightVar: 'a',
      explanation: {
        icon: 'memory',
        text: 'swap 函数栈帧建立，形参 a = &x, b = &y',
        color: 'red',
        actor: 'CPU',
        detail: '被调用函数 swap 建立新栈帧，形参 a 和 b 是指针，分别保存 x 和 y 的地址。a 指向 0x7ffc10，b 指向 0x7ffc14'
      }
    },
    {
      step: 12,
      line: 19,
      executedLines: [1, 2, 4, 5, 6, 8, 9, 11, 18],
      vars: { x: 10, y: 20, a: '0x7ffc10', b: '0x7ffc14', temp: 10 },
      highlightVar: 'temp',
      explanation: {
        icon: 'memory',
        text: 'int temp = *a，解引用 a 读取 x 的值 10',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令从地址 0x7ffc10 (a 指向的位置) 读取值 10，写入 temp 变量地址 0x7ffbf8'
      }
    },
    {
      step: 13,
      line: 20,
      executedLines: [1, 2, 4, 5, 6, 8, 9, 11, 18, 19],
      vars: { x: 20, y: 20, a: '0x7ffc10', b: '0x7ffc14', temp: 10 },
      highlightVar: 'x',
      explanation: {
        icon: 'memory',
        text: '*a = *b，将 y 的值 20 写入 x 的地址',
        color: 'purple',
        actor: 'CPU',
        detail: 'MOV 指令从地址 0x7ffc14 (b 指向的位置) 读取值 20，写入地址 0x7ffc10 (a 指向的位置)，x 被修改为 20！'
      }
    },
    {
      step: 14,
      line: 21,
      executedLines: [1, 2, 4, 5, 6, 8, 9, 11, 18, 19, 20],
      vars: { x: 20, y: 10, a: '0x7ffc10', b: '0x7ffc14', temp: 10 },
      highlightVar: 'y',
      explanation: {
        icon: 'memory',
        text: '*b = temp，将 temp 的值 10 写入 y 的地址',
        color: 'blue',
        actor: 'CPU',
        detail: 'MOV 指令将 temp(10) 写入地址 0x7ffc14 (b 指向的位置)，y 被修改为 10！交换完成！'
      }
    },
    {
      step: 15,
      line: 22,
      executedLines: [1, 2, 4, 5, 6, 8, 9, 11, 18, 19, 20, 21],
      vars: { x: 20, y: 10, a: '0x7ffc10', b: '0x7ffc14', temp: 10 },
      explanation: {
        icon: 'check',
        text: 'swap 函数返回，x = 20, y = 10',
        color: 'green',
        actor: 'CPU',
        detail: 'RET 指令返回 main，swap 栈帧销毁。关键：通过指针成功修改了 main 栈帧中的 x 和 y！'
      }
    },
    {
      step: 16,
      line: 13,
      executedLines: [1, 2, 4, 5, 6, 8, 9, 11, 18, 19, 20, 21, 22],
      vars: { x: 20, y: 10 },
      explanation: {
        icon: 'info',
        text: '阅读注释：输出 x = 20, y = 10，成功交换！',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认交换成功'
      }
    },
    {
      step: 17,
      line: 13,
      executedLines: [1, 2, 4, 5, 6, 8, 9, 11, 18, 19, 20, 21, 22, 13],
      vars: { x: 20, y: 10 },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出：x = 20, y = 10',
        color: 'yellow',
        actor: 'CPU',
        detail: 'PUSH x 和 y 的新值到栈，CALL printf 格式化输出，验证交换成功'
      }
    },
    {
      step: 18,
      line: 15,
      executedLines: [1, 2, 4, 5, 6, 8, 9, 11, 18, 19, 20, 21, 22, 13],
      vars: { x: 20, y: 10 },
      explanation: {
        icon: 'terminal',
        text: 'return 0; main 函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回操作系统，程序结束。关键结论：指针参数允许函数修改调用者栈帧中的变量'
      }
    }
  ],

  summary: {
    oneLiner: '掌握指针参数传递机制，通过地址修改实参的值',
    pitfalls: [
      '值传递无法修改实参，因为形参是实参的副本',
      '指针传递通过地址间接访问，可以修改实参的值',
      'swap 函数必须使用指针参数，值交换的 swap 是无效的',
      '解引用指针前必须确保指针有效，否则导致未定义行为'
    ],
    transferQuestion: '为什么 scanf("%d", &x) 需要传递&x 而不是 x？',
    miniExercise: {
      bugCode: 'void increment(int n) { n++; } increment(x); // x 不变！',
      hint: '值传递只修改了 n 的副本，应使用指针：void increment(int *n) { (*n)++; }'
    }
  }
};
