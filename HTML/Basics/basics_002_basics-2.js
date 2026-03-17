window.LESSON_DATA = {
  "meta": {
    "chapterId": "basics",
    "lessonId": "basics-2",
    "title": "printf输出函数",
    "keyPoints": [
      "printf输出到屏幕",
      "%d是整数占位符",
      "\\\\n是换行符"
    ]
  },
  "codeLines": [
    "printf(\"文本内容\");      // 输出文本",
    "printf(\"数字：%d\", 10);  // 输出整数",
    "printf(\"换行\\\\n\");       // \\\\n表示换行"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：printf输出函数",
        "detail": "printf用于向屏幕输出内容：  ```c printf(\"文本内容\");      // 输出文本 printf(\"数字：%d\", 10);  // 输出整数 printf(\"换行\\\\n\");       // \\\\n表示换行 ```  **常用转义字符：** - \\\\n - 换行 - \\\\t - 制表符（Tab） - \\\\\\\\ - 输出反斜杠本身",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    },
    {
      "line": 0,
      "vars": [],
      "explanation": {
        "text": "执行第1行",
        "detail": "printf(\"文本内容\");      // 输出文本",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 1,
      "vars": [],
      "explanation": {
        "text": "执行第2行",
        "detail": "printf(\"数字：%d\", 10);  // 输出整数",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 2,
      "vars": [],
      "explanation": {
        "text": "执行第3行",
        "detail": "printf(\"换行\\\\n\");       // \\\\n表示换行",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习printf输出函数",
    "pitfalls": [
      "printf输出到屏幕",
      "%d是整数占位符",
      "\\\\n是换行符"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
