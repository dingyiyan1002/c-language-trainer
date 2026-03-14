window.LESSON_DATA = {
  meta: {
    chapter: 'cpp',
    lessonId: 'cpp-1',
    title: '类与对象基础',
    description: 'class、对象、构造函数、析构函数、this 指针'
  },

  codeLines: [
    [
      { type: 'kw', text: 'class' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Student' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'kw', text: 'private' },
      { type: 'punc', text: ':' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'name' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '32' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'age' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'public' },
      { type: 'punc', text: ':' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'Student' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '        ' },
      { type: 'id', text: 'age' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '}' },
      { type: 'cmt', text: '// 默认构造函数' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'Student' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'const' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'char' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'n' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '        ' },
      { type: 'id', text: 'strcpy' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'name' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '        ' },
      { type: 'id', text: 'age' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '}' },
      { type: 'cmt', text: '// 带参构造函数' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'print' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '        ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '\"%s, %d\"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'name' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'age' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'Student' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's1' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '\"Alice\"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '20' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 's1' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'print' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 's1', color: '#3b82f6', appearStep: 6, type: 'Student' },
    { name: 's1.name', color: '#22c55e', appearStep: 7, type: 'char[32]' },
    { name: 's1.age', color: '#f59e0b', appearStep: 7, type: 'int' },
    { name: 'this', color: '#8b5cf6', appearStep: 5, type: 'Student*' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示 C++ 类与对象',
        detail: 'C++ 面向对象基础：class 定义类（用户的类型），对象是类的实例。构造函数初始化对象，析构函数清理资源。this 指针指向当前对象。封装、继承、多态三大特性。',
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
        class_defined: { name: 'Student', size: 36, members: 2 }
      },
      explanation: {
        text: '第 1 行：定义 Student 类',
        detail: 'class 定义新类型 Student。类包含成员变量（数据）和成员函数（行为）。类是蓝图，对象是根据蓝图创建的实例。',
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
        access_control: { private: ['name', 'age'], public: ['constructor', 'print'] }
      },
      explanation: {
        text: '第 2 行：private 私有成员',
        detail: 'private 成员只能在类内部访问（封装）。外部代码无法直接访问 name 和 age。必须通过 public 成员函数间接访问。',
        actor: 'Compiler',
        icon: 'Lock',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [0, 1, 4],
      vars: {
        access_control: { public: ['Student()', 'Student(n,a)', 'print()'] }
      },
      explanation: {
        text: '第 5 行：public 公有成员',
        detail: 'public 成员可被外部代码访问。构造函数和 print 函数是 public 的。接口（public）与实现（private）分离。',
        actor: 'Compiler',
        icon: 'Unlock',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [0, 1, 4, 5],
      vars: {
        constructor: { name: 'Student()', type: 'default', initializes: 'age=0' }
      },
      explanation: {
        text: '第 6 行：默认构造函数',
        detail: '构造函数与类同名，无返回值。创建对象时自动调用。默认构造函数无参数，初始化 age=0。name 未初始化（含随机值）。',
        actor: 'Compiler',
        icon: 'Settings',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 8,
      executedLines: [0, 1, 4, 5, 8],
      vars: {
        constructor: { name: 'Student(n,a)', type: 'parameterized', params: ['n', 'a'] },
        this: { value: '0x7ffc0000', type: 'Student*', points_to: 'being constructed' }
      },
      explanation: {
        text: '第 9 行：带参构造函数',
        detail: '带参构造函数接收参数 n 和 a。this 指针指向正在构造的对象。strcpy 复制字符串到成员 name，=赋值给 age。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 17,
      executedLines: [0, 1, 4, 5, 8, 17],
      vars: {
        s1: { value: '{name: "Alice", age: 20}', type: 'Student', constructed: true }
      },
      explanation: {
        text: '第 18 行：创建对象 s1("Alice", 20)',
        detail: 'Student s1("Alice", 20) 在栈上创建对象。调用带参构造函数，name="Alice"，age=20。s1 占用 36 字节（32+4）。',
        actor: 'CPU',
        icon: 'Box',
        color: 'purple'
      }
    },
    {
      step: 7,
      line: 18,
      executedLines: [0, 1, 4, 5, 8, 17, 18],
      vars: {
        s1: { value: '{name: "Alice", age: 20}', type: 'Student' },
        print_output: { stdout: 'Alice, 20', called: true }
      },
      explanation: {
        text: '第 19 行：s1.print() 调用成员函数',
        detail: '.运算符访问对象成员。s1.print() 调用 print 函数，this 指针=&s1。成员函数可访问私有成员 name 和 age。输出：Alice, 20',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: '构造函数的作用是什么？',
      options: [
        { text: '销毁对象', feedback: '错误！这是析构函数。' },
        { text: '初始化对象成员', feedback: '正确！创建时设置初始值。' },
        { text: '分配内存', feedback: '错误！内存由编译器分配。' },
        { text: '定义类', feedback: '错误！class 定义类。' }
      ],
      correctIndex: 1
    },
    {
      question: 'private 成员的访问权限？',
      options: [
        { text: '任何地方可访问', feedback: '错误！这是 public。' },
        { text: '只能类内部访问', feedback: '正确！封装特性。' },
        { text: '只能构造函数访问', feedback: '错误！所有成员函数可访问。' },
        { text: '派生类可访问', feedback: '错误！这是 protected。' }
      ],
      correctIndex: 1
    },
    {
      question: 'this 指针是什么？',
      options: [
        { text: '类的类型', feedback: '错误！' },
        { text: '指向当前对象的指针', feedback: '正确！隐式参数。' },
        { text: '构造函数返回值', feedback: '错误！构造函数无返回。' },
        { text: '全局变量', feedback: '错误！是每个成员函数的参数。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '类定义时分配内存',
      truth: '类定义不分配内存！只有创建对象时才分配。类只是类型定义，类似 int 不占用空间。'
    },
    {
      myth: '构造函数可以手动调用',
      truth: '构造函数不能像普通函数那样调用！只在创建对象时自动调用。placement new 是特殊情况。'
    },
    {
      myth: 'private 成员完全不可访问',
      truth: 'private 成员在类内部（包括所有成员函数）可访问！友元（friend）也可访问。外部代码不可直接访问。'
    },
    {
      myth: '对象和结构体完全一样',
      truth: 'C++ 中 class 和 struct 几乎一样！唯一区别：class 默认 private，struct 默认 public。'
    }
  ],

  summary: {
    keyPoints: [
      'class 定义用户自定义类型',
      '对象是类的实例',
      '构造函数初始化对象',
      'private 封装数据，public 提供接口',
      'this 指针指向当前对象'
    ],
    pitfalls: [
      '忘记初始化成员变量',
      '构造函数中忘记处理资源分配',
      '混淆 private 和 public 访问权限',
      'this 指针解引用错误'
    ],
    transferQuestion: '如何设计一个 Rectangle 类，包含长和宽成员，以及计算面积的成员函数？写出完整代码。'
  }
};
