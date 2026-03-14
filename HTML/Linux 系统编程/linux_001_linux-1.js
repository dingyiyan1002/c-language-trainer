window.LESSON_DATA = {
  meta: {
    chapter: 'linux',
    lessonId: 'linux-1',
    title: '文件 IO 与内核机制',
    description: 'Linux 系统调用、零拷贝技术、页缓存原理'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<fcntl.h>' }
    ],
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<unistd.h>' }
    ],
    [
      { type: 'cmt', text: '// 传统文件读取：多次系统调用 + 数据拷贝' }
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
      { type: 'str', text: '"file.txt"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'O_RDONLY' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'buf' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '4096' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' }
    ],
    [
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
      { type: 'id', text: 'close' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 零拷贝：mmap 直接映射文件到内存' }
    ],
    [
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'mapped' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'mmap' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'NULL' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'size' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'PROT_READ' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'MAP_SHARED' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'fd', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'buf', color: '#22c55e', appearStep: 2, type: 'char[4096]' },
    { name: 'mapped', color: '#f59e0b', appearStep: 5, type: 'void*' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示 Linux 文件 IO 机制',
        detail: 'Linux 文件 IO 涉及系统调用、用户态/内核态切换、数据拷贝。传统 read/write 有 2 次数据拷贝，零拷贝技术（mmap/sendfile）可消除拷贝开销。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 3,
      executedLines: [3],
      vars: { fd: { value: 3, type: 'int', description: '文件描述符' } },
      explanation: {
        text: '第 4 行：open 打开文件，返回 fd=3',
        detail: 'open 系统调用打开文件，返回最小可用文件描述符。fd=3（0/1/2 被 stdin/stdout/stderr 占用）。系统调用开销：约 100-200ns。',
        actor: 'Kernel',
        icon: 'Folder',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 4,
      executedLines: [3, 4],
      vars: {
        fd: { value: 3, type: 'int' },
        buf: { value: '(未初始化)', type: 'char[4096]', address: '0x7ffc0000' }
      },
      explanation: {
        text: '第 5 行：分配 4KB 用户缓冲区',
        detail: 'char buf[4096] 在栈区分配 4KB 缓冲区。这是用户态内存，用于接收文件数据。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 5,
      executedLines: [3, 4, 5],
      vars: {
        fd: { value: 3, type: 'int' },
        buf: { value: '"file content..."', type: 'char[4096]', address: '0x7ffc0000', filled: 4096 }
      },
      explanation: {
        text: '第 6 行：read 读取文件到缓冲区',
        detail: 'read 系统调用流程：1) 用户态→内核态切换 2) 从页缓存拷贝 4KB 到用户缓冲区 3) 返回内核态。2 次数据拷贝：磁盘→页缓存→用户缓冲区。',
        actor: 'Kernel',
        icon: 'HardDrive',
        color: 'purple'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [3, 4, 5, 6],
      vars: {
        fd: { value: 3, type: 'int', closed: true }
      },
      explanation: {
        text: '第 7 行：close 关闭文件描述符',
        detail: 'close 释放文件描述符，内核清理相关资源。文件描述符可复用。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'blue'
      }
    },
    {
      step: 5,
      line: 8,
      executedLines: [3, 4, 5, 6, 8],
      vars: {
        fd: { value: 3, type: 'int', closed: true },
        mapped: { value: '0x7f000000', type: 'void*', size: 'size', mapping: 'file', zerocopy: true }
      },
      explanation: {
        text: '第 9 行：mmap 零拷贝映射文件',
        detail: 'mmap 将文件直接映射到进程地址空间。访问内存即访问文件数据，无需 read 系统调用。消除内核缓冲区到用户缓冲板的拷贝，性能提升 30-50%。',
        actor: 'Kernel',
        icon: 'Memory',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: 'read 系统调用涉及几次数据拷贝？',
      options: [
        { text: '1 次', feedback: '错误！read 只负责从内核到用户的拷贝。' },
        { text: '2 次', feedback: '正确！磁盘→页缓存（DMA），页缓存→用户缓冲区（CPU 拷贝）。' },
        { text: '3 次', feedback: '错误！没有第 3 次拷贝。' },
        { text: '0 次', feedback: '错误！必须有数据拷贝。' }
      ],
      correctIndex: 1
    },
    {
      question: 'mmap 零拷贝的优势是什么？',
      options: [
        { text: '减少系统调用次数', feedback: '部分正确，但不完整。' },
        { text: '消除内核到用户的数据拷贝', feedback: '正确！直接访问页缓存，减少一次 CPU 拷贝。' },
        { text: '减少磁盘 IO', feedback: '错误！磁盘 IO 仍然需要。' },
        { text: 'A 和 B 都对', feedback: '正确！mmap 减少系统调用 + 减少数据拷贝。' }
      ],
      correctIndex: 3
    },
    {
      question: '文件描述符 fd 是什么？',
      options: [
        { text: '文件的内存地址', feedback: '错误！fd 是索引，不是地址。' },
        { text: '内核维护的文件表索引', feedback: '正确！fd 是非负整数，索引内核文件表。' },
        { text: '文件的大小', feedback: '错误！与大小无关。' },
        { text: '文件的权限', feedback: '错误！与权限无关。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'read 直接从磁盘读取数据',
      truth: 'read 从页缓存（Page Cache）读取数据，不是直接从磁盘。磁盘读由 DMA 异步完成，read 只是拷贝到用户缓冲区。'
    },
    {
      myth: 'mmap 没有系统调用开销',
      truth: 'mmap 本身是系统调用，有开销。但映射后访问内存无需系统调用，适合大文件频繁访问场景。'
    },
    {
      myth: '零拷贝完全没有数据拷贝',
      truth: '零拷贝指消除内核缓冲区到用户缓冲区的拷贝。DMA 从磁盘到页缓存的拷贝仍然存在。'
    }
  ],

  summary: {
    keyPoints: [
      'open/read/write/close是基本文件IO系统调用',
      '系统调用涉及用户态/内核态切换（约100-200ns）',
      '传统read有2次数据拷贝：磁盘→页缓存→用户',
      'mmap零拷贝：直接映射文件到用户地址空间',
      'sendfile/splice也是零拷贝技术'
    ],
    pitfalls: [
      '忘记close导致文件描述符泄漏',
      'mmap后忘记munmap导致内存泄漏',
      '小文件用mmap反而开销更大',
      '忽略系统调用失败（返回-1）'
    ],
    transferQuestion: '如果要实现一个高性能文件服务器，应该选择read还是mmap？为什么？'
  }
};
