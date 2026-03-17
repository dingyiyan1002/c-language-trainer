window.LESSON_DATA = {
  meta: {
    chapterId: 'enum',
    lessonId: 'enum-2',
    title: '枚举高级用法',
    index: 2,
    filename: 'enum_002_enum-2.js',
    keyPoints: ['枚举与 switch', '枚举位运算', 'typedef enum', '枚举应用场景']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 枚举高级：switch 语句与位标志' }] },
    { num: 2, tokens: [] },
    { num: 3, tokens: [
      { type: 'kw', text: 'typedef' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'enum' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 4, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'READ' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 0b0001：读权限' }
    ]},
    { num: 5, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'WRITE' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 0b0010：写权限' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'EXECUTE' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '4' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 0b0100：执行权限' }
    ]},
    { num: 7, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'ALL' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '7' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 0b0111：所有权限' }
    ]},
    { num: 8, tokens: [
      { type: 'punc', text: '}' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Permissions' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// typedef 简化类型名' }
    ]},
    { num: 9, tokens: [] },
    { num: 10, tokens: [
      { type: 'id', text: 'Permissions' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'perms' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'READ' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '|' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'WRITE' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 读写权限：0b0011 = 3' }
    ]},
    { num: 11, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 使用位或组合多个权限' }
    ]},
    { num: 12, tokens: [] },
    { num: 13, tokens: [
      { type: 'kw', text: 'if' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'perms' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'READ' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 14, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 检查是否有读权限' }
    ]},
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'canRead' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ';' }
    ]},
    { num: 16, tokens: [
      { type: 'punc', text: '}' }
    ]},
    { num: 17, tokens: [] },
    { num: 18, tokens: [
      { type: 'kw', text: 'enum' },
      { type: 'ws', text: ' ' },
      { type: 'punc', '{' }
    ]},
    { num: 19, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'Monday' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Tuesday' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Wednesday' },
    ]},
    { num: 20, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'Thursday' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Friday' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Saturday' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Sunday' }
    ]},
    { num: 21, tokens: [
      { type: 'punc', text: '}' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'day' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Wednesday' },
      { type: 'punc', text: ';' }
    ]},
    { num: 22, tokens: [] },
    { num: 23, tokens: [
      { type: 'kw', text: 'switch' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'day' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 24, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'case' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Monday' },
      { type: 'punc', text: ':' }
    ]},
    { num: 25, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'cmt', text: '// 星期一：开始工作' }
    ]},
    { num: 26, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'msg' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"Monday Blues"' },
      { type: 'punc', text: ';' }
    ]},
    { num: 27, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'break' },
      { type: 'punc', text: ';' }
    ]},
    { num: 28, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'case' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Friday' },
      { type: 'punc', text: ':' }
    ]},
    { num: 29, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'cmt', text: '// 星期五：周末前夜' }
    ]},
    { num: 30, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'msg' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"TGIF!"' },
      { type: 'punc', text: ';' }
    ]},
    { num: 31, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'break' },
      { type: 'punc', text: ';' }
    ]},
    { num: 32, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'case' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Saturday' },
      { type: 'punc', text: ':' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'case' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Sunday' },
      { type: 'punc', text: ':' }
    ]},
    { num: 33, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'cmt', text: '// 周末：休息' }
    ]},
    { num: 34, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'msg' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"Weekend!"' },
      { type: 'punc', text: ';' }
    ]},
    { num: 35, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'break' },
      { type: 'punc', text: ';' }
    ]},
    { num: 36, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'default' },
      { type: 'punc', text: ':' }
    ]},
    { num: 37, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'msg' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"Workday"' },
      { type: 'punc', text: ';' }
    ]},
    { num: 38, tokens: [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'break' },
      { type: 'punc', text: ';' }
    ]},
    { num: 39, tokens: [
      { type: 'punc', text: '}' }
    ]},
    { num: 40, tokens: [] },
    { num: 41, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'Permissions', name: 'typedef enum Permissions', type: 'typedef', addr: 'N/A', glowColor: 'rgba(168,85,247,0.35)', appearStep: 2, value: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}' },
    { key: 'READ', name: 'READ', type: 'enum_const', addr: 'N/A', glowColor: 'rgba(239,68,68,0.35)', appearStep: 3, value: '1 (0b0001)' },
    { key: 'WRITE', name: 'WRITE', type: 'enum_const', addr: 'N/A', glowColor: 'rgba(34,197,94,0.35)', appearStep: 4, value: '2 (0b0010)' },
    { key: 'EXECUTE', name: 'EXECUTE', type: 'enum_const', addr: 'N/A', glowColor: 'rgba(59,130,246,0.35)', appearStep: 5, value: '4 (0b0100)' },
    { key: 'ALL', name: 'ALL', type: 'enum_const', addr: 'N/A', glowColor: 'rgba(249,115,22,0.35)', appearStep: 6, value: '7 (0b0111)' },
    { key: 'perms', name: 'perms', type: 'Permissions', addr: '0x7ffd00', glowColor: 'rgba(168,85,247,0.35)', appearStep: 9, value: '3 (READ|WRITE)' },
    { key: 'canRead', name: 'canRead', type: 'int', addr: '0x7ffd04', glowColor: 'rgba(34,197,94,0.35)', appearStep: 14, value: '1' },
    { key: 'day', name: 'day', type: 'enum', addr: '0x7ffd08', glowColor: 'rgba(249,115,22,0.35)', appearStep: 20, value: 'Wednesday (2)' },
    { key: 'msg_weekday', name: 'msg (Monday)', type: 'char*', addr: '0x7ffd0c', glowColor: 'rgba(59,130,246,0.35)', appearStep: 25, value: '"Monday Blues"' },
    { key: 'msg_friday', name: 'msg (Friday)', type: 'char*', addr: '0x7ffd0c', glowColor: 'rgba(168,85,247,0.35)', appearStep: 29, value: '"TGIF!"' },
    { key: 'msg_weekend', name: 'msg (Weekend)', type: 'char*', addr: '0x7ffd0c', glowColor: 'rgba(250,204,21,0.35)', appearStep: 33, value: '"Weekend!"' },
    { key: 'msg_default', name: 'msg (Default)', type: 'char*', addr: '0x7ffd0c', glowColor: 'rgba(239,68,68,0.35)', appearStep: 36, value: '"Workday"' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'rocket',
        text: '准备执行代码',
        color: 'blue',
        actor: 'System',
        detail: '程序即将开始运行，演示枚举高级用法：typedef、位标志组合、switch 语句多路分支'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：枚举高级 - switch 语句与位标志',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示枚举与 switch 配合使用，以及位标志 (bit flags) 技术'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [1],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}' },
      highlightVar: 'Permissions',
      explanation: {
        icon: 'box',
        text: 'typedef enum：定义权限枚举类型',
        color: 'purple',
        actor: 'CPU',
        detail: 'typedef 为枚举类型创建别名 Permissions。之后可以直接用 Permissions 声明变量，无需写 typedef enum。这是 C 语言常见惯用法'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 3],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)' },
      highlightVar: 'READ',
      explanation: {
        icon: 'box',
        text: 'READ = 1 (0b0001)：读权限位标志',
        color: 'red',
        actor: 'CPU',
        detail: 'READ 被显式赋值为 1 (2 的 0 次方)。使用 2 的幂次方作为枚举值，每个值对应二进制的一个位，可用于位运算组合'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 3, 4],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)' },
      highlightVar: 'WRITE',
      explanation: {
        icon: 'box',
        text: 'WRITE = 2 (0b0010)：写权限位标志',
        color: 'green',
        actor: 'CPU',
        detail: 'WRITE = 2 (2 的 1 次方)，二进制只有第 1 位为 1。位标志设计使得多个权限可以用|组合，用&检查'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 3, 4, 5],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)' },
      highlightVar: 'EXECUTE',
      explanation: {
        icon: 'box',
        text: 'EXECUTE = 4 (0b0100)：执行权限位标志',
        color: 'cyan',
        actor: 'CPU',
        detail: 'EXECUTE = 4 (2 的 2 次方)，二进制只有第 2 位为 1。三个权限各占一位，互不干扰，可自由组合'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 3, 4, 5, 6],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)' },
      highlightVar: 'ALL',
      explanation: {
        icon: 'box',
        text: 'ALL = 7 (0b0111)：所有权限组合',
        color: 'orange',
        actor: 'CPU',
        detail: 'ALL = 7 = 1|2|4 = 0b0111。ALL 是便利值，表示所有权限都已设置。位标志枚举常用于权限系统、配置选项等'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 3, 4, 5, 6, 7],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)' },
      explanation: {
        icon: 'info',
        text: 'typedef enum { ... } Permissions：创建类型别名',
        color: 'blue',
        actor: 'CPU',
        detail: 'typedef 让枚举类型使用更方便。声明变量时可写 Permissions p 而不是 enum Permissions p。C 语言常用模式'
      }
    },
    {
      step: 8,
      line: 10,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：组合权限 READ | WRITE',
        color: 'blue',
        actor: 'CPU',
        detail: 'perms 变量使用位或运算符组合多个权限标志'
      }
    },
    {
      step: 9,
      line: 10,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)' },
      highlightVar: 'perms',
      explanation: {
        icon: 'calculator',
        text: 'perms = READ | WRITE = 3 (0b0011)',
        color: 'purple',
        actor: 'CPU',
        detail: '位或运算：0b0001 | 0b0010 = 0b0011 = 3。perms 同时拥有 READ 和 WRITE 权限。这是设置多个标志位标准方法'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：使用位或组合多个权限',
        color: 'blue',
        actor: 'CPU',
        detail: '| 位或运算符用于设置多个标志位。每个标志位独立，互不影响'
      }
    },
    {
      step: 11,
      line: 13,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：if (perms & READ) 检查权限',
        color: 'blue',
        actor: 'CPU',
        detail: '使用位与运算检查特定位是否被设置。perms & READ 非 0 表示有读权限'
      }
    },
    {
      step: 12,
      line: 13,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)' },
      explanation: {
        icon: 'calculator',
        text: 'perms & READ = 3 & 1 = 1，条件为真',
        color: 'blue',
        actor: 'CPU',
        detail: '位与运算：0b0011 & 0b0001 = 0b0001 = 1。结果非 0，表示 READ 位被设置，条件为真'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：检查是否有读权限',
        color: 'blue',
        actor: 'CPU',
        detail: '(flags & MASK) 是检查标志位是否设置的标准写法。结果为非 0 表示已设置'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1' },
      highlightVar: 'canRead',
      explanation: {
        icon: 'check',
        text: 'canRead = 1：确认有读权限',
        color: 'green',
        actor: 'CPU',
        detail: '因为 perms & READ 为真，执行 if 块内代码。canRead = 1 表示确认有读权限。canRead 占用 4 字节 (0x7ffd04)'
      }
    },
    {
      step: 15,
      line: 18,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1' },
      explanation: {
        icon: 'info',
        text: '阅读代码：定义星期枚举和 day 变量',
        color: 'blue',
        actor: 'CPU',
        detail: '定义无名枚举类型，同时声明 day 变量并初始化为 Wednesday'
      }
    },
    {
      step: 16,
      line: 19,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2' },
      explanation: {
        icon: 'info',
        text: 'Monday=0, Tuesday=1, Wednesday=2：默认递增',
        color: 'blue',
        actor: 'CPU',
        detail: '星期枚举成员默认从 0 开始递增。Monday=0, Tuesday=1, Wednesday=2, Thursday=3, Friday=4, Saturday=5, Sunday=6'
      }
    },
    {
      step: 17,
      line: 20,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2', Thursday: '3', Friday: '4', Saturday: '5', Sunday: '6' },
      explanation: {
        icon: 'info',
        text: 'Thursday=3, Friday=4, Saturday=5, Sunday=6',
        color: 'blue',
        actor: 'CPU',
        detail: '继续自动递增。Sunday=6 是一周的最后一天。这个枚举用于 switch 语句演示'
      }
    },
    {
      step: 18,
      line: 21,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2', Thursday: '3', Friday: '4', Saturday: '5', Sunday: '6', day: 'Wednesday (2)' },
      highlightVar: 'day',
      explanation: {
        icon: 'box',
        text: 'enum day = Wednesday：初始化为 Wednesday',
        color: 'orange',
        detail: 'day 变量是枚举类型，初始化为 Wednesday (值为 2)。day 占用 4 字节 (0x7ffd08)',
        actor: 'CPU'
      }
    },
    {
      step: 19,
      line: 23,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2', Thursday: '3', Friday: '4', Saturday: '5', Sunday: '6', day: 'Wednesday (2)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：switch(day) 多路分支',
        color: 'blue',
        actor: 'CPU',
        detail: 'switch 语句根据 day 的值选择不同的执行路径。枚举与 switch 是完美搭配'
      }
    },
    {
      step: 20,
      line: 24,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2', Thursday: '3', Friday: '4', Saturday: '5', Sunday: '6', day: 'Wednesday (2)' },
      explanation: {
        icon: 'info',
        text: 'case Monday: 检查是否是星期一',
        color: 'blue',
        actor: 'CPU',
        detail: 'day = Wednesday = 2，Monday = 0。2 != 0，不匹配，跳过此 case'
      }
    },
    {
      step: 21,
      line: 26,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2', Thursday: '3', Friday: '4', Saturday: '5', Sunday: '6', day: 'Wednesday (2)' },
      explanation: {
        icon: 'skip',
        text: '跳过 Monday 分支 (day != Monday)',
        color: 'gray',
        actor: 'CPU',
        detail: '因为 day != Monday，case Monday 分支被跳过。msg 不会被赋值为"Monday Blues"'
      }
    },
    {
      step: 22,
      line: 28,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2', Thursday: '3', Friday: '4', Saturday: '5', Sunday: '6', day: 'Wednesday (2)' },
      explanation: {
        icon: 'info',
        text: 'case Friday: 检查是否是星期五',
        color: 'blue',
        actor: 'CPU',
        detail: 'day = 2，Friday = 4。2 != 4，不匹配，跳过此 case'
      }
    },
    {
      step: 23,
      line: 30,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2', Thursday: '3', Friday: '4', Saturday: '5', Sunday: '6', day: 'Wednesday (2)' },
      explanation: {
        icon: 'skip',
        text: '跳过 Friday 分支 (day != Friday)',
        color: 'gray',
        actor: 'CPU',
        detail: '因为 day != Friday，case Friday 分支被跳过'
      }
    },
    {
      step: 24,
      line: 32,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2', Thursday: '3', Friday: '4', Saturday: '5', Sunday: '6', day: 'Wednesday (2)' },
      explanation: {
        icon: 'info',
        text: 'case Saturday: case Sunday: 检查是否周末',
        color: 'blue',
        actor: 'CPU',
        detail: '这是 case 穿透 (fallthrough) 技巧。Saturday=5, Sunday=6，day=2，都不匹配，跳过'
      }
    },
    {
      step: 25,
      line: 34,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2', Thursday: '3', Friday: '4', Saturday: '5', Sunday: '6', day: 'Wednesday (2)' },
      explanation: {
        icon: 'skip',
        text: '跳过 Weekend 分支 (day != Saturday/Sunday)',
        color: 'gray',
        actor: 'CPU',
        detail: '因为 day 不是 Saturday 或 Sunday，周末分支被跳过'
      }
    },
    {
      step: 26,
      line: 36,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2', Thursday: '3', Friday: '4', Saturday: '5', Sunday: '6', day: 'Wednesday (2)' },
      explanation: {
        icon: 'info',
        text: 'default: 默认分支',
        color: 'blue',
        actor: 'CPU',
        detail: 'day = Wednesday，没有匹配的 case，进入 default 默认分支'
      }
    },
    {
      step: 27,
      line: 37,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2', Thursday: '3', Friday: '4', Saturday: '5', Sunday: '6', day: 'Wednesday (2)', msg_default: '"Workday"' },
      highlightVar: 'msg_default',
      explanation: {
        icon: 'box',
        text: 'default 分支：msg = "Workday"',
        color: 'red',
        actor: 'CPU',
        detail: 'default 分支处理所有未匹配的情况。msg = "Workday" 表示工作日。msg 指向字符串字面量 (0x7ffd0c)'
      }
    },
    {
      step: 28,
      line: 41,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41],
      vars: { Permissions: '{READ=1, WRITE=2, EXECUTE=4, ALL=7}', READ: '1 (0b0001)', WRITE: '2 (0b0010)', EXECUTE: '4 (0b0100)', ALL: '7 (0b0111)', perms: '3 (READ|WRITE)', canRead: '1', Monday: '0', Tuesday: '1', Wednesday: '2', Thursday: '3', Friday: '4', Saturday: '5', Sunday: '6', day: 'Wednesday (2)', msg_default: '"Workday"' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键知识点：1) typedef enum 简化类型名  2) 位标志用 2 的幂次方  3) | 组合标志  4) & 检查标志  5) switch-case 多路分支  6) default 处理默认情况'
      }
    }
  ],

  summary: {
    oneLiner: '掌握 typedef enum、位标志组合和 switch 语句',
    pitfalls: [
      'typedef enum { ... } Name：创建类型别名，简化声明',
      '位标志枚举值必须是 2 的幂次方：1, 2, 4, 8...',
      '使用 | 运算符组合多个标志位',
      '使用 & 运算符检查特定标志位是否设置',
      'switch-case 处理枚举多分支，default 处理默认情况',
      'case 穿透 (fallthrough) 用于合并多个 case'
    ],
    transferQuestion: '为什么位标志要用 2 的幂次方而不是连续整数？',
    miniExercise: {
      bugCode: 'perms = READ | WRITE;  // 如何清除 WRITE 权限？',
      hint: 'perms &= ~WRITE：先对 WRITE 取反，再与 perms 进行位与'
    }
  },

  predictions: [
    {
      question: 'READ=1, WRITE=2, EXECUTE=4，那么 READ | WRITE | EXECUTE 的值是多少？',
      options: [
        { text: '6', feedback: '错误！1|2|4 不是简单相加。' },
        { text: '7', feedback: '正确！0b0001 | 0b0010 | 0b0100 = 0b0111 = 7。' },
        { text: '8', feedback: '错误！' },
        { text: '3', feedback: '错误！只是 READ|WRITE 的结果。' }
      ],
      correctIndex: 1
    },
    {
      question: 'switch 语句中 default 分支的作用是什么？',
      options: [
        { text: '可选的，没有实际作用', feedback: '错误！default 处理未匹配情况。' },
        { text: '处理所有 case 都不匹配的情况', feedback: '正确！default 是兜底分支，处理意外输入。' },
        { text: '必须放在最后', feedback: '错误！default 可以放在任意位置，但习惯放在最后。' },
        { text: '和 break 一起使用', feedback: '不完整。default 也需要 break，但这不是它的核心作用。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'typedef enum 创建了新类型',
      truth: 'typedef 只是给现有类型起别名，不创建新类型。enum { ... } 定义枚举类型，typedef 给它起名叫 Permissions。底层仍然是 int 类型。'
    },
    {
      myth: '位标志可以用任意整数',
      truth: '位标志必须用 2 的幂次方 (1,2,4,8,16...)，每个值对应二进制的一个独立位。如用连续整数 (1,2,3,4)，会导致位重叠，无法正确组合和检查。'
    },
    {
      myth: 'switch 比 if-else 快',
      truth: '编译器会对 switch 优化 (跳转表)，但现代编译器对 if-else 也有优化。分支少时无明显差异。switch 主要优势是代码清晰，不是性能。'
    },
    {
      myth: 'default 分支可以省略',
      truth: 'default 处理意外输入，提供兜底逻辑。省略 default 可能导致未处理情况。良好的编程习惯：总是包含 default，即使只是记录日志或断言。'
    }
  ]
};
