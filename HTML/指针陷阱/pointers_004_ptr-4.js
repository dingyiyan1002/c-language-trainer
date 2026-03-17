window.LESSON_DATA = {
  meta: {
    chapterId: 'pointers',
    lessonId: 'ptr-4',
    title: '指针运算与数组越界',
    index: 4,
    filename: 'pointers_004_ptr-4.js',
    keyPoints: ['指针算术运算', '数组越界访问', '内存布局理解', '步长计算']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 指针运算：数组越界访问' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
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
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ]},
    { num: 3, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// arr = {1, 2, 3}，占用 12 字节 (3×4)' }
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
      { type: 'ws', text ' ' },
      { type: 'cmt', text: '// p 指向 arr[0]' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"p: %p, arr: %p\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"*p = %d\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 输出 1' }
    ]},
    { num: 9, tokens: [] },
    { num: 10, tokens: [
      { type: 'id', text: 'p' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '                  ' },
      { type: 'cmt', text: '// p 移动到下一个 int' }
    ]},
    { num: 11, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"p++ 后：*p = %d\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 输出 2，p 移动了 4 字节 (sizeof(int))' }
    ]},
    { num: 13, tokens: [] },
    { num: 14, tokens: [
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ';' },
      { type: 'ws', text ' ' },
      { type: 'cmt', text: '// 危险！越界访问' }
    ]},
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"p+=5 后：*p = %d\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 16, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 越界！访问了 arr 之后的垃圾值' }
    ]},
    { num: 17, tokens: [] },
    { num: 18, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'arr', name: 'arr', type: 'int[3]', addr: '0x7ffc40', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '[1,2,3]' },
    { key: 'p', name: 'p', type: 'int*', addr: '0x7ffc50', glowColor: 'rgba(168,85,247,0.35)', appearStep: 4 },
    { key: 'arr[0]', name: 'arr[0]', type: 'int', addr: '0x7ffc40', glowColor: 'rgba(59,130,246,0.35)', appearStep: 7, value: '1' },
    { key: 'arr[1]', name: 'arr[1]', type: 'int', addr: '0x7ffc44', glowColor: 'rgba(249,115,22,0.35)', appearStep: 9, value: '2' },
    { key: 'arr[2]', name: 'arr[2]', type: 'int', addr: '0x7ffc48', glowColor: 'rgba(250,204,21,0.35)', appearStep: 9, value: '3' }
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
        detail: '程序即将开始运行，演示指针运算和数组越界'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { arr: '[1,2,3]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：指针运算 - 数组越界访问',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示指针算术运算'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { arr: '[1,2,3]' },
      highlightVar: 'arr',
      explanation: {
        icon: 'memory',
        text: '声明数组 arr 并初始化为 {1, 2, 3}',
        color: 'green',
        actor: 'CPU',
        detail: '编译器在栈上分配 12 字节 (3×4)，依次初始化 arr[0]=1, arr[1]=2, arr[2]=3'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { arr: '[1,2,3]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：arr = {1, 2, 3}，占用 12 字节',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，说明数组内存布局'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3],
      vars: { arr: '[1,2,3]', p: '0x7ffc40' },
      highlightVar: 'p',
      explanation: {
        icon: 'pointer',
        text: 'int *p = arr，p 指向 arr 首元素',
        color: 'purple',
        actor: 'CPU',
        detail: '数组名 arr 在表达式中退化为指针，值为&arr[0]，即 0x7ffc40'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { arr: '[1,2,3]', p: '0x7ffc40' },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出 p 和 arr 的地址',
        color: 'blue',
        actor: 'CPU',
        detail: '验证 p 和 arr 的值相等，都是 0x7ffc40'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 3, 5, 6],
      vars: { arr: '[1,2,3]', p: '0x7ffc40' },
      explanation: {
        icon: 'info',
        text: '阅读注释：*p = 输出 1',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { arr: '[1,2,3]', p: '0x7ffc40', 'arr[0]': '1' },
      highlightVar: 'arr[0]',
      explanation: {
        icon: 'memory',
        text: '*p 解引用，读取 arr[0] = 1',
        color: 'green',
        actor: 'CPU',
        detail: '从地址 0x7ffc40 读取 4 字节，得到值 1'
      }
    },
    {
      step: 8,
      line: 10,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { arr: '[1,2,3]', p: '0x7ffc40' },
      explanation: {
        icon: 'info',
        text: '阅读注释：p++ 移动到下一个 int',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码'
      }
    },
    {
      step: 9,
      line: 10,
      executedLines: [1, 2, 3, 5, 6, 8, 10],
      vars: { arr: '[1,2,3]', p: '0x7ffc44', 'arr[0]': '1', 'arr[1]': '2', 'arr[2]': '3' },
      highlightVar: 'p',
      explanation: {
        icon: 'pointer',
        text: 'p++ 使 p 移动 sizeof(int) = 4 字节',
        color: 'orange',
        actor: 'CPU',
        detail: 'p 从 0x7ffc40 增加到 0x7ffc44，现在指向 arr[1]'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 10],
      vars: { arr: '[1,2,3]', p: '0x7ffc44', 'arr[0]': '1', 'arr[1]': '2', 'arr[2]': '3' },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出*p = 2',
        color: 'yellow',
        actor: 'CPU',
        detail: '从地址 0x7ffc44 读取 4 字节，得到值 2，验证指针运算正确'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 2, 3, 5, 6, 8, 10, 11],
      vars: { arr: '[1,2,3]', p: '0x7ffc44', 'arr[0]': '1', 'arr[1]': '2', 'arr[2]': '3' },
      explanation: {
        icon: 'info',
        text: '阅读注释：p++ 移动了 4 字节',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释指针步长'
      }
    },
    {
      step: 12,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 10, 11, 12],
      vars: { arr: '[1,2,3]', p: '0x7ffc44', 'arr[0]': '1', 'arr[1]': '2', 'arr[2]': '3' },
      explanation: {
        icon: 'info',
        text: '阅读注释：危险！越界访问',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，警告即将越界'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 10, 11, 12, 14],
      vars: { arr: '[1,2,3]', p: '0x7ffc58', 'arr[0]': '1', 'arr[1]': '2', 'arr[2]': '3' },
      highlightVar: 'p',
      isDanger: true,
      explanation: {
        icon: 'alert',
        text: 'p += 5 移动 20 字节，p 越界到 0x7ffc58',
        color: 'red',
        actor: 'CPU',
        detail: 'p += 5 相当于 p = p + 5×4 = 0x7ffc44 + 20 = 0x7ffc58，远超数组边界 (arr 仅到 0x7ffc48)'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 2, 3, 5, 6, 8, 10, 11, 12, 14],
      vars: { arr: '[1,2,3]', p: '0x7ffc58', 'arr[0]': '1', 'arr[1]': '2', 'arr[2]': '3' },
      explanation: {
        icon: 'skull',
        text: '*p 读取栈上垃圾值，未定义行为',
        color: 'red',
        actor: 'CPU',
        detail: '0x7ffc58 是 arr 之后的栈内存，可能包含其他变量或返回地址，读取它是未定义行为'
      }
    },
    {
      step: 15,
      line: 18,
      executedLines: [1, 2, 3, 5, 6, 8, 10, 11, 12, 14, 15],
      vars: { arr: '[1,2,3]', p: '0x7ffc58' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。越界读虽未崩溃，但可能泄露敏感数据或导致逻辑错误'
      }
    }
  ],

  summary: {
    oneLiner: '掌握指针算术运算规则和数组越界危害',
    pitfalls: [
      'p++ 移动 sizeof(指向类型) 字节，不是 1 字节',
      '数组越界访问是未定义行为，可能读垃圾值或崩溃',
      'C 不检查数组边界，程序员必须自己保证安全'
    ],
    transferQuestion: '如果 p 是 char* 类型，p++ 会移动多少字节？int* 呢？',
    miniExercise: {
      bugCode: 'int arr[3]; int *p = arr; p += 10; *p = 100;',
      hint: 'arr 只有 3 个元素，p+=10 移动了 40 字节，远超边界'
    }
  }
};
