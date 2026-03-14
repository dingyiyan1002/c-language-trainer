window.LESSON_DATA = {
  meta: {
    id: 'l3-complex-decl',
    title: '复杂声明解析',
    chapter: 'Level3',
    index: 5,
    filename: 'complex_declarations.c',
    keyPoints: ['右左法则', '声明优先级', 'typedef']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'op', text: '*' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'num', text: '5' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'op', text: '*' }, { type: 'id', text: 'funcPtr' }, { type: 'punc', text: ')' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'funcArrayOfFuncPtrs' }, { type: 'punc', text: '[' }, { type: 'num', text: '3' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 7, tokens: [{ type: 'kw', text: 'typedef' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'op', text: '*' }, { type: 'id', text: 'Callback' }, { type: 'punc', text: ')' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: '*' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Declarations parsed successfully\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'arr', name: 'arr', type: 'int(*)[5]', addr: '0x7fff10', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'funcPtr', name: 'funcPtr', type: 'int(*)(int,int)', addr: '0x7fff18', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'Callback', name: 'Callback', type: 'typedef', addr: 'N/A', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习复杂 C 声明解析（右左法则）', color: 'blue', actor: null, detail: null },
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
      vars: { arr: '0x1000' },
      highlightVar: 'arr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'stack',
        text: 'int (*arr)[5] — arr 是指向 5 元素 int 数组的指针',
        color: 'yellow',
        actor: 'Compiler',
        detail: '右左法则：从 arr 开始，左读*（指针），右读 [5]（数组），回到左边读 int（元素类型）。所以 arr 是指向"5 个 int 的数组"的指针。'
      },
      prediction: {
        question: 'int (*arr)[5] 中 arr 是什么类型？',
        options: ['int 数组', '指向 int 数组的指针', 'int 指针的数组'],
        answer: 1
      },
      misconception: {
        title: '数组指针 vs 指针数组',
        text: 'int (*arr)[5] 是数组指针（pointer to array），int *arr[5] 是指针数组（array of pointers）。括号改变结合性：() 优先级高于 []。'
      },
      actor: 'Compiler',
      target: 'var:arr',
      timing: 'compile-time'
    },
    {
      step: 2,
      line: 4,
      executedLines: [],
      vars: { arr: '0x1000', funcPtr: '0x2000' },
      highlightVar: 'funcPtr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'pointer',
        text: 'int (*funcPtr)(int, int) — funcPtr 是函数指针',
        color: 'purple',
        actor: 'Compiler',
        detail: '右左法则：funcPtr 是指针 (*)，指向函数 (int,int)，返回 int。这是 Level2 学过的函数指针。'
      },
      prediction: null,
      misconception: null,
      actor: 'Compiler',
      target: 'var:funcPtr',
      timing: 'compile-time'
    },
    {
      step: 3,
      line: 5,
      executedLines: [],
      vars: { arr: '0x1000', funcPtr: '0x2000', funcArrayOfFuncPtrs: 'N/A' },
      highlightVar: 'funcArrayOfFuncPtrs',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'stack',
        text: 'int (funcArrayOfFuncPtrs[3])(int) — 函数指针数组',
        color: 'blue',
        actor: 'Compiler',
        detail: '右左法则：funcArrayOfFuncPtrs 是数组 [3]，元素是指针 (*)，指向函数 (int)，返回 int。所以是"3 个函数指针的数组"，每个函数接受 int 返回 int。'
      },
      prediction: {
        question: 'funcArrayOfFuncPtrs[0] 是什么？',
        options: ['int 值', '函数指针', '函数'],
        answer: 1
      },
      misconception: null,
      actor: 'Compiler',
      target: 'var:funcArrayOfFuncPtrs',
      timing: 'compile-time'
    },
    {
      step: 4,
      line: 7,
      executedLines: [],
      vars: { arr: '0x1000', funcPtr: '0x2000', funcArrayOfFuncPtrs: 'N/A', Callback: 'typedef' },
      highlightVar: 'Callback',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'typedef int (*Callback)(void*) — 定义回调函数类型别名',
        color: 'blue',
        actor: 'Compiler',
        detail: 'typedef 创建类型别名。Callback 是"指向接受 void* 返回 int 的函数"的指针类型。可简化声明：Callback cb; 等价于 int (*cb)(void*);。'
      },
      prediction: null,
      misconception: {
        title: 'typedef vs #define',
        text: 'typedef 创建类型别名（有类型检查），#define 是文本替换（无类型检查）。typedef int* IntPtr; 比#define INT_PTR int* 更安全。'
      },
      actor: 'Compiler',
      target: 'type:Callback',
      timing: 'compile-time'
    },
    {
      step: 5,
      line: 9,
      executedLines: [3, 4, 5, 6, 7, 8],
      vars: { arr: '0x1000', funcPtr: '0x2000', funcArrayOfFuncPtrs: 'N/A', Callback: 'typedef' },
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'main 函数开始执行',
        color: 'green',
        actor: 'CPU',
        detail: '以上声明在编译时已被解析。运行时 main 函数开始执行。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'main',
      timing: 'runtime'
    },
    {
      step: 6,
      line: 10,
      executedLines: [3, 4, 5, 6, 7, 8, 9],
      vars: { arr: '0x1000', funcPtr: '0x2000', funcArrayOfFuncPtrs: 'N/A', Callback: 'typedef' },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Declarations parsed successfully' }],
      explanation: {
        icon: 'terminal',
        text: '输出：Declarations parsed successfully',
        color: 'green',
        actor: 'CPU',
        detail: 'printf 输出成功信息，验证所有复杂声明都被编译器正确解析。'
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
      vars: { arr: '0x1000', funcPtr: '0x2000', funcArrayOfFuncPtrs: 'N/A', Callback: 'typedef' },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Declarations parsed successfully' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，右左法则：从标识符开始，左右交替读',
        color: 'green',
        actor: 'CPU',
        detail: '复杂声明解析技巧：1) 从变量名开始 2) 右读 ()[] 3) 左读* 4) 重复直到读完 5) typedef 简化复杂类型。这是阅读 C 库源码的必备技能。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: '右左法则：从变量名开始，左右交替读，括号改变优先级，typedef 简化类型',
    pitfalls: [
      'int (*arr)[5] 是数组指针，int *arr[5] 是指针数组 — 括号决定结合性',
      '函数指针数组 int (*arr[3])(int) 是 3 个函数指针的数组',
      'typedef 创建类型别名有类型检查，优于#define 文本替换'
    ],
    transferQuestion: '如何声明"返回函数指针的函数"？（提示：函数指针作为返回值）',
    miniExercise: {
      bugCode: 'int (*p)[10];\np = NULL;  // 这样合法吗？p 的类型是什么？',
      hint: 'p 是指向 10 元素 int 数组的指针，可以赋 NULL'
    }
  }
};
