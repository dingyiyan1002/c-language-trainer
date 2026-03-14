window.LESSON_DATA = {
  meta: {
    chapter: 'cpp',
    lessonId: 'cpp-4',
    title: '模板与泛型编程',
    description: '函数模板、类模板、模板特化、STL 容器简介'
  },

  codeLines: [
    [
      { type: 'kw', text: 'template' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'typename' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'T' },
      { type: 'op', text: '>' }
    ],
    [
      { type: 'kw', text: 'T' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'max' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'T' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'T' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' }
    ],
    [
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '?' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: ':' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'm1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'max' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'double' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'm2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'max' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '3.14' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2.71' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 类模板' }
    ],
    [
      { type: 'kw', text: 'template' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'typename' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'T' },
      { type: 'op', text: '>' }
    ],
    [
      { type: 'kw', text: 'class' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Box' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'kw', text: 'private' },
      { type: 'punc', text: ':' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'T' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'content' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'public' },
      { type: 'punc', text: ':' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'Box' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'T' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'content' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'T' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'get' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'content' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '}' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'Box' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'box' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '42' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'val' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'box' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'get' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'm1', color: '#3b82f6', appearStep: 3, type: 'int' },
    { name: 'm2', color: '#22c55e', appearStep: 4, type: 'double' },
    { name: 'box', color: '#f59e0b', appearStep: 6, type: 'Box<int>' },
    { name: 'val', color: '#8b5cf6', appearStep: 7, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示模板与泛型编程',
        detail: 'C++ 模板：编译时多态。函数模板适配多种类型，类模板创建通用容器。编译器为每个具体类型生成代码。STL（标准模板库）基于模板实现。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 0,
      executedLines: [0],
      vars: {
        template_decl: { keyword: 'template', type_param: 'typename T' }
      },
      explanation: {
        text: '第 1 行：template<typename T> 模板声明',
        detail: 'template 声明模板，typename T 是类型参数。T 是占位符，编译时被具体类型（int、double 等）替换。class 和 typename 等价。',
        actor: 'Compiler',
        icon: 'Box',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 1,
      executedLines: [0, 1],
      vars: {
        func_template: { name: 'max', params: 'T a, T b', returns: 'T' }
      },
      explanation: {
        text: '第 2 行：函数模板 max<T>',
        detail: 'max 函数接受两个 T 类型参数，返回 T 类型。函数体使用三元运算符返回较大值。T 必须支持>运算符。',
        actor: 'Compiler',
        icon: 'Function',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 5,
      executedLines: [0, 1, 5],
      vars: {
        instantiation: { func: 'max<int>', a: 3, b: 5, result: 5 },
        m1: { value: 5, type: 'int' }
      },
      explanation: {
        text: '第 6 行：max<int>(3, 5) 实例化为 int',
        detail: '编译器生成 max<int> 函数：参数和返回值都是 int。比较 3 和 5，返回 5。m1=5。显式指定模板参数<int>。',
        actor: 'Compiler',
        icon: 'Code',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [0, 1, 5, 6],
      vars: {
        instantiation: { func: 'max<double>', a: 3.14, b: 2.71, result: 3.14 },
        m2: { value: 3.14, type: 'double' }
      },
      explanation: {
        text: '第 7 行：max(3.14, 2.71) 类型推导为 double',
        detail: '编译器自动推导 T=double（类型推导）。生成 max<double> 函数。返回 3.14。m2=3.14。可省略模板参数。',
        actor: 'Compiler',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 8,
      executedLines: [0, 1, 5, 6, 8],
      vars: {
        class_template: { name: 'Box', type_param: 'T', members: ['content'] }
      },
      explanation: {
        text: '第 9 行：类模板 Box<T>',
        detail: 'Box 是类模板，T 是成员 content 的类型。编译器为每个使用的类型生成完整类定义。类似 std::vector、std::map。',
        actor: 'Compiler',
        icon: 'Box',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 16,
      executedLines: [0, 1, 5, 6, 8, 16],
      vars: {
        box: { value: '{content: 42}', type: 'Box<int>', instantiated: true }
      },
      explanation: {
        text: '第 17 行：Box<int> box(42) 实例化类模板',
        detail: 'Box<int> 生成 int 版本的 Box 类。content 是 int 类型。构造函数初始化 content=42。box 占用 sizeof(int) 字节。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'purple'
      }
    },
    {
      step: 7,
      line: 17,
      executedLines: [0, 1, 5, 6, 8, 16, 17],
      vars: {
        val: { value: 42, type: 'int', from: 'box.get()' }
      },
      explanation: {
        text: '第 18 行：box.get() 返回 content',
        detail: 'get() 成员函数返回 T（int）。val=42。模板代码在编译时展开，无运行时开销（零开销抽象）。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: '模板是在何时生成代码的？',
      options: [
        { text: '运行时', feedback: '错误！模板是编译时特性。' },
        { text: '编译时', feedback: '正确！为每个类型生成代码。' },
        { text: '链接时', feedback: '错误！' },
        { text: '预处理时', feedback: '错误！' }
      ],
      correctIndex: 1
    },
    {
      question: 'typename 和 class 在模板中的区别？',
      options: [
        { text: 'typename 用于基本类型', feedback: '错误！' },
        { text: '没有区别', feedback: '正确！完全等价。' },
        { text: 'class 用于类类型', feedback: '错误！' },
        { text: 'typename 更快', feedback: '错误！' }
      ],
      correctIndex: 1
    },
    {
      question: '模板参数可以自动推导吗？',
      options: [
        { text: '函数模板可以', feedback: '正确！编译器可推导。' },
        { text: '类模板可以', feedback: '错误！C++17 之前不行。' },
        { text: '都不可以', feedback: '错误！' },
        { text: '都可以', feedback: '部分正确。' }
      ],
      correctIndex: 0
    }
  ],

  misconceptions: [
    {
      myth: '模板会增加运行时开销',
      truth: '模板是零开销抽象！编译时展开，生成手写代码一样的效率。代码膨胀是主要问题（为每个类型生成一份）。'
    },
    {
      myth: '模板只能用于容器',
      truth: '模板用于任何需要类型参数化的场景！函数模板（如 max、sort）、类模板（容器、智能指针）、模板元编程。'
    },
    {
      myth: '模板错误很容易理解',
      truth: '模板错误信息通常很长！编译器展开多层模板后报错。C++20 concepts 改善错误信息。'
    },
    {
      myth: '所有类型都能用于模板',
      truth: '模板对类型有要求！max 需要>运算符，容器需要拷贝/移动构造。不满足要求会导致编译错误。'
    }
  ],

  summary: {
    keyPoints: [
      'template<typename T> 声明模板',
      '函数模板支持类型自动推导',
      '类模板需要指定类型参数',
      '编译器为每个类型生成代码',
      '模板是零开销抽象'
    ],
    pitfalls: [
      '模板参数类型不匹配',
      '忘记实例化模板',
      '模板定义必须放在头文件',
      '循环依赖导致编译错误'
    ],
    transferQuestion: '如何实现一个通用的 swap 函数模板？写出代码并说明类型要求。'
  }
};
