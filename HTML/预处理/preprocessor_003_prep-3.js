window.LESSON_DATA = {
  meta: {
    chapterId: 'preprocessor',
    lessonId: 'preprocessor-3',
    title: '头文件与宏高级技巧',
    index: 3,
    filename: 'preprocessor_003_prep-3.js',
    keyPoints: ['#include 指令', '头文件保护', '#运算符', '## 连接符', '#pragma 指令']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 预处理器高级：头文件与宏技巧' }] },
    { num: 2, tokens: [] },
    { num: 3, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<stdio.h>' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 包含标准库头文件' }
    ]},
    { num: 4, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"myheader.h"' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 包含用户自定义头文件' }
    ]},
    { num: 5, tokens: [] },
    { num: 6, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'define' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'STRINGIFY' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'x' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '#' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// #运算符：字符串化' }
    ]},
    { num: 7, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 将宏参数转换为字符串字面量' }
    ]},
    { num: 8, tokens: [] },
    { num: 9, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'define' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'CONCAT' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: '##' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// ## 运算符：标记连接' }
    ]},
    { num: 10, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 将两个标记拼接成一个新标记' }
    ]},
    { num: 11, tokens: [] },
    { num: 12, tokens: [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'str1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'STRINGIFY' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'hello' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 展开为："hello"' }
    ]},
    { num: 13, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'var' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'CONCAT' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'test' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Var' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '42' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 展开为：testVar = 42' }
    ]},
    { num: 14, tokens: [] },
    { num: 15, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'define' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'MY_VAR' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'name' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'CONCAT' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'name' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: '_' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]},
    { num: 16, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 组合使用：生成变量声明' }
    ]},
    { num: 17, tokens: [] },
    { num: 18, tokens: [
      { type: 'id', text: 'MY_VAR' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'counter' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 展开为：int counter_ = 0;' }
    ]},
    { num: 19, tokens: [] },
    { num: 20, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'pragma' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'once' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 头文件只包含一次' }
    ]},
    { num: 21, tokens: [
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 等价于传统的 #ifndef/#define/#endif 保护' }
    ]},
    { num: 22, tokens: [] },
    { num: 23, tokens: [
      { type: 'punc', text: '#' },
      { type: 'kw', text: 'pragma' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'GCC' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'optimize' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"O3"' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 编译器特定指令' }
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
    { key: 'stdio', name: '#include <stdio.h>', type: 'header', addr: 'N/A', glowColor: 'rgba(168,85,247,0.35)', appearStep: 2, value: '标准输入输出库' },
    { key: 'myheader', name: '#include "myheader.h"', type: 'header', addr: 'N/A', glowColor: 'rgba(59,130,246,0.35)', appearStep: 3, value: '用户头文件' },
    { key: 'STRINGIFY', name: '#define STRINGIFY(x)', type: 'macro', addr: 'N/A', glowColor: 'rgba(249,115,22,0.35)', appearStep: 5, value: '#x (字符串化)' },
    { key: 'CONCAT', name: '#define CONCAT(a,b)', type: 'macro', addr: 'N/A', glowColor: 'rgba(249,115,22,0.35)', appearStep: 8, value: 'a##b (标记连接)' },
    { key: 'str1', name: 'str1', type: 'char*', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 11, value: '"hello"' },
    { key: 'testVar', name: 'testVar', type: 'int', addr: '0x7ffd04', glowColor: 'rgba(168,85,247,0.35)', appearStep: 12, value: '42' },
    { key: 'counter_', name: 'counter_', type: 'int', addr: '0x7ffd08', glowColor: 'rgba(59,130,246,0.35)', appearStep: 17, value: '0' },
    { key: 'pragma_once', name: '#pragma once', type: 'directive', addr: 'N/A', glowColor: 'rgba(250,204,21,0.35)', appearStep: 19, value: '头文件只包含一次' },
    { key: 'pragma_opt', name: '#pragma GCC optimize("O3")', type: 'directive', addr: 'N/A', glowColor: 'rgba(239,68,68,0.35)', appearStep: 22, value: '编译器优化级别' }
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
        detail: '程序即将开始运行，演示预处理器高级功能：头文件包含、宏高级技巧和 pragma 指令'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：预处理器高级 - 头文件与宏技巧',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示头文件包含机制和宏高级用法'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [1],
      vars: { stdio: '标准输入输出库' },
      highlightVar: 'stdio',
      explanation: {
        icon: 'book',
        text: '#include <stdio.h>：包含标准库头文件',
        color: 'purple',
        actor: 'CPU',
        detail: '#include 将头文件内容复制到当前文件。<>表示在系统目录查找，包含标准输入输出函数声明'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 3],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件' },
      highlightVar: 'myheader',
      explanation: {
        icon: 'book',
        text: '#include "myheader.h"：包含用户头文件',
        color: 'cyan',
        actor: 'CPU',
        detail: '""表示先在当前目录查找，然后在系统目录查找。用于包含用户自定义头文件'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [1, 3, 4, 5],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件' },
      explanation: {
        icon: 'info',
        text: '阅读代码：#define STRINGIFY(x) #x',
        color: 'blue',
        actor: 'CPU',
        detail: '#运算符是字符串化运算符，将宏参数转换为字符串字面量'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 3, 4, 5, 6],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)' },
      highlightVar: 'STRINGIFY',
      explanation: {
        icon: 'box',
        text: '#define STRINGIFY(x) #x：字符串化宏',
        color: 'orange',
        actor: 'CPU',
        detail: '#x 将参数 x 转换为字符串。STRINGIFY(hello) 展开为"hello"，用于调试宏、生成字符串等场景'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 3, 4, 5, 6],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：将宏参数转换为字符串字面量',
        color: 'blue',
        actor: 'CPU',
        detail: '#运算符在预处理阶段工作，是纯文本转换。常用于日志宏、调试输出等'
      }
    },
    {
      step: 7,
      line: 9,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：#define CONCAT(a,b) a##b',
        color: 'blue',
        actor: 'CPU',
        detail: '## 是标记连接运算符，将两个标记拼接成一个新的标记'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)' },
      highlightVar: 'CONCAT',
      explanation: {
        icon: 'box',
        text: '#define CONCAT(a,b) a##b：标记连接宏',
        color: 'orange',
        actor: 'CPU',
        detail: 'a##b 将 a 和 b 拼接成新标记。CONCAT(test, Var) 展开为 testVar。用于生成唯一标识符、避免命名冲突'
      }
    },
    {
      step: 9,
      line: 10,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：将两个标记拼接成一个新标记',
        color: 'blue',
        actor: 'CPU',
        detail: '## 连接在预处理阶段完成，生成的是标记 (token)，不是字符串'
      }
    },
    {
      step: 10,
      line: 12,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)' },
      explanation: {
        icon: 'info',
        text: '阅读代码：使用 STRINGIFY 宏',
        color: 'blue',
        actor: 'CPU',
        detail: 'STRINGIFY(hello) 将 hello 转换为字符串"hello"'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"' },
      highlightVar: 'str1',
      explanation: {
        icon: 'box',
        text: 'str1 = STRINGIFY(hello) = "hello"',
        color: 'green',
        actor: 'CPU',
        detail: '预处理展开：STRINGIFY(hello) → #hello → "hello"。str1 指向字符串字面量"hello"'
      }
    },
    {
      step: 12,
      line: 13,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"' },
      explanation: {
        icon: 'info',
        text: '阅读代码：使用 CONCAT 宏',
        color: 'blue',
        actor: 'CPU',
        detail: 'CONCAT(test, Var) 将 test 和 Var 拼接成 testVar'
      }
    },
    {
      step: 13,
      line: 13,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"', testVar: '42' },
      highlightVar: 'testVar',
      explanation: {
        icon: 'box',
        text: 'testVar = CONCAT(test,Var) = 42',
        color: 'purple',
        actor: 'CPU',
        detail: '预处理展开：CONCAT(test, Var) → test##Var → testVar。testVar = 42，变量成功创建并赋值'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"', testVar: '42' },
      explanation: {
        icon: 'info',
        text: '阅读代码：组合宏 MY_VAR(name)',
        color: 'blue',
        actor: 'CPU',
        detail: 'MY_VAR 宏组合使用 STRINGIFY 和 CONCAT，生成变量声明'
      }
    },
    {
      step: 15,
      line: 16,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"', testVar: '42' },
      explanation: {
        icon: 'info',
        text: '阅读注释：组合使用 - 生成变量声明',
        color: 'blue',
        actor: 'CPU',
        detail: '宏组合是高级技巧，可以自动生成代码，减少重复劳动'
      }
    },
    {
      step: 16,
      line: 18,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"', testVar: '42' },
      explanation: {
        icon: 'info',
        text: '阅读代码：MY_VAR(counter) 调用',
        color: 'blue',
        actor: 'CPU',
        detail: 'MY_VAR(counter) 将展开为 int counter_ = 0;'
      }
    },
    {
      step: 17,
      line: 18,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"', testVar: '42', counter_: '0' },
      highlightVar: 'counter_',
      explanation: {
        icon: 'box',
        text: 'counter_ = 0：宏生成变量',
        color: 'cyan',
        actor: 'CPU',
        detail: '展开过程：MY_VAR(counter) → int CONCAT(counter,_) = 0 → int counter_ = 0;。counter_ 占用 4 字节 (0x7ffd08)'
      }
    },
    {
      step: 18,
      line: 20,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 20],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"', testVar: '42', counter_: '0' },
      explanation: {
        icon: 'info',
        text: '阅读代码：#pragma once 指令',
        color: 'blue',
        actor: 'CPU',
        detail: '#pragma 是编译器特定指令。#pragma once 表示头文件只被包含一次'
      }
    },
    {
      step: 19,
      line: 20,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 20],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"', testVar: '42', counter_: '0', pragma_once: '头文件只包含一次' },
      highlightVar: 'pragma_once',
      explanation: {
        icon: 'shield',
        text: '#pragma once：头文件保护',
        color: 'yellow',
        actor: 'CPU',
        detail: '#pragma once 是现代化的头文件保护方式，比传统的#ifndef/#define/#endif 更简洁。编译器确保头文件只被包含一次，避免重复定义'
      }
    },
    {
      step: 20,
      line: 21,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 20],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"', testVar: '42', counter_: '0', pragma_once: '头文件只包含一次' },
      explanation: {
        icon: 'info',
        text: '阅读注释：等价于传统 #ifndef 保护',
        color: 'blue',
        actor: 'CPU',
        detail: '传统方式：#ifndef HEADER_H / #define HEADER_H / ... / #endif。#pragma once 更简洁，但不是所有编译器都支持'
      }
    },
    {
      step: 21,
      line: 23,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 20, 21, 23],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"', testVar: '42', counter_: '0', pragma_once: '头文件只包含一次' },
      explanation: {
        icon: 'info',
        text: '阅读代码：#pragma GCC optimize("O3")',
        color: 'blue',
        actor: 'CPU',
        detail: '#pragma 可以传递编译器特定指令。GCC optimize 设置优化级别'
      }
    },
    {
      step: 22,
      line: 23,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 20, 21, 23],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"', testVar: '42', counter_: '0', pragma_once: '头文件只包含一次', pragma_opt: '编译器优化级别' },
      highlightVar: 'pragma_opt',
      explanation: {
        icon: 'zap',
        text: '#pragma GCC optimize("O3")：编译器优化',
        color: 'red',
        actor: 'CPU',
        detail: '#pragma GCC optimize 是 GCC 编译器特定指令。O3 表示最高级别优化，其他选项：O0(无优化), O1, O2, Os(体积优化)。#pragma 不是标准 C，不同编译器语法可能不同'
      }
    },
    {
      step: 23,
      line: 25,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 20, 21, 23, 25],
      vars: { stdio: '标准输入输出库', myheader: '用户头文件', STRINGIFY: '#x (字符串化)', CONCAT: 'a##b (标记连接)', str1: '"hello"', testVar: '42', counter_: '0', pragma_once: '头文件只包含一次', pragma_opt: '编译器优化级别' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键知识点：1) #include <>系统头文件  2) #include ""用户头文件  3) #x 字符串化  4) ## 标记连接  5) #pragma once 头文件保护  6) #pragma 编译器指令'
      }
    }
  ],

  summary: {
    oneLiner: '掌握头文件包含、宏高级技巧和 pragma 指令',
    pitfalls: [
      '#include <file>：在系统目录查找头文件',
      '#include "file"：先当前目录，再系统目录查找',
      '#x：字符串化运算符，将宏参数转为字符串',
      '##：标记连接运算符，拼接两个标记',
      '#pragma once：现代头文件保护方式',
      '#pragma：编译器特定指令，非标准 C'
    ],
    transferQuestion: '#运算符和##运算符的区别是什么？',
    miniExercise: {
      bugCode: '#define MKSTR(x) #x\\n#define CAT(a,b) a##b\\nchar* s = MKSTR(CAT(1,2));  // 结果是？',
      hint: 'CAT(1,2) 先展开为 12，然后 MKSTR(12) 展开为"12"'
    }
  },

  predictions: [
    {
      question: 'STRINGIFY(123) 展开后是什么？',
      options: [
        { text: '123', feedback: '错误！#运算符会添加引号。' },
        { text: '"123"', feedback: '正确！#x 将参数转换为字符串字面量。' },
        { text: "'123'", feedback: '错误！字符串用双引号，不是单引号。' },
        { text: '编译错误', feedback: '错误！这是合法的宏用法。' }
      ],
      correctIndex: 1
    },
    {
      question: 'CONCAT(var, _num) 展开后是什么？',
      options: [
        { text: 'var_num', feedback: '正确！## 将两个标记拼接成 var_num。' },
        { text: '"var_num"', feedback: '错误！## 生成标记，不是字符串。' },
        { text: 'var, _num', feedback: '错误！## 会删除逗号并拼接。' },
        { text: '编译错误', feedback: '错误！这是合法的宏连接。' }
      ],
      correctIndex: 0
    }
  ],

  misconceptions: [
    {
      myth: '#include 是编译时的行为',
      truth: '#include 是预处理阶段的文本包含。头文件内容被完整复制到#include 位置，然后才进行编译。这就是为什么头文件错误会导致多处报错。'
    },
    {
      myth: '#运算符可以字符串化任何内容',
      truth: '#只能字符串化宏参数，不能字符串化宏展开结果。如#define X 123，STRINGIFY(X) 得到"X"不是"123"。需要两层宏才能实现宏展开后字符串化。'
    },
    {
      myth: '## 连接可以连接任意字符串',
      truth: '## 连接的结果必须是有效的 C 语言标记 (token)。CONCAT(1,2) 得到 12(数值标记)，CONCAT(var,name) 得到 varname(标识符)，但 CONCAT(1a,2b) 会得到无效的 1a2b，导致编译错误。'
    },
    {
      myth: '#pragma 是标准 C，所有编译器通用',
      truth: '#pragma 是编译器特定扩展，不同编译器语法不同。#pragma once 被大多数现代编译器支持，但不是 C 标准。#pragma GCC optimize 只适用于 GCC，MSVC 有不同语法。可移植代码应谨慎使用#pragma。'
    }
  ]
};

</content>