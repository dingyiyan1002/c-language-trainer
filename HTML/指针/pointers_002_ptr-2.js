window.LESSON_DATA = {
  "meta": {
    "chapterId": "pointers",
    "lessonId": "ptr-2",
    "title": "常见指针错误"
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
        "text": "准备执行代码",
        "detail": "程序即将开始运行",
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
      "注意语法细节",
      "理解数据类型",
      "掌握运算符优先级"
    ],
    "transferQuestion": "你能用今天学的知识解决什么问题？",
    "miniExercise": "尝试修改代码，观察输出变化"
  }
};
