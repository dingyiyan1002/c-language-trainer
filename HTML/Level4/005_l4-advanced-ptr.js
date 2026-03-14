window.LESSON_DATA = {
  meta: {
    id: 'l4-advanced-ptr',
    title: '高级指针应用',
    chapter: 'Level4',
    index: 5,
    filename: 'advanced_pointers.c',
    keyPoints: ['多级指针', '指针数组', '函数指针数组']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdlib.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<string.h>' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'process' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'cmd' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Executing: %s\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'cmd' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'punc', text: '}' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'cmds' }, { type: 'punc', text: '[' }, { type: 'num', text: '3' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }, { type: 'str', text: '"init"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"run"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"exit"' }, { type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'argv' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'cmds' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'typedef' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'op', text: '*' }, { type: 'id', text: 'CmdFunc' }, { type: 'punc', text: ')' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'CmdFunc' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'funcMap' }, { type: 'punc', text: '[' }, { type: 'num', text: '3' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }, { type: 'id', text: 'process' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'process' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'process' }, { type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '3' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 15, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'funcMap' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'punc', text: '(' }, { type: 'id', text: 'argv' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'cmds', name: 'cmds', type: 'char*[3]', addr: '0x7fff20', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'argv', name: 'argv', type: 'char**', addr: '0x7fff30', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'CmdFunc', name: 'CmdFunc', type: 'typedef', addr: 'N/A', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 },
    { key: 'funcMap', name: 'funcMap', type: 'CmdFunc[3]', addr: '0x401000', glowColor: 'rgba(251,146,60,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 4 },
    { key: 'i', name: 'i', type: 'int', addr: '0x7fff10', glowColor: 'rgba(239,68,68,0.35)', accentCls: 'text-red-400', badgeCls: 'text-red-400 border-red-500/30 bg-red-500/12', appearStep: 5 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习高级指针应用（多级指针、指针数组、函数指针数组）', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 10,
      executedLines: [5, 6, 7, 8, 9],
      vars: { cmds: ['0x500001', '0x500006', '0x50000b'] },
      highlightVar: 'cmds',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'stack',
        text: 'char* cmds[3] — 指针数组（数组存储 3 个 char* 指针）',
        color: 'yellow',
        actor: 'Compiler',
        detail: '指针数组：数组元素是指针。cmds[0] 指向"init"，cmds[1] 指向"run"，cmds[2] 指向"exit"。字符串常量存储在只读数据段。这是命令表模式的基础。'
      },
      prediction: {
        question: 'char* cmds[3] 是什么类型？',
        options: ['字符数组', '指针数组（元素是指针）', '指向字符的指针'],
        answer: 1
      },
      misconception: {
        title: '指针数组 vs 数组指针',
        text: 'char* cmds[3] 是指针数组（array of pointers）：3 个 char* 元素的数组。char (*cmds)[3] 是数组指针（pointer to array）：指向 3 元素 char 数组的指针。[] 优先级高于*，需要括号改变结合性。'
      },
      actor: 'Compiler',
      target: 'var:cmds',
      timing: 'compile-time'
    },
    {
      step: 2,
      line: 11,
      executedLines: [5, 6, 7, 8, 9, 10],
      vars: { cmds: ['0x500001', '0x500006', '0x50000b'], argv: '0x7fff20' },
      highlightVar: 'argv',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'pointer',
        text: 'char** argv = cmds — 二级指针（指向指针的指针）',
        color: 'purple',
        actor: 'Compiler',
        detail: '二级指针：指向指针的指针。argv 存储 cmds 的地址（&cmds[0]）。argv[0] ≡ cmds[0] ≡ "init"。这是多级指针的典型应用。main 函数的 char** argv 就是二级指针。'
      },
      prediction: null,
      misconception: {
        title: '多级指针的用途',
        text: '二级指针（char**）常用于：1) main 函数的 argv 参数 2) 动态二维数组 3) 函数需要修改指针本身（而非指针指向的内容）4) 指针数组的遍历。'
      },
      actor: 'Compiler',
      target: 'var:argv',
      timing: 'compile-time'
    },
    {
      step: 3,
      line: 12,
      executedLines: [5, 6, 7, 8, 9, 10, 11],
      vars: { cmds: ['0x500001', '0x500006', '0x50000b'], argv: '0x7fff20' },
      highlightVar: 'CmdFunc',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'typedef void (*CmdFunc)(const char*) — 定义函数指针类型',
        color: 'blue',
        actor: 'Compiler',
        detail: 'typedef 定义函数指针类型别名。CmdFunc 是"接受 const char* 返回 void 的函数"的指针类型。这简化了后续声明：CmdFunc funcMap[3] 比 void (*funcMap[3])(const char*) 更易读。'
      },
      prediction: {
        question: 'typedef 的作用是什么？',
        options: ['定义新函数', '创建类型别名', '分配内存'],
        answer: 1
      },
      misconception: null,
      actor: 'Compiler',
      target: 'type:CmdFunc',
      timing: 'compile-time'
    },
    {
      step: 4,
      line: 13,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12],
      vars: { cmds: ['0x500001', '0x500006', '0x50000b'], argv: '0x7fff20', funcMap: ['0x00401000', '0x00401000', '0x00401000'] },
      highlightVar: 'funcMap',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'stack',
        text: 'CmdFunc funcMap[3] — 函数指针数组（命令表模式）',
        color: 'orange',
        actor: 'Compiler',
        detail: '函数指针数组：数组元素是函数指针。funcMap[0/1/2] 都指向 process 函数。这是命令表（Command Table）模式：用数组索引调用不同函数。可扩展为每个命令对应不同处理函数。'
      },
      prediction: null,
      misconception: {
        title: '函数指针数组的应用',
        text: '函数指针数组用于：1) 命令解释器（命令码→处理函数）2) 状态机（状态→动作）3) 回调函数表 4) 虚拟函数表（C++ vtable）。这是实现多态和事件驱动的基础。'
      },
      actor: 'Compiler',
      target: 'var:funcMap',
      timing: 'compile-time'
    },
    {
      step: 5,
      line: 14,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: { cmds: ['0x500001', '0x500006', '0x50000b'], argv: '0x7fff20', funcMap: ['0x00401000', '0x00401000', '0x00401000'], i: 0 },
      highlightVar: 'i',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'loop',
        text: 'for 循环：i=0 开始遍历命令表',
        color: 'green',
        actor: 'CPU',
        detail: '循环变量 i 从 0 到 2，遍历 funcMap 和 argv 数组。这是命令表模式的标准执行方式：按顺序（或根据输入）调用对应的函数。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'loop',
      timing: 'runtime'
    },
    {
      step: 6,
      line: 15,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14],
      vars: { cmds: ['0x500001', '0x500006', '0x50000b'], argv: '0x7fff20', funcMap: ['0x00401000', '0x00401000', '0x00401000'], i: 0 },
      highlightVar: 'funcMap',
      isDanger: false,
      output: [{ type: 'success', text: 'Executing: init' }],
      explanation: {
        icon: 'bolt',
        text: 'funcMap[0](argv[0]) — 通过函数指针数组调用函数',
        color: 'green',
        actor: 'CPU',
        detail: '函数指针数组调用：funcMap[i](argv[i])。第一次循环：funcMap[0] 是 process 函数，argv[0] 是"init"。调用 process("init")，输出"Executing: init"。这是事件驱动和插件系统的核心机制。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'func:process',
      timing: 'runtime'
    },
    {
      step: 7,
      line: 14,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15],
      vars: { cmds: ['0x500001', '0x500006', '0x50000b'], argv: '0x7fff20', funcMap: ['0x00401000', '0x00401000', '0x00401000'], i: 1 },
      highlightVar: 'i',
      isDanger: false,
      output: [{ type: 'success', text: 'Executing: init' }],
      explanation: {
        icon: 'loop',
        text: 'i++，i=1，继续循环',
        color: 'blue',
        actor: 'CPU',
        detail: '循环变量递增，i=1。检查条件 i<3 为真，继续下一次迭代。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'loop',
      timing: 'runtime'
    },
    {
      step: 8,
      line: 15,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 14, 14],
      vars: { cmds: ['0x500001', '0x500006', '0x50000b'], argv: '0x7fff20', funcMap: ['0x00401000', '0x00401000', '0x00401000'], i: 1 },
      highlightVar: 'funcMap',
      isDanger: false,
      output: [{ type: 'success', text: 'Executing: init' }, { type: 'success', text: 'Executing: run' }],
      explanation: {
        icon: 'bolt',
        text: 'funcMap[1](argv[1]) — 调用 process("run")',
        color: 'green',
        actor: 'CPU',
        detail: '第二次循环：funcMap[1] 调用 process，argv[1] 是"run"。输出"Executing: run"。函数指针数组的优势：可以动态改变每个索引的函数，实现可配置的命令处理。'
      },
      prediction: {
        question: '如何让不同命令调用不同函数？',
        options: ['修改 if 判断', 'funcMap 数组填入不同函数地址', '用 switch 语句'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'func:process',
      timing: 'runtime'
    },
    {
      step: 9,
      line: 14,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 14, 14, 15],
      vars: { cmds: ['0x500001', '0x500006', '0x50000b'], argv: '0x7fff20', funcMap: ['0x00401000', '0x00401000', '0x00401000'], i: 2 },
      highlightVar: 'i',
      isDanger: false,
      output: [{ type: 'success', text: 'Executing: init' }, { type: 'success', text: 'Executing: run' }],
      explanation: {
        icon: 'loop',
        text: 'i++，i=2，继续循环',
        color: 'blue',
        actor: 'CPU',
        detail: '循环变量递增，i=2。检查条件 i<3 为真，继续下一次迭代。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'loop',
      timing: 'runtime'
    },
    {
      step: 10,
      line: 15,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 14, 14, 15, 14, 14],
      vars: { cmds: ['0x500001', '0x500006', '0x50000b'], argv: '0x7fff20', funcMap: ['0x00401000', '0x00401000', '0x00401000'], i: 2 },
      highlightVar: 'funcMap',
      isDanger: false,
      output: [{ type: 'success', text: 'Executing: init' }, { type: 'success', text: 'Executing: run' }, { type: 'success', text: 'Executing: exit' }],
      explanation: {
        icon: 'bolt',
        text: 'funcMap[2](argv[2]) — 调用 process("exit")',
        color: 'green',
        actor: 'CPU',
        detail: '第三次循环：funcMap[2] 调用 process，argv[2] 是"exit"。输出"Executing: exit"。所有命令处理完毕。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'func:process',
      timing: 'runtime'
    },
    {
      step: 11,
      line: 17,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 14, 14, 15, 14, 14, 15, 14, 16],
      vars: { cmds: ['0x500001', '0x500006', '0x50000b'], argv: '0x7fff20', funcMap: ['0x00401000', '0x00401000', '0x00401000'], i: 3 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Executing: init' }, { type: 'success', text: 'Executing: run' }, { type: 'success', text: 'Executing: exit' }],
      explanation: {
        icon: 'check',
        text: 'i=3，循环结束，程序执行完毕',
        color: 'green',
        actor: 'CPU',
        detail: 'i++ 后 i=3，检查条件 i<3 为假，退出循环。返回 0，程序结束。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    },
    {
      step: 12,
      line: 17,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 14, 14, 15, 14, 14, 15, 14, 14, 15, 14, 16, 17],
      vars: { cmds: ['0x500001', '0x500006', '0x50000b'], argv: '0x7fff20', funcMap: ['0x00401000', '0x00401000', '0x00401000'], i: 3 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Executing: init' }, { type: 'success', text: 'Executing: run' }, { type: 'success', text: 'Executing: exit' }],
      explanation: {
        icon: 'check',
        text: '高级指针应用：指针数组→二级指针→函数指针数组→命令表模式',
        color: 'green',
        actor: 'Compiler',
        detail: '高级指针要点：1) 指针数组（元素是指针）2) 多级指针（指向指针的指针）3) 函数指针数组（命令表/状态机）4) typedef 简化复杂类型。这是实现解释器、插件系统、事件驱动的基础。'
      },
      prediction: null,
      misconception: null,
      actor: 'Compiler',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: '高级指针：指针数组（元素是指针）、二级指针（指向指针）、函数指针数组（命令表模式）',
    pitfalls: [
      'char* arr[3] 是指针数组，char (*arr)[3] 是数组指针 — 括号改变结合性',
      '二级指针 char** 可以用于动态二维数组或需要修改指针本身的场景',
      '函数指针数组是命令表模式的基础：funcMap[i](args) 实现动态分发'
    ],
    transferQuestion: '如何实现一个支持 5 个命令（init/start/stop/pause/exit）的命令行解释器？（提示：扩展 funcMap 数组，每个命令对应不同函数）',
    miniExercise: {
      bugCode: 'char* cmds[3] = {"init", "run", "exit"};\nchar** argv = cmds;\nprintf("%s", argv[0][0]);  // 这样输出什么？',
      hint: 'argv[0] 是 char*（"init"），argv[0][0] 是 char（\'i\'）。应该用 argv[0] 输出整个字符串'
    }
  }
};
