window.LESSON_DATA = {
  "meta": {
    "chapterId": "memory",
    "lessonId": "mem-4",
    "title": "野指针",
    "keyPoints": [
      "野指针：未初始化",
      "悬空指针：指向已释放内存",
      "不要返回局部变量地址",
      "free后置NULL"
    ]
  },
  "codeLines": [
    "int *p;     // 野指针！",
    "*p = 10;    // 崩溃或破坏数据"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：野指针",
        "detail": "**野指针**：未初始化 ```c int *p;     // 野指针！ *p = 10;    // 崩溃或破坏数据 ```  **悬空指针**：指向已释放内存 ```c int *p = malloc(4); free(p); *p = 10;    // 悬空指针！ ```  **经典错误：返回局部变量地址** ```c // XCircle 错误 int *bad() {     int",
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
        "detail": "int *p;     // 野指针！",
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
        "detail": "*p = 10;    // 崩溃或破坏数据",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习野指针",
    "pitfalls": [
      "野指针：未初始化",
      "悬空指针：指向已释放内存",
      "不要返回局部变量地址"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
