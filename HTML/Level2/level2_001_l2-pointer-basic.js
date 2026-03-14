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
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'ptr' }, { type: 'op', text: '++' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 指针运算，+1 个 int 大小' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"ptr address: %p\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'num', name: 'num', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'ptr', name: 'ptr', type: 'int*', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 2 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习指针基础', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 4, executedLines: [3], vars: { num: 42 }, highlightVar: 'num', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 int num = 42', color: 'green', actor: 'CPU', detail: 'num 是整型变量，在栈上分配 4 字节空间，存储值 42。' }, prediction: { question: 'int 类型变量占用多少字节？', options: ['1 字节', '4 字节', '8 字节'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:num', timing: 'main-loop' },
    { step: 2, line: 5, executedLines: [3, 4], vars: { num: 42, ptr: '0x7ffc00' }, highlightVar: 'ptr', isDanger: false, output: [], explanation: { icon: 'pointer', text: '声明 int* ptr = &num', color: 'green', actor: 'CPU', detail: 'ptr 是指针变量，&是取地址运算符，&num 得到 num 的内存地址。ptr 存储这个地址，我们说 ptr"指向"num。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:ptr', timing: 'main-loop' },
    { step: 3, line: 6, executedLines: [3, 4, 5], vars: { num: 42, ptr: '0x7ffc04' }, highlightVar: 'ptr', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'ptr++，指针运算', color: 'purple', actor: 'ALU', detail: 'ptr++不是加 1，而是加 sizeof(int)=4 字节。ptr 从 0x7ffc00 变为 0x7ffc04。这是指针运算的核心特性：按类型大小缩放。' }, prediction: { question: 'int* ptr 执行 ptr++后，地址增加多少？', options: ['1', '4', '8'], answer: 1 }, misconception: { title: '指针运算按类型大小缩放', text: 'ptr++不是地址加 1，而是加 sizeof(*ptr)。int* 加 4，char* 加 1，double* 加 8。' }, actor: 'CPU', target: 'var:ptr', timing: 'main-loop' },
    { step: 4, line: 7, executedLines: [3, 4, 5, 6], vars: { num: 42, ptr: '0x7ffc04' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'ptr address: 0x7ffc04' }], explanation: { icon: 'terminal', text: 'printf 输出指针地址', color: 'green', actor: 'CPU', detail: '%p 格式符输出 16 进制地址。ptr 现在是 0x7ffc04，比原地址大 4。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '&取地址，*解引用，指针运算按类型大小缩放',
    pitfalls: [
      '指针未初始化就解引用是野指针，会导致未定义行为',
      'ptr++不是地址 +1，而是+sizeof(*ptr)',
      '指针类型必须与指向变量类型匹配，否则解引用会出错'
    ],
    transferQuestion: '如果 char* p 指向地址 0x1000，执行 p++后地址是多少？',
    miniExercise: {
      bugCode: 'int *p;\\n*p = 42;  // 有什么问题？',
      hint: 'p 未初始化，是野指针！应该先 p = &num;'
    }
  }
};
