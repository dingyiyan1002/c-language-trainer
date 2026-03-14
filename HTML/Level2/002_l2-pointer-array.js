window.LESSON_DATA = {
  meta: {
    id: 'l2-pointer-array',
    title: '指针与数组',
    chapter: 'Level2',
    index: 2,
    filename: 'pointer_array.c',
    keyPoints: ['数组名', '指针算术', '下标访问']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 4, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'num', text: '5' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }, { type: 'num', text: '10' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '20' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '30' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '40' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '50' }, { type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"arr[0] = %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'num', text: '0' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"*ptr = %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"*(ptr+1) = %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'punc', text: '(' }, { type: 'id', text: 'ptr' }, { type: 'op', text: '+' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"arr[1] = %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'num', text: '1' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'arr', name: 'arr', type: 'int[5]', addr: '0x7fff10', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'ptr', name: 'ptr', type: 'int*', addr: '0x7fff30', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习指针与数组的关系', color: 'blue', actor: null, detail: null },
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
      vars: { 'arr[0]': 10, 'arr[1]': 20, 'arr[2]': 30, 'arr[3]': 40, 'arr[4]': 50 },
      highlightVar: 'arr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'stack',
        text: '声明数组 arr[5]，初始化 5 个整数，连续存储',
        color: 'yellow',
        actor: 'CPU',
        detail: '数组 arr 在栈上分配 5×4=20 字节连续空间。arr[0]~arr[4] 依次存储 10,20,30,40,50。数组名 arr 代表首元素地址。'
      },
      prediction: {
        question: '数组 arr 在内存中如何存储？',
        options: ['5 个独立变量', '20 字节连续空间，每个元素 4 字节', '指针数组'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:arr',
      timing: 'main-loop'
    },
    {
      step: 2,
      line: 5,
      executedLines: [3, 4],
      vars: { 'arr[0]': 10, 'arr[1]': 20, 'arr[2]': 30, 'arr[3]': 40, 'arr[4]': 50, ptr: '0x7fff10' },
      highlightVar: 'ptr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'pointer',
        text: 'ptr = arr，ptr 指向数组首元素 arr[0] 的地址',
        color: 'purple',
        actor: 'CPU',
        detail: '数组名 arr 在表达式中自动转换为指向首元素的指针（&arr[0]）。所以 ptr = arr 等价于 ptr = &arr[0]，ptr 指向 0x7fff10。'
      },
      prediction: null,
      misconception: {
        title: '数组名不是指针变量',
        text: '数组名 arr 是常量指针（地址不可修改），而 ptr 是指针变量（可以重新赋值）。arr++ 是非法的，但 ptr++ 合法。'
      },
      actor: 'CPU',
      target: 'var:ptr',
      timing: 'main-loop'
    },
    {
      step: 3,
      line: 6,
      executedLines: [3, 4, 5],
      vars: { 'arr[0]': 10, 'arr[1]': 20, 'arr[2]': 30, 'arr[3]': 40, 'arr[4]': 50, ptr: '0x7fff10' },
      highlightVar: 'arr',
      isDanger: false,
      output: [{ type: 'success', text: 'arr[0] = 10' }],
      explanation: {
        icon: 'terminal',
        text: '输出 arr[0] = 10',
        color: 'green',
        actor: 'CPU',
        detail: 'arr[0] 是数组下标访问，编译器翻译为 *(arr + 0)，即访问 arr 指向的地址 (0x7fff10) 处的值。'
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
      vars: { 'arr[0]': 10, 'arr[1]': 20, 'arr[2]': 30, 'arr[3]': 40, 'arr[4]': 50, ptr: '0x7fff10' },
      highlightVar: 'ptr',
      isDanger: false,
      output: [{ type: 'success', text: 'arr[0] = 10' }, { type: 'success', text: '*ptr = 10' }],
      explanation: {
        icon: 'check',
        text: '输出 *ptr = 10，与 arr[0] 相同',
        color: 'green',
        actor: 'CPU',
        detail: 'ptr 指向 arr[0]，所以*ptr 等价于 arr[0]。两者都访问 0x7fff10 地址处的值 10。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 5,
      line: 8,
      executedLines: [3, 4, 5, 6, 7],
      vars: { 'arr[0]': 10, 'arr[1]': 20, 'arr[2]': 30, 'arr[3]': 40, 'arr[4]': 50, ptr: '0x7fff10' },
      highlightVar: 'ptr',
      isDanger: false,
      output: [{ type: 'success', text: 'arr[0] = 10' }, { type: 'success', text: '*ptr = 10' }, { type: 'success', text: '*(ptr+1) = 20' }],
      explanation: {
        icon: 'bolt',
        text: '*(ptr+1) = 20，指针算术：ptr+1 跳过 4 字节 (int 大小)',
        color: 'purple',
        actor: 'CPU',
        detail: 'ptr+1 不是地址 +1，而是地址+sizeof(int)=4 字节，指向 arr[1]。*(ptr+1) 访问 arr[1] 的值 20。这是指针算术的精髓。'
      },
      prediction: {
        question: 'ptr+1 的地址是多少？（已知 ptr=0x7fff10）',
        options: ['0x7fff11', '0x7fff14', '0x7fff18'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:ptr',
      timing: 'main-loop'
    },
    {
      step: 6,
      line: 9,
      executedLines: [3, 4, 5, 6, 7, 8],
      vars: { 'arr[0]': 10, 'arr[1]': 20, 'arr[2]': 30, 'arr[3]': 40, 'arr[4]': 50, ptr: '0x7fff10' },
      highlightVar: 'arr',
      isDanger: false,
      output: [{ type: 'success', text: 'arr[0] = 10' }, { type: 'success', text: '*ptr = 10' }, { type: 'success', text: '*(ptr+1) = 20' }, { type: 'success', text: 'arr[1] = 20' }],
      explanation: {
        icon: 'check',
        text: 'arr[1] = 20，验证 arr[1] 等价于 *(ptr+1)',
        color: 'green',
        actor: 'CPU',
        detail: 'arr[1] 和*(ptr+1) 都访问同一地址 (0x7fff14) 的值。这证明：数组下标访问 a[i] 等价于指针算术*(a+i)。'
      },
      prediction: {
        question: '以下哪个等价于 arr[2]？',
        options: ['*(arr+2)', '*arr+2', 'arr+2'],
        answer: 0
      },
      misconception: {
        title: '*(ptr+1) 与 *ptr+1 的区别',
        text: '*(ptr+1) 是先移动指针再解引用（访问下一个元素），而 *ptr+1 是先解引用再加 1（当前元素值 +1）。运算符优先级：+ 高于*，括号很重要！'
      },
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 7,
      line: 10,
      executedLines: [3, 4, 5, 6, 7, 8, 9],
      vars: { 'arr[0]': 10, 'arr[1]': 20, 'arr[2]': 30, 'arr[3]': 40, 'arr[4]': 50, ptr: '0x7fff10' },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'arr[0] = 10' }, { type: 'success', text: '*ptr = 10' }, { type: 'success', text: '*(ptr+1) = 20' }, { type: 'success', text: 'arr[1] = 20' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，数组与指针关系验证完成',
        color: 'green',
        actor: 'CPU',
        detail: '关键结论：1) 数组名=首地址 2) a[i] ≡ *(a+i) 3) 指针算术按类型大小缩放。这是 C 语言数组和指针的核心。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: '数组名是首元素地址，a[i] 等价于*(a+i)，指针算术按类型大小缩放',
    pitfalls: [
      '数组名是常量指针不能赋值（arr++ 非法），而指针变量可以重新赋值',
      '指针+1 不是地址 +1，而是+sizeof(类型)，int*+1= 地址 +4',
      '*(ptr+1) 与*ptr+1 完全不同：前者访问下一元素，后者是当前值 +1'
    ],
    transferQuestion: '如果 ptr 是 char* 类型指向数组首元素，ptr+3 的地址是多少？(已知 ptr=0x7fff10，提示：char 占 1 字节)',
    miniExercise: {
      bugCode: 'int arr[5] = {1,2,3,4,5};\narr = arr + 1;  // 这行代码有什么问题？',
      hint: 'arr 是数组名（常量指针），不能作为左值被赋值'
    }
  }
};
