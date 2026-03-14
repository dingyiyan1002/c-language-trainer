window.LESSON_DATA = {
  meta: {
    id: 'l4-process',
    title: '进程通信',
    chapter: 'Level4',
    index: 2,
    filename: 'ipc_pipe.c',
    keyPoints: ['管道', '共享内存', '信号量']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<unistd.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<string.h>' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'pipefd' }, { type: 'punc', text: '[' }, { type: 'num', text: '2' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: '[' }, { type: 'num', text: '100' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'fn', text: 'pipe' }, { type: 'punc', text: '(' }, { type: 'id', text: 'pipefd' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'op', text: '-' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'punc', text: '{' }] },
    { num: 9, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Pipe creation failed\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'fn', text: 'fork' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 13, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'close' }, { type: 'punc', text: '(' }, { type: 'id', text: 'pipefd' }, { type: 'punc', text: '[' }, { type: 'num', text: '0' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'msg' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"Hello from child"' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'write' }, { type: 'punc', text: '(' }, { type: 'id', text: 'pipefd' }, { type: 'punc', text: '[' }, { type: 'num', text: '1' }, { type: 'punc', text: ']' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'msg' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'strlen' }, { type: 'punc', text: '(' }, { type: 'id', text: 'msg' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'close' }, { type: 'punc', text: '(' }, { type: 'id', text: 'pipefd' }, { type: 'punc', text: '[' }, { type: 'num', text: '1' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'else' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 18, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'close' }, { type: 'punc', text: '(' }, { type: 'id', text: 'pipefd' }, { type: 'punc', text: '[' }, { type: 'num', text: '1' }, { type: 'punc', text: ']' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'read' }, { type: 'punc', text: '(' }, { type: 'id', text: 'pipefd' }, { type: 'punc', text: '[' }, { type: 'num', text: '0' }, { type: 'punc', text: ']' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Parent received: %s\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 21, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 23, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'pipefd', name: 'pipefd', type: 'int[2]', addr: '0x7fff10', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'buffer', name: 'buffer', type: 'char[100]', addr: '0x7fff20', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'msg', name: 'msg', type: 'char*', addr: '0x400000', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习进程间通信 (IPC) - 管道', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 6,
      executedLines: [5],
      vars: { pipefd: [0, 0] },
      highlightVar: 'pipefd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'pipe',
        text: 'pipefd[2] 管道文件描述符数组',
        color: 'yellow',
        actor: 'CPU',
        detail: 'pipefd[0] 用于读，pipefd[1] 用于写。管道是半双工的：数据单向流动，从写端到读端。'
      },
      prediction: {
        question: 'pipe() 成功后，pipefd 中存储什么？',
        options: ['文件路径', '文件描述符（整数）', '进程 ID'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:pipefd',
      timing: 'main-loop'
    },
    {
      step: 2,
      line: 8,
      executedLines: [5, 6, 7],
      vars: { pipefd: [3, 4] },
      highlightVar: 'pipefd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'pipe(pipefd) 创建匿名管道',
        color: 'green',
        actor: 'OS',
        detail: 'pipe 系统调用创建内核缓冲区，返回两个文件描述符：pipefd[0] 读端，pipefd[1] 写端。失败返回 -1。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'pipe:create',
      timing: 'runtime'
    },
    {
      step: 3,
      line: 12,
      executedLines: [5, 6, 7, 8, 9, 10, 11],
      vars: { pipefd: [3, 4] },
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'fork',
        text: 'fork() 创建子进程',
        color: 'blue',
        actor: 'OS',
        detail: 'fork 复制当前进程：子进程获得父进程的内存副本（写时复制），文件描述符也继承。fork 返回 0 表示子进程，返回 PID 表示父进程。'
      },
      prediction: {
        question: 'fork() 在子进程中返回什么？',
        options: ['父进程 PID', '0', '-1'],
        answer: 1
      },
      misconception: null,
      actor: 'OS',
      target: 'process:fork',
      timing: 'runtime'
    },
    {
      step: 4,
      line: 13,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12],
      vars: { pipefd: [3, 4] },
      highlightVar: 'pipefd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '子进程：关闭读端 pipefd[0]，只写不读',
        color: 'purple',
        actor: 'Child',
        detail: '管道是单向的。子进程只写，所以关闭读端。这是好习惯：减少资源占用，避免死锁。'
      },
      prediction: null,
      misconception: null,
      actor: 'Child',
      target: 'pipe:close-read',
      timing: 'child-exec'
    },
    {
      step: 5,
      line: 14,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: { pipefd: [3, 4], msg: 'Hello from child' },
      highlightVar: 'msg',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'msg = "Hello from child" 准备发送的消息',
        color: 'blue',
        actor: 'Child',
        detail: 'msg 是指向字符串常量的指针。字符串存储在只读数据段。'
      },
      prediction: null,
      misconception: null,
      actor: 'Child',
      target: 'var:msg',
      timing: 'child-exec'
    },
    {
      step: 6,
      line: 15,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      vars: { pipefd: [3, 4], msg: 'Hello from child' },
      highlightVar: 'pipefd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: 'write 写入管道：16 字节发送到内核缓冲区',
        color: 'green',
        actor: 'OS',
        detail: 'write 将 msg 内容复制到内核管道缓冲区。写端是 pipefd[1]。数据在内核中，等待读端读取。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'pipe:write',
      timing: 'child-exec'
    },
    {
      step: 7,
      line: 16,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { pipefd: [3, 4], msg: 'Hello from child' },
      highlightVar: 'pipefd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: 'close(pipefd[1]) 关闭写端',
        color: 'green',
        actor: 'Child',
        detail: '写入完成后关闭写端。当读端读到 EOF（所有写端关闭）时，read 返回 0。'
      },
      prediction: null,
      misconception: null,
      actor: 'Child',
      target: 'pipe:close-write',
      timing: 'child-exec'
    },
    {
      step: 8,
      line: 18,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      vars: { pipefd: [3, 4], buffer: '' },
      highlightVar: 'pipefd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '父进程：关闭写端 pipefd[1]，只读不写',
        color: 'purple',
        actor: 'Parent',
        detail: '父进程只从管道读取，所以关闭写端。单向管道的设计：一端写，另一端读。'
      },
      prediction: null,
      misconception: null,
      actor: 'Parent',
      target: 'pipe:close-write',
      timing: 'parent-exec'
    },
    {
      step: 9,
      line: 19,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      vars: { pipefd: [3, 4], buffer: 'Hello from child' },
      highlightVar: 'buffer',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: 'read 从管道读取数据到 buffer',
        color: 'green',
        actor: 'OS',
        detail: 'read 从内核管道缓冲区复制数据到 user buffer。读端是 pipefd[0]。如果没有数据，read 阻塞等待；如果写端关闭且无数据，read 返回 0（EOF）。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'pipe:read',
      timing: 'parent-exec'
    },
    {
      step: 10,
      line: 20,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      vars: { pipefd: [3, 4], buffer: 'Hello from child' },
      highlightVar: 'buffer',
      isDanger: false,
      output: [{ type: 'success', text: 'Parent received: Hello from child' }],
      explanation: {
        icon: 'terminal',
        text: '输出 Parent received: Hello from child',
        color: 'green',
        actor: 'Parent',
        detail: 'printf 输出从管道读取的消息。进程间通信成功！'
      },
      prediction: {
        question: '管道通信的特点是什么？',
        options: ['双向通信', '单向流动（写→读）', '随机访问'],
        answer: 1
      },
      misconception: null,
      actor: 'Parent',
      target: 'stdout',
      timing: 'parent-exec'
    },
    {
      step: 11,
      line: 22,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      vars: { pipefd: [3, 4], buffer: 'Hello from child' },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Parent received: Hello from child' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，IPC 管道：pipe→fork→write→read',
        color: 'green',
        actor: 'OS',
        detail: '管道通信要点：1) pipe 创建 2) fork 继承 3) 关闭不用的端 4) 单向流动 5) 内核缓冲区。其他 IPC：共享内存（最快）、消息队列、信号量。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: '管道 IPC：pipe 创建、fork 继承、单向流动、内核缓冲',
    pitfalls: [
      '忘记关闭不用的管道端会导致读端无法收到 EOF',
      '管道是单向的：pipefd[0] 只能读，pipefd[1] 只能写',
      '管道缓冲区大小有限（通常 64KB），写满会阻塞'
    ],
    transferQuestion: '如何实现父子进程双向通信？（提示：两个管道）',
    miniExercise: {
      bugCode: 'pipe(pipefd);\nfork();\nwrite(pipefd[0], msg, len);  // 这样有什么问题？',
      hint: 'pipefd[0] 是读端，应该用 pipefd[1] 写'
    }
  }
};
