window.LESSON_DATA = {
  meta: {
    chapterId: 'bits',
    lessonId: 'bits-2',
    title: '位运算高级技巧',
    index: 2,
    filename: 'bits_002_bits-2.js',
    keyPoints: ['位掩码技术', '设置/清除/切换位', '位域操作', '实际应用场景']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 位运算高级技巧：位掩码和位操作' }] },
    { num: 2, tokens: [] },
    { num: 3, tokens: [
      { type: 'kw', text: 'unsigned' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0b00000000' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 初始所有标志位为 0' }
    ]},
    { num: 4, tokens: [] },
    { num: 5, tokens: [
      { type: 'kw', text: 'unsigned' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'READ' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0b00000001' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 第 0 位：读权限' }
    ]},
    { num: 6, tokens: [
      { type: 'kw', text: 'unsigned' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'WRITE' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0b00000010' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 第 1 位：写权限' }
    ]},
    { num: 7, tokens: [
      { type: 'kw', text: 'unsigned' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'EXECUTE' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0b00000100' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 第 2 位：执行权限' }
    ]},
    { num: 8, tokens: [] },
    { num: 9, tokens: [
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '|=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'READ' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// 设置 READ 位：flags = 0b00000001' }
    ]},
    { num: 10, tokens: [
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '|=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'WRITE' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 设置 WRITE 位：flags = 0b00000011' }
    ]},
    { num: 11, tokens: [] },
    { num: 12, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'hasRead' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'READ' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 检查 READ 位：1 (真)' }
    ]},
    { num: 13, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'hasExecute' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'EXECUTE' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 检查 EXECUTE 位：0 (假)' }
    ]},
    { num: 14, tokens: [] },
    { num: 15, tokens: [
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '~' },
      { type: 'id', text: 'WRITE' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 清除 WRITE 位：flags = 0b00000001' }
    ]},
    { num: 16, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// ~WRITE = 0b11111101, flags & 0b11111101 = 0b00000001' }
    ]},
    { num: 17, tokens: [] },
    { num: 18, tokens: [
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '^=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'READ' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// 切换 READ 位：flags = 0b00000000' }
    ]},
    { num: 19, tokens: [
      { type: 'id', text: 'flags' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '^=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'READ' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// 再切换 READ 位：flags = 0b00000001' }
    ]},
    { num: 20, tokens: [] },
    { num: 21, tokens: [
      { type: 'kw', text: 'unsigned' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'color' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0b10110100' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// RGB 颜色：R=1011, G=0100' }
    ]},
    { num: 22, tokens: [
      { type: 'kw', text: 'unsigned' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'red' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: '(color' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>>' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '4)' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0x0F' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 提取高 4 位：red = 10 (1011)' }
    ]},
    { num: 23, tokens: [
      { type: 'kw', text: 'unsigned' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'green' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'color' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0x0F' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 提取低 4 位：green = 4 (0100)' }
    ]},
    { num: 24, tokens: [] },
    { num: 25, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'flags', name: 'flags', type: 'unsigned char', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 2, value: '0b00000000' },
    { key: 'READ', name: 'READ', type: 'unsigned char', addr: '0x7ffd01', glowColor: 'rgba(59,130,246,0.35)', appearStep: 4, value: '0b00000001' },
    { key: 'WRITE', name: 'WRITE', type: 'unsigned char', addr: '0x7ffd02', glowColor: 'rgba(249,115,22,0.35)', appearStep: 5, value: '0b00000010' },
    { key: 'EXECUTE', name: 'EXECUTE', type: 'unsigned char', addr: '0x7ffd03', glowColor: 'rgba(168,85,247,0.35)', appearStep: 6, value: '0b00000100' },
    { key: 'flags_r', name: 'flags |= READ', type: 'modification', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 8, value: '0b00000001' },
    { key: 'flags_rw', name: 'flags |= WRITE', type: 'modification', addr: '0x7ffd00', glowColor: 'rgba(250,204,21,0.35)', appearStep: 9, value: '0b00000011' },
    { key: 'hasRead', name: 'hasRead', type: 'int', addr: '0x7ffd04', glowColor: 'rgba(239,68,68,0.35)', appearStep: 11, value: '1 (true)' },
    { key: 'hasExecute', name: 'hasExecute', type: 'int', addr: '0x7ffd08', glowColor: 'rgba(168,85,247,0.35)', appearStep: 12, value: '0 (false)' },
    { key: 'flags_clear', name: 'flags &= ~WRITE', type: 'modification', addr: '0x7ffd00', glowColor: 'rgba(250,204,21,0.35)', appearStep: 14, value: '0b00000001' },
    { key: 'flags_toggle1', name: 'flags ^= READ', type: 'modification', addr: '0x7ffd00', glowColor: 'rgba(59,130,246,0.35)', appearStep: 17, value: '0b00000000' },
    { key: 'flags_toggle2', name: 'flags ^= READ', type: 'modification', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 18, value: '0b00000001' },
    { key: 'color', name: 'color', type: 'unsigned char', addr: '0x7ffd10', glowColor: 'rgba(249,115,22,0.35)', appearStep: 20, value: '0b10110100' },
    { key: 'red', name: 'red', type: 'unsigned char', addr: '0x7ffd11', glowColor: 'rgba(239,68,68,0.35)', appearStep: 21, value: '10 (1011)' },
    { key: 'green', name: 'green', type: 'unsigned char', addr: '0x7ffd12', glowColor: 'rgba(59,130,246,0.35)', appearStep: 22, value: '4 (0100)' }
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
        detail: '程序即将开始运行，演示位运算的高级技巧和实际应用'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：位运算高级技巧 - 位掩码和位操作',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示位掩码技术在标志位管理中的应用'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [1],
      vars: { flags: '0b00000000' },
      highlightVar: 'flags',
      explanation: {
        icon: 'box',
        text: 'unsigned char flags = 0：初始化标志变量',
        color: 'green',
        actor: 'CPU',
        detail: 'flags 是 8 位无符号字符，初始所有位为 0。将用作标志位容器'
      }
    },
    {
      step: 3,
      line: 5,
      executedLines: [1, 3, 4],
      vars: { flags: '0b00000000' },
      explanation: {
        icon: 'info',
        text: '阅读代码：定义权限标志常量',
        color: 'blue',
        actor: 'CPU',
        detail: 'READ、WRITE、EXECUTE 分别占用第 0、1、2 位，形成位掩码'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 3, 4, 5],
      vars: { flags: '0b00000000', READ: '0b00000001' },
      highlightVar: 'READ',
      explanation: {
        icon: 'memory',
        text: 'READ = 0b00000001：读权限掩码',
        color: 'cyan',
        actor: 'CPU',
        detail: 'READ 占用最低位 (第 0 位)，值为 1。这是位掩码的基础'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 3, 4, 5, 6],
      vars: { flags: '0b00000000', READ: '0b00000001', WRITE: '0b00000010' },
      highlightVar: 'WRITE',
      explanation: {
        icon: 'memory',
        text: 'WRITE = 0b00000010：写权限掩码',
        color: 'orange',
        actor: 'CPU',
        detail: 'WRITE 占用第 1 位，值为 2。每个标志位独占一位'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 3, 4, 5, 6, 7],
      vars: { flags: '0b00000000', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100' },
      highlightVar: 'EXECUTE',
      explanation: {
        icon: 'memory',
        text: 'EXECUTE = 0b00000100：执行权限掩码',
        color: 'purple',
        actor: 'CPU',
        detail: 'EXECUTE 占用第 2 位，值为 4。三个标志位互不重叠'
      }
    },
    {
      step: 7,
      line: 9,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { flags: '0b00000000', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100' },
      explanation: {
        icon: 'info',
        text: '阅读代码：使用 |= 设置 READ 位',
        color: 'blue',
        actor: 'CPU',
        detail: '|= 是复合赋值运算符，flags |= READ 等价于 flags = flags | READ'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { flags: '0b00000001', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100', flags_r: '0b00000001' },
      highlightVar: 'flags_r',
      explanation: {
        icon: 'calculator',
        text: 'flags |= READ：设置 READ 位',
        color: 'green',
        actor: 'CPU',
        detail: '0b00000000 | 0b00000001 = 0b00000001。READ 位被设置，其他位不变'
      }
    },
    {
      step: 9,
      line: 10,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10],
      vars: { flags: '0b00000011', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100', flags_rw: '0b00000011' },
      highlightVar: 'flags_rw',
      explanation: {
        icon: 'calculator',
        text: 'flags |= WRITE：设置 WRITE 位',
        color: 'yellow',
        actor: 'CPU',
        detail: '0b00000001 | 0b00000010 = 0b00000011。现在 flags 有 READ 和 WRITE 两个标志'
      }
    },
    {
      step: 10,
      line: 12,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12],
      vars: { flags: '0b00000011', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100' },
      explanation: {
        icon: 'info',
        text: '阅读代码：使用 & 检查 READ 位',
        color: 'blue',
        actor: 'CPU',
        detail: 'flags & READ 如果非 0 表示 READ 位被设置'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12],
      vars: { flags: '0b00000011', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100', hasRead: '1 (true)' },
      highlightVar: 'hasRead',
      explanation: {
        icon: 'pointer',
        text: 'hasRead = flags & READ = 1',
        color: 'red',
        actor: 'CPU',
        detail: '0b00000011 & 0b00000001 = 0b00000001 = 1。结果非 0，表示 READ 位已设置'
      }
    },
    {
      step: 12,
      line: 13,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13],
      vars: { flags: '0b00000011', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100', hasRead: '1 (true)', hasExecute: '0 (false)' },
      highlightVar: 'hasExecute',
      explanation: {
        icon: 'pointer',
        text: 'hasExecute = flags & EXECUTE = 0',
        color: 'purple',
        actor: 'CPU',
        detail: '0b00000011 & 0b00000100 = 0b00000000 = 0。结果为 0，表示 EXECUTE 位未设置'
      }
    },
    {
      step: 13,
      line: 15,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15],
      vars: { flags: '0b00000011', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100' },
      explanation: {
        icon: 'info',
        text: '阅读代码：使用 &= ~ 清除 WRITE 位',
        color: 'blue',
        actor: 'CPU',
        detail: '~WRITE 产生反码，flags & ~WRITE 将清除 WRITE 位'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15],
      vars: { flags: '0b00000001', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100', flags_clear: '0b00000001' },
      highlightVar: 'flags_clear',
      explanation: {
        icon: 'calculator',
        text: 'flags &= ~WRITE：清除 WRITE 位',
        color: 'yellow',
        actor: 'CPU',
        detail: '~WRITE = 0b11111101，flags & 0b11111101 = 0b00000001。只有 WRITE 位被清除'
      }
    },
    {
      step: 15,
      line: 16,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15],
      vars: { flags: '0b00000001', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100' },
      explanation: {
        icon: 'info',
        text: '阅读注释：~WRITE = 0b11111101, flags & ~WRITE = 0b00000001',
        color: 'blue',
        actor: 'CPU',
        detail: '这是清除特定位的标准方法：先取反掩码，再按位与'
      }
    },
    {
      step: 16,
      line: 18,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18],
      vars: { flags: '0b00000001', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100' },
      explanation: {
        icon: 'info',
        text: '阅读代码：使用 ^= 切换 READ 位',
        color: 'blue',
        actor: 'CPU',
        detail: '^= 是异或复合赋值，切换指定位 (0 变 1，1 变 0)'
      }
    },
    {
      step: 17,
      line: 18,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18],
      vars: { flags: '0b00000000', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100', flags_toggle1: '0b00000000' },
      highlightVar: 'flags_toggle1',
      explanation: {
        icon: 'calculator',
        text: 'flags ^= READ：切换 READ 位 (1→0)',
        color: 'cyan',
        actor: 'CPU',
        detail: '0b00000001 ^ 0b00000001 = 0b00000000。READ 位从 1 切换为 0'
      }
    },
    {
      step: 18,
      line: 19,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19],
      vars: { flags: '0b00000001', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100', flags_toggle2: '0b00000001' },
      highlightVar: 'flags_toggle2',
      explanation: {
        icon: 'calculator',
        text: 'flags ^= READ：再切换 READ 位 (0→1)',
        color: 'green',
        actor: 'CPU',
        detail: '0b00000000 ^ 0b00000001 = 0b00000001。READ 位从 0 切换回 1。异或的可逆性！'
      }
    },
    {
      step: 19,
      line: 21,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21],
      vars: { flags: '0b00000001', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100' },
      explanation: {
        icon: 'info',
        text: '阅读代码：RGB 颜色位域操作',
        color: 'blue',
        actor: 'CPU',
        detail: 'color 变量存储压缩的 RGB 颜色值，高 4 位是红色，低 4 位是绿色'
      }
    },
    {
      step: 20,
      line: 21,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21],
      vars: { flags: '0b00000001', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100', color: '0b10110100' },
      highlightVar: 'color',
      explanation: {
        icon: 'box',
        text: 'unsigned char color = 0b10110100',
        color: 'orange',
        actor: 'CPU',
        detail: 'color = 0b10110100，高 4 位 (1011=11) 是红色分量，低 4 位 (0100=4) 是绿色分量'
      }
    },
    {
      step: 21,
      line: 22,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22],
      vars: { flags: '0b00000001', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100', color: '0b10110100', red: '10 (1011)' },
      highlightVar: 'red',
      explanation: {
        icon: 'calculator',
        text: 'red = (color >> 4) & 0x0F = 11',
        color: 'red',
        actor: 'CPU',
        detail: '右移 4 位：10110100 >> 4 = 00001011，& 0x0F 提取低 4 位 = 1011 = 11 (十进制)'
      }
    },
    {
      step: 22,
      line: 23,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22, 23],
      vars: { flags: '0b00000001', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100', color: '0b10110100', red: '10 (1011)', green: '4 (0100)' },
      highlightVar: 'green',
      explanation: {
        icon: 'calculator',
        text: 'green = color & 0x0F = 4',
        color: 'green',
        actor: 'CPU',
        detail: '& 0x0F = &0b00001111 提取低 4 位：10110100 & 00001111 = 00000100 = 4 (十进制)'
      }
    },
    {
      step: 23,
      line: 25,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22, 23, 25],
      vars: { flags: '0b00000001', READ: '0b00000001', WRITE: '0b00000010', EXECUTE: '0b00000100', color: '0b10110100', red: '10 (1011)', green: '4 (0100)' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键技巧：1) |= 设置位  2) &= ~清除位  3) ^= 切换位  4) & 检查位  5) >> & 掩码提取位域'
      }
    }
  ],

  summary: {
    oneLiner: '掌握位掩码技术和位操作的实际应用',
    pitfalls: [
      '设置位：flags |= MASK，使用 OR 运算设置指定位',
      '清除位：flags &= ~MASK，先取反再 AND',
      '切换位：flags ^= MASK，使用 XOR 运算切换',
      '检查位：(flags & MASK) != 0，结果非 0 表示已设置',
      '提取位域：(value >> shift) & mask，先右移再掩码'
    ],
    transferQuestion: '为什么异或运算可以用于切换标志位？',
    miniExercise: {
      bugCode: 'flags = flags & WRITE;  // 错误！这会清除 WRITE 位以外的所有位',
      hint: '修复：flags |= WRITE; 才能设置 WRITE 位'
    }
  },

  predictions: [
    {
      question: '如何清除 flags 的第 2 位？',
      options: [
        { text: 'flags &= ~0x04;', feedback: '正确！~0x04 = ~0b00000100 = 0b11111011, AND 后清除第 2 位' },
        { text: 'flags |= 0x04;', feedback: '错误！这是设置第 2 位，不是清除。' },
        { text: 'flags ^= 0x04;', feedback: '错误！这是切换第 2 位，不是清除。' },
        { text: 'flags &= 0x04;', feedback: '错误！这会清除第 2 位以外的所有位。' }
      ],
      correctIndex: 0
    },
    {
      question: '如何提取 value 的第 3-5 位 (3 位宽)？',
      options: [
        { text: '(value >> 3) & 0x07;', feedback: '正确！右移 3 位后，&0x07(0b111) 提取低 3 位' },
        { text: 'value & 0x07;', feedback: '错误！这提取的是第 0-2 位，不是第 3-5 位。' },
        { text: '(value >> 3) & 0x0F;', feedback: '错误！0x0F 提取 4 位，不是 3 位。' },
        { text: 'value >> 3;', feedback: '错误！没有掩码，会保留所有高位。' }
      ],
      correctIndex: 0
    }
  ],

  misconceptions: [
    {
      myth: 'flags &= MASK 可以清除指定位',
      truth: 'flags &= MASK 会清除掩码外所有位！清除特定位要用 flags &= ~MASK。例如清除第 2 位：flags &= ~0x04。'
    },
    {
      myth: '异或切换后可以用异或恢复',
      truth: '正确！XOR 的可逆性：(a ^ b) ^ b = a。这正是切换开关的原理，两次 XOR 同一值恢复原状。'
    },
    {
      myth: '位掩码只能用于权限管理',
      truth: '位掩码广泛应用：权限控制、状态机、压缩数据存储 (如 RGB 颜色)、硬件寄存器、协议标志等。'
    },
    {
      myth: '右移后不需要掩码',
      truth: '右移后高位可能残留数据 (尤其是负数算术右移补 1)。必须 & 掩码确保只保留目标位。'
    }
  ]
};
