window.LESSON_DATA = {
  meta: {
    chapterId: 'variables',
    lessonId: 'var-5',
    title: '常量、修饰符和存储类',
    index: 5,
    filename: 'variables_005_var-5.js',
    keyPoints: ['const 常量定义', 'signed 和 unsigned 修饰符', 'volatile 关键字', '存储类：static/auto/extern']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 常量与修饰符：类型系统的进阶特性' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'const' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'MAX_SIZE' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '100' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 编译时常量' }
    ]},
    { num: 3, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// MAX_SIZE 不可修改，类似 #define 100' }
    ]},
    { num: 4, tokens: [] },
    { num: 5, tokens: [
      { type: 'kw', text: 'unsigned' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'uCount' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '50000' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 无符号：0 到 42 亿' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// unsigned 范围：0 到 4294967295' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'kw', text: 'signed' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'ch' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// signed：可正可负' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// signed char 范围：-128 到 127' }
    ]},
    { num: 10, tokens: [] },
    { num: 11, tokens: [
      { type: 'kw', text: 'volatile' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'sensor' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 易失性：每次从内存读取' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 编译器不优化 volatile 变量' }
    ]},
    { num: 13, tokens: [] },
    { num: 14, tokens: [
      { type: 'kw', text: 'static' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'counter' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '   ' },
      { type: 'cmt', text: '// 静态变量：持久存储' }
    ]},
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// static 变量生命周期 = 程序生命周期' }
    ]},
    { num: 16, tokens: [] },
    { num: 17, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'temp' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'MAX_SIZE' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'uCount' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// temp = 50100' }
    ]},
    { num: 18, tokens: [] },
    { num: 19, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'MAX_SIZE', name: 'MAX_SIZE', type: 'const int', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '100' },
    { key: 'uCount', name: 'uCount', type: 'unsigned int', addr: '0x7ffd08', glowColor: 'rgba(59,130,246,0.35)', appearStep: 4, value: '50000' },
    { key: 'uCount_range', name: 'unsigned 范围', type: 'info', addr: '', glowColor: 'rgba(168,85,247,0.35)', appearStep: 5, value: '0 ~ 4294967295' },
    { key: 'ch', name: 'ch', type: 'signed char', addr: '0x7ffd0c', glowColor: 'rgba(249,115,22,0.35)', appearStep: 7, value: '-10' },
    { key: 'ch_range', name: 'signed char 范围', type: 'info', addr: '', glowColor: 'rgba(250,204,21,0.35)', appearStep: 8, value: '-128 ~ 127' },
    { key: 'sensor', name: 'sensor', type: 'volatile int', addr: '0x7ffd10', glowColor: 'rgba(239,68,68,0.35)', appearStep: 10, value: '0' },
    { key: 'counter', name: 'counter', type: 'static int', addr: '0x600000', glowColor: 'rgba(34,197,94,0.35)', appearStep: 13, value: '0' },
    { key: 'counter_info', name: 'static 特性', type: 'info', addr: '', glowColor: 'rgba(59,130,246,0.35)', appearStep: 14, value: '数据段存储' },
    { key: 'temp', name: 'temp', type: 'int', addr: '0x7ffd20', glowColor: 'rgba(168,85,247,0.35)', appearStep: 16, value: '50100' }
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
        detail: '程序即将开始运行，演示常量、类型修饰符和存储类的用法'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { MAX_SIZE: '100' },
      explanation: {
        icon: 'info',
        text: '阅读注释：常量与修饰符 - 类型系统的进阶特性',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示 const/unsigned/signed/volatile/static等修饰符'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { MAX_SIZE: '100' },
      highlightVar: 'MAX_SIZE',
      explanation: {
        icon: 'lock',
        text: 'const int MAX_SIZE = 100，编译时常量',
        color: 'green',
        actor: 'CPU',
        detail: 'const 限定符：MAX_SIZE 被标记为只读，编译后不可修改。MOV 指令将 100 写入 0x7ffd00，但尝试修改会触发编译错误'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { MAX_SIZE: '100' },
      explanation: {
        icon: 'info',
        text: '阅读注释：MAX_SIZE 不可修改，类似 #define 100',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，对比 const 与 #define：const 有类型检查，#define 是预处理器宏替换'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3],
      vars: { MAX_SIZE: '100', uCount: '50000' },
      highlightVar: 'uCount',
      explanation: {
        icon: 'memory',
        text: 'unsigned int uCount = 50000，无符号整数',
        color: 'cyan',
        actor: 'CPU',
        detail: 'unsigned 修饰符：只能表示非负数。uCount 占用 4 字节，存储 50000。关键：unsigned int 范围 0 到 4294967295（2^32-1）'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { MAX_SIZE: '100', uCount: '50000', uCount_range: '0 ~ 4294967295' },
      highlightVar: 'uCount_range',
      explanation: {
        icon: 'alert',
        text: 'unsigned 范围：0 到 42 亿，没有负数',
        color: 'orange',
        actor: 'CPU',
        detail: '关键对比：signed int 范围 -21 亿到 +21 亿，unsigned int 范围 0 到 42 亿。unsigned 适合计数、位运算'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 3, 5, 6],
      vars: { MAX_SIZE: '100', uCount: '50000' },
      explanation: {
        icon: 'info',
        text: '阅读注释：signed char 范围：-128 到 127',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示 signed 修饰符默认存在于 char/int 类型'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { MAX_SIZE: '100', uCount: '50000', ch: '-10' },
      highlightVar: 'ch',
      explanation: {
        icon: 'memory',
        text: 'signed char ch = -10，可表示负数',
        color: 'purple',
        actor: 'CPU',
        detail: 'signed 修饰符：最高位为符号位。-10 的二进制补码：11110110。char 默认可能是 signed 或 unsigned，取决于编译器'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 3, 5, 6, 8, 9],
      vars: { MAX_SIZE: '100', uCount: '50000', ch: '-10', ch_range: '-128 ~ 127' },
      highlightVar: 'ch_range',
      explanation: {
        icon: 'info',
        text: 'signed char 范围：-128 到 127（2^7）',
        color: 'yellow',
        actor: 'CPU',
        detail: 'signed char 用 7 位表示数值，1 位表示符号：-2^7 到 2^7-1 = -128 到 127。unsigned char 范围：0 到 255'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { MAX_SIZE: '100', uCount: '50000', ch: '-10' },
      explanation: {
        icon: 'info',
        text: '阅读注释：易失性：每次从内存读取',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示 volatile 关键字的特殊性'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 11],
      vars: { MAX_SIZE: '100', uCount: '50000', ch: '-10', sensor: '0' },
      highlightVar: 'sensor',
      explanation: {
        icon: 'refresh',
        text: 'volatile int sensor = 0，禁用编译器优化',
        color: 'red',
        actor: 'CPU',
        detail: 'volatile 关键字：告诉编译器该变量可能被外部因素（硬件、中断、其他线程）修改。每次使用 sensor 都必须从内存重新读取，不能用缓存值'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 11, 12],
      vars: { MAX_SIZE: '100', uCount: '50000', ch: '-10', sensor: '0' },
      explanation: {
        icon: 'info',
        text: 'volatile 应用场景：硬件寄存器、中断服务、多线程共享',
        color: 'blue',
        actor: 'CPU',
        detail: '典型用法：volatile int* hardware_reg = 0x4000; 每次读取都访问实际硬件地址，确保获取最新状态'
      }
    },
    {
      step: 12,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 11, 12, 14],
      vars: { MAX_SIZE: '100', uCount: '50000', ch: '-10', sensor: '0' },
      explanation: {
        icon: 'info',
        text: '阅读注释：静态变量：持久存储',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示 static 存储类的特殊性'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 11, 12, 14, 14],
      vars: { MAX_SIZE: '100', uCount: '50000', ch: '-10', sensor: '0', counter: '0' },
      highlightVar: 'counter',
      explanation: {
        icon: 'database',
        text: 'static int counter = 0，数据段存储',
        color: 'green',
        actor: 'CPU',
        detail: 'static 存储类：counter 存储在数据段（data segment），不是栈。函数返回后值仍然保留，下次调用时使用上次的值'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 11, 12, 14, 14, 15],
      vars: { MAX_SIZE: '100', uCount: '50000', ch: '-10', sensor: '0', counter: '0', counter_info: '数据段存储' },
      highlightVar: 'counter_info',
      explanation: {
        icon: 'info',
        text: 'static 变量生命周期 = 程序生命周期',
        color: 'cyan',
        actor: 'CPU',
        detail: '内存对比：auto 变量在栈上，函数结束销毁；static 变量在数据段，程序结束才销毁。static 适合计数器、缓存'
      }
    },
    {
      step: 15,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 11, 12, 14, 14, 15, 17],
      vars: { MAX_SIZE: '100', uCount: '50000', ch: '-10', sensor: '0', counter: '0' },
      explanation: {
        icon: 'info',
        text: '阅读注释：temp = 50100',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示混合运算'
      }
    },
    {
      step: 16,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 11, 12, 14, 14, 15, 17, 17],
      vars: { MAX_SIZE: '100', uCount: '50000', ch: '-10', sensor: '0', counter: '0', temp: '50100' },
      highlightVar: 'temp',
      explanation: {
        icon: 'calculator',
        text: 'int temp = MAX_SIZE + uCount = 50100',
        color: 'purple',
        actor: 'CPU',
        detail: '混合运算：const int(100) + unsigned int(50000) = 50100。const 在运算时退化为普通 int，unsigned 保持无符号特性'
      }
    },
    {
      step: 17,
      line: 19,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 11, 12, 14, 14, 15, 17, 17, 19],
      vars: { MAX_SIZE: '100', uCount: '50000', ch: '-10', sensor: '0', counter: '0', temp: '50100' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键知识点：1)const 定义编译时常量 2)unsigned 扩展正数范围 3)volatile 禁用优化 4)static 延长生命周期'
      }
    }
  ],

  summary: {
    oneLiner: '掌握 const/unsigned/signed/volatile/static修饰符和存储类',
    pitfalls: [
      'const 变量编译后不可修改，尝试修改会触发编译错误',
      'unsigned int 范围 0~42 亿，没有负数；signed int 范围 -21 亿~+21 亿',
      'volatile 变量每次使用都从内存读取，禁用编译器优化',
      'static 变量存储在数据段，函数返回后值仍然保留'
    ],
    transferQuestion: '为什么多线程共享变量需要用 volatile 修饰？',
    miniExercise: {
      bugCode: 'unsigned int diff = a - b; // 如果 a<b，结果不是负数！',
      hint: 'unsigned 减法结果为负数时，会发生下溢变为大正数。修复：用 signed int 或先比较大小'
    }
  },

  predictions: [
    {
      question: 'const int 和 #define 的区别是什么？',
      options: [
        { text: '没有区别，完全等价', feedback: '错误！两者有本质区别。' },
        { text: 'const 有类型检查，#define 是文本替换', feedback: '正确！const int MAX=100 有类型检查，#define MAX 100 是预处理器宏替换。' },
        { text: '#define 更快', feedback: '错误！两者性能相同，都被编译器优化。' },
        { text: 'const 只能在函数内使用', feedback: '错误！const 可以在全局和局部作用域使用。' }
      ],
      correctIndex: 1
    },
    {
      question: 'static 变量的特点是什么？',
      options: [
        { text: '存储在栈上，函数结束销毁', feedback: '错误！那是 auto 变量。' },
        { text: '存储在数据段，生命周期=程序生命周期', feedback: '正确！static 变量在数据段存储，函数返回后值保留，下次调用继续使用。' },
        { text: '存储在堆上，需要手动释放', feedback: '错误！那是 malloc 分配的内存。' },
        { text: '不能修改', feedback: '错误！static 变量可以修改，只是生命周期长。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'const 变量存储在 ROM 中',
      truth: 'const 变量通常仍存储在 RAM 中，只是编译器阻止修改。真正的 ROM 存储需要特定编译器和硬件配置。'
    },
    {
      myth: 'unsigned 减法结果为负数时会报错',
      truth: 'unsigned 减法 a-b（a<b）不会报错，而是下溢 (underflow) 变为大正数。例如：0-1 = 4294967295（UINT_MAX）。'
    },
    {
      myth: 'volatile 保证原子性和线程安全',
      truth: 'volatile 只禁用编译器优化，不保证原子性。多线程同步需要互斥锁 (mutex) 或原子操作 (atomic)。volatile 不是线程安全的替代方案。'
    },
    {
      myth: 'static 变量每次调用都重新初始化',
      truth: 'static 变量只在第一次进入作用域时初始化一次。后续调用使用上次的值，不会重新初始化。'
    }
  ]
};
