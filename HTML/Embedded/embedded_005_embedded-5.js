window.LESSON_DATA = {
  "meta": {
    "chapterId": "embedded",
    "lessonId": "embedded-5",
    "title": "多线程编程",
    "keyPoints": [
      "pthread_create创建线程",
      "mutex保护临界区",
      "cond实现等待通知"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：多线程编程",
        "detail": "POSIX线程(pthread)：  **线程创建与等待** - pthread_create(&tid, NULL, func, arg) - pthread_join(tid, &retval): 等待线程结束 - pthread_exit(retval): 线程退出  **互斥锁(mutex)** - pthread_mutex_init/destroy - pthread_mutex_lo",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习多线程编程",
    "pitfalls": [
      "pthread_create创建线程",
      "mutex保护临界区",
      "cond实现等待通知"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
