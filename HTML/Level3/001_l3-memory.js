window.LESSON_DATA = {
  meta: {
    id: 'l3-memory',
    title: '动态内存管理',
    chapter: 'Level3',
    index: 1,
    filename: 'dynamic_memory.c',
    keyPoints: ['malloc', 'free', '内存泄漏']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdlib.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'arr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'malloc' }, { type: 'punc', text: '(' }, { type: 'num', text: '5' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'arr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 7, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Memory allocation failed\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '5' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 11, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"arr[2] = %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'num', text: '2' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'free' }, { type: 'punc', text: '(' }, { type: 'id', text: 'arr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'arr', name: 'arr', type: 'int*', addr: '0x7fff10', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 1 },
    { key: 'i', name: 'i', type: 'int', addr: '0x7fff18', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 2 },
    { key: 'arr[2]', name: 'arr[2]', type: 'int', addr: '0x20001008', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习动态内存分配 (malloc/free)', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 5,
      executedLines: [3, 4],
      vars: { arr: '0x20001000' },
      highlightVar: 'arr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'malloc 分配 5×4=20 字节堆内存，返回地址 0x20001000',
        color: 'yellow',
        actor: 'OS',
        detail: 'malloc 向操作系统申请堆（heap）内存。sizeof(int)=4，5 个 int 需要 20 字节。返回 void* 强制转为 int*。堆内存生命周期由程序员控制。'
      },
      prediction: {
        question: 'malloc 分配的内存初始值是什么？',
        options: ['全部为 0', '未初始化（垃圾值）', '全部为 1'],
        answer: 1
      },
      misconception: {
        title: 'malloc vs calloc',
        text: 'malloc 不初始化内存，内容是未定义的垃圾值。calloc 会将内存清零。如果需要零初始化，使用 calloc(5, sizeof(int))。'
      },
      actor: 'OS',
      target: 'heap:alloc',
      timing: 'runtime'
    },
    {
      step: 2,
      line: 6,
      executedLines: [3, 4, 5],
      vars: { arr: '0x20001000' },
      highlightVar: 'arr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: '检查 malloc 返回值是否为 NULL，分配失败时处理错误',
        color: 'green',
        actor: 'CPU',
        detail: 'malloc 失败时返回 NULL（地址 0）。必须检查返回值，否则后续访问 NULL 指针会导致段错误。这是防御性编程的基本要求。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:arr',
      timing: 'main-loop'
    },
    {
      step: 3,
      line: 10,
      executedLines: [3, 4, 5, 6, 7, 8, 9],
      vars: { arr: '0x20001000', i: 0 },
      highlightVar: 'i',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'for 循环初始化 i=0，遍历数组',
        color: 'blue',
        actor: 'CPU',
        detail: '循环变量 i 在栈上分配。循环条件 i<5，每次迭代 i 自增 1。将访问堆上 arr 指向的内存。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:i',
      timing: 'main-loop'
    },
    {
      step: 4,
      line: 11,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10],
      vars: { arr: '0x20001000', i: 0, 'arr[0]': 0 },
      highlightVar: 'arr[0]',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'arr[0] = 0×10 = 0，写入堆内存',
        color: 'purple',
        actor: 'CPU',
        detail: 'arr[0] 即*(arr+0)，访问 0x20001000 地址处写入 0。这是动态分配的堆内存，不是栈内存。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'heap:write',
      timing: 'loop-i=0'
    },
    {
      step: 5,
      line: 11,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10],
      vars: { arr: '0x20001000', i: 1, 'arr[0]': 0, 'arr[1]': 10 },
      highlightVar: 'arr[1]',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'i=1，arr[1] = 1×10 = 10',
        color: 'purple',
        actor: 'CPU',
        detail: 'arr[1] 访问 0x20001004 地址（偏移 4 字节）写入 10。指针算术：arr+1 = 0x20001000 + 4 = 0x20001004。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'heap:write',
      timing: 'loop-i=1'
    },
    {
      step: 6,
      line: 11,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10],
      vars: { arr: '0x20001000', i: 2, 'arr[0]': 0, 'arr[1]': 10, 'arr[2]': 20 },
      highlightVar: 'arr[2]',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'i=2，arr[2] = 2×10 = 20',
        color: 'blue',
        actor: 'CPU',
        detail: 'arr[2] 访问 0x20001008 地址写入 20。这是我们要重点关注的元素。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'heap:write',
      timing: 'loop-i=2'
    },
    {
      step: 7,
      line: 13,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 12],
      vars: { arr: '0x20001000', i: 5, 'arr[0]': 0, 'arr[1]': 10, 'arr[2]': 20, 'arr[3]': 30, 'arr[4]': 40 },
      highlightVar: 'arr[2]',
      isDanger: false,
      output: [{ type: 'success', text: 'arr[2] = 20' }],
      explanation: {
        icon: 'terminal',
        text: '输出 arr[2] = 20，验证动态数组访问成功',
        color: 'green',
        actor: 'CPU',
        detail: 'printf 访问 arr[2]（0x20001008），读取值 20，格式化为字符串输出。动态分配的内存可以像普通数组一样访问。'
      },
      prediction: {
        question: '如果访问 arr[5] 会发生什么？',
        options: ['输出 50', '段错误（越界访问）', '输出 0'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 8,
      line: 14,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 12, 13],
      vars: { arr: '0x20001000', i: 5, 'arr[0]': 0, 'arr[1]': 10, 'arr[2]': 20, 'arr[3]': 30, 'arr[4]': 40 },
      highlightVar: 'arr',
      isDanger: false,
      output: [{ type: 'success', text: 'arr[2] = 20' }],
      explanation: {
        icon: 'check',
        text: 'free(arr) 释放堆内存，防止内存泄漏',
        color: 'green',
        actor: 'OS',
        detail: 'free 将 malloc 分配的内存归还给系统。arr 变为悬空指针（dangling pointer），不应再使用。忘记 free 会导致内存泄漏。'
      },
      prediction: null,
      misconception: {
        title: '内存泄漏的危害',
        text: 'malloc 后不 free 会导致内存泄漏。程序长期运行会耗尽内存。嵌入式系统中这是致命问题。规则：谁 malloc 谁 free。'
      },
      actor: 'OS',
      target: 'heap:free',
      timing: 'runtime'
    },
    {
      step: 9,
      line: 15,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 12, 13, 14],
      vars: { arr: '0x20001000', i: 5 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'arr[2] = 20' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，动态内存管理：malloc→使用→free',
        color: 'green',
        actor: 'CPU',
        detail: '动态内存关键点：1) malloc 分配堆内存 2) 检查 NULL 3) 使用完毕必须 free 4) free 后不要再用该指针。堆内存无自动管理，全靠程序员负责。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: 'malloc 分配堆内存，free 释放，忘记 free 会内存泄漏，必须检查 NULL',
    pitfalls: [
      'malloc 不初始化内存，内容是垃圾值；需要零初始化用 calloc',
      '忘记 free 导致内存泄漏，长期运行会耗尽内存',
      'free 后指针变成悬空指针，应设为 NULL 避免误用'
    ],
    transferQuestion: '如果 malloc 后忘记检查 NULL，直接访问 arr[0] 会发生什么？（提示：段错误）',
    miniExercise: {
      bugCode: 'int *p = malloc(100);\n// ... 使用 p\n// 忘记 free\n// 这样有什么问题？',
      hint: 'malloc 分配的内存必须手动 free，否则程序退出前都不会释放'
    }
  }
};
