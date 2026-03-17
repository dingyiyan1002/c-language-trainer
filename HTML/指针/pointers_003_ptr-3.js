window.LESSON_DATA = {
  meta: {
    chapterId: 'pointers',
    lessonId: 'ptr-3',
    title: '指针算术运算',
    index: 3,
    filename: 'pointers_003_ptr-3.js',
    keyPoints: ['指针++与--运算', '指针加减整数', '指针差值计算', '类型大小影响步长']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 指针算术运算：步长由指针类型决定' }] },
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
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// p = 0x7ffc00' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// p 指向 arr[0]' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'val1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p' },
      { type: 'op', text: '+' },
      { type: 'punc', text: '1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// *(p+1) = arr[1] = 20' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// p+1 的地址 = 0x7ffc00 + 1×4 = 0x7ffc04' }
    ]},
    { num: 10, tokens: [] },
    { num: 11, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'val2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p' },
      { type: 'op', text: '+' },
      { type: 'punc', text: '2' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// *(p+2) = arr[2] = 30' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// p+2 的地址 = 0x7ffc00 + 2×4 = 0x7ffc08' }
    ]},
    { num: 13, tokens: [] },
    { num: 14, tokens: [
      { type: 'id', text: 'p' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '                    ' },
      { type: 'cmt', text: '// p 自增 1，地址 +4 字节' }
    ]},
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// p 现在是 0x7ffc04，指向 arr[1]' }
    ]},
    { num: 16, tokens: [] },
    { num: 17, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'val3' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '         ' },
      { type: 'cmt', text: '// *p = arr[1] = 20' }
    ]},
    { num: 18, tokens: [] },
    { num: 19, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'pChar' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'char' },
      { type: 'op', text: '*' },
      { type: 'punc', text: ')' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// char* 类型转换' }
    ]},
    { num: 20, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// pChar = 0x7ffc00，char*步长为 1 字节' }
    ]},
    { num: 21, tokens: [] },
    { num: 22, tokens: [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'pChar' },
      { type: 'op', text: '+' },
      { type: 'punc', text: '1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// pChar+1 = 0x7ffc01 (+1 字节)' }
    ]},
    { num: 23, tokens: [] },
    { num: 24, tokens: [
      { type: 'kw', text: 'long' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'diff' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '4' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 地址差：16 字节' }
    ]},
    { num: 25, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 0x7ffc10 - 0x7ffc00 = 0x10 = 16' }
    ]},
    { num: 26, tokens: [] },
    { num: 27, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'arr', name: 'arr', type: 'int[5]', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '[10,20,30,40,50]' },
    { key: 'p', name: 'p', type: 'int*', addr: '0x7ffc20', glowColor: 'rgba(168,85,247,0.35)', appearStep: 4, value: '0x7ffc00' },
    { key: 'p_plus_1', name: 'p+1', type: 'int*', addr: '0x7ffc20', glowColor: 'rgba(59,130,246,0.35)', appearStep: 7, value: '0x7ffc04' },
    { key: 'p_plus_2', name: 'p+2', type: 'int*', addr: '0x7ffc20', glowColor: 'rgba(249,115,22,0.35)', appearStep: 10, value: '0x7ffc08' },
    { key: 'val1', name: 'val1', type: 'int', addr: '0x7ffc30', glowColor: 'rgba(250,204,21,0.35)', appearStep: 7, value: '20' },
    { key: 'val2', name: 'val2', type: 'int', addr: '0x7ffc34', glowColor: 'rgba(239,68,68,0.35)', appearStep: 10, value: '30' },
    { key: 'val3', name: 'val3', type: 'int', addr: '0x7ffc38', glowColor: 'rgba(34,197,94,0.35)', appearStep: 16, value: '20' },
    { key: 'pChar', name: 'pChar', type: 'char*', addr: '0x7ffc40', glowColor: 'rgba(168,85,247,0.35)', appearStep: 18, value: '0x7ffc00' },
    { key: 'c1', name: 'c1', type: 'char', addr: '0x7ffc48', glowColor: 'rgba(59,130,246,0.35)', appearStep: 21, value: '0x14' },
    { key: 'diff', name: 'diff', type: 'long', addr: '0x7ffc50', glowColor: 'rgba(249,115,22,0.35)', appearStep: 23, value: '16' }
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
        detail: '程序即将开始运行，演示指针算术运算规则'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { arr: '[10,20,30,40,50]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：指针算术 - 步长由类型决定',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示指针运算的步长规则'
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
        detail: '编译器在栈上分配连续 20 字节 (5×4)，从 0x7ffc00 到 0x7ffc13，依次存储 10,20,30,40,50'
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
        text: 'int *p = &arr[0]，p 指向数组首元素',
        color: 'purple',
        actor: 'CPU',
        detail: 'LEA 指令加载 arr[0] 的地址 0x7ffc00 到寄存器，MOV 指令写入 p 变量。p 是 int* 类型，步长为 4 字节'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：p 指向 arr[0]',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 p 的初始位置'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 3, 5, 6],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：*(p+1) = arr[1] = 20',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示指针加法'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00', p_plus_1: '0x7ffc04', val1: '20' },
      highlightVar: 'p_plus_1',
      explanation: {
        icon: 'calculator',
        text: '*(p+1)：地址计算 0x7ffc00 + 1×4 = 0x7ffc04',
        color: 'orange',
        actor: 'CPU',
        detail: '指针加法：p+1 不是简单 +1，而是 + sizeof(int) = 4 字节。计算地址 0x7ffc04，解引用得到 arr[1]=20'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00', p_plus_1: '0x7ffc04', val1: '20' },
      explanation: {
        icon: 'info',
        text: '阅读注释：p+1 的地址 = 0x7ffc00 + 1×4 = 0x7ffc04',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释指针加法公式：base + index × sizeof(type)'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00', p_plus_1: '0x7ffc04', val1: '20' },
      explanation: {
        icon: 'info',
        text: '阅读注释：*(p+2) = arr[2] = 30',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示更大的偏移量'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00', p_plus_1: '0x7ffc04', p_plus_2: '0x7ffc08', val1: '20', val2: '30' },
      highlightVar: 'p_plus_2',
      explanation: {
        icon: 'calculator',
        text: '*(p+2)：地址计算 0x7ffc00 + 2×4 = 0x7ffc08',
        color: 'yellow',
        actor: 'CPU',
        detail: '指针加法：p+2 = 0x7ffc00 + 8 字节 = 0x7ffc08，解引用得到 arr[2]=30。关键：步长 = 索引 × sizeof(int)'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00', p_plus_1: '0x7ffc04', p_plus_2: '0x7ffc08', val1: '20', val2: '30' },
      explanation: {
        icon: 'info',
        text: '阅读注释：p+2 的地址 = 0x7ffc00 + 2×4 = 0x7ffc08',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认地址计算'
      }
    },
    {
      step: 12,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：p 自增 1，地址 +4 字节',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示指针自增'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04' },
      highlightVar: 'p',
      explanation: {
        icon: 'arrow-right',
        text: 'p++：指针自增，地址从 0x7ffc00 → 0x7ffc04',
        color: 'red',
        actor: 'CPU',
        detail: '指针自增：p++ 等价于 p = p + 1，但实际地址增加 sizeof(int) = 4 字节。p 现在指向 arr[1]'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04' },
      explanation: {
        icon: 'info',
        text: '阅读注释：p 现在是 0x7ffc04，指向 arr[1]',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认 p 的新位置'
      }
    },
    {
      step: 15,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04' },
      explanation: {
        icon: 'info',
        text: '阅读注释：*p = arr[1] = 20',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示读取当前 p 指向的值'
      }
    },
    {
      step: 16,
      line: 17,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04', val3: '20' },
      highlightVar: 'val3',
      explanation: {
        icon: 'memory',
        text: '*p：解引用 0x7ffc04，得到 arr[1] = 20',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令从地址 0x7ffc04 (p 当前值) 读取 4 字节，得到 20，写入 val3'
      }
    },
    {
      step: 17,
      line: 19,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04', val3: '20' },
      explanation: {
        icon: 'info',
        text: '阅读注释：char* 类型转换',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示不同类型指针的步长差异'
      }
    },
    {
      step: 18,
      line: 19,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 19],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04', val3: '20', pChar: '0x7ffc00' },
      highlightVar: 'pChar',
      explanation: {
        icon: 'pointer',
        text: 'char *pChar = (char*)arr，char* 步长 = 1 字节',
        color: 'purple',
        actor: 'CPU',
        detail: '类型转换：(char*)arr 将数组地址转为 char*，pChar 保存 0x7ffc00。关键：char* 步长为 1 字节，不是 4！'
      }
    },
    {
      step: 19,
      line: 20,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 19],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04', val3: '20', pChar: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：pChar = 0x7ffc00，char*步长为 1 字节',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，强调 char* 的特殊性'
      }
    },
    {
      step: 20,
      line: 22,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 19, 20],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04', val3: '20', pChar: '0x7ffc00' },
      explanation: {
        icon: 'info',
        text: '阅读注释：pChar+1 = 0x7ffc01 (+1 字节)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，对比 char* 与 int* 的步长差异'
      }
    },
    {
      step: 21,
      line: 22,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 19, 20, 22],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04', val3: '20', pChar: '0x7ffc00', c1: '0x14' },
      highlightVar: 'c1',
      explanation: {
        icon: 'calculator',
        text: '*(pChar+1)：地址 0x7ffc00 + 1×1 = 0x7ffc01',
        color: 'cyan',
        actor: 'CPU',
        detail: 'char* 加法：pChar+1 = 0x7ffc00 + 1 字节 = 0x7ffc01。读取 1 字节，值为 0x0A(10 的低字节)。对比：int*+1 是 +4 字节！'
      }
    },
    {
      step: 22,
      line: 24,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 19, 20, 22],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04', val3: '20', pChar: '0x7ffc00', c1: '0x14' },
      explanation: {
        icon: 'info',
        text: '阅读注释：地址差：16 字节',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将演示指针减法'
      }
    },
    {
      step: 23,
      line: 24,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 19, 20, 22, 24],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04', val3: '20', pChar: '0x7ffc00', c1: '0x14', diff: '16' },
      highlightVar: 'diff',
      explanation: {
        icon: 'calculator',
        text: '&arr[4] - &arr[0] = 0x7ffc10 - 0x7ffc00 = 16',
        color: 'orange',
        actor: 'CPU',
        detail: '指针减法：两指针相减得到字节差。arr[4] 地址 0x7ffc10，arr[0] 地址 0x7ffc00，差值 = 16 字节 = 4 个 int 元素'
      }
    },
    {
      step: 24,
      line: 25,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 19, 20, 22, 24],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04', val3: '20', pChar: '0x7ffc00', c1: '0x14', diff: '16' },
      explanation: {
        icon: 'info',
        text: '阅读注释：0x7ffc10 - 0x7ffc00 = 0x10 = 16',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认地址差计算'
      }
    },
    {
      step: 25,
      line: 27,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 19, 20, 22, 24, 25],
      vars: { arr: '[10,20,30,40,50]', p: '0x7ffc04', val3: '20', pChar: '0x7ffc00', c1: '0x14', diff: '16' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键结论：指针算术的步长 = 索引变化 × sizeof(指向类型)，int* 步长 4，char* 步长 1'
      }
    }
  ],

  summary: {
    oneLiner: '掌握指针算术运算规则：步长由指针类型决定',
    pitfalls: [
      '指针++不是地址 +1，而是地址+sizeof(指向类型)',
      'int* p; p+1 地址增加 4 字节，char* p; p+1 地址只增加 1 字节',
      '指针只能与整数加减，两个指针相加无意义',
      '两个同类型指针相减得到元素个数差，不是字节差'
    ],
    transferQuestion: '如果 int *p 指向地址 0x1000，那么 p+5 的地址是多少？(提示：sizeof(int)=4)',
    miniExercise: {
      bugCode: 'int *p = arr; char *c = arr; p++; c++; // p 和 c 都只增加 1 字节？',
      hint: '错误！p++ 增加 4 字节 (sizeof(int))，c++ 只增加 1 字节 (sizeof(char))'
    }
  },

  predictions: [
    {
      question: 'int *p 指向地址 0x1000，p+3 的地址是多少？(sizeof(int)=4)',
      options: [
        { text: '0x1003', feedback: '错误！p+3 不是地址 +3，而是 +3×sizeof(int)。' },
        { text: '0x100c', feedback: '正确！p+3 = 0x1000 + 3×4 = 0x1000 + 12 = 0x100c。' },
        { text: '0x1010', feedback: '错误！计算错误，应该是 +12 字节，不是 +16。' },
        { text: '0x1006', feedback: '错误！不是×2，而是×sizeof(int)=4。' }
      ],
      correctIndex: 1
    },
    {
      question: 'int *p1 = &arr[4], *p2 = &arr[0]，p1 - p2 的结果是什么？',
      options: [
        { text: '16', feedback: '错误！指针相减得到元素个数差，不是字节差。' },
        { text: '4', feedback: '正确！p1-p2 = (arr+4)-(arr+0) = 4 个元素。' },
        { text: '0x4', feedback: '错误！结果是无符号整数 4，不是地址。' },
        { text: '编译错误', feedback: '错误！同类型指针相减是合法操作。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'p++ 是地址 +1',
      truth: 'p++ 是地址 +sizeof(指向类型)。int* p++ 地址 +4 字节，char* p++ 地址 +1 字节，double* p++ 地址 +8 字节。指针算术的步长由指针类型决定！'
    },
    {
      myth: '指针减法得到字节差',
      truth: '同类型指针相减得到元素个数差，不是字节差。&arr[4] - &arr[0] = 4(元素个数)，不是 16(字节差)。这是 C 语言的智能设计，符合数组索引的语义。'
    },
    {
      myth: 'void* 可以直接解引用',
      truth: 'void* 是通用指针，不能直接解引用！因为 void 没有大小信息，编译器不知道读多少字节。必须先转换为具体类型指针：int x = *(int*)voidPtr; 常见于 malloc 返回值。'
    },
    {
      myth: '所有指针大小都一样',
      truth: '指针本身大小取决于架构：32 位系统指针占 4 字节，64 位系统指针占 8 字节。但指针算术的步长取决于指向的类型：int*步长 4，char*步长 1，double*步长 8。指针大小≠指针步长！'
    }
  ]
};
