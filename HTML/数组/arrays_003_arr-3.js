window.LESSON_DATA = {
  meta: {
    chapterId: 'arrays',
    lessonId: 'arr-3',
    title: '二维数组与矩阵',
    index: 3,
    filename: 'arrays_003_arr-3.js',
    keyPoints: ['二维数组声明', '行优先存储', '内存布局理解', '行列索引']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 二维数组：3 行 4 列矩阵' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'matrix' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '4' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 3, tokens: [
      { type: 'ws', text: '    ' },
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
      { type: 'punc', text: '}' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 第 0 行' }
    ]},
    { num: 4, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '{' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '6' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '7' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '8' },
      { type: 'punc', text: '}' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 第 1 行' }
    ]},
    { num: 5, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '{' },
      { type: 'num', text: '9' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '11' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '12' },
      { type: 'punc', text: '}' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 第 2 行' }
    ]},
    { num: 6, tokens: [
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'val' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'matrix' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// val = 7 (第 1 行第 2 列)' }
    ]},
    { num: 9, tokens: [] },
    { num: 10, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'row' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 固定第 0 行' }
    ]},
    { num: 11, tokens: [
      { type: 'kw', text: 'for' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'col' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'col' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '4' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'col' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"%d "' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'matrix' },
      { type: 'punc', text: '[' },
      { type: 'id', text: 'row' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: '[' },
      { type: 'id', text: 'col' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 输出：1 2 3 4' }
    ]},
    { num: 13, tokens: [
      { type: 'punc', text: '}' }
    ]},
    { num: 14, tokens: [] },
    { num: 15, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'matrix', name: 'matrix', type: 'int[3][4]', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]' },
    { key: 'val', name: 'val', type: 'int', addr: '0x7ffc40', glowColor: 'rgba(168,85,247,0.35)', appearStep: 7, value: '7' },
    { key: 'row', name: 'row', type: 'int', addr: '0x7ffc44', glowColor: 'rgba(59,130,246,0.35)', appearStep: 9, value: '0' },
    { key: 'col', name: 'col', type: 'int', addr: '0x7ffc48', glowColor: 'rgba(249,115,22,0.35)', appearStep: 10, value: '0' }
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
        detail: '程序即将开始运行，演示二维数组内存布局'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：二维数组 - 3 行 4 列矩阵',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示二维数组'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]' },
      highlightVar: 'matrix',
      explanation: {
        icon: 'memory',
        text: '声明 int matrix[3][4]，分配 48 字节 (3×4×4)',
        color: 'green',
        actor: 'CPU',
        detail: '编译器在栈上分配连续 48 字节，行优先存储：第 0 行 12 字节，第 1 行 12 字节，第 2 行 12 字节'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：第 0 行 {1, 2, 3, 4}',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，初始化第 0 行'
      }
    },
    {
      step: 4,
      line: 4,
      executedLines: [1, 2, 3],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：第 1 行 {5, 6, 7, 8}',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，初始化第 1 行'
      }
    },
    {
      step: 5,
      line: 5,
      executedLines: [1, 2, 3, 4],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：第 2 行 {9, 10, 11, 12}',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，初始化第 2 行'
      }
    },
    {
      step: 6,
      line: 6,
      executedLines: [1, 2, 3, 4, 5],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]' },
      explanation: {
        icon: 'check',
        text: '二维数组初始化完成',
        color: 'green',
        actor: 'CPU',
        detail: '12 个元素按行优先顺序连续存储：matrix[0][0] 在 0x7ffc00，matrix[0][1] 在 0x7ffc04...matrix[2][3] 在 0x7ffc2c'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 4, 5, 6],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', val: 7 },
      highlightVar: 'val',
      explanation: {
        icon: 'memory',
        text: 'matrix[1][2] = 7，访问第 1 行第 2 列',
        color: 'purple',
        actor: 'CPU',
        detail: '地址计算：base + (row×4 + col)×4 = 0x7ffc00 + (1×4 + 2)×4 = 0x7ffc00 + 24 = 0x7ffc18，读取值得到 7'
      }
    },
    {
      step: 8,
      line: 10,
      executedLines: [1, 2, 3, 4, 5, 6, 8],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', val: 7, row: 0 },
      highlightVar: 'row',
      explanation: {
        icon: 'memory',
        text: 'int row = 0，固定遍历第 0 行',
        color: 'blue',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 0 写入 row 变量地址 0x7ffc40'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 3, 4, 5, 6, 8, 10],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', val: 7, row: 0, col: 0 },
      highlightVar: 'col',
      explanation: {
        icon: 'loop',
        text: 'for 循环：col 从 0 到 3，遍历第 0 行',
        color: 'orange',
        actor: 'CPU',
        detail: '初始化 col=0，条件检查 col<4 成立，进入循环体'
      }
    },
    {
      step: 10,
      line: 12,
      executedLines: [1, 2, 3, 4, 5, 6, 8, 10, 11],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', val: 7, row: 0, col: 0 },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出 matrix[0][0] = 1',
        color: 'yellow',
        actor: 'CPU',
        detail: '地址计算：0x7ffc00 + (0×4 + 0)×4 = 0x7ffc00，读取值 1 并输出'
      }
    },
    {
      step: 11,
      line: 11,
      executedLines: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', val: 7, row: 0, col: 1 },
      highlightVar: 'col',
      explanation: {
        icon: 'loop',
        text: 'col++ → col = 1，继续循环',
        color: 'orange',
        actor: 'CPU',
        detail: 'INC 指令将 col 从 0 增加到 1，条件 1<4 成立，继续第 2 次迭代'
      }
    },
    {
      step: 12,
      line: 12,
      executedLines: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 11],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', val: 7, row: 0, col: 1 },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出 matrix[0][1] = 2',
        color: 'yellow',
        actor: 'CPU',
        detail: '地址计算：0x7ffc00 + (0×4 + 1)×4 = 0x7ffc04，读取值 2 并输出'
      }
    },
    {
      step: 13,
      line: 11,
      executedLines: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 11, 12],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', val: 7, row: 0, col: 2 },
      explanation: {
        icon: 'loop',
        text: 'col++ → col = 2，继续循环',
        color: 'orange',
        actor: 'CPU',
        detail: 'col 增加到 2，条件 2<4 成立，继续第 3 次迭代'
      }
    },
    {
      step: 14,
      line: 12,
      executedLines: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 11, 12, 11],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', val: 7, row: 0, col: 2 },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出 matrix[0][2] = 3',
        color: 'yellow',
        actor: 'CPU',
        detail: '地址计算：0x7ffc00 + (0×4 + 2)×4 = 0x7ffc08，读取值 3 并输出'
      }
    },
    {
      step: 15,
      line: 11,
      executedLines: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 11, 12, 11, 12, 11],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', val: 7, row: 0, col: 3 },
      explanation: {
        icon: 'loop',
        text: 'col++ → col = 3，继续循环',
        color: 'orange',
        actor: 'CPU',
        detail: 'col 增加到 3，条件 3<4 成立，继续第 4 次迭代'
      }
    },
    {
      step: 16,
      line: 12,
      executedLines: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 11, 12, 11, 12, 11, 12],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', val: 7, row: 0, col: 3 },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出 matrix[0][3] = 4',
        color: 'yellow',
        actor: 'CPU',
        detail: '地址计算：0x7ffc00 + (0×4 + 3)×4 = 0x7ffc0c，读取值 4 并输出'
      }
    },
    {
      step: 17,
      line: 11,
      executedLines: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 11, 12, 11, 12, 11, 12, 11],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', val: 7, row: 0, col: 4 },
      explanation: {
        icon: 'alert',
        text: 'col++ → col = 4，条件 4<4 不成立，退出循环',
        color: 'red',
        actor: 'CPU',
        detail: 'CMP 指令比较 4 和 4，JL 条件不满足，跳转到循环后的指令'
      }
    },
    {
      step: 18,
      line: 15,
      executedLines: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11],
      vars: { matrix: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', val: 7, row: 0, col: 4 },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回，栈帧销毁。二维数组按行优先连续存储，访问公式：base + (row×列数 + col)×元素大小'
      }
    }
  ],

  summary: {
    oneLiner: '掌握二维数组的行优先存储和地址计算',
    pitfalls: [
      'C 语言二维数组按行优先存储，第 0 行在前，最后 1 行在后',
      'matrix[row][col] 地址计算公式：base + (row×列数 + col)×sizeof(元素)',
      '下标从 0 开始，matrix[3][4] 有效行索引 0~2，列索引 0~3',
      '二维数组退化：matrix 作为参数传递时退化为 int(*)[4] 类型指针'
    ],
    transferQuestion: '如果 matrix[3][4] 按列优先存储（如 Fortran），matrix[1][2] 的地址计算公式是什么？',
    miniExercise: {
      bugCode: 'int m[2][3] = {{1,2,3},{4,5,6}}; int x = m[2][0]; // 越界！',
      hint: 'm 只有 2 行（索引 0 和 1），m[2] 访问第 3 行，超出边界'
    }
  }
};
