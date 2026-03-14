window.LESSON_DATA = {
  meta: {
    id: 'l5-arch',
    title: '计算机体系结构基础',
    chapter: 'level5',
    index: 5,
    filename: 'computer-arch.c',
    keyPoints: ['冯诺依曼架构', '存储层次', '指令流水线']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'global_var' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '42' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 全局变量（数据段）' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'multiply' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'a' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'a' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 参数在栈/寄存器' }] },
    { num: 7, tokens: [{ type: 'punc', text: '}' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'x' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 局部变量（栈）' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'malloc' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 堆内存' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'x' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'result' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'multiply' }, { type: 'punc', text: '(' }, { type: 'id', text: 'x' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"x=%d, *ptr=%d, result=%d, global=%d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'x' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'result' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'global_var' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'free' }, { type: 'punc', text: '(' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'global_var', name: 'global_var', type: 'int', addr: '0x00401000', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'x', name: 'x', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 },
    { key: 'ptr', name: 'ptr', type: 'int*', addr: '0x7ffc04', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 4 },
    { key: 'result', name: 'result', type: 'int', addr: '0x7ffc08', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 6 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习计算机体系结构基础', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 3, executedLines: [], vars: { global_var: 42 }, highlightVar: 'global_var', isDanger: false, output: [], explanation: { icon: 'memory', text: 'int global_var = 42，存储在数据段', color: 'yellow', actor: 'CPU', detail: '全局变量存储在数据段（Data Segment），程序启动时分配，生命周期与程序相同。数据段地址通常固定（如 0x00401000）。' }, prediction: { question: '全局变量存储在哪里？', options: ['栈', '堆', '数据段'], answer: 2 }, misconception: null, actor: 'CPU', target: 'var:global_var', timing: 'static' },
    { step: 2, line: 5, executedLines: [1, 2, 3, 4], vars: { global_var: 42 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: 'multiply 函数定义', color: 'purple', actor: 'CPU', detail: '函数代码存储在代码段（Text Segment），只读。参数 a、b 通过栈或寄存器传递（取决于调用约定）。' }, prediction: null, misconception: null, actor: 'CPU', target: 'code', timing: 'function-def' },
    { step: 3, line: 10, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9], vars: { x: 10 }, highlightVar: 'x', isDanger: false, output: [], explanation: { icon: 'memory', text: 'int x = 10，局部变量存储在栈上', color: 'blue', actor: 'CPU', detail: '局部变量 x 存储在栈帧（Stack Frame）中。栈向低地址增长，函数调用时自动分配，函数返回时自动释放。地址如 0x7ffc00。' }, prediction: { question: '栈的生长方向是？', options: ['向高地址', '向低地址', '双向'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:x', timing: 'stack' },
    { step: 4, line: 11, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vars: { x: 10, ptr: '0x7f0000' }, highlightVar: 'ptr', isDanger: false, output: [], explanation: { icon: 'memory', text: 'int *ptr = malloc()，指针在栈上，内存在堆上', color: 'purple', actor: 'CPU', detail: 'ptr 本身是局部变量（栈上），但它指向的内存在堆上（Heap）。堆向高地址增长，手动管理（malloc/free）。' }, prediction: { question: 'malloc 分配的内存在哪里？', options: ['栈', '堆', '数据段'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:ptr', timing: 'heap' },
    { step: 5, line: 12, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], vars: { x: 10, ptr: '0x7f0000', '*ptr': 10 }, highlightVar: 'ptr', isDanger: false, output: [], explanation: { icon: 'bolt', text: '*ptr = x，通过指针写入堆内存', color: 'green', actor: 'CPU', detail: '*ptr = 10 将 x 的值写入堆内存。CPU 执行：1) 从栈读取 x；2) 从栈读取 ptr；3) 通过 ptr 地址写入堆内存。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:ptr', timing: 'store' },
    { step: 6, line: 13, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], vars: { x: 10, ptr: '0x7f0000', '*ptr': 10, result: 100 }, highlightVar: 'result', isDanger: false, output: [], explanation: { icon: 'cpu', text: 'result = multiply(x, *ptr) = 10 * 10 = 100', color: 'orange', actor: 'CPU', detail: '函数调用：1) 参数 x=10 和*ptr=10 压栈/放入寄存器；2) 跳转到 multiply；3) 执行乘法；4) 返回值 100 存入 result。这是冯诺依曼架构的"存储程序"原理。' }, prediction: { question: '冯诺依曼架构的核心思想是什么？', options: ['并行计算', '存储程序', '分布式'], answer: 1 }, misconception: { title: '冯诺依曼瓶颈', text: '指令和数据共享同一总线，同一时刻只能取指或访存。哈佛架构将指令和数据分开，可并行访问。' }, actor: 'CPU', target: 'var:result', timing: 'call' },
    { step: 7, line: 14, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], vars: { x: 10, ptr: '0x7f0000', '*ptr': 10, result: 100 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'x=10, *ptr=10, result=100, global=42' }], explanation: { icon: 'terminal', text: 'printf 输出所有变量值', color: 'green', actor: 'CPU', detail: '验证各变量值正确。内存布局总结：代码段→数据段→堆 (向上) ... 空闲 ... 栈 (向下)。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'output' },
    { step: 8, line: 15, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], vars: { ptr: 'freed' }, highlightVar: 'ptr', isDanger: false, output: [{ type: 'success', text: 'x=10, *ptr=10, result=100, global=42' }], explanation: { icon: 'check', text: 'free(ptr) 释放堆内存', color: 'green', actor: 'CPU', detail: 'free 将堆内存归还给系统。ptr 成为野指针（仍保存原地址，但内存已失效）。应该立即 ptr = NULL。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:ptr', timing: 'cleanup' },
    { step: 9, line: 16, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], vars: {}, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'x=10, *ptr=10, result=100, global=42' }], explanation: { icon: 'check', text: '程序结束，栈帧自动释放', color: 'green', actor: 'CPU', detail: 'main 函数返回，栈帧自动释放（x、ptr、result 自动销毁）。全局变量 global_var 在程序结束时释放。完整内存生命周期演示完成。' }, prediction: null, misconception: null, actor: 'CPU', target: 'exit', timing: 'exit' }
  ],
  summary: {
    oneLiner: '冯诺依曼架构：代码段、数据段、堆、栈；堆向上增长、栈向下增长',
    pitfalls: [
      '栈（Stack）：局部变量，自动管理，向低地址增长',
      '堆（Heap）：malloc 分配，手动管理，向高地址增长',
      '数据段（Data）：全局变量，程序启动时分配，生命周期与程序相同'
    ],
    transferQuestion: '为什么递归过深会导致"栈溢出"？',
    miniExercise: {
      bugCode: 'void foo() {\\n    int arr[1000000];  // 危险！\\n    foo();  // 无限递归\\n}',
      hint: '大数组占用大量栈空间，无限递归不断创建新栈帧，最终耗尽栈空间导致 Stack Overflow。'
    }
  }
};
