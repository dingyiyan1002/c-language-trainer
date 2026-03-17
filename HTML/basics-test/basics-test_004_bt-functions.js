window.LESSON_DATA = {
  "meta": {
    "chapterId": "basics-test",
    "lessonId": "bt-functions",
    "title": "函数",
    "keyPoints": [
      "函数调用",
      "参数传递",
      "返回值"
    ]
  },
  "codeLines": [
    "// 函数定义",
    "int add(int a, int b) {",
    "    return a + b;",
    "}",
    "",
    "// 函数声明 (头文件或源文件顶部)",
    "int multiply(int x, int y);",
    "",
    "// 值传递 vs 指针传递",
    "void by_value(int n) {",
    "    n = 100;  // 只修改局部副本",
    "}",
    "",
    "void by_pointer(int *p) {",
    "    *p = 100;  // 修改原变量",
    "}",
    "",
    "// 调用",
    "int n = 10;",
    "by_value(n);      // n 仍然是 10",
    "by_pointer(&n);  // n 变成 100",
    "",
    "// 递归函数",
    "int factorial(int n) {",
    "    if (n <= 1) return 1;",
    "    return n * factorial(n - 1);",
    "}",
    "",
    "// 内联函数 (编译时展开)",
    "static inline int max(int a, int b) {",
    "    return (a > b) ? a : b;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：函数",
        "detail": "C语言函数基础测试  ```c // 函数定义 int add(int a, int b) {     return a + b; }  // 函数声明 (头文件或源文件顶部) int multiply(int x, int y);  // 值传递 vs 指针传递 void by_value(int n) {     n = 100;  // 只修改局部副本 }  void by_pointer(",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    },
    {
      "line": 1,
      "vars": [],
      "explanation": {
        "text": "执行第2行",
        "detail": "int add(int a, int b) {",
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
        "detail": "return a + b;",
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
        "detail": "}",
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
        "detail": "int multiply(int x, int y);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 9,
      "vars": [],
      "explanation": {
        "text": "执行第10行",
        "detail": "void by_value(int n) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 10,
      "vars": [],
      "explanation": {
        "text": "执行第11行",
        "detail": "n = 100;  // 只修改局部副本",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 11,
      "vars": [],
      "explanation": {
        "text": "执行第12行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 13,
      "vars": [],
      "explanation": {
        "text": "执行第14行",
        "detail": "void by_pointer(int *p) {",
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
        "detail": "*p = 100;  // 修改原变量",
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
    },
    {
      "line": 18,
      "vars": [],
      "explanation": {
        "text": "执行第19行",
        "detail": "int n = 10;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 19,
      "vars": [],
      "explanation": {
        "text": "执行第20行",
        "detail": "by_value(n);      // n 仍然是 10",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 20,
      "vars": [],
      "explanation": {
        "text": "执行第21行",
        "detail": "by_pointer(&n);  // n 变成 100",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 23,
      "vars": [],
      "explanation": {
        "text": "执行第24行",
        "detail": "int factorial(int n) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 24,
      "vars": [],
      "explanation": {
        "text": "执行第25行",
        "detail": "if (n <= 1) return 1;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 25,
      "vars": [],
      "explanation": {
        "text": "执行第26行",
        "detail": "return n * factorial(n - 1);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 26,
      "vars": [],
      "explanation": {
        "text": "执行第27行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 29,
      "vars": [],
      "explanation": {
        "text": "执行第30行",
        "detail": "static inline int max(int a, int b) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 30,
      "vars": [],
      "explanation": {
        "text": "执行第31行",
        "detail": "return (a > b) ? a : b;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 31,
      "vars": [],
      "explanation": {
        "text": "执行第32行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习函数",
    "pitfalls": [
      "函数调用",
      "参数传递",
      "返回值"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
