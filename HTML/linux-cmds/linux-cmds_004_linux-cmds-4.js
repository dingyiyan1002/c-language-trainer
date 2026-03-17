window.LESSON_DATA = {
  "meta": {
    "chapterId": "linux-cmds",
    "lessonId": "linux-cmds-4",
    "title": "网络命令",
    "keyPoints": [
      "netstat -tlnp查看端口",
      "curl测试HTTP",
      "nc扫描端口"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：网络命令",
        "detail": "Linux网络调试命令：  **netstat - 网络状态** - netstat -tlnp: 查看监听端口 - netstat -an: 所有连接 - netstat -s: 统计信息  **ss - 新版网络工具** - ss -tlnp: 查看TCP监听 - ss -s: 连接统计摘要  **curl/wget - HTTP请求** - curl -I URL: 只获取响应头 - cur",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习网络命令",
    "pitfalls": [
      "netstat -tlnp查看端口",
      "curl测试HTTP",
      "nc扫描端口"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
