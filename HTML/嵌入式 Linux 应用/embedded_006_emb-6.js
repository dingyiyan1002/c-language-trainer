window.LESSON_DATA = {
  meta: {
    chapter: 'embedded',
    lessonId: 'embedded-6',
    title: '设备文件操作',
    description: '字符设备、块设备、ioctl、串口编程、GPIO 控制'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<sys/ioctl.h>' }
    ],
    [
      { type: 'cmt', text: '// 打开设备文件' }
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
      { type: 'str', text: '\"/dev/ttyUSB0\"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'O_RDWR' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 字符设备：串口' }
    ],
    [
      { type: 'cmt', text: '// ioctl - 设备控制' }
    ],
    [
      { type: 'kw', text: 'struct' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'termios' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'tio' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'tcgetattr' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'tio' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'cfsetispeed' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'tio' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'B9600' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'tcsetattr' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'TCSANOW' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'tio' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 串口读写' }
    ],
    [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'buf' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '256' },
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
      { type: 'id', text: 'write' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '\"' },
      { type: 'id', text: 'Hello' },
      { type: 'op', text: '\"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// GPIO 控制' }
    ],
    [
      { type: 'id', text: 'ioctl' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'GPIO_SET' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '18' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'close' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'fd', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'tio', color: '#22c55e', appearStep: 4, type: 'struct termios' },
    { name: 'buf', color: '#f59e0b', appearStep: 7, type: 'char[256]' },
    { name: 'gpio_state', color: '#8b5cf6', appearStep: 9, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示设备文件操作',
        detail: 'Linux 设备文件：一切皆文件。字符设备（串口、GPIO）、块设备（硬盘）。/dev 目录下的设备文件可用 open/read/write/ioctl 操作。嵌入式开发核心技能。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 2,
      executedLines: [2],
      vars: {
        fd: { value: 3, type: 'int', device: '/dev/ttyUSB0', mode: 'O_RDWR' }
      },
      explanation: {
        text: '第 3 行：open 打开串口设备',
        detail: '/dev/ttyUSB0 是 USB 转串口设备。open 返回文件描述符 fd=3。O_RDWR 表示读写模式。字符设备像普通文件一样操作。',
        actor: 'Kernel',
        icon: 'USB',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [2, 3],
      vars: {
        device_info: { type: 'char', major: 188, minor: 0, name: 'ttyUSB0' }
      },
      explanation: {
        text: '字符设备详解',
        detail: '字符设备按字节流访问（无缓冲）。块设备按块访问（有缓冲）。串口、键盘、显示器是字符设备。硬盘是块设备。',
        actor: 'Kernel',
        icon: 'HardDrive',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 5,
      executedLines: [2, 3, 5],
      vars: {
        tio: { value: '{c_iflag: 0, c_oflag: 0, c_cflag: CS8|CREAD, c_lflag: 0}', type: 'struct termios' }
      },
      explanation: {
        text: '第 6 行：tcgetattr 获取当前串口配置',
        detail: 'termios 结构体存储串口参数：波特率、数据位、停止位、校验位。tcgetattr 读取当前配置到 tio 结构体。',
        actor: 'Kernel',
        icon: 'Settings',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [2, 3, 5, 6],
      vars: {
        tio: { value: '{baud: 9600, data: 8, stop: 1, parity: none}', configured: true }
      },
      explanation: {
        text: '第 7-8 行：cfsetispeed 设置波特率 9600',
        detail: 'cfsetispeed 设置输入波特率，cfsetospeed 设置输出波特率。常用波特率：9600、19200、115200。发送端和接收端必须一致。',
        actor: 'Kernel',
        icon: 'Radio',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 7,
      executedLines: [2, 3, 5, 6, 7],
      vars: {
        tio: { value: 'configured', baud: 9600, applied: true }
      },
      explanation: {
        text: '第 9 行：tcsetattr 应用串口配置',
        detail: 'tcsetattr 将 tio 配置写入内核。TCSANOW 表示立即生效。配置后串口按 9600 波特率、8 数据位、1 停止位、无校验工作。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 9,
      executedLines: [2, 3, 5, 6, 7, 9],
      vars: {
        buf: { value: '(空)', type: 'char[256]', capacity: 256 }
      },
      explanation: {
        text: '第 10 行：声明 256 字节接收缓冲区',
        detail: 'char buf[256] 分配 256 字节栈空间，用于存储 read 读取的串口数据。缓冲区大小决定单次最大接收量。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 10,
      executedLines: [2, 3, 5, 6, 7, 9, 10],
      vars: {
        buf: { value: '\"RX: Hello\\n\"', type: 'char[256]', bytes: 10 },
        n: { value: 10, type: 'ssize_t', bytesRead: 10 }
      },
      explanation: {
        text: '第 11 行：read 从串口读取数据',
        detail: 'read 阻塞等待串口数据。收到 10 字节\"Hello\\n\"后返回 n=10。无数据时一直阻塞（可设置超时）。',
        actor: 'Kernel',
        icon: 'Download',
        color: 'purple'
      }
    },
    {
      step: 8,
      line: 11,
      executedLines: [2, 3, 5, 6, 7, 9, 10, 11],
      vars: {
        uart_tx: { value: 'Hello', bytes_sent: 5, status: 'transmitted' }
      },
      explanation: {
        text: '第 12 行：write 向串口发送数据',
        detail: 'write 将 5 字节\"Hello\"写入串口。数据通过 TX 引脚发送（TTL 电平）。返回值=实际发送字节数。',
        actor: 'Kernel',
        icon: 'Upload',
        color: 'green'
      }
    },
    {
      step: 9,
      line: 13,
      executedLines: [2, 3, 5, 6, 7, 9, 10, 11, 13],
      vars: {
        gpio_state: { pin: 18, value: 'HIGH', device: '/dev/gpiochip0' }
      },
      explanation: {
        text: '第 14 行：ioctl 设置 GPIO 引脚',
        detail: 'ioctl 是设备控制接口。GPIO_SET 命令设置 GPIO 引脚输出高电平。引脚 18 输出 3.3V，可驱动 LED 或继电器。',
        actor: 'Kernel',
        icon: 'Zap',
        color: 'purple'
      }
    },
    {
      step: 10,
      line: 14,
      executedLines: [2, 3, 5, 6, 7, 9, 10, 11, 13, 14],
      vars: {
        fd: { value: 3, type: 'int', closed: true },
        gpio_state: { pin: 18, value: 'HIGH', sustained: true }
      },
      explanation: {
        text: '第 15 行：close 关闭设备文件',
        detail: 'close 释放文件描述符。串口设置恢复默认。GPIO 状态保持（硬件锁存）。进程退出时自动 close，但显式关闭是好习惯。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'blue'
      }
    }
  ],

  predictions: [
    {
      question: '/dev/ttyUSB0 是什么类型的设备？',
      options: [
        { text: '块设备', feedback: '错误！块设备是硬盘等。' },
        { text: '字符设备', feedback: '正确！串口是字符设备。' },
        { text: '网络设备', feedback: '错误！网络设备是 socket。' },
        { text: '虚拟设备', feedback: '错误！是物理设备。' }
      ],
      correctIndex: 1
    },
    {
      question: 'ioctl 的作用是什么？',
      options: [
        { text: '读取设备数据', feedback: '错误！这是 read。' },
        { text: '设备特定控制操作', feedback: '正确！IO 控制命令。' },
        { text: '写入设备数据', feedback: '错误！这是 write。' },
        { text: '打开设备', feedback: '错误！这是 open。' }
      ],
      correctIndex: 1
    },
    {
      question: '串口通信中，发送端和接收端必须相同的是什么？',
      options: [
        { text: '电压', feedback: '部分正确。' },
        { text: '波特率', feedback: '正确！否则数据错误。' },
        { text: '线序', feedback: '部分正确。' },
        { text: '以上都是', feedback: '正确！必须匹配。' }
      ],
      correctIndex: 3
    }
  ],

  misconceptions: [
    {
      myth: '设备文件和普通文件完全一样',
      truth: '设备文件底层是驱动程序！read/write 调用驱动函数，不是磁盘 IO。某些 ioctl 命令可能阻塞或产生副作用。'
    },
    {
      myth: '串口 read 立即返回',
      truth: 'read 默认阻塞等待数据！无数据时一直等待。可设置 VMIN/VTIME 或 O_NONBLOCK 实现非阻塞。'
    },
    {
      myth: 'GPIO 输出后自动保持',
      truth: 'GPIO 状态由硬件锁存，close 后保持！需要软件控制关闭。某些 SoC 在重启后恢复默认。'
    },
    {
      myth: 'ioctl 可以完成所有设备控制',
      truth: 'ioctl 用于设备特定操作！通用操作（读写）仍用 read/write。滥用 ioctl 导致接口不统一。'
    }
  ],

  summary: {
    keyPoints: [
      '设备文件：/dev 下的字符/块设备',
      'open/read/write/close 操作设备',
      'ioctl 设备特定控制命令',
      'termios 配置串口参数',
      'GPIO 通过 ioctl 或 sysfs 控制'
    ],
    pitfalls: [
      '忘记配置串口参数（默认可能不匹配）',
      'read 阻塞未设置超时',
      'ioctl 命令号错误导致失败',
      'GPIO 权限不足（需 root 或 udev 规则）'
    ],
    transferQuestion: '如何编写一个串口通信程序，实现发送命令并读取传感器响应？写出完整流程。'
  }
};
