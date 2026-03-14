window.LESSON_DATA = {
  meta: {
    id: 'l5-perf',
    title: '性能优化',
    chapter: 'Level5',
    index: 3,
    filename: 'perf_optimization.c',
    keyPoints: ['算法优化', '内存优化', '编译优化']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<string.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdlib.h>' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SIZE' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1000000' }] },
    { num: 6, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 7, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'slowSum' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'arr' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }] },
    { num: 8, tokens: [{ type: 'punc', text: '{' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'long' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 11, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'j' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'j' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'j' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 12, tokens: [{ type: 'ws', text: '            ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'id', text: 'j' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }, { type: 'punc', text: '}' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Slow sum: %ld\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'punc', text: '}' }] },
    { num: 16, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 17, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'fastSum' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'arr' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }] },
    { num: 18, tokens: [{ type: 'punc', text: '{' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'long' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 21, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Fast sum: %ld\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 24, tokens: [{ type: 'punc', text: '}' }] },
    { num: 25, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 26, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 27, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'data' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'fn', text: 'malloc' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SIZE' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 28, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SIZE' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'data' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'punc', text: ';' }] },
    { num: 29, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'slowSum' }, { type: 'punc', text: '(' }, { type: 'id', text: 'data' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SIZE' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 30, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'fastSum' }, { type: 'punc', text: '(' }, { type: 'id', text: 'data' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SIZE' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 31, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'free' }, { type: 'punc', text: '(' }, { type: 'id', text: 'data' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 32, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 33, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'data', name: 'data', type: 'int*', addr: '0xHeap001', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'sum', name: 'sum', type: 'long', addr: '0x7fff10', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'i', name: 'i', type: 'int', addr: '0x7fff14', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习代码性能优化技术', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6],
      vars: {},
      highlightVar: 'data',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'warning',
        text: 'slowSum — O(n²) 算法示例（性能差）',
        color: 'red',
        actor: 'Developer',
        detail: '这是一个低效的求和示例：双重循环，时间复杂度 O(n²)。n=100 万时，内层循环执行约 5000 亿次。这是典型的算法性能问题。'
      },
      prediction: {
        question: 'slowSum 的时间复杂度是多少？',
        options: ['O(n)', 'O(n²)', 'O(log n)'],
        answer: 1
      },
      misconception: null,
      actor: 'Developer',
      target: 'func:slowSum',
      timing: 'design-time'
    },
    {
      step: 2,
      line: 10,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      vars: {},
      highlightVar: 'i',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'loop',
        text: '外层循环 i 从 0 到 n-1',
        color: 'yellow',
        actor: 'CPU',
        detail: '外层循环执行 n 次。每次内层循环从 i 到 n-1，总共执行 n+(n-1)+(n-2)+...+1 = n(n+1)/2 次。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'loop:outer',
      timing: 'runtime'
    },
    {
      step: 3,
      line: 11,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      vars: {},
      highlightVar: 'i',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'loop',
        text: '内层循环 j 从 i 到 n-1 — 重复计算',
        color: 'red',
        actor: 'CPU',
        detail: '内层循环导致大量重复计算：arr[0] 被加 n 次，arr[1] 被加 n-1 次... 这是典型的 O(n²) 模式。应该只遍历一次数组。'
      },
      prediction: null,
      misconception: {
        title: '嵌套循环的性能陷阱',
        text: '嵌套循环不一定是问题，但要警惕：1) 是否真的需要两层 2) 内层是否从 0 开始（可能重复）3) 能否合并为单层 4) 有无数学公式可用。'
      },
      actor: 'CPU',
      target: 'loop:inner',
      timing: 'runtime'
    },
    {
      step: 4,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      vars: {},
      highlightVar: 'data',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: 'fastSum — O(n) 算法（优化后）',
        color: 'green',
        actor: 'Developer',
        detail: '优化版本：单层循环，时间复杂度 O(n)。n=100 万时，只执行 100 万次加法。比 O(n²) 快 50 万倍！这是算法优化的力量。'
      },
      prediction: {
        question: '如何进一步优化求和？',
        options: ['用浮点数', '用 SIMD 指令', '增加循环次数'],
        answer: 1
      },
      misconception: null,
      actor: 'Developer',
      target: 'func:fastSum',
      timing: 'design-time'
    },
    {
      step: 5,
      line: 20,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      vars: {},
      highlightVar: 'i',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'loop',
        text: '单层循环遍历数组一次',
        color: 'green',
        actor: 'CPU',
        detail: '每个元素只访问一次，累加到 sum。这是最优的算法复杂度（必须看每个元素至少一次）。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'loop',
      timing: 'runtime'
    },
    {
      step: 6,
      line: 27,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      vars: { data: '0xHeap001' },
      highlightVar: 'data',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'malloc 分配 100 万元素数组（约 4MB）',
        color: 'yellow',
        actor: 'OS',
        detail: '动态分配大数组。sizeof(int)*SIZE = 4*1000000 = 4MB。内存分配在堆上。注意检查返回值是否为 NULL（生产代码）。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'heap',
      timing: 'runtime'
    },
    {
      step: 7,
      line: 28,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
      vars: { data: '0xHeap001' },
      highlightVar: 'data',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '初始化数组：data[i] = i',
        color: 'blue',
        actor: 'CPU',
        detail: '用索引值填充数组。这是顺序写入，CPU 缓存友好（空间局部性好）。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:data',
      timing: 'runtime'
    },
    {
      step: 8,
      line: 29,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
      vars: { data: '0xHeap001', sum: 0 },
      highlightVar: 'sum',
      isDanger: false,
      output: [{ type: 'warning', text: 'Slow sum: ... (耗时很长)' }],
      explanation: {
        icon: 'clock',
        text: '调用 slowSum — O(n²) 执行很慢',
        color: 'red',
        actor: 'CPU',
        detail: 'slowSum 执行 5000 亿次加法，可能需要数分钟甚至更久。这是算法复杂度的实际影响。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'func:slowSum',
      timing: 'runtime'
    },
    {
      step: 9,
      line: 30,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      vars: { data: '0xHeap001', sum: 0 },
      highlightVar: 'sum',
      isDanger: false,
      output: [{ type: 'warning', text: 'Slow sum: ...' }, { type: 'success', text: 'Fast sum: ... (瞬间完成)' }],
      explanation: {
        icon: 'bolt',
        text: '调用 fastSum — O(n) 执行很快',
        color: 'green',
        actor: 'CPU',
        detail: 'fastSum 只执行 100 万次加法，可能在几毫秒内完成。相比 slowSum 快数百万倍！这就是算法优化的价值。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'func:fastSum',
      timing: 'runtime'
    },
    {
      step: 10,
      line: 33,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
      vars: { data: '0xHeap001', sum: 0 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'warning', text: 'Slow sum: ...' }, { type: 'success', text: 'Fast sum: ...' }],
      explanation: {
        icon: 'check',
        text: '性能优化要点：算法优化 > 代码优化 > 编译优化',
        color: 'green',
        actor: 'Developer',
        detail: '性能优化层次：1) 算法优化（O(n²)→O(n)）效果最大 2) 内存访问优化（缓存友好）3) 编译器优化（-O2/-O3）4) SIMD/并行化。先优化算法，再微调代码。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'exit',
      timing: 'runtime'
    }
  ],
  summary: {
    oneLiner: '性能优化：算法复杂度优先（O(n²)→O(n)），其次内存访问模式，最后编译器优化',
    pitfalls: [
      '嵌套循环容易导致 O(n²) 或更差的复杂度，需要仔细审查',
      '随机内存访问（如链表遍历）比顺序访问（数组）慢得多（缓存不友好）',
      '过早优化是万恶之源：先写正确代码，性能分析后再优化瓶颈'
    ],
    transferQuestion: '如何用公式 sum = n*(n+1)/2 直接计算 0 到 n-1 的和？（提示：O(1) 复杂度）',
    miniExercise: {
      bugCode: 'for (int i = 0; i < n; i++) {\n    for (int j = 0; j < n; j++) {\n        sum += arr[i] + arr[j];  // 这比原代码更差，为什么？\n    }\n}',
      hint: '原代码至少还在累加，这个重复计算了每个元素 2n 次，结果也是错的'
    }
  }
};
