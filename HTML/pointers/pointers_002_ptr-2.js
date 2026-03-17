window.LESSON_DATA = {
  "meta": {
    "chapterId": "pointers",
    "lessonId": "ptr-2",
    "title": "常见指针错误",
    "keyPoints": [
      "使用前必须初始化",
      "用前检查是否NULL",
      "free后不要再使用"
    ]
  },
  "codeLines": [
    "int *p;      // p是垃圾值",
    "*p = 10;     // 危险！写入随机地址"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：常见指针错误",
        "detail": "**野指针：** 未初始化就使用 ```c int *p;      // p是垃圾值 *p = 10;     // 危险！写入随机地址 ```  **空指针解引用：** ```c int *p = NULL; *p = 10;     // 程序崩溃！ ```  **悬空指针：** 指向已释放的内存 ```c int *p = malloc(sizeof(int)); free(p); *p ",
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
        "detail": "int *p;      // p是垃圾值",
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
        "detail": "*p = 10;     // 危险！写入随机地址",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习常见指针错误",
    "pitfalls": [
      "使用前必须初始化",
      "用前检查是否NULL",
      "free后不要再使用"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
