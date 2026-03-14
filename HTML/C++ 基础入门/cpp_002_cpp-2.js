window.LESSON_DATA = {
  meta: {
    chapter: 'cpp',
    lessonId: 'cpp-2',
    title: '继承与多态',
    description: '基类、派生类、虚函数、动态绑定、抽象类'
  },

  codeLines: [
    [
      { type: 'kw', text: 'class' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Shape' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'kw', text: 'public' },
      { type: 'punc', text: ':' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'virtual' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'double' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'area' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'virtual' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '~' },
      { type: 'id', text: 'Shape' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' },
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'class' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Rectangle' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'public' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Shape' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'kw', text: 'private' },
      { type: 'punc', text: ':' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'double' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'width' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'height' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'public' },
      { type: 'punc', text: ':' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'Rectangle' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'double' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'w' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'double' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'h' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '        ' },
      { type: 'id', text: 'width' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'w' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '        ' },
      { type: 'id', text: 'height' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'h' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'double' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'area' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'override' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'width' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'height' },
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
      { type: 'kw', text: 'Shape' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'new' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Rectangle' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '5.0' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3.0' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'double' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'p' },
      { type: 'op', text: '->' },
      { type: 'id', text: 'area' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'delete' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'p', color: '#3b82f6', appearStep: 6, type: 'Shape*' },
    { name: 'p->width', color: '#22c55e', appearStep: 7, type: 'double' },
    { name: 'p->height', color: '#f59e0b', appearStep: 7, type: 'double' },
    { name: 'a', color: '#8b5cf6', appearStep: 8, type: 'double' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示继承与多态',
        detail: 'C++ 继承与多态：基类（父类）定义接口，派生类（子类）继承并实现。virtual 虚函数实现动态绑定。多态允许基类指针指向派生类对象，调用实际对象的方法。',
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
        base_class: { name: 'Shape', type: 'base', virtual_funcs: 1 }
      },
      explanation: {
        text: '第 1 行：定义 Shape 基类',
        detail: 'Shape 是抽象基类（有纯虚函数）。基类定义通用接口。派生类继承基类并实现具体功能。',
        actor: 'Compiler',
        icon: 'Box',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [0, 2],
      vars: {
        virtual_func: { name: 'area()', return: 'double', virtual: true, pure: false }
      },
      explanation: {
        text: '第 3 行：virtual double area() 虚函数',
        detail: 'virtual 关键字声明虚函数。派生类可 override 重写。通过基类指针调用时，动态绑定到实际对象的方法（多态）。',
        actor: 'Compiler',
        icon: 'Function',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [0, 2, 3],
      vars: {
        vptr: { name: '__vptr', type: 'virtual table pointer', points_to: 'Shape vtable' }
      },
      explanation: {
        text: '第 4 行：virtual ~Shape() 虚析构函数',
        detail: '虚析构函数确保 delete 基类指针时调用派生类析构。无 virtual 会导致内存泄漏（只调用基类析构）。',
        actor: 'Compiler',
        icon: 'Trash',
        color: 'yellow'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [0, 2, 3, 5],
      vars: {
        derived_class: { name: 'Rectangle', inherits: 'Shape', access: 'public' }
      },
      explanation: {
        text: '第 6 行：class Rectangle public Shape 继承',
        detail: 'Rectangle 公有继承 Shape。public 继承保持访问权限。Rectangle 是 Shape 的子类型（is-a 关系）。',
        actor: 'Compiler',
        icon: 'GitBranch',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 13,
      executedLines: [0, 2, 3, 5, 13],
      vars: {
        override: { func: 'area()', base: 'Shape::area', derived: 'Rectangle::area' }
      },
      explanation: {
        text: '第 14 行：double area() override 重写虚函数',
        detail: 'override 关键字表示重写基类虚函数。编译器检查签名是否匹配。Rectangle::area 返回 width*height。',
        actor: 'Compiler',
        icon: 'RefreshCw',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 17,
      executedLines: [0, 2, 3, 5, 13, 17],
      vars: {
        p: { value: '0x1000', type: 'Shape*', dynamic_type: 'Rectangle*', points_to: 'Rectangle(5,3)' }
      },
      explanation: {
        text: '第 18 行：Shape* p = new Rectangle(5, 3)',
        detail: '基类指针 p 指向派生类对象。多态核心：静态类型 Shape*，动态类型 Rectangle*。new 在堆上分配对象。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'purple'
      }
    },
    {
      step: 7,
      line: 18,
      executedLines: [0, 2, 3, 5, 13, 17, 18],
      vars: {
        vtable_lookup: { func: 'area()', resolved_to: 'Rectangle::area', dynamic_binding: true },
        a: { value: 15.0, type: 'double', computed: '5.0 * 3.0' }
      },
      explanation: {
        text: '第 19 行：p->area() 动态绑定到 Rectangle::area',
        detail: '虚函数调用通过 vtable 查找。运行时确定实际类型 Rectangle，调用 Rectangle::area=5*3=15。这就是多态！',
        actor: 'CPU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 8,
      line: 19,
      executedLines: [0, 2, 3, 5, 13, 17, 18, 19],
      vars: {
        p: { value: '0x1000', type: 'Shape*', deleted: true },
        memory_freed: { rectangle_destructor_called: true, no_leak: true }
      },
      explanation: {
        text: '第 20 行：delete p 调用虚析构函数',
        detail: 'delete 基类指针时，虚析构函数确保先调用派生类析构，再调用基类析构。正确释放所有资源。',
        actor: 'Kernel',
        icon: 'Trash',
        color: 'blue'
      }
    }
  ],

  predictions: [
    {
      question: 'virtual 关键字的作用是什么？',
      options: [
        { text: '声明常量', feedback: '错误！这是 const。' },
        { text: '实现动态绑定', feedback: '正确！运行时确定调用哪个函数。' },
        { text: '内联函数', feedback: '错误！这是 inline。' },
        { text: '静态成员', feedback: '错误！这是 static。' }
      ],
      correctIndex: 1
    },
    {
      question: '为什么析构函数需要 virtual？',
      options: [
        { text: '不需要', feedback: '错误！基类析构必须 virtual。' },
        { text: '确保调用派生类析构', feedback: '正确！避免内存泄漏。' },
        { text: '提高性能', feedback: '错误！略微降低性能。' },
        { text: '语法要求', feedback: '错误！不是语法要求。' }
      ],
      correctIndex: 1
    },
    {
      question: '多态的实现机制是什么？',
      options: [
        { text: '函数重载', feedback: '错误！这是编译时多态。' },
        { text: '虚函数表 (vtable)', feedback: '正确！运行时动态绑定。' },
        { text: '模板', feedback: '错误！这是泛型。' },
        { text: '继承', feedback: '部分正确，但继承不等于多态。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '继承会自动重写基类函数',
      truth: '只有 virtual 函数才能被重写！非虚函数调用在编译时确定（静态绑定）。派生类同名函数会隐藏基类函数。'
    },
    {
      myth: '多态没有性能开销',
      truth: '虚函数有开销！vtable 查找需要额外指针解引用，且阻碍内联优化。但现代 CPU 上开销很小。'
    },
    {
      myth: '基类指针可以访问派生类成员',
      truth: '基类指针只能访问基类成员！需要 dynamic_cast 向下转型才能访问派生类特有成员。'
    },
    {
      myth: '所有函数都应该是 virtual',
      truth: '只有需要多态时才用 virtual！虚函数有性能开销，且不能内联。类设计时仔细考虑哪些需要 virtual。'
    }
  ],

  summary: {
    keyPoints: [
      '继承：派生类继承基类成员',
      'virtual 实现动态绑定（多态）',
      '基类析构函数必须是 virtual',
      'override 确保正确重写',
      '基类指针可指向派生类对象'
    ],
    pitfalls: [
      '忘记 virtual 导致静态绑定',
      '非虚析构导致内存泄漏',
      'override 签名不匹配',
      '忘记 delete 导致内存泄漏'
    ],
    transferQuestion: '如何设计一个图形计算器，支持 Circle、Triangle 等多种图形？写出类层次结构和 area() 虚函数。'
  }
};
