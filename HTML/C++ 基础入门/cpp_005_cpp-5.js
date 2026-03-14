window.LESSON_DATA = {
  meta: {
    chapter: 'cpp',
    lessonId: 'cpp-5',
    title: 'STL 容器与迭代器',
    description: 'vector、list、map、set 容器及迭代器使用'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<vector>' }
    ],
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<list>' }
    ],
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<map>' }
    ],
    [
      { type: 'cmt', text: '// vector - 动态数组' }
    ],
    [
      { type: 'kw', text: 'std::vector' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'vec' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'vec' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'push_back' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'vec' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'push_back' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'vec' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'push_back' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'first' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'vec' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'std::vector' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'op', text: '::' },
      { type: 'id', text: 'iterator' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'it' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'vec' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'begin' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'for' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'it' },
      { type: 'op', text: '=' },
      { type: 'id', text: 'vec' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'begin' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'it' },
      { type: 'op', text: '!=' },
      { type: 'id', text: 'vec' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'end' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '++' },
      { type: 'id', text: 'it' },
      { type: 'punc', text: ')' }
    ],
    [
      { type: 'punc', text: '{' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'val' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'it' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'cmt', text: '// list - 双向链表' }
    ],
    [
      { type: 'kw', text: 'std::list' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'lst' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'lst' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'push_back' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// map - 键值对（红黑树实现）' }
    ],
    [
      { type: 'kw', text: 'std::map' },
      { type: 'op', text: '<' },
      { type: 'kw', text: 'std::string' },
      { type: 'op', text: '>' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'op', text: '>' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'scores' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'scores' },
      { type: 'punc', text: '[' },
      { type: 'str', text: '"Alice"' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '95' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'scores' },
      { type: 'punc', text: '[' },
      { type: 'str', text: '"Bob"' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '87' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'aliceScore' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'scores' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'at' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"Alice"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'vec', color: '#3b82f6', appearStep: 2, type: 'vector<int>' },
    { name: 'it', color: '#22c55e', appearStep: 5, type: 'vector<int>::iterator' },
    { name: 'lst', color: '#f59e0b', appearStep: 7, type: 'list<int>' },
    { name: 'scores', color: '#8b5cf6', appearStep: 8, type: 'map<string, int>' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示 STL 容器与迭代器',
        detail: 'C++ STL（标准模板库）：vector 动态数组、list 双向链表、map 有序映射、set 集合。迭代器统一访问容器元素。STL 是 C++ 最强大的工具之一。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 3,
      executedLines: [3],
      vars: {
        stl_intro: { library: 'STL', purpose: '通用容器和算法' }
      },
      explanation: {
        text: 'STL 标准模板库简介',
        detail: 'STL 包含：容器（vector/list/map/set）、迭代器（统一访问接口）、算法（sort/find 等）。所有组件都是模板，支持任意类型。',
        actor: 'Compiler',
        icon: 'Box',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 4,
      executedLines: [3, 4],
      vars: {
        vec: { value: '[]', type: 'vector<int>', size: 0, capacity: 0 }
      },
      explanation: {
        text: '第 5 行：vector<int> vec 创建动态数组',
        detail: 'vector 是动态数组。初始为空。元素连续存储在内存中，支持 O(1) 随机访问。超出容量时自动扩容（通常 2 倍）。',
        actor: 'CPU',
        icon: 'List',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 5,
      executedLines: [3, 4, 5],
      vars: {
        vec: { value: '[1]', type: 'vector<int>', size: 1, capacity: 1 }
      },
      explanation: {
        text: '第 6 行：vec.push_back(1) 尾插元素',
        detail: 'push_back 在末尾添加元素 1。size=1。容量不足时分配新内存，复制旧元素，释放旧内存。',
        actor: 'CPU',
        icon: 'Plus',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [3, 4, 5, 6],
      vars: {
        vec: { value: '[1, 2]', type: 'vector<int>', size: 2, capacity: 2 }
      },
      explanation: {
        text: '第 7 行：vec.push_back(2)',
        detail: '继续添加元素 2。size=2。内存布局：[1][2] 连续存储。',
        actor: 'CPU',
        icon: 'Plus',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 7,
      executedLines: [3, 4, 5, 6, 7],
      vars: {
        vec: { value: '[1, 2, 3]', type: 'vector<int>', size: 3, capacity: 4 },
        first: { value: 1, type: 'int', from: 'vec[0]' }
      },
      explanation: {
        text: '第 8-9 行：push_back(3) 和 vec[0] 访问',
        detail: '添加元素 3 后 size=3。vec[0] 返回首元素引用。operator[] 无边界检查（at() 有检查）。first=1。',
        actor: 'CPU',
        icon: 'List',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 10,
      executedLines: [3, 4, 5, 6, 7, 10],
      vars: {
        it: { value: 'vec.begin()', type: 'iterator', points_to: 'vec[0]=1' }
      },
      explanation: {
        text: '第 11 行：vec.begin() 获取迭代器',
        detail: '迭代器是指针的泛化。begin() 指向首元素，end() 指向末尾之后（哨兵）。*it 解引用获取元素值。',
        actor: 'CPU',
        icon: 'Pointer',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 11,
      executedLines: [3, 4, 5, 6, 7, 10, 11],
      vars: {
        loop: { current_it: 'vec.begin()', end: 'vec.end()', values: [1, 2, 3] }
      },
      explanation: {
        text: '第 12 行：for 循环遍历 vector',
        detail: '迭代器遍历：it 从 begin() 到 end()。每次++it 移动一个元素。*it 获取当前值。依次访问 1, 2, 3。',
        actor: 'CPU',
        icon: 'RotateCw',
        color: 'green'
      }
    },
    {
      step: 8,
      line: 13,
      executedLines: [3, 4, 5, 6, 7, 10, 11, 13],
      vars: {
        lst: { value: '[10]', type: 'list<int>', size: 1 }
      },
      explanation: {
        text: '第 14 行：list<int> lst 双向链表',
        detail: 'list 是双向链表。节点在堆上分散存储，通过指针连接。插入/删除 O(1)，不支持随机访问。迭代器是双向迭代器。',
        actor: 'CPU',
        icon: 'Link',
        color: 'green'
      }
    },
    {
      step: 9,
      line: 16,
      executedLines: [3, 4, 5, 6, 7, 10, 11, 13, 16],
      vars: {
        scores: { value: '{"Alice": 95}', type: 'map<string, int>', size: 1 }
      },
      explanation: {
        text: '第 17 行：map<string, int> scores',
        detail: 'map 是有序映射（键值对）。底层是红黑树（自平衡二叉搜索树）。键按字典序排序。操作 O(log n)。',
        actor: 'CPU',
        icon: 'Tree',
        color: 'green'
      }
    },
    {
      step: 10,
      line: 17,
      executedLines: [3, 4, 5, 6, 7, 10, 11, 13, 16, 17],
      vars: {
        scores: { value: '{"Alice": 95, "Bob": 87}', type: 'map<string, int>', size: 2 },
        aliceScore: { value: 95, type: 'int', from: 'scores.at("Alice")' }
      },
      explanation: {
        text: '第 18-20 行：插入键值对和 at() 访问',
        detail: 'operator[] 插入或修改："Alice"=95，"Bob"=87。at("Alice") 返回 95。键不存在时 at() 抛异常，[] 创建默认值。',
        actor: 'CPU',
        icon: 'Search',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: 'vector 和 list 的主要区别？',
      options: [
        { text: 'vector 更快', feedback: '部分正确。' },
        { text: 'vector 随机访问 O(1)，list 不支持', feedback: '正确！连续存储 vs 链式存储。' },
        { text: 'list 更快', feedback: '部分正确。' },
        { text: '没有区别', feedback: '错误！' }
      ],
      correctIndex: 1
    },
    {
      question: 'map 的底层实现是什么？',
      options: [
        { text: '哈希表', feedback: '错误！这是 unordered_map。' },
        { text: '红黑树', feedback: '正确！有序映射。' },
        { text: '数组', feedback: '错误！' },
        { text: '链表', feedback: '错误！' }
      ],
      correctIndex: 1
    },
    {
      question: '迭代器 end() 指向哪里？',
      options: [
        { text: '最后一个元素', feedback: '错误！' },
        { text: '末尾之后（哨兵位置）', feedback: '正确！左闭右开区间 [begin, end)。' },
        { text: '第一个元素', feedback: '错误！' },
        { text: '空指针', feedback: '错误！' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'vector 扩容效率很低',
      truth: 'vector 指数扩容（通常 2 倍）！分摊复杂度 O(1)。虽然有复制开销，但均摊到每次 push_back 是常数时间。'
    },
    {
      myth: 'list 比 vector 更常用',
      truth: 'vector 是默认选择！连续存储缓存友好。list 只在频繁中间插入/删除时使用。现代 CPU 上 vector 通常更快。'
    },
    {
      myth: 'map 的键可以是任意类型',
      truth: '键必须可比较（默认<运算符）！红黑树需要排序。自定义类型需实现 operator< 或提供比较器。'
    },
    {
      myth: '迭代器和指针完全一样',
      truth: '迭代器是指针的泛化！有些迭代器不是指针（如 list 迭代器是封装的）。但使用方式类似指针。'
    }
  ],

  summary: {
    keyPoints: [
      'vector 动态数组（随机访问 O(1)）',
      'list 双向链表（插入删除 O(1)）',
      'map 有序映射（红黑树 O(log n)）',
      '迭代器统一容器访问接口',
      '[begin, end) 左闭右开区间'
    ],
    pitfalls: [
      'vector 扩容导致迭代器失效',
      'list 不支持随机访问',
      'map 键不存在时[]创建默认值',
      '迭代器越界访问'
    ],
    transferQuestion: '如何统计一篇文章中每个单词出现的次数？使用 map 容器写出代码框架。'
  }
};
