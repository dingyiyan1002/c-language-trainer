window.LESSON_DATA = {
  meta: {
    chapterId: 'functions',
    lessonId: 'func-5',
    title: '递归函数与栈帧',
    index: 5,
    filename: 'functions_005_func-5.js',
    keyPoints: ['递归调用过程', '栈帧层层嵌套', '递归终止条件', '返回值的传递']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 递归函数：计算阶乘 n!' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'factorial' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 3, tokens: [] },
    { num: 4, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'main' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 5, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'result' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'factorial' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '4' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 计算 4! = 24' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"4! = %d\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'result' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 7, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]},
    { num: 8, tokens: [
      { type: 'punc', text: '}' }
    ]},
    { num: 9, tokens: [] },
    { num: 10, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'factorial' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 11, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'if' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'n' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '         ' },
      { type: 'cmt', text: '// 递归终止条件：0! = 1! = 1' }
    ]},
    { num: 13, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '}' }
    ]},
    { num: 14, tokens: [] },
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'subResult' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'factorial' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'n' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 递归调用' }
    ]},
    { num: 16, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'final' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'subResult' },
      { type: 'punc', text: ';' }
    ]},
    { num: 17, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'final' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '        ' },
      { type: 'cmt', text: '// 返回 n * (n-1)!' }
    ]},
    { num: 18, tokens: [
      { type: 'punc', text: '}' }
    ]}
  ],

  varConfig: [
    { key: 'result', name: 'result', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(34,197,94,0.35)', appearStep: 4, value: '24' },
    { key: 'n_1', name: 'n (层级 1)', type: 'int', addr: '0x7ffb00', glowColor: 'rgba(168,85,247,0.35)', appearStep: 5, value: '4' },
    { key: 'subResult_1', name: 'subResult (层级 1)', type: 'int', addr: '0x7ffb04', glowColor: 'rgba(59,130,246,0.35)', appearStep: 14, value: '6' },
    { key: 'final_1', name: 'final (层级 1)', type: 'int', addr: '0x7ffb08', glowColor: 'rgba(249,115,22,0.35)', appearStep: 15, value: '24' },
    { key: 'n_2', name: 'n (层级 2)', type: 'int', addr: '0x7ffa00', glowColor: 'rgba(250,204,21,0.35)', appearStep: 6, value: '3' },
    { key: 'subResult_2', name: 'subResult (层级 2)', type: 'int', addr: '0x7ffa04', glowColor: 'rgba(239,68,68,0.35)', appearStep: 11, value: '2' },
    { key: 'final_2', name: 'final (层级 2)', type: 'int', addr: '0x7ffa08', glowColor: 'rgba(34,197,94,0.35)', appearStep: 12, value: '6' },
    { key: 'n_3', name: 'n (层级 3)', type: 'int', addr: '0x7ff900', glowColor: 'rgba(168,85,247,0.35)', appearStep: 7, value: '2' },
    { key: 'subResult_3', name: 'subResult (层级 3)', type: 'int', addr: '0x7ff904', glowColor: 'rgba(59,130,246,0.35)', appearStep: 9, value: '1' },
    { key: 'final_3', name: 'final (层级 3)', type: 'int', addr: '0x7ff908', glowColor: 'rgba(249,115,22,0.35)', appearStep: 10, value: '2' },
    { key: 'n_4', name: 'n (层级 4)', type: 'int', addr: '0x7ff800', glowColor: 'rgba(250,204,21,0.35)', appearStep: 8, value: '1' }
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
        detail: '程序即将开始运行，演示递归函数的栈帧嵌套过程'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：递归函数 - 计算阶乘',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示递归调用'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: {},
      explanation: {
        icon: 'gear',
        text: 'int factorial(int n); 函数原型声明',
        color: 'purple',
        actor: 'Compiler',
        detail: '编译器记录 factorial 函数接受 int 参数，返回 int'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 2],
      vars: {},
      explanation: {
        icon: 'terminal',
        text: 'int main() 函数入口',
        color: 'green',
        actor: 'CPU',
        detail: '程序入口点，栈帧建立，准备执行 main 函数体'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 4],
      vars: { result: undefined },
      explanation: {
        icon: 'info',
        text: '阅读注释：计算 4! = 24',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将调用 factorial(4)'
      }
    },
    {
      step: 5,
      line: 5,
      executedLines: [1, 2, 4, 5],
      vars: { result: undefined, n_1: 4 },
      highlightVar: 'n_1',
      explanation: {
        icon: 'call',
        text: 'CALL factorial(4)，建立第 1 层栈帧',
        color: 'orange',
        actor: 'CPU',
        detail: 'PUSH 参数 4，CALL 跳转到 factorial，建立新栈帧 n=4 在地址 0x7ffb00'
      }
    },
    {
      step: 6,
      line: 11,
      executedLines: [1, 2, 4, 5, 10],
      vars: { result: undefined, n_1: 4, n_2: 3 },
      highlightVar: 'n_2',
      explanation: {
        icon: 'call',
        text: 'factorial(4) 调用 factorial(3)，第 2 层栈帧',
        color: 'yellow',
        actor: 'CPU',
        detail: 'n=4 时 n>1，执行 factorial(3)，PUSH 参数 3，CALL 建立新栈帧 n=3 在 0x7ffa00'
      }
    },
    {
      step: 7,
      line: 11,
      executedLines: [1, 2, 4, 5, 10, 11],
      vars: { result: undefined, n_1: 4, n_2: 3, n_3: 2 },
      highlightVar: 'n_3',
      explanation: {
        icon: 'call',
        text: 'factorial(3) 调用 factorial(2)，第 3 层栈帧',
        color: 'red',
        actor: 'CPU',
        detail: 'n=3 时 n>1，执行 factorial(2)，PUSH 参数 2，CALL 建立新栈帧 n=2 在 0x7ff900'
      }
    },
    {
      step: 8,
      line: 11,
      executedLines: [1, 2, 4, 5, 10, 11, 11],
      vars: { result: undefined, n_1: 4, n_2: 3, n_3: 2, n_4: 1 },
      highlightVar: 'n_4',
      explanation: {
        icon: 'call',
        text: 'factorial(2) 调用 factorial(1)，第 4 层栈帧',
        color: 'green',
        actor: 'CPU',
        detail: 'n=2 时 n>1，执行 factorial(1)，PUSH 参数 1，CALL 建立新栈帧 n=1 在 0x7ff800'
      }
    },
    {
      step: 9,
      line: 12,
      executedLines: [1, 2, 4, 5, 10, 11, 11, 11],
      vars: { result: undefined, n_1: 4, n_2: 3, n_3: 2, n_4: 1, subResult_3: 1 },
      highlightVar: 'subResult_3',
      explanation: {
        icon: 'check',
        text: 'factorial(1) 满足终止条件，返回 1',
        color: 'purple',
        actor: 'CPU',
        detail: 'n=1 时 n<=1 成立，执行 return 1，值 1 写入 subResult_3 (层级 3)'
      }
    },
    {
      step: 10,
      line: 16,
      executedLines: [1, 2, 4, 5, 10, 11, 11, 11, 12, 15],
      vars: { result: undefined, n_1: 4, n_2: 3, n_3: 2, n_4: 1, subResult_3: 1, final_3: 2 },
      highlightVar: 'final_3',
      explanation: {
        icon: 'memory',
        text: '层级 3: final = 2 * 1 = 2',
        color: 'blue',
        actor: 'CPU',
        detail: '层级 3 栈帧中，n=2，subResult=1，计算 final = 2 * 1 = 2，准备返回'
      }
    },
    {
      step: 11,
      line: 15,
      executedLines: [1, 2, 4, 5, 10, 11, 11, 11, 12, 15, 16],
      vars: { result: undefined, n_1: 4, n_2: 3, n_3: 2, n_4: 1, subResult_3: 1, final_3: 2, subResult_2: 2 },
      highlightVar: 'subResult_2',
      explanation: {
        icon: 'return',
        text: '层级 3 返回 2 到层级 2，subResult = 2',
        color: 'orange',
        actor: 'CPU',
        detail: 'RET 指令返回层级 2，final_3 的值 2 被赋给 subResult_2，层级 3 栈帧销毁'
      }
    },
    {
      step: 12,
      line: 16,
      executedLines: [1, 2, 4, 5, 10, 11, 11, 11, 12, 15, 16, 15],
      vars: { result: undefined, n_1: 4, n_2: 3, n_3: 2, n_4: 1, subResult_3: 1, final_3: 2, subResult_2: 2, final_2: 6 },
      highlightVar: 'final_2',
      explanation: {
        icon: 'memory',
        text: '层级 2: final = 3 * 2 = 6',
        color: 'yellow',
        actor: 'CPU',
        detail: '层级 2 栈帧中，n=3，subResult=2，计算 final = 3 * 2 = 6，准备返回'
      }
    },
    {
      step: 13,
      line: 15,
      executedLines: [1, 2, 4, 5, 10, 11, 11, 11, 12, 15, 16, 15, 16],
      vars: { result: undefined, n_1: 4, n_2: 3, n_3: 2, n_4: 1, subResult_3: 1, final_3: 2, subResult_2: 2, final_2: 6, subResult_1: 6 },
      highlightVar: 'subResult_1',
      explanation: {
        icon: 'return',
        text: '层级 2 返回 6 到层级 1，subResult = 6',
        color: 'red',
        actor: 'CPU',
        detail: 'RET 指令返回层级 1，final_2 的值 6 被赋给 subResult_1，层级 2 栈帧销毁'
      }
    },
    {
      step: 14,
      line: 16,
      executedLines: [1, 2, 4, 5, 10, 11, 11, 11, 12, 15, 16, 15, 16, 15],
      vars: { result: undefined, n_1: 4, n_2: 3, n_3: 2, n_4: 1, subResult_3: 1, final_3: 2, subResult_2: 2, final_2: 6, subResult_1: 6, final_1: 24 },
      highlightVar: 'final_1',
      explanation: {
        icon: 'memory',
        text: '层级 1: final = 4 * 6 = 24',
        color: 'green',
        actor: 'CPU',
        detail: '层级 1 栈帧中，n=4，subResult=6，计算 final = 4 * 6 = 24，准备返回'
      }
    },
    {
      step: 15,
      line: 17,
      executedLines: [1, 2, 4, 5, 10, 11, 11, 11, 12, 15, 16, 15, 16, 15, 16],
      vars: { result: 24, n_1: 4, n_2: 3, n_3: 2, n_4: 1, subResult_3: 1, final_3: 2, subResult_2: 2, final_2: 6, subResult_1: 6, final_1: 24 },
      highlightVar: 'result',
      explanation: {
        icon: 'return',
        text: 'factorial(4) 返回 24 到 main，result = 24',
        color: 'purple',
        actor: 'CPU',
        detail: 'RET 指令返回 main，final_1 的值 24 被赋给 result，所有 factorial 栈帧销毁'
      }
    },
    {
      step: 16,
      line: 6,
      executedLines: [1, 2, 4, 5, 10, 11, 11, 11, 12, 15, 16, 15, 16, 15, 16, 17],
      vars: { result: 24 },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出：4! = 24',
        color: 'blue',
        actor: 'CPU',
        detail: 'PUSH result 的值 24 到栈，CALL printf 格式化输出 "4! = 24"'
      }
    },
    {
      step: 17,
      line: 7,
      executedLines: [1, 2, 4, 5, 10, 11, 11, 11, 12, 15, 16, 15, 16, 15, 16, 17, 6],
      vars: { result: 24 },
      explanation: {
        icon: 'terminal',
        text: 'return 0; main 函数返回',
        color: 'green',
        actor: 'CPU',
        detail: 'RET 指令返回操作系统，程序结束。关键：递归 = 递推 + 回归，每次调用压栈，每次返回弹栈'
      }
    }
  ],

  summary: {
    oneLiner: '掌握递归函数的执行过程与栈帧嵌套机制',
    pitfalls: [
      '递归必须有终止条件，否则无限递归导致栈溢出',
      '每次递归调用都创建新栈帧，局部变量互不影响',
      '递归深度受栈空间限制，深度过大会导致 Stack Overflow',
      '返回值在回归阶段层层传递，每层使用下层返回的结果'
    ],
    transferQuestion: '为什么递归计算 factorial(100) 会导致栈溢出，而循环版本不会？',
    miniExercise: {
      bugCode: 'int sum(int n) { return n + sum(n-1); } // 缺少终止条件！',
      hint: '缺少 if(n<=0) return 0; 终止条件，会无限递归直到栈溢出'
    }
  }
};
