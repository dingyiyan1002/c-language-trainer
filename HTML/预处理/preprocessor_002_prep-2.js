window.LESSON_DATA = {
  meta: {
    chapterId: 'preprocessor',
    lessonId: 'preprocessor-2',
    title: '条件编译',
    index: 2,
    filename: 'preprocessor_002_prep-2.js',
    keyPoints: ['#ifdef/#ifndef', '#if/#elif/#else', '#endif', '条件编译应用']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 条件编译：根据条件编译不同代码' }] },
    { num: 2, tokens: [] },
    { num: 3, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'define' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'DEBUG' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 定义 DEBUG 宏，启用调试模式' }
    ]},
    { num: 4, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'define' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'VERSION' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 版本号' }
    ]},
    { num: 5, tokens: [] },
    { num: 6, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'ifdef' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'DEBUG' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 如果 DEBUG 已定义' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<stdio.h>' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 包含调试需要的头文件' }
    ]},
    { num: 10, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"[DEBUG] x = %d\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'punc', text: ');' }
    ]},
    { num: 11, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'endif' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 结束条件编译' }
    ]},
    { num: 12, tokens: [] },
    { num: 13, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'ifndef' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'RELEASE' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 如果 RELEASE 未定义' }
    ]},
    { num: 14, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'debugMode' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 默认启用调试模式' }
    ]},
    { num: 15, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'else' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 否则 (RELEASE 已定义)' }
    ]},
    { num: 16, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'debugMode' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 发布模式，关闭调试' }
    ]},
    { num: 17, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'endif' }
    ]},
    { num: 18, tokens: [] },
    { num: 19, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'if' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'VERSION' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 如果版本号 >= 2' }
    ]},
    { num: 20, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'feature' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"New Feature"' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 启用新功能' }
    ]},
    { num: 21, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'elif' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'VERSION' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '==' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 否则如果版本 == 1' }
    ]},
    { num: 22, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'feature' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"Basic Feature"' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 基础功能' }
    ]},
    { num: 23, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'else' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 其他情况' }
    ]},
    { num: 24, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'feature' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"Legacy"' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 旧版本' }
    ]},
    { num: 25, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'endif' }
    ]},
    { num: 26, tokens: [] },
    { num: 27, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'undef' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'DEBUG' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 取消定义 DEBUG' }
    ]},
    { num: 28, tokens: [] },
    { num: 29, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'DEBUG', name: '#define DEBUG', type: 'macro', addr: 'N/A', glowColor: 'rgba(168,85,247,0.35)', appearStep: 2, value: 'defined' },
    { key: 'VERSION', name: '#define VERSION', type: 'macro', addr: 'N/A', glowColor: 'rgba(168,85,247,0.35)', appearStep: 3, value: '2' },
    { key: 'x', name: 'x', type: 'int', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 5, value: '10' },
    { key: 'debug_print', name: 'printf 调试输出', type: 'code', addr: 'N/A', glowColor: 'rgba(34,197,94,0.35)', appearStep: 7, value: '[DEBUG] x = 10' },
    { key: 'RELEASE', name: 'RELEASE', type: 'undefined', addr: 'N/A', glowColor: 'rgba(239,68,68,0.35)', appearStep: 12, value: 'not defined' },
    { key: 'debugMode', name: 'debugMode', type: 'int', addr: '0x7ffd04', glowColor: 'rgba(59,130,246,0.35)', appearStep: 13, value: '1' },
    { key: 'feature', name: 'feature', type: 'char*', addr: '0x7ffd08', glowColor: 'rgba(249,115,22,0.35)', appearStep: 19, value: '"New Feature"' }
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
        detail: '程序即将开始运行，演示预处理器的条件编译功能'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：条件编译 - 根据条件编译不同代码',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示条件编译指令的使用方法'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [1],
      vars: { DEBUG: 'defined' },
      highlightVar: 'DEBUG',
      explanation: {
        icon: 'box',
        text: '#define DEBUG：定义调试宏',
        color: 'purple',
        actor: 'CPU',
        detail: '定义 DEBUG 宏 (无值)，用于标记调试模式。#ifdef DEBUG 将返回真'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 3],
      vars: { DEBUG: 'defined', VERSION: '2' },
      highlightVar: 'VERSION',
      explanation: {
        icon: 'box',
        text: '#define VERSION 2：定义版本号',
        color: 'purple',
        actor: 'CPU',
        detail: '定义 VERSION 宏为 2，可用于#if 条件判断，实现版本控制'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [1, 3, 4, 5],
      vars: { DEBUG: 'defined', VERSION: '2' },
      explanation: {
        icon: 'info',
        text: '阅读代码：定义变量 x',
        color: 'blue',
        actor: 'CPU',
        detail: 'x 是普通 int 变量，用于演示调试输出'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 3, 4, 5, 6],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10' },
      highlightVar: 'x',
      explanation: {
        icon: 'box',
        text: 'int x = 10：定义变量',
        color: 'green',
        actor: 'CPU',
        detail: 'x = 10，占用 4 字节内存 (0x7ffd00)'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 3, 4, 5, 6, 7],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10' },
      explanation: {
        icon: 'info',
        text: '阅读代码：#ifdef DEBUG 条件编译',
        color: 'blue',
        actor: 'CPU',
        detail: '#ifdef 检查 DEBUG 是否已定义。因为第 3 行定义了 DEBUG，条件为真'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 3, 4, 5, 6, 7, 8],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10' },
      highlightVar: 'debug_print',
      explanation: {
        icon: 'terminal',
        text: '条件为真：编译调试输出代码',
        color: 'green',
        actor: 'CPU',
        detail: '因为 DEBUG 已定义，#ifdef 块内代码被包含。printf 语句会被编译，输出调试信息'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 3, 4, 5, 6, 7, 8],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10' },
      explanation: {
        icon: 'info',
        text: '阅读代码：#include <stdio.h> 在条件块内',
        color: 'blue',
        actor: 'CPU',
        detail: '#include 也可以在条件编译块内，只有条件为真时才包含头文件'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 3, 4, 5, 6, 7, 8],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10' },
      explanation: {
        icon: 'check',
        text: '#endif：结束条件编译',
        color: 'blue',
        actor: 'CPU',
        detail: '#endif 标记#ifdef 块结束。条件编译块内的代码已被处理'
      }
    },
    {
      step: 10,
      line: 13,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10' },
      explanation: {
        icon: 'info',
        text: '阅读代码：#ifndef RELEASE 检查未定义',
        color: 'blue',
        actor: 'CPU',
        detail: '#ifndef 与#ifdef 相反：检查宏是否未定义。RELEASE 未定义，条件为真'
      }
    },
    {
      step: 11,
      line: 13,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined' },
      highlightVar: 'RELEASE',
      explanation: {
        icon: 'info',
        text: 'RELEASE 未定义',
        color: 'red',
        actor: 'CPU',
        detail: 'RELEASE 宏没有被定义，所以#ifndef RELEASE 条件为真'
      }
    },
    {
      step: 12,
      line: 13,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined', debugMode: '1' },
      highlightVar: 'debugMode',
      explanation: {
        icon: 'box',
        text: '#ifndef RELEASE 为真：debugMode = 1',
        color: 'cyan',
        actor: 'CPU',
        detail: '因为 RELEASE 未定义，#ifndef 块内代码被包含。debugMode = 1，表示调试模式启用'
      }
    },
    {
      step: 13,
      line: 15,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined', debugMode: '1' },
      explanation: {
        icon: 'info',
        text: '阅读代码：#else 分支 (跳过)',
        color: 'blue',
        actor: 'CPU',
        detail: '因为#ifndef 条件为真，#else 分支被跳过，不会编译'
      }
    },
    {
      step: 14,
      line: 17,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined', debugMode: '1' },
      explanation: {
        icon: 'check',
        text: '#endif：结束#ifndef 条件编译',
        color: 'blue',
        actor: 'CPU',
        detail: '#ifndef 块结束。最终 debugMode = 1，因为 RELEASE 未定义'
      }
    },
    {
      step: 15,
      line: 19,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined', debugMode: '1' },
      explanation: {
        icon: 'info',
        text: '阅读代码：#if VERSION >= 2 数值条件编译',
        color: 'blue',
        actor: 'CPU',
        detail: '#if 后跟表达式，根据表达式真假决定是否编译块内代码'
      }
    },
    {
      step: 16,
      line: 19,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined', debugMode: '1' },
      explanation: {
        icon: 'calculator',
        text: 'VERSION = 2，条件 2 >= 2 为真',
        color: 'blue',
        actor: 'CPU',
        detail: 'VERSION 被替换为 2，表达式 2 >= 2 为真，#if 块内代码被包含'
      }
    },
    {
      step: 17,
      line: 19,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined', debugMode: '1', feature: '"New Feature"' },
      highlightVar: 'feature',
      explanation: {
        icon: 'box',
        text: '#if 条件为真：feature = "New Feature"',
        color: 'orange',
        actor: 'CPU',
        detail: '因为 VERSION >= 2 为真，feature 被赋值为"New Feature"，启用新功能'
      }
    },
    {
      step: 18,
      line: 21,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined', debugMode: '1', feature: '"New Feature"' },
      explanation: {
        icon: 'info',
        text: '阅读代码：#elif VERSION == 1 (跳过)',
        color: 'blue',
        actor: 'CPU',
        detail: '#elif 是#else if 的缩写。因为#if 条件已为真，#elif 分支被跳过'
      }
    },
    {
      step: 19,
      line: 23,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined', debugMode: '1', feature: '"New Feature"' },
      explanation: {
        icon: 'info',
        text: '阅读代码：#else 分支 (跳过)',
        color: 'blue',
        actor: 'CPU',
        detail: '#else 分支只在#if 和#elif 都为假时才执行，这里被跳过'
      }
    },
    {
      step: 20,
      line: 25,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined', debugMode: '1', feature: '"New Feature"' },
      explanation: {
        icon: 'check',
        text: '#endif：结束#if 条件编译',
        color: 'blue',
        actor: 'CPU',
        detail: '#if-#elif-#else 结构结束。最终 feature = "New Feature"'
      }
    },
    {
      step: 21,
      line: 27,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 27],
      vars: { DEBUG: 'defined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined', debugMode: '1', feature: '"New Feature"' },
      explanation: {
        icon: 'info',
        text: '阅读代码：#undef DEBUG 取消定义',
        color: 'blue',
        actor: 'CPU',
        detail: '#undef 删除宏定义。之后的#ifdef DEBUG 将返回假'
      }
    },
    {
      step: 22,
      line: 27,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 27],
      vars: { DEBUG: 'undefined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined', debugMode: '1', feature: '"New Feature"' },
      highlightVar: 'DEBUG',
      explanation: {
        icon: 'delete',
        text: '#undef DEBUG：DEBUG 不再定义',
        color: 'red',
        actor: 'CPU',
        detail: 'DEBUG 宏被取消定义。如果后面有#ifdef DEBUG，条件将为假'
      }
    },
    {
      step: 23,
      line: 29,
      executedLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 27, 29],
      vars: { DEBUG: 'undefined', VERSION: '2', x: '10', debug_print: '[DEBUG] x = 10', RELEASE: 'not defined', debugMode: '1', feature: '"New Feature"' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键指令：1) #ifdef 已定义  2) #ifndef 未定义  3) #if 表达式  4) #elif 否则如果  5) #else 否则  6) #endif 结束  7) #undef 取消定义'
      }
    }
  ],

  summary: {
    oneLiner: '掌握条件编译指令的使用方法和应用场景',
    pitfalls: [
      '#ifdef MACRO：如果 MACRO 已定义，条件为真',
      '#ifndef MACRO：如果 MACRO 未定义，条件为真',
      '#if 表达式：根据表达式真假决定编译',
      '#elif：否则如果，用于多分支条件',
      '#else：否则分支',
      '#endif：结束条件编译',
      '#undef MACRO：取消宏定义'
    ],
    transferQuestion: '条件编译在什么场景下最有用？',
    miniExercise: {
      bugCode: '#ifdef DEBUG\n    printf("Debug\\n");\n#  // 错误！缺少#endif',
      hint: '修复：添加#endif 结束条件编译块'
    }
  },

  predictions: [
    {
      question: '#ifdef DEBUG 和#if DEBUG 有什么区别？',
      options: [
        { text: '没有区别', feedback: '错误！有重要区别。' },
        { text: '#ifdef 检查是否定义，#if 检查值是否非 0', feedback: '正确！#ifdef DEBUG 只检查是否定义，#if DEBUG 检查值是否非 0。' },
        { text: '#if 只能用于数值', feedback: '不完整。' },
        { text: '#ifdef 可以跟表达式', feedback: '错误！#ifdef 后只能跟宏名，不能是表达式。' }
      ],
      correctIndex: 1
    },
    {
      question: '#undef DEBUG 之后，#ifdef DEBUG 的结果是什么？',
      options: [
        { text: '真', feedback: '错误！#undef 取消了定义。' },
        { text: '假', feedback: '正确！#undef 删除宏定义，#ifdef 返回假。' },
        { text: '编译错误', feedback: '错误！#undef 未定义的宏是合法的。' },
        { text: '不确定', feedback: '错误！结果确定是假。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '#if 和#ifdef 是一回事',
      truth: '#ifdef MACRO 只检查 MACRO 是否定义；#if MACRO 检查 MACRO 的值是否非 0。如果#define X 0，则#ifdef X 为真，但#if X 为假。'
    },
    {
      myth: '条件编译影响运行时性能',
      truth: '条件编译在预处理阶段完成，编译后的代码只包含满足条件的分支，不影响运行时性能。这是编译时决策！'
    },
    {
      myth: '#undef 可以让宏恢复到未定义前的状态',
      truth: '#undef 永久删除宏定义。之后如需使用该宏，必须重新#define。#undef 不是"注释掉"定义。'
    },
    {
      myth: '条件编译可以嵌套无限层',
      truth: '条件编译可以嵌套，但过深的嵌套降低可读性。建议不超过 2-3 层嵌套。复杂逻辑应拆分为多个文件。'
    }
  ]
};
