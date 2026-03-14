window.LESSON_DATA = {
  meta: {
    id: 'l3-complex-decl',
    title: '复杂声明解析',
    chapter: 'level3',
    index: 5,
    filename: 'complex-decl.c',
    keyPoints: ['右左法则', '声明优先级', 'typedef']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'punc', text: '(' }, { type: 'op', text: '*' }, { type: 'id', text: 'arrPtr' }, { type: 'punc', text: ')' }, { type: 'punc', text: '[' }, { type: 'num', text: '5' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 指向数组的指针' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'punc', text: '(' }, { type: 'op', text: '*' }, { type: 'id', text: 'funcPtr' }, { type: 'punc', text: ')' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 函数指针' }] },
    { num: 5, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 6, tokens: [{ type: 'kw', text: 'typedef' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'op', text: '*' }, { type: 'id', text: 'CompareFunc' }, { type: 'punc', text: ')' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 8, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'compare' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'a' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'b' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'id', text: 'a' }, { type: 'ws', text: ' ' }, { type: 'op', text: '-' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'id', text: 'b' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'punc', text: '}' }] },
    { num: 11, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 12, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'funcPtr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'compare' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'CompareFunc' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'cmp' } }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'cmp' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'compare' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'x' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'y' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '20' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'r' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'cmp' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'x' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'cmp' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'y' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"compare(%d, %d) = %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'x' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'y' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'r' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'funcPtr', name: 'funcPtr', type: 'int(*)(int,int)', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'cmp', name: 'cmp', type: 'CompareFunc', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 2 },
    { key: 'r', name: 'r', type: 'int', addr: '0x7ffc08', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 4 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习复杂声明解析', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 3, executedLines: [1, 2], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: 'int (*arrPtr)[5]：指向含 5 个 int 的数组的指针', color: 'purple', actor: 'CPU', detail: '使用右左法则解析：从 arrPtr 开始，向右遇到 )，向左遇到 *，所以 arrPtr 是指针；跳出括号，向右遇到 [5]，所以指向数组；再向左遇到 int，所以是 int 数组。完整读法：arrPtr 是指针，指向含 5 个 int 的数组。' }, prediction: { question: 'int (*p)[5] 中 p 是什么类型？', options: ['含 5 个指针的数组', '指向含 5 个 int 的数组的指针', '含 5 个 int 的数组'], answer: 1 }, misconception: null, actor: 'CPU', target: 'code', timing: 'declaration' },
    { step: 2, line: 4, executedLines: [1, 2, 3], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: 'int (*funcPtr)(int, int)：函数指针', color: 'purple', actor: 'CPU', detail: '右左法则：从 funcPtr 开始，向右遇到 )，向左遇到 *，所以 funcPtr 是指针；跳出括号，向右遇到 (int,int)，所以指向函数；向左遇到 int，所以返回 int。完整读法：funcPtr 是指针，指向接受两个 int 返回 int 的函数。' }, prediction: null, misconception: null, actor: 'CPU', target: 'code', timing: 'declaration' },
    { step: 3, line: 6, executedLines: [1, 2, 3, 4, 5], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: 'typedef int (*CompareFunc)(const void*, const void*)', color: 'purple', actor: 'CPU', detail: 'typedef 为类型创建别名。CompareFunc 是"指向比较函数的指针"类型的别名。比较函数接受两个 const void* 参数，返回 int。这是 qsort 等标准库函数的回调签名。' }, prediction: { question: 'typedef 的作用是什么？', options: ['定义新类型', '为现有类型创建别名', '定义宏'], answer: 1 }, misconception: null, actor: 'CPU', target: 'code', timing: 'typedef' },
    { step: 4, line: 8, executedLines: [1, 2, 3, 4, 5, 6, 7], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '定义 compare 函数，匹配 CompareFunc 签名', color: 'purple', actor: 'CPU', detail: 'compare 函数接受两个 const void* 参数，返回 int。这是标准比较函数签名。const void* 表示可以接受任意类型的指针，但函数内部需要类型转换。' }, prediction: null, misconception: null, actor: 'CPU', target: 'code', timing: 'function-def' },
    { step: 5, line: 13, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], vars: { funcPtr: 'compare' }, highlightVar: 'funcPtr', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'funcPtr = compare，函数指针指向 compare', color: 'green', actor: 'CPU', detail: 'funcPtr 是函数指针，compare 是函数名（地址）。funcPtr = compare 使 funcPtr 指向 compare 函数。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:funcPtr', timing: 'main-loop' },
    { step: 6, line: 14, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], vars: { funcPtr: 'compare', cmp: null }, highlightVar: 'cmp', isDanger: false, output: [], explanation: { icon: 'memory', text: 'CompareFunc cmp; 使用 typedef 类型声明变量', color: 'blue', actor: 'CPU', detail: 'CompareFunc 是 typedef 定义的类型别名。cmp 是 CompareFunc 类型变量，即"指向比较函数的指针"。typedef 使声明更简洁易读。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:cmp', timing: 'main-loop' },
    { step: 7, line: 15, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], vars: { funcPtr: 'compare', cmp: 'compare' }, highlightVar: 'cmp', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'cmp = compare，赋值函数指针', color: 'green', actor: 'CPU', detail: 'cmp 现在指向 compare 函数。CompareFunc 类型别名让声明更清晰，不用写复杂的函数指针语法。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:cmp', timing: 'main-loop' },
    { step: 8, line: 17, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], vars: { funcPtr: 'compare', cmp: 'compare', r: -10 }, highlightVar: 'r', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'r = cmp(&x, &y) = compare(10, 20) = -10', color: 'green', actor: 'CPU', detail: '通过函数指针调用 cmp(&x, &y)。compare 函数内部：*(int*)a - *(int*)b = 10 - 20 = -10。负数表示 x < y。这是 qsort 使用的比较函数模式。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:r', timing: 'main-loop' },
    { step: 9, line: 18, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], vars: { funcPtr: 'compare', cmp: 'compare', r: -10 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'compare(10, 20) = -10' }], explanation: { icon: 'terminal', text: 'printf 输出比较结果', color: 'green', actor: 'CPU', detail: '验证函数指针调用成功。返回负数表示第一个参数小于第二个。这是标准库 qsort、bsearch 等函数要求的比较函数行为。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '右左法则解析复杂声明，typedef 为类型创建别名简化声明',
    pitfalls: [
      '右左法则：从标识符开始，右左交替读取，遇到括号跳出',
      'int (*p)[5] 是指向数组的指针，int *p[5] 是指针数组（优先级：[] > *）',
      'typedef 创建类型别名，不是宏替换，有类型检查'
    ],
    transferQuestion: 'int *p[5] 和 int (*p)[5] 有什么区别？',
    miniExercise: {
      bugCode: 'int (*arrPtr)[5];\\narrPtr = malloc(5 * sizeof(int));  // 这样对吗？',
      hint: '不对！arrPtr 是指向数组的指针，应该分配包含 5 个 int 的数组：arrPtr = malloc(sizeof(int[5]))'
    }
  }
};
