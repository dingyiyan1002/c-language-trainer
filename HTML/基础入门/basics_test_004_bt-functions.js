window.LESSON_DATA = {
  meta: {
    id: 'bt-functions',
    title: '函数',
    chapter: 'basics-test',
    index: 4,
    filename: 'functions.c',
    keyPoints: ['函数调用', '参数传递', '返回值']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'add' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'a' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 4, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'a' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b' }, { type: 'punc', text: ';' }] },
    { num: 5, tokens: [{ type: 'punc', text: '}' }] },
    { num: 6, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'multiply' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'x' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'y' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 8, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'by_value' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'n' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '100' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 只修改局部副本' }] },
    { num: 10, tokens: [{ type: 'punc', text: '}' }] },
    { num: 11, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'by_pointer' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'p' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'op', text: '*' }, { type: 'id', text: 'p' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '100' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 修改原变量' }] },
    { num: 13, tokens: [{ type: 'punc', text: '}' }] },
    { num: 14, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'factorial' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'n' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'factorial' }, { type: 'punc', text: '(' }, { type: 'id', text: 'n' }, { type: 'ws', text: ' ' }, { type: 'op', text: '-' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'punc', text: '}' }] },
    { num: 18, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'result' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'add' }, { type: 'punc', text: '(' }, { type: 'num', text: '3' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '5' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10' }, { type: 'punc', text: ';' }] },
    { num: 21, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'by_value' }, { type: 'punc', text: '(' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// n 仍然是 10' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'by_pointer' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// n 变成 100' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'f' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'factorial' }, { type: 'punc', text: '(' }, { type: 'num', text: '5' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 24, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"result=%d, n=%d, f=%d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'result' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'f' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 25, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 26, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'result', name: 'result', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'n', name: 'n', type: 'int', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 2 },
    { key: 'f', name: 'f', type: 'int', addr: '0x7ffc08', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 5 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习函数', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 19, executedLines: [17, 18], vars: { result: 8 }, highlightVar: 'result', isDanger: false, output: [], explanation: { icon: 'gear', text: '调用 add(3,5) 函数，返回 8', color: 'green', actor: 'CPU', detail: 'CPU 执行函数调用：1) 将参数 3 和 5 压入栈 2) 跳转到 add 函数代码 3) 执行 a+b=8 4) 将返回值 8 存入 result。函数调用有开销 (压栈、跳转、返回)。' }, prediction: { question: '函数参数传递的是什么？', options: ['变量的地址', '变量的值副本', '变量本身'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:result', timing: 'function-call' },
    { step: 2, line: 20, executedLines: [17, 18, 19], vars: { result: 8, n: 10 }, highlightVar: 'n', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 int 变量 n = 10', color: 'yellow', actor: 'CPU', detail: 'n 存储在栈上，值为 10。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:n', timing: 'main-loop' },
    { step: 3, line: 21, executedLines: [17, 18, 19, 20], vars: { result: 8, n: 10 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '调用 by_value(n)，传递的是 n 的值副本', color: 'blue', actor: 'CPU', detail: '值传递：CPU 将 n 的值 10 复制给函数参数。函数内部的 n 是局部变量，修改不影响 main 中的 n。这是 C 语言的默认参数传递方式。' }, prediction: null, misconception: { title: '值传递不会修改原变量', text: 'by_value 函数内部的 n 是副本，修改副本不影响 main 中的原变量 n。这是"按值传递"(pass by value) 的特性。' }, actor: 'CPU', target: 'var:n', timing: 'function-call' },
    { step: 4, line: 9, executedLines: [17, 18, 19, 20, 21], vars: { result: 8, n: 10 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'bolt', text: 'by_value 函数内：n = 100，只修改局部副本', color: 'orange', actor: 'CPU', detail: '函数参数 n 现在是局部变量，赋值为 100。这个 n 与 main 中的 n 地址不同，互不影响。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:n', timing: 'function-body' },
    { step: 5, line: 22, executedLines: [17, 18, 19, 20, 21, 10], vars: { result: 8, n: 10 }, highlightVar: 'n', isDanger: false, output: [], explanation: { icon: 'gear', text: '调用 by_pointer(&n)，传递的是 n 的地址', color: 'blue', actor: 'CPU', detail: '指针传递：&n 是取地址运算符，得到 n 的内存地址。函数接收的是地址，可以通过指针间接访问和修改原变量。' }, prediction: { question: 'by_pointer(&n) 调用后，n 的值是多少？', options: ['10', '100', '不确定'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:n', timing: 'function-call' },
    { step: 6, line: 12, executedLines: [17, 18, 19, 20, 21, 10, 22], vars: { result: 8, n: 100 }, highlightVar: 'n', isDanger: true, output: [], explanation: { icon: 'bolt', text: 'by_pointer 函数内：*p = 100，通过指针修改原变量 n', color: 'red', actor: 'CPU', detail: '*p 是解引用运算符，访问指针 p 所指向的内存地址 (即 n 的地址)。写入 100 直接修改了 main 中的 n。这是"按引用传递"(pass by reference) 的效果。' }, prediction: null, misconception: { title: '指针传递可以修改原变量', text: '指针传递时，函数接收的是原变量的地址。通过解引用*p 可以读写原内存位置，从而修改调用者的变量。这是 C 语言实现"引用传递"的方式。' }, actor: 'CPU', target: 'var:n', timing: 'function-body' },
    { step: 7, line: 23, executedLines: [17, 18, 19, 20, 21, 10, 22, 13], vars: { result: 8, n: 100, f: 120 }, highlightVar: 'f', isDanger: false, output: [], explanation: { icon: 'gear', text: '调用 factorial(5) 递归函数，返回 120', color: 'green', actor: 'CPU', detail: '递归调用过程：factorial(5)=5*factorial(4)=5*4*factorial(3)=...=5*4*3*2*1=120。每次递归调用都会在栈上创建新的栈帧保存局部变量和返回地址。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:f', timing: 'function-call' },
    { step: 8, line: 15, executedLines: [17, 18, 19, 20, 21, 10, 22, 13, 23], vars: { result: 8, n: 100, f: 120 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'stack', text: 'factorial 递归基线条件：n<=1 时返回 1', color: 'purple', actor: 'CPU', detail: '递归函数必须有基线条件 (终止条件)，否则无限递归导致栈溢出 (Stack Overflow)。这里 n<=1 时返回 1，不再递归。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'recursion-base' },
    { step: 9, line: 24, executedLines: [17, 18, 19, 20, 21, 10, 22, 13, 23, 25], vars: { result: 8, n: 100, f: 120 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'result=8, n=100, f=120' }], explanation: { icon: 'terminal', text: 'printf 输出：result=8, n=100, f=120', color: 'green', actor: 'CPU', detail: 'result=add(3,5)=8；n 经过 by_pointer 修改后为 100；f=factorial(5)=120。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '函数参数默认值传递 (传递副本)，指针传递可以间接修改原变量，递归需要基线条件',
    pitfalls: [
      '值传递时函数内部修改不影响原变量，因为操作的是副本',
      '指针传递时用&p 取地址，函数内用*p 解引用访问原变量',
      '递归函数必须有终止条件，否则无限递归导致栈溢出'
    ],
    transferQuestion: '如果 factorial 函数去掉 n<=1 的判断，会发生什么？',
    miniExercise: {
      bugCode: 'void swap(int a, int b) {\n    int t = a; a = b; b = t;\n}\nswap(x, y);  // 这样能交换 x 和 y 吗？',
      hint: '值传递只修改副本，应该用指针传递地址'
    }
  }
};
