window.LESSON_DATA = {
  meta: {
    id: 'l3-memory',
    title: '动态内存管理',
    chapter: 'level3',
    index: 1,
    filename: 'memory-malloc.c',
    keyPoints: ['malloc', 'free', '内存泄漏']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdlib.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'malloc' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'num', text: '5' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'ptr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 7, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[ERROR] malloc failed!\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '5' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 11, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Array: %d %d %d %d %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: '[' }, { type: 'num', text: '0' }, { type: 'punc', text: ']' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: '[' }, { type: 'num', text: '1' }, { type: 'punc', text: ']' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: '[' }, { type: 'num', text: '2' }, { type: 'punc', text: ']' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: '[' }, { type: 'num', text: '3' }, { type: 'punc', text: ']' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: '[' }, { type: 'num', text: '4' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'free' }, { type: 'punc', text: '(' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 释放内存' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'ptr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 避免野指针' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'ptr', name: 'ptr', type: 'int*', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'i', name: 'i', type: 'int', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习动态内存管理', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 5, executedLines: [3, 4], vars: { ptr: 'heap_addr' }, highlightVar: 'ptr', isDanger: false, output: [], explanation: { icon: 'memory', text: 'malloc 分配 5 个 int 的堆内存', color: 'yellow', actor: 'CPU', detail: 'malloc(sizeof(int)*5) 在堆上分配 20 字节 (5×4)。返回首地址存入 ptr。堆内存生命周期由程序员控制，不会自动释放。必须检查返回值是否为 NULL（分配失败）。' }, prediction: { question: 'malloc 分配失败返回什么？', options: ['0', 'NULL', '-1'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:ptr', timing: 'main-loop' },
    { step: 2, line: 6, executedLines: [3, 4, 5], vars: { ptr: 'heap_addr' }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'target', text: '检查 ptr == NULL，内存分配是否成功', color: 'orange', actor: 'CPU', detail: 'malloc 可能失败（内存不足时返回 NULL）。必须检查！这是良好的编程习惯。嵌入式系统中内存有限，malloc 失败是可能的。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'condition-check' },
    { step: 3, line: 10, executedLines: [3, 4, 5, 6, 7, 8, 9], vars: { ptr: 'heap_addr', i: 0 }, highlightVar: 'i', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'for 循环初始化数组，i=0', color: 'green', actor: 'CPU', detail: '通过 ptr[i] 访问堆内存，等价于*(ptr+i)。malloc 返回的内存可以像数组一样使用。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:i', timing: 'loop-init' },
    { step: 4, line: 11, executedLines: [3, 4, 5, 6, 7, 8, 9, 10], vars: { ptr: [0, 0, 0, 0, 0], i: 0 }, highlightVar: 'ptr', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'ptr[0] = 0*10 = 0', color: 'green', actor: 'CPU', detail: '第一次循环：ptr[0] = 0。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:ptr', timing: 'loop-body' },
    { step: 5, line: 10, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11], vars: { ptr: [0, 0, 0, 0, 0], i: 1 }, highlightVar: 'i', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'i++ 变为 1，继续循环', color: 'purple', actor: 'CPU', detail: 'i 自增为 1，1<5 为真，继续循环。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:i', timing: 'loop-iter' },
    { step: 6, line: 11, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 10], vars: { ptr: [0, 10, 0, 0, 0], i: 1 }, highlightVar: 'ptr', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'ptr[1] = 1*10 = 10', color: 'green', actor: 'CPU', detail: '第二次循环：ptr[1] = 10。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:ptr', timing: 'loop-body' },
    { step: 7, line: 12, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11], vars: { ptr: [0, 10, 20, 30, 40], i: 4 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'check', text: '循环结束，数组初始化为 [0,10,20,30,40]', color: 'green', actor: 'CPU', detail: '为简化演示，直接到循环结束。堆内存已填充数据。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'loop-exit' },
    { step: 8, line: 13, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 12], vars: { ptr: [0, 10, 20, 30, 40] }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Array: 0 10 20 30 40' }], explanation: { icon: 'terminal', text: 'printf 输出数组内容', color: 'green', actor: 'CPU', detail: '验证堆内存已正确初始化。动态分配的内存可以像静态数组一样访问。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 9, line: 14, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 12, 13], vars: { ptr: 'freed' }, highlightVar: 'ptr', isDanger: false, output: [{ type: 'success', text: 'Array: 0 10 20 30 40' }], explanation: { icon: 'bolt', text: 'free(ptr) 释放堆内存', color: 'green', actor: 'CPU', detail: 'free 释放 malloc 分配的内存。必须释放！否则会导致内存泄漏（程序长期运行后内存耗尽）。释放后的 ptr 成为野指针。' }, prediction: null, misconception: { title: 'free 后必须将指针置为 NULL', text: 'free(ptr) 后 ptr 仍保存原地址，但内存已释放。再次访问会导致未定义行为。应该立即 ptr = NULL，避免野指针。' }, actor: 'CPU', target: 'var:ptr', timing: 'main-loop' },
    { step: 10, line: 15, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 12, 13, 14], vars: { ptr: null }, highlightVar: 'ptr', isDanger: false, output: [{ type: 'success', text: 'Array: 0 10 20 30 40' }], explanation: { icon: 'bolt', text: 'ptr = NULL，避免野指针', color: 'green', actor: 'CPU', detail: 'free 后立即置 NULL 是安全编程的最佳实践。NULL 指针可以被安全检查，野指针不能。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:ptr', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: 'malloc 分配堆内存，free 释放，必须检查 NULL，释放后置 NULL 避免野指针',
    pitfalls: [
      'malloc 可能失败返回 NULL，必须检查结果',
      'malloc 分配的内存必须 free 释放，否则内存泄漏',
      'free 后指针成为野指针，应该立即置为 NULL'
    ],
    transferQuestion: '如果 malloc 后不检查 NULL 就直接使用，可能发生什么？',
    miniExercise: {
      bugCode: 'int *p = malloc(100);\\n// 使用 p...\\n// 忘记 free 了！',
      hint: '每次 malloc 都必须配对 free，否则程序长期运行会内存耗尽（内存泄漏）'
    }
  }
};
