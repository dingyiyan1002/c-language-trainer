window.LESSON_DATA = {
  meta: {
    chapterId: 'preprocessor',
    lessonId: 'preprocessor-1',
    title: '宏定义基础',
    index: 1,
    filename: 'preprocessor_001_prep-1.js',
    keyPoints: ['#define 宏定义', '宏替换原理', '带参数宏', '宏与函数区别']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 预处理器宏：编译前的文本替换' }] },
    { num: 2, tokens: [] },
    { num: 3, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'define' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'PI' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3.14159' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 定义常量宏' }
    ]},
    { num: 4, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'define' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'MAX_SIZE' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '100' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 定义数值宏' }
    ]},
    { num: 5, tokens: [] },
    { num: 6, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'radius' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ';' }
    ]},
    { num: 7, tokens: [
      { type: 'kw', text: 'float' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'area' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'PI' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'radius' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'radius' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// PI 被替换为 3.14159' }
    ]},
    { num: 8, tokens: [] },
    { num: 9, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'define' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'SQUARE' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'x' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 带参数宏' }
    ]},
    { num: 10, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 注意：外层括号必不可少！' }
    ]},
    { num: 11, tokens: [] },
    { num: 12, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ';' }
    ]},
    { num: 13, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'result' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'SQUARE' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 展开为：(a * a) = 25' }
    ]},
    { num: 14, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'bad' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'SQUARE' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'op', text: '+' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 展开为：((a+1) * (a+1)) = 36' }
    ]},
    { num: 15, tokens: [] },
    { num: 16, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'define' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'MIN' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '?' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: ':' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' }
    ]},
    { num: 17, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 多参数宏，使用三元运算符' }
    ]},
    { num: 18, tokens: [] },
    { num: 19, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '20' },
      { type: 'punc', text: ';' }
    ]},
    { num: 20, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'minVal' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'MIN' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'x' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 展开为：(x < y ? x : y) = 10' }
    ]},
    { num: 21, tokens: [] },
    { num: 22, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'PI', name: '#define PI', type: 'macro', addr: 'N/A', glowColor: 'rgba(168,85,247,0.35)', appearStep: 2, value: '3.14159' },
    { key: 'MAX_SIZE', name: '#define MAX_SIZE', type: 'macro', addr: 'N/A', glowColor: 'rgba(168,85,247,0.35)', appearStep: 3, value: '100' },
    { key: 'radius', name: 'radius', type: 'int', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 5, value: '5' },
    { key: 'area', name: 'area', type: 'float', addr: '0x7ffd04', glowColor: 'rgba(59,130,246,0.35)', appearStep: 6, value: '78.53975' },
    { key: 'SQUARE', name: '#define SQUARE', type: 'macro', addr: 'N/A', glowColor: 'rgba(249,115,22,0.35)', appearStep: 8, value: '(x * x)' },
    { key: 'a', name: 'a', type: 'int', addr: '0x7ffd08', glowColor: 'rgba(249,115,22,0.35)', appearStep: 11, value: '5' },
    { key: 'result', name: 'result', type: 'int', addr: '0x7ffd0c', glowColor: 'rgba(168,85,247,0.35)', appearStep: 12, value: '25' },
    { key: 'bad', name: 'bad', type: 'int', addr: '0x7ffd10', glowColor: 'rgba(239,68,68,0.35)', appearStep: 13, value: '36' },
    { key: 'MIN', name: '#define MIN', type: 'macro', addr: 'N/A', glowColor: 'rgba(59,130,246,0.35)', appearStep: 15, value: '((a)<(b)?(a):(b))' },
    { key: 'x', name: 'x', type: 'int', addr: '0x7ffd14', glowColor: 'rgba(34,197,94,0.35)', appearStep: 18, value: '10' },
    { key: 'y', name: 'y', type: 'int', addr: '0x7ffd18', glowColor: 'rgba(249,115,22,0.35)', appearStep: 18, value: '20' },
    { key: 'minVal', name: 'minVal', type: 'int', addr: '0x7ffd1c', glowColor: 'rgba(168,85,247,0.35)', appearStep: 19, value: '10' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'rocket',
        text: '准备执行代码',
        color: 'blue',
        actor: 'System',
        detail: '程序即将开始运行，演示 C 语言预处理器的宏定义功能'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：预处理器宏 - 编译前的文本替换',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示宏定义和文本替换机制'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [1],
      vars: { PI: '3.14159' },
      highlightVar: 'PI',
      explanation: {
        icon: 'box',
        text: '#define PI 3.14159：定义常量宏',
        color: 'purple',
        actor: 'CPU',
        detail: '预处理器指令#define 定义宏 PI。编译前所有 PI 都会被替换为 3.14159，这是纯文本替换！'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 3],
      vars: { PI: '3.14159', MAX_SIZE: '100' },
      highlightVar: 'MAX_SIZE',
      explanation: {
        icon: 'box',
        text: '#define MAX_SIZE 100：定义数值宏',
        color: 'purple',
        actor: 'CPU',
        detail: '定义 MAX_SIZE 宏表示最大值。预处理后所有 MAX_SIZE 都变成 100。宏名通常用大写！'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [1, 3, 4, 5],
      vars: { PI: '3.14159', MAX_SIZE: '100' },
      explanation: {
        icon: 'info',
        text: '阅读代码：定义变量 radius',
        color: 'blue',
        actor: 'CPU',
        detail: 'radius 是普通 int 变量，将用于圆面积计算'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 3, 4, 5, 6],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5' },
      highlightVar: 'radius',
      explanation: {
        icon: 'box',
        text: 'int radius = 5：定义半径',
        color: 'green',
        actor: 'CPU',
        detail: 'radius = 5，占用 4 字节内存 (0x7ffd00)'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 3, 4, 5, 6],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5' },
      explanation: {
        icon: 'info',
        text: '阅读代码：使用宏 PI 计算圆面积',
        color: 'blue',
        actor: 'CPU',
        detail: 'PI * radius * radius 在预处理后变为 3.14159 * radius * radius'
      }
    },
    {
      step: 7,
      line: 7,
      executedLines: [1, 3, 4, 5, 6, 7],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975' },
      highlightVar: 'area',
      explanation: {
        icon: 'calculator',
        text: 'area = PI * radius * radius = 78.54',
        color: 'cyan',
        actor: 'CPU',
        detail: '3.14159 * 5 * 5 = 78.53975。PI 被替换为字面值 3.14159，不占用内存空间'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)' },
      highlightVar: 'SQUARE',
      explanation: {
        icon: 'box',
        text: '#define SQUARE(x) (x * x)：带参数宏',
        color: 'orange',
        actor: 'CPU',
        detail: '定义带参数的宏 SQUARE。宏参数 x 在替换时会被实际参数替换。外层括号保证运算优先级！'
      }
    },
    {
      step: 9,
      line: 10,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：注意 - 外层括号必不可少！',
        color: 'blue',
        actor: 'CPU',
        detail: '如果没有外层括号，SQUARE(a+1) 会展开为 a+1 * a+1，由于*优先级高于+，结果错误！'
      }
    },
    {
      step: 10,
      line: 12,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：定义变量 a',
        color: 'blue',
        actor: 'CPU',
        detail: 'a 将用于 SQUARE 宏的测试'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)', a: '5' },
      highlightVar: 'a',
      explanation: {
        icon: 'box',
        text: 'int a = 5：定义变量',
        color: 'red',
        actor: 'CPU',
        detail: 'a = 5，占用 4 字节内存 (0x7ffd08)'
      }
    },
    {
      step: 12,
      line: 13,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)', a: '5', result: '25' },
      highlightVar: 'result',
      explanation: {
        icon: 'calculator',
        text: 'result = SQUARE(a) = (a * a) = 25',
        color: 'purple',
        actor: 'CPU',
        detail: 'SQUARE(a) 预处理展开为 (a * a) = (5 * 5) = 25。宏替换是纯文本替换！'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)', a: '5', result: '25', bad: '36' },
      highlightVar: 'bad',
      explanation: {
        icon: 'calculator',
        text: 'bad = SQUARE(a+1) = ((a+1)*(a+1)) = 36',
        color: 'red',
        actor: 'CPU',
        detail: 'SQUARE(a+1) 展开为 ((a+1) * (a+1)) = (6 * 6) = 36。因为有外层括号，结果正确！'
      }
    },
    {
      step: 14,
      line: 16,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 16],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)', a: '5', result: '25', bad: '36', MIN: '((a)<(b)?(a):(b))' },
      highlightVar: 'MIN',
      explanation: {
        icon: 'box',
        text: '#define MIN(a,b) ((a)<(b)?(a):(b))：多参数宏',
        color: 'cyan',
        actor: 'CPU',
        detail: '定义双参数宏 MIN，使用三元运算符实现最小值选择。每个参数都有括号保护！'
      }
    },
    {
      step: 15,
      line: 17,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 16],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)', a: '5', result: '25', bad: '36', MIN: '((a)<(b)?(a):(b))' },
      explanation: {
        icon: 'info',
        text: '阅读注释：多参数宏，使用三元运算符',
        color: 'blue',
        actor: 'CPU',
        detail: '三元运算符 ?: 是条件判断的简洁写法：a<b 为真时返回 a，否则返回 b'
      }
    },
    {
      step: 16,
      line: 19,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 16, 17, 19],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)', a: '5', result: '25', bad: '36', MIN: '((a)<(b)?(a):(b))' },
      explanation: {
        icon: 'info',
        text: '阅读代码：定义 x 和 y',
        color: 'blue',
        actor: 'CPU',
        detail: 'x 和 y 将用于 MIN 宏的测试'
      }
    },
    {
      step: 17,
      line: 19,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 16, 17, 19],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)', a: '5', result: '25', bad: '36', MIN: '((a)<(b)?(a):(b))', x: '10', y: '20' },
      highlightVar: 'x',
      explanation: {
        icon: 'box',
        text: 'int x = 10, y = 20：定义两个变量',
        color: 'green',
        actor: 'CPU',
        detail: 'x = 10 (0x7ffd14), y = 20 (0x7ffd18)'
      }
    },
    {
      step: 18,
      line: 20,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 16, 17, 19, 20],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)', a: '5', result: '25', bad: '36', MIN: '((a)<(b)?(a):(b))', x: '10', y: '20' },
      explanation: {
        icon: 'info',
        text: '阅读代码：使用 MIN 宏求最小值',
        color: 'blue',
        actor: 'CPU',
        detail: 'MIN(x, y) 将展开为条件表达式'
      }
    },
    {
      step: 19,
      line: 20,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 16, 17, 19, 20],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)', a: '5', result: '25', bad: '36', MIN: '((a)<(b)?(a):(b))', x: '10', y: '20', minVal: '10' },
      highlightVar: 'minVal',
      explanation: {
        icon: 'calculator',
        text: 'minVal = MIN(x,y) = (x<y ? x:y) = 10',
        color: 'purple',
        actor: 'CPU',
        detail: 'MIN(x,y) 展开为 (x < y ? x : y) = (10 < 20 ? 10 : 20) = 10。三元运算符返回较小值'
      }
    },
    {
      step: 20,
      line: 22,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 16, 17, 19, 20, 22],
      vars: { PI: '3.14159', MAX_SIZE: '100', radius: '5', area: '78.53975', SQUARE: '(x * x)', a: '5', result: '25', bad: '36', MIN: '((a)<(b)?(a):(b))', x: '10', y: '20', minVal: '10' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键点：1) #define 定义宏  2) 宏是文本替换  3) 带参宏需要括号保护  4) 宏不占内存  5) 多参数用逗号分隔'
      }
    }
  ],

  summary: {
    oneLiner: '掌握宏定义基础和带参数宏的正确写法',
    pitfalls: [
      '#define 定义常量宏：#define PI 3.14159',
      '宏替换是纯文本替换，在编译前进行',
      '带参数宏必须用括号保护：#define SQUARE(x) ((x) * (x))',
      '多参数宏用逗号分隔：#define MIN(a,b) ((a)<(b)?(a):(b))',
      '宏名通常用大写，以区别于普通变量'
    ],
    transferQuestion: '为什么带参数的宏需要外层括号？',
    miniExercise: {
      bugCode: '#define SQUARE(x) x * x\nSQUARE(a+1);  // 展开为 a+1 * a+1 = a + a + 1，错误！',
      hint: '修复：#define SQUARE(x) ((x) * (x))，参数和整体都要括号'
    }
  },

  predictions: [
    {
      question: '#define PI 3.14159 定义的 PI 占用内存吗？',
      options: [
        { text: '占用 4 字节', feedback: '错误！宏只是文本替换，不占用内存。' },
        { text: '占用 8 字节', feedback: '错误！宏在编译前就替换了，不存在内存中。' },
        { text: '不占用内存', feedback: '正确！宏是预处理器指令，编译前已被替换为字面值。' },
        { text: '占用 1 字节', feedback: '错误！' }
      ],
      correctIndex: 2
    },
    {
      question: 'SQUARE(a+1) 正确展开应该是什么？',
      options: [
        { text: 'a+1 * a+1', feedback: '错误！缺少括号，运算优先级会出错。' },
        { text: '(a+1) * (a+1)', feedback: '正确！带参数宏需要括号保护参数。' },
        { text: 'a*a + 1', feedback: '错误！完全理解错了宏替换。' },
        { text: 'a+1*a+1', feedback: '错误！同 A，优先级问题。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '宏和常量一样',
      truth: '宏是文本替换，不占内存，在预处理阶段完成；常量 (const) 是真正的变量，占用内存，有类型检查。推荐使用 const 替代宏定义常量。'
    },
    {
      myth: '带参数宏和函数一样',
      truth: '宏是文本替换，参数可能被多次求值 (如 SQUARE(++x) 会导致 x 自增两次)；函数参数只评估一次。宏没有类型检查，容易出错。'
    },
    {
      myth: '宏可以不加括号',
      truth: '必须加括号！SQUARE(x) 如果定义为 x*x，SQUARE(a+1) 会变成 a+1*a+1，由于*优先级高于+，结果为 a+(1*a)+1，完全错误！'
    },
    {
      myth: '宏比函数快',
      truth: '宏避免了函数调用开销，但可能导致代码膨胀 (每次调用都展开)。现代编译器会内联小函数，宏的性能优势不明显，且宏更难调试。'
    }
  ]
};
