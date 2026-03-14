window.LESSON_DATA = {
  meta: {
    chapter: 'linux-cmds',
    lessonId: 'linux-cmds-1',
    title: '文件与目录操作',
    description: 'ls、cd、pwd、cp、mv、rm、find 命令详解'
  },

  codeLines: [
    [
      { type: 'cmt', text: '# ls - 列出目录内容' }
    ],
    [
      { type: 'id', text: 'ls' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'la' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: '/home' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 输出：drwxr-xr-x 2 user user 4096 Mar 14 10:00 docs' }
    ],
    [
      { type: 'cmt', text: '# -rw-r--r-- 1 user user  123 Mar 14 09:00 file.txt' }
    ],
    [
      { type: 'cmt', text: '# cd/pwd - 目录导航' }
    ],
    [
      { type: 'id', text: 'pwd' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 输出：/home/user/projects' }
    ],
    [
      { type: 'id', text: 'cd' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 返回上一个目录' }
    ],
    [
      { type: 'cmt', text: '# find - 查找文件' }
    ],
    [
      { type: 'id', text: 'find' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: '.' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'name' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"*.c"' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 输出：./src/main.c' }
    ],
    [
      { type: 'cmt', text: '#         ./src/utils.c' }
    ],
    [
      { type: 'id', text: 'find' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: '.' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'mtime' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'num', text: '7' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 查找 7 天内修改的文件' }
    ]
  ],

  varConfig: [
    { name: 'current_dir', color: '#3b82f6', appearStep: 1, type: 'string' },
    { name: 'files', color: '#22c55e', appearStep: 2, type: 'array' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '命令开始执行，演示文件与目录操作',
        detail: 'Linux 文件操作是开发基础。ls 列出目录内容，cd/pwd 导航目录，cp/mv/rm 操作文件，find 按条件查找文件。熟练掌握这些命令能极大提高开发效率。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [1],
      vars: { current_dir: { value: '/home/user', type: 'string' } },
      explanation: {
        text: '第 2 行：ls -la /home 列出详细信息',
        detail: 'ls -la：-l 显示详细信息（权限、所有者、大小、时间），-a 显示隐藏文件（.开头）。输出格式：drwxr-xr-x（目录，rwx 所有者，r-x 组，r-x 其他）。',
        actor: 'Terminal',
        icon: 'Folder',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1, 2],
      vars: {
        files: {
          value: [
            { perms: 'drwxr-xr-x', owner: 'user', size: '4096', name: 'docs' },
            { perms: '-rw-r--r--', owner: 'user', size: '123', name: 'file.txt' }
          ],
          type: 'array'
        }
      },
      explanation: {
        text: 'ls 输出详解',
        detail: '第一列：d=目录，-=文件；rwx=权限（r=4, w=2, x=1）；4096=目录最小单元大小；123=文件字节数。隐藏文件（.git、.bashrc）需-a 显示。',
        actor: 'Terminal',
        icon: 'List',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 2, 4],
      vars: { current_dir: { value: '/home/user/projects', type: 'string' } },
      explanation: {
        text: '第 5 行：pwd 显示当前工作目录',
        detail: 'pwd（Print Working Directory）输出绝对路径。在脚本中常用于获取当前路径，便于构建相对路径。',
        actor: 'Terminal',
        icon: 'MapPin',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 4, 5],
      vars: {
        current_dir: { value: '/home/user', type: 'string', changed: true },
        prev_dir: { value: '/home/user/projects', type: 'string' }
      },
      explanation: {
        text: '第 6 行：cd - 返回上一个目录',
        detail: 'cd - 切换到上一个工作目录（等价于 cd $OLDPWD）。常用于在两个目录间快速切换。cd .. 返回上级，cd ~ 回到家目录。',
        actor: 'Terminal',
        icon: 'ArrowLeft',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 9,
      executedLines: [1, 2, 4, 5, 9],
      vars: {
        files: {
          value: ['./src/main.c', './src/utils.c'],
          type: 'array',
          matched: 2
        }
      },
      explanation: {
        text: '第 10 行：find . -name "*.c" 查找 C 文件',
        detail: 'find 从当前目录（.）递归查找，-name "*.c" 匹配文件名。支持通配符*（任意字符）和？（单字符）。输出匹配的完整路径。',
        actor: 'Terminal',
        icon: 'Search',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 10,
      executedLines: [1, 2, 4, 5, 9, 10],
      vars: {
        files: {
          value: ['./src/main.c', './README.md', './config.json'],
          type: 'array',
          matched: 3,
          condition: 'mtime -7'
        }
      },
      explanation: {
        text: '第 11 行：find . -mtime -7 查找最近修改的文件',
        detail: '-mtime -7 表示 7 天内修改的文件。-7=7 天内，7=7 天前，+7=7 天前更早。其他条件：-size（大小）、-user（所有者）、-perm（权限）。',
        actor: 'Terminal',
        icon: 'Clock',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: '如何查看隐藏文件？',
      options: [
        { text: 'ls -l', feedback: '错误！-l 只显示详细信息。' },
        { text: 'ls -a', feedback: '正确！-a 显示所有文件（包括.开头的隐藏文件）。' },
        { text: 'ls -h', feedback: '错误！-h 人类可读大小。' },
        { text: 'ls -R', feedback: '错误！-R 递归列出。' }
      ],
      correctIndex: 1
    },
    {
      question: 'rm -rf 是什么意思？',
      options: [
        { text: '只删除文件', feedback: '错误！-r 表示递归。' },
        { text: '递归强制删除（危险！）', feedback: '正确！-r 递归删除目录，-f 强制不提示。慎用！' },
        { text: '只删除空目录', feedback: '错误！' },
        { text: '删除后恢复', feedback: '错误！rm 不可恢复！' }
      ],
      correctIndex: 1
    },
    {
      question: 'find . -name "*.c" 的搜索范围是？',
      options: [
        { text: '当前目录', feedback: '错误！find 会递归。' },
        { text: '当前目录及所有子目录', feedback: '正确！find 从指定目录开始递归查找。' },
        { text: '整个系统', feedback: '错误！除非指定/。' },
        { text: '只/home 目录', feedback: '错误！' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'rm 删除的文件可以恢复',
      truth: 'rm 删除不可恢复！除非立即使用专业工具（testdisk、photorec），且不保证成功。重要文件先备份。'
    },
    {
      myth: 'ls -l 显示隐藏文件',
      truth: 'ls -l 不显示隐藏文件！需加-a：ls -la。隐藏文件以.开头（.git、.bashrc、.config）。'
    },
    {
      myth: 'find 只搜索当前目录',
      truth: 'find 默认递归搜索所有子目录。限制深度用-maxdepth：find . -maxdepth 2 -name "*.c"。'
    },
    {
      myth: 'cd .. 和 cd - 一样',
      truth: '完全不同！cd .. 到上级目录，cd - 到上一个工作目录（等价于 cd $OLDPWD）。'
    }
  ],

  summary: {
    keyPoints: [
      'ls -la 显示详细信息（含隐藏文件）',
      'pwd 显示当前绝对路径',
      'cd - 返回上一个工作目录',
      'find 递归查找，支持多种条件',
      'rm -rf 强制递归删除（慎用！）'
    ],
    pitfalls: [
      'rm -rf 误删重要文件',
      '忘记-a 看不到隐藏文件',
      'find 不限制深度搜索太慢',
      'cp 覆盖已有文件未备份'
    ],
    transferQuestion: '如何查找/home 目录下 7 天内修改的*.log 文件并删除？写出命令组合。'
  }
};
