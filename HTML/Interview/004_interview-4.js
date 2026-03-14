window.LESSON_DATA = {
  meta: {
    id: 'interview-4',
    title: '性能优化题',
    chapter: 'Interview',
    index: 4,
    filename: 'performance_optimization.c',
    keyPoints: ['循环展开', '缓存优化', '分支预测']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'N' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1000000' }] },
    { num: 5, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 6, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'slowSum' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'op', text: '*' }, { type: 'id', text: 'arr' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }] },
    { num: 7, tokens: [{ type: 'punc', text: '{' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'long' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Slow sum: %ld\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'punc', text: '}' }] },
    { num: 14, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 15, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'unrolledSum' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'op', text: '*' }, { type: 'id', text: 'arr' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }] },
    { num: 16, tokens: [{ type: 'punc', text: '{' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'long' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'ws', text: ' ' }, { type: 'op', text: '-' }, { type: 'ws', text: ' ' }, { type: 'num', text: '4' }, { type: 'punc', text: ';' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 20, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'op', text: '+' }, { type: 'num', text: '1' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'op', text: '+' }, { type: 'num', text: '2' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'op', text: '+' }, { type: 'num', text: '3' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 21, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '4' }, { type: 'punc', text: ';' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 24, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 25, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 26, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Unrolled sum: %ld\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 27, tokens: [{ type: 'punc', text: '}' }] },
    { num: 28, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 29, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'cacheFriendlySum' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'op', text: '*' }, { type: 'id', text: 'arr' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }] },
    { num: 30, tokens: [{ type: 'punc', text: '{' }] },
    { num: 31, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'long' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 32, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 33, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 34, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 35, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'punc', text: ';' }] },
    { num: 36, tokens: [{ type: 'punc', text: '}' }] },
    { num: 37, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 38, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'cacheUnfriendlySum' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'op', text: '*' }, { type: 'id', text: 'arr' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }] },
    { num: 39, tokens: [{ type: 'punc', text: '{' }] },
    { num: 40, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'long' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 41, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'stride' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '64' }, { type: 'punc', text: ';' }] },
    { num: 42, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'stride' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 43, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 44, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 45, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'punc', text: ';' }] },
    { num: 46, tokens: [{ type: 'punc', text: '}' }] },
    { num: 47, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 48, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }] },
    { num: 49, tokens: [{ type: 'punc', text: '{' }] },
    { num: 50, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'data' }, { type: 'punc', text: '[' }, { type: 'id', text: 'N' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 51, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'N' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'data' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'punc', text: ';' }] },
    { num: 52, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'slowSum' }, { type: 'punc', text: '(' }, { type: 'id', text: 'data' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'N' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 53, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'unrolledSum' }, { type: 'punc', text: '(' }, { type: 'id', text: 'data' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'N' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 54, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Cache friendly: faster (sequential access)\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 55, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Cache unfriendly: slower (stride=64)\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 56, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 57, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'data', name: 'data', type: 'int[N]', addr: '0x7fff00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'sum', name: 'sum', type: 'long', addr: '0x7fff10', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'i', name: 'i', type: 'int', addr: '0x7fff18', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习性能优化技巧', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 6,
      executedLines: [1, 2, 3, 4, 5],
      vars: {},
      highlightVar: 'data',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'warning',
        text: 'slowSum — 基础版本（每次迭代 1 个元素）',
        color: 'yellow',
        actor: 'Developer',
        detail: '基础版本：单层循环，每次迭代处理 1 个元素。循环条件判断 n 次，i++ 执行 n 次。这是对比的基准。'
      },
      prediction: {
        question: '循环展开（Loop Unrolling）的主要目的是什么？',
        options: ['减少代码行数', '减少循环控制开销', '让代码更难读'],
        answer: 1
      },
      misconception: null,
      actor: 'Developer',
      target: 'func:slowSum',
      timing: 'design-time'
    },
    {
      step: 2,
      line: 9,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8],
      vars: { data: '0x7fff00' },
      highlightVar: 'i',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'loop',
        text: 'for 循环 — 每次迭代：i++ 和 i<n 判断',
        color: 'yellow',
        actor: 'CPU',
        detail: '每次迭代需要：1) i<n 条件判断 2) i++ 自增 3) 跳转回循环头。这些都是额外开销，n 大时很可观。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'loop',
      timing: 'runtime'
    },
    {
      step: 3,
      line: 15,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      vars: { data: '0x7fff00' },
      highlightVar: 'sum',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: 'unrolledSum — 循环展开版本（每次 4 个元素）',
        color: 'green',
        actor: 'Developer',
        detail: '循环展开：每次迭代处理 4 个元素。循环次数从 n 减少到 n/4，循环控制开销减少 75%。这是常见的优化技巧。'
      },
      prediction: null,
      misconception: {
        title: '循环展开原理',
        text: '循环展开（Loop Unrolling）：1) 减少循环次数 2) 减少分支预测失败 3) 增加指令级并行 4) 代码体积变大。通常展开 4-8 倍效果最佳。'
      },
      actor: 'Developer',
      target: 'func:unrolledSum',
      timing: 'design-time'
    },
    {
      step: 4,
      line: 19,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      vars: { data: '0x7fff00', sum: 0 },
      highlightVar: 'i',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'loop',
        text: 'i <= n-4 — 主循环条件（保证有 4 个元素）',
        color: 'green',
        actor: 'CPU',
        detail: '主循环条件 i <= n-4，确保每次都有 4 个元素可访问。剩余不足 4 个的元素由后面的清理循环处理。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'loop',
      timing: 'runtime'
    },
    {
      step: 5,
      line: 20,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      vars: { data: '0x7fff00', sum: 0 },
      highlightVar: 'sum',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'bolt',
        text: '一次累加 4 个元素 — arr[i]+arr[i+1]+arr[i+2]+arr[i+3]',
        color: 'green',
        actor: 'CPU',
        detail: '一次迭代累加 4 个连续元素。CPU 可以利用指令级并行（ILP），同时执行多个加法。比 4 次独立迭代更快。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'calc',
      timing: 'runtime'
    },
    {
      step: 6,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      vars: { data: '0x7fff00', sum: 0 },
      highlightVar: 'i',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'shield',
        text: '清理循环 — 处理剩余不足 4 个的元素',
        color: 'green',
        actor: 'CPU',
        detail: '如果 n 不是 4 的倍数，剩余元素由清理循环处理。这是循环展开的标准做法，确保结果正确。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'loop',
      timing: 'runtime'
    },
    {
      step: 7,
      line: 29,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
      vars: { data: '0x7fff00', sum: 0 },
      highlightVar: 'data',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'cacheFriendlySum — 顺序访问数组（缓存友好）',
        color: 'green',
        actor: 'Architect',
        detail: '顺序访问 arr[0], arr[1], arr[2]... 这是缓存友好的：CPU 预取器会提前加载相邻数据到缓存，命中率极高。'
      },
      prediction: {
        question: '为什么顺序访问数组比随机访问快？',
        options: ['代码更简单', 'CPU 缓存预取（空间局部性）', '没有区别'],
        answer: 1
      },
      misconception: null,
      actor: 'Architect',
      target: 'func:cacheFriendlySum',
      timing: 'design-time'
    },
    {
      step: 8,
      line: 32,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      vars: { data: '0x7fff00', sum: 0 },
      highlightVar: 'i',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: '顺序访问 arr[i] — 每次 i++ 访问相邻内存',
        color: 'green',
        actor: 'CPU',
        detail: '顺序访问时，CPU 缓存行（Cache Line，通常 64 字节）会一次性加载多个连续元素。访问 arr[0] 时，arr[1..15] 也被加载到缓存。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'memory',
      timing: 'runtime'
    },
    {
      step: 9,
      line: 38,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
      vars: { data: '0x7fff00' },
      highlightVar: 'data',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'warning',
        text: 'cacheUnfriendlySum — 跨步访问（stride=64，缓存不友好）',
        color: 'red',
        actor: 'Architect',
        detail: '跨步访问：arr[0], arr[64], arr[128]... 每次访问间隔 64 个 int（256 字节）。跳出了缓存行范围，导致缓存命中率低。'
      },
      prediction: null,
      misconception: {
        title: '缓存行（Cache Line）',
        text: 'CPU 缓存以缓存行（Cache Line）为单位加载数据，通常 64 字节。顺序访问时，一行可容纳 16 个 int。跨步访问如果超过缓存行大小，会导致缓存失效。'
      },
      actor: 'Architect',
      target: 'func:cacheUnfriendlySum',
      timing: 'design-time'
    },
    {
      step: 10,
      line: 42,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
      vars: { data: '0x7fff00' },
      highlightVar: 'i',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'alert',
        text: 'i += stride (64) — 每次跳过 64 个元素',
        color: 'red',
        actor: 'CPU',
        detail: '每次访问间隔 64 个 int = 256 字节，远超缓存行大小（64 字节）。每次访问都可能需要从主存加载，速度慢得多。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'loop',
      timing: 'runtime'
    },
    {
      step: 11,
      line: 56,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
      vars: { data: '0x7fff00' },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Slow sum: ...' }, { type: 'success', text: 'Unrolled sum: ...' }, { type: 'success', text: 'Cache friendly: faster (sequential access)' }, { type: 'success', text: 'Cache unfriendly: slower (stride=64)' }],
      explanation: {
        icon: 'check',
        text: '性能优化要点：循环展开 + 缓存友好访问 + 分支预测',
        color: 'green',
        actor: 'Architect',
        detail: '性能优化技巧：1) 循环展开（减少控制开销）2) 顺序访问（缓存友好）3) 避免大跨步 4) 利用 SIMD 指令 5) 减少分支预测失败。先测量再优化。'
      },
      prediction: null,
      misconception: null,
      actor: 'Architect',
      target: 'exit',
      timing: 'runtime'
    }
  ],
  summary: {
    oneLiner: '性能优化：循环展开（减少控制开销）+ 顺序访问（缓存友好）+ 避免大跨步',
    pitfalls: [
      '循环展开会增加代码体积，过度展开可能导致指令缓存失效',
      '顺序访问数组时 CPU 会预取相邻数据到缓存，随机访问会破坏空间局部性',
      '跨步访问（stride）过大时，每次访问都超出缓存行，导致缓存命中率大幅下降'
    ],
    transferQuestion: '如何用 SIMD 指令进一步优化求和？（提示：__m128i 一次处理 4 个 int）',
    miniExercise: {
      bugCode: '// 链表遍历求和\nfor (Node* p = head; p != NULL; p = p->next) {\n    sum += p->value;\n}\n// 为什么链表遍历比数组慢？',
      hint: '链表节点在内存中不连续，每次 p->next 都可能访问随机地址，缓存命中率低。数组是连续的，顺序访问缓存友好。'
    }
  }
};
