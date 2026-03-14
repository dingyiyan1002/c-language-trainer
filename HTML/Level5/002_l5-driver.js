window.LESSON_DATA = {
  meta: {
    id: 'l5-driver',
    title: '驱动开发',
    chapter: 'Level5',
    index: 2,
    filename: 'char_driver.c',
    keyPoints: ['file_operations', '设备注册', '中断处理']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<linux/module.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<linux/fs.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<linux/cdev.h>' }] },
    { num: 4, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<linux/device.h>' }] },
    { num: 5, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 6, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'DEV_NAME' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"mydev"' }] },
    { num: 7, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'MAJOR_NUM' }, { type: 'ws', text: ' ' }, { type: 'num', text: '200' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: '[' }, { type: 'num', text: '256' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 11, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'ssize_t' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'devRead' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'file' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'filp' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'buf' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'size_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'count' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'loff_t' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ppos' }, { type: 'punc', text: ')' }] },
    { num: 12, tokens: [{ type: 'punc', text: '{' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'simple_read_from_buffer' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buf' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'count' }, { type: 'punc', text: ',' }, { type: 'id', text: 'ppos' }, { type: 'punc', text: ',' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ',' }, { type: 'fn', text: 'strlen' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'punc', text: '}' }] },
    { num: 15, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 16, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'ssize_t' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'devWrite' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'file' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'filp' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'buf' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'size_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'count' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'loff_t' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ppos' }, { type: 'punc', text: ')' }] },
    { num: 17, tokens: [{ type: 'punc', text: '{' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'simple_write_to_buffer' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'punc', text: ',' }, { type: 'id', text: 'ppos' }, { type: 'punc', text: ',' }, { type: 'id', text: 'buf' }, { type: 'punc', text: ',' }, { type: 'id', text: 'count' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'punc', text: '}' }] },
    { num: 20, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 21, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'file_operations' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'fops' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '.' }, { type: 'id', text: 'owner' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'THIS_MODULE' }, { type: 'punc', text: ',' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '.' }, { type: 'id', text: 'read' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'devRead' }, { type: 'punc', text: ',' }] },
    { num: 24, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '.' }, { type: 'id', text: 'write' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'devWrite' }, { type: 'punc', text: ',' }] },
    { num: 25, tokens: [{ type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 26, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 27, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'cdev' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'myCdev' }, { type: 'punc', text: ';' }] },
    { num: 28, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 29, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: '__init' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'driverInit' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 30, tokens: [{ type: 'punc', text: '{' }] },
    { num: 31, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'cdev_init' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'myCdev' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'id', text: 'fops' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 32, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'cdev_add' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'myCdev' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'MKDEV' }, { type: 'punc', text: '(' }, { type: 'id', text: 'MAJOR_NUM' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 33, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 34, tokens: [{ type: 'punc', text: '}' }] },
    { num: 35, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 36, tokens: [{ type: 'kw', text: 'static' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: '__exit' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'driverExit' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 37, tokens: [{ type: 'punc', text: '{' }] },
    { num: 38, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'cdev_del' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'myCdev' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 39, tokens: [{ type: 'punc', text: '}' }] },
    { num: 40, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 41, tokens: [{ type: 'fn', text: 'module_init' }, { type: 'punc', text: '(' }, { type: 'id', text: 'driverInit' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 42, tokens: [{ type: 'fn', text: 'module_exit' }, { type: 'punc', text: '(' }, { type: 'id', text: 'driverExit' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 43, tokens: [{ type: 'pp', text: 'MODULE_LICENSE' }, { type: 'punc', text: '(' }, { type: 'str', text: '"GPL"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] }
  ],
  varConfig: [
    { key: 'buffer', name: 'buffer', type: 'char[256]', addr: '0xC0002000', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'fops', name: 'fops', type: 'struct file_operations', addr: '0xC0002200', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'myCdev', name: 'myCdev', type: 'struct cdev', addr: '0xC0002400', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习 Linux 字符设备驱动开发', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 9,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8],
      vars: { buffer: '' },
      highlightVar: 'buffer',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'static char buffer[256] — 设备缓冲区（模拟设备内存）',
        color: 'yellow',
        actor: 'Developer',
        detail: '静态缓冲区模拟设备存储空间。实际驱动中，这里可能是硬件寄存器或 DMA 缓冲区。static 限制作用域为本文件。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'var:buffer',
      timing: 'design-time'
    },
    {
      step: 2,
      line: 11,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      vars: { buffer: '' },
      highlightVar: 'fops',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'devRead 函数 — 设备读操作（用户从设备读取数据）',
        color: 'purple',
        actor: 'Developer',
        detail: '读函数签名：ssize_t (*)(struct file*, char*, size_t, loff_t*)。参数：filp（文件结构）、buf（用户缓冲区）、count（请求字节数）、ppos（当前位置）。'
      },
      prediction: {
        question: 'devRead 函数的 buf 参数指向哪里？',
        options: ['内核缓冲区', '用户空间缓冲区', '设备寄存器'],
        answer: 1
      },
      misconception: null,
      actor: 'Developer',
      target: 'func:devRead',
      timing: 'design-time'
    },
    {
      step: 3,
      line: 13,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      vars: { buffer: '' },
      highlightVar: 'fops',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: 'simple_read_from_buffer — 内核辅助函数',
        color: 'green',
        actor: 'Kernel',
        detail: '内核提供的辅助函数，处理缓冲区读取的细节：检查位置、复制数据到用户空间、更新位置。避免手动处理边界检查。'
      },
      prediction: null,
      misconception: null,
      actor: 'Kernel',
      target: 'func:simple_read',
      timing: 'runtime'
    },
    {
      step: 4,
      line: 16,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { buffer: '' },
      highlightVar: 'fops',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'devWrite 函数 — 设备写操作（用户写入数据到设备）',
        color: 'purple',
        actor: 'Developer',
        detail: '写函数签名：ssize_t (*)(struct file*, const char*, size_t, loff_t*)。buf 是用户空间的只读数据，count 是写入字节数。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'func:devWrite',
      timing: 'design-time'
    },
    {
      step: 5,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      vars: { buffer: 'user data' },
      highlightVar: 'fops',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: 'simple_write_to_buffer — 写入数据到内核缓冲区',
        color: 'green',
        actor: 'Kernel',
        detail: '内核辅助函数，从用户空间复制数据到内核缓冲区。处理边界检查和位置更新。'
      },
      prediction: null,
      misconception: null,
      actor: 'Kernel',
      target: 'func:simple_write',
      timing: 'runtime'
    },
    {
      step: 6,
      line: 21,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      vars: { buffer: 'user data', fops: { owner: 'THIS_MODULE', read: 'devRead', write: 'devWrite' } },
      highlightVar: 'fops',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'struct',
        text: 'struct file_operations fops — 文件操作结构体（驱动接口）',
        color: 'purple',
        actor: 'Developer',
        detail: 'file_operations 是字符驱动的核心：定义设备支持的操作（open、read、write、ioctl 等）。内核通过此结构体调用驱动函数。这是驱动与 VFS（虚拟文件系统）的接口。'
      },
      prediction: {
        question: 'file_operations 结构体的作用是什么？',
        options: ['存储设备状态', '定义驱动操作的接口', '管理设备内存'],
        answer: 1
      },
      misconception: null,
      actor: 'Developer',
      target: 'var:fops',
      timing: 'design-time'
    },
    {
      step: 7,
      line: 27,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      vars: { buffer: 'user data', fops: { owner: 'THIS_MODULE', read: 'devRead', write: 'devWrite' }, myCdev: {} },
      highlightVar: 'myCdev',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'struct',
        text: 'struct cdev myCdev — 字符设备结构体',
        color: 'blue',
        actor: 'Developer',
        detail: 'cdev 是内核表示字符设备的结构体。包含设备号、file_operations 指针、内部状态。需要初始化和注册到内核。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'var:myCdev',
      timing: 'design-time'
    },
    {
      step: 8,
      line: 31,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      vars: { buffer: 'user data', fops: { owner: 'THIS_MODULE', read: 'devRead', write: 'devWrite' }, myCdev: { ops: '&fops' } },
      highlightVar: 'myCdev',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'cdev_init(&myCdev, &fops) — 初始化字符设备',
        color: 'green',
        actor: 'Kernel',
        detail: 'cdev_init 将 file_operations 与 cdev 关联。设备结构体现在知道如何处理 read/write 等操作。'
      },
      prediction: null,
      misconception: null,
      actor: 'Kernel',
      target: 'cdev:init',
      timing: 'load-time'
    },
    {
      step: 9,
      line: 32,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      vars: { buffer: 'user data', fops: { owner: 'THIS_MODULE', read: 'devRead', write: 'devWrite' }, myCdev: { ops: '&fops', dev: '200,0' } },
      highlightVar: 'myCdev',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'link',
        text: 'cdev_add — 注册设备到内核',
        color: 'green',
        actor: 'Kernel',
        detail: 'cdev_add 将设备添加到内核的设备表。MKDEV(MAJOR_NUM, 0) 创建设备号（主设备号 200，次设备号 0）。之后用户可用 mknod 创建设备文件。'
      },
      prediction: {
        question: '设备号 200,0 表示什么？',
        options: ['200 个设备', '主设备号 200，次设备号 0', '设备索引 200'],
        answer: 1
      },
      misconception: null,
      actor: 'Kernel',
      target: 'cdev:add',
      timing: 'load-time'
    },
    {
      step: 10,
      line: 38,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
      vars: { buffer: 'user data', fops: { owner: 'THIS_MODULE', read: 'devRead', write: 'devWrite' }, myCdev: { ops: '&fops', dev: '200,0' } },
      highlightVar: 'myCdev',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: 'cdev_del(&myCdev) — 卸载时删除设备',
        color: 'green',
        actor: 'Kernel',
        detail: '模块卸载时调用 cdev_del 从内核移除设备。必须清理资源，否则可能导致系统不稳定。'
      },
      prediction: null,
      misconception: null,
      actor: 'Kernel',
      target: 'cdev:del',
      timing: 'unload-time'
    },
    {
      step: 11,
      line: 43,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
      vars: { buffer: 'user data', fops: { owner: 'THIS_MODULE', read: 'devRead', write: 'devWrite' }, myCdev: { ops: '&fops', dev: '200,0' } },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Driver loaded: /dev/mydev (major 200)' }],
      explanation: {
        icon: 'check',
        text: '字符驱动框架：cdev_init→cdev_add→read/write→cdev_del',
        color: 'green',
        actor: 'Kernel',
        detail: '字符驱动开发要点：1) 实现 file_operations 2) cdev 初始化 3) 注册到内核 4) 处理读写 5) 清理资源。用户操作：mknod /dev/mydev c 200 0 创建设备文件。'
      },
      prediction: null,
      misconception: null,
      actor: 'Kernel',
      target: 'exit',
      timing: 'runtime'
    }
  ],
  summary: {
    oneLiner: '字符驱动：file_operations 定义接口、cdev 注册设备、read/write 实现数据收发',
    pitfalls: [
      '用户空间指针不能直接解引用，必须用 copy_from_user/copy_to_buffer 等辅助函数',
      '忘记在卸载时调用 cdev_del 会导致设备号泄漏',
      '中断上下文中不能睡眠（不能用 kmalloc(GFP_KERNEL)、mutex 等）'
    ],
    transferQuestion: '如何实现设备的 ioctl 操作？（提示：在 file_operations 中添加 ioctl 函数指针）',
    miniExercise: {
      bugCode: 'static ssize_t devRead(...) {\n    char buf[256];\n    strcpy(buf, buffer);  // 直接复制内核 buffer 有什么问题？\n    return 0;\n}',
      hint: 'buf 是内核栈空间，应该用内核辅助函数安全复制到用户空间'
    }
  }
};
