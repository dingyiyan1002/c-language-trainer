window.LESSON_DATA = {
  "meta": {
    "chapterId": "memory",
    "lessonId": "mem-5",
    "title": "缓冲区溢出",
    "keyPoints": [
      "数组索引不能越界",
      "字符串用安全函数",
      "大数组用堆分配"
    ]
  },
  "codeLines": [
    "int arr[5];",
    "arr[5] = 1;   // XCircle 越界！索引0-4"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：缓冲区溢出",
        "detail": "**数组越界**： ```c int arr[5]; arr[5] = 1;   // XCircle 越界！索引0-4 ```  **字符串溢出**： ```c char buf[10]; strcpy(buf, \"Hello World!\");  // XCircle 12>10  // CheckCircle 安全 snprintf(buf, sizeof(buf), \"%s\", \"Hell",
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
        "detail": "int arr[5];",
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
        "detail": "arr[5] = 1;   // XCircle 越界！索引0-4",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习缓冲区溢出",
    "pitfalls": [
      "数组索引不能越界",
      "字符串用安全函数",
      "大数组用堆分配"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
