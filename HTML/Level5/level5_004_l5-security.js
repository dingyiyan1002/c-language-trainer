window.LESSON_DATA = {
  meta: {
    id: 'l5-security',
    title: '安全编程基础',
    chapter: 'level5',
    index: 4,
    filename: 'secure-coding.c',
    keyPoints: ['缓冲区溢出', '格式化字符串', '安全函数']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<string.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdlib.h>' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'vulnerable_gets' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: '[' }, { type: 'num', text: '10' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Enter your name: "' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'gets' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 危险！不检查边界' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Hello, %s!\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'punc', text: '}' }] },
    { num: 11, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 12, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'safe_fgets' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: '[' }, { type: 'num', text: '10' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Enter your name: "' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'fn', text: 'fgets' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'stdin' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 16, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Input error!\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'return' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Hello, %s!\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'punc', text: '}' }] },
    { num: 21, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 22, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'vulnerable_printf' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'user_input' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'id', text: 'user_input' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 危险！格式化字符串漏洞' }] },
    { num: 24, tokens: [{ type: 'punc', text: '}' }] },
    { num: 25, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 26, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'safe_printf' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'user_input' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 27, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"%s"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'user_input' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 安全：使用格式说明符' }] },
    { num: 28, tokens: [{ type: 'punc', text: '}' }] },
    { num: 29, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 30, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 31, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'safe_fgets' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 32, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'safe_printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Hello World"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 33, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 34, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'buffer', name: 'buffer', type: 'char[10]', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'user_input', name: 'user_input', type: 'char*', addr: '0x7ffc10', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 5 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习安全编程基础', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 6, executedLines: [1, 2, 3, 4, 5], vars: { buffer: ['\0']*10 }, highlightVar: 'buffer', isDanger: false, output: [], explanation: { icon: 'memory', text: 'char buffer[10] 栈上缓冲区', color: 'yellow', actor: 'CPU', detail: 'buffer 在栈上分配 10 字节。如果输入超过 9 个字符（需要空间存储\\0），就会发生缓冲区溢出，覆盖相邻栈数据。' }, prediction: { question: 'gets 函数为什么危险？', options: ['速度慢', '不检查边界', '不支持中文'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:buffer', timing: 'declaration' },
    { step: 2, line: 8, executedLines: [1, 2, 3, 4, 5, 6, 7], vars: { buffer: ['\0']*10 }, highlightVar: 'buffer', isDanger: true, output: [], explanation: { icon: 'danger', text: 'gets(buffer) 不检查输入长度！', color: 'red', actor: 'Attacker', detail: 'gets 不检查缓冲区大小。如果用户输入"AAAAAAAAAABBBBBCCC"（20 字符），会溢出 buffer，覆盖返回地址。攻击者可构造输入控制程序执行流。' }, prediction: null, misconception: { title: '缓冲区溢出攻击', text: '攻击者输入超长字符串覆盖返回地址，使函数返回到恶意代码。这就是著名的"栈溢出攻击"。gets 在 C11 标准中已被移除！' }, actor: 'Attacker', target: 'var:buffer', timing: 'vulnerable' },
    { step: 3, line: 14, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], vars: { buffer: ['\0']*10 }, highlightVar: 'buffer', isDanger: false, output: [], explanation: { icon: 'shield', text: 'fgets(buffer, sizeof(buffer), stdin) 安全检查', color: 'green', actor: 'CPU', detail: 'fgets 参数：缓冲区指针、最大读取字节数、输入流。sizeof(buffer)=10，最多读取 9 个字符 +1 个\\0。溢出被防止。' }, prediction: { question: 'fgets 最多读取多少字节？', options: ['无限制', 'sizeof(buffer)-1', 'sizeof(buffer)'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:buffer', timing: 'safe' },
    { step: 4, line: 15, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], vars: { buffer: ['H','e','l','l','o','\\n','\0'] }, highlightVar: 'buffer', isDanger: false, output: [], explanation: { icon: 'check', text: '成功读取输入，自动截断', color: 'green', actor: 'CPU', detail: '如果用户输入"Hello"，fgets 读取"Hello\\n\\0"共 7 字节。如果输入超过 9 字符，fgets 只读取 9 个字符并添加\\0，剩余字符留在输入缓冲区。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:buffer', timing: 'safe-read' },
    { step: 5, line: 23, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], vars: { user_input: '%x%x%x' }, highlightVar: 'user_input', isDanger: true, output: [], explanation: { icon: 'danger', text: 'printf(user_input) 格式化字符串漏洞！', color: 'red', actor: 'Attacker', detail: '如果用户输入"%x%x%x%x"，printf 会将栈上数据当作参数输出，泄露敏感信息。攻击者可用"%n"写入内存，篡改程序行为。' }, prediction: { question: '格式化字符串漏洞会导致什么？', options: ['程序变慢', '信息泄露/内存写入', '中文乱码'], answer: 1 }, misconception: null, actor: 'Attacker', target: 'var:user_input', timing: 'vulnerable' },
    { step: 6, line: 27, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], vars: { user_input: '%x%x%x' }, highlightVar: 'user_input', isDanger: false, output: [], explanation: { icon: 'shield', text: 'printf("%s", user_input) 安全写法', color: 'green', actor: 'CPU', detail: '使用"%s"格式说明符，user_input 被当作普通字符串输出。即使用户输入"%x%x%x"，也只输出字面的"%x%x%x"字符串。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:user_input', timing: 'safe' },
    { step: 7, line: 31, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], vars: {}, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Enter your name: Hello' }, { type: 'success', text: 'Hello, Hello!\\n' }], explanation: { icon: 'terminal', text: '安全函数正确执行', color: 'green', actor: 'CPU', detail: '使用安全函数（fgets、带格式的 printf）可防止缓冲区溢出和格式化字符串攻击。这是安全编程的基本要求。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'output' }
  ],
  summary: {
    oneLiner: 'gets 导致缓冲区溢出，printf 用户输入导致格式化字符串漏洞，使用安全函数替代',
    pitfalls: [
      'gets 不检查边界，已被 C11 移除；必须用 fgets 替代',
      'printf(user_input) 导致格式化字符串漏洞；应该用 printf("%s", user_input)',
      'strcpy、sprintf 等函数也不安全，应使用 strncpy、snprintf 等带边界检查的版本'
    ],
    transferQuestion: '为什么 strcpy 不安全？应该用什么替代？',
    miniExercise: {
      bugCode: 'char buf[10];\\nstrcpy(buf, user_input);  // 危险！\\n// 应该怎么写？',
      hint: '用 strncpy(buf, user_input, sizeof(buf)-1); buf[sizeof(buf)-1] = \\0; 确保不溢出并手动添加终止符。'
    }
  }
};
