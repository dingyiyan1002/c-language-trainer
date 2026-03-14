window.LESSON_DATA = {
  meta: {
    id: 'l2-struct',
    title: '结构体',
    chapter: 'Level2',
    index: 3,
    filename: 'struct_basic.c',
    keyPoints: ['结构体定义', '成员访问', '内存对齐']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'Student' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 4, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'id' }, { type: 'punc', text: ';' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'name' }, { type: 'punc', text: '[' }, { type: 'num', text: '20' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'float' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'gpa' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'Student' }, { type: 'ws', text: ' ' }, { type: 'id', text: 's1' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }, { type: 'num', text: '1' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"Alice"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '3.8f' }, { type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"ID: %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 's1' }, { type: 'punc', text: '.' }, { type: 'id', text: 'id' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Name: %s\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 's1' }, { type: 'punc', text: '.' }, { type: 'id', text: 'name' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"GPA: %.1f\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 's1' }, { type: 'punc', text: '.' }, { type: 'id', text: 'gpa' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 's1.id', name: 's1.id', type: 'int', addr: '0x7fff20', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 's1.name', name: 's1.name', type: 'char[20]', addr: '0x7fff24', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 1 },
    { key: 's1.gpa', name: 's1.gpa', type: 'float', addr: '0x7fff38', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 1 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习结构体的定义与使用', color: 'blue', actor: null, detail: null },
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
        text: '定义结构体 Student，包含 id、name、gpa 三个成员',
        color: 'blue',
        actor: 'Compiler',
        detail: 'struct Student 是用户自定义类型（UDT），编译器记录其布局：int(4 字节)+char[20](20 字节)+float(4 字节)。考虑内存对齐，实际大小为 28 字节。'
      },
      prediction: {
        question: 'sizeof(struct Student) 是多少字节？',
        options: ['24 字节 (4+20+4)', '28 字节（考虑对齐）', '12 字节'],
        answer: 1
      },
      misconception: null,
      actor: 'Compiler',
      target: 'type:Student',
      timing: 'compile-time'
    },
    {
      step: 2,
      line: 4,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: '成员 id：int 类型，偏移 0，占 4 字节',
        color: 'yellow',
        actor: 'Compiler',
        detail: '结构体成员按声明顺序布局。id 是第一个成员，从偏移 0 开始。int 类型占 4 字节，范围 [0-3]。'
      },
      prediction: null,
      misconception: null,
      actor: 'Compiler',
      target: 'member:id',
      timing: 'compile-time'
    },
    {
      step: 3,
      line: 5,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'stack',
        text: '成员 name：char[20] 数组，偏移 4，占 20 字节',
        color: 'blue',
        actor: 'Compiler',
        detail: 'name 紧跟 id 之后，从偏移 4 开始。char 数组每个元素占 1 字节，20 个元素共 20 字节，范围 [4-23]。'
      },
      prediction: null,
      misconception: null,
      actor: 'Compiler',
      target: 'member:name',
      timing: 'compile-time'
    },
    {
      step: 4,
      line: 6,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: '成员 gpa：float 类型，偏移 24，占 4 字节',
        color: 'orange',
        actor: 'Compiler',
        detail: 'gpa 需要 4 字节对齐。name 结束于偏移 23，gpa 从偏移 24 开始（已满足 4 字节对齐）。范围 [24-27]。'
      },
      prediction: null,
      misconception: {
        title: '结构体大小不等于成员之和',
        text: '由于内存对齐，结构体大小通常大于成员大小之和。Student 成员和为 28 字节，但由于对齐也是 28 字节（本例中刚好）。'
      },
      actor: 'Compiler',
      target: 'member:gpa',
      timing: 'compile-time'
    },
    {
      step: 5,
      line: 10,
      executedLines: [3, 4, 5, 6, 7, 8, 9],
      vars: { 's1.id': 1, 's1.name[0]': 'A', 's1.gpa': 3.8 },
      highlightVar: 's1.id',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '创建结构体变量 s1 并初始化：id=1, name="Alice", gpa=3.8',
        color: 'yellow',
        actor: 'CPU',
        detail: '编译器为 s1 分配 28 字节栈空间，然后依次初始化各成员：将 1 写入 [0-3]，将"Alice\0" 写入 [4-23]，将 3.8f 的 IEEE754 编码写入 [24-27]。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:s1',
      timing: 'main-loop'
    },
    {
      step: 6,
      line: 11,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10],
      vars: { 's1.id': 1, 's1.name[0]': 'A', 's1.gpa': 3.8 },
      highlightVar: 's1.id',
      isDanger: false,
      output: [{ type: 'success', text: 'ID: 1' }],
      explanation: {
        icon: 'terminal',
        text: 's1.id 访问结构体成员，输出 ID: 1',
        color: 'green',
        actor: 'CPU',
        detail: '. 是结构体成员访问运算符。s1.id 计算为 s1 基地址 +id 偏移 (0)，读取 4 字节 int 值 1。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 7,
      line: 12,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11],
      vars: { 's1.id': 1, 's1.name[0]': 'A', 's1.gpa': 3.8 },
      highlightVar: 's1.name',
      isDanger: false,
      output: [{ type: 'success', text: 'ID: 1' }, { type: 'success', text: 'Name: Alice' }],
      explanation: {
        icon: 'terminal',
        text: 's1.name 是 char 数组，%s 输出字符串 "Alice"',
        color: 'green',
        actor: 'CPU',
        detail: 's1.name 计算为 s1 基地址 +name 偏移 (4)。%s 格式符从该地址开始读取字符，直到遇到\0 结束符。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 8,
      line: 13,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      vars: { 's1.id': 1, 's1.name[0]': 'A', 's1.gpa': 3.8 },
      highlightVar: 's1.gpa',
      isDanger: false,
      output: [{ type: 'success', text: 'ID: 1' }, { type: 'success', text: 'Name: Alice' }, { type: 'success', text: 'GPA: 3.8' }],
      explanation: {
        icon: 'terminal',
        text: 's1.gpa 输出浮点数 3.8，%.1f 保留 1 位小数',
        color: 'green',
        actor: 'CPU',
        detail: 's1.gpa 计算为 s1 基地址+gpa 偏移 (24)，读取 4 字节 IEEE754 浮点编码，转为十进制 3.8。%.1f 格式化为"3.8"。'
      },
      prediction: {
        question: '如何访问结构体指针的成员？（已知 struct Student *p = &s1）',
        options: ['p.id', '*p.id', 'p->id 或(*p).id'],
        answer: 2
      },
      misconception: {
        title: '结构体传参会复制整个对象',
        text: '函数参数为 struct Student 时会复制全部 28 字节。大结构体应传指针 (struct Student*) 避免复制开销。'
      },
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 9,
      line: 14,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: { 's1.id': 1, 's1.name[0]': 'A', 's1.gpa': 3.8 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'ID: 1' }, { type: 'success', text: 'Name: Alice' }, { type: 'success', text: 'GPA: 3.8' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，结构体三种成员访问方式：. -> *',
        color: 'green',
        actor: 'CPU',
        detail: '总结：1) 对象用.访问成员 (s1.id) 2) 指针用->访问成员 (p->id) 3) (*p).id 等价于 p->id。结构体是组织相关数据的强大工具。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: '结构体组合不同类型数据，. 访问成员，指针用->，注意内存对齐',
    pitfalls: [
      '结构体大小不等于成员简单相加，需考虑内存对齐（通常按最大成员对齐）',
      '结构体传值会复制整个对象，大结构体应传指针避免性能损失',
      '数组名是常量指针但结构体名不是指针，s1 本身就是完整对象'
    ],
    transferQuestion: '如果添加 double 类型成员 score，结构体大小会变成多少？（提示：double 需要 8 字节对齐）',
    miniExercise: {
      bugCode: 'struct Student s1;\ns1.id = 1;  // 这样可以使用吗？有什么问题？',
      hint: '结构体变量未初始化直接使用是合法的，但成员值不确定（栈上残留数据）'
    }
  }
};
