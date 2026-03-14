window.LESSON_DATA = {
  meta: {
    chapter: 'linux',
    lessonId: 'linux-7',
    title: '内存管理深度',
    description: '虚拟内存、MMU 地址转换、缺页中断、mmap 文件映射'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<sys/mman.h>' }
    ],
    [
      { type: 'cmt', text: '// 虚拟内存：每个进程独立的地址空间' }
    ],
    [
      { type: 'cmt', text: '// 0x00000000 ──────────────────┐' }
    ],
    [
      { type: 'cmt', text: '// │   代码段 (text)        │  只读' }
    ],
    [
      { type: 'cmt', text: '// ├──────────────────────────┤' }
    ],
    [ type: 'cmt', text: '// │   数据段 (data)        │  全局变量' ],
      { type: 'cmt', text: '// ├──────────────────────────┤' }
    ],
    [
      { type: 'cmt', text: '// │   堆区 (heap)          │  向上增长' }
    ],
    [
      { type: 'cmt', text: '// │         ↓              │' }
    ],
    [
      { type: 'cmt', text: '// │   内存映射区域         │  mmap' }
    ],
    [
      { type: 'cmt', text: '// │         ↑              │' }
    ],
    [
      { type: 'cmt', text: '// │   栈区 (stack)         │  向下增长' }
    ],
    [
      { type: 'cmt', text: '// ├──────────────────────────┤' }
    ],
    [
      { type: 'cmt', text: '// │   内核空间             │  0xC0000000+' }
    ],
    [
      { type: 'cmt', text: '// 0xFFFFFFFF ──────────────────┘' }
    ],
    [
      { type: 'cmt', text: '// mmap 内存映射文件' }
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
      { type: 'punc', text: '|' },
      { type: 'id', text: 'PROT_WRITE' },
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
    ],
    [
      { type: 'id', text: 'mapped' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '42' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 访问内存 = 访问文件' }
    ]
  ],

  varConfig: [
    { name: 'mapped', color: '#8b5cf6', appearStep: 2, type: 'void*' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示 Linux 内存管理',
        detail: 'Linux 内存管理：虚拟内存（每个进程独立地址空间）、MMU（虚拟→物理地址转换）、缺页中断（按需调页）、mmap（文件映射到内存）。理解内存管理对优化程序性能至关重要。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 2,
      executedLines: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: {
        memory_layout: {
          code: { address: '0x00400000', size: '只读', type: '代码段' },
          data: { address: '0x00600000', size: '全局变量', type: '数据段' },
          heap: { address: '0x00800000', direction: '向上增长', type: '堆区' },
          mmap: { address: '0x7f000000', type: '内存映射' },
          stack: { address: '0x7ffc0000', direction: '向下增长', type: '栈区' }
        }
      },
      explanation: {
        text: '进程虚拟内存布局图',
        detail: '代码段（只读，存放指令）、数据段（全局变量）、堆区（malloc，向上增长）、内存映射区域（mmap，共享库）、栈区（局部变量，向下增长）、内核空间（0xC0000000+，用户不可访问）。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 15,
      executedLines: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15],
      vars: {
        mapped: { value: '0x7f000000', type: 'void*', size: 'size', mapping: 'file', shared: true }
      },
      explanation: {
        text: '第 16 行：mmap 映射文件到内存',
        detail: 'mmap 将文件描述符 fd 映射到进程地址空间（0x7f000000）。PROT_READ|PROT_WRITE 表示可读写，MAP_SHARED 表示共享映射（修改对其他进程可见）。',
        actor: 'Kernel',
        icon: 'Link',
        color: 'purple'
      }
    },
    {
      step: 3,
      line: 16,
      executedLines: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16],
      vars: {
        mapped: { value: '0x7f000000', type: 'void*', content: '42', mapped: true }
      },
      explanation: {
        text: '第 17 行：mapped[0] = 42 写入映射内存',
        detail: '访问 mapped[0] 就是访问文件内容！MMU 将虚拟地址 0x7f000000 转换为物理地址（文件页缓存）。无需 read/write 系统调用，性能大幅提升。',
        actor: 'MMU',
        icon: 'HardDrive',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 16,
      executedLines: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16],
      vars: {
        page_table: { virtual: '0x7f000000', physical: '页缓存', flags: 'R/W', present: true },
        mmu_translation: { status: '命中', tlb: 'cached' }
      },
      explanation: {
        text: 'MMU 地址转换过程',
        detail: 'CPU 访问虚拟地址 0x7f000000，MMU 查页表找到对应的物理地址（页缓存）。TLB 缓存常用映射，加速转换。如果页面不在内存，触发缺页中断。',
        actor: 'MMU',
        icon: 'Search',
        color: 'purple'
      }
    },
    {
      step: 5,
      line: 16,
      executedLines: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16],
      vars: {
        page_fault: { virtual: '0x7f000000', status: '未映射', action: '分配物理页' },
        demand_paging: { enabled: true, description: '按需调页' }
      },
      explanation: {
        text: '缺页中断（Page Fault）',
        detail: '首次访问 mmap 区域时，页面可能未映射到物理内存。MMU 触发缺页中断，内核分配物理页并从磁盘读取数据。这是按需调页（Demand Paging）机制。',
        actor: 'Kernel',
        icon: 'HardDrive',
        color: 'yellow'
      }
    }
  ],

  predictions: [
    {
      question: '虚拟内存的作用是什么？',
      options: [
        { text: '增加内存容量', feedback: '部分正确，但不完整。' },
        { text: '隔离进程地址空间', feedback: '部分正确。' },
        { text: '简化内存管理', feedback: '部分正确。' },
        { text: '以上都是', feedback: '正确！虚拟内存提供隔离、简化分配、支持超售（overcommit）。' }
      ],
      correctIndex: 3
    },
    {
      question: 'MMU 的作用是什么？',
      options: [
        { text: '管理物理内存', feedback: '错误！这是内核的工作。' },
        { text: '虚拟地址→物理地址转换', feedback: '正确！MMU 使用页表进行地址转换。' },
        { text: '分配内存', feedback: '错误！内存分配是内核的工作。' },
        { text: '回收内存', feedback: '错误！内存回收是内核的工作。' }
      ],
      correctIndex: 1
    },
    {
      question: '缺页中断什么时候发生？',
      options: [
        { text: '访问未映射的虚拟地址', feedback: '正确！页面不在内存或未分配时触发。' },
        { text: '内存不足时', feedback: '错误！内存不足会触发 OOM Killer。' },
        { text: '访问非法地址', feedback: '错误！这是段错误（Segmentation Fault）。' },
        { text: '系统启动时', feedback: '错误！' }
      ],
      correctIndex: 0
    }
  ],

  misconceptions: [
    {
      myth: '虚拟地址就是物理地址',
      truth: '虚拟地址通过 MMU 转换为物理地址。进程看到的是虚拟地址空间，物理地址由内核管理。'
    },
    {
      myth: 'mmap 后文件立即加载到内存',
      truth: 'mmap 只建立映射关系，不立即加载数据。首次访问时触发缺页中断，按需加载（Demand Paging）。'
    },
    {
      myth: '堆区比栈区大',
      truth: '通常如此，但不绝对。栈区通常限制为 8MB，堆区可以使用 mmap 扩展到 GB 级别。'
    },
    {
      myth: '缺页中断是错误',
      truth: '缺页中断是正常机制！按需调页节省内存，只有实际访问的页面才加载。'
    }
  ],

  summary: {
    keyPoints: [
      '虚拟内存：每个进程独立的地址空间',
      'MMU：虚拟地址→物理地址转换',
      '页表：实现地址映射的数据结构',
      '缺页中断：按需调页机制',
      'mmap：文件直接映射到内存'
    ],
    pitfalls: [
      '忘记 munmap 导致内存泄漏',
      '访问未映射的地址导致段错误',
      'MAP_PRIVATE 修改不写回文件',
      '忽略缺页中断的性能开销'
    ],
    transferQuestion: 'mmap 的 MAP_SHARED 和 MAP_PRIVATE 有什么区别？各自适用什么场景？'
  }
};
