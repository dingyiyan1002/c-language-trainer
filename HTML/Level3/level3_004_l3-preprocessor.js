window.LESSON_DATA = {
  meta: {
    id: 'l3-preprocessor',
    title: '预处理进阶',
    chapter: 'level3',
    index: 4,
    filename: 'preprocessor-advanced.c',
    keyPoints: ['宏展开', '##运算符', '条件编译']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SQUARE' }, { type: 'punc', text: '(' }, { type: 'id', text: 'x' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'x' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'x' }, { type: 'punc', text: ')' }] },
    { num: 4, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'CONCAT' }, { type: 'punc', text: '(' }, { type: 'id', text: 'a' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'a' }, { type: 'op', text: '##' }, { type: 'id', text: 'b' }] },
    { num: 5, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'DEBUG_LEVEL' }, { type: 'ws', text: ' ' }, { type: 'num', text: '2' }] },
    { num: 6, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 7, tokens: [{ type: 'pp', text: '#if' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'DEBUG_LEVEL' }, { type: 'ws', text: ' ' }, { type: 'op', text: '>=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '2' }] },
    { num: 8, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'DEBUG_PRINT' }, { type: 'punc', text: '(' }, { type: 'id', text: 'msg' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'id', text: 'msg' }, { type: 'punc', text: ')' }] },
    { num: 9, tokens: [{ type: 'pp', text: '#else' }] },
    { num: 10, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'DEBUG_PRINT' }, { type: 'punc', text: '(' }, { type: 'id', text: 'msg' }, { type: 'punc', text: ')' }] },
    { num: 11, tokens: [{ type: 'pp', text: '#endif' }] },
    { num: 12, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 13, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'result' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SQUARE' }, { type: 'punc', text: '(' }, { type: 'num', text: '5' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'CONCAT' }, { type: 'punc', text: '(' }, { type: 'id', text: 'var' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: '1' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '100' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'DEBUG_PRINT' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[DEBUG] result = %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'result' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'result', name: 'result', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'var1', name: 'var1', type: 'int', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 2 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习预处理进阶', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 3, executedLines: [1, 2], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '#define SQUARE(x) ((x) * (x)) 带参数宏', color: 'purple', actor: 'Preprocessor', detail: 'SQUARE 是带参数的宏。SQUARE(5) 展开为 ((5) * (5)) = 25。注意括号很重要：如果没有外层括号，SQUARE(1+2) 会展开为 1+2 * 1+2 = 6 而不是 9。' }, prediction: { question: '为什么宏定义要用括号包裹参数？', options: ['美观', '防止优先级问题', '语法规则'], answer: 1 }, misconception: null, actor: 'Preprocessor', target: 'preprocessor', timing: 'pre-compile' },
    { step: 2, line: 4, executedLines: [1, 2, 3], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '#define CONCAT(a,b) a##b 标记粘贴运算符', color: 'purple', actor: 'Preprocessor', detail: '##是标记粘贴运算符（token pasting）。CONCAT(var,1) 展开为 var1。这在生成唯一变量名时非常有用。##将两个标记合并成一个新的标识符。' }, prediction: null, misconception: null, actor: 'Preprocessor', target: 'preprocessor', timing: 'pre-compile' },
    { step: 3, line: 5, executedLines: [1, 2, 3, 4], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '#define DEBUG_LEVEL 2，定义调试级别', color: 'purple', actor: 'Preprocessor', detail: 'DEBUG_LEVEL 是配置宏，用于条件编译。通过修改这个值，可以控制编译时包含哪些调试代码。' }, prediction: null, misconception: null, actor: 'Preprocessor', target: 'preprocessor', timing: 'pre-compile' },
    { step: 4, line: 7, executedLines: [1, 2, 3, 4, 5, 6], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '#if DEBUG_LEVEL >= 2，条件编译开始', color: 'purple', actor: 'Preprocessor', detail: '#if 检查预处理常量的值。DEBUG_LEVEL=2，2>=2 为真，所以预处理器包含#8 的 DEBUG_PRINT 定义（带 printf 的版本）。这是比#ifdef 更灵活的条件编译。' }, prediction: { question: '#if 和#ifdef 有什么区别？', options: ['没有区别', '#if 检查值，#ifdef 检查是否定义', '#ifdef 检查值'], answer: 1 }, misconception: null, actor: 'Preprocessor', target: 'preprocessor', timing: 'pre-compile' },
    { step: 5, line: 14, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], vars: { result: 25 }, highlightVar: 'result', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'result = SQUARE(5)，宏展开为 (5)*(5)', color: 'green', actor: 'CPU', detail: 'SQUARE(5) 在预处理阶段展开为 ((5) * (5))。编译器看到的是展开后的代码。result = 25。宏展开发生在编译之前，不产生运行时开销。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:result', timing: 'main-loop' },
    { step: 6, line: 15, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], vars: { result: 25, var1: 100 }, highlightVar: 'var1', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'CONCAT(var,1) = 100，宏展开为 var1 = 100', color: 'green', actor: 'CPU', detail: 'CONCAT(var,1) 展开为 var1。这行代码等价于 int var1 = 100;。##运算符在宏展开时将 var 和 1 粘合成 var1。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:var1', timing: 'main-loop' },
    { step: 7, line: 16, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], vars: { result: 25, var1: 100 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[DEBUG] result = 25' }], explanation: { icon: 'terminal', text: 'DEBUG_PRINT 输出调试信息', color: 'green', actor: 'CPU', detail: '因为 DEBUG_LEVEL>=2，DEBUG_PRINT(msg) 展开为 printf(msg)。输出 [DEBUG] result = 25。如果修改 DEBUG_LEVEL 为 0，条件为假，DEBUG_PRINT 展开为空，调试代码被完全移除。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '#define 带参宏要加括号，##粘贴标记，#if 条件编译控制代码包含',
    pitfalls: [
      '宏定义中参数必须用括号包裹，否则运算符优先级会导致错误',
      '##是标记粘贴运算符，CONCAT(a,b) 展开为 ab（新标识符）',
      '#if 检查预处理常量值，#ifdef 检查宏是否定义'
    ],
    transferQuestion: '如果#define DOUBLE(x) x+x，那么 DOUBLE(1+2) 展开后是什么？',
    miniExercise: {
      bugCode: '#define DOUBLE(x) x * x\\nint r = DOUBLE(1+2);  // r 是多少？',
      hint: '展开为 1+2 * 1+2 = 1+2+2 = 5，不是 9！应该写#define DOUBLE(x) ((x) * (x))'
    }
  }
};
