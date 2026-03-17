window.LESSON_DATA = {
  "meta": {
    "chapterId": "linux",
    "lessonId": "linux-3",
    "title": "线程与并发原理",
    "keyPoints": [
      "线程切换比进程快",
      "futex实现高效锁",
      "MESI保证缓存一致"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：线程与并发原理",
        "detail": "POSIX线程(pthread)：  **线程 vs 进程** - 线程共享：代码段、数据段、堆、打开的文件 - 线程私有：栈、寄存器、线程局部存储 - 线程切换比进程切换快(无需切换页表)  **互斥锁实现** - 用户态：自旋锁(短暂等待) - 内核态：futex(快速用户态互斥) - 避免频繁系统调用  **缓存一致性** - MESI协议：Modified/Exclusive/Shared",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习线程与并发原理",
    "pitfalls": [
      "线程切换比进程快",
      "futex实现高效锁",
      "MESI保证缓存一致"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
