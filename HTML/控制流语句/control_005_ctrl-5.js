window.LESSON_DATA = {
  meta: {
    chapterId: 'control',
    lessonId: 'ctrl-5',
    title: '嵌套循环和复杂控制流',
    index: 5,
    filename: 'control_005_ctrl-5.js',
    keyPoints: ['嵌套 for 循环结构', 'break 跳出多层循环的技巧', 'continue 在嵌套循环中的行为', '循环标签 (label) 的使用']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 嵌套循环：外层控制行，内层控制列' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ';' }
    ]},
    { num: 3, tokens: [
      { type: 'kw', text: 'while' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 4, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'j' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 每行重置 j' }
    ]},
    { num: 5, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'while' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'j' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"%d×%d=%d "' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'j' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'j' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 7, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'id', text: 'j' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' }
    ]},
    { num: 8, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '}' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"\\n"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 换行' }
    ]},
    { num: 10, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'i' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' }
    ]},
    { num: 11, tokens: [
      { type: 'punc', text: '}' }
    ]},
    { num: 12, tokens: [] },
    { num: 13, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'found' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 标志变量' }
    ]},
    { num: 14, tokens: [
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]},
    { num: 15, tokens: [
      { type: 'kw', text: 'while' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&&' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '!' },
      { type: 'id', text: 'found' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 16, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'k' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]},
    { num: 17, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'while' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'k' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 18, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'if' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'k' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '==' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '6' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 19, tokens: [
      { type: 'ws', text: '            ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"找到：%d×%d=6\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'k' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 20, tokens: [
      { type: 'ws', text: '            ' },
      { type: 'id', text: 'found' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 设置标志' }
    ]},
    { num: 21, tokens: [
      { type: 'ws', text: '            ' },
      { type: 'kw', text: 'break' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 只跳出内层' }
    ]},
    { num: 22, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'punc', text: '}' }
    ]},
    { num: 23, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'id', text: 'k' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' }
    ]},
    { num: 24, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '}' }
    ]},
    { num: 25, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'i' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' }
    ]},
    { num: 26, tokens: [
      { type: 'punc', text: '}' }
    ]},
    { num: 27, tokens: [] },
    { num: 28, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'i', name: 'i', type: 'int', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '1' },
    { key: 'i_outer', name: 'i (外层)', type: 'int', addr: '0x7ffd00', glowColor: 'rgba(59,130,246,0.35)', appearStep: 2, value: '1→2→3' },
    { key: 'j', name: 'j (内层)', type: 'int', addr: '0x7ffd04', glowColor: 'rgba(168,85,247,0.35)', appearStep: 3, value: '1→i' },
    { key: 'output_row1', name: '输出 row1', type: 'string', addr: '', glowColor: 'rgba(249,115,22,0.35)', appearStep: 5, value: '1×1=1' },
    { key: 'output_row2', name: '输出 row2', type: 'string', addr: '', glowColor: 'rgba(250,204,21,0.35)', appearStep: 10, value: '2×1=2 2×2=4' },
    { key: 'output_row3', name: '输出 row3', type: 'string', addr: '', glowColor: 'rgba(239,68,68,0.35)', appearStep: 15, value: '3×1=3 3×2=6 3×3=9' },
    { key: 'found', name: 'found', type: 'int', addr: '0x7ffd10', glowColor: 'rgba(239,68,68,0.35)', appearStep: 12, value: '0→1' },
    { key: 'k', name: 'k', type: 'int', addr: '0x7ffd14', glowColor: 'rgba(168,85,247,0.35)', appearStep: 15, value: '0→4' },
    { key: 'break_target', name: 'break 目标', type: 'flag', addr: '', glowColor: 'rgba(59,130,246,0.35)', appearStep: 20, value: 'i=2,k=3' }
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
        detail: '程序即将开始运行，演示嵌套循环和复杂控制流'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { i: '1' },
      explanation: {
        icon: 'info',
        text: '阅读注释：嵌套循环 - 外层控制行，内层控制列',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示嵌套循环：外层 while 控制行数，内层 while 控制每行的列数'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { i: '1', i_outer: '1' },
      highlightVar: 'i_outer',
      explanation: {
        icon: 'memory',
        text: 'int i = 1，外层循环计数器',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 1 写入 i 变量地址 0x7ffd00。i 控制乘法表的行数，从 1 开始'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { i: '1', i_outer: '1' },
      explanation: {
        icon: 'info',
        text: 'while(i <= 3)：检查外层条件',
        color: 'blue',
        actor: 'CPU',
        detail: 'CMP 指令比较 i 和 3，1<=3 为真，JLE 指令跳转到循环体执行。外层循环将执行 3 次 (i=1,2,3)'
      }
    },
    {
      step: 4,
      line: 4,
      executedLines: [1, 2, 3],
      vars: { i: '1', i_outer: '1', j: '1' },
      highlightVar: 'j',
      explanation: {
        icon: 'memory',
        text: 'int j = 1，内层循环计数器（每行重置）',
        color: 'cyan',
        actor: 'CPU',
        detail: '关键：j 在每次外层循环开始时重置为 1。MOV 指令写入 j 变量地址 0x7ffd04。这是嵌套循环的关键模式'
      }
    },
    {
      step: 5,
      line: 5,
      executedLines: [1, 2, 3, 4],
      vars: { i: '1', i_outer: '1', j: '1' },
      explanation: {
        icon: 'info',
        text: 'while(j <= i)：检查内层条件 (1<=1)',
        color: 'blue',
        actor: 'CPU',
        detail: 'CMP 比较 j 和 i，1<=1 为真，进入内层循环。内层循环次数取决于外层 i 的值'
      }
    },
    {
      step: 6,
      line: 6,
      executedLines: [1, 2, 3, 4, 5],
      vars: { i: '1', i_outer: '1', j: '1', output_row1: '1×1=1' },
      highlightVar: 'output_row1',
      explanation: {
        icon: 'terminal',
        text: 'printf("%d×%d=%d ", i, j, i*j)：输出 1×1=1',
        color: 'orange',
        actor: 'CPU',
        detail: 'CALL printf 计算 i*j=1*1=1，输出 "1×1=1 "。这是乘法表的第一行第一列'
      }
    },
    {
      step: 7,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6],
      vars: { i: '1', i_outer: '1', j: '2' },
      explanation: {
        icon: 'calculator',
        text: 'j++：j 从 1 增加到 2',
        color: 'blue',
        actor: 'CPU',
        detail: 'INC 指令将 j 加 1，j=2。回到内层 while 条件判断'
      }
    },
    {
      step: 8,
      line: 5,
      executedLines: [1, 2, 3, 4, 5, 6, 7],
      vars: { i: '1', i_outer: '1', j: '2' },
      explanation: {
        icon: 'info',
        text: 'while(j <= i)：2<=1 为假，退出内层',
        color: 'red',
        actor: 'CPU',
        detail: 'CMP 比较 2 和 1，2>1 条件为假，JLE 不跳转，退出内层循环。第一行只输出 1 个乘法式'
      }
    },
    {
      step: 9,
      line: 9,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8],
      vars: { i: '1', i_outer: '1', j: '2' },
      explanation: {
        icon: 'terminal',
        text: 'printf("\\n")：换行',
        color: 'blue',
        actor: 'CPU',
        detail: 'CALL printf 输出换行符，准备输出下一行。光标移动到下一行开头'
      }
    },
    {
      step: 10,
      line: 10,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      vars: { i: '2', i_outer: '2' },
      highlightVar: 'i_outer',
      explanation: {
        icon: 'calculator',
        text: 'i++：i 从 1 增加到 2，进入第二行',
        color: 'cyan',
        actor: 'CPU',
        detail: 'INC 指令将 i 加 1，i=2。回到外层 while 条件判断。第二行将输出 2 个乘法式'
      }
    },
    {
      step: 11,
      line: 3,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      vars: { i: '2', i_outer: '2' },
      explanation: {
        icon: 'info',
        text: 'while(i <= 3)：2<=3 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '第二次外层循环开始。CMP 比较 2 和 3，条件为真，进入循环体'
      }
    },
    {
      step: 12,
      line: 4,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      vars: { i: '2', i_outer: '2', j: '1' },
      explanation: {
        icon: 'memory',
        text: 'j 重置为 1，开始第二行',
        color: 'green',
        actor: 'CPU',
        detail: '关键：j 重新初始化为 1。这是嵌套循环的标准模式：内层变量在外层每次迭代时重置'
      }
    },
    {
      step: 13,
      line: 5,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      vars: { i: '2', i_outer: '2', j: '1' },
      explanation: {
        icon: 'info',
        text: 'while(j <= i)：1<=2 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '内层循环开始。j 从 1 遍历到 2，第二行将输出 2 个乘法式'
      }
    },
    {
      step: 14,
      line: 6,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: { i: '2', i_outer: '2', j: '1', output_row2: '2×1=2' },
      highlightVar: 'output_row2',
      explanation: {
        icon: 'terminal',
        text: 'printf：输出 2×1=2',
        color: 'yellow',
        actor: 'CPU',
        detail: 'CALL printf 计算 2*1=2，输出 "2×1=2 "。第二行第一列'
      }
    },
    {
      step: 15,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      vars: { i: '2', i_outer: '2', j: '2' },
      explanation: {
        icon: 'calculator',
        text: 'j++：j 从 1 增加到 2',
        color: 'blue',
        actor: 'CPU',
        detail: 'INC 指令 j=2。回到内层 while：2<=2 为真，继续'
      }
    },
    {
      step: 16,
      line: 6,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { i: '2', i_outer: '2', j: '2', output_row2: '2×1=2 2×2=4' },
      explanation: {
        icon: 'terminal',
        text: 'printf：输出 2×2=4',
        color: 'yellow',
        actor: 'CPU',
        detail: 'CALL printf 计算 2*2=4，输出 "2×2=4 "。第二行第二列'
      }
    },
    {
      step: 17,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      vars: { i: '2', i_outer: '2', j: '3' },
      explanation: {
        icon: 'calculator',
        text: 'j++：j 从 2 增加到 3',
        color: 'blue',
        actor: 'CPU',
        detail: 'INC 指令 j=3。回到内层 while：3<=2 为假，退出内层'
      }
    },
    {
      step: 18,
      line: 9,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      vars: { i: '2', i_outer: '2', j: '3' },
      explanation: {
        icon: 'terminal',
        text: 'printf("\\n")：换行',
        color: 'blue',
        actor: 'CPU',
        detail: '第二行输出完毕。输出换行符'
      }
    },
    {
      step: 19,
      line: 10,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      vars: { i: '3', i_outer: '3' },
      explanation: {
        icon: 'calculator',
        text: 'i++：i 从 2 增加到 3，进入第三行',
        color: 'cyan',
        actor: 'CPU',
        detail: 'INC 指令 i=3。回到外层 while：3<=3 为真，继续'
      }
    },
    {
      step: 20,
      line: 3,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      vars: { i: '3', i_outer: '3' },
      explanation: {
        icon: 'info',
        text: 'while(i <= 3)：3<=3 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '第三次外层循环开始。第三行将输出 3 个乘法式'
      }
    },
    {
      step: 21,
      line: 4,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      vars: { i: '3', i_outer: '3', j: '1' },
      explanation: {
        icon: 'memory',
        text: 'j 重置为 1，开始第三行',
        color: 'green',
        actor: 'CPU',
        detail: 'j 重新初始化为 1。第三行 j 从 1 遍历到 3'
      }
    },
    {
      step: 22,
      line: 5,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      vars: { i: '3', i_outer: '3', j: '1' },
      explanation: {
        icon: 'info',
        text: 'while(j <= i)：1<=3 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '内层循环开始。j 从 1 遍历到 3'
      }
    },
    {
      step: 23,
      line: 6,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      vars: { i: '3', i_outer: '3', j: '1', output_row3: '3×1=3' },
      explanation: {
        icon: 'terminal',
        text: 'printf：输出 3×1=3',
        color: 'red',
        actor: 'CPU',
        detail: 'CALL printf 计算 3*1=3，输出 "3×1=3 "'
      }
    },
    {
      step: 24,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      vars: { i: '3', i_outer: '3', j: '2' },
      explanation: {
        icon: 'calculator',
        text: 'j++：j 从 1 增加到 2',
        color: 'blue',
        actor: 'CPU',
        detail: 'INC 指令 j=2。回到内层 while：2<=3 为真'
      }
    },
    {
      step: 25,
      line: 6,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      vars: { i: '3', i_outer: '3', j: '2', output_row3: '3×1=3 3×2=6' },
      explanation: {
        icon: 'terminal',
        text: 'printf：输出 3×2=6',
        color: 'red',
        actor: 'CPU',
        detail: 'CALL printf 计算 3*2=6，输出 "3×2=6 "'
      }
    },
    {
      step: 26,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      vars: { i: '3', i_outer: '3', j: '3' },
      explanation: {
        icon: 'calculator',
        text: 'j++：j 从 2 增加到 3',
        color: 'blue',
        actor: 'CPU',
        detail: 'INC 指令 j=3。回到内层 while：3<=3 为真'
      }
    },
    {
      step: 27,
      line: 6,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      vars: { i: '3', i_outer: '3', j: '3', output_row3: '3×1=3 3×2=6 3×3=9' },
      explanation: {
        icon: 'terminal',
        text: 'printf：输出 3×3=9',
        color: 'red',
        actor: 'CPU',
        detail: 'CALL printf 计算 3*3=9，输出 "3×3=9 "。第三行第三列'
      }
    },
    {
      step: 28,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
      vars: { i: '3', i_outer: '3', j: '4' },
      explanation: {
        icon: 'calculator',
        text: 'j++：j 从 3 增加到 4',
        color: 'blue',
        actor: 'CPU',
        detail: 'INC 指令 j=4。回到内层 while：4<=3 为假，退出内层'
      }
    },
    {
      step: 29,
      line: 9,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
      vars: { i: '3', i_outer: '3', j: '4' },
      explanation: {
        icon: 'terminal',
        text: 'printf("\\n")：换行',
        color: 'blue',
        actor: 'CPU',
        detail: '第三行输出完毕。输出换行符'
      }
    },
    {
      step: 30,
      line: 10,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      vars: { i: '4', i_outer: '4' },
      explanation: {
        icon: 'calculator',
        text: 'i++：i 从 3 增加到 4',
        color: 'cyan',
        actor: 'CPU',
        detail: 'INC 指令 i=4。回到外层 while：4<=3 为假，退出外层循环'
      }
    },
    {
      step: 31,
      line: 11,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      vars: { i: '4', i_outer: '4' },
      explanation: {
        icon: 'info',
        text: '嵌套循环结束，输出完毕',
        color: 'blue',
        actor: 'CPU',
        detail: '外层循环退出。完整输出：\n1×1=1\n2×1=2 2×2=4\n3×1=3 3×2=6 3×3=9'
      }
    },
    {
      step: 32,
      line: 13,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13],
      vars: { i: '4', i_outer: '4', found: '0' },
      highlightVar: 'found',
      explanation: {
        icon: 'info',
        text: 'int found = 0，标志变量初始化',
        color: 'blue',
        actor: 'CPU',
        detail: 'MOV 指令初始化 found=0。标志变量用于控制多层循环的退出。接下来演示 break 跳出多层循环的技巧'
      }
    },
    {
      step: 33,
      line: 14,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14],
      vars: { i: '0', found: '0' },
      explanation: {
        icon: 'memory',
        text: 'i = 0，重置 i 用于第二个嵌套循环',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将 i 重置为 0。第二个嵌套循环将在 5x5 网格中查找 i*k==6 的组合'
      }
    },
    {
      step: 34,
      line: 15,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15],
      vars: { i: '0', found: '0' },
      explanation: {
        icon: 'info',
        text: 'while(i < 5 && !found)：复合条件',
        color: 'blue',
        actor: 'CPU',
        detail: '关键技巧：外层条件包含 !found，当 found=1 时自动退出。CMP 比较 0<5 且 found=0，条件为真'
      }
    },
    {
      step: 35,
      line: 16,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16],
      vars: { i: '0', found: '0', k: '0' },
      highlightVar: 'k',
      explanation: {
        icon: 'memory',
        text: 'int k = 0，内层计数器',
        color: 'cyan',
        actor: 'CPU',
        detail: 'MOV 指令初始化 k=0。内层循环遍历 k 从 0 到 4'
      }
    },
    {
      step: 36,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17],
      vars: { i: '0', found: '0', k: '0' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：检查内层条件',
        color: 'blue',
        actor: 'CPU',
        detail: 'CMP 比较 0<5，条件为真，进入内层循环'
      }
    },
    {
      step: 37,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18],
      vars: { i: '0', found: '0', k: '0' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：0*3==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: 'MUL 指令计算 0*0=0，CMP 比较 0==6 为假，JNE 跳过 if 块'
      }
    },
    {
      step: 38,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23],
      vars: { i: '0', found: '0', k: '1' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k 从 0 增加到 1',
        color: 'blue',
        actor: 'CPU',
        detail: 'INC 指令 k=1。回到内层 while 继续查找'
      }
    },
    {
      step: 39,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17],
      vars: { i: '0', found: '0', k: '1' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：1<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '继续内层循环'
      }
    },
    {
      step: 40,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18],
      vars: { i: '0', found: '0', k: '1' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：0*1==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: '0*1=0≠6，跳过 if 块'
      }
    },
    {
      step: 41,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23],
      vars: { i: '0', found: '0', k: '2' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k=2',
        color: 'blue',
        actor: 'CPU',
        detail: '继续查找'
      }
    },
    {
      step: 42,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17],
      vars: { i: '0', found: '0', k: '2' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：2<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '继续内层循环'
      }
    },
    {
      step: 43,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18],
      vars: { i: '0', found: '0', k: '2' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：0*2==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: '0*2=0≠6，跳过 if 块'
      }
    },
    {
      step: 44,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23],
      vars: { i: '0', found: '0', k: '3' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k=3',
        color: 'blue',
        actor: 'CPU',
        detail: '继续查找'
      }
    },
    {
      step: 45,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17],
      vars: { i: '0', found: '0', k: '3' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：3<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '继续内层循环'
      }
    },
    {
      step: 46,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18],
      vars: { i: '0', found: '0', k: '3' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：0*3==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: '0*3=0≠6，跳过 if 块'
      }
    },
    {
      step: 47,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23],
      vars: { i: '0', found: '0', k: '4' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k=4',
        color: 'blue',
        actor: 'CPU',
        detail: '继续查找'
      }
    },
    {
      step: 48,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17],
      vars: { i: '0', found: '0', k: '4' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：4<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '继续内层循环'
      }
    },
    {
      step: 49,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18],
      vars: { i: '0', found: '0', k: '4' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：0*4==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: '0*4=0≠6，跳过 if 块'
      }
    },
    {
      step: 50,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23],
      vars: { i: '0', found: '0', k: '5' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k=5',
        color: 'blue',
        actor: 'CPU',
        detail: 'INC 指令 k=5。回到内层 while：5<5 为假，退出内层'
      }
    },
    {
      step: 51,
      line: 24,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24],
      vars: { i: '0', found: '0', k: '5' },
      explanation: {
        icon: 'info',
        text: '内层循环结束，未找到',
        color: 'blue',
        actor: 'CPU',
        detail: 'i=0 时未找到 i*k==6 的组合'
      }
    },
    {
      step: 52,
      line: 25,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25],
      vars: { i: '1', found: '0' },
      explanation: {
        icon: 'calculator',
        text: 'i++：i=1',
        color: 'cyan',
        actor: 'CPU',
        detail: 'INC 指令 i=1。回到外层 while：1<5 且 !found 为真'
      }
    },
    {
      step: 53,
      line: 15,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15],
      vars: { i: '1', found: '0' },
      explanation: {
        icon: 'info',
        text: 'while(i < 5 && !found)：1<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '外层条件为真，继续。注意：一旦 found=1，!found=0，外层自动退出'
      }
    },
    {
      step: 54,
      line: 16,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16],
      vars: { i: '1', found: '0', k: '0' },
      explanation: {
        icon: 'memory',
        text: 'k = 0，重置内层计数器',
        color: 'cyan',
        actor: 'CPU',
        detail: 'k 重置为 0，开始 i=1 的查找'
      }
    },
    {
      step: 55,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17],
      vars: { i: '1', found: '0', k: '0' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：0<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '内层循环开始'
      }
    },
    {
      step: 56,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18],
      vars: { i: '1', found: '0', k: '0' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：1*0==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: '1*0=0≠6，跳过 if 块'
      }
    },
    {
      step: 57,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23],
      vars: { i: '1', found: '0', k: '1' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k=1',
        color: 'blue',
        actor: 'CPU',
        detail: '继续查找'
      }
    },
    {
      step: 58,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17],
      vars: { i: '1', found: '0', k: '1' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：1<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '继续内层循环'
      }
    },
    {
      step: 59,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18],
      vars: { i: '1', found: '0', k: '1' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：1*1==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: '1*1=1≠6，跳过 if 块'
      }
    },
    {
      step: 60,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23],
      vars: { i: '1', found: '0', k: '2' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k=2',
        color: 'blue',
        actor: 'CPU',
        detail: '继续查找'
      }
    },
    {
      step: 61,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17],
      vars: { i: '1', found: '0', k: '2' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：2<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '继续内层循环'
      }
    },
    {
      step: 62,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18],
      vars: { i: '1', found: '0', k: '2' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：1*2==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: '1*2=2≠6，跳过 if 块'
      }
    },
    {
      step: 63,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23],
      vars: { i: '1', found: '0', k: '3' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k=3',
        color: 'blue',
        actor: 'CPU',
        detail: '继续查找'
      }
    },
    {
      step: 64,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17],
      vars: { i: '1', found: '0', k: '3' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：3<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '继续内层循环'
      }
    },
    {
      step: 65,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18],
      vars: { i: '1', found: '0', k: '3' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：1*3==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: '1*3=3≠6，跳过 if 块'
      }
    },
    {
      step: 66,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23],
      vars: { i: '1', found: '0', k: '4' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k=4',
        color: 'blue',
        actor: 'CPU',
        detail: '继续查找'
      }
    },
    {
      step: 67,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17],
      vars: { i: '1', found: '0', k: '4' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：4<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '继续内层循环'
      }
    },
    {
      step: 68,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18],
      vars: { i: '1', found: '0', k: '4' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：1*4==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: '1*4=4≠6，跳过 if 块'
      }
    },
    {
      step: 69,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23],
      vars: { i: '1', found: '0', k: '5' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k=5',
        color: 'blue',
        actor: 'CPU',
        detail: 'INC 指令 k=5。回到内层 while：5<5 为假，退出内层'
      }
    },
    {
      step: 70,
      line: 24,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24],
      vars: { i: '1', found: '0', k: '5' },
      explanation: {
        icon: 'info',
        text: '内层循环结束，未找到',
        color: 'blue',
        actor: 'CPU',
        detail: 'i=1 时未找到 i*k==6 的组合'
      }
    },
    {
      step: 71,
      line: 25,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25],
      vars: { i: '2', found: '0' },
      explanation: {
        icon: 'calculator',
        text: 'i++：i=2',
        color: 'cyan',
        actor: 'CPU',
        detail: 'INC 指令 i=2。回到外层 while：2<5 且 !found 为真'
      }
    },
    {
      step: 72,
      line: 15,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15],
      vars: { i: '2', found: '0' },
      explanation: {
        icon: 'info',
        text: 'while(i < 5 && !found)：2<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '外层条件为真，继续'
      }
    },
    {
      step: 73,
      line: 16,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16],
      vars: { i: '2', found: '0', k: '0' },
      explanation: {
        icon: 'memory',
        text: 'k = 0，重置内层计数器',
        color: 'cyan',
        actor: 'CPU',
        detail: 'k 重置为 0，开始 i=2 的查找'
      }
    },
    {
      step: 74,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17],
      vars: { i: '2', found: '0', k: '0' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：0<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '内层循环开始'
      }
    },
    {
      step: 75,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18],
      vars: { i: '2', found: '0', k: '0' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：2*0==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: '2*0=0≠6，跳过 if 块'
      }
    },
    {
      step: 76,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23],
      vars: { i: '2', found: '0', k: '1' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k=1',
        color: 'blue',
        actor: 'CPU',
        detail: '继续查找'
      }
    },
    {
      step: 77,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17],
      vars: { i: '2', found: '0', k: '1' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：1<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '继续内层循环'
      }
    },
    {
      step: 78,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18],
      vars: { i: '2', found: '0', k: '1' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：2*1==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: '2*1=2≠6，跳过 if 块'
      }
    },
    {
      step: 79,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23],
      vars: { i: '2', found: '0', k: '2' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k=2',
        color: 'blue',
        actor: 'CPU',
        detail: '继续查找'
      }
    },
    {
      step: 80,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17],
      vars: { i: '2', found: '0', k: '2' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：2<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '继续内层循环'
      }
    },
    {
      step: 81,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18],
      vars: { i: '2', found: '0', k: '2' },
      explanation: {
        icon: 'info',
        text: 'if(i * k == 6)：2*2==6 为假',
        color: 'gray',
        actor: 'CPU',
        detail: '2*2=4≠6，跳过 if 块'
      }
    },
    {
      step: 82,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23],
      vars: { i: '2', found: '0', k: '3' },
      explanation: {
        icon: 'calculator',
        text: 'k++：k=3',
        color: 'blue',
        actor: 'CPU',
        detail: '继续查找'
      }
    },
    {
      step: 83,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17],
      vars: { i: '2', found: '0', k: '3' },
      explanation: {
        icon: 'info',
        text: 'while(k < 5)：3<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '继续内层循环'
      }
    },
    {
      step: 84,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18],
      vars: { i: '2', found: '0', k: '3' },
      explanation: {
        icon: 'branch',
        text: 'if(i * k == 6)：2*3==6 为真！命中！',
        color: 'green',
        actor: 'CPU',
        detail: 'MUL 计算 2*3=6，CMP 比较 6==6 为真！JE 指令跳转到 if 块内部'
      }
    },
    {
      step: 85,
      line: 19,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 19],
      vars: { i: '2', found: '0', k: '3', break_target: 'i=2,k=3' },
      highlightVar: 'break_target',
      explanation: {
        icon: 'terminal',
        text: 'printf("找到：%d×%d=6\\n", i, k)：输出 找到：2×3=6',
        color: 'green',
        actor: 'CPU',
        detail: 'CALL printf 输出 "找到：2×3=6\\n"。找到目标组合！'
      }
    },
    {
      step: 86,
      line: 20,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 19, 20],
      vars: { i: '2', found: '1' },
      highlightVar: 'found',
      explanation: {
        icon: 'flag',
        text: 'found = 1，设置标志变量',
        color: 'green',
        actor: 'CPU',
        detail: '关键技巧：MOV 指令设置 found=1。这个标志将被外层循环条件检查，实现跳出多层循环的效果'
      }
    },
    {
      step: 87,
      line: 21,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 19, 20, 21],
      vars: { i: '2', found: '1' },
      explanation: {
        icon: 'arrow-right',
        text: 'break：跳出内层循环',
        color: 'green',
        actor: 'CPU',
        detail: '关键：break 只跳出内层 while，不直接跳出外层！但 found=1 已设置，外层条件 !found 将为假'
      }
    },
    {
      step: 88,
      line: 24,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 19, 20, 21, 24],
      vars: { i: '2', found: '1' },
      explanation: {
        icon: 'info',
        text: '内层循环结束（break 跳出）',
        color: 'blue',
        actor: 'CPU',
        detail: 'break 导致内层循环提前结束，k 停留在 3'
      }
    },
    {
      step: 89,
      line: 25,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 19, 20, 21, 24, 25],
      vars: { i: '3', found: '1' },
      explanation: {
        icon: 'calculator',
        text: 'i++：i=3',
        color: 'blue',
        actor: 'CPU',
        detail: 'INC 指令 i=3。回到外层 while 条件检查'
      }
    },
    {
      step: 90,
      line: 15,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 19, 20, 21, 24, 25, 15],
      vars: { i: '3', found: '1' },
      explanation: {
        icon: 'circle-x',
        text: 'while(i < 5 && !found)：!found=0，条件为假，退出外层',
        color: 'red',
        actor: 'CPU',
        detail: '关键技巧生效：CMP 检查 i<5 (3<5 为真) 但！found=1 所以 !found=0，AND 结果为假！JMP 跳过整个外层循环体，实现跳出多层循环的效果'
      }
    },
    {
      step: 91,
      line: 26,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 19, 20, 21, 24, 25, 26],
      vars: { i: '3', found: '1' },
      explanation: {
        icon: 'terminal',
        text: '外层循环结束',
        color: 'blue',
        actor: 'CPU',
        detail: '通过标志变量 + 外层条件检查的组合，实现了 break 跳出多层循环的效果。这是 C 语言的常用技巧'
      }
    },
    {
      step: 92,
      line: 28,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 13, 14, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 23, 24, 25, 15, 16, 17, 18, 23, 17, 18, 23, 17, 18, 23, 17, 18, 19, 20, 21, 24, 25, 26, 28],
      vars: { i: '3', found: '1' },
      explanation: {
        icon: 'flag',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键技巧总结：1) 嵌套循环外层控制行内层控制列 2) break 只跳出当前层 3) 使用标志变量 + 外层条件实现多层跳出'
      }
    }
  ],

  summary: {
    oneLiner: '掌握嵌套循环结构和 break 跳出多层循环的技巧',
    pitfalls: [
      '嵌套循环的内层变量必须在外层每次迭代时重置',
      'break 只跳出当前所在的循环层，不能直接跳出多层',
      '使用标志变量 + 外层条件组合实现多层循环提前退出',
      'continue 在嵌套循环中只跳过当前内层循环的本次迭代'
    ],
    transferQuestion: '如果需要使用 goto 跳出多层循环，应该如何写？（提示：goto 标签虽然有效但应谨慎使用）',
    miniExercise: {
      bugCode: 'for(i=0;i<3;i++) { for(j=0;j<3;j++) { if(i*j==4) break; } } // break 只跳出内层，外层继续',
      hint: '需要在 break 前设置标志变量，外层条件检查该标志才能完全退出'
    }
  },

  predictions: [
    {
      question: '嵌套循环中，break 语句的行为是什么？',
      options: [
        { text: '跳出所有嵌套层', feedback: '错误！break 只跳出当前所在的那一层循环。' },
        { text: '只跳出当前层循环', feedback: '正确！break 只影响最内层的循环，外层继续执行。需要使用标志变量或 goto 才能跳出多层。' },
        { text: '跳过本次迭代', feedback: '错误！那是 continue 的行为。' },
        { text: '终止整个程序', feedback: '错误！break 只影响循环结构。' }
      ],
      correctIndex: 1
    },
    {
      question: '如何实现跳出多层嵌套循环？',
      options: [
        { text: '使用多个 break', feedback: '错误！多个 break 仍然只能逐层跳出。' },
        { text: '使用标志变量 + 外层条件检查', feedback: '正确！设置标志变量，外层循环条件中包含对该标志的检查，found=1 时自动退出。' },
        { text: '使用 return', feedback: '部分正确，但 return 会退出整个函数，不仅仅是循环。' },
        { text: '无法实现', feedback: '错误！有技巧可以实现。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'break 可以跳出多层循环',
      truth: 'break 只跳出当前所在的那一层循环。要跳出多层，需要使用标志变量配合外层条件检查，或使用 goto 标签（不推荐），或将循环封装为函数用 return 退出。'
    },
    {
      myth: 'continue 会跳出整个嵌套循环',
      truth: 'continue 只跳过当前循环的本次迭代，对于嵌套循环，continue 只影响它所在的那一层，内层 continue 不影响外层。'
    },
    {
      myth: '嵌套循环的内层变量不需要重置',
      truth: '内层变量必须在外层每次迭代开始时重置，否则会导致逻辑错误。例如乘法表每行都从 j=1 开始。'
    }
  ]
};
