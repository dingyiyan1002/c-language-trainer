window.LESSON_DATA = {
  "meta": {
    "chapterId": "linux",
    "lessonId": "linux-1",
    "title": "文件IO与内核机制",
    "keyPoints": [
      "系统调用有开销",
      "零拷贝提升性能",
      "页缓存加速文件访问"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：文件IO与内核机制",
        "detail": "Linux文件IO系统调用：  **open/close** - open(): 打开文件，返回文件描述符 - close(): 关闭文件描述符  **read/write系统调用开销** - 用户态→内核态切换：约100-200ns - 数据拷贝：用户缓冲区ArrowLeftRight页缓存ArrowLeftRight磁盘 - 上下文切换成本：保存/恢复寄存器  **零拷贝技术** - mmap",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习文件IO与内核机制",
    "pitfalls": [
      "系统调用有开销",
      "零拷贝提升性能",
      "页缓存加速文件访问"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
