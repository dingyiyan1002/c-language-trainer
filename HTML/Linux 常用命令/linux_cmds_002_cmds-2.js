window.LESSON_DATA = {
  meta: {
    chapter: 'linux-cmds',
    lessonId: 'linux-cmds-2',
    title: '权限与用户管理',
    description: 'chmod、chown、sudo、su 命令详解'
  },

  codeLines: [
    [
      { type: 'cmt', text: '# chmod - 修改文件权限' }
    ],
    [
      { type: 'id', text: 'chmod' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '755' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'script.sh' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 755 = rwxr-xr-x (所有者可读写执行，其他人读执行)' }
    ],
    [
      { type: 'id', text: 'chmod' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'script.sh' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 符号模式：添加执行权限' }
    ],
    [
      { type: 'id', text: 'chmod' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'w' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'file.txt' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 移除写权限' }
    ],
    [
      { type: 'cmt', text: '# chown - 修改所有者' }
    ],
    [
      { type: 'id', text: 'chown' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'user' },
      { type: 'op', text: ':' },
      { type: 'id', text: 'group' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'file.txt' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 修改所有者和组' }
    ],
    [
      { type: 'id', text: 'chown' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'R' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'user' },
      { type: 'op', text: ':' },
      { type: 'id', text: 'group' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'dir' },
      { type: 'punc', text: '/' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 递归修改目录及子目录' }
    ],
    [
      { type: 'cmt', text: '# sudo - 以 root 权限执行' }
    ],
    [
      { type: 'id', text: 'sudo' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'apt' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'update' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 以 root 身份更新软件包' }
    ],
    [
      { type: 'id', text: 'su' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 切换到 root 用户' }
    ]
  ],

  varConfig: [
    { name: 'permissions', color: '#3b82f6', appearStep: 1, type: 'string' },
    { name: 'owner', color: '#22c55e', appearStep: 3, type: 'string' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '命令开始执行，演示权限与用户管理',
        detail: 'Linux 权限系统：r(读=4)、w(写=2)、x(执行=1)。权限分为所有者 (user)、组 (group)、其他 (other)。chmod 修改权限，chown 修改所有者，sudo 提权执行。',
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
        permissions: { value: 'rw-r--r--', type: 'string', octal: '644' }
      },
      explanation: {
        text: '第 2 行：chmod 755 script.sh',
        detail: '数字模式：755 = rwx(7) r-x(5) r-x(5)。所有者：读 + 写 + 执行；组和其他：读 + 执行。常用于脚本和可执行文件。',
        actor: 'Terminal',
        icon: 'Shield',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1, 2],
      vars: {
        permissions: { value: 'rwxr-xr-x', type: 'string', octal: '755', executable: true }
      },
      explanation: {
        text: '权限变更详解',
        detail: '原权限 644(rw-r--r--) → 新权限 755(rwxr-xr-x)。所有者获得执行权限，组和其他获得执行权限。文件变为可执行。',
        actor: 'Terminal',
        icon: 'Check',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2, 3],
      vars: {
        permissions: { value: 'rwxr-xr-x', type: 'string', octal: '755' },
        owner: { value: 'user', group: 'user', type: 'string' }
      },
      explanation: {
        text: '第 4 行：chmod +x script.sh 符号模式',
        detail: '符号模式：+x 添加执行权限（不指定用户时对所有用户）。-x 移除执行权限。u=所有者，g=组，o=其他，a=所有。',
        actor: 'Terminal',
        icon: 'Plus',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3, 5],
      vars: {
        permissions: { value: 'r-xr-xr-x', type: 'string', octal: '555', writable: false }
      },
      explanation: {
        text: '第 6 行：chmod -w file.txt 移除写权限',
        detail: '-w 移除写权限。文件变为只读。尝试写入会收到"Permission denied"错误。常用於保护重要文件。',
        actor: 'Terminal',
        icon: 'Minus',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 7,
      executedLines: [1, 2, 3, 5, 7],
      vars: {
        owner: { value: 'user', group: 'group', type: 'string', changed: true }
      },
      explanation: {
        text: '第 8 行：chown user:group file.txt',
        detail: 'chown 修改文件所有者和组。格式：user:group。只改所有者：chown user file；只改组：chown :group file。',
        actor: 'Terminal',
        icon: 'User',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 3, 5, 7, 8],
      vars: {
        owner: { value: 'user', group: 'group', type: 'string', recursive: true }
      },
      explanation: {
        text: '第 9 行：chown -R user:group dir/ 递归修改',
        detail: '-R 递归修改目录及所有子目录、文件。常用于修改项目目录权限。注意：递归操作需谨慎，可能影响大量文件。',
        actor: 'Terminal',
        icon: 'Folder',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 11,
      executedLines: [1, 2, 3, 5, 7, 8, 11],
      vars: {
        sudo: { value: true, user: 'root', command: 'apt update' }
      },
      explanation: {
        text: '第 12 行：sudo apt update 提权执行',
        detail: 'sudo 以 root 身份执行命令。需要用户有 sudo 权限（在 sudoers 文件中）。首次使用需输入密码。适合安装软件、修改系统配置。',
        actor: 'Terminal',
        icon: 'Key',
        color: 'purple'
      }
    },
    {
      step: 8,
      line: 12,
      executedLines: [1, 2, 3, 5, 7, 8, 11, 12],
      vars: {
        user: { value: 'root', type: 'string', switched: true }
      },
      explanation: {
        text: '第 13 行：su - 切换到 root 用户',
        detail: 'su - 切换到 root 用户（需要 root 密码）。- 表示登录 shell，加载 root 的环境变量。su user 切换到指定用户。',
        actor: 'Terminal',
        icon: 'UserCog',
        color: 'purple'
      }
    }
  ],

  predictions: [
    {
      question: 'chmod 755 的权限是什么？',
      options: [
        { text: 'rwxr-xr-x', feedback: '正确！7=rwx, 5=r-x, 5=r-x。' },
        { text: 'rwxrwxr-x', feedback: '错误！755 不是 775。' },
        { text: 'rw-r--r--', feedback: '错误！这是 644。' },
        { text: 'rwxrwxrwx', feedback: '错误！这是 777。' }
      ],
      correctIndex: 0
    },
    {
      question: '如何给脚本添加执行权限？',
      options: [
        { text: 'chmod +x script.sh', feedback: '正确！+x 添加执行权限。' },
        { text: 'chmod +w script.sh', feedback: '错误！+w 添加写权限。' },
        { text: 'chmod 644 script.sh', feedback: '错误！644 没有执行权限。' },
        { text: 'chown +x script.sh', feedback: '错误！chown 修改所有者，不是权限。' }
      ],
      correctIndex: 0
    },
    {
      question: 'sudo 和 su 的区别是什么？',
      options: [
        { text: '没有区别', feedback: '错误！有重要区别。' },
        { text: 'sudo 临时提权，su 切换用户', feedback: '正确！sudo 执行单条命令，su 切换到另一用户。' },
        { text: 'sudo 更安全', feedback: '部分正确，但不完整。' },
        { text: 'su 更安全', feedback: '错误！sudo 更安全（无需分享密码）。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '777 权限最方便',
      truth: '777(rwxrwxrwx) 极度危险！任何用户都可读写执行。可能导致安全漏洞、数据被篡改。生产环境严禁 777。'
    },
    {
      myth: 'root 用户可以做任何事',
      truth: 'root 权限很大，但误操作后果严重（rm -rf /）。日常操作用普通用户，必要时用 sudo。'
    },
    {
      myth: 'chmod -R 755 对所有文件都好',
      truth: '错误！755 给所有文件添加执行权限，可能导致脚本意外执行。文件通常用 644，目录用 755。'
    },
    {
      myth: 'su 和 sudo 都需要 root 密码',
      truth: 'su 需要 root 密码，sudo 需要当前用户密码（且用户需在 sudoers 中）。sudo 更安全（可审计、可限制）。'
    }
  ],

  summary: {
    keyPoints: [
      '权限数字：r=4, w=2, x=1；755=rwxr-xr-x',
      'chmod 修改权限，chown 修改所有者',
      '符号模式：+x 添加执行，-w 移除写',
      'sudo 临时提权，su 切换用户',
      '递归操作 (-R) 需谨慎'
    ],
    pitfalls: [
      '误用 777 权限导致安全风险',
      'rm -rf 前未检查权限',
      'sudo 滥用导致权限过大',
      'chown 递归修改系统目录'
    ],
    transferQuestion: '如何让普通用户可以执行某个脚本，但不能修改它？写出权限设置命令。'
  }
};
