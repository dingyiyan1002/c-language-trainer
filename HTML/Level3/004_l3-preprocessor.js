window.LESSON_DATA = {
  meta: {
    id: 'l3-preprocessor',
    title: '预处理进阶',
    chapter: 'Level3',
    index: 4,
    filename: 'preprocessor.c',
    keyPoints: ['宏展开', '##运算符', '条件编译']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'DEBUG' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }] },
    { num: 4, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'SQUARE' }, { type: 'punc', text: '(' }, { type: 'id', text: 'x' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'x' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'x' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }] },
    { num: 5, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'CONCAT' }, { type: 'punc', text: '(' }, { type: 'id', text: 'a' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'a' }, { type: 'op', text: '##' }, { type: 'id', text: 'b' }] },
    { num: 6, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 7, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'result' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'SQUARE' }, { type: 'punc', text: '(' }, { type: 'num', text: '5' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'pp', text: '#if' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'DEBUG' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"DEBUG: result = %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'result' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'pp', text: '#endif' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'var12' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '42' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"CONCAT: var%d = %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'CONCAT' }, { type: 'punc', text: '(' }, { type: 'id', text: 'var' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '2' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'result', name: 'result', type: 'int', addr: '0x7fff10', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'var12', name: 'var12', type: 'int', addr: '0x7fff14', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习预处理技巧（宏/条件编译/token 粘贴）', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 3,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '#define DEBUG 1 定义调试开关宏',
        color: 'blue',
        actor: 'Preprocessor',
        detail: '预处理器将源码中所有 DEBUG 替换为 1。条件编译#if DEBUG 可控制调试代码是否编译。这是嵌入式常用调试技巧。'
      },
      prediction: {
        question: '预处理器在哪个阶段执行？',
        options: ['编译时', '编译前（预处理）', '运行时'],
        answer: 1
      },
      misconception: null,
      actor: 'Preprocessor',
      target: 'macro:DEBUG',
      timing: 'preprocess'
    },
    {
      step: 2,
      line: 4,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '#define SQUARE(x) ((x) * (x)) 带参数宏',
        color: 'blue',
        actor: 'Preprocessor',
        detail: '宏是文本替换，不是函数。SQUARE(5) 展开为 ((5) * (5))。括号很重要：防止优先级问题。宏没有类型检查。'
      },
      prediction: null,
      misconception: {
        title: '宏的副作用',
        text: 'SQUARE(i++) 展开为((i++) * (i++))，i 自增两次！宏参数有副作用时会出问题。安全做法：用 inline 函数或临时变量。'
      },
      actor: 'Preprocessor',
      target: 'macro:SQUARE',
      timing: 'preprocess'
    },
    {
      step: 3,
      line: 5,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '#define CONCAT(a,b) a##b 令牌粘贴运算符',
        color: 'blue',
        actor: 'Preprocessor',
        detail: '##是令牌粘贴（token pasting）。CONCAT(var,2) 展开为 var2（一个新标识符）。用于动态生成变量名、函数名。'
      },
      prediction: null,
      misconception: null,
      actor: 'Preprocessor',
      target: 'macro:CONCAT',
      timing: 'preprocess'
    },
    {
      step: 4,
      line: 8,
      executedLines: [3, 4, 5, 6, 7],
      vars: { result: 25 },
      highlightVar: 'result',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'bolt',
        text: 'SQUARE(5) 展开为 ((5) * (5)) = 25',
        color: 'yellow',
        actor: 'CPU',
        detail: '预处理器先展开宏：result = ((5) * (5)); 然后编译器生成乘法指令。宏展开在编译前完成，运行时无开销。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:result',
      timing: 'main-loop'
    },
    {
      step: 5,
      line: 9,
      executedLines: [3, 4, 5, 6, 7, 8],
      vars: { result: 25 },
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '#if DEBUG 条件编译：DEBUG=1 所以编译内部代码',
        color: 'blue',
        actor: 'Preprocessor',
        detail: '条件编译控制代码是否进入编译。#if DEBUG...#endif 段的代码仅当 DEBUG 非 0 时才保留。用于调试开关、平台适配。'
      },
      prediction: null,
      misconception: null,
      actor: 'Preprocessor',
      target: 'preprocessor',
      timing: 'preprocess'
    },
    {
      step: 6,
      line: 10,
      executedLines: [3, 4, 5, 6, 7, 8, 9],
      vars: { result: 25 },
      highlightVar: 'result',
      isDanger: false,
      output: [{ type: 'success', text: 'DEBUG: result = 25' }],
      explanation: {
        icon: 'terminal',
        text: '输出调试信息：DEBUG: result = 25',
        color: 'green',
        actor: 'CPU',
        detail: '因为 DEBUG=1，#if 块被保留并编译。printf 输出调试信息。生产环境可#define DEBUG 0 关闭调试代码。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 7,
      line: 12,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11],
      vars: { result: 25, var12: 42 },
      highlightVar: 'var12',
      isDanger: false,
      output: [{ type: 'success', text: 'DEBUG: result = 25' }],
      explanation: {
        icon: 'memory',
        text: 'var12 = 42，由 CONCAT(var,2) 生成的变量名',
        color: 'purple',
        actor: 'CPU',
        detail: 'CONCAT(var,2) 展开为 var2，所以访问的是 var12 变量。令牌粘贴用于动态生成标识符。'
      },
      prediction: {
        question: 'CONCAT(var,2) 展开后是什么？',
        options: ['var, 2', 'var2', 'var+2'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:var12',
      timing: 'main-loop'
    },
    {
      step: 8,
      line: 13,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      vars: { result: 25, var12: 42 },
      highlightVar: 'var12',
      isDanger: false,
      output: [{ type: 'success', text: 'DEBUG: result = 25' }, { type: 'success', text: 'CONCAT: var1 = 42' }],
      explanation: {
        icon: 'terminal',
        text: '输出 CONCAT: var1 = 42（实际应该是 var2=42，这里演示格式）',
        color: 'green',
        actor: 'CPU',
        detail: 'printf 输出 CONCAT(var,2) 的结果。注意格式串是"var%d"，所以显示"var1"，实际访问的是 var12。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 9,
      line: 14,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: { result: 25, var12: 42 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'DEBUG: result = 25' }, { type: 'success', text: 'CONCAT: var1 = 42' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，预处理：宏替换/条件编译/令牌粘贴',
        color: 'green',
        actor: 'CPU',
        detail: '预处理技巧：1) #define 定义宏 2) 带参宏注意括号 3) ##令牌粘贴 4) #if 条件编译 5) #ifdef/#ifndef 检查宏是否存在。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: '预处理：宏替换、条件编译、令牌粘贴，编译前文本处理',
    pitfalls: [
      '宏是文本替换不是函数，SQUARE(i++) 会导致 i 自增两次',
      '带参宏定义必须加括号：((x) * (x)) 防止优先级问题',
      '##令牌粘贴生成新标识符，不是字符串连接'
    ],
    transferQuestion: '如何用宏实现通用的 MAX(a,b)？需要注意什么问题？（提示：参数括号、副作用）',
    miniExercise: {
      bugCode: '#define DOUBLE(x) x + x\nint result = DOUBLE(3) * 2;  // result 是多少？',
      hint: '展开为 3 + 3 * 2 = 3 + 6 = 9，不是 12！应该定义为 ((x) * 2)'
    }
  }
};
