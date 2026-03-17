window.LESSON_DATA = {
  meta: {
    chapterId: 'pointers',
    lessonId: 'ptr-4',
    title: '指针与数组的深层关系',
    index: 4,
    filename: 'pointers_004_ptr-4.js',
    keyPoints: ['数组名退化为指针的时机', 'sizeof 数组 vs sizeof 指针', '下标操作的本质', '指针数组 vs 数组指针']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 指针与数组：数组名退化的规则与例外' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
      { type: 'punc', text: '5' },
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
    ]},
    { num: 3, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// arr: 20 字节连续内存，0x7ffc00-0x7ffc13' }
    ]},
    { num: 4, tokens: [] },
    { num: 5, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '         ' },
      { type: 'cmt', text: '// arr 退化为 int*' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 等价于 p = &arr[0]' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'size_arr' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// size_arr = 20' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// sizeof(arr) = 5×4 = 20 字节' }
    ]},
    { num: 10, tokens: [] },
    { num: 11, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'size_p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '   ' },
      { type: 'cmt', text: '// size_p = 8' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// sizeof(p) = 8 字节 (64 位指针)' }
    ]},
    { num: 13, tokens: [] },
    { num: 14, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
      { type: 'punc', text: '2' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// a = *(arr+2) = 3' }
    ]},
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// arr[2] 编译为 *(arr+2)' }
    ]},
    { num: 16, tokens: [] },
    { num: 17, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: '[' },
      { type: 'punc', text: '2' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// b = *(p+2) = 3' }
    ]},
    { num: 18, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// p[2] 编译为 *(p+2)，与 arr[2] 相同' }
    ]},
    { num: 19, tokens: [] },
    { num: 20, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '300' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 修改 arr[2]' }
    ]},
    { num: 21, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// (&arr) 是数组指针，(&arr)[2] 非法访问' }
    ]},
    { num: 22, tokens: [] },
    { num: 23, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'arrPtr' },
      { type: 'punc', text: '(' },
      { type: 'op', text: ')' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 指针数组' }
    ]},
    { num: 24, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// arrPtr[0] = arr (首元素地址)' }
    ]},
    { num: 25, tokens: [] },
    { num: 26, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'arr', name: 'arr', type: 'int[5]', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '[1,2,3,4,5]' },
    { key: 'arr_bytes', name: 'arr 内存', type: 'char[20]', addr: '0x7ffc00', glowColor: 'rgba(59,130,246,0.35)', appearStep: 2, value: '20 字节' },
    { key: 'p', name: 'p', type: 'int*', addr: '0x7ffc20', glowColor: 'rgba(168,85,247,0.35)', appearStep: 4, value: '0x7ffc00' },
    { key: 'size_arr', name: 'size_arr', type: 'int', addr: '0x7ffc30', glowColor: 'rgba(249,115,22,0.35)', appearStep: 7, value: '20' },
    { key: 'size_p', name: 'size_p', type: 'int', addr: '0x7ffc34', glowColor: 'rgba(250,204,21,0.35)', appearStep: 10, value: '8' },
    { key: 'a', name: 'a', type: 'int', addr: '0x7ffc40', glowColor: 'rgba(239,68,68,0.35)', appearStep: 13, value: '3' },
    { key: 'b', name: 'b', type: 'int', addr: '0x7ffc44', glowColor: 'rgba(34,197,94,0.35)', appearStep: 16, value: '3' },
    { key: 'arr_2_new', name: 'arr[2]', type: 'int', addr: '0x7ffc08', glowColor: 'rgba(250,204,21,0.35)', appearStep: 19, value: '300' },
    { key: 'arrPtr', name: 'arrPtr', type: 'int*[5]', addr: '0x7ffc50', glowColor: 'rgba(168,85,247,0.35)', appearStep: 22, value: '[0x7ffc00]' }
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
        detail: '程序即将开始运行，深入讲解指针与数组的关系'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { arr: '[1,2,3,4,5]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：指针与数组 - 数组名退化的规则与例外',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示数组名何时退化、何时不退化'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { arr: '[1,2,3,4,5]' },
      highlightVar: 'arr',
      explanation: {
        icon: 'memory',
        text: '声明 int arr[5] 并初始化，占用 20 字节',
        color: 'green',
        actor: 'CPU',
        detail: '编译器在栈上分配连续 20 字节 (5×4)，从 0x7ffc00 到 0x7ffc13，依次存储 1,2,3,4,5'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { arr: '[1,2,3,4,5]', arr_bytes: '20 字节' },
      explanation: {
        icon: 'info',
        text: '阅读注释：arr: 20 字节连续内存，0x7ffc00-0x7ffc13',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，强调数组是连续内存块'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00' },
      highlightVar: 'p',
      explanation: {
        icon: 'pointer',
        text: 'int *p = arr，数组名 arr 退化为 int*',
        color: 'purple',
        actor: 'CPU',
        detail: '关键点：arr 在赋值表达式中自动退化为指向首元素的指针 &arr[0] = 0x7ffc00，赋值给 p'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：等价于 p = &arr[0]',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 arr 退化行为'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 3, 5, 6],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：size_arr = 20',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示 sizeof 数组'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00', size_arr: '20' },
      highlightVar: 'size_arr',
      explanation: {
        icon: 'calculator',
        text: 'sizeof(arr) = 20，数组不退化！',
        color: 'orange',
        actor: 'CPU',
        detail: '关键例外：arr 在 sizeof 运算符中不退化！返回整个数组的字节数 5×4=20，不是指针大小！'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00', size_arr: '20' },
      explanation: {
        icon: 'info',
        text: '阅读注释：sizeof(arr) = 5×4 = 20 字节',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 sizeof 数组的结果'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00', size_arr: '20' },
      explanation: {
        icon: 'info',
        text: '阅读注释：size_p = 8',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，对比 sizeof 指针'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8' },
      highlightVar: 'size_p',
      explanation: {
        icon: 'calculator',
        text: 'sizeof(p) = 8，指针变量大小',
        color: 'yellow',
        actor: 'CPU',
        detail: 'sizeof(p) 返回指针变量本身的大小：64 位系统为 8 字节。关键对比：sizeof(arr)=20 ≠ sizeof(p)=8！'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8' },
      explanation: {
        icon: 'alert',
        text: '关键区别：数组在 sizeof 中不退化',
        color: 'red',
        actor: 'CPU',
        detail: '这是数组名和指针的本质区别！arr 在 sizeof 和&运算符中保持数组类型，不退化为指针'
      }
    },
    {
      step: 12,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8' },
      explanation: {
        icon: 'info',
        text: '阅读注释：a = *(arr+2) = 3',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示下标操作的本质'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8', a: '3' },
      highlightVar: 'a',
      explanation: {
        icon: 'memory',
        text: 'arr[2] = *(arr+2) = 3，下标即指针运算',
        color: 'green',
        actor: 'CPU',
        detail: '编译器将 arr[2] 转换为 *(arr+2)：地址 0x7ffc00 + 2×4 = 0x7ffc08，读取 int 值 3'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8', a: '3' },
      explanation: {
        icon: 'info',
        text: '阅读注释：arr[2] 编译为 *(arr+2)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释下标运算符的编译结果'
      }
    },
    {
      step: 15,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8', a: '3' },
      explanation: {
        icon: 'info',
        text: '阅读注释：b = *(p+2) = 3',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，对比指针下标操作'
      }
    },
    {
      step: 16,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8', a: '3', b: '3' },
      highlightVar: 'b',
      explanation: {
        icon: 'memory',
        text: 'p[2] = *(p+2) = 3，与 arr[2] 完全相同',
        color: 'cyan',
        actor: 'CPU',
        detail: 'p[2] 编译为 *(p+2)，与 arr[2] 的计算完全相同：0x7ffc00 + 8 = 0x7ffc08，读取 3'
      }
    },
    {
      step: 17,
      line: 18,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8', a: '3', b: '3' },
      explanation: {
        icon: 'info',
        text: '阅读注释：p[2] 编译为 *(p+2)，与 arr[2] 相同',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 arr[i] 和 p[i] 的等价性'
      }
    },
    {
      step: 18,
      line: 20,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18],
      vars: { arr: '[1,2,3,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8', a: '3', b: '3' },
      explanation: {
        icon: 'info',
        text: '阅读注释：修改 arr[2]',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示通过指针修改数组'
      }
    },
    {
      step: 19,
      line: 20,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20],
      vars: { arr: '[1,2,300,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8', a: '3', b: '3', arr_2_new: '300' },
      highlightVar: 'arr_2_new',
      explanation: {
        icon: 'memory',
        text: '*(&arr)[2] = 300，通过指针修改 arr[2]',
        color: 'orange',
        actor: 'CPU',
        detail: '解引用数组地址后下标访问，写入 300 到地址 0x7ffc08。arr[2] 从 3 变为 300'
      }
    },
    {
      step: 20,
      line: 21,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20],
      vars: { arr: '[1,2,300,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8', a: '3', b: '3', arr_2_new: '300' },
      explanation: {
        icon: 'alert',
        text: '注意：(&arr)[2] 是危险的类型混淆',
        color: 'red',
        actor: 'CPU',
        detail: '&arr 是数组指针 (int(*)[5])，(&arr)[2] 会跳过整个数组 (20 字节)，访问非法内存！仅用于演示'
      }
    },
    {
      step: 21,
      line: 23,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21],
      vars: { arr: '[1,2,300,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8', a: '3', b: '3', arr_2_new: '300' },
      explanation: {
        icon: 'info',
        text: '阅读注释：指针数组',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示指针数组概念'
      }
    },
    {
      step: 22,
      line: 23,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23],
      vars: { arr: '[1,2,300,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8', a: '3', b: '3', arr_2_new: '300', arrPtr: '[0x7ffc00]' },
      highlightVar: 'arrPtr',
      explanation: {
        icon: 'memory',
        text: 'int *arrPtr[5] = {arr}，指针数组',
        color: 'purple',
        actor: 'CPU',
        detail: 'arrPtr 是包含 5 个 int* 的数组，占用 40 字节 (5×8)。arrPtr[0] 初始化为 arr 的首地址 0x7ffc00'
      }
    },
    {
      step: 23,
      line: 24,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23],
      vars: { arr: '[1,2,300,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8', a: '3', b: '3', arr_2_new: '300', arrPtr: '[0x7ffc00]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：arrPtr[0] = arr (首元素地址)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认指针数组初始化'
      }
    },
    {
      step: 24,
      line: 26,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24],
      vars: { arr: '[1,2,300,4,5]', p: '0x7ffc00', size_arr: '20', size_p: '8', a: '3', b: '3', arr_2_new: '300', arrPtr: '[0x7ffc00]' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。核心结论：数组名在大多数表达式中退化为指针，但 sizeof 和&操作时例外，保持数组类型'
      }
    }
  ],

  summary: {
    oneLiner: '掌握数组名退化为指针的规则与 sizeof/&操作时的例外',
    pitfalls: [
      '数组名在表达式中退化为指向首元素的指针，但在 sizeof 和&中不退化',
      'sizeof(arr) 返回 20 字节 (数组大小)，sizeof(p) 返回 8 字节 (指针大小)',
      'arr[i] 和 p[i] 完全等价，都编译为*(base + i×sizeof(元素))',
      '指针数组 int* arr[5] 是数组，数组指针 int (*p)[5] 是指针，类型不同'
    ],
    transferQuestion: '为什么函数参数 void foo(int arr[]) 和 void foo(int *arr) 是完全等价的？',
    miniExercise: {
      bugCode: 'void print(int arr[]) { printf("%zu", sizeof(arr)); } // 输出 8 不是 20',
      hint: '函数参数中的 arr[] 实际被编译器视为 int*，sizeof(arr) 得到指针大小 8 字节'
    }
  },

  predictions: [
    {
      question: '对于 int arr[5] 和 int *p = arr，sizeof(arr) 和 sizeof(p) 的结果分别是？',
      options: [
        { text: 'sizeof(arr)=20, sizeof(p)=20', feedback: '错误！p 是指针变量，大小是 8 字节。' },
        { text: 'sizeof(arr)=8, sizeof(p)=8', feedback: '错误！arr 在 sizeof 中不退化，保持数组大小 20 字节。' },
        { text: 'sizeof(arr)=20, sizeof(p)=8', feedback: '正确！arr 是数组 (5×4=20)，p 是指针 (8 字节)。' },
        { text: 'sizeof(arr)=5, sizeof(p)=8', feedback: '错误！sizeof 返回字节数，不是元素个数。' }
      ],
      correctIndex: 2
    },
    {
      question: '数组名 arr 在什么情况下不退化为指针？',
      options: [
        { text: '赋值表达式中', feedback: '错误！int *p = arr 中 arr 退化为指针。' },
        { text: 'sizeof 和&运算符中', feedback: '正确！sizeof(arr) 和&arr 中 arr 保持数组类型。' },
        { text: '函数调用中', feedback: '错误！foo(arr) 中 arr 退化为指针。' },
        { text: '下标操作中', feedback: '错误！arr[i] 中 arr 退化为指针。' }
      ],
      correctIndex: 1
    },
    {
      question: 'arr[2] 和 p[2] 的关系是什么？(已知 p = arr)',
      options: [
        { text: '完全不同，arr 是数组 p 是指针', feedback: '错误！两者完全等价。' },
        { text: 'arr[2] 更快，p[2] 需要间接寻址', feedback: '错误！编译后完全相同。' },
        { text: '完全等价，都编译为*(base+2)', feedback: '正确！编译器将两者都转换为指针运算。' },
        { text: 'p[2] 是非法语法', feedback: '错误！指针可以用下标操作。' }
      ],
      correctIndex: 2
    }
  ],

  misconceptions: [
    {
      myth: '数组名总是退化为指针',
      truth: '数组名在大多数表达式中退化为指针，但在 sizeof 和&运算符中保持数组类型。sizeof(arr) 返回整个数组的字节数，&arr 得到数组指针 (int(*)[5])，类型不同。'
    },
    {
      myth: 'sizeof(arr) 和 sizeof(p) 应该相同',
      truth: '这是数组和指针的本质区别！arr 是 20 字节的数组对象，p 是 8 字节的指针变量。即使 p = arr，两者在内存中也是完全不同的存在。'
    },
    {
      myth: 'arr[i] 和 p[i] 的实现机制不同',
      truth: '完全相同！编译器将 arr[i] 和 p[i] 都转换为*(base + i×sizeof(元素))。数组下标操作本质就是指针运算，这是 C 语言的核心设计理念。'
    },
    {
      myth: '指针数组和数组指针是一回事',
      truth: '完全不同！int* arr[5] 是指针数组（5 个 int* 的数组），int (*p)[5] 是数组指针（指向含 5 个 int 的数组的指针）。优先级规则：[] 高于*，所以 int* arr[5] 等价于 int* (arr[5])。'
    }
  ]
};
