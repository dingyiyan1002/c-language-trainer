window.LESSON_DATA = {
  "meta": {
    "chapterId": "debug",
    "lessonId": "debug-1",
    "title": "GDB 调试基础",
    "index": 1,
    "filename": "debug_001_debug-1.js",
    "keyPoints": [
      "断点",
      "单步执行",
      "查看变量",
      "调用栈"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "int factorial(int n) {",
    "    if (n <= 1) return 1;",
    "    return n * factorial(n - 1);",
    "}",
    "int main() {",
    "    printf(\"factorial(5) = %d\\n\", factorial(5));",
    "    // GDB 命令:",
    "    // gdb ./program",
    "    // (gdb) break main",
    "    // (gdb) run",
    "    // (gdb) next",
    "    // (gdb) print n",
    "    // (gdb) backtrace",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：GDB 调试基础",
        "detail": "GDB 是 Linux 下标准调试工具。",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    },
    {
      "line": 0,
      "vars": [],
      "explanation": {
        "text": "执行第1行",
        "detail": "#include <stdio.h>",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 1,
      "vars": [],
      "explanation": {
        "text": "执行第2行",
        "detail": "int factorial(int n) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 2,
      "vars": [],
      "explanation": {
        "text": "执行第3行",
        "detail": "if (n <= 1) return 1;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 3,
      "vars": [],
      "explanation": {
        "text": "执行第4行",
        "detail": "return n * factorial(n - 1);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 4,
      "vars": [],
      "explanation": {
        "text": "执行第5行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 5,
      "vars": [],
      "explanation": {
        "text": "执行第6行",
        "detail": "int main() {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 6,
      "vars": [],
      "explanation": {
        "text": "执行第7行",
        "detail": "printf(\"factorial(5) = %d\\n\", factorial(5));",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 14,
      "vars": [],
      "explanation": {
        "text": "执行第15行",
        "detail": "return 0;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 15,
      "vars": [],
      "explanation": {
        "text": "执行第16行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习GDB 调试基础",
    "pitfalls": [
      "断点",
      "单步执行",
      "查看变量"
    ],
    "transferQuestion": "如何高效调试 C 程序？",
    "miniExercise": "用 GDB 调试一个简单程序"
  }
};
