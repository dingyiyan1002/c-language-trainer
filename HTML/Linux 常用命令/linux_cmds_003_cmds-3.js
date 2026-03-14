window.LESSON_DATA = {
  meta: {
    chapter: 'linux-cmds',
    lessonId: 'linux-cmds-3',
    title: '进程管理',
    description: 'ps、top、htop、kill、nohup 命令详解'
  },

  codeLines: [
    [
      { type: 'cmt', text: '# ps - 查看进程状态' }
    ],
    [
      { type: 'id', text: 'ps' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'aux' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# USER PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND' }
    ],
    [
      { type: 'cmt', text: '# root   1  0.0  0.1 168936 11632 ?        Ss   Mar13   0:02 /sbin/init' }
    ],
    [
      { type: 'cmt', text: '# ps aux | grep nginx 查找特定进程' }
    ],
    [
      { type: 'id', text: 'ps' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'aux' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '|' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'grep' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'nginx' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# top - 实时监控进程' }
    ],
    [
      { type: 'id', text: 'top' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 按 P: 按 CPU 排序，按 M: 按内存排序，按 q: 退出' }
    ],
    [
      { type: 'cmt', text: '# kill - 发送信号给进程' }
    ],
    [
      { type: 'id', text: 'kill' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1234' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 默认 SIGTERM (15)，优雅终止' }
    ],
    [
      { type: 'id', text: 'kill' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'num', text: '9' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: '1234' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# SIGKILL 强制终止 (慎用！)' }
    ],
    [
      { type: 'cmt', text: '# nohup - 后台运行' }
    ],
    [
      { type: 'id', text: 'nohup' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'python3' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'server.py' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 忽略挂断信号，关闭终端后继续运行' }
    ]
  ],

  varConfig: [
    { name: 'process', color: '#3b82f6', appearStep: 1, type: 'object' },
    { name: 'pid', color: '#22c55e', appearStep: 3, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '命令开始执行，演示进程管理',
        detail: 'Linux 进程管理：ps 查看进程快照，top 实时监控，kill 发送信号，nohup 后台运行。理解进程状态（STAT）和信号（Signal）对调试和管理至关重要。',
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
        processes: {
          value: [
            { user: 'root', pid: 1, cpu: '0.0', mem: '0.1', stat: 'Ss', cmd: '/sbin/init' },
            { user: 'user', pid: 1234, cpu: '2.5', mem: '1.2', stat: 'S', cmd: 'nginx' }
          ],
          type: 'array'
        }
      },
      explanation: {
        text: '第 2 行：ps aux 显示所有进程',
        detail: 'ps aux：a=所有用户，u=详细信息，x=包括无终端进程。输出列：USER（所有者）、PID（进程 ID）、%CPU、%MEM、VSZ（虚拟内存）、RSS（物理内存）、STAT（状态）、COMMAND。',
        actor: 'Terminal',
        icon: 'List',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1, 2],
      vars: {
        stat_codes: {
          'S': '可中断睡眠 (等待事件)',
          'R': '运行中',
          'D': '不可中断睡眠 (IO)',
          'Z': '僵尸进程',
          'T': '已停止'
        }
      },
      explanation: {
        text: '进程状态码详解',
        detail: 'STAT 列含义：S=可中断睡眠（等待事件），R=运行中，D=不可中断睡眠（IO 操作），Z=僵尸进程（已终止未回收），T=已停止（调试）。附加：s=会话领导者，+=前台进程。',
        actor: 'Terminal',
        icon: 'Info',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 2, 4],
      vars: {
        filtered: { value: [{ pid: 1234, cmd: 'nginx' }], type: 'array', count: 1 }
      },
      explanation: {
        text: '第 5 行：ps aux | grep nginx 管道过滤',
        detail: '管道|将 ps 输出传给 grep。grep nginx 只保留包含"nginx"的行。这是常用的查找进程方式。pgrep nginx 更简洁。',
        actor: 'Terminal',
        icon: 'Search',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [1, 2, 4, 6],
      vars: {
        top_view: {
          tasks: '150 total',
          cpu: '2.5% us, 1.2% sy',
          mem: '4.0G total, 2.1G used',
          type: 'realtime'
        }
      },
      explanation: {
        text: '第 7 行：top 实时监控进程',
        detail: 'top 动态显示进程状态（每 3 秒刷新）。顶部汇总：tasks（进程数）、cpu（用户/系统/空闲）、mem（内存使用）。交互：P=按 CPU 排序，M=按内存排序，q=退出，k=杀死进程。',
        actor: 'Terminal',
        icon: 'Activity',
        color: 'purple'
      }
    },
    {
      step: 5,
      line: 9,
      executedLines: [1, 2, 4, 6, 9],
      vars: {
        pid: { value: 1234, type: 'int', target: 'nginx' },
        signal: { value: 'SIGTERM(15)', type: 'string' }
      },
      explanation: {
        text: '第 10 行：kill 1234 发送 SIGTERM',
        detail: 'kill 默认发送 SIGTERM(15)，请求进程优雅退出。进程可捕获此信号进行清理（关闭文件、释放资源）。适合正常终止。',
        actor: 'Terminal',
        icon: 'Mail',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 10,
      executedLines: [1, 2, 4, 6, 9, 10],
      vars: {
        pid: { value: 1234, type: 'int', target: 'nginx' },
        signal: { value: 'SIGKILL(9)', type: 'string', forced: true }
      },
      explanation: {
        text: '第 11 行：kill -9 1234 强制终止',
        detail: 'SIGKILL(9) 强制杀死进程，进程无法捕获或忽略。立即终止，不清理资源。慎用！仅在 SIGTERM 无效时使用。可能导致数据丢失、文件损坏。',
        actor: 'Terminal',
        icon: 'CircleX',
        color: 'red'
      }
    },
    {
      step: 7,
      line: 13,
      executedLines: [1, 2, 4, 6, 9, 10, 13],
      vars: {
        pid: { value: 5678, type: 'int', background: true, nohup: true },
        output: { value: 'nohup.out', type: 'file' }
      },
      explanation: {
        text: '第 14 行：nohup python3 server.py & 后台运行',
        detail: 'nohup 忽略挂断信号（SIGHUP），关闭终端后进程继续运行。&后台执行。输出重定向到 nohup.out。适合长期运行的服务。',
        actor: 'Terminal',
        icon: 'Server',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: '如何查找 nginx 进程？',
      options: [
        { text: 'ps aux | grep nginx', feedback: '正确！管道过滤是常用方法。' },
        { text: 'ps nginx', feedback: '错误！ps 没有此语法。' },
        { text: 'find nginx', feedback: '错误！find 查找文件。' },
        { text: 'ls /proc | grep nginx', feedback: '错误！/proc 是进程 ID 目录。' }
      ],
      correctIndex: 0
    },
    {
      question: 'kill -9 的作用是什么？',
      options: [
        { text: '优雅终止进程', feedback: '错误！这是默认 kill（SIGTERM）。' },
        { text: '强制杀死进程（无法捕获）', feedback: '正确！SIGKILL 立即终止，进程无法反抗。' },
        { text: '暂停进程', feedback: '错误！这是 SIGSTOP。' },
        { text: '重启进程', feedback: '错误！kill 不能重启。' }
      ],
      correctIndex: 1
    },
    {
      question: '如何让程序在关闭终端后继续运行？',
      options: [
        { text: '& 后台运行', feedback: '部分正确，但关闭终端会终止。' },
        { text: 'nohup command &', feedback: '正确！nohup 忽略挂断信号，关闭终端后继续。' },
        { text: 'screen command', feedback: '可行，但 screen 是另一工具。' },
        { text: 'B 和 C 都对', feedback: '正确！nohup 和 screen 都可以。' }
      ],
      correctIndex: 3
    }
  ],

  misconceptions: [
    {
      myth: 'kill 会立即杀死进程',
      truth: 'kill 默认发送 SIGTERM，进程可捕获并延迟退出。只有 kill -9（SIGKILL）才立即终止。'
    },
    {
      myth: '僵尸进程占用大量资源',
      truth: '僵尸进程已终止，只占用进程表项。但父进程应调用 wait() 回收，否则积累过多会耗尽进程 ID。'
    },
    {
      myth: 'top 会修改进程状态',
      truth: 'top 只是监控工具，不会修改进程。但按 k 可以发送信号杀死进程。'
    },
    {
      myth: 'nohup 可以让任何程序后台运行',
      truth: 'nohup 只忽略挂断信号。程序可能因其他原因退出（错误、资源不足）。应用 systemd/supervisor 更可靠。'
    }
  ],

  summary: {
    keyPoints: [
      'ps aux 查看所有进程快照',
      'top 实时监控进程（动态刷新）',
      'kill 发送 SIGTERM（优雅终止）',
      'kill -9 发送 SIGKILL（强制杀死）',
      'nohup ... & 后台运行（忽略挂断）'
    ],
    pitfalls: [
      '滥用 kill -9 导致数据丢失',
      '忽略僵尸进程积累',
      '忘记&后台运行阻塞终端',
      'nohup 输出未重定向'
    ],
    transferQuestion: '如果一个进程不响应 kill，应该怎么办？如何避免数据丢失？'
  }
};
