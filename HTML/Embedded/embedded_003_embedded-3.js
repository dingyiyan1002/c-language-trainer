window.LESSON_DATA = {
  "meta": {
    "chapterId": "embedded",
    "lessonId": "embedded-3",
    "title": "信号处理",
    "keyPoints": [
      "SIGKILL不可捕获",
      "sigaction比signal更安全",
      "kill发送信号"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：信号处理",
        "detail": "Linux信号机制：  **常见信号** - SIGINT(2): Ctrl+C中断 - SIGKILL(9): 强制终止（不可捕获） - SIGTERM(15): 正常终止 - SIGSEGV(11): 段错误 - SIGCHLD: 子进程状态改变  **signal/sigaction** - signal(sig, handler): 简单注册 - sigaction(sig, &act, ",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习信号处理",
    "pitfalls": [
      "SIGKILL不可捕获",
      "sigaction比signal更安全",
      "kill发送信号"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
