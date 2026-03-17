window.LESSON_DATA = {
  meta: {
    chapterId: 'arrays',
    lessonId: 'arr-4',
    title: '数组与指针的关系',
    index: 4,
    filename: 'arrays_004_arr-4.js',
    keyPoints: ['数组名退化为指针', 'sizeof 数组 vs sizeof 指针', '指针算术访问数组', '本质区别']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 数组与指针的关系：数组名退化为指针' }] },
    { num: 2, tokens: [
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
      { type: 'num', text: '10' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '20' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '30' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '40' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '50' },
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ]},
    { num: 3, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// arr 占用 20 字节 (5×4)，地址 0x7ffc00' }
    ]},
    { num: 4, tokens: [] },
    { num: 5, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// arr 退化为 int*，p = &arr[0]' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// p 占用 8 字节 (指针大小)，地址 0x7ffc20' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"arr = %p, &arr[0] = %p, p = %p\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 三者相等：0x7ffc00' }
    ]},
    { num: 10, tokens: [] },
    { num: 11, tokens: [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"sizeof(arr) = %zu\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 输出 20 (5×4 字节)' }
    ]},
    { num: 13, tokens: [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"sizeof(p) = %zu\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 14, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 输出 8 (64 位系统指针大小)' }
    ]},
    { num: 15, tokens: [] },
    { num: 16, tokens: [
      { type: 'id', text: 'p' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '300' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '         ' },
      { type: 'cmt', text: '// 等价于 *(p+2) = 300' }
    ]},
    { num: 17, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"arr[2] = %d\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 18, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 输出 300，通过指针修改了数组' }
    ]},
    { num: 19, tokens: [] },
    { num: 20, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'arr', name: 'arr', type: 'int[5]', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '[10,20,30,40,50]' },
    { key: 'p', name: 'p', type: 'int*', addr: '0x7ffc20', glowColor: 'rgba(168,85,247,0.35)', appearStep: 4, value: '0x7ffc00' },
    { key: 'arr[0]', name: 'arr[0]', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(59,130,246,0.35)', appearStep: 7, value: '10' },
    { key: 'arr[1]', name: 'arr[1]', type: 'int', addr: '0x7ffc04', glowColor: 'rgba(249,115,22,0.35)', appearStep: 7, value: '20' },
    { key: 'arr[2]', name: 'arr[2]', type: 'int', addr: '0x7ffc08', glowColor: 'rgba(250,204,21,0.35)', appearStep: 10, value: '30' },
    { key: 'arr[3]', name: 'arr[3]', type: 'int', addr: '0x7ffc0c', glowColor: 'rgba(239,68,68,0.35)', appearStep: 7, value: '40' },
    { key: 'arr[4]', name: 'arr[4]', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(34,197,94,0.35)', appearStep: 7, value: '50' }
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
        detail: '程序即将开始运行，演示数组与指针的关系'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { arr: '[10,20,30,40,50]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：数组名退化为指针',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示数组名退化行为'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { arr: '[10,20,30,40,50]' },
      highlightVar: 'arr',
      explanation: {
        icon: 'memory',
        text: '声明 int arr[5] 并初始化，占用 20 字节',
        color: 'green',
        actor: 'CPU',
        detail: '编译器在栈上分配连续 20 字节 (5×4)，从 0x7ffc00 到 0x7ffc13，依次初始化 10,20,30,40,50'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { arr: '[10,20,30,40,50]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：arr 占用 20 字节，地址 0x7ffc00',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，说明数组内存布局'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      highlightVar: 'p',
      explanation: {
        icon: 'pointer',
        text: 'int *p = arr，arr 退化为指向首元素的指针',
        color: 'purple',
        actor: 'CPU',
        detail: '数组名 arr 在表达式中自动退化为 int* 类型，值为&arr[0] = 0x7ffc00，赋值给指针 p'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：p 占用 8 字节 (指针大小)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，说明指针变量本身占用 8 字节 (64 位系统)'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 3, 5, 6],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：三者相等：0x7ffc00',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将验证地址相等'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00', arr_0: '10' },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出 arr、&arr[0]、p 的地址',
        color: 'yellow',
        actor: 'CPU',
        detail: '三个值都是 0x7ffc00，验证 arr 退化为&arr[0]，p 保存相同地址'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：三者地址相等',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认地址相等'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：sizeof(arr) 输出 20',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示 sizeof 数组得到总字节数'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      highlightVar: 'arr',
      explanation: {
        icon: 'memory',
        text: 'sizeof(arr) = 20，数组总字节数',
        color: 'green',
        actor: 'CPU',
        detail: 'sizeof 运算符对数组名操作时，返回整个数组占用的字节数：5×4 = 20 字节'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：sizeof(p) 输出 8',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示 sizeof 指针得到指针大小'
      }
    },
    {
      step: 12,
      line: 13,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      highlightVar: 'p',
      explanation: {
        icon: 'memory',
        text: 'sizeof(p) = 8，指针变量大小',
        color: 'purple',
        actor: 'CPU',
        detail: 'sizeof 对指针变量操作时，返回指针本身的大小：64 位系统为 8 字节，与指向的内容无关'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 13],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'alert',
        text: '关键区别：sizeof(数组) ≠ sizeof(指针)',
        color: 'red',
        actor: 'CPU',
        detail: '数组名在 sizeof 中不退化！这是数组名和指针的本质区别之一'
      }
    },
    {
      step: 14,
      line: 16,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：p[2] 等价于 *(p+2)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示指针下标操作'
      }
    },
    {
      step: 15,
      line: 16,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 16],
      vars: { arr: '[10,20,300,40,50]', p: '0x7ffc00', arr_2: '300' },
      highlightVar: 'arr[2]',
      explanation: {
        icon: 'memory',
        text: 'p[2] = 300，通过指针修改 arr[2]',
        color: 'orange',
        actor: 'CPU',
        detail: 'p[2] 等价于 *(p+2)，计算地址 0x7ffc00 + 2×4 = 0x7ffc08，写入 300，arr[2] 被修改'
      }
    },
    {
      step: 16,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 16],
      vars: { arr: '[10,20,300,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：输出 300，通过指针修改了数组',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认修改成功'
      }
    },
    {
      step: 17,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 16, 17],
      vars: { arr: '[10,20,300,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出 arr[2] = 300',
        color: 'yellow',
        actor: 'CPU',
        detail: '验证通过指针 p 成功修改了数组 arr 的元素'
      }
    },
    {
      step: 18,
      line: 20,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 16, 17],
      vars: { arr: '[10,20,300,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键结论：数组名在大多数表达式中退化为指针，但 sizeof 和&操作时例外'
      }
    }
  ],

  summary: {
    oneLiner: '掌握数组名退化为指针的规则及本质区别',
    pitfalls: [
      '数组名在表达式中退化为指向首元素的指针，但在 sizeof 和&操作中不退化',
      'sizeof(arr) 返回整个数组字节数，sizeof(p) 只返回指针大小 (8 字节)',
      'p[i] 和 arr[i] 完全等价，都编译为 *(base + i×sizeof(元素))',
      '数组是连续内存块，指针是独立变量，两者类型不同'
    ],
    transferQuestion: '为什么函数参数声明为 int arr[] 和 int* arr 是完全等价的？',
    miniExercise: {
      bugCode: 'void printSize(int arr[]) { printf("%zu", sizeof(arr)); } // 输出 8 不是 20',
      hint: '函数参数中的 arr[] 实际是指针 int*，sizeof(arr) 得到指针大小'
    }
  }
};
