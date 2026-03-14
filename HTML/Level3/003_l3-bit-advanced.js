window.LESSON_DATA = {
  meta: {
    id: 'l3-bit-advanced',
    title: '位操作进阶',
    chapter: 'Level3',
    index: 3,
    filename: 'bit_operations.c',
    keyPoints: ['位域提取', '位掩码', '位操作技巧']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 4, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'unsigned' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'reg' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0xB7' }, { type: 'punc', text: ';' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'unsigned' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'mask' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x0F' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'unsigned' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'lowNibble' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'reg' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'mask' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'unsigned' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'highNibble' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'reg' }, { type: 'ws', text: ' ' }, { type: 'op', text: '>>' }, { type: 'ws', text: ' ' }, { type: 'num', text: '4' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'mask' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'unsigned' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'setBit' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'reg' }, { type: 'ws', text: ' ' }, { type: 'op', text: '|' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '3' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"reg=0x%02X, low=0x%X, high=0x%X, setBit=0x%02X\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'reg' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'lowNibble' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'highNibble' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'setBit' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'reg', name: 'reg', type: 'unsigned char', addr: '0x7fff10', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'mask', name: 'mask', type: 'unsigned char', addr: '0x7fff11', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'lowNibble', name: 'lowNibble', type: 'unsigned char', addr: '0x7fff12', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 },
    { key: 'highNibble', name: 'highNibble', type: 'unsigned char', addr: '0x7fff13', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 4 },
    { key: 'setBit', name: 'setBit', type: 'unsigned char', addr: '0x7fff14', glowColor: 'rgba(239,68,68,0.35)', accentCls: 'text-red-400', badgeCls: 'text-red-400 border-red-500/30 bg-red-500/12', appearStep: 5 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习位操作技巧（寄存器操作基础）', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 4,
      executedLines: [3],
      vars: { reg: 183 },
      highlightVar: 'reg',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'reg = 0xB7 = 10110111B，模拟 8 位寄存器',
        color: 'yellow',
        actor: 'CPU',
        detail: 'unsigned char 占 8 位（1 字节）。0xB7 十六进制=10110111 二进制=十进制 183。嵌入式中常用 unsigned char 模拟硬件寄存器。'
      },
      prediction: {
        question: '0xB7 的二进制表示是什么？',
        options: ['10110111', '11010111', '10111011'],
        answer: 0
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:reg',
      timing: 'main-loop'
    },
    {
      step: 2,
      line: 5,
      executedLines: [3, 4],
      vars: { reg: 183, mask: 15 },
      highlightVar: 'mask',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'mask = 0x0F = 00001111B，低 4 位掩码',
        color: 'purple',
        actor: 'CPU',
        detail: '掩码（mask）用于提取或设置特定位。0x0F 低 4 位为 1，高 4 位为 0。与（AND）操作可提取低 4 位。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:mask',
      timing: 'main-loop'
    },
    {
      step: 3,
      line: 6,
      executedLines: [3, 4, 5],
      vars: { reg: 183, mask: 15, lowNibble: 7 },
      highlightVar: 'lowNibble',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'bolt',
        text: 'lowNibble = reg & mask = 0xB7 & 0x0F = 0x07',
        color: 'blue',
        actor: 'CPU',
        detail: '按位与（&）：10110111 & 00001111 = 00000111 = 0x07 = 7。掩码高 4 位为 0，所以 reg 高 4 位被清零，只保留低 4 位。'
      },
      prediction: null,
      misconception: {
        title: '按位与 vs 逻辑与',
        text: '& 是按位与（逐位运算），&& 是逻辑与（真假判断）。0xB7 & 0x0F = 0x07（位运算），而 0xB7 && 0x0F = 1（逻辑真）。'
      },
      actor: 'CPU',
      target: 'var:lowNibble',
      timing: 'main-loop'
    },
    {
      step: 4,
      line: 7,
      executedLines: [3, 4, 5, 6],
      vars: { reg: 183, mask: 15, lowNibble: 7, highNibble: 11 },
      highlightVar: 'highNibble',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'bolt',
        text: 'highNibble = (reg >> 4) & mask = 0x0B = 11',
        color: 'orange',
        actor: 'CPU',
        detail: '右移 4 位：10110111 >> 4 = 00001011 = 0x0B = 11。再与 0x0F 确保高 4 位清零。提取高 4 位（1011=11）。'
      },
      prediction: {
        question: 'reg >> 4 的效果是什么？',
        options: ['乘以 16', '除以 16', '加 4'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:highNibble',
      timing: 'main-loop'
    },
    {
      step: 5,
      line: 8,
      executedLines: [3, 4, 5, 6, 7],
      vars: { reg: 183, mask: 15, lowNibble: 7, highNibble: 11, setBit: 191 },
      highlightVar: 'setBit',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'bolt',
        text: 'setBit = reg | (1 << 3) = 0xB7 | 0x08 = 0xBF',
        color: 'red',
        actor: 'CPU',
        detail: '1 << 3 = 00001000 = 0x08（第 3 位置 1）。按位或（|）：10110111 | 00001000 = 10111111 = 0xBF。第 3 位从 1 变为 1（原来是 1，保持不变）。'
      },
      prediction: null,
      misconception: {
        title: '置位 vs 清零',
        text: '置 1 用或（|）操作，清零用与（~mask）操作，翻转用异或（^）操作。这是位操作的三大基本技巧。'
      },
      actor: 'CPU',
      target: 'var:setBit',
      timing: 'main-loop'
    },
    {
      step: 6,
      line: 9,
      executedLines: [3, 4, 5, 6, 7, 8],
      vars: { reg: 183, mask: 15, lowNibble: 7, highNibble: 11, setBit: 191 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'reg=0xB7, low=0x7, high=0xB, setBit=0xBF' }],
      explanation: {
        icon: 'terminal',
        text: '输出结果：reg=0xB7, low=0x7, high=0xB, setBit=0xBF',
        color: 'green',
        actor: 'CPU',
        detail: '%02X 格式：两位十六进制，不足补零。验证位操作结果：低 4 位提取正确（7），高 4 位提取正确（B=11），置位正确（B7|08=BF）。'
      },
      prediction: {
        question: '如果要清零第 3 位，应该用什么操作？',
        options: ['reg | (1<<3)', 'reg & ~(1<<3)', 'reg ^ (1<<3)'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 7,
      line: 10,
      executedLines: [3, 4, 5, 6, 7, 8, 9],
      vars: { reg: 183, mask: 15, lowNibble: 7, highNibble: 11, setBit: 191 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'reg=0xB7, low=0x7, high=0xB, setBit=0xBF' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，位操作：&提取、|置位、^翻转、~取反',
        color: 'green',
        actor: 'CPU',
        detail: '位操作应用：1) 提取位段（&掩码）2) 置 1 位（|掩码）3) 清零位（&~掩码）4) 翻转位（^掩码）5) 移位（>> <<）。嵌入式开发必备技能。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: '位操作：&提取、|置位、^翻转、~取反、移位，嵌入式寄存器操作基础',
    pitfalls: [
      '按位与 (&) 不是逻辑与 (&&)，位运算逐位计算，逻辑运算只论真假',
      '移位运算符优先级低于加减，最好用括号明确优先级',
      '有符号数右移可能补符号位（算术移位），用 unsigned 避免问题'
    ],
    transferQuestion: '如果要翻转 reg 的第 2 位（从 0 开始），应该用什么操作？（提示：异或）',
    miniExercise: {
      bugCode: 'unsigned char reg = 0xB7;\nreg | (1 << 3);  // 这样能成功置位吗？',
      hint: '表达式结果没有赋值回 reg，应该写 reg |= (1 << 3)'
    }
  }
};
