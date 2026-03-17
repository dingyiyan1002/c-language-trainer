window.LESSON_DATA = {
  "meta": {
    "chapterId": "memory",
    "lessonId": "mem-1",
    "title": "内存布局",
    "keyPoints": [
      "栈自动管理，空间有限",
      "堆手动管理，空间大"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：内存布局",
        "detail": "程序内存四区：  ``` ┌─────────────┐ 高地址 │    栈区     │ ← 局部变量，自动释放，~8MB ├─────────────┤ │    堆区     │ ← malloc分配，手动管理，GB级 ├─────────────┤ │   数据段    │ ← 全局/静态变量 ├─────────────┤ │   代码段    │ ← 程序指令，只读 └───────",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习内存布局",
    "pitfalls": [
      "栈自动管理，空间有限",
      "堆手动管理，空间大"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
