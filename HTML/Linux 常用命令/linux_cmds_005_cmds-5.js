window.LESSON_DATA = {
  meta: {
    chapter: 'linux-cmds',
    lessonId: 'linux-cmds-5',
    title: '文本处理三剑客',
    description: 'grep、sed、awk 命令详解与管道组合'
  },

  codeLines: [
    [
      { type: 'cmt', text: '# grep - 文本搜索' }
    ],
    [
      { type: 'id', text: 'grep' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"error"' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'app.log' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 搜索包含 error 的行' }
    ],
    [
      { type: 'id', text: 'grep' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'r' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"TODO"' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'src' },
      { type: 'punc', text: '/' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 递归搜索目录' }
    ],
    [
      { type: 'cmt', text: '# sed - 流编辑器' }
    ],
    [
      { type: 'id', text: 'sed' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's' },
      { type: 'op', text: '/' },
      { type: 'id', text: 'old' },
      { type: 'op', text: '/' },
      { type: 'id', text: 'new' },
      { type: 'op', text: '/' },
      { type: 'id', text: 'g' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'file.txt' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 全局替换 old 为 new' }
    ],
    [
      { type: 'id', text: 'sed' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'n' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"10,20p"' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'file.txt' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 打印第 10-20 行' }
    ],
    [
      { type: 'cmt', text: '# awk - 文本分析' }
    ],
    [
      { type: 'id', text: 'awk' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: "'{print $1}'" },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'data.txt' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 打印第一列' }
    ],
    [
      { type: 'id', text: 'awk' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'F' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: ':' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: "'{print $1}'" },
      { type: 'ws', text: ' ' },
      { type: 'id', text: '/etc/passwd' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 指定分隔符为:' }
    ],
    [
      { type: 'cmt', text: '# 管道组合' }
    ],
    [
      { type: 'id', text: 'cat' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'app.log' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '|' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'grep' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"ERROR"' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '|' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'wc' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'id', text: 'l' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '# 统计 ERROR 出现次数' }
    ]
  ],

  varConfig: [
    { name: 'matches', color: '#3b82f6', appearStep: 1, type: 'array' },
    { name: 'columns', color: '#22c55e', appearStep: 4, type: 'array' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '命令开始执行，演示文本处理工具',
        detail: 'Linux 文本处理三剑客：grep（搜索）、sed（编辑）、awk（分析）。配合管道组合，可实现强大的文本处理功能。日志分析、数据提取必备。',
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
        matches: {
          value: [
            '2024-03-14 10:00:01 ERROR Database connection failed',
            '2024-03-14 10:05:23 ERROR Timeout waiting for response'
          ],
          type: 'array',
          count: 2
        }
      },
      explanation: {
        text: '第 2 行：grep "error" app.log 搜索文本',
        detail: 'grep 逐行搜索，输出包含匹配模式的行。默认区分大小写。-i 忽略大小写，-n 显示行号，-v 反向匹配（不包含）。',
        actor: 'Terminal',
        icon: 'Search',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1, 2],
      vars: {
        matches: {
          value: ['./src/main.c:// TODO: fix bug', './src/utils.c:// TODO: optimize'],
          type: 'array',
          recursive: true
        }
      },
      explanation: {
        text: '第 3 行：grep -r "TODO" src/ 递归搜索',
        detail: '-r 递归搜索目录及子目录。输出格式：文件名：匹配行。常用组合：grep -rn 显示行号，grep -rl 只列文件名。',
        actor: 'Terminal',
        icon: 'FolderSearch',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 5,
      executedLines: [1, 2, 5],
      vars: {
        sed_result: {
          original: 'hello old world old',
          replaced: 'hello new world new',
          global: true
        }
      },
      explanation: {
        text: '第 6 行：sed -i s/old/new/g 全局替换',
        detail: 's/old/new/g：s=替换，g=global（全局）。不加 g 只替换每行第一个。-i 直接修改文件（危险！先备份）。sed 不修改原文件（不加-i 时）。',
        actor: 'Terminal',
        icon: 'Edit',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [1, 2, 5, 6],
      vars: {
        sed_lines: {
          value: ['Line 10', 'Line 11', '...', 'Line 20'],
          type: 'array',
          range: '10-20'
        }
      },
      explanation: {
        text: '第 7 行：sed -n "10,20p" 打印指定行',
        detail: '-n 禁止自动输出，"10,20p" 打印第 10-20 行。类似：head -20 | tail -10。sed 强大功能：删除行（d）、插入（i）、追加（a）。',
        actor: 'Terminal',
        icon: 'List',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 9,
      executedLines: [1, 2, 5, 6, 9],
      vars: {
        columns: {
          value: ['Alice', 'Bob', 'Charlie'],
          type: 'array',
          field: 1
        }
      },
      explanation: {
        text: '第 10 行：awk "{print $1}" 打印第一列',
        detail: 'awk 按列处理文本。$1=第一列，$2=第二列，$0=整行。默认空格分隔。自动解析每行，提取指定列。适合结构化数据。',
        actor: 'Terminal',
        icon: 'Table',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 10,
      executedLines: [1, 2, 5, 6, 9, 10],
      vars: {
        passwd_users: {
          value: ['root', 'daemon', 'bin', 'sys'],
          type: 'array',
          delimiter: ':'
        }
      },
      explanation: {
        text: '第 11 行：awk -F: "{print $1}" /etc/passwd',
        detail: '-F: 指定分隔符为冒号。/etc/passwd 格式：用户名：密码占位符:UID:GID:描述：家目录：shell。$1 是用户名字段。',
        actor: 'Terminal',
        icon: 'Users',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 13,
      executedLines: [1, 2, 5, 6, 9, 10, 13],
      vars: {
        pipeline: {
          cat: '读取 app.log',
          grep: '过滤 ERROR 行',
          wc: '统计行数',
          result: 42
        }
      },
      explanation: {
        text: '第 14 行：管道组合 cat | grep | wc -l',
        detail: '管道|将前一命令输出传给下一命令。cat 读取文件 → grep 过滤 ERROR → wc -l 统计行数。结果：ERROR 出现 42 次。管道是 Unix 哲学核心（小组件组合）。',
        actor: 'Terminal',
        icon: 'GitMerge',
        color: 'purple'
      }
    }
  ],

  predictions: [
    {
      question: '如何递归搜索目录下所有包含"TODO"的文件？',
      options: [
        { text: 'grep "TODO" src/', feedback: '错误！只搜索 src/目录本身。' },
        { text: 'grep -r "TODO" src/', feedback: '正确！-r 递归搜索子目录。' },
        { text: 'find src/ -name "TODO"', feedback: '错误！find 按文件名查找。' },
        { text: 'ls -r src/ | grep TODO', feedback: '错误！ls 列文件名，不是内容。' }
      ],
      correctIndex: 1
    },
    {
      question: 'sed s/old/new/g 中 g 的含义是什么？',
      options: [
        { text: '全局（替换所有匹配）', feedback: '正确！不加 g 只替换每行第一个。' },
        { text: '贪婪模式', feedback: '错误！' },
        { text: '忽略大小写', feedback: '错误！忽略大小写是/I。' },
        { text: '快速模式', feedback: '错误！' }
      ],
      correctIndex: 0
    },
    {
      question: 'awk 默认的分隔符是什么？',
      options: [
        { text: '逗号', feedback: '错误！CSV 文件需-F,。' },
        { text: '空格（空格和制表符）', feedback: '正确！默认空白字符分隔。' },
        { text: '冒号', feedback: '错误！/etc/passwd 需-F:。' },
        { text: '分号', feedback: '错误！' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'grep 可以搜索二进制文件',
      truth: 'grep 默认跳过二进制文件。用 grep -a 强制当作文本处理，但输出可能混乱。'
    },
    {
      myth: 'sed -i 是原子操作',
      truth: 'sed -i 直接修改文件，但失败可能导致数据丢失。建议先备份：sed -i.bak 或 cp file file.bak。'
    },
    {
      myth: 'awk 只能处理简单列',
      truth: 'awk 是完整编程语言！支持变量、函数、条件、循环、数组。复杂文本处理可用 awk 脚本。'
    },
    {
      myth: '管道效率低',
      truth: '管道是流式的，前命令输出直接传后命令，不经过临时文件。效率很高，是 Unix 设计精髓。'
    }
  ],

  summary: {
    keyPoints: [
      'grep 搜索文本：-r 递归，-i 忽略大小写，-n 行号',
      'sed 流编辑：s/old/new/g 替换，-i 直接修改',
      'awk 文本分析：$1 第一列，-F 指定分隔符',
      '管道组合：cmd1 | cmd2 | cmd3',
      'wc -l 统计行数'
    ],
    pitfalls: [
      'sed -i 未备份导致数据丢失',
      'grep 递归忘记-r',
      'awk 分隔符设置错误',
      '管道中命令顺序错误'
    ],
    transferQuestion: '如何统计日志文件中每个 IP 地址的访问次数？写出管道命令组合。'
  }
};
