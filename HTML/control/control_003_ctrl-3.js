window.LESSON_DATA = {
  "meta": {
    "chapterId": "control",
    "lessonId": "ctrl-3",
    "title": "while循环",
    "keyPoints": [
      "while先判断后执行",
      "do-while至少执行一次",
      "while可能一次不执行"
    ]
  },
  "codeLines": [
    "int i = 0;",
    "while (i < 5) {",
    "    printf(\"%d \", i);",
    "    i++;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：while循环",
        "detail": "while先判断后执行：  ```c int i = 0; while (i < 5) {     printf(\"%d \", i);     i++; } ```  do-while先执行后判断（至少执行一次）：  ```c do {     printf(\"至少执行一次\"); } while (条件);  // 注意分号 ```",
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
        "detail": "int i = 0;",
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
        "detail": "while (i < 5) {",
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
        "detail": "printf(\"%d \", i);",
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
        "detail": "i++;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习while循环",
    "pitfalls": [
      "while先判断后执行",
      "do-while至少执行一次",
      "while可能一次不执行"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
