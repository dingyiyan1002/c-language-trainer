window.LESSON_DATA = {
  meta: {
    id: 'l2-pointer-basic',
    title: '指针基础',
    chapter: 'Level2',
    index: 1,
    filename: 'pointer_basic.c',
    keyPoints: ['指针声明', '解引用', '指针运算']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 4, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '42' }, { type: 'punc', text: ';' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'id', text: 'num' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"num = %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"&num = %p\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'id', text: 'num' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"ptr = %p\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"*ptr = %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'num', name: 'num', type: 'int', addr: '0x7fff01', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'ptr', name: 'ptr', type: 'int*', addr: '0x7fff08', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 }
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
      explanation: { icon: 'rocket', text: '点击播放，开始学习指针基础', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 4,
      executedLines: [3],
      vars: { num: 42 },
      highlightVar: 'num',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: '声明整型变量 num = 42，在栈上分配 4 字节',
        color: 'yellow',
        actor: 'CPU',
        detail: '编译器为 int num=42 分配栈空间，将立即数 42 写入内存。int 类型在大多数系统上占 4 字节（32 位）。'
      },
      prediction: null,
      misconception: {
        title: '变量名只是符号',
        text: '变量名 num 是编译器的符号表条目，编译后只保留内存地址。CPU 只认地址，不认变量名。'
      },
      actor: 'CPU',
      target: 'var:num',
      timing: 'main-loop'
    },
    {
      step: 2,
      line: 5,
      executedLines: [3, 4],
      vars: { num: 42, ptr: '0x7fff01' },
      highlightVar: 'ptr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'pointer',
        text: '声明指针 ptr，存储 num 的地址 0x7fff01',
        color: 'purple',
        actor: 'CPU',
        detail: '指针变量 ptr 存储的是&num 的结果（num 的内存地址）。指针本身也占内存（64 位系统上为 8 字节），存储的内容是另一个变量的地址。'
      },
      prediction: {
        question: '指针 ptr 的值是什么？',
        options: ['42', 'num 的内存地址', 'ptr 自身的地址'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:ptr',
      timing: 'main-loop'
    },
    {
      step: 3,
      line: 6,
      executedLines: [3, 4, 5],
      vars: { num: 42, ptr: '0x7fff01' },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'num = 42' }],
      explanation: {
        icon: 'terminal',
        text: 'printf 输出 num 的值：42',
        color: 'green',
        actor: 'CPU',
        detail: 'printf 通过格式串 %d 将整型值 num 转为十进制 ASCII 字符串"42"，写入 stdout 标准输出。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 4,
      line: 7,
      executedLines: [3, 4, 5, 6],
      vars: { num: 42, ptr: '0x7fff01' },
      highlightVar: 'num',
      isDanger: false,
      output: [{ type: 'success', text: '&num = 0x7fff01' }],
      explanation: {
        icon: 'memory',
        text: '输出 num 的地址：0x7fff01',
        color: 'blue',
        actor: 'CPU',
        detail: '&是取地址运算符，返回变量 num 在内存中的实际地址。%p 格式 specifier 用于以十六进制格式打印指针/地址值。'
      },
      prediction: null,
      misconception: {
        title: '地址值每次运行可能不同',
        text: '由于 ASLR（地址空间布局随机化）等安全机制，变量地址在每次程序运行时可能不同，但 num 和 ptr 的相对关系不变。'
      },
      actor: 'CPU',
      target: 'var:num',
      timing: 'main-loop'
    },
    {
      step: 5,
      line: 8,
      executedLines: [3, 4, 5, 6, 7],
      vars: { num: 42, ptr: '0x7fff01' },
      highlightVar: 'ptr',
      isDanger: false,
      output: [{ type: 'success', text: '&num = 0x7fff01' }, { type: 'success', text: 'ptr = 0x7fff01' }],
      explanation: {
        icon: 'check',
        text: '输出 ptr 的值：0x7fff01，与&num 相同',
        color: 'green',
        actor: 'CPU',
        detail: 'ptr 存储的就是 num 的地址，所以 ptr 的值等于&num。这验证了指针 ptr 指向变量 num。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:ptr',
      timing: 'main-loop'
    },
    {
      step: 6,
      line: 9,
      executedLines: [3, 4, 5, 6, 7, 8],
      vars: { num: 42, ptr: '0x7fff01' },
      highlightVar: 'num',
      isDanger: false,
      output: [{ type: 'success', text: '&num = 0x7fff01' }, { type: 'success', text: 'ptr = 0x7fff01' }, { type: 'success', text: '*ptr = 42' }],
      explanation: {
        icon: 'bolt',
        text: '*ptr 解引用，读取 num 的值：42',
        color: 'purple',
        actor: 'CPU',
        detail: '*是指针解引用运算符。CPU 先读取 ptr 中存储的地址 (0x7fff01)，然后访问该地址，读取其中存储的值 (42)。*ptr 等价于 num。'
      },
      prediction: {
        question: '*ptr 操作读取的是什么？',
        options: ['ptr 自身的值', 'ptr 存储地址处的值（即 num 的值）', 'ptr 的地址'],
        answer: 1
      },
      misconception: {
        title: '*ptr 与 ptr 的区别',
        text: 'ptr 是指针变量的值（存储的地址），*ptr 是访问该地址所指向的内存，读取目标变量的值。ptr 是"门牌号"，*ptr 是"门内的东西"。'
      },
      actor: 'CPU',
      target: 'var:num',
      timing: 'main-loop'
    },
    {
      step: 7,
      line: 10,
      executedLines: [3, 4, 5, 6, 7, 8, 9],
      vars: { num: 42, ptr: '0x7fff01' },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: '&num = 0x7fff01' }, { type: 'success', text: 'ptr = 0x7fff01' }, { type: 'success', text: '*ptr = 42' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，返回 0 表示正常结束',
        color: 'green',
        actor: 'CPU',
        detail: 'return 0 将返回值 0 写入 eax 寄存器，然后执行 epilogue 指令恢复栈帧，程序退出。0 表示程序正常结束，非 0 表示错误。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: '指针存储其他变量的地址，&取地址，*解引用访问目标值',
    pitfalls: [
      '指针未初始化就解引用会导致段错误 (Segfault)——野指针危险',
      '指针类型必须与目标变量类型匹配，否则解引用会读取错误字节数',
      '指针变量本身也占内存空间（64 位系统 8 字节），存储的是地址值'
    ],
    transferQuestion: '如果定义 int **pptr = &ptr; 那么 *pptr、**pptr 分别代表什么？（提示：多级指针）',
    miniExercise: {
      bugCode: 'int *p;\nprintf("%d", *p);  // 这里有什么问题？',
      hint: 'p 未初始化，指向随机地址，解引用是未定义行为'
    }
  }
};
