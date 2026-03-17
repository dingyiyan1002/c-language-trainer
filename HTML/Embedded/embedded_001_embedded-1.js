window.LESSON_DATA = {
  "meta": {
    "chapterId": "embedded",
    "lessonId": "embedded-1",
    "title": "文件IO基础",
    "keyPoints": [
      "open返回文件描述符",
      "read/write返回实际字节数",
      "close释放fd"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：文件IO基础",
        "detail": "Linux文件IO系统调用：  **open - 打开文件** - int fd = open(path, flags, mode) - O_RDONLY/O_WRONLY/O_RDWR: 读写模式 - O_CREAT: 不存在则创建 - O_APPEND: 追加模式 - O_NONBLOCK: 非阻塞模式  **read/write - 读写文件** - ssize_t read(fd, buf",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习文件IO基础",
    "pitfalls": [
      "open返回文件描述符",
      "read/write返回实际字节数",
      "close释放fd"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
