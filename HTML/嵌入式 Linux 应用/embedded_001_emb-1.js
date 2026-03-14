window.LESSON_DATA = {
  meta: {
    chapter: 'embedded',
    lessonId: 'embedded-1',
    title: '文件 IO 基础',
    description: 'open、read、write、close、lseek 系统调用详解'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<fcntl.h>' }
    ],
    [
      { type: 'cmt', text: '// open - 打开文件' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'fd' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'open' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"test.txt"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'O_RDONLY' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// fd = 3 (0/1/2 被 stdin/stdout/stderr 占用)' }
    ],
    [
      { type: 'cmt', text: '// read - 读取文件' }
    ],
    [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'buf' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '100' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'ssize_t' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'read' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'buf' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'buf' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// n = 实际读取字节数' }
    ],
    [
      { type: 'cmt', text: '// lseek - 移动文件指针' }
    ],
    [
      { type: 'id', text: 'lseek' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'SEEK_SET' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 移动到文件开头' }
    ],
    [
      { type: 'id', text: 'close' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 关闭文件描述符' }
    ]
  ],

  varConfig: [
    { name: 'fd', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'buf', color: '#22c55e', appearStep: 3, type: 'char[100]' },
    { name: 'n', color: '#f59e0b', appearStep: 4, type: 'ssize_t' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示文件 IO 操作',
        detail: 'Linux 文件 IO 系统调用：open 打开文件返回文件描述符，read/write 读写数据，close 关闭描述符，lseek 移动文件指针。文件描述符是小整数（0=stdin, 1=stdout, 2=stderr）。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 2,
      executedLines: [2],
      vars: { fd: { value: 3, type: 'int', file: 'test.txt', flags: 'O_RDONLY' } },
      explanation: {
        text: '第 3 行：open 打开文件返回 fd=3',
        detail: 'open 系统调用打开 test.txt，O_RDONLY 表示只读模式。返回最小可用文件描述符 3（0/1/2 被标准输入输出错误占用）。文件描述符是进程级资源。',
        actor: 'Kernel',
        icon: 'Folder',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [2, 3],
      vars: {
        fd: { value: 3, type: 'int', file: 'test.txt' },
        file_desc_table: { 0: 'stdin', 1: 'stdout', 2: 'stderr', 3: 'test.txt' }
      },
      explanation: {
        text: '文件描述符表详解',
        detail: '进程文件描述符表：0→stdin, 1→stdout, 2→stderr, 3→test.txt。open 返回最小可用索引。close 后描述符可复用。',
        actor: 'Kernel',
        icon: 'Table',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 5,
      executedLines: [2, 3, 5],
      vars: {
        fd: { value: 3, type: 'int' },
        buf: { value: '(未初始化)', type: 'char[100]', address: '0x7ffc0000' }
      },
      explanation: {
        text: '第 6 行：声明 100 字节缓冲区',
        detail: 'char buf[100] 在栈区分配 100 字节缓冲区，用于接收 read 读取的数据。缓冲区大小决定单次 read 最大读取量。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [2, 3, 5, 6],
      vars: {
        fd: { value: 3, type: 'int', offset: 50 },
        buf: { value: '"file content..."', type: 'char[100]', filled: 50 },
        n: { value: 50, type: 'ssize_t', bytesRead: 50 }
      },
      explanation: {
        text: '第 7 行：read 读取 50 字节到缓冲区',
        detail: 'read(fd, buf, 100) 从文件当前位置读取最多 100 字节。返回实际读取字节数（50）。文件指针向前移动 50 字节。读到文件末尾返回 0，错误返回 -1。',
        actor: 'Kernel',
        icon: 'Download',
        color: 'purple'
      }
    },
    {
      step: 5,
      line: 9,
      executedLines: [2, 3, 5, 6, 9],
      vars: {
        fd: { value: 3, type: 'int', offset: 0 },
        n: { value: 50, type: 'ssize_t' }
      },
      explanation: {
        text: '第 10 行：lseek 移动文件指针到开头',
        detail: 'lseek(fd, 0, SEEK_SET) 将文件指针移动到文件开头（偏移 0）。类似 fseek。SEEK_SET=开头，SEEK_CUR=当前位置，SEEK_END=文件末尾。',
        actor: 'Kernel',
        icon: 'Move',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 10,
      executedLines: [2, 3, 5, 6, 9, 10],
      vars: {
        fd: { value: 3, type: 'int', closed: true }
      },
      explanation: {
        text: '第 11 行：close 关闭文件描述符',
        detail: 'close(fd) 释放文件描述符 3，内核清理相关资源。描述符 3 可被后续 open 复用。进程退出时自动关闭所有打开的描述符，但显式关闭是好习惯。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'blue'
      }
    }
  ],

  predictions: [
    {
      question: 'open 返回的文件描述符 fd 是什么？',
      options: [
        { text: '文件的内存地址', feedback: '错误！fd 是索引，不是地址。' },
        { text: '内核文件表的下标', feedback: '正确！fd 是非负整数，索引进程的文件描述符表。' },
        { text: '文件的大小', feedback: '错误！与大小无关。' },
        { text: '文件的权限', feedback: '错误！与权限无关。' }
      ],
      correctIndex: 1
    },
    {
      question: 'read 返回值的含义是什么？',
      options: [
        { text: '缓冲区大小', feedback: '错误！缓冲区大小是传入参数。' },
        { text: '实际读取的字节数', feedback: '正确！返回>0=实际字节数，=0=EOF，<0=错误。' },
        { text: '文件剩余字节数', feedback: '错误！' },
        { text: '总是等于 count 参数', feedback: '错误！可能少于 count（文件末尾）。' }
      ],
      correctIndex: 1
    },
    {
      question: 'lseek(fd, 0, SEEK_END) 的作用？',
      options: [
        { text: '移动到文件开头', feedback: '错误！这是 SEEK_SET。' },
        { text: '移动到当前位置', feedback: '错误！这是 SEEK_CUR。' },
        { text: '移动到文件末尾', feedback: '正确！常用于获取文件大小。' },
        { text: '关闭文件', feedback: '错误！这是 close。' }
      ],
      correctIndex: 2
    }
  ],

  misconceptions: [
    {
      myth: 'read 总是读取 count 字节',
      truth: 'read 最多读取 count 字节。实际读取可能更少（文件末尾、管道数据不足、信号中断）。总是检查返回值！'
    },
    {
      myth: '文件描述符可以跨进程共享',
      truth: '默认不行。但 fork 后子进程继承父进程的 fd。也可通过 Unix Domain Socket 传递 fd 给无关进程。'
    },
    {
      myth: 'close 后 fd 自动变为 -1',
      truth: 'close 不修改 fd 变量值！fd 仍保存原值，但已是无效描述符（悬空）。好习惯：close 后置为 -1。'
    },
    {
      myth: '进程退出不需要 close',
      truth: '虽然进程退出时内核自动关闭 fd，但显式关闭是好习惯。长期运行的程序忘记 close 会导致 fd 泄漏（上限通常 1024）。'
    }
  ],

  summary: {
    keyPoints: [
      'open 打开文件返回文件描述符（小整数）',
      'read/write 返回实际读写字节数',
      'lseek 移动文件指针（SEEK_SET/CUR/END）',
      'close 释放文件描述符',
      '文件描述符 0/1/2 是标准输入输出错误'
    ],
    pitfalls: [
      '不检查 open 返回值（可能 -1）',
      'read 不检查返回值（可能<0 或 0）',
      '忘记 close 导致 fd 泄漏',
      'lseek 后不检查返回值（可能 -1）'
    ],
    transferQuestion: '如何复制一个文件？写出完整的 open/read/write/close 代码流程。'
  }
};
