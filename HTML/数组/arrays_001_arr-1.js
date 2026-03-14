window.LESSON_DATA = {
  meta: {
    chapter: 'arrays',
    lessonId: 'arr-1',
    title: '一维数组',
    description: '数组存储多个同类型元素，下标从 0 开始'
  },

  codeLines: [
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '4' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 访问元素（下标从 0 开始！）' }
    ],
    [
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 第一个元素' }
    ],
    [
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '4' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '50' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 第五个元素' }
    ]
  ],

  varConfig: [
    { name: 'arr[0]', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'arr[1]', color: '#22c55e', appearStep: 1, type: 'int' },
    { name: 'arr[2]', color: '#f59e0b', appearStep: 1, type: 'int' },
    { name: 'arr[3]', color: '#ef4444', appearStep: 1, type: 'int' },
    { name: 'arr[4]', color: '#8b5cf6', appearStep: 1, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示一维数组',
        detail: '数组是连续存储的同类型元素集合。int arr[5] 分配 5 个 int 的连续内存（20 字节）。下标从 0 开始，最大下标是长度 -1。',
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
        'arr[0]': { value: 1, type: 'int', address: '0x7ffda000' },
        'arr[1]': { value: 2, type: 'int', address: '0x7ffda004' },
        'arr[2]': { value: 3, type: 'int', address: '0x7ffda008' },
        'arr[3]': { value: 4, type: 'int', address: '0x7ffda00c' },
        'arr[4]': { value: 5, type: 'int', address: '0x7ffda010' }
      },
      explanation: {
        text: '第 1 行：声明并初始化数组 arr',
        detail: 'int arr[5] = {1,2,3,4,5} 分配 5 个连续 int 内存，依次初始化为 1,2,3,4,5。数组名 arr 是首元素地址。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [0, 1, 2],
      vars: {
        'arr[0]': { value: 10, type: 'int', address: '0x7ffda000' },
        'arr[1]': { value: 2, type: 'int', address: '0x7ffda004' },
        'arr[2]': { value: 3, type: 'int', address: '0x7ffda008' },
        'arr[3]': { value: 4, type: 'int', address: '0x7ffda00c' },
        'arr[4]': { value: 5, type: 'int', address: '0x7ffda010' }
      },
      explanation: {
        text: '第 3 行：arr[0] = 10，修改第一个元素',
        detail: '数组下标从 0 开始，arr[0] 访问第一个元素。原值 1 被修改为 10。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [0, 1, 2, 3],
      vars: {
        'arr[0]': { value: 10, type: 'int', address: '0x7ffda000' },
        'arr[1]': { value: 2, type: 'int', address: '0x7ffda004' },
        'arr[2]': { value: 3, type: 'int', address: '0x7ffda008' },
        'arr[3]': { value: 4, type: 'int', address: '0x7ffda00c' },
        'arr[4]': { value: 50, type: 'int', address: '0x7ffda010' }
      },
      explanation: {
        text: '第 4 行：arr[4] = 50，修改第五个元素',
        detail: 'arr[4] 是第五个元素（下标 0-4）。原值 5 被修改为 50。注意：arr[5] 会越界！',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: 'int arr[5] 的最大合法下标是多少？',
      options: [
        { text: '5', feedback: '错误！下标从 0 开始，最大下标是长度 -1。' },
        { text: '4', feedback: '正确！下标范围是 0-4。' },
        { text: '3', feedback: '错误！arr[4] 也是合法的。' },
        { text: '6', feedback: '错误！严重越界。' }
      ],
      correctIndex: 1
    },
    {
      question: '访问 arr[5] 会发生什么？',
      options: [
        { text: '返回 0', feedback: '错误！' },
        { text: '编译错误', feedback: '错误！编译时无法检测，是运行时错误。' },
        { text: '越界访问，未定义行为', feedback: '正确！可能崩溃或破坏其他数据。' },
        { text: '自动返回最后一个元素', feedback: '错误！C 语言不做边界检查。' }
      ],
      correctIndex: 2
    }
  ],

  misconceptions: [
    {
      myth: '数组下标从 1 开始',
      truth: 'C 语言数组下标从 0 开始。arr[0] 是第一个元素，arr[n-1] 是最后一个元素。'
    },
    {
      myth: '访问越界会报错',
      truth: 'C 语言不做数组边界检查。越界访问是未定义行为，可能崩溃、破坏数据或看似正常工作。'
    },
    {
      myth: '数组长度可以动态改变',
      truth: '普通数组长度固定，不能改变。需要动态数组应使用 malloc 分配堆内存。'
    }
  ],

  summary: {
    keyPoints: [
      '数组声明：类型 数组名 [长度];',
      '下标从 0 开始，最大下标是长度 -1',
      '数组元素在内存中连续存储',
      '越界访问是未定义行为（严重错误）',
      '数组名表示首元素地址'
    ],
    pitfalls: [
      '下标从 1 开始计数导致越界',
      '忘记下标从 0 开始',
      '访问 arr[长度] 越界'
    ],
    transferQuestion: '如果要存储 10 个整数，数组应该如何声明？最大下标是多少？'
  }
};
