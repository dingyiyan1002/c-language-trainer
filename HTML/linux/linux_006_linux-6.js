window.LESSON_DATA = {
  "meta": {
    "chapterId": "linux",
    "lessonId": "linux-6",
    "title": "信号与异步编程",
    "keyPoints": [
      "信号在返回用户态时处理",
      "信号处理要异步安全",
      "实时信号支持排队"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：信号与异步编程",
        "detail": "信号处理机制：  **信号发送与处理** - 内核检查目标进程的signal_pending - 从内核态返回用户态时处理信号 - 信号处理函数在进程上下文中执行  **可重入函数** - 信号处理中只能调用异步信号安全函数 - 不安全：malloc/free, printf, 操作全局链表 - 安全：write, _exit, 部分系统调用  **实时信号** - 支持排队(普通信号不排队) -",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习信号与异步编程",
    "pitfalls": [
      "信号在返回用户态时处理",
      "信号处理要异步安全",
      "实时信号支持排队"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
