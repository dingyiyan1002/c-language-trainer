window.LESSON_DATA = {
  "meta": {
    "chapterId": "interview",
    "lessonId": "interview-5",
    "title": "概念深度题",
    "keyPoints": [
      "volatile原理",
      "内存屏障",
      "系统调用",
      "静态/动态链接",
      "MMU",
      "DMA"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：概念深度题",
        "detail": "深入理解C语言和系统原理：  **volatile关键字** - 防止编译器优化 - 确保每次从内存读取 - 用于硬件寄存器、多线程标志  **内存屏障** - 防止指令重排序 - 确保操作顺序 - 多核同步必备  **系统调用** - 用户态到内核态切换 - 参数传递和上下文切换 - 开销较大，应减少调用  **链接方式** - 静态链接：独立运行，体积大 - 动态链接：共享库，依赖环境",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习概念深度题",
    "pitfalls": [
      "volatile原理",
      "内存屏障",
      "系统调用"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
