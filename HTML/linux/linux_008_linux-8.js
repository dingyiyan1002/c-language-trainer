window.LESSON_DATA = {
  "meta": {
    "chapterId": "linux",
    "lessonId": "linux-8",
    "title": "性能分析与优化",
    "keyPoints": [
      "批量操作减少syscall",
      "缓存行对齐避免伪共享",
      "epoll替代select"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：性能分析与优化",
        "detail": "系统性能优化：  **系统调用优化** - 批量操作减少syscall次数 - 使用vread/vwrite批量IO - 内存映射避免拷贝  **缓存优化** - CPU缓存行对齐(通常64字节) - 避免伪共享 - 预取指令优化访问模式  **锁优化** - 减小临界区 - 读写锁分离读/写 - 无锁数据结构  **IO优化** - 使用epoll替代select/poll - 异步IO(aio",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习性能分析与优化",
    "pitfalls": [
      "批量操作减少syscall",
      "缓存行对齐避免伪共享",
      "epoll替代select"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
