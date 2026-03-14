window.LESSON_DATA = {
  meta: {
    id: 'l4-network',
    title: '网络编程',
    chapter: 'Level4',
    index: 3,
    filename: 'socket_server.c',
    keyPoints: ['socket', 'TCP/UDP', '网络通信']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdlib.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<string.h>' }] },
    { num: 4, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<unistd.h>' }] },
    { num: 5, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<arpa/inet.h>' }] },
    { num: 6, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 7, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'serverFd' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'clientFd' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sockaddr_in' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'serverAddr' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'serverFd' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'socket' }, { type: 'punc', text: '(' }, { type: 'id', text: 'AF_INET' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SOCK_STREAM' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'memset' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'serverAddr' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'id', text: 'serverAddr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'serverAddr' }, { type: 'punc', text: '.' }, { type: 'id', text: 'sin_family' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'AF_INET' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'serverAddr' }, { type: 'punc', text: '.' }, { type: 'id', text: 'sin_port' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'htons' }, { type: 'punc', text: '(' }, { type: 'num', text: '8080' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'serverAddr' }, { type: 'punc', text: '.' }, { type: 'id', text: 'sin_addr' }, { type: 'punc', text: '.' }, { type: 'id', text: 's_addr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'inet_addr' }, { type: 'punc', text: '(' }, { type: 'str', text: '"127.0.0.1"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'bind' }, { type: 'punc', text: '(' }, { type: 'id', text: 'serverFd' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sockaddr' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'op', text: '&' }, { type: 'id', text: 'serverAddr' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'id', text: 'serverAddr' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'listen' }, { type: 'punc', text: '(' }, { type: 'id', text: 'serverFd' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '5' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'clientFd' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'accept' }, { type: 'punc', text: '(' }, { type: 'id', text: 'serverFd' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'write' }, { type: 'punc', text: '(' }, { type: 'id', text: 'clientFd' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"Hello Client"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '12' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'close' }, { type: 'punc', text: '(' }, { type: 'id', text: 'clientFd' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'close' }, { type: 'punc', text: '(' }, { type: 'id', text: 'serverFd' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 21, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 22, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'serverFd', name: 'serverFd', type: 'int', addr: '0x7fff10', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'clientFd', name: 'clientFd', type: 'int', addr: '0x7fff14', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'serverAddr', name: 'serverAddr', type: 'struct sockaddr_in', addr: '0x7fff20', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习 TCP Socket 网络编程', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 8,
      executedLines: [7],
      vars: { serverFd: -1, clientFd: -1 },
      highlightVar: 'serverFd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: '声明 serverFd 和 clientFd 文件描述符',
        color: 'yellow',
        actor: 'CPU',
        detail: 'Socket 也是文件描述符（整数）。serverFd 是监听 socket，clientFd 是连接 socket。'
      },
      prediction: {
        question: 'Socket 本质是什么？',
        options: ['特殊变量', '文件描述符（整数）', '结构体'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:serverFd',
      timing: 'main-loop'
    },
    {
      step: 2,
      line: 9,
      executedLines: [7, 8],
      vars: { serverFd: -1, clientFd: -1, serverAddr: {} },
      highlightVar: 'serverAddr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'sockaddr_in 结构体：存储服务器地址信息',
        color: 'blue',
        actor: 'CPU',
        detail: 'sockaddr_in 包含：sin_family（地址族）, sin_port（端口）, sin_addr（IP 地址）。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:serverAddr',
      timing: 'main-loop'
    },
    {
      step: 3,
      line: 10,
      executedLines: [7, 8, 9],
      vars: { serverFd: 3 },
      highlightVar: 'serverFd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'socket',
        text: 'socket(AF_INET, SOCK_STREAM, 0) 创建 TCP socket',
        color: 'green',
        actor: 'OS',
        detail: 'AF_INET=IPv4，SOCK_STREAM=TCP，0=默认协议。返回 socket 文件描述符（如 3）。失败返回 -1。'
      },
      prediction: null,
      misconception: {
        title: 'TCP vs UDP',
        text: 'SOCK_STREAM 是 TCP（面向连接、可靠、有序），SOCK_DGRAM 是 UDP（无连接、不可靠、快速）。TCP 用于 HTTP/FTP，UDP 用于视频流/DNS。'
      },
      actor: 'OS',
      target: 'socket:create',
      timing: 'runtime'
    },
    {
      step: 4,
      line: 11,
      executedLines: [7, 8, 9, 10],
      vars: { serverFd: 3, serverAddr: {} },
      highlightVar: 'serverAddr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'memset 清零结构体，避免垃圾值',
        color: 'blue',
        actor: 'CPU',
        detail: 'memset 将 serverAddr 所有字节设为 0。这是好习惯：确保结构体初始状态干净。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:serverAddr',
      timing: 'main-loop'
    },
    {
      step: 5,
      line: 12,
      executedLines: [7, 8, 9, 10, 11],
      vars: { serverFd: 3, serverAddr: { sin_family: 'AF_INET' } },
      highlightVar: 'serverAddr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'sin_family = AF_INET 设置 IPv4 地址族',
        color: 'blue',
        actor: 'CPU',
        detail: 'AF_INET 表示 IPv4。还有 AF_INET6（IPv6）、AF_LOCAL（本地 Unix 域 socket）。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:serverAddr',
      timing: 'main-loop'
    },
    {
      step: 6,
      line: 13,
      executedLines: [7, 8, 9, 10, 11, 12],
      vars: { serverFd: 3, serverAddr: { sin_family: 'AF_INET', sin_port: 8080 } },
      highlightVar: 'serverAddr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'sin_port = htons(8080) 设置端口号（网络字节序）',
        color: 'blue',
        actor: 'CPU',
        detail: 'htons 将主机字节序转为网络字节序（大端）。x86 是小端，网络协议是大端，需要转换。'
      },
      prediction: {
        question: '为什么需要 htons 转换？',
        options: ['不需要', '统一网络字节序（大端）', '加密目的'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:serverAddr',
      timing: 'main-loop'
    },
    {
      step: 7,
      line: 14,
      executedLines: [7, 8, 9, 10, 11, 12, 13],
      vars: { serverFd: 3, serverAddr: { sin_family: 'AF_INET', sin_port: 8080, sin_addr: '127.0.0.1' } },
      highlightVar: 'serverAddr',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'sin_addr.s_addr = inet_addr("127.0.0.1") 本地回环地址',
        color: 'blue',
        actor: 'CPU',
        detail: '127.0.0.1 是本地回环地址（localhost）。inet_addr 将字符串 IP 转为二进制。也可以用 INADDR_ANY 绑定所有网卡。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:serverAddr',
      timing: 'main-loop'
    },
    {
      step: 8,
      line: 15,
      executedLines: [7, 8, 9, 10, 11, 12, 13, 14],
      vars: { serverFd: 3, serverAddr: { sin_family: 'AF_INET', sin_port: 8080, sin_addr: '127.0.0.1' } },
      highlightVar: 'serverFd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'lock',
        text: 'bind 将 socket 绑定到地址和端口',
        color: 'green',
        actor: 'OS',
        detail: 'bind 将 serverFd 与 127.0.0.1:8080 绑定。之后发往该地址的数据会被路由到此 socket。失败可能是端口被占用。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'socket:bind',
      timing: 'runtime'
    },
    {
      step: 9,
      line: 16,
      executedLines: [7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { serverFd: 3 },
      highlightVar: 'serverFd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'listen(serverFd, 5) 开始监听， backlog=5',
        color: 'green',
        actor: 'OS',
        detail: 'listen 将 socket 转为被动模式（服务器）。backlog=5 表示等待连接队列最多 5 个客户端。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'socket:listen',
      timing: 'runtime'
    },
    {
      step: 10,
      line: 17,
      executedLines: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      vars: { serverFd: 3, clientFd: 4 },
      highlightVar: 'clientFd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: 'accept 阻塞等待客户端连接',
        color: 'green',
        actor: 'OS',
        detail: 'accept 阻塞直到有客户端连接。返回新的 socket 文件描述符 clientFd，用于与该客户端通信。serverFd 继续监听其他连接。'
      },
      prediction: {
        question: 'accept 返回什么？',
        options: ['0', '新的 socket 文件描述符', '客户端 IP'],
        answer: 1
      },
      misconception: null,
      actor: 'OS',
      target: 'socket:accept',
      timing: 'runtime'
    },
    {
      step: 11,
      line: 18,
      executedLines: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      vars: { serverFd: 3, clientFd: 4 },
      highlightVar: 'clientFd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: 'write 发送"Hello Client"给客户端',
        color: 'green',
        actor: 'OS',
        detail: 'write 将 12 字节数据写入 clientFd。数据通过 TCP 协议栈发送，保证可靠、有序到达。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'socket:write',
      timing: 'runtime'
    },
    {
      step: 12,
      line: 19,
      executedLines: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      vars: { serverFd: 3, clientFd: 4 },
      highlightVar: 'clientFd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: 'close(clientFd) 关闭连接 socket',
        color: 'green',
        actor: 'OS',
        detail: '关闭与客户端的连接。释放文件描述符和内核资源。serverFd 仍然开放，可以 accept 新连接。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'socket:close',
      timing: 'runtime'
    },
    {
      step: 13,
      line: 20,
      executedLines: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      vars: { serverFd: 3, clientFd: 4 },
      highlightVar: 'serverFd',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: 'close(serverFd) 关闭监听 socket',
        color: 'green',
        actor: 'OS',
        detail: '释放监听 socket。端口 8080 被释放，其他程序可以绑定。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'socket:close',
      timing: 'runtime'
    },
    {
      step: 14,
      line: 21,
      executedLines: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      vars: { serverFd: 3, clientFd: 4 },
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，TCP 服务器流程：socket→bind→listen→accept→read/write→close',
        color: 'green',
        actor: 'OS',
        detail: 'TCP 服务器标准流程：1) socket 创建 2) bind 绑定地址 3) listen 监听 4) accept 接受连接 5) read/write 通信 6) close 关闭。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: 'TCP Socket 编程：socket 创建、bind 绑定、listen 监听、accept 连接、read/write 通信',
    pitfalls: [
      '忘记 htons 转换字节序会导致端口号错误（大端 vs 小端）',
      'accept 返回新的 socket 用于通信，不是 serverFd 本身',
      '端口被占用时 bind 失败，需要设置 SO_REUSEADDR 或换端口'
    ],
    transferQuestion: '如果要支持多个客户端并发连接，应该如何修改？（提示：多线程或多路复用）',
    miniExercise: {
      bugCode: 'int fd = socket(AF_INET, SOCK_STREAM, 0);\nbind(fd, ...);  // 直接 bind，缺少什么？',
      hint: '应该先 memset 清零结构体，再设置各字段'
    }
  }
};
