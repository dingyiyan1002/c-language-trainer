window.LESSON_DATA = {
  "meta": {
    "chapterId": "memory",
    "lessonId": "mem-6",
    "title": "双重释放",
    "keyPoints": [
      "不要双重释放",
      "free后置NULL",
      "用AddressSanitizer检测"
    ]
  },
  "codeLines": [
    "int *p = malloc(4);",
    "free(p);",
    "free(p);   // XCircle 崩溃！"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：双重释放",
        "detail": "**双重释放**：同一块内存释放两次 ```c int *p = malloc(4); free(p); free(p);   // XCircle 崩溃！ ```  **解决**：free后置NULL ```c free(p); p = NULL;  // CheckCircle 再free(NULL)安全 ```  **使用已释放内存**： ```c free(p); printf(\"%d\",",
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
        "detail": "int *p = malloc(4);",
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
        "detail": "free(p);",
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
        "detail": "free(p);   // XCircle 崩溃！",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习双重释放",
    "pitfalls": [
      "不要双重释放",
      "free后置NULL",
      "用AddressSanitizer检测"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
