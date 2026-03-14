window.LESSON_DATA = {
  meta: {
    id: 'l2-func-pointer',
    title: '函数指针',
    chapter: 'Level2',
    index: 5,
    filename: 'func_pointer.c',
    keyPoints: ['函数指针声明', '回调函数', '函数指针数组']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'add' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'a' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'a' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '}' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'multiply' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'a' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'a' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '}' }] },
    { num: 5, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 6, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'op', text: '*' }, { type: 'id', text: 'funcPtr' }, { type: 'punc', text: ')' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'funcPtr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'add' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'result1' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'funcPtr' }, { type: 'punc', text: '(' }, { type: 'num', text: '3' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '5' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Add: %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'result1' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'funcPtr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'multiply' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'result2' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'funcPtr' }, { type: 'punc', text: '(' }, { type: 'num', text: '3' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '5' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Multiply: %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'result2' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'funcPtr', name: 'funcPtr', type: 'int(*)(int,int)', addr: '0x00401000', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 1 },
    { key: 'result1', name: 'result1', type: 'int', addr: '0x7fff10', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 2 },
    { key: 'result2', name: 'result2', type: 'int', addr: '0x7fff14', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 3 }
  ],
  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: { icon: 'rocket', text: '点击播放，学习函数指针与回调机制', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 3,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '定义函数 add 和 multiply，函数名是函数入口地址',
        color: 'blue',
        actor: 'Compiler',
        detail: '函数在代码段（.text）中分配空间。函数名 add 和 multiply 是符号，链接后对应具体地址（如 0x00401000）。函数类型由返回值和参数列表决定。'
      },
      prediction: {
        question: '函数名 add 代表什么？',
        options: ['函数返回值', '函数入口地址', '参数 a 和 b'],
        answer: 1
      },
      misconception: null,
      actor: 'Compiler',
      target: 'func:add',
      timing: 'compile-time'
    },
    {
      step: 2,
      line: 4,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'multiply 函数：返回两数乘积',
        color: 'blue',
        actor: 'Compiler',
        detail: 'multiply 函数签名：int (int, int)。编译器生成函数调用约定代码：参数压栈、调用、清理栈、返回值。'
      },
      prediction: null,
      misconception: null,
      actor: 'Compiler',
      target: 'func:multiply',
      timing: 'compile-time'
    },
    {
      step: 3,
      line: 7,
      executedLines: [3, 4, 5, 6],
      vars: { funcPtr: null },
      highlightVar: 'funcPtr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'pointer',
        text: '声明函数指针 funcPtr：指向返回 int、接受两个 int 参数的函数',
        color: 'purple',
        actor: 'CPU',
        detail: 'int (*funcPtr)(int, int) 声明了一个函数指针。语法：返回值 (*指针名)(参数类型)。funcPtr 本身占内存（指针大小，64 位系统 8 字节）。'
      },
      prediction: null,
      misconception: {
        title: '函数指针声明语法',
        text: 'int (*fp)(int) 是函数指针，int *fp(int) 是返回 int* 的函数。括号改变优先级：(*fp) 先与指针结合，fp(int) 先与函数结合。'
      },
      actor: 'CPU',
      target: 'var:funcPtr',
      timing: 'main-loop'
    },
    {
      step: 4,
      line: 8,
      executedLines: [3, 4, 5, 6, 7],
      vars: { funcPtr: '0x00401000' },
      highlightVar: 'funcPtr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'bolt',
        text: 'funcPtr = add，将 add 函数地址赋给指针',
        color: 'purple',
        actor: 'CPU',
        detail: '函数名 add 自动转换为函数地址。赋值后 funcPtr 指向 add 函数入口（0x00401000）。可以通过 funcPtr 调用 add 函数。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:funcPtr',
      timing: 'main-loop'
    },
    {
      step: 5,
      line: 9,
      executedLines: [3, 4, 5, 6, 7, 8],
      vars: { funcPtr: '0x00401000', result1: 8 },
      highlightVar: 'result1',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: 'funcPtr(3, 5) 调用 add 函数，result1 = 8',
        color: 'green',
        actor: 'CPU',
        detail: 'funcPtr(3, 5) 等价于 add(3, 5)。CPU 将参数 3 和 5 压栈，跳转到 funcPtr 指向的地址（0x00401000），执行 add 函数，返回值 8 存入 result1。'
      },
      prediction: {
        question: 'funcPtr(3, 5) 等价于什么调用？',
        options: ['add(3, 5)', 'multiply(3, 5)', 'funcPtr * (3, 5)'],
        answer: 0
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:result1',
      timing: 'main-loop'
    },
    {
      step: 6,
      line: 10,
      executedLines: [3, 4, 5, 6, 7, 8, 9],
      vars: { funcPtr: '0x00401000', result1: 8 },
      highlightVar: 'result1',
      isDanger: false,
      output: [{ type: 'success', text: 'Add: 8' }],
      explanation: {
        icon: 'terminal',
        text: '输出 Add: 8',
        color: 'green',
        actor: 'CPU',
        detail: 'printf 输出 result1 的值 8。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 7,
      line: 11,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10],
      vars: { funcPtr: '0x00401000', result1: 8 },
      highlightVar: 'funcPtr',
      isDanger: false,
      output: [{ type: 'success', text: 'Add: 8' }],
      explanation: {
        icon: 'bolt',
        text: 'funcPtr = multiply，重新赋值指向另一个函数',
        color: 'purple',
        actor: 'CPU',
        detail: '函数指针可以重新赋值。现在 funcPtr 指向 multiply 函数（如 0x00401050）。这是回调机制的核心：运行时决定调用哪个函数。'
      },
      prediction: null,
      misconception: {
        title: '函数指针的核心价值',
        text: '函数指针实现回调函数（Callback）、策略模式、事件处理。库函数如 qsort 接受函数指针参数，允许用户自定义比较逻辑。'
      },
      actor: 'CPU',
      target: 'var:funcPtr',
      timing: 'main-loop'
    },
    {
      step: 8,
      line: 12,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11],
      vars: { funcPtr: '0x00401050', result1: 8, result2: 15 },
      highlightVar: 'result2',
      isDanger: false,
      output: [{ type: 'success', text: 'Add: 8' }],
      explanation: {
        icon: 'terminal',
        text: 'funcPtr(3, 5) 现在调用 multiply 函数，result2 = 15',
        color: 'orange',
        actor: 'CPU',
        detail: '同样的 funcPtr(3, 5) 调用，现在跳转到 multiply 函数，返回 3*5=15。函数指针让同一调用产生不同行为。'
      },
      prediction: {
        question: '函数指针的主要用途是什么？',
        options: ['替代函数调用', '实现回调和动态绑定', '存储函数返回值'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:result2',
      timing: 'main-loop'
    },
    {
      step: 9,
      line: 13,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      vars: { funcPtr: '0x00401050', result1: 8, result2: 15 },
      highlightVar: 'result2',
      isDanger: false,
      output: [{ type: 'success', text: 'Add: 8' }, { type: 'success', text: 'Multiply: 15' }],
      explanation: {
        icon: 'terminal',
        text: '输出 Multiply: 15',
        color: 'green',
        actor: 'CPU',
        detail: 'printf 输出 result2 的值 15。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 10,
      line: 14,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: { funcPtr: '0x00401050', result1: 8, result2: 15 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Add: 8' }, { type: 'success', text: 'Multiply: 15' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，函数指针：动态绑定，回调机制',
        color: 'green',
        actor: 'CPU',
        detail: '函数指针应用：1) 回调函数（事件处理）2) 函数表（状态机）3) 动态库加载 4) 泛型算法（qsort）。是 C 语言实现多态的关键。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: '函数指针存储函数地址，可动态切换调用目标，实现回调机制',
    pitfalls: [
      '函数指针声明需要括号：int (*fp)(int) 是函数指针，int *fp(int) 是返回 int* 的函数',
      '函数指针必须与目标函数签名匹配（返回值类型、参数类型和数量）',
      'NULL 函数指针调用会导致崩溃，使用前应检查是否为 NULL'
    ],
    transferQuestion: '如何使用函数指针数组实现状态机？（提示：每个状态对应一个处理函数）',
    miniExercise: {
      bugCode: 'void (*callback)(int) = NULL;\ncallback(42);  // 这行代码有什么问题？',
      hint: 'NULL 函数指针不能调用，会导致段错误'
    }
  }
};
