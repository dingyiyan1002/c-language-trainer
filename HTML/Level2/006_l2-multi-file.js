window.LESSON_DATA = {
  meta: {
    id: 'l2-multi-file',
    title: '多文件编程',
    chapter: 'Level2',
    index: 6,
    filename: 'multi_file.c',
    keyPoints: ['头文件', 'extern', '模块化']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '/* math_utils.h - 头文件：声明 */' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#ifndef' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'MATH_UTILS_H' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'MATH_UTILS_H' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'add' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'a' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'multiply' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'a' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 8, tokens: [{ type: 'pp', text: '#endif' }] },
    { num: 9, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 10, tokens: [{ type: 'cmt', text: '/* main.c - 源文件：使用 */' }] },
    { num: 11, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 12, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"math_utils.h"' }] },
    { num: 13, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 14, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'add' }, { type: 'punc', text: '(' }, { type: 'num', text: '10' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '20' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'product' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'multiply' }, { type: 'punc', text: '(' }, { type: 'num', text: '10' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '20' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Sum: %d, Product: %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sum' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'product' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'sum', name: 'sum', type: 'int', addr: '0x7fff10', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'product', name: 'product', type: 'int', addr: '0x7fff14', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习多文件编程与模块化开发', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'folder',
        text: '头文件 math_utils.h：函数声明，接口定义',
        color: 'blue',
        actor: 'Developer',
        detail: '头文件（.h）包含函数声明、宏定义、类型定义。实现"接口与实现分离"，让多个源文件共享同一接口。'
      },
      prediction: {
        question: '头文件的主要作用是什么？',
        options: ['存放函数实现', '声明接口供其他文件使用', '存储全局变量'],
        answer: 1
      },
      misconception: null,
      actor: 'Developer',
      target: 'file:math_utils.h',
      timing: 'design-time'
    },
    {
      step: 2,
      line: 2,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'lock',
        text: '#ifndef 防止头文件重复包含（include guard）',
        color: 'blue',
        actor: 'Compiler',
        detail: '条件编译指令：如果 MATH_UTILS_H 未定义则定义它并编译内容。避免多次#include 导致重复定义错误。'
      },
      prediction: null,
      misconception: {
        title: '为什么需要 include guard',
        text: '如果 a.h 和 b.h 都包含 common.h，当 main.c 同时包含 a.h 和 b.h 时，common.h 会被处理两次。include guard 确保只处理一次。'
      },
      actor: 'Compiler',
      target: 'preprocessor',
      timing: 'compile-time'
    },
    {
      step: 3,
      line: 5,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '函数声明：int add(int a, int b);',
        color: 'blue',
        actor: 'Compiler',
        detail: '声明告诉编译器：add 函数存在，返回 int，接受两个 int 参数。编译器据此进行类型检查。实现在另一个文件（math_utils.c）中。'
      },
      prediction: null,
      misconception: null,
      actor: 'Compiler',
      target: 'decl:add',
      timing: 'compile-time'
    },
    {
      step: 4,
      line: 10,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'folder',
        text: 'main.c 源文件：实现具体逻辑，使用头文件声明的函数',
        color: 'blue',
        actor: 'Developer',
        detail: '源文件（.c）包含具体实现。通过#include 引入头文件，获得函数声明，从而可以调用这些函数。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'file:main.c',
      timing: 'design-time'
    },
    {
      step: 5,
      line: 11,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '#include <stdio.h> 引入标准库头文件',
        color: 'blue',
        actor: 'Preprocessor',
        detail: '预处理器将 stdio.h 内容插入此处。< > 表示在系统目录搜索头文件。stdio.h 包含 printf 等函数声明。'
      },
      prediction: null,
      misconception: null,
      actor: 'Preprocessor',
      target: 'preprocessor',
      timing: 'preprocess'
    },
    {
      step: 6,
      line: 12,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: '#include "math_utils.h" 引入自定义头文件',
        color: 'blue',
        actor: 'Preprocessor',
        detail: '" " 表示先在当前目录搜索。预处理器将 math_utils.h 内容插入此处，main.c 从而"看到"add 和 multiply 的声明。'
      },
      prediction: null,
      misconception: {
        title: '< > 与" "的区别',
        text: '<stdio.h> 在系统目录搜索（编译器安装目录、系统 include 路径）。"math_utils.h" 先搜索当前目录，再搜索系统目录。'
      },
      actor: 'Preprocessor',
      target: 'preprocessor',
      timing: 'preprocess'
    },
    {
      step: 7,
      line: 15,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      vars: { sum: 30 },
      highlightVar: 'sum',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: '调用 add(10, 20)，sum = 30',
        color: 'green',
        actor: 'CPU',
        detail: '编译器已在编译时检查 add 函数签名正确。链接器在链接阶段将 add 调用解析到 math_utils.c 中的实际实现。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:sum',
      timing: 'main-loop'
    },
    {
      step: 8,
      line: 16,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { sum: 30, product: 200 },
      highlightVar: 'product',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: '调用 multiply(10, 20)，product = 200',
        color: 'purple',
        actor: 'CPU',
        detail: '同样的，multiply 调用在链接阶段被解析到 math_utils.c 的实现。模块化让代码可复用、易维护。'
      },
      prediction: {
        question: '链接器的作用是什么？',
        options: ['编译源代码', '将多个目标文件合并，解析符号引用', '运行程序'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:product',
      timing: 'main-loop'
    },
    {
      step: 9,
      line: 17,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      vars: { sum: 30, product: 200 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Sum: 30, Product: 200' }],
      explanation: {
        icon: 'terminal',
        text: '输出结果：Sum: 30, Product: 200',
        color: 'green',
        actor: 'CPU',
        detail: 'printf 输出两个变量的值。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 10,
      line: 18,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      vars: { sum: 30, product: 200 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Sum: 30, Product: 200' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，多文件编译：gcc main.c math_utils.c -o app',
        color: 'green',
        actor: 'CPU',
        detail: '多文件项目编译流程：1) 预处理（#include 展开）2) 编译各.c 为目标文件（.o）3) 链接所有.o 和库文件 4) 生成可执行文件。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: '头文件声明接口，源文件实现功能，extern 实现跨文件共享',
    pitfalls: [
      '头文件必须有 include guard（#ifndef/#define/#endif），防止重复包含',
      'extern 声明全局变量但不分配空间，定义才能在多个文件间共享',
      '循环包含（a.h 包含 b.h，b.h 又包含 a.h）会导致编译错误'
    ],
    transferQuestion: '如果多个文件需要共享一个全局变量 g_count，应该如何正确声明和使用？（提示：extern）',
    miniExercise: {
      bugCode: '// file1.c\nint g_count = 0;\n\n// file2.c\nint g_count = 0;  // 这样写有什么问题？',
      hint: '同一全局变量不能在多个文件中定义，应使用 extern 声明'
    }
  }
};
