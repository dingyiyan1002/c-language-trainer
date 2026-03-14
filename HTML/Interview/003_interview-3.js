window.LESSON_DATA = {
  meta: {
    id: 'interview-3',
    title: 'Bug 修复题',
    chapter: 'Interview',
    index: 3,
    filename: 'bug_fix.c',
    keyPoints: ['内存泄漏', '野指针', '重复释放']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdlib.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<string.h>' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'buggyGetString' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 6, tokens: [{ type: 'punc', text: '{' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: '[' }, { type: 'num', text: '64' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'strcpy' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"Hello World"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'punc', text: '}' }] },
    { num: 11, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 12, tokens: [{ type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'fixedGetString' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 13, tokens: [{ type: 'punc', text: '{' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'fn', text: 'malloc' }, { type: 'punc', text: '(' }, { type: 'num', text: '64' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'strcpy' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"Hello World"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'punc', text: '}' }] },
    { num: 19, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 20, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'leakyFunction' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 21, tokens: [{ type: 'punc', text: '{' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr1' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'fn', text: 'malloc' }, { type: 'punc', text: '(' }, { type: 'num', text: '100' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr2' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr1' }, { type: 'punc', text: ';' }] },
    { num: 24, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'free' }, { type: 'punc', text: '(' }, { type: 'id', text: 'ptr1' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 25, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'free' }, { type: 'punc', text: '(' }, { type: 'id', text: 'ptr2' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 26, tokens: [{ type: 'punc', text: '}' }] },
    { num: 27, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 28, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'fixedFunction' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 29, tokens: [{ type: 'punc', text: '{' }] },
    { num: 30, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'fn', text: 'malloc' }, { type: 'punc', text: '(' }, { type: 'num', text: '100' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 31, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'op', text: '!' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'return' }, { type: 'punc', text: ';' }] },
    { num: 32, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'memset' }, { type: 'punc', text: '(' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '100' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 33, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Using ptr: %p\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 34, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'free' }, { type: 'punc', text: '(' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 35, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'ptr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ';' }] },
    { num: 36, tokens: [{ type: 'punc', text: '}' }] },
    { num: 37, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 38, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }] },
    { num: 39, tokens: [{ type: 'punc', text: '{' }] },
    { num: 40, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'str' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'fixedGetString' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 41, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'str' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 42, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Got string: %s\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'str' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 43, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'free' }, { type: 'punc', text: '(' }, { type: 'id', text: 'str' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 44, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'str' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ';' }] },
    { num: 45, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 46, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'fixedFunction' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 47, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 48, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'buffer', name: 'buffer', type: 'char*', addr: '0xHeap002', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'ptr1', name: 'ptr1', type: 'char*', addr: '0x7fff10', glowColor: 'rgba(239,68,68,0.35)', accentCls: 'text-red-400', badgeCls: 'text-red-400 border-red-500/30 bg-red-500/12', appearStep: 2 },
    { key: 'ptr2', name: 'ptr2', type: 'char*', addr: '0x7fff18', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习 Bug 修复题', color: 'blue', actor: null, detail: null },
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
      highlightVar: 'buffer',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'warning',
        text: 'buggyGetString — 返回局部变量地址（野指针）',
        color: 'red',
        actor: 'Interviewer',
        detail: '经典面试题：返回栈上局部变量的地址。函数返回后 buffer 栈帧被销毁，返回的指针成为野指针，访问它会导致未定义行为。'
      },
      prediction: {
        question: '为什么不能返回局部变量的地址？',
        options: ['编译器会报错', '函数返回后栈帧销毁，指针失效', '内存不够'],
        answer: 1
      },
      misconception: null,
      actor: 'Interviewer',
      target: 'func:buggyGetString',
      timing: 'design-time'
    },
    {
      step: 2,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6],
      vars: {},
      highlightVar: 'buffer',
      isDanger: true,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'char buffer[64] — 栈上局部变量',
        color: 'red',
        actor: 'CPU',
        detail: 'buffer 分配在栈上（stack）。函数返回时，这片栈空间会被回收，可能被后续函数调用覆盖。返回它的地址是危险的。'
      },
      prediction: null,
      misconception: {
        title: '栈 vs 堆',
        text: '栈（stack）：自动管理，函数返回时销毁。堆（heap）：手动 malloc/free，生命周期由程序员控制。返回数据给调用者必须用堆内存。'
      },
      actor: 'CPU',
      target: 'stack',
      timing: 'runtime'
    },
    {
      step: 3,
      line: 12,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      vars: {},
      highlightVar: 'buffer',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: 'fixedGetString — 修复版本（使用 malloc）',
        color: 'green',
        actor: 'Developer',
        detail: '修复方案：用 malloc 分配堆内存。堆内存在函数返回后仍然有效，调用者负责 free。这是正确的做法。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'func:fixedGetString',
      timing: 'design-time'
    },
    {
      step: 4,
      line: 14,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: {},
      highlightVar: 'buffer',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'char* buffer = malloc(64) — 分配堆内存',
        color: 'green',
        actor: 'OS',
        detail: 'malloc 从堆上分配 64 字节。这片内存在函数返回后仍然有效，直到调用者显式 free。注意检查返回值是否为 NULL。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'heap',
      timing: 'runtime'
    },
    {
      step: 5,
      line: 20,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      vars: { buffer: '0xHeap002' },
      highlightVar: 'ptr1',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'warning',
        text: 'leakyFunction — 重复释放（double free）',
        color: 'red',
        actor: 'Interviewer',
        detail: 'ptr1 和 ptr2 指向同一块内存。free(ptr1) 后，ptr2 成为悬空指针。free(ptr2) 是重复释放，会导致堆损坏和安全漏洞。'
      },
      prediction: {
        question: 'double free 有什么危害？',
        options: ['程序变慢', '堆损坏，可能被利用执行恶意代码', '没有危害'],
        answer: 1
      },
      misconception: null,
      actor: 'Interviewer',
      target: 'func:leakyFunction',
      timing: 'design-time'
    },
    {
      step: 6,
      line: 22,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      vars: { buffer: '0xHeap002' },
      highlightVar: 'ptr1',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'pointer',
        text: 'char* ptr1 = malloc(100) — 分配 100 字节',
        color: 'yellow',
        actor: 'OS',
        detail: 'ptr1 指向堆上 100 字节的内存块。这是有效的分配，没有错误。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'heap',
      timing: 'runtime'
    },
    {
      step: 7,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      vars: { buffer: '0xHeap002', ptr1: '0xHeap003' },
      highlightVar: 'ptr2',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'alert',
        text: 'char* ptr2 = ptr1 — 两个指针指向同一块内存',
        color: 'red',
        actor: 'CPU',
        detail: 'ptr2 现在和 ptr1 指向同一地址（0xHeap003）。这不是内存泄漏，但后续如果分别 free 会导致 double free。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:ptr2',
      timing: 'runtime'
    },
    {
      step: 8,
      line: 24,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      vars: { buffer: '0xHeap002', ptr1: '0xHeap003', ptr2: '0xHeap003' },
      highlightVar: 'ptr1',
      isDanger: true,
      output: [],
      explanation: {
        icon: 'alert',
        text: 'free(ptr1) — 第一次释放',
        color: 'red',
        actor: 'OS',
        detail: '第一次 free 正确释放了内存。但 ptr2 仍然指向这个地址，成为悬空指针（dangling pointer）。'
      },
      prediction: null,
      misconception: {
        title: '悬空指针',
        text: '悬空指针：指向已释放内存的指针。访问悬空指针是未定义行为。修复：free 后立即将指针设为 NULL。'
      },
      actor: 'OS',
      target: 'heap',
      timing: 'runtime'
    },
    {
      step: 9,
      line: 25,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      vars: { buffer: '0xHeap002', ptr1: '0xHeap003', ptr2: '0xHeap003' },
      highlightVar: 'ptr2',
      isDanger: true,
      output: [],
      explanation: {
        icon: 'error',
        text: 'free(ptr2) — 重复释放（double free）',
        color: 'red',
        actor: 'OS',
        detail: 'free(ptr2) 是重复释放！同一块内存被 free 两次，会导致堆管理器元数据损坏，可能被攻击者利用执行恶意代码。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'heap',
      timing: 'runtime'
    },
    {
      step: 10,
      line: 28,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
      vars: { buffer: '0xHeap002' },
      highlightVar: 'ptr1',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: 'fixedFunction — 正确的内存管理',
        color: 'green',
        actor: 'Developer',
        detail: '修复版本：1) malloc 分配 2) NULL 检查 3) 使用内存 4) free 释放 5) ptr=NULL。完整的生命周期管理。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'func:fixedFunction',
      timing: 'design-time'
    },
    {
      step: 11,
      line: 35,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      vars: { buffer: '0xHeap002' },
      highlightVar: 'ptr1',
      isDanger: false,
      output: [{ type: 'success', text: 'Using ptr: 0x...' }],
      explanation: {
        icon: 'shield',
        text: 'ptr = NULL — free 后置为 NULL（防止悬空指针）',
        color: 'green',
        actor: 'CPU',
        detail: 'free 后立即 ptr=NULL 是好习惯。即使后续意外再次 free(NULL) 也是安全的（free(NULL) 什么都不做）。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:ptr',
      timing: 'runtime'
    },
    {
      step: 12,
      line: 47,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
      vars: { buffer: '0xHeap002' },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Using ptr: 0x...' }, { type: 'success', text: 'Got string: Hello World' }],
      explanation: {
        icon: 'check',
        text: 'Bug 修复要点：不返回局部变量地址 + free 后置 NULL + 避免 double free',
        color: 'green',
        actor: 'Interviewer',
        detail: '面试要点：1) 不返回栈上地址 2) malloc 后检查 NULL 3) free 后置 NULL 4) 避免重复释放 5) 谁分配谁释放原则。'
      },
      prediction: null,
      misconception: null,
      actor: 'Interviewer',
      target: 'exit',
      timing: 'runtime'
    }
  ],
  summary: {
    oneLiner: 'Bug 修复：不返回局部变量地址 + free 后置 NULL + 避免 double free',
    pitfalls: [
      '返回栈上局部变量地址是经典错误，函数返回后栈帧销毁，指针成为野指针',
      'free 后必须将指针置为 NULL，否则成为悬空指针，访问会导致未定义行为',
      'double free 会损坏堆管理器元数据，可能被利用执行恶意代码，是严重的安全漏洞'
    ],
    transferQuestion: '如何实现一个安全的 strdup 函数？（提示：malloc+strcpy+NULL 检查）',
    miniExercise: {
      bugCode: 'void process() {\n    char* buf = (char*)malloc(256);\n    // ... 使用 buf\n    free(buf);\n    // 忘记置 NULL，后续可能误用\n    if (buf != NULL) {\n        printf("Still valid");  // 实际上 buf 是悬空指针！\n    }\n}',
      hint: 'free(buf) 后 buf 仍保存原地址值（不是 NULL），应该立即 free(buf); buf = NULL;'
    }
  }
};
