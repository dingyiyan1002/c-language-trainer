window.LESSON_DATA = {
  meta: {
    id: 'basics-1',
    title: 'C 语言程序结构',
    chapter: 'Basics',
    index: 1,
    filename: 'hello_world.c',
    keyPoints: ['程序结构', 'main 函数', '头文件']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }] },
    { num: 4, tokens: [{ type: 'punc', text: '{' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Hello, World!"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'main', name: 'main', type: 'int main(void)', addr: '0x401000', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'printf', name: 'printf', type: 'library function', addr: '0xLibc001', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'return', name: 'return', type: 'keyword', addr: 'N/A', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习 C 语言程序结构', color: 'blue', actor: null, detail: null },
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
      highlightVar: 'main',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'include',
        text: '#include <stdio.h> — 引入标准输入输出头文件',
        color: 'yellow',
        actor: 'Preprocessor',
        detail: '#include 是预处理指令，告诉编译器在编译前插入 stdio.h 文件的内容。stdio.h 包含 printf、scanf 等输入输出函数的声明。尖括号<>表示从系统目录查找头文件。'
      },
      prediction: {
        question: '#include <stdio.h> 的作用是什么？',
        options: ['定义 printf 函数', '声明 printf 等输入输出函数', '编译程序'],
        answer: 1
      },
      misconception: null,
      actor: 'Preprocessor',
      target: 'directive:include',
      timing: 'compile-time'
    },
    {
      step: 2,
      line: 3,
      executedLines: [1],
      vars: {},
      highlightVar: 'main',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'function',
        text: 'int main() — 程序入口函数',
        color: 'green',
        actor: 'Linker',
        detail: 'main() 是 C 程序的入口点。程序从这里开始执行。int 表示返回值类型，返回值传递给操作系统。每个 C 程序必须有且只有一个 main 函数。'
      },
      prediction: {
        question: '一个 C 程序可以有多个 main 函数吗？',
        options: ['可以', '不可以，必须有且只有一个', '可以有零个'],
        answer: 1
      },
      misconception: {
        title: 'main 函数规则',
        text: 'main 函数是程序的唯一入口。签名可以是 int main(void) 或 int main(int argc, char** argv)。返回值 0 表示成功，非 0 表示错误。'
      },
      actor: 'Linker',
      target: 'func:main',
      timing: 'link-time'
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 2, 3],
      vars: {},
      highlightVar: 'main',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'brace',
        text: '{ — 函数体开始',
        color: 'blue',
        actor: 'Compiler',
        detail: '花括号{}定义函数体的开始和结束。函数内的所有语句必须放在花括号内。C 语言使用花括号组织代码块（block）。'
      },
      prediction: null,
      misconception: null,
      actor: 'Compiler',
      target: 'syntax',
      timing: 'compile-time'
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3, 4],
      vars: {},
      highlightVar: 'printf',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'output',
        text: 'printf("Hello, World!") — 输出字符串到屏幕',
        color: 'purple',
        actor: 'CPU',
        detail: 'printf 是标准库函数，用于格式化输出。参数"Hello, World!"是字符串字面量。printf 将字符串发送到标准输出（通常是屏幕）。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'runtime'
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 4, 5],
      vars: {},
      highlightVar: 'return',
      isDanger: false,
      output: [{ type: 'success', text: 'Hello, World!' }],
      explanation: {
        icon: 'return',
        text: 'return 0 — 返回 0 表示程序正常结束',
        color: 'blue',
        actor: 'CPU',
        detail: 'return 语句结束函数执行并返回值给调用者。main 返回 0 给操作系统表示成功。非 0 值（如 1、-1）通常表示错误。这是 Unix/Linux 的惯例。'
      },
      prediction: {
        question: 'return 0 表示什么？',
        options: ['程序出错', '程序正常结束', '没有特殊含义'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'return',
      timing: 'runtime'
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Hello, World!' }],
      explanation: {
        icon: 'check',
        text: 'C 程序结构：#include → main() → {语句} → return',
        color: 'green',
        actor: 'Teacher',
        detail: 'C 程序基本结构：1) #include 引入头文件 2) main() 入口函数 3) 花括号内的语句 4) return 返回值。每条语句以分号;结尾。'
      },
      prediction: null,
      misconception: null,
      actor: 'Teacher',
      target: 'exit',
      timing: 'runtime'
    }
  ],
  summary: {
    oneLiner: 'C 程序结构：#include 引入头文件 + main() 入口 + 花括号语句块 + return 返回值',
    pitfalls: [
      '#include <stdio.h> 使用尖括号<>从系统目录查找，双引号""从当前目录查找',
      'main 函数是程序唯一入口，必须有且只有一个',
      '每条语句必须以分号;结尾，遗漏分号是常见错误',
      'return 0 表示程序正常结束，非 0 值表示错误'
    ],
    transferQuestion: '如何让 main 函数接收命令行参数？（提示：int main(int argc, char** argv)）',
    miniExercise: {
      bugCode: '#include <stdio.h>\n\nint main() {\n    printf("Hello")\n    return 0;\n}',
      hint: 'printf("Hello") 后面缺少分号;，正确写法：printf("Hello");'
    }
  }
};
