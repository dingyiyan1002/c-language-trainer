window.LESSON_DATA = {
  meta: {
    id: 'l5-arch',
    title: '架构设计',
    chapter: 'Level5',
    index: 5,
    filename: 'modular_design.c',
    keyPoints: ['模块化', '分层设计', '接口设计']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdlib.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<string.h>' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'typedef' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'void' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'op', text: '*' }, { type: 'id', text: 'init' }, { type: 'punc', text: ')' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'op', text: '*' }, { type: 'id', text: 'process' }, { type: 'punc', text: ')' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'op', text: '*' }, { type: 'id', text: 'cleanup' }, { type: 'punc', text: ')' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'punc', text: '}' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ModuleInterface' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 11, tokens: [{ type: 'kw', text: 'typedef' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'ModuleInterface' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ops' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'void' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'internalData' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'punc', text: '}' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'LoggerModule' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 16, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'void' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'loggerInit' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 17, tokens: [{ type: 'punc', text: '{' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Logger initialized\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'punc', text: '}' }] },
    { num: 21, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 22, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'loggerProcess' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'msg' }, { type: 'punc', text: ')' }] },
    { num: 23, tokens: [{ type: 'punc', text: '{' }] },
    { num: 24, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[LOG] %s\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'msg' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 25, tokens: [{ type: 'punc', text: '}' }] },
    { num: 26, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 27, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'loggerCleanup' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 28, tokens: [{ type: 'punc', text: '{' }] },
    { num: 29, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Logger cleanup\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 30, tokens: [{ type: 'punc', text: '}' }] },
    { num: 31, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 32, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'LoggerModule' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'gLogger' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 33, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '.' }, { type: 'id', text: 'ops' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 34, tokens: [{ type: 'ws', text: '        ' }, { type: 'punc', text: '.' }, { type: 'id', text: 'init' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'loggerInit' }, { type: 'punc', text: ',' }] },
    { num: 35, tokens: [{ type: 'ws', text: '        ' }, { type: 'punc', text: '.' }, { type: 'id', text: 'process' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'loggerProcess' }, { type: 'punc', text: ',' }] },
    { num: 36, tokens: [{ type: 'ws', text: '        ' }, { type: 'punc', text: '.' }, { type: 'id', text: 'cleanup' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'loggerCleanup' }, { type: 'punc', text: ',' }] },
    { num: 37, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }, { type: 'punc', text: ',' }] },
    { num: 38, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '.' }, { type: 'id', text: 'internalData' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }] },
    { num: 39, tokens: [{ type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 40, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 41, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'systemRun' }, { type: 'punc', text: '(' }, { type: 'id', text: 'ModuleInterface' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'mod' }, { type: 'punc', text: ')' }] },
    { num: 42, tokens: [{ type: 'punc', text: '{' }] },
    { num: 43, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'mod' }, { type: 'op', text: '->' }, { type: 'id', text: 'init' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 44, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'mod' }, { type: 'op', text: '->' }, { type: 'id', text: 'process' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Hello from system"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 45, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'mod' }, { type: 'op', text: '->' }, { type: 'id', text: 'cleanup' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 46, tokens: [{ type: 'punc', text: '}' }] },
    { num: 47, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 48, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 49, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'systemRun' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'gLogger' }, { type: 'punc', text: '.' }, { type: 'id', text: 'ops' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 50, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 51, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'ModuleInterface', name: 'ModuleInterface', type: 'typedef struct', addr: 'N/A', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'gLogger', name: 'gLogger', type: 'LoggerModule', addr: '0x600000', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'systemRun', name: 'systemRun', type: 'void(*)(ModuleInterface*)', addr: '0x401000', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习模块化架构设计', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 5,
      executedLines: [1, 2, 3, 4],
      vars: {},
      highlightVar: 'ModuleInterface',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'struct',
        text: 'ModuleInterface — 模块接口定义（回调函数表）',
        color: 'yellow',
        actor: 'Architect',
        detail: '定义统一的模块接口：init/process/cleanup 三个函数指针。这是插件架构的基础：所有模块实现相同接口，系统通过接口调用模块，无需知道具体实现。'
      },
      prediction: {
        question: 'ModuleInterface 是什么设计模式？',
        options: ['单例模式', '策略模式/插件模式', '观察者模式'],
        answer: 1
      },
      misconception: null,
      actor: 'Architect',
      target: 'type:ModuleInterface',
      timing: 'design-time'
    },
    {
      step: 2,
      line: 11,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      vars: {},
      highlightVar: 'gLogger',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'struct',
        text: 'LoggerModule — 具体模块实现（包含接口 + 内部数据）',
        color: 'purple',
        actor: 'Architect',
        detail: 'LoggerModule 包含 ModuleInterface 和内部数据指针。这是模块的私有实现：外部只看到接口，看不到内部数据结构。体现了封装和信息隐藏原则。'
      },
      prediction: null,
      misconception: {
        title: '接口与实现分离',
        text: '接口定义"做什么"（what），实现定义"怎么做"（how）。好处：1) 可替换实现 2) 模块独立开发 3) 降低耦合 4) 易于测试。'
      },
      actor: 'Architect',
      target: 'type:LoggerModule',
      timing: 'design-time'
    },
    {
      step: 3,
      line: 16,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: {},
      highlightVar: 'gLogger',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'loggerInit — 模块初始化函数',
        color: 'green',
        actor: 'Developer',
        detail: '静态函数（文件内可见），实现接口的 init 方法。初始化模块资源（打开文件、分配内存等）。返回 void* 可传递任意私有数据。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'func:loggerInit',
      timing: 'design-time'
    },
    {
      step: 4,
      line: 22,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      vars: {},
      highlightVar: 'gLogger',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'loggerProcess — 模块处理函数（核心业务逻辑）',
        color: 'green',
        actor: 'Developer',
        detail: '实现接口的 process 方法。接收消息并处理（这里是打印日志）。实际系统中可能是数据转换、网络通信等。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'func:loggerProcess',
      timing: 'design-time'
    },
    {
      step: 5,
      line: 27,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      vars: {},
      highlightVar: 'gLogger',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'loggerCleanup — 模块清理函数',
        color: 'green',
        actor: 'Developer',
        detail: '实现接口的 cleanup 方法。释放资源（关闭文件、释放内存等）。与 init 成对使用，确保没有资源泄漏。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'func:loggerCleanup',
      timing: 'design-time'
    },
    {
      step: 6,
      line: 32,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      vars: { gLogger: { ops: { init: 'loggerInit', process: 'loggerProcess', cleanup: 'loggerCleanup' }, internalData: 'NULL' } },
      highlightVar: 'gLogger',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'struct',
        text: 'gLogger 实例 — 初始化模块对象',
        color: 'purple',
        actor: 'Linker',
        detail: '静态初始化 LoggerModule 实例：ops 字段填充三个函数指针，internalData 为 NULL。这是模块的"虚函数表"，类似 C++ 的 vtable。'
      },
      prediction: {
        question: '如何添加新模块（如 NetworkModule）？',
        options: ['修改 systemRun 函数', '实现新的 ModuleInterface 实例', '重写整个系统'],
        answer: 1
      },
      misconception: null,
      actor: 'Linker',
      target: 'var:gLogger',
      timing: 'link-time'
    },
    {
      step: 7,
      line: 41,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
      vars: { gLogger: { ops: { init: 'loggerInit', process: 'loggerProcess', cleanup: 'loggerCleanup' }, internalData: 'NULL' } },
      highlightVar: 'systemRun',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'systemRun — 系统级函数（通过接口调用模块）',
        color: 'blue',
        actor: 'Architect',
        detail: 'systemRun 不知道具体模块类型，只通过 ModuleInterface 调用。这是依赖倒置原则：高层模块依赖抽象接口，不依赖具体实现。'
      },
      prediction: null,
      misconception: null,
      actor: 'Architect',
      target: 'func:systemRun',
      timing: 'design-time'
    },
    {
      step: 8,
      line: 43,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
      vars: { gLogger: { ops: { init: 'loggerInit', process: 'loggerProcess', cleanup: 'loggerCleanup' }, internalData: 'NULL' } },
      highlightVar: 'systemRun',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'bolt',
        text: 'mod->init() — 通过接口调用模块初始化',
        color: 'green',
        actor: 'CPU',
        detail: '通过函数指针调用 loggerInit。systemRun 不知道调用的是 LoggerModule，可能是任何其他实现 ModuleInterface 的模块。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'func:loggerInit',
      timing: 'runtime'
    },
    {
      step: 9,
      line: 44,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
      vars: { gLogger: { ops: { init: 'loggerInit', process: 'loggerProcess', cleanup: 'loggerCleanup' }, internalData: 'NULL' } },
      highlightVar: 'systemRun',
      isDanger: false,
      output: [{ type: 'success', text: '[LOG] Hello from system' }],
      explanation: {
        icon: 'terminal',
        text: 'mod->process("Hello from system") — 调用模块处理函数',
        color: 'green',
        actor: 'CPU',
        detail: '通过接口调用 loggerProcess，输出"[LOG] Hello from system"。如果传入不同的模块，会执行不同的处理逻辑。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'func:loggerProcess',
      timing: 'runtime'
    },
    {
      step: 10,
      line: 45,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
      vars: { gLogger: { ops: { init: 'loggerInit', process: 'loggerProcess', cleanup: 'loggerCleanup' }, internalData: 'NULL' } },
      highlightVar: 'systemRun',
      isDanger: false,
      output: [{ type: 'success', text: '[LOG] Hello from system' }],
      explanation: {
        icon: 'check',
        text: 'mod->cleanup() — 调用模块清理函数',
        color: 'green',
        actor: 'CPU',
        detail: '通过接口调用 loggerCleanup，释放资源。完整的生命周期：init→process→cleanup。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'func:loggerCleanup',
      timing: 'runtime'
    },
    {
      step: 11,
      line: 51,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
      vars: { gLogger: { ops: { init: 'loggerInit', process: 'loggerProcess', cleanup: 'loggerCleanup' }, internalData: 'NULL' } },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Logger initialized' }, { type: 'success', text: '[LOG] Hello from system' }, { type: 'success', text: 'Logger cleanup' }],
      explanation: {
        icon: 'check',
        text: '模块化架构：接口定义→模块实现→系统调用',
        color: 'green',
        actor: 'Architect',
        detail: '模块化架构要点：1) 接口定义（ModuleInterface）2) 模块实现（LoggerModule）3) 系统通过接口调用 4) 新增模块无需修改系统代码。这是可扩展系统的基础。'
      },
      prediction: null,
      misconception: null,
      actor: 'Architect',
      target: 'exit',
      timing: 'runtime'
    }
  ],
  summary: {
    oneLiner: '模块化架构：接口定义（做什么）、模块实现（怎么做）、通过接口调用（依赖倒置）',
    pitfalls: [
      '接口设计应该稳定且抽象，避免暴露实现细节',
      '模块之间应该低耦合：通过接口通信，不直接依赖具体模块',
      '每个模块应该有完整的生命周期管理：init→process→cleanup'
    ],
    transferQuestion: '如何设计一个支持运行时动态加载插件的系统？（提示：dlopen/dlsym + 统一的插件接口）',
    miniExercise: {
      bugCode: '// 系统设计直接调用具体模块函数\nloggerProcess("msg");  // 这样有什么局限性？',
      hint: '直接依赖具体实现，无法替换模块，违反了依赖倒置原则'
    }
  }
};
