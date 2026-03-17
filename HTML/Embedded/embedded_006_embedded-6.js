window.LESSON_DATA = {
  "meta": {
    "chapterId": "embedded",
    "lessonId": "embedded-6",
    "title": "设备文件操作",
    "keyPoints": [
      "字符设备按字节访问",
      "ioctl控制设备",
      "串口编程配置参数"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：设备文件操作",
        "detail": "Linux设备文件：  **设备文件类型** - 字符设备(c): 按字节访问（串口、键盘） - 块设备(b): 按块访问（硬盘、U盘） - 设备文件在/dev目录  **ioctl - 设备控制** - int ioctl(int fd, unsigned long request, ...) - 发送控制命令给设备驱动 - 如设置串口波特率  **串口编程** - open(\"/dev/tty",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习设备文件操作",
    "pitfalls": [
      "字符设备按字节访问",
      "ioctl控制设备",
      "串口编程配置参数"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
