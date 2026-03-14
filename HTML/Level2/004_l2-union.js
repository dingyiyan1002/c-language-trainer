window.LESSON_DATA = {
  meta: {
    id: 'l2-union',
    title: '联合体',
    chapter: 'Level2',
    index: 4,
    filename: 'union_basic.c',
    keyPoints: ['联合体定义', '内存共享', '数据解析']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'union' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'Data' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 4, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'punc', text: ';' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'float' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'f' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'c' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'union' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'Data' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '65' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"As int: %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'i' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"As char: %c\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'c' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'f' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '3.14f' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"As float: %.2f\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'f' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"d.i now: %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'i' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'd.i', name: 'd.i', type: 'int', addr: '0x7fff30', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'd.f', name: 'd.f', type: 'float', addr: '0x7fff30', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'd.c', name: 'd.c', type: 'char', addr: '0x7fff30', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 1 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习联合体 (union) 的内存共享特性', color: 'blue', actor: null, detail: null },
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
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '定义联合体 Data，包含 int、float、char 三个成员',
        color: 'blue',
        actor: 'Compiler',
        detail: 'union Data 是特殊类型，所有成员共享同一块内存。大小等于最大成员（本例中 float 占 4 字节，所以 sizeof(union Data)=4）。'
      },
      prediction: {
        question: 'sizeof(union Data) 是多少？',
        options: ['9 字节 (4+4+1)', '4 字节（最大成员大小）', '1 字节'],
        answer: 1
      },
      misconception: null,
      actor: 'Compiler',
      target: 'type:Data',
      timing: 'compile-time'
    },
    {
      step: 2,
      line: 10,
      executedLines: [3, 4, 5, 6, 7, 8, 9],
      vars: { 'd.i': 0, 'd.f': 0, 'd.c': 0 },
      highlightVar: 'd.i',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: '创建联合体变量 d，三个成员共享同一地址 0x7fff30',
        color: 'yellow',
        actor: 'CPU',
        detail: 'd 的三个成员 i、f、c 共享 4 字节内存，地址都是 0x7fff30。写入一个成员会覆盖其他成员的值。'
      },
      prediction: null,
      misconception: {
        title: '联合体与结构体的区别',
        text: '结构体各成员独立占用内存，联合体成员共享内存。结构体大小>=成员和，联合体大小=最大成员大小。'
      },
      actor: 'CPU',
      target: 'var:d',
      timing: 'main-loop'
    },
    {
      step: 3,
      line: 11,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10],
      vars: { 'd.i': 65, 'd.f': 'N/A', 'd.c': 'N/A' },
      highlightVar: 'd.i',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'd.i = 65，将整数值 65 写入共享内存',
        color: 'yellow',
        actor: 'CPU',
        detail: '65 的 32 位二进制表示 (0x00000041) 被写入 d 的内存。此时 d.f 和 d.c 的值也被覆盖（因为它们共享同一内存）。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:d.i',
      timing: 'main-loop'
    },
    {
      step: 4,
      line: 12,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11],
      vars: { 'd.i': 65, 'd.f': 'N/A', 'd.c': 'N/A' },
      highlightVar: 'd.i',
      isDanger: false,
      output: [{ type: 'success', text: 'As int: 65' }],
      explanation: {
        icon: 'terminal',
        text: '输出 d.i = 65',
        color: 'green',
        actor: 'CPU',
        detail: '直接读取 d.i 的值，就是之前写入的 65。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 5,
      line: 13,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      vars: { 'd.i': 65, 'd.f': 'N/A', 'd.c': 'N/A' },
      highlightVar: 'd.c',
      isDanger: false,
      output: [{ type: 'success', text: 'As int: 65' }, { type: 'success', text: 'As char: A' }],
      explanation: {
        icon: 'bolt',
        text: 'd.c = \'A\'，65 的 ASCII 码对应字符\'A\'',
        color: 'purple',
        actor: 'CPU',
        detail: 'char 类型只读取共享内存的第 1 字节。65 的十六进制是 0x41，正好是 ASCII 码\'A\'。这展示了同一块内存可以有不同解读。'
      },
      prediction: {
        question: '为什么 d.c 输出是\'A\'？',
        options: ['巧合', '65 的 ASCII 码就是\'A\'', 'char 类型自动转换'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:d.c',
      timing: 'main-loop'
    },
    {
      step: 6,
      line: 14,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: { 'd.i': 1078523331, 'd.f': 3.14, 'd.c': 'N/A' },
      highlightVar: 'd.f',
      isDanger: false,
      output: [{ type: 'success', text: 'As int: 65' }, { type: 'success', text: 'As char: A' }],
      explanation: {
        icon: 'alert',
        text: 'd.f = 3.14f，写入浮点数，覆盖之前 d.i 的值',
        color: 'red',
        actor: 'CPU',
        detail: '3.14f 的 IEEE754 编码 (0x4048F5C3) 被写入共享内存，覆盖了之前的 65。此时 d.i 的值不再是 65，而是 1078523331（同一 bit 模式的 int 解读）。'
      },
      prediction: null,
      misconception: {
        title: '联合体成员相互覆盖',
        text: '写入 union 的一个成员会破坏其他成员的值。任何时候只有一个成员是"有效"的。需要额外标记来追踪当前哪个成员有效。'
      },
      actor: 'CPU',
      target: 'var:d.f',
      timing: 'main-loop'
    },
    {
      step: 7,
      line: 15,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      vars: { 'd.i': 1078523331, 'd.f': 3.14, 'd.c': 'N/A' },
      highlightVar: 'd.f',
      isDanger: false,
      output: [{ type: 'success', text: 'As int: 65' }, { type: 'success', text: 'As char: A' }, { type: 'success', text: 'As float: 3.14' }],
      explanation: {
        icon: 'terminal',
        text: '输出 d.f = 3.14',
        color: 'green',
        actor: 'CPU',
        detail: '读取 d.f 的值，按 float 格式输出 3.14。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 8,
      line: 16,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { 'd.i': 1078523331, 'd.f': 3.14, 'd.c': 'N/A' },
      highlightVar: 'd.i',
      isDanger: true,
      output: [{ type: 'success', text: 'As int: 65' }, { type: 'success', text: 'As char: A' }, { type: 'success', text: 'As float: 3.14' }, { type: 'success', text: 'd.i now: 1078523331' }],
      explanation: {
        icon: 'skull',
        text: 'd.i 现在是 1078523331，不是原来的 65！',
        color: 'red',
        actor: 'CPU',
        detail: 'd.i 和 d.f 共享内存，写入 d.f 后 d.i 的值被覆盖。1078523331 是 3.14f 的 IEEE754 编码按 int 解读的结果。这就是联合体的危险性。'
      },
      prediction: {
        question: '联合体的主要用途是什么？',
        options: ['存储多个独立数据', '同一数据的多种解读/变体数据', '替代结构体'],
        answer: 1
      },
      misconception: {
        title: '联合体典型应用场景',
        text: '1) 类型双关 (Type Punning)：同一内存不同解读 2) 变体数据：配合 tag 字段实现 variant 3) 节省内存：多个互斥字段共用空间'
      },
      actor: 'CPU',
      target: 'var:d.i',
      timing: 'main-loop'
    },
    {
      step: 9,
      line: 17,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      vars: { 'd.i': 1078523331, 'd.f': 3.14, 'd.c': 'N/A' },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'As int: 65' }, { type: 'success', text: 'As char: A' }, { type: 'success', text: 'As float: 3.14' }, { type: 'success', text: 'd.i now: 1078523331' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，联合体：共享内存，相互覆盖',
        color: 'green',
        actor: 'CPU',
        detail: '联合体关键特性：1) 所有成员共享同一内存 2) 大小=最大成员 3) 写入一个成员覆盖其他成员 4) 用于类型双关或变体数据。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: '联合体成员共享同一内存，写入一个成员会覆盖其他成员，大小等于最大成员',
    pitfalls: [
      '联合体任何时候只有一个成员有效，写入新成员会破坏旧值',
      '读取联合体成员前需要知道最后写入的是哪个成员，否则是未定义行为',
      '联合体需要额外的 tag 字段来追踪当前有效成员（如 variant 设计）'
    ],
    transferQuestion: '如果要安全使用联合体，应该如何设计数据结构来追踪当前哪个成员有效？（提示：配合结构体使用）',
    miniExercise: {
      bugCode: 'union Data { int i; float f; };\nunion Data d;\nd.i = 42;\nprintf("%f", d.f);  // 这样安全吗？',
      hint: '写入 d.i 后读取 d.f，读取的是未定义值（同一内存的不同解读）'
    }
  }
};
