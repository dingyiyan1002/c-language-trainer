window.LESSON_DATA = {
  meta: {
    chapterId: 'control',
    lessonId: 'ctrl-4',
    title: 'switch 语句和 break/continue',
    index: 4,
    filename: 'control_004_ctrl-4.js',
    keyPoints: ['switch 语句结构', 'case 分支和 break', 'default 默认分支', 'break 与 continue 的区别']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// switch 语句：多分支选择的优雅写法' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'day' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ';' }
    ]},
    { num: 3, tokens: [] },
    { num: 4, tokens: [
      { type: 'kw', text: 'switch' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'day' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 5, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'case' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ':' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"Monday"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'break' },
      { type: 'punc', text: ';' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'case' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ':' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"Tuesday"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'break' },
      { type: 'punc', text: ';' }
    ]},
    { num: 7, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'case' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ':' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"Wednesday"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'break' },
      { type: 'punc', text: ';' }
    ]},
    { num: 8, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'default' },
      { type: 'punc', text: ':' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"Invalid day"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 9, tokens: [
      { type: 'punc', text: '}' }
    ]},
    { num: 10, tokens: [] },
    { num: 11, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]},
    { num: 12, tokens: [
      { type: 'kw', text: 'while' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 13, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'if' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '==' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 14, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'id', text: 'x' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'continue' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 跳过本次循环剩余部分' }
    ]},
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '}' }
    ]},
    { num: 16, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"%d "' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 17, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'x' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' }
    ]},
    { num: 18, tokens: [
      { type: 'punc', text: '}' }
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
    { key: 'day', name: 'day', type: 'int', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '3' },
    { key: 'switch_day', name: 'switch(day)', type: 'jump_table', addr: '0x004000', glowColor: 'rgba(168,85,247,0.35)', appearStep: 3, value: 'case 3' },
    { key: 'case3_exec', name: 'case 3:', type: 'branch', addr: '', glowColor: 'rgba(59,130,246,0.35)', appearStep: 6, value: 'Wednesday' },
    { key: 'x', name: 'x', type: 'int', addr: '0x7ffd10', glowColor: 'rgba(249,115,22,0.35)', appearStep: 10, value: '0' },
    { key: 'x_iter1', name: 'x (iter1)', type: 'int', addr: '0x7ffd10', glowColor: 'rgba(34,197,94,0.35)', appearStep: 12, value: '0' },
    { key: 'x_iter2', name: 'x (iter2)', type: 'int', addr: '0x7ffd10', glowColor: 'rgba(59,130,246,0.35)', appearStep: 14, value: '1' },
    { key: 'x_skip', name: 'x=2 跳过', type: 'continue', addr: '0x7ffd10', glowColor: 'rgba(239,68,68,0.35)', appearStep: 16, value: 'continue' },
    { key: 'x_iter3', name: 'x (iter3)', type: 'int', addr: '0x7ffd10', glowColor: 'rgba(250,204,21,0.35)', appearStep: 18, value: '3' },
    { key: 'output', name: '输出', type: 'string', addr: '', glowColor: 'rgba(168,85,247,0.35)', appearStep: 12, value: '0 1 3 4' }
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
        detail: '程序即将开始运行，演示 switch 语句和 break/continue 控制'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { day: '3' },
      explanation: {
        icon: 'info',
        text: '阅读注释：switch 语句 - 多分支选择的优雅写法',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示 switch 多分支结构，对比 if-else 链式判断'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { day: '3' },
      highlightVar: 'day',
      explanation: {
        icon: 'memory',
        text: '声明 int day = 3，表示星期三',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 3 写入 day 变量内存地址 0x7ffd00。这个值将用于 switch 语句的分支选择'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 2],
      vars: { day: '3', switch_day: 'case 3' },
      highlightVar: 'switch_day',
      explanation: {
        icon: 'branch',
        text: 'switch(day)：构建跳转表，day=3',
        color: 'purple',
        actor: 'CPU',
        detail: '编译器生成跳转表 (jump table)：根据 day 的值直接跳转到对应 case 标签，时间复杂度 O(1)，比 if-else 链更高效'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 4],
      vars: { day: '3' },
      explanation: {
        icon: 'info',
        text: 'case 1: 检查 day 是否等于 1',
        color: 'gray',
        actor: 'CPU',
        detail: 'JUMP 指令比较 day 和 1，不相等则跳过 case 1 分支。break 语句用于防止 fall-through(穿透)到下一个 case'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 4, 5],
      vars: { day: '3' },
      explanation: {
        icon: 'info',
        text: 'case 2: 检查 day 是否等于 2',
        color: 'gray',
        actor: 'CPU',
        detail: 'JUMP 指令比较 day 和 2，3≠2，继续跳过 case 2 分支。每个 case 后的 break 确保只执行匹配的分支'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 2, 4, 5, 6],
      vars: { day: '3', case3_exec: 'Wednesday' },
      highlightVar: 'case3_exec',
      explanation: {
        icon: 'check',
        text: 'case 3: 匹配成功！执行分支',
        color: 'cyan',
        actor: 'CPU',
        detail: '3==3 匹配成功！JUMP 指令跳转到 case 3 标签处执行。CALL printf 输出 "Wednesday"，break 跳出 switch'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 4, 5, 6, 7],
      vars: { day: '3' },
      explanation: {
        icon: 'info',
        text: 'default: 默认分支（未执行）',
        color: 'gray',
        actor: 'CPU',
        detail: '由于 case 3 匹配且有 break，default 分支被跳过。default 相当于 if-else 的 else，处理所有未匹配的情况'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 4, 5, 6, 7, 8],
      vars: { day: '3' },
      explanation: {
        icon: 'info',
        text: 'switch 语句结束',
        color: 'blue',
        actor: 'CPU',
        detail: 'switch 语句执行完毕。关键：break 防止 fall-through，没有 break 会穿透执行后续所有 case'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9],
      vars: { day: '3' },
      explanation: {
        icon: 'info',
        text: '阅读 continue 示例代码',
        color: 'blue',
        actor: 'CPU',
        detail: '接下来演示 continue 语句：跳过当前循环的剩余部分，直接进入下一次循环判断'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11],
      vars: { day: '3', x: '0' },
      highlightVar: 'x',
      explanation: {
        icon: 'memory',
        text: '声明 int x = 0，循环计数器',
        color: 'orange',
        actor: 'CPU',
        detail: 'MOV 指令初始化 x=0。while 循环将演示 continue 的跳过效果：当 x==2 时跳过输出'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11],
      vars: { day: '3', x: '0' },
      explanation: {
        icon: 'info',
        text: 'while(x < 5)：检查循环条件',
        color: 'blue',
        actor: 'CPU',
        detail: 'CMP 指令比较 x 和 5，0<5 为真，JL 指令跳转到循环体执行。循环将遍历 x=0,1,2,3,4'
      }
    },
    {
      step: 12,
      line: 13,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12],
      vars: { day: '3', x: '0', x_iter1: '0', output: '0' },
      highlightVar: 'x_iter1',
      explanation: {
        icon: 'branch',
        text: 'if(x == 2)：0==2 为假，跳过 if 体',
        color: 'green',
        actor: 'CPU',
        detail: 'CMP 比较 x 和 2，0≠2，条件为假，JNE 跳过 if 块。继续执行 printf 输出 x=0'
      }
    },
    {
      step: 13,
      line: 16,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16],
      vars: { day: '3', x: '0', output: '0' },
      explanation: {
        icon: 'terminal',
        text: 'printf("%d ", x)：输出 0',
        color: 'blue',
        actor: 'CPU',
        detail: 'CALL printf 将 0 输出到控制台。输出缓冲区累积："0 "'
      }
    },
    {
      step: 14,
      line: 17,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17],
      vars: { day: '3', x: '1', x_iter2: '1' },
      highlightVar: 'x_iter2',
      explanation: {
        icon: 'calculator',
        text: 'x++：x 从 0 增加到 1',
        color: 'cyan',
        actor: 'CPU',
        detail: 'INC 指令将 x 加 1，x=1。回到 while 条件判断：1<5 为真，继续循环'
      }
    },
    {
      step: 15,
      line: 12,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17, 12],
      vars: { day: '3', x: '1', output: '0' },
      explanation: {
        icon: 'info',
        text: 'while(x < 5)：1<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '第二次循环开始。CMP 比较 1 和 5，条件为真，进入循环体'
      }
    },
    {
      step: 16,
      line: 13,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17, 12, 13],
      vars: { day: '3', x: '1' },
      explanation: {
        icon: 'branch',
        text: 'if(x == 2)：1==2 为假，跳过',
        color: 'gray',
        actor: 'CPU',
        detail: '1≠2，条件为假，JNE 跳过 if 块。继续执行 printf 输出 x=1'
      }
    },
    {
      step: 17,
      line: 16,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17, 12, 13, 16],
      vars: { day: '3', x: '1', output: '0 1' },
      explanation: {
        icon: 'terminal',
        text: 'printf("%d ", x)：输出 1',
        color: 'blue',
        actor: 'CPU',
        detail: 'CALL printf 输出 1。输出缓冲区："0 1 "'
      }
    },
    {
      step: 18,
      line: 17,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17, 12, 13, 16, 17],
      vars: { day: '3', x: '2', x_skip: 'continue' },
      highlightVar: 'x_skip',
      explanation: {
        icon: 'calculator',
        text: 'x++：x 从 1 增加到 2',
        color: 'orange',
        actor: 'CPU',
        detail: 'INC 指令 x=2。回到 while 条件：2<5 为真，进入第三次循环。关键：这次 if 条件将成立！'
      }
    },
    {
      step: 19,
      line: 12,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17, 12],
      vars: { day: '3', x: '2' },
      explanation: {
        icon: 'info',
        text: 'while(x < 5)：2<5 为真',
        color: 'blue',
        actor: 'CPU',
        detail: '第三次循环开始。x=2 将触发 if 条件，演示 continue 的跳过行为'
      }
    },
    {
      step: 20,
      line: 13,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17, 12, 13],
      vars: { day: '3', x: '2' },
      explanation: {
        icon: 'branch',
        text: 'if(x == 2)：2==2 为真！',
        color: 'red',
        actor: 'CPU',
        detail: 'CMP 比较 2 和 2，相等！JE 指令跳转到 if 块内部，执行 continue 语句'
      }
    },
    {
      step: 21,
      line: 14,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17, 12, 13, 14],
      vars: { day: '3', x: '2', x_skip: 'continue' },
      highlightVar: 'x_skip',
      explanation: {
        icon: 'skip',
        text: 'continue：跳过本次循环剩余部分',
        color: 'red',
        actor: 'CPU',
        detail: 'CONTINUE 指令直接跳转到 while 条件判断处，跳过 printf 和 x++！x 保持为 2，不会输出，进入死循环风险！'
      }
    },
    {
      step: 22,
      line: 12,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17, 12, 13, 14, 12],
      vars: { day: '3', x: '2' },
      explanation: {
        icon: 'alert',
        text: 'while(x < 5)：2<5 为真，继续循环',
        color: 'red',
        actor: 'CPU',
        detail: '危险！x 仍然是 2，因为 continue 跳过了 x++。这将导致无限循环！这是一个常见的 continue 误用陷阱'
      }
    },
    {
      step: 23,
      line: 13,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17, 12, 13, 14, 12, 13],
      vars: { day: '3', x: '2' },
      explanation: {
        icon: 'alert',
        text: 'if(x == 2)：再次命中！',
        color: 'red',
        actor: 'CPU',
        alert: true,
        detail: 'x 仍然是 2，再次触发 if 条件，再次执行 continue。死循环！正确做法：continue 前必须先更新变量'
      }
    },
    {
      step: 24,
      line: 14,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17, 12, 13, 14],
      vars: { day: '3', x: '2' },
      explanation: {
        icon: 'info',
        text: 'continue 再次跳过剩余代码',
        color: 'red',
        actor: 'CPU',
        detail: '代码有 bug！continue 跳过了 x++，导致 x 永远是 2，无限循环。修复：在 continue 前加 x++'
      }
    },
    {
      step: 25,
      line: 20,
      executedLines: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17, 12, 13, 14],
      vars: { day: '3', x: '2', output: '0 1' },
      explanation: {
        icon: 'terminal',
        text: '代码演示结束（实际会死循环）',
        color: 'red',
        actor: 'CPU',
        detail: 'RET 指令返回。重要教训：continue 跳过循环剩余部分包括更新语句，导致死循环。正确写法：if(x==2) { x++; continue; }'
      }
    }
  ],

  summary: {
    oneLiner: '掌握 switch 多分支选择和 break/continue 控制流跳转',
    pitfalls: [
      'switch 的 case 分支需要 break 防止 fall-through 穿透到下一个 case',
      'default 分支处理所有未匹配的情况，相当于 if-else 的 else',
      'continue 跳过循环剩余部分，包括变量更新语句，可能导致死循环',
      'break 跳出整个循环或 switch，continue 只跳过当前迭代'
    ],
    transferQuestion: '为什么 switch 语句在某些情况下比 if-else 链性能更好？（提示：跳转表）',
    miniExercise: {
      bugCode: 'while(i < 10) { if(i == 5) continue; printf("%d", i); i++; } // 死循环！',
      hint: '当 i==5 时 continue 跳过 i++，i 永远是 5。修复：if(i==5) { i++; continue; }'
    }
  },

  predictions: [
    {
      question: 'switch 语句和 if-else 链的主要区别是什么？',
      options: [
        { text: 'switch 更短', feedback: '错误！代码长度不是主要区别。' },
        { text: 'switch 使用跳转表，O(1) 时间复杂度', feedback: '正确！switch 编译器生成跳转表，直接跳转到匹配 case，而 if-else 需要逐个判断。' },
        { text: 'switch 只能用于整数', feedback: '部分正确，但不是主要区别。' },
        { text: '没有区别', feedback: '错误！性能差异明显。' }
      ],
      correctIndex: 1
    },
    {
      question: 'break 和 continue 的区别是什么？',
      options: [
        { text: 'break 跳出整个结构，continue 跳过当前迭代', feedback: '正确！break 完全退出循环/switch，continue 只跳过当前迭代，继续下一次循环。' },
        { text: 'break 更快', feedback: '错误！两者性能相同。' },
        { text: 'continue 不能用于 switch', feedback: '正确，continue 只能用于循环。' },
        { text: '完全相同', feedback: '错误！行为完全不同。' }
      ],
      correctIndex: 0
    }
  ],

  misconceptions: [
    {
      myth: 'switch 不需要 break 也能正常工作',
      truth: '没有 break 会发生 fall-through 穿透，执行后续所有 case 分支。只有特定模式（如多个 case 共享代码）才故意省略 break。'
    },
    {
      myth: 'continue 会终止整个循环',
      truth: 'continue 只跳过当前迭代，回到循环条件判断。break 才会终止整个循环。'
    },
    {
      myth: 'default 分支可以省略',
      truth: 'default 分支处理未匹配情况，省略可能导致未定义行为。良好的编程习惯应始终包含 default 分支。'
    }
  ]
};
