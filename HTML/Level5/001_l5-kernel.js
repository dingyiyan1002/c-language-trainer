window.LESSON_DATA = {
  meta: {
    id: 'l5-kernel',
    title: '内核编程基础',
    chapter: 'Level5',
    index: 1,
    filename: 'kernel_module.c',
    keyPoints: ['内核模块', '内核空间', '内核 API']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<linux/init.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<linux/module.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<linux/kernel.h>' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: '__init' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'moduleInit' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 6, tokens: [{ type: 'punc', text: '{' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printk' }, { type: 'punc', text: '(' }, { type: 'id', text: 'KERN_INFO' }, { type: 'str', text: '"Module loaded\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'punc', text: '}' }] },
    { num: 10, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 11, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: '__exit' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'moduleExit' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 12, tokens: [{ type: 'punc', text: '{' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printk' }, { type: 'punc', text: '(' }, { type: 'id', text: 'KERN_INFO' }, { type: 'str', text: '"Module exiting\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'punc', text: '}' }] },
    { num: 15, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 16, tokens: [{ type: 'fn', text: 'module_init' }, { type: 'punc', text: '(' }, { type: 'id', text: 'moduleInit' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'fn', text: 'module_exit' }, { type: 'punc', text: '(' }, { type: 'id', text: 'moduleExit' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'pp', text: 'MODULE_LICENSE' }, { type: 'punc', text: '(' }, { type: 'str', text: '"GPL"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'pp', text: 'MODULE_AUTHOR' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Embedded Dev"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] }
  ],
  varConfig: [
    { key: 'moduleInit', name: 'moduleInit', type: 'int __init(void)', addr: '0xC0001000', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'moduleExit', name: 'moduleExit', type: 'void __exit(void)', addr: '0xC0001100', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'module_init', name: 'module_init', type: 'macro', addr: 'N/A', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习 Linux 内核模块编程', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 5,
      executedLines: [],
      vars: {},
      highlightVar: 'moduleInit',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'static int __init moduleInit(void) — 模块初始化函数',
        color: 'yellow',
        actor: 'Developer',
        detail: '__init 宏标记初始化函数，函数执行后内核可回收此段内存。static 限制作用域为文件内可见。返回 0 表示成功，负数表示失败。这是模块的入口点。'
      },
      prediction: {
        question: '__init 宏的作用是什么？',
        options: ['标记函数为初始化函数，可被回收', '增加函数优先级', '使函数可被外部调用'],
        answer: 0
      },
      misconception: null,
      actor: 'Developer',
      target: 'func:moduleInit',
      timing: 'design-time'
    },
    {
      step: 2,
      line: 7,
      executedLines: [5],
      vars: {},
      highlightVar: 'moduleInit',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: 'printk(KERN_INFO "Module loaded\\n") — 内核日志输出',
        color: 'green',
        actor: 'Kernel',
        detail: 'printk 是内核中的 printf 函数，输出到内核日志缓冲区。KERN_INFO 是日志级别（还有 KERN_ERR、KERN_WARNING 等）。用户可用 dmesg 命令查看内核日志。'
      },
      prediction: null,
      misconception: {
        title: 'printk vs printf',
        text: 'printk 运行在内核空间，不能访问用户空间数据。 printk 总是输出到内核日志，不直接显示到终端。内核中没有标准库函数，必须用内核 API。'
      },
      actor: 'Kernel',
      target: 'kmsg',
      timing: 'load-time'
    },
    {
      step: 3,
      line: 11,
      executedLines: [5, 6, 7, 8, 9, 10],
      vars: {},
      highlightVar: 'moduleExit',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'static void __exit moduleExit(void) — 模块退出函数',
        color: 'purple',
        actor: 'Developer',
        detail: '__exit 宏标记清理函数，在模块卸载时执行。此函数中应释放所有资源（内存、设备、定时器等）。void 返回值，不需要返回状态。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'func:moduleExit',
      timing: 'design-time'
    },
    {
      step: 4,
      line: 13,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12],
      vars: {},
      highlightVar: 'moduleExit',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: 'printk(KERN_INFO "Module exiting\\n") — 退出日志',
        color: 'green',
        actor: 'Kernel',
        detail: '模块卸载时输出日志。实际驱动中，这里应该调用资源释放函数（kfree、设备注销等）。'
      },
      prediction: null,
      misconception: null,
      actor: 'Kernel',
      target: 'kmsg',
      timing: 'unload-time'
    },
    {
      step: 5,
      line: 16,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: {},
      highlightVar: 'module_init',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'link',
        text: 'module_init(moduleInit) — 注册初始化函数',
        color: 'blue',
        actor: 'Kernel',
        detail: 'module_init 宏将 moduleInit 函数注册为模块入口点。内核加载模块时自动调用此函数。这是内核模块的"main 函数"。'
      },
      prediction: {
        question: 'module_init 宏的作用是什么？',
        options: ['分配内存', '注册模块入口函数', '启动内核线程'],
        answer: 1
      },
      misconception: null,
      actor: 'Kernel',
      target: 'module:register',
      timing: 'load-time'
    },
    {
      step: 6,
      line: 17,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      vars: {},
      highlightVar: 'module_exit',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'link',
        text: 'module_exit(moduleExit) — 注册退出函数',
        color: 'blue',
        actor: 'Kernel',
        detail: 'module_exit 宏注册模块卸载时的清理函数。insmod 时不执行，rmmod 时内核调用此函数。驱动必须正确释放资源，否则可能导致系统不稳定。'
      },
      prediction: null,
      misconception: null,
      actor: 'Kernel',
      target: 'module:register',
      timing: 'unload-time'
    },
    {
      step: 7,
      line: 18,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'info',
        text: 'MODULE_LICENSE("GPL") — 声明模块许可证',
        color: 'green',
        actor: 'Developer',
        detail: '模块许可证声明，必须是 GPL 或兼容许可证才能使用内核中的导出符号。其他选项："Proprietary"（专有）、"Dual BSD/GPL"等。未声明可能导致警告。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'module:meta',
      timing: 'compile-time'
    },
    {
      step: 8,
      line: 19,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'info',
        text: 'MODULE_AUTHOR("Embedded Dev") — 声明模块作者',
        color: 'blue',
        actor: 'Developer',
        detail: '模块元数据声明。还有 MODULE_DESCRIPTION("描述")、MODULE_VERSION("1.0")等。modinfo 命令可查看所有元数据。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'module:meta',
      timing: 'compile-time'
    },
    {
      step: 9,
      line: 19,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Module loaded' }],
      explanation: {
        icon: 'check',
        text: '内核模块：insmod 加载→module_init 执行→rmmod 卸载→module_exit 执行',
        color: 'green',
        actor: 'Kernel',
        detail: '内核模块开发要点：1) __init/__exit 标记 2) printk 日志 3) module_init/exit 注册 4) 资源正确释放 5) 许可证声明。常用命令：insmod、rmmod、lsmod、dmesg、modinfo。'
      },
      prediction: null,
      misconception: null,
      actor: 'Kernel',
      target: 'exit',
      timing: 'runtime'
    }
  ],
  summary: {
    oneLiner: '内核模块：__init 初始化、__exit 清理、module_init/exit 注册、printk 日志',
    pitfalls: [
      '内核空间不能用 printf、malloc 等用户空间函数，必须用内核 API（printk、kmalloc 等）',
      '__exit 函数在模块内置到内核时可能被优化掉，只适用于模块形式',
      '忘记释放资源（内存、设备、中断）会导致系统资源泄漏甚至崩溃'
    ],
    transferQuestion: '如何创建一个带参数的内核模块？（提示：module_param 宏）',
    miniExercise: {
      bugCode: 'static int __init myInit(void) {\n    printf("Hello");  // 内核中这样写有什么问题？\n    return 0;\n}',
      hint: '内核空间没有标准库，printf 不可用，应该用 printk'
    }
  }
};
