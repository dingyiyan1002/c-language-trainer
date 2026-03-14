window.LESSON_DATA = {
  meta: {
    id: 'l1-condition',
    title: '条件判断',
    chapter: 'level1',
    index: 3,
    filename: 'condition.c',
    keyPoints: ['if-else 规范', 'switch-case', '错误处理']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 4, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'status' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 0=空闲，1=运行，2=错误' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'status' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 6, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[IDLE] System is idle\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'else' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'status' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 8, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[RUN] System is running\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'else' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'status' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'num', text: '2' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[ERR] Error occurred!\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'else' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 12, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[UNK] Unknown status: %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'status' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'day' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '3' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'switch' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'day' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 16, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'case' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'op', text: ':' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Monday"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'break' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'case' }, { type: 'ws', text: ' ' }, { type: 'num', text: '2' }, { type: 'op', text: ':' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Tuesday"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'break' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'case' }, { type: 'ws', text: ' ' }, { type: 'num', text: '3' }, { type: 'op', text: ':' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Wednesday"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'break' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'default' }, { type: 'op', text: ':' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Other day"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 21, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'err' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '-' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 错误码' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'err' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 23, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[ERROR] Code: %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'err' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 24, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 25, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 26, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'status', name: 'status', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'day', name: 'day', type: 'int', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 6 },
    { key: 'err', name: 'err', type: 'int', addr: '0x7ffc08', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 11 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习条件判断', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 4, executedLines: [2, 3], vars: { status: 1 }, highlightVar: 'status', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 int 变量 status = 1，表示运行状态', color: 'yellow', actor: 'CPU', detail: 'status 变量用于状态机：0=空闲，1=运行，2=错误。这是嵌入式系统常见的设计模式。' }, prediction: { question: 'status=1 表示什么状态？', options: ['空闲', '运行', '错误'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:status', timing: 'main-loop' },
    { step: 2, line: 5, executedLines: [2, 3, 4], vars: { status: 1 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'target', text: '判断 status==0，即 1==0 为假', color: 'orange', actor: 'CPU', detail: 'CPU 执行 CMP 指令比较 status 和 0，结果不相等，条件为假，跳过第一个 if 分支。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'condition-check' },
    { step: 3, line: 7, executedLines: [2, 3, 4, 5, 6], vars: { status: 1 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'target', text: '判断 status==1，即 1==1 为真', color: 'orange', actor: 'CPU', detail: '进入 else-if 分支，判断 1==1 为真，执行对应的代码块。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'condition-check' },
    { step: 4, line: 8, executedLines: [2, 3, 4, 5, 6, 7], vars: { status: 1 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[RUN] System is running' }], explanation: { icon: 'terminal', text: '执行 printf 输出：[RUN] System is running', color: 'green', actor: 'CPU', detail: '匹配到 status==1，输出运行状态信息。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 5, line: 14, executedLines: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], vars: { status: 1, day: 3 }, highlightVar: 'day', isDanger: false, output: [{ type: 'success', text: '[RUN] System is running' }], explanation: { icon: 'memory', text: '声明 int 变量 day = 3，表示星期几', color: 'blue', actor: 'CPU', detail: 'day 变量用于 switch-case 演示：1=周一，2=周二，3=周三，等等。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:day', timing: 'main-loop' },
    { step: 6, line: 15, executedLines: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], vars: { status: 1, day: 3 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[RUN] System is running' }], explanation: { icon: 'target', text: 'switch(day) 根据 day 的值跳转到对应 case', color: 'purple', actor: 'CPU', detail: 'switch 语句生成跳转表，直接跳转到匹配的 case。比多个 if-else 效率更高， especially 当 case 很多时。' }, prediction: { question: 'switch 匹配到 case 3 后会执行什么？', options: ['只执行 case 3', '从 case 3 开始向下执行直到 break', '报错'], answer: 1 }, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'switch-check' },
    { step: 7, line: 18, executedLines: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], vars: { status: 1, day: 3 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[RUN] System is running' }, { type: 'success', text: 'Wednesday' }], explanation: { icon: 'terminal', text: '匹配到 case 3，输出 Wednesday 然后 break', color: 'green', actor: 'CPU', detail: 'day=3 匹配 case 3，执行 printf 输出"Wednesday"，然后 break 跳出 switch。break 很重要，否则会"穿透"(fall through) 到下一个 case。' }, prediction: null, misconception: { title: 'switch 不自动 break 会穿透', text: 'switch 匹配后从该 case 开始向下执行，直到遇到 break 或 switch 结束。忘记 break 是常见 bug，会导致执行错误的 case 代码。' }, actor: 'CPU', target: 'stdout', timing: 'case-exec' },
    { step: 8, line: 21, executedLines: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], vars: { status: 1, day: 3, err: -1 }, highlightVar: 'err', isDanger: false, output: [{ type: 'success', text: '[RUN] System is running' }, { type: 'success', text: 'Wednesday' }], explanation: { icon: 'memory', text: '声明 int 变量 err = -1，表示错误码', color: 'orange', actor: 'CPU', detail: '在嵌入式/系统编程中，函数通常返回 0 表示成功，负数表示错误码。-1 是常见错误返回值。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:err', timing: 'main-loop' },
    { step: 9, line: 22, executedLines: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], vars: { status: 1, day: 3, err: -1 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'target', text: '判断 err<0，即 -1<0 为真', color: 'orange', actor: 'CPU', detail: '先检查错误情况是良好的编程习惯。错误处理应该在正常逻辑之前执行 (fail fast 原则)。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'condition-check' },
    { step: 10, line: 23, executedLines: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], vars: { status: 1, day: 3, err: -1 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[RUN] System is running' }, { type: 'success', text: 'Wednesday' }, { type: 'success', text: '[ERROR] Code: -1' }], explanation: { icon: 'terminal', text: '执行错误处理：输出 [ERROR] Code: -1', color: 'green', actor: 'CPU', detail: '错误码为负数，触发错误处理逻辑。实际项目中应该根据具体错误码采取不同处理措施。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: 'if-else 处理范围判断，switch-case 处理多分支等值匹配，错误应该优先处理 (fail fast)',
    pitfalls: [
      'switch 忘记 break 会穿透到下一个 case，导致执行错误代码',
      'if-else 链应该先处理错误情况 (fail fast)，再处理正常逻辑',
      'default 分支应该始终存在，处理未预期的情况'
    ],
    transferQuestion: '如果去掉 case 3 后面的 break，会输出什么？',
    miniExercise: {
      bugCode: 'switch(x) {\n  case 1: printf("A");\n  case 2: printf("B");\n}\n// x=1 时输出什么？',
      hint: 'case 1 没有 break，会穿透到 case 2'
    }
  }
};
