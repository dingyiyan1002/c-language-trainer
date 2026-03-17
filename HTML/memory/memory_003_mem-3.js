window.LESSON_DATA = {
  "meta": {
    "chapterId": "memory",
    "lessonId": "mem-3",
    "title": "内存泄漏",
    "keyPoints": [
      "malloc/free配对",
      "异常路径也要释放",
      "不要覆盖未释放指针"
    ]
  },
  "codeLines": [
    "// 1. 忘记释放",
    "void leak1() {",
    "    int *p = malloc(100);",
    "    // 忘记free就返回",
    "}",
    "",
    "// 2. 异常路径",
    "void leak2(int x) {",
    "    int *p = malloc(100);",
    "    if (x < 0) return;  // 泄漏！",
    "    free(p);",
    "}",
    "",
    "// 3. 指针覆盖",
    "void leak3() {",
    "    int *p = malloc(100);",
    "    p = malloc(200);  // 第一次的内存丢失！",
    "    free(p);",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：内存泄漏",
        "detail": "**三大泄漏场景**：  ```c // 1. 忘记释放 void leak1() {     int *p = malloc(100);     // 忘记free就返回 }  // 2. 异常路径 void leak2(int x) {     int *p = malloc(100);     if (x < 0) return;  // 泄漏！     free(p); }  // 3. ",
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
        "detail": "void leak1() {",
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
        "detail": "int *p = malloc(100);",
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
      "line": 7,
      "vars": [],
      "explanation": {
        "text": "执行第8行",
        "detail": "void leak2(int x) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 8,
      "vars": [],
      "explanation": {
        "text": "执行第9行",
        "detail": "int *p = malloc(100);",
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
        "detail": "if (x < 0) return;  // 泄漏！",
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
        "detail": "free(p);",
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
      "line": 14,
      "vars": [],
      "explanation": {
        "text": "执行第15行",
        "detail": "void leak3() {",
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
        "detail": "int *p = malloc(100);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 16,
      "vars": [],
      "explanation": {
        "text": "执行第17行",
        "detail": "p = malloc(200);  // 第一次的内存丢失！",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 17,
      "vars": [],
      "explanation": {
        "text": "执行第18行",
        "detail": "free(p);",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习内存泄漏",
    "pitfalls": [
      "malloc/free配对",
      "异常路径也要释放",
      "不要覆盖未释放指针"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
