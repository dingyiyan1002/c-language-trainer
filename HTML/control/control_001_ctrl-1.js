window.LESSON_DATA = {
  "meta": {
    "chapterId": "control",
    "lessonId": "ctrl-1",
    "title": "if-else条件判断",
    "keyPoints": [
      "条件放在()内",
      "语句块用{}包围",
      "else if处理多条件"
    ]
  },
  "codeLines": [
    "if (score >= 60) {",
    "    printf(\"及格\");",
    "} else if (score >= 40) {",
    "    printf(\"补考\");",
    "} else {",
    "    printf(\"重修\");",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：if-else条件判断",
        "detail": "根据条件选择执行不同代码：  ```c if (score >= 60) {     printf(\"及格\"); } else if (score >= 40) {     printf(\"补考\"); } else {     printf(\"重修\"); } ```  **注意：** 条件表达式放在小括号()内，语句块用大括号{}包围。",
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
        "detail": "if (score >= 60) {",
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
        "detail": "printf(\"及格\");",
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
        "detail": "} else if (score >= 40) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 3,
      "vars": [],
      "explanation": {
        "text": "执行第4行",
        "detail": "printf(\"补考\");",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 4,
      "vars": [],
      "explanation": {
        "text": "执行第5行",
        "detail": "} else {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 5,
      "vars": [],
      "explanation": {
        "text": "执行第6行",
        "detail": "printf(\"重修\");",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 6,
      "vars": [],
      "explanation": {
        "text": "执行第7行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习if-else条件判断",
    "pitfalls": [
      "条件放在()内",
      "语句块用{}包围",
      "else if处理多条件"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
