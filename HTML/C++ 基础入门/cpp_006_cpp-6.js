window.LESSON_DATA = {
  meta: {
    chapter: 'cpp',
    lessonId: 'cpp-6',
    title: '现代 C++ 特性',
    description: 'auto、lambda 表达式、move 语义、异常处理'
  },

  codeLines: [
    [
      { type: 'cmt', text: '// auto - 类型自动推导' }
    ],
    [
      { type: 'kw', text: 'auto' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '42' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'auto' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3.14' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// x=int, y=double' }
    ],
    [
      { type: 'cmt', text: '// lambda 表达式 - 匿名函数' }
    ],
    [
      { type: 'kw', text: 'auto' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'add' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '[' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'sum' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'add' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// sum = 8' }
    ],
    [
      { type: 'cmt', text: '// 捕获列表 - 按值捕获' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'factor' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'auto' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'multiply' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '[' },
      { type: 'id', text: 'factor' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'factor' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// move 语义 - 转移资源' }
    ],
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<utility>' }
    ],
    [
      { type: 'kw', text: 'std::string' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'str1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"Hello"' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'std::string' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'str2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'std::move' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'str1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// str1 变为空，str2 拥有\"Hello\"' }
    ],
    [
      { type: 'cmt', text: '// 异常处理' }
    ],
    [
      { type: 'kw', text: 'try' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'if' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'error' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'throw' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'std::runtime_error' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"Something failed"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'kw', text: 'catch' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'const' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'std::exception' },
      { type: 'op', text: '&' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'e' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"Error: %s\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'e' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'what' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' }
    ]
  ],

  varConfig: [
    { name: 'x', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'y', color: '#22c55e', appearStep: 2, type: 'double' },
    { name: 'add', color: '#f59e0b', appearStep: 3, type: 'lambda' },
    { name: 'multiply', color: '#8b5cf6', appearStep: 5, type: 'lambda' },
    { name: 'str1', color: '#ec4899', appearStep: 7, type: 'string' },
    { name: 'str2', color: '#14b8a6', appearStep: 8, type: 'string' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示现代 C++ 特性',
        detail: '现代 C++（C++11/14/17/20）：auto 类型推导简化代码，lambda 表达式实现函数式编程，move 语义避免拷贝提升性能，异常处理提供错误恢复机制。',
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
        x: { value: 42, type: 'int', deduced: true }
      },
      explanation: {
        text: '第 1 行：auto x = 42 类型推导',
        detail: 'auto 让编译器推导类型。42 是 int 字面量，所以 x=int。避免冗长类型名（如迭代器）。C++11 引入，大幅提高代码简洁性。',
        actor: 'Compiler',
        icon: 'Code',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 1,
      executedLines: [0, 1],
      vars: {
        x: { value: 42, type: 'int' },
        y: { value: 3.14, type: 'double', deduced: true }
      },
      explanation: {
        text: '第 2 行：auto y = 3.14',
        detail: '3.14 是 double 字面量，y 被推导为 double。auto 不改变类型系统，只是编译器代劳写类型。',
        actor: 'Compiler',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [0, 1, 4],
      vars: {
        add: { value: 'lambda(int,int)->int', type: 'closure', captures: [] }
      },
      explanation: {
        text: '第 5 行：lambda 表达式定义',
        detail: '[] 捕获列表（空），(int a, int b) 参数，{return a+b;} 函数体。lambda 是匿名函数，可赋值给 auto 变量。编译器生成闭包类型。',
        actor: 'Compiler',
        icon: 'Function',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [0, 1, 4, 5],
      vars: {
        sum: { value: 8, type: 'int', from: 'add(3, 5)' }
      },
      explanation: {
        text: '第 6 行：add(3, 5) 调用 lambda',
        detail: '像普通函数一样调用 lambda。3+5=8，sum=8。lambda 可内联定义，避免命名函数。适合回调、STL 算法。',
        actor: 'CPU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 7,
      executedLines: [0, 1, 4, 5, 7],
      vars: {
        factor: { value: 2, type: 'int' },
        multiply: { value: 'lambda(int)->int', type: 'closure', captures: ['factor=2'] }
      },
      explanation: {
        text: '第 8 行：[factor] 按值捕获外部变量',
        detail: '捕获列表 [factor] 按值复制 factor 到闭包。lambda 内部使用 factor 的副本（=2）。外部 factor 变化不影响已捕获的值。',
        actor: 'Compiler',
        icon: 'Copy',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [0, 1, 4, 5, 7, 8],
      vars: {
        result: { value: 10, type: 'int', from: 'multiply(5)' }
      },
      explanation: {
        text: '第 9 行：multiply(5) = 5 * 2 = 10',
        detail: '调用 multiply(5)，返回 5*factor=5*2=10。捕获的 factor 是常量副本。[=] 按值捕获所有，[&] 按引用捕获所有。',
        actor: 'CPU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 11,
      executedLines: [0, 1, 4, 5, 7, 8, 11],
      vars: {
        str1: { value: '"Hello"', type: 'string', size: 5 }
      },
      explanation: {
        text: '第 12 行：std::string str1 = "Hello"',
        detail: 'str1 在堆上分配内存存储"Hello"。string 管理内存，自动释放。深拷贝会分配新内存并复制内容。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 8,
      line: 12,
      executedLines: [0, 1, 4, 5, 7, 8, 11, 12],
      vars: {
        str1: { value: '""', type: 'string', moved: true, valid: true },
        str2: { value: '"Hello"', type: 'string', moved_from: 'str1' }
      },
      explanation: {
        text: '第 13 行：std::move(str1) 转移资源',
        detail: 'move 将 str1 的资源（堆内存指针）转移给 str2。str1 变为空字符串，str2 拥有"Hello"。避免深拷贝，零开销移动。',
        actor: 'CPU',
        icon: 'GitMerge',
        color: 'purple'
      }
    },
    {
      step: 9,
      line: 15,
      executedLines: [0, 1, 4, 5, 7, 8, 11, 12, 15],
      vars: {
        try_block: { entered: true, error: true }
      },
      explanation: {
        text: '第 16 行：try 块尝试执行可能失败的代码',
        detail: 'try 块包裹可能抛出异常的代码。error 为 true 时 throw 异常。控制流立即跳转到匹配的 catch 块。',
        actor: 'CPU',
        icon: 'TriangleAlert',
        color: 'yellow'
      }
    },
    {
      step: 10,
      line: 16,
      executedLines: [0, 1, 4, 5, 7, 8, 11, 12, 15, 16],
      vars: {
        exception: { type: 'std::runtime_error', message: 'Something failed', thrown: true }
      },
      explanation: {
        text: '第 18 行：throw 抛出异常',
        detail: 'throw 创建异常对象（runtime_error）。栈展开（stack unwinding）：自动析构局部变量。寻找匹配的 catch 处理器。',
        actor: 'Kernel',
        icon: 'CircleAlert',
        color: 'red'
      }
    },
    {
      step: 11,
      line: 17,
      executedLines: [0, 1, 4, 5, 7, 8, 11, 12, 15, 16, 17],
      vars: {
        catch_block: { caught: true, exception_type: 'std::exception' },
        e: { value: 'runtime_error("Something failed")', type: 'const exception&' }
      },
      explanation: {
        text: '第 19 行：catch 捕获并处理异常',
        detail: 'catch(const exception& e) 捕获所有派生自 exception 的异常。e.what() 返回错误信息。输出：Error: Something failed',
        actor: 'CPU',
        icon: 'Check',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: 'auto 类型推导发生在何时？',
      options: [
        { text: '运行时', feedback: '错误！auto 是编译时特性。' },
        { text: '编译时', feedback: '正确！编译器根据初始化式推导。' },
        { text: '链接时', feedback: '错误！' },
        { text: '预处理时', feedback: '错误！' }
      ],
      correctIndex: 1
    },
    {
      question: 'lambda 捕获列表 [&] 的含义？',
      options: [
        { text: '按值捕获所有', feedback: '错误！这是 [=]。' },
        { text: '按引用捕获所有', feedback: '正确！可修改外部变量。' },
        { text: '不捕获任何变量', feedback: '错误！这是 []。' },
        { text: '捕获 this 指针', feedback: '错误！这是 [this]。' }
      ],
      correctIndex: 1
    },
    {
      question: 'std::move 的作用是什么？',
      options: [
        { text: '复制对象', feedback: '错误！move 避免复制。' },
        { text: '转移资源所有权', feedback: '正确！将左值转为右值引用。' },
        { text: '交换两个对象', feedback: '错误！这是 std::swap。' },
        { text: '移动对象到内存', feedback: '错误！' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'auto 会降低类型安全',
      truth: 'auto 是静态类型！编译器在编译时确定具体类型。auto 不损失类型安全，只是简化书写。'
    },
    {
      myth: 'lambda 效率比普通函数低',
      truth: 'lambda 通常被内联！编译器生成的代码与普通函数一样高效。捕获变量有轻微开销，但通常可忽略。'
    },
    {
      myth: 'move 会复制数据',
      truth: 'move 不复制！只是转移指针等资源。原对象变为有效但未定义状态（通常为空）。'
    },
    {
      myth: '异常处理开销很大',
      truth: '现代 C++ 异常零开销（不抛出时）！抛出时的栈展开有开销，但错误路径本就不频繁。异常适合罕见错误。'
    }
  ],

  summary: {
    keyPoints: [
      'auto 类型自动推导（编译时确定）',
      'lambda 表达式：[捕获](参数){ 函数体 }',
      'move 语义转移资源（避免拷贝）',
      'try-catch 异常处理机制',
      '右值引用实现移动语义'
    ],
    pitfalls: [
      'auto 推导类型与预期不符',
      'lambda 按引用捕获悬空引用',
      'move 后继续使用原对象',
      '异常中未释放资源（用 RAII 避免）'
    ],
    transferQuestion: '如何使用 lambda 表达式和 STL 算法 sort 对 vector 进行自定义排序？写出代码。'
  }
};
