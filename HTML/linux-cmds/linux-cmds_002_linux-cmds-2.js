window.LESSON_DATA = {
  "meta": {
    "chapterId": "linux-cmds",
    "lessonId": "linux-cmds-2",
    "title": "权限与用户管理",
    "keyPoints": [
      "chmod 755常用权限",
      "chown修改所有者",
      "sudo提权"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：权限与用户管理",
        "detail": "Linux权限系统：  **chmod - 修改权限** - 数字模式：chmod 755 file - 符号模式：chmod +x file - 递归：chmod -R 755 dir/  **chown - 修改所有者** - chown user:group file - chown -R user:group dir/  **权限含义** - r(4): 读权限 - w(2): 写权限 -",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习权限与用户管理",
    "pitfalls": [
      "chmod 755常用权限",
      "chown修改所有者",
      "sudo提权"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
