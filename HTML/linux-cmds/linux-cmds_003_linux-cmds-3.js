window.LESSON_DATA = {
  "meta": {
    "chapterId": "linux-cmds",
    "lessonId": "linux-cmds-3",
    "title": "进程管理",
    "keyPoints": [
      "ps aux查看进程",
      "kill -9强制终止",
      "nohup后台运行"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：进程管理",
        "detail": "Linux进程管理命令：  **ps - 查看进程** - ps aux: 显示所有进程详情 - ps -ef: 完整格式显示 - ps aux | grep nginx: 查找特定进程  **top/htop - 动态监控** - top: 实时进程监控 - htop: 增强版（需安装） - 按P按CPU排序，按M按内存排序  **kill - 发送信号** - kill PID: 默认SIGT",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习进程管理",
    "pitfalls": [
      "ps aux查看进程",
      "kill -9强制终止",
      "nohup后台运行"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
