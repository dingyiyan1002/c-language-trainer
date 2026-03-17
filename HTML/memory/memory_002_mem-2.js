window.LESSON_DATA = {
  "meta": {
    "chapterId": "memory",
    "lessonId": "mem-2",
    "title": "动态内存",
    "keyPoints": [
      "malloc/free配对",
      "检查NULL",
      "free后置NULL"
    ]
  },
  "codeLines": [
    "// malloc: 分配不初始化",
    "int *p = malloc(10 * sizeof(int));",
    "",
    "// calloc: 分配并初始化为0",
    "int *q = calloc(10, sizeof(int));",
    "",
    "// realloc: 调整大小",
    "p = realloc(p, 20 * sizeof(int));",
    "",
    "// 必须检查",
    "if (p == NULL) return;",
    "",
    "// 使用...",
    "",
    "free(p);     // 释放",
    "p = NULL;    // 置空防野指针"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：动态内存",
        "detail": "```c // malloc: 分配不初始化 int *p = malloc(10 * sizeof(int));  // calloc: 分配并初始化为0 int *q = calloc(10, sizeof(int));  // realloc: 调整大小 p = realloc(p, 20 * sizeof(int));  // 必须检查 if (p == NULL) return;  //",
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
        "detail": "int *p = malloc(10 * sizeof(int));",
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
        "detail": "int *q = calloc(10, sizeof(int));",
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
        "detail": "p = realloc(p, 20 * sizeof(int));",
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
        "detail": "if (p == NULL) return;",
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
        "detail": "free(p);     // 释放",
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
        "detail": "p = NULL;    // 置空防野指针",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习动态内存",
    "pitfalls": [
      "malloc/free配对",
      "检查NULL",
      "free后置NULL"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
