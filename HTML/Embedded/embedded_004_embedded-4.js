window.LESSON_DATA = {
  "meta": {
    "chapterId": "embedded",
    "lessonId": "embedded-4",
    "title": "进程间通信IPC",
    "keyPoints": [
      "pipe单向通信",
      "shm最快IPC",
      "FIFO跨进程通信"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：进程间通信IPC",
        "detail": "Linux IPC机制：  **管道(pipe)** - int pipe(int fd[2]) - fd[0]读端，fd[1]写端 - 单向通信，父子进程使用  **命名管道(FIFO)** - mkfifo(path, mode) - 无亲缘关系进程可通信 - 阻塞特性  **共享内存(shm)** - shmget(): 创建共享内存 - shmat(): 映射到进程空间 - shmdt()",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习进程间通信IPC",
    "pitfalls": [
      "pipe单向通信",
      "shm最快IPC",
      "FIFO跨进程通信"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
