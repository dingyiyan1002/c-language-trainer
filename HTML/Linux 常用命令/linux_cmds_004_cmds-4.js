window.LESSON_DATA = {
  meta: {
    chapter: 'linux-cmds',
    lessonId: 'linux-cmds-4',
    title: '网络命令',
    description: 'netstat、ss、curl、wget、ping、nc 命令详解'
  },

  codeLines: [
    [
      { type: 'cmt', text: '# netstat - 查看网络状态' }
    ],
    [
      { type: 'id', text: 'netstat' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'tlnp' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# Proto Recv-Q Send-Q Local Address   Foreign Address  PID/Program' }
    ],
    [
      { type: 'cmt', text: '# tcp   0      0      0.0.0.0:80      0.0.0.0:*        1234/nginx' }
    ],
    [
      { type: 'cmt', text: '# ss - 新版网络工具（更快）' }
    ],
    [
      { type: 'id', text: 'ss' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'tlnp' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# curl - HTTP 请求' }
    ],
    [
      { type: 'id', text: 'curl' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'I' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'https://api.example.com' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 只获取响应头' }
    ],
    [
      { type: 'id', text: 'curl' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'X' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'POST' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'd' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"name=test"' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'https://api.example.com/users' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# POST 请求' }
    ],
    [
      { type: 'cmt', text: '# ping - 测试网络连通性' }
    ],
    [
      { type: 'id', text: 'ping' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'c' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '4' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'google.com' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 发送 4 个 ICMP 包' }
    ],
    [
      { type: 'cmt', text: '# nc - 网络瑞士军刀' }
    ],
    [
      { type: 'id', text: 'nc' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'zv' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'localhost' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '8080' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 扫描端口是否开放' }
    ]
  ],

  varConfig: [
    { name: 'connections', color: '#3b82f6', appearStep: 1, type: 'array' },
    { name: 'response', color: '#22c55e', appearStep: 3, type: 'object' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '命令开始执行，演示网络调试命令',
        detail: 'Linux 网络命令：netstat/ss 查看网络连接，curl/wget 发送 HTTP 请求，ping 测试连通性，nc 扫描端口。这些是开发和运维的必备工具。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [1],
      vars: {
        connections: {
          value: [
            { proto: 'tcp', local: '0.0.0.0:80', foreign: '0.0.0.0:*', state: 'LISTEN', pid: '1234/nginx' },
            { proto: 'tcp', local: '127.0.0.1:3306', foreign: '0.0.0.0:*', state: 'LISTEN', pid: '5678/mysqld' }
          ],
          type: 'array'
        }
      },
      explanation: {
        text: '第 2 行：netstat -tlnp 查看监听端口',
        detail: '-t=TCP，-l=监听，-n=数字格式（不解析 DNS），-p=显示进程。输出：本地地址（IP:端口）、外部地址、状态、进程 ID/名称。',
        actor: 'Terminal',
        icon: 'Network',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1, 2],
      vars: {
        listening_ports: { tcp: [80, 3306], type: 'array' }
      },
      explanation: {
        text: '监听端口详解',
        detail: '0.0.0.0:80 表示监听所有网卡的 80 端口。127.0.0.1:3306 只监听本地（安全）。LISTEN 状态表示等待连接。',
        actor: 'Terminal',
        icon: 'List',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 2, 4],
      vars: {
        ss_output: {
          value: 'State  Recv-Q Send-Q Local:Port  Peer:Port',
          type: 'string',
          faster: true
        }
      },
      explanation: {
        text: '第 5 行：ss -tlnp 新版网络工具',
        detail: 'ss 替代 netstat，直接从内核获取信息，更快更准确。输出格式类似，但性能更好。推荐用 ss 替代 netstat。',
        actor: 'Terminal',
        icon: 'Zap',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [1, 2, 4, 6],
      vars: {
        response: {
          status: 'HTTP/1.1 200 OK',
          headers: {
            'Content-Type': 'application/json',
            'Server': 'nginx/1.18.0',
            'Content-Length': '1234'
          },
          type: 'object'
        }
      },
      explanation: {
        text: '第 7 行：curl -I 获取响应头',
        detail: '-I 只获取 HTTP 响应头（HEAD 请求）。用于检查服务器状态、Content-Type、重定向等，不下载body。调试 API 必备。',
        actor: 'Terminal',
        icon: 'Download',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 7,
      executedLines: [1, 2, 4, 6, 7],
      vars: {
        post_request: {
          method: 'POST',
          url: 'https://api.example.com/users',
          data: 'name=test',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      },
      explanation: {
        text: '第 8 行：curl -X POST -d 发送 POST 请求',
        detail: '-X POST 指定方法，-d 发送数据。默认 Content-Type: application/x-www-form-urlencoded。JSON 需加-H: -H "Content-Type: application/json"。',
        actor: 'Terminal',
        icon: 'Upload',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 10,
      executedLines: [1, 2, 4, 6, 7, 10],
      vars: {
        ping_result: {
          packets: '4 transmitted',
          received: '4 received',
          loss: '0% packet loss',
          time: 'time=12.3ms'
        }
      },
      explanation: {
        text: '第 11 行：ping -c 4 google.com',
        detail: 'ping 发送 ICMP Echo 请求测试连通性。-c 4 发送 4 个包。输出：往返时间（RTT）、丢包率。高延迟或丢包表示网络问题。',
        actor: 'Terminal',
        icon: 'Radio',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 13,
      executedLines: [1, 2, 4, 6, 7, 10, 13],
      vars: {
        nc_result: {
          host: 'localhost',
          port: 8080,
          status: 'succeeded',
          message: 'Connection open'
        }
      },
      explanation: {
        text: '第 14 行：nc -zv localhost 8080 扫描端口',
        detail: 'nc（netcat）是网络瑞士军刀。-z 扫描模式（不发送数据），-v 详细输出。端口开放显示"succeeded"，关闭显示"Connection refused"。',
        actor: 'Terminal',
        icon: 'Scan',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: '如何查看 80 端口被哪个进程占用？',
      options: [
        { text: 'netstat -tlnp | grep :80', feedback: '正确！-p 显示进程 ID 和名称。' },
        { text: 'ps aux | grep 80', feedback: '错误！ps 不显示端口。' },
        { text: 'ls /proc/80', feedback: '错误！/proc/80 是进程 80。' },
        { text: 'netstat -80', feedback: '错误！无此选项。' }
      ],
      correctIndex: 0
    },
    {
      question: 'curl -I 的作用是什么？',
      options: [
        { text: '下载文件', feedback: '错误！这是 curl -O。' },
        { text: '只获取响应头', feedback: '正确！HEAD 请求，不下载 body。' },
        { text: '上传文件', feedback: '错误！这是 curl -T。' },
        { text: 'POST 请求', feedback: '错误！这是 curl -X POST。' }
      ],
      correctIndex: 1
    },
    {
      question: 'ping 不通可能的原因？',
      options: [
        { text: '网络不通', feedback: '部分正确。' },
        { text: '目标禁用了 ICMP', feedback: '部分正确。' },
        { text: '防火墙拦截', feedback: '部分正确。' },
        { text: '以上都可能', feedback: '正确！需综合排查。' }
      ],
      correctIndex: 3
    }
  ],

  misconceptions: [
    {
      myth: 'netstat 和 ss 完全一样',
      truth: 'ss 更快更准确！netstat 从/proc 读取，ss 直接从内核获取。ss 支持更多过滤器。推荐用 ss 替代 netstat。'
    },
    {
      myth: 'ping 能测试所有网络问题',
      truth: 'ping 只测试 ICMP。有些服务器禁用 ICMP（防火墙），但 TCP 端口可访问。需结合 telnet/nc 测试具体端口。'
    },
    {
      myth: 'curl 只能 GET 请求',
      truth: 'curl 支持所有 HTTP 方法：GET（默认）、POST（-X POST）、PUT（-X PUT）、DELETE（-X DELETE）等。'
    },
    {
      myth: 'nc 只是端口扫描工具',
      truth: 'nc 功能强大：端口扫描、文件传输、端口转发、聊天服务器、反向 shell 等。被称为"网络瑞士军刀"。'
    }
  ],

  summary: {
    keyPoints: [
      'netstat -tlnp 查看监听端口（-p 显示进程）',
      'ss 替代 netstat（更快更准确）',
      'curl -I 获取响应头，-X POST -d 发送 POST',
      'ping 测试 ICMP 连通性',
      'nc -zv 扫描端口是否开放'
    ],
    pitfalls: [
      '忘记-n 导致 DNS 解析慢',
      'curl POST 忘记设置 Content-Type',
      'ping 不通就认为网络故障（可能禁用 ICMP）',
      'nc 扫描未加-v 看不到结果'
    ],
    transferQuestion: '如何检查服务器 8080 端口是否可访问？列出 3 种方法。'
  }
};
