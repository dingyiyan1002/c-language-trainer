window.LESSON_DATA = {
  meta: {
    id: 'l3-file',
    title: '文件操作',
    chapter: 'Level3',
    index: 2,
    filename: 'file_io.c',
    keyPoints: ['fopen', 'fread', 'fwrite']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 4, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'FILE' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'fp' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'fopen' }, { type: 'punc', text: '(' }, { type: 'str', text: '"data.txt"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"w"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'fp' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 6, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Failed to open file\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'data' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '42' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'fprintf' }, { type: 'punc', text: '(' }, { type: 'id', text: 'fp' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"%d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'data' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'fclose' }, { type: 'punc', text: '(' }, { type: 'id', text: 'fp' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'fp' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'fopen' }, { type: 'punc', text: '(' }, { type: 'str', text: '"data.txt"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"r"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'readData' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'fscanf' }, { type: 'punc', text: '(' }, { type: 'id', text: 'fp' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"%d"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'id', text: 'readData' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Read: %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'readData' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'fclose' }, { type: 'punc', text: '(' }, { type: 'id', text: 'fp' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'fp', name: 'fp', type: 'FILE*', addr: '0x7fff10', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 1 },
    { key: 'data', name: 'data', type: 'int', addr: '0x7fff18', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 2 },
    { key: 'readData', name: 'readData', type: 'int', addr: '0x7fff1c', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习文件 I/O 操作', color: 'blue', actor: null, detail: null },
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
      vars: { fp: '0x1000' },
      highlightVar: 'fp',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'folder',
        text: 'fopen("data.txt", "w") 以写模式打开文件',
        color: 'yellow',
        actor: 'OS',
        detail: 'fopen 创建 FILE 对象，返回文件指针。"w" 模式：文件不存在则创建，存在则清空。FILE 是封装文件描述符的结构体。'
      },
      prediction: {
        question: '"w" 模式下文件已存在会发生什么？',
        options: ['追加到末尾', '清空原内容', '报错'],
        answer: 1
      },
      misconception: null,
      actor: 'OS',
      target: 'file:open',
      timing: 'runtime'
    },
    {
      step: 2,
      line: 5,
      executedLines: [3, 4],
      vars: { fp: '0x1000' },
      highlightVar: 'fp',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: '检查 fopen 返回值，失败时处理错误',
        color: 'green',
        actor: 'CPU',
        detail: 'fopen 失败（如权限不足、磁盘满）返回 NULL。必须检查，否则后续 fwrite/fclose 会崩溃。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:fp',
      timing: 'main-loop'
    },
    {
      step: 3,
      line: 9,
      executedLines: [3, 4, 5, 6, 7, 8],
      vars: { fp: '0x1000', data: 42 },
      highlightVar: 'data',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'data = 42，准备写入文件的整数',
        color: 'yellow',
        actor: 'CPU',
        detail: 'data 是栈上变量，值为 42。将通过 fprintf 写入文件。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:data',
      timing: 'main-loop'
    },
    {
      step: 4,
      line: 10,
      executedLines: [3, 4, 5, 6, 7, 8, 9],
      vars: { fp: '0x1000', data: 42 },
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: 'fprintf(fp, "%d\\n", data) 将 42 写入文件',
        color: 'green',
        actor: 'OS',
        detail: 'fprintf 格式化数据写入文件缓冲区。42 转为 ASCII "42\\n"（3 字节）。数据先写入缓冲区，非立即写盘。'
      },
      prediction: null,
      misconception: {
        title: '缓冲 I/O 机制',
        text: 'fwrite/fprintf 先写入缓冲区，满 buffer 或 fclose 时才写盘。这提高效率但可能导致数据丢失（崩溃时 buffer 未刷新）。'
      },
      actor: 'OS',
      target: 'file:write',
      timing: 'runtime'
    },
    {
      step: 5,
      line: 11,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10],
      vars: { fp: '0x1000', data: 42 },
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: 'fclose(fp) 关闭文件，刷新缓冲区',
        color: 'green',
        actor: 'OS',
        detail: 'fclose 做三件事：1) 刷新缓冲区到磁盘 2) 释放 FILE 对象 3) 关闭文件描述符。忘记 fclose 会丢失 buffer 数据。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'file:close',
      timing: 'runtime'
    },
    {
      step: 6,
      line: 13,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      vars: { fp: '0x1001' },
      highlightVar: 'fp',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'folder',
        text: 'fopen("data.txt", "r") 以读模式重新打开文件',
        color: 'blue',
        actor: 'OS',
        detail: '"r" 模式：文件必须存在，只读。fopen 返回新的 FILE 指针（地址可能不同）。文件位置指针在开头。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'file:open',
      timing: 'runtime'
    },
    {
      step: 7,
      line: 14,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: { fp: '0x1001', readData: 0 },
      highlightVar: 'readData',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: '声明 readData 变量准备存储读取的数据',
        color: 'yellow',
        actor: 'CPU',
        detail: 'readData 是未初始化的栈变量，初始值是垃圾值。fscanf 将覆盖它。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:readData',
      timing: 'main-loop'
    },
    {
      step: 8,
      line: 15,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      vars: { fp: '0x1001', readData: 42 },
      highlightVar: 'readData',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: 'fscanf(fp, "%d", &readData) 从文件读取 42',
        color: 'green',
        actor: 'OS',
        detail: 'fscanf 从文件读取 ASCII 字符"42"，解析为整数 42，存入 readData 地址。& 是取地址运算符。'
      },
      prediction: {
        question: '&readData 的作用是什么？',
        options: ['readData 的值', 'readData 的地址，让 fscanf 能写入', '无意义'],
        answer: 1
      },
      misconception: null,
      actor: 'OS',
      target: 'file:read',
      timing: 'runtime'
    },
    {
      step: 9,
      line: 16,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { fp: '0x1001', readData: 42 },
      highlightVar: 'readData',
      isDanger: false,
      output: [{ type: 'success', text: 'Read: 42' }],
      explanation: {
        icon: 'terminal',
        text: '输出 Read: 42，验证文件读写成功',
        color: 'green',
        actor: 'CPU',
        detail: 'printf 输出 readData 的值 42。这证明文件写入和读取都成功了。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 10,
      line: 17,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      vars: { fp: '0x1001', readData: 42 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Read: 42' }],
      explanation: {
        icon: 'check',
        text: 'fclose(fp) 关闭读取的文件',
        color: 'green',
        actor: 'OS',
        detail: 'fclose 释放 FILE 对象。每个 fopen 必须有对应的 fclose，否则资源泄漏（文件描述符耗尽）。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'file:close',
      timing: 'runtime'
    },
    {
      step: 11,
      line: 18,
      executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      vars: { fp: '0x1001', readData: 42 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Read: 42' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，文件操作：fopen→读/写→fclose',
        color: 'green',
        actor: 'CPU',
        detail: '文件操作关键点：1) 选择正确模式（r/w/a）2) 检查 NULL 3) 读写操作 4) 必须 fclose。忘记 fclose 是常见 Bug。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: 'fopen 打开文件，fprintf/fscanf 读写，fclose 关闭并刷新缓冲区',
    pitfalls: [
      'fopen 失败返回 NULL，必须检查否则后续操作会崩溃',
      '忘记 fclose 导致文件描述符泄漏和缓冲区数据丢失',
      '写模式"w"会清空原文件，读模式"r"要求文件必须存在'
    ],
    transferQuestion: '如果要在文件末尾追加内容而不是覆盖，应该用什么模式？（提示："a"）',
    miniExercise: {
      bugCode: 'FILE *fp = fopen("data.txt", "w");\nfprintf(fp, "Hello");\n// 忘记 fclose\n// 这样有什么问题？',
      hint: '缓冲区数据可能未写入磁盘，且文件描述符未释放'
    }
  }
};
