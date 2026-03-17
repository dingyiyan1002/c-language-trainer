window.LESSON_DATA = {
  "meta": {
    "chapterId": "linux",
    "lessonId": "linux-5",
    "title": "进程间通信原理",
    "keyPoints": [
      "共享内存最快",
      "管道有拷贝开销",
      "UDS可传递fd"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：进程间通信原理",
        "detail": "IPC机制对比：  **管道/命名管道** - 基于内核缓冲区(通常4KB-64KB) - 单向流式通信 - 数据拷贝：用户→内核→用户  **共享内存** - 最快的IPC(无数据拷贝) - 需要同步机制(mutex/信号量) - shmget/shmat创建和映射  **Unix Domain Socket** - 类似网络socket，但本地通信 - 可以传递文件描述符 - 支持流和数据报两",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习进程间通信原理",
    "pitfalls": [
      "共享内存最快",
      "管道有拷贝开销",
      "UDS可传递fd"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
