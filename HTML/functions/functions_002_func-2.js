window.LESSON_DATA = {
  "meta": {
    "chapterId": "functions",
    "lessonId": "func-2",
    "title": "值传递",
    "keyPoints": [
      "参数是值的副本",
      "修改形参不影响实参",
      "要修改原值需用指针"
    ]
  },
  "codeLines": [
    "void change(int x) {",
    "    x = 100;  // 只修改副本",
    "}",
    "",
    "int a = 5;",
    "change(a);",
    "// a仍然是5！"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：值传递",
        "detail": "C语言函数参数是**值传递**——复制一份：  ```c void change(int x) {     x = 100;  // 只修改副本 }  int a = 5; change(a); // a仍然是5！ ```  想要修改原变量，需要传递**指针**（后面学习）。",
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
        "detail": "void change(int x) {",
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
        "detail": "x = 100;  // 只修改副本",
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
        "detail": "}",
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
        "detail": "int a = 5;",
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
        "detail": "change(a);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习值传递",
    "pitfalls": [
      "参数是值的副本",
      "修改形参不影响实参",
      "要修改原值需用指针"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
