window.LESSON_DATA = {
  meta: {
    id: 'var-1',
    title: '变量声明与初始化',
    chapter: '变量与数据类型',
    index: 1,
    filename: 'variable_decl.c',
    keyPoints: ['变量声明', '数据类型', '初始化']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'main' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 4, tokens: [{ type: 'punc', text: '{' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'age' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '20' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'float' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'price' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '9.9f' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'grade' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'str', text: "'A'" }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'age', name: 'age', type: 'int', addr: '0x7fff00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'price', name: 'price', type: 'float', addr: '0x7fff04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 1 },
    { key: 'grade', name: 'grade', type: 'char', addr: '0x7fff08', glowColor: 'rgba(234,179,8,0.35)', accentCls: 'text-yellow-400', badgeCls: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/12', appearStep: 1 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，学习变量声明与初始化', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 5, executedLines: [1,2,3,4], vars: { age: 20 }, highlightVar: 'age', isDanger: false, output: [], explanation: { icon: 'variable', text: 'int age = 20 — 声明整型变量', color: 'green', actor: 'CPU', detail: 'int 声明整型变量，占用 4 字节。= 是赋值运算符，将 20 存入 age 的内存空间。' }, prediction: { question: '以下哪个变量名合法？', options: ['2ndPlace', '_count', 'my-var'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:age', timing: 'runtime' },
    { step: 2, line: 6, executedLines: [1,2,3,4,5], vars: { age: 20, price: 9.9 }, highlightVar: 'price', isDanger: false, output: [], explanation: { icon: 'decimal', text: 'float price = 9.9f — 声明浮点型变量', color: 'blue', actor: 'CPU', detail: 'float 是单精度浮点型，占用 4 字节，适合存储小数。f 后缀表示 float 字面量。' }, prediction: null, misconception: { title: '浮点数精度', text: 'float 约 7 位有效数字，double 约 15 位。金融计算建议用整数避免浮点误差。' }, actor: 'CPU', target: 'var:price', timing: 'runtime' },
    { step: 3, line: 7, executedLines: [1,2,3,4,5,6], vars: { age: 20, price: 9.9, grade: 65 }, highlightVar: 'grade', isDanger: false, output: [], explanation: { icon: 'character', text: 'char grade = \'A\' — 声明字符型变量', color: 'yellow', actor: 'CPU', detail: 'char 占用 1 字节，存储字符的 ASCII 码。单引号表示字符字面量。\'A\' 的 ASCII 码是 65。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:grade', timing: 'runtime' },
    { step: 4, line: 8, executedLines: [1,2,3,4,5,6,7], vars: { age: 20, price: 9.9, grade: 65 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Program ended' }], explanation: { icon: 'check', text: '变量声明要点：类型 + 名称 + 初始化', color: 'green', actor: 'Teacher', detail: '变量声明三要素：1) 数据类型 2) 变量名 3) 初始化（推荐）。好习惯：声明时就初始化。' }, prediction: null, misconception: null, actor: 'Teacher', target: 'exit', timing: 'runtime' }
  ],
  summary: {
    oneLiner: '变量声明：类型 + 名称 + 初始化（推荐）— int 整数/float 小数/char 字符',
    pitfalls: ['未初始化的局部变量是垃圾值，使用前必须初始化', '变量名只能包含字母、数字、下划线，且不能数字开头', '= 是赋值，== 是比较，不要混淆'],
    transferQuestion: '如何声明一个 double 类型的变量并初始化为 3.14159？',
    miniExercise: { bugCode: 'int 2ndPlace = 2;', hint: '变量名不能数字开头！应该改为 secondPlace 或 place_2。' }
  }
};
