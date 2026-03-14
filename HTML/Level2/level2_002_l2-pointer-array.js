window.LESSON_DATA = {
  meta: {
    id: 'l2-pointer-array',
    title: '指针与数组',
    chapter: 'level2',
    index: 2,
    filename: 'pointer-array.c',
    keyPoints: ['数组名', '指针算术', '下标访问']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 4, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'num', text: '5' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }, { type: 'num', text: '10' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '20' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '30' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '40' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '50' }, { type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 数组名是指针' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"arr[0] = %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'num', text: '0' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"*ptr = %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"*(ptr+1) = %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'punc', text: '(' }, { type: 'id', text: 'ptr' }, { type: 'op', text: '+' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"ptr[1] = %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: '[' }, { type: 'num', text: '1' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: '[' }, { type: 'num', text: '2' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '99' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 通过指针下标修改' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"arr[2] = %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'arr' }, { type: 'punc', text: '[' }, { type: 'num', text: '2' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'arr', name: 'arr', type: 'int[5]', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'ptr', name: 'ptr', type: 'int*', addr: '0x7ffc14', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 2 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习指针与数组', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 4, executedLines: [3], vars: { arr: [10, 20, 30, 40, 50] }, highlightVar: 'arr', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 int arr[5] = {10,20,30,40,50}', color: 'yellow', actor: 'CPU', detail: 'arr 是包含 5 个 int 的数组，在栈上连续分配 20 字节 (5×4)。arr[0]=10, arr[1]=20, ... arr[4]=50。数组名 arr 是数组首元素的地址。' }, prediction: { question: '数组名 arr 的值是什么？', options: ['10', 'arr[0] 的地址', '整个数组'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:arr', timing: 'main-loop' },
    { step: 2, line: 5, executedLines: [3, 4], vars: { arr: [10, 20, 30, 40, 50], ptr: '0x7ffc00' }, highlightVar: 'ptr', isDanger: false, output: [], explanation: { icon: 'pointer', text: '声明 int* ptr = arr，数组名赋值给指针', color: 'blue', actor: 'CPU', detail: 'arr 是数组首元素地址，等价于&arr[0]。ptr = arr 使 ptr 指向 arr[0]。重要：数组名是常量指针，不能修改 (arr++ 非法)，但 ptr 是变量可以修改。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:ptr', timing: 'main-loop' },
    { step: 3, line: 6, executedLines: [3, 4, 5], vars: { arr: [10, 20, 30, 40, 50], ptr: '0x7ffc00' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'arr[0] = 10' }], explanation: { icon: 'terminal', text: 'printf 输出 arr[0] = 10', color: 'green', actor: 'CPU', detail: 'arr[0] 是数组第一个元素，值为 10。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 4, line: 7, executedLines: [3, 4, 5, 6], vars: { arr: [10, 20, 30, 40, 50], ptr: '0x7ffc00' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'arr[0] = 10' }, { type: 'success', text: '*ptr = 10' }], explanation: { icon: 'terminal', text: 'printf 输出*ptr = 10', color: 'green', actor: 'CPU', detail: 'ptr 指向 arr[0]，*ptr 解引用得到 arr[0] 的值 10。arr[0] 和*ptr 等价。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 5, line: 8, executedLines: [3, 4, 5, 6, 7], vars: { arr: [10, 20, 30, 40, 50], ptr: '0x7ffc00' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'arr[0] = 10' }, { type: 'success', text: '*ptr = 10' }, { type: 'success', text: '*(ptr+1) = 20' }], explanation: { icon: 'terminal', text: 'printf 输出*(ptr+1) = 20', color: 'green', actor: 'CPU', detail: 'ptr+1 是指针算术：ptr 指向 int，ptr+1 前进 4 字节 (sizeof(int))，指向 arr[1]。*(ptr+1) 解引用得到 arr[1]=20。这证明 a[i] 等价于*(a+i)。' }, prediction: { question: '如果 ptr 指向 int，ptr+2 前进多少字节？', options: ['2 字节', '4 字节', '8 字节'], answer: 2 }, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 6, line: 9, executedLines: [3, 4, 5, 6, 7, 8], vars: { arr: [10, 20, 30, 40, 50], ptr: '0x7ffc00' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'arr[0] = 10' }, { type: 'success', text: '*ptr = 10' }, { type: 'success', text: '*(ptr+1) = 20' }, { type: 'success', text: 'ptr[1] = 20' }], explanation: { icon: 'terminal', text: 'printf 输出 ptr[1] = 20', color: 'green', actor: 'CPU', detail: 'ptr[1] 是指针的下标访问。C 语言定义：ptr[1] 等价于*(ptr+1)。所以 ptr[1]、*(ptr+1)、arr[1] 都等价，结果都是 20。指针可以像数组一样用下标！' }, prediction: null, misconception: { title: '指针可以像数组一样用下标', text: 'ptr[1] 完全合法，等价于*(ptr+1)。指针和数组在访问元素时可以互换使用。' }, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 7, line: 10, executedLines: [3, 4, 5, 6, 7, 8, 9], vars: { arr: [10, 20, 99, 40, 50], ptr: '0x7ffc00' }, highlightVar: 'arr', isDanger: false, output: [{ type: 'success', text: 'arr[0] = 10' }, { type: 'success', text: '*ptr = 10' }, { type: 'success', text: '*(ptr+1) = 20' }, { type: 'success', text: 'ptr[1] = 20' }], explanation: { icon: 'bolt', text: 'ptr[2] = 99，通过指针下标修改数组', color: 'green', actor: 'CPU', detail: 'ptr[2] 等价于*(ptr+2)，等价于 arr[2]。ptr[2] = 99 实际上是 arr[2] = 99。ptr 和 arr 指向同一地址，通过 ptr 下标可以修改数组内容。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:arr', timing: 'main-loop' },
    { step: 8, line: 11, executedLines: [3, 4, 5, 6, 7, 8, 9, 10], vars: { arr: [10, 20, 99, 40, 50], ptr: '0x7ffc00' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'arr[0] = 10' }, { type: 'success', text: '*ptr = 10' }, { type: 'success', text: '*(ptr+1) = 20' }, { type: 'success', text: 'ptr[1] = 20' }, { type: 'success', text: 'arr[2] = 99' }], explanation: { icon: 'terminal', text: 'printf 输出 arr[2] = 99', color: 'green', actor: 'CPU', detail: '验证了 ptr[2] = 99 确实修改了 arr[2]。这证明了数组和指针的等价性：arr[i] 等价于*(arr+i)，指针可以像数组一样使用下标。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '数组名是首元素地址，a[i] 等价于*(a+i)，指针可以像数组一样用下标',
    pitfalls: [
      '数组名是常量指针，不能修改 (arr++ 非法)，但指针变量可以修改',
      'ptr+1 前进 sizeof(类型) 字节，不是 1 字节',
      'ptr[i] 完全合法，等价于*(ptr+i)，指针可以像数组一样用下标'
    ],
    transferQuestion: '如果 int arr[10], *p = arr，那么 p[3] 和*(p+3) 是否等价？',
    miniExercise: {
      bugCode: 'int arr[5] = {1,2,3,4,5};\\narr++;  // 这样写有什么问题？',
      hint: '数组名是常量指针，不能修改。应该用指针变量：int* p = arr; p++;'
    }
  }
};
