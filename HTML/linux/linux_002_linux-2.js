window.LESSON_DATA = {
  "meta": {
    "chapterId": "linux",
    "lessonId": "linux-2",
    "title": "进程管理深度",
    "keyPoints": [
      "fork使用COW机制",
      "exec替换地址空间",
      "CFS基于vruntime调度"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：进程管理深度",
        "detail": "进程创建和控制：  **fork()的Copy-on-Write** - fork时并不复制整个地址空间 - 只复制页表，标记为只读 - 写入时才复制实际页面(COW) - 这就是为什么fork比想象中快  **exec族** - 替换当前进程映像 - 加载新程序，重置地址空间 - 文件描述符默认保持打开  **进程调度** - CFS(完全公平调度器) - vruntime决定调度顺序 - ni",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习进程管理深度",
    "pitfalls": [
      "fork使用COW机制",
      "exec替换地址空间",
      "CFS基于vruntime调度"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
