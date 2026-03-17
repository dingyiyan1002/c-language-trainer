window.LESSON_DATA = {
  meta: {
    chapterId: 'pointers',
    lessonId: 'ptr-3',
    title: '悬空指针 - free 后继续使用',
    index: 3,
    filename: 'pointers_003_ptr-3.js',
    keyPoints: ['悬空指针概念', 'malloc/free 配对', 'use-after-free 错误', '安全置空模式']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 悬空指针：free 后未置 NULL' }] },
    { num: 2, tokens: [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '<' },
      { type: 'id', text: 'stdlib.h' },
      { type: 'punc', text: '>' }
    ]},
    { num: 3, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'malloc' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 4, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"分配成功：p=%p\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 5, tokens: [] },
    { num: 6, tokens: [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"写入数据：*p = 42\\n"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 7, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '42' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '              ' },
      { type: 'cmt', text: '// 正常写入' }
    ]},
    { num: 8, tokens: [] },
    { num: 9, tokens: [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"释放内存：free(p)\\n"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 10, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'free' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '                 ' },
      { type: 'cmt', text: '// 释放堆内存' }
    ]},
    { num: 11, tokens: [] },
    { num: 12, tokens: [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"危险！使用悬空指针\\n"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 13, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '100' },
      { type: 'punc', text: ';' },
      { type: 'ws', text ' ' },
      { type: 'cmt', text: '// 悬空指针解引用！' }
    ]},
    { num: 14, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"读取值：%d\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 15, tokens: [] },
    { num: 16, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'p', name: 'p', type: 'int*', addr: '0x7ffc30', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1 },
    { key: 'heap', name: 'heap', type: 'int*', addr: '0x1000', glowColor: 'rgba(168,85,247,0.35)', appearStep: 2, value: 'NULL' }
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
        detail: '程序即将开始运行，演示悬空指针错误'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { p: 'NULL' },
      explanation: {
        icon: 'info',
        text: '阅读注释：悬空指针 - free 后未置 NULL',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示 use-after-free 错误'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [1, 2],
      vars: { p: '0x1000', heap: '已分配' },
      highlightVar: 'p',
      explanation: {
        icon: 'memory',
        text: 'malloc 分配堆内存，p 指向 0x1000',
        color: 'green',
        actor: 'Heap',
        detail: 'CALL malloc(4) 在堆上分配 4 字节，返回地址 0x1000，p 保存这个地址'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 2, 3],
      vars: { p: '0x1000', heap: '42' },
      explanation: {
        icon: 'terminal',
        text: 'printf 输出 p 的地址',
        color: 'blue',
        actor: 'CPU',
        detail: 'PUSH p 的值 0x1000 到栈，CALL printf，格式化输出地址'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [1, 2, 3, 4],
      vars: { p: '0x1000', heap: '42' },
      explanation: {
        icon: 'info',
        text: '阅读注释：写入数据',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码'
      }
    },
    {
      step: 5,
      line: 7,
      executedLines: [1, 2, 3, 4, 6],
      vars: { p: '0x1000', heap: '42' },
      highlightVar: 'heap',
      explanation: {
        icon: 'memory',
        text: '*p = 42，向堆内存写入 42',
        color: 'purple',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 42 写入 p 指向的地址 0x1000，堆内存现在存储值 42'
      }
    },
    {
      step: 6,
      line: 9,
      executedLines: [1, 2, 3, 4, 6, 7],
      vars: { p: '0x1000', heap: '42' },
      explanation: {
        icon: 'info',
        text: '阅读注释：释放内存',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将释放堆内存'
      }
    },
    {
      step: 7,
      line: 10,
      executedLines: [1, 2, 3, 4, 6, 7, 9],
      vars: { p: '0x1000', heap: '已释放' },
      highlightVar: 'p',
      explanation: {
        icon: 'alert',
        text: 'free(p) 释放堆内存，但 p 仍指向 0x1000',
        color: 'red',
        actor: 'Heap',
        detail: 'CALL free(0x1000) 将内存块标记为空闲并返回给堆管理器，但 p 的值未改变，成为悬空指针'
      }
    },
    {
      step: 8,
      line: 12,
      executedLines: [1, 2, 3, 4, 6, 7, 9, 10],
      vars: { p: '0x1000', heap: '已释放' },
      explanation: {
        icon: 'info',
        text: '阅读注释：危险！使用悬空指针',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，警告即将发生 use-after-free'
      }
    },
    {
      step: 9,
      line: 13,
      executedLines: [1, 2, 3, 4, 6, 7, 9, 10, 12],
      vars: { p: '0x1000', heap: '100?' },
      highlightVar: 'p',
      isDanger: true,
      explanation: {
        icon: 'skull',
        text: '*p = 100：悬空指针解引用！未定义行为',
        color: 'red',
        actor: 'CPU',
        detail: '危险！0x1000 已被释放，写入 100 可能：1) 成功但破坏其他数据 2) 被堆管理器检测到导致崩溃 3) 被新分配覆盖'
      }
    },
    {
      step: 10,
      line: 14,
      executedLines: [1, 2, 3, 4, 6, 7, 9, 10, 12, 13],
      vars: { p: '0x1000', heap: '100' },
      explanation: {
        icon: 'terminal',
        text: 'printf 读取*p 的值',
        color: 'orange',
        actor: 'CPU',
        detail: '从 0x1000 读取值，可能是 100 也可能是垃圾值，行为完全未定义'
      }
    },
    {
      step: 11,
      line: 16,
      executedLines: [1, 2, 3, 4, 6, 7, 9, 10, 12, 13, 14],
      vars: { p: '0x1000', heap: '100' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回，程序结束。悬空指针问题可能导致后续 malloc 返回相同地址时数据被意外覆盖'
      }
    }
  ],

  summary: {
    oneLiner: '掌握悬空指针的形成机制和安全编码模式',
    pitfalls: [
      'free 后忘记将指针置为 NULL，导致悬空指针',
      'use-after-free 是未定义行为，可能崩溃或破坏数据',
      '堆内存释放后可能被重新分配给其他用途'
    ],
    transferQuestion: '为什么 free(p) 之后要立即写 p = NULL？这能解决什么问题？',
    miniExercise: {
      bugCode: 'free(p); *p = 100;',
      hint: 'free 后 p 仍然是有效指针值，但指向的内存已归还给堆管理器'
    }
  }
};
