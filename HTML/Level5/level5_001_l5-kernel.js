window.LESSON_DATA = {
  meta: {
    id: 'l5-kernel',
    title: '操作系统内核基础',
    chapter: 'level5',
    index: 1,
    filename: 'kernel-basics.c',
    keyPoints: ['系统调用', '内核空间', '用户空间']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<unistd.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<sys/types.h>' }] },
    { num: 4, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<sys/stat.h>' }] },
    { num: 5, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<fcntl.h>' }] },
    { num: 6, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 7, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'fd' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: '[' }, { type: 'num', text: '100' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 系统调用：open 文件' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'fd' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'open' }, { type: 'punc', text: '(' }, { type: 'str', text: '"test.txt"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'O_RDONLY' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'fd' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 14, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'perror' }, { type: 'punc', text: '(' }, { type: 'str', text: '"open"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 17, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 系统调用：read 文件内容' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'ssize_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'read' }, { type: 'punc', text: '(' }, { type: 'id', text: 'fd' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'n' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 21, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'perror' }, { type: 'punc', text: '(' }, { type: 'str', text: '"read"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 22, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 24, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 25, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 写入 stdout（也是文件描述符）' }] },
    { num: 26, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'write' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 27, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 28, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 系统调用：close 文件' }] },
    { num: 29, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'close' }, { type: 'punc', text: '(' }, { type: 'id', text: 'fd' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 30, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 31, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'fd', name: 'fd', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'buffer', name: 'buffer', type: 'char[100]', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 },
    { key: 'n', name: 'n', type: 'ssize_t', addr: '0x7ffc68', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 5 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习操作系统内核基础', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 12, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], vars: { fd: 3 }, highlightVar: 'fd', isDanger: false, output: [], explanation: { icon: 'kernel', text: 'open() 系统调用打开文件', color: 'yellow', actor: 'Kernel', detail: 'open 是系统调用，从用户空间陷入内核空间。内核检查权限、找到文件、分配文件描述符（如 3）。返回的 fd 是进程级别的资源句柄。' }, prediction: { question: '系统调用是什么？', options: ['C 库函数', '用户程序请求内核服务的接口', '硬件中断'], answer: 1 }, misconception: null, actor: 'Kernel', target: 'var:fd', timing: 'syscall' },
    { step: 2, line: 13, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], vars: { fd: 3 }, highlightVar: 'fd', isDanger: false, output: [], explanation: { icon: 'target', text: '检查 fd < 0，open 是否失败', color: 'orange', actor: 'CPU', detail: '系统调用失败返回 -1，并设置 errno。perror 打印错误信息（如"Permission denied"）。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'condition-check' },
    { step: 3, line: 19, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], vars: { fd: 3, buffer: ['\0']*100 }, highlightVar: 'buffer', isDanger: false, output: [], explanation: { icon: 'memory', text: 'char buffer[100] 缓冲区', color: 'blue', actor: 'CPU', detail: 'buffer 是用户空间的内存区域，用于接收从内核空间复制的数据。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:buffer', timing: 'init' },
    { step: 4, line: 19, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], vars: { fd: 3 }, highlightVar: 'n', isDanger: false, output: [], explanation: { icon: 'kernel', text: 'read() 系统调用读取文件内容', color: 'green', actor: 'Kernel', detail: 'read 是系统调用：1) 从用户空间传入 fd 和 buffer 指针；2) 内核找到文件对应数据；3) 将数据从内核空间复制到用户空间 buffer；4) 返回实际读取的字节数。' }, prediction: { question: 'read 返回的是什么？', options: ['0 或 1', '实际读取的字节数', '文件描述符'], answer: 1 }, misconception: null, actor: 'Kernel', target: 'var:n', timing: 'syscall' },
    { step: 5, line: 20, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], vars: { fd: 3, buffer: ['H','e','l','l','o','\\n','\0'], n: 6 }, highlightVar: 'n', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'n = 6，成功读取 6 字节', color: 'green', actor: 'CPU', detail: 'read 返回实际读取的字节数（6）。buffer 现在包含文件内容："Hello\\n"。返回 0 表示 EOF（文件结束）。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:n', timing: 'syscall-return' },
    { step: 6, line: 26, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], vars: { fd: 3, buffer: ['H','e','l','l','o','\\n','\0'], n: 6 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Hello' }], explanation: { icon: 'kernel', text: 'write(1, buffer, n) 系统调用输出到 stdout', color: 'green', actor: 'Kernel', detail: 'write 是系统调用。fd=1 是标准输出（stdout）。数据从用户空间 buffer 复制到内核空间，再输出到终端。' }, prediction: { question: '文件描述符 1 代表什么？', options: ['stdin', 'stdout', 'stderr'], answer: 1 }, misconception: null, actor: 'Kernel', target: 'stdout', timing: 'syscall' },
    { step: 7, line: 29, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], vars: { fd: 'closed' }, highlightVar: 'fd', isDanger: false, output: [{ type: 'success', text: 'Hello' }], explanation: { icon: 'kernel', text: 'close() 系统调用关闭文件', color: 'green', actor: 'Kernel', detail: 'close 释放文件描述符资源，内核清理相关文件表条目。不关闭会导致资源泄漏。' }, prediction: null, misconception: null, actor: 'Kernel', target: 'var:fd', timing: 'syscall' },
    { step: 8, line: 30, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], vars: {}, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Hello' }], explanation: { icon: 'check', text: '程序正常退出', color: 'green', actor: 'CPU', detail: '完整的系统调用流程：open→read→write→close。每次系统调用都有上下文切换开销（用户空间↔内核空间）。' }, prediction: null, misconception: null, actor: 'CPU', target: 'exit', timing: 'exit' }
  ],
  summary: {
    oneLiner: '系统调用是用户程序请求内核服务的接口，open/read/write/close 是基本文件操作',
    pitfalls: [
      '系统调用失败返回 -1 并设置 errno，必须检查',
      'read 返回实际读取的字节数，0 表示 EOF，负数表示错误',
      '文件使用完毕必须 close，否则导致资源泄漏'
    ],
    transferQuestion: '为什么系统调用比库函数慢？',
    miniExercise: {
      bugCode: 'int fd = open("file.txt", O_RDONLY);\\n// 忘记检查 fd 就直接 read\\n// 这样有什么问题？',
      hint: '如果 open 失败（fd=-1），read(-1, ...) 会失败并设置 EBADF 错误。必须检查系统调用返回值！'
    }
  }
};
