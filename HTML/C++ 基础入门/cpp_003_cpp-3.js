window.LESSON_DATA = {
  meta: {
    chapter: 'cpp',
    lessonId: 'cpp-3',
    title: 'RAII 与智能指针',
    description: '资源获取即初始化、unique_ptr、shared_ptr、weak_ptr'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<memory>' }
    ],
    [
      { type: 'cmt', text: '// unique_ptr - 独占所有权' }
    ],
    [
      { type: 'kw', text: 'std::unique_ptr' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'p1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'std::make_unique' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
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
      { type: 'op', text: '*' },
      { type: 'id', text: 'p1' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// val = 42' }
    ],
    [
      { type: 'kw', text: '// unique_ptr<int> p2 = p1;' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 错误！不可复制' }
    ],
    [
      { type: 'kw', text: 'std::unique_ptr' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'p2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'std::move' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// p1 现在为空，p2 拥有所有权' }
    ],
    [
      { type: 'cmt', text: '// shared_ptr - 共享所有权' }
    ],
    [
      { type: 'kw', text: 'std::shared_ptr' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'std::make_shared' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '100' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'std::shared_ptr' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's1' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 引用计数 = 2' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'refCount' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's1' },
      { type: 'op', text: '.' },
      { type: 'id', text: 'use_count' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// refCount = 2' }
    ],
    [
      { type: 'cmt', text: '// weak_ptr - 弱引用（不增加引用计数）' }
    ],
    [
      { type: 'kw', text: 'std::weak_ptr' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'w1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's1' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'std::shared_ptr' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's3' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'w1' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'lock' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// lock() 返回 shared_ptr 或 nullptr' }
    ]
  ],

  varConfig: [
    { name: 'p1', color: '#3b82f6', appearStep: 2, type: 'unique_ptr<int>' },
    { name: 'p2', color: '#22c55e', appearStep: 4, type: 'unique_ptr<int>' },
    { name: 's1', color: '#f59e0b', appearStep: 5, type: 'shared_ptr<int>' },
    { name: 's2', color: '#8b5cf6', appearStep: 6, type: 'shared_ptr<int>' },
    { name: 'w1', color: '#ec4899', appearStep: 8, type: 'weak_ptr<int>' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示 RAII 与智能指针',
        detail: 'C++ RAII（资源获取即初始化）：对象生命周期管理资源。智能指针自动管理内存：unique_ptr（独占）、shared_ptr（共享）、weak_ptr（弱引用）。避免内存泄漏和悬空指针。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [1],
      vars: {
        raii_concept: { principle: '资源即生命期', automatic_cleanup: true }
      },
      explanation: {
        text: 'RAII 原理：资源获取即初始化',
        detail: 'RAII 核心思想：资源（内存、文件、锁）在对象构造时获取，析构时自动释放。栈展开时自动调用析构，无需手动 delete。',
        actor: 'Compiler',
        icon: 'Box',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1, 2],
      vars: {
        p1: { value: '0x1000', type: 'unique_ptr<int>', owns: 42, valid: true }
      },
      explanation: {
        text: '第 3 行：unique_ptr 独占所有权',
        detail: 'unique_ptr 表示独占所有权。make_unique 在堆上分配 int(42)。unique_ptr 离开作用域时自动 delete。不可复制，只能移动。',
        actor: 'CPU',
        icon: 'Lock',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2, 3],
      vars: {
        val: { value: 42, type: 'int', dereferenced: true },
        p1: { value: '0x1000', type: 'unique_ptr<int>', valid: true }
      },
      explanation: {
        text: '第 4 行：*p1 解引用智能指针',
        detail: 'operator* 解引用获取值。val=42。unique_ptr 重载*和->，用法类似裸指针，但自动管理内存。',
        actor: 'CPU',
        icon: 'Pointer',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3, 5],
      vars: {
        p1: { value: 'nullptr', type: 'unique_ptr<int>', moved: true, valid: false },
        p2: { value: '0x1000', type: 'unique_ptr<int>', owns: 42, valid: true }
      },
      explanation: {
        text: '第 6 行：std::move 转移所有权',
        detail: 'unique_ptr 不可复制（编译错误）。std::move(p1) 将所有权转移给 p2。p1 变为空，p2 获得所有权。零开销移动。',
        actor: 'CPU',
        icon: 'GitMerge',
        color: 'purple'
      }
    },
    {
      step: 5,
      line: 8,
      executedLines: [1, 2, 3, 5, 8],
      vars: {
        s1: { value: '0x2000', type: 'shared_ptr<int>', owns: 100, refCount: 1, valid: true }
      },
      explanation: {
        text: '第 9 行：shared_ptr 共享所有权',
        detail: 'shared_ptr 允许多个指针共享同一对象。make_shared 分配 int(100)。引用计数=1。最后一个 shared_ptr 销毁时 delete。',
        actor: 'CPU',
        icon: 'Share',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 9,
      executedLines: [1, 2, 3, 5, 8, 9],
      vars: {
        s1: { value: '0x2000', type: 'shared_ptr<int>', refCount: 2 },
        s2: { value: '0x2000', type: 'shared_ptr<int>', refCount: 2, shared_with: 's1' }
      },
      explanation: {
        text: '第 10 行：s2 = s1 复制 shared_ptr',
        detail: 'shared_ptr 可复制！复制后引用计数 +1（现在=2）。s1 和 s2 指向同一对象。任一指针可修改对象值。',
        actor: 'CPU',
        icon: 'Copy',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 10,
      executedLines: [1, 2, 3, 5, 8, 9, 10],
      vars: {
        refCount: { value: 2, type: 'int', from: 's1.use_count()' }
      },
      explanation: {
        text: '第 11 行：use_count() 获取引用计数',
        detail: 'use_count() 返回共享同一对象的指针数量=2。引用计数=0 时自动 delete。调试时有用，生产代码少用。',
        actor: 'CPU',
        icon: 'Counter',
        color: 'green'
      }
    },
    {
      step: 8,
      line: 13,
      executedLines: [1, 2, 3, 5, 8, 9, 10, 13],
      vars: {
        w1: { value: 'observes 0x2000', type: 'weak_ptr<int>', refCount: 0, observes: 's1,s2' }
      },
      explanation: {
        text: '第 14 行：weak_ptr 弱引用',
        detail: 'weak_ptr 不增加引用计数！用于打破循环引用（如父子节点）。不能直接访问对象，需要 lock() 转为 shared_ptr。',
        actor: 'CPU',
        icon: 'Eye',
        color: 'green'
      }
    },
    {
      step: 9,
      line: 14,
      executedLines: [1, 2, 3, 5, 8, 9, 10, 13, 14],
      vars: {
        s3: { value: '0x2000', type: 'shared_ptr<int>', locked_from: 'w1', refCount: 3 },
        lock_success: { value: true, object_alive: true }
      },
      explanation: {
        text: '第 15 行：w1.lock() 提升为 shared_ptr',
        detail: 'lock() 检查对象是否存在。存在则返回 shared_ptr（引用计数 +1），不存在返回 nullptr。安全访问弱引用对象。',
        actor: 'CPU',
        icon: 'Lock',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: 'unique_ptr 可以被复制吗？',
      options: [
        { text: '可以', feedback: '错误！unique_ptr 独占所有权。' },
        { text: '不可以，只能移动', feedback: '正确！复制构造函数被删除。' },
        { text: '可以，使用深拷贝', feedback: '错误！不支持复制。' },
        { text: '可以，使用 clone()', feedback: '错误！无此方法。' }
      ],
      correctIndex: 1
    },
    {
      question: 'shared_ptr 何时释放内存？',
      options: [
        { text: '离开作用域时', feedback: '部分正确。' },
        { text: '引用计数为 0 时', feedback: '正确！最后一个指针销毁时。' },
        { text: '手动调用 delete', feedback: '错误！不能手动 delete。' },
        { text: '调用 reset() 时', feedback: '部分正确。' }
      ],
      correctIndex: 1
    },
    {
      question: 'weak_ptr 的作用是什么？',
      options: [
        { text: '替代 shared_ptr', feedback: '错误！不能独立使用。' },
        { text: '打破循环引用', feedback: '正确！不增加引用计数。' },
        { text: '提高性能', feedback: '部分正确。' },
        { text: '以上都是', feedback: '主要是打破循环引用。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '智能指针完全没有开销',
      truth: 'unique_ptr 零开销（同裸指针），但 shared_ptr 有引用计数开销！原子操作、额外内存分配。性能敏感场景用 unique_ptr。'
    },
    {
      myth: 'weak_ptr 可以访问对象',
      truth: 'weak_ptr 不能直接访问对象！必须 lock() 转为 shared_ptr。lock 可能失败（对象已销毁）。'
    },
    {
      myth: 'shared_ptr 线程安全',
      truth: '引用计数是原子的，但对象访问不是！多个线程同时修改对象需要额外同步。'
    },
    {
      myth: '循环引用会自动处理',
      truth: '循环引用导致内存泄漏！A 持有 B 的 shared_ptr，B 持有 A 的 shared_ptr，引用计数永不为 0。用 weak_ptr 打破循环。'
    }
  ],

  summary: {
    keyPoints: [
      'RAII：对象生命周期管理资源',
      'unique_ptr 独占所有权（不可复制）',
      'shared_ptr 共享所有权（引用计数）',
      'weak_ptr 弱引用（不增加计数）',
      'make_unique/make_shared 安全创建'
    ],
    pitfalls: [
      '复制 unique_ptr（编译错误）',
      '循环引用导致内存泄漏',
      'weak_ptr 未 lock 直接使用',
      '混用智能指针和裸指针'
    ],
    transferQuestion: '如何设计一个树形数据结构，父节点和子节点之间使用什么指针避免循环引用？'
  }
};
