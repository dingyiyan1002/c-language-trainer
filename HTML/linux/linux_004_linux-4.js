window.LESSON_DATA = {
  "meta": {
    "chapterId": "linux",
    "lessonId": "linux-4",
    "title": "IO多路复用",
    "keyPoints": [
      "select/poll需要遍历",
      "epoll只返回就绪fd",
      "epoll使用回调机制"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：IO多路复用",
        "detail": "同时监视多个文件描述符：  **select的局限** - fd_set大小限制(1024) - 每次调用都要拷贝fd_set到内核 - 返回后需要遍历所有fd检查状态 - 时间复杂度O(n)  **poll的改进** - 使用数组存储fd，无大小限制 - 但仍需遍历所有fd - 数据拷贝开销仍然存在  **epoll的革命** - epoll_create: 创建epoll实例 - epoll_",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习IO多路复用",
    "pitfalls": [
      "select/poll需要遍历",
      "epoll只返回就绪fd",
      "epoll使用回调机制"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
