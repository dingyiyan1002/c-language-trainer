window.LESSON_DATA = {
  meta: {
    id: 'var-2',
    title: '格式化输入输出',
    chapter: '变量与数据类型',
    index: 2,
    filename: 'scanf_printf.c',
    keyPoints: ['scanf 输入', 'printf 输出', '格式说明符']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'main' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 4, tokens: [{ type: 'punc', text: '{' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'float' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'price' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Enter an integer: "' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'scanf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"%d"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'id', text: 'num' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Enter a price: "' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'scanf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"%f"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'id', text: 'price' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"You entered: %d and $.2f\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'price' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'num', name: 'num', type: 'int', addr: '0x7fff00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'price', name: 'price', type: 'float', addr: '0x7fff04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 1 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，学习格式化输入输出', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 5, executedLines: [1,2,3,4], vars: {}, highlightVar: 'num', isDanger: false, output: [], explanation: { icon: 'variable', text: 'int num; — 声明整型变量', color: 'green', actor: 'CPU', detail: '声明变量但不初始化，num 的值是未定义的垃圾值。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:num', timing: 'runtime' },
    { step: 2, line: 7, executedLines: [1,2,3,4,5,6], vars: {}, highlightVar: null, isDanger: false, output: [{ type: 'info', text: 'Enter an integer: ' }], explanation: { icon: 'prompt', text: 'printf 提示用户输入', color: 'purple', actor: 'CPU', detail: 'printf 输出提示字符串，不换行，光标停留在字符串后面。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'runtime' },
    { step: 3, line: 8, executedLines: [1,2,3,4,5,6,7], vars: { num: 42 }, highlightVar: 'num', isDanger: false, output: [{ type: 'info', text: 'Enter an integer: ' }], explanation: { icon: 'input', text: 'scanf("%d", &num) — 读取整数', color: 'blue', actor: 'CPU', detail: 'scanf 从键盘读取整数存入 num。&是取地址符，scanf 需要变量地址才能存入值。用户输入了 42。' }, prediction: { question: 'scanf 读取变量时为什么需要&？', options: ['语法规则', '需要地址才能存入值', '不需要也可以'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:num', timing: 'runtime' },
    { step: 4, line: 9, executedLines: [1,2,3,4,5,6,7,8], vars: { num: 42 }, highlightVar: null, isDanger: false, output: [{ type: 'info', text: 'Enter an integer: ' }, { type: 'info', text: 'Enter a price: ' }], explanation: { icon: 'prompt', text: 'printf 提示用户输入价格', color: 'purple', actor: 'CPU', detail: '再次输出提示信息。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'runtime' },
    { step: 5, line: 10, executedLines: [1,2,3,4,5,6,7,8,9], vars: { num: 42, price: 19.99 }, highlightVar: 'price', isDanger: false, output: [{ type: 'info', text: 'Enter an integer: ' }, { type: 'info', text: 'Enter a price: ' }], explanation: { icon: 'input', text: 'scanf("%f", &price) — 读取浮点数', color: 'blue', actor: 'CPU', detail: 'scanf 用%f格式读取浮点数存入 price。用户输入了 19.99。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:price', timing: 'runtime' },
    { step: 6, line: 11, executedLines: [1,2,3,4,5,6,7,8,9,10], vars: { num: 42, price: 19.99 }, highlightVar: null, isDanger: false, output: [{ type: 'info', text: 'Enter an integer: ' }, { type: 'info', text: 'Enter a price: ' }, { type: 'success', text: 'You entered: 42 and $19.99' }], explanation: { icon: 'output', text: 'printf 格式化输出多个变量', color: 'purple', actor: 'CPU', detail: '%d 被 num(42) 替换，%.2f 被 price(19.99) 替换并保留 2 位小数。多个占位符按顺序对应参数。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'runtime' },
    { step: 7, line: 13, executedLines: [1,2,3,4,5,6,7,8,9,10,11,12], vars: { num: 42, price: 19.99 }, highlightVar: null, isDanger: false, output: [{ type: 'info', text: 'Enter an integer: ' }, { type: 'info', text: 'Enter a price: ' }, { type: 'success', text: 'You entered: 42 and $19.99' }], explanation: { icon: 'check', text: '输入输出要点：scanf 需要&取地址，printf 直接传值', color: 'green', actor: 'Teacher', detail: '常用格式符：%d 整数、%f 浮点数、%c 字符、%s 字符串。scanf 需要&取地址符，printf 不需要。' }, prediction: null, misconception: null, actor: 'Teacher', target: 'exit', timing: 'runtime' }
  ],
  summary: {
    oneLiner: '格式化 IO: scanf("%d",&num) 需要& / printf("%d",num) 直接传值',
    pitfalls: ['scanf 读取变量时必须加&取地址符（数组/指针除外）', '%d 对应 int、%f 对应 float、%c 对应 char，不能混用', 'scanf 不检查输入类型，用户输入非数字会导致问题'],
    transferQuestion: '如何用 scanf 读取 double 类型？（提示：%lf）',
    miniExercise: { bugCode: 'int n; scanf("%d", n);', hint: 'scanf 需要地址！应该改为 scanf("%d", &n);' }
  }
};
