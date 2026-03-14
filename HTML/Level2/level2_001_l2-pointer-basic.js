window.LESSON_DATA = {
  meta: {
    id: 'l2-pointer-basic',
    title: '指针基础',
    chapter: 'level2',
    index: 1,
    filename: 'pointer-basic.c',
    keyPoints: ['指针声明', '解引用', '指针运算']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 4, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '42' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 整型变量' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'id', text: 'num' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 指针变量' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"num = %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"&num = %p\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'id', text: 'num' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"ptr = %p\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"*ptr = %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '100' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 通过指针修改 num' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"num after *ptr=100: %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'num', name: 'num', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'ptr', name: 'ptr', type: 'int*', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 2 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习指针基础', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 4, executedLines: [3], vars: { num: 42 }, highlightVar: 'num', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 int num = 42，整型变量', color: 'yellow', actor: 'CPU', detail: 'num 是普通整型变量，在栈上分配 4 字节空间，存储值 42。' }, prediction: { question: 'int 类型变量占用多少字节？', options: ['1 字节', '4 字节', '8 字节'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:num', timing: 'main-loop' },
    { step: 2, line: 5, executedLines: [3, 4], vars: { num: 42, ptr: '0x7ffc00' }, highlightVar: 'ptr', isDanger: false, output: [], explanation: { icon: 'pointer', text: '声明 int* ptr = &num，指针变量', color: 'blue', actor: 'CPU', detail: 'ptr 是指针变量，存储 num 的地址。&是取地址运算符，&num 得到 num 的内存地址。指针变量本身也占用内存（32 位系统 4 字节，64 位系统 8 字节）。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:ptr', timing: 'main-loop' },
    { step: 3, line: 6, executedLines: [3, 4, 5], vars: { num: 42, ptr: '0x7ffc00' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'num = 42' }], explanation: { icon: 'terminal', text: 'printf 输出 num = 42', color: 'green', actor: 'CPU', detail: '%d 是整型格式符，输出 num 的值 42。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 4, line: 7, executedLines: [3, 4, 5, 6], vars: { num: 42, ptr: '0x7ffc00' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'num = 42' }, { type: 'success', text: '&num = 0x7ffc00' }], explanation: { icon: 'terminal', text: 'printf 输出&num = 0x7ffc00', color: 'green', actor: 'CPU', detail: '%p 是指针格式符，输出内存地址（16 进制）。num 的地址是 0x7ffc00。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 5, line: 8, executedLines: [3, 4, 5, 6, 7], vars: { num: 42, ptr: '0x7ffc00' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'num = 42' }, { type: 'success', text: '&num = 0x7ffc00' }, { type: 'success', text: 'ptr = 0x7ffc00' }], explanation: { icon: 'terminal', text: 'printf 输出 ptr = 0x7ffc00', color: 'green', actor: 'CPU', detail: 'ptr 存储的是 num 的地址，所以 ptr 的值与&num 相同，都是 0x7ffc00。我们说 ptr"指向"num。' }, prediction: { question: 'ptr 变量的值是什么？', options: ['42', '0x7ffc00', '不确定'], answer: 1 }, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 6, line: 9, executedLines: [3, 4, 5, 6, 7, 8], vars: { num: 42, ptr: '0x7ffc00' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'num = 42' }, { type: 'success', text: '&num = 0x7ffc00' }, { type: 'success', text: 'ptr = 0x7ffc00' }, { type: 'success', text: '*ptr = 42' }], explanation: { icon: 'terminal', text: 'printf 输出*ptr = 42', color: 'green', actor: 'CPU', detail: '*是解引用运算符。*ptr 表示访问 ptr 指向地址的内容。ptr 指向 num，所以*ptr 等价于 num，值为 42。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 7, line: 10, executedLines: [3, 4, 5, 6, 7, 8, 9], vars: { num: 100, ptr: '0x7ffc00' }, highlightVar: 'num', isDanger: false, output: [{ type: 'success', text: 'num = 42' }, { type: 'success', text: '&num = 0x7ffc00' }, { type: 'success', text: 'ptr = 0x7ffc00' }, { type: 'success', text: '*ptr = 42' }], explanation: { icon: 'bolt', text: '*ptr = 100，通过指针修改 num 的值', color: 'green', actor: 'CPU', detail: '*ptr = 100 将 100 写入 ptr 指向的地址。因为 ptr 指向 num，这相当于 num = 100。这是指针的核心用途：通过地址间接访问和修改变量。' }, prediction: null, misconception: { title: '指针可以间接修改变量', text: '*ptr = 100 不是修改 ptr 本身，而是修改 ptr 指向地址的内容。ptr 仍指向同一个地址，但该地址的值变为 100。' }, actor: 'CPU', target: 'var:num', timing: 'main-loop' },
    { step: 8, line: 11, executedLines: [3, 4, 5, 6, 7, 8, 9, 10], vars: { num: 100, ptr: '0x7ffc00' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'num = 42' }, { type: 'success', text: '&num = 0x7ffc00' }, { type: 'success', text: 'ptr = 0x7ffc00' }, { type: 'success', text: '*ptr = 42' }, { type: 'success', text: 'num after *ptr=100: 100' }], explanation: { icon: 'terminal', text: 'printf 输出 num 已变为 100', color: 'green', actor: 'CPU', detail: '通过*ptr = 100，num 的值从 42 改为 100。这证明了指针可以间接修改变量。嵌入式开发中常用这个特性访问硬件寄存器。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '&取地址，*解引用，指针存储变量地址，可通过指针间接修改变量',
    pitfalls: [
      '指针必须先初始化（指向有效地址）才能解引用，否则是野指针',
      '*ptr = 100 修改的是 ptr 指向地址的内容，不是 ptr 本身',
      '指针变量本身也有地址，&ptr 得到指针变量的地址'
    ],
    transferQuestion: '如果 int* p = NULL，执行*p = 10 会发生什么？',
    miniExercise: {
      bugCode: 'int *p;\\n*p = 42;  // 这样写有什么问题？',
      hint: 'p 未初始化，是野指针，可能指向任意地址，解引用会导致未定义行为'
    }
  }
};
