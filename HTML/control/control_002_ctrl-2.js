window.LESSON_DATA = {
  "meta": {
    "chapterId": "control",
    "lessonId": "ctrl-2",
    "title": "for循环",
    "keyPoints": [
      "for(初始化;条件;更新)",
      "i<5会循环5次(0到4)",
      "break跳出循环",
      "continue跳过本次"
    ]
  },
  "codeLines": [
    "for (初始化; 条件; 更新) {",
    "    // 循环体",
    "}",
    "",
    "// 例：输出0到4",
    "for (int i = 0; i < 5; i++) {",
    "    printf(\"%d \", i);",
    "}",
    "// 输出：0 1 2 3 4"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：for循环",
        "detail": "for循环的三个部分：  ```c for (初始化; 条件; 更新) {     // 循环体 }  // 例：输出0到4 for (int i = 0; i < 5; i++) {     printf(\"%d \", i); } // 输出：0 1 2 3 4 ```  **执行顺序：** 初始化 → 判断条件 → 执行循环体 → 更新 → 判断条件 → ...",
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
        "detail": "for (初始化; 条件; 更新) {",
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
      "line": 5,
      "vars": [],
      "explanation": {
        "text": "执行第6行",
        "detail": "for (int i = 0; i < 5; i++) {",
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
        "detail": "printf(\"%d \", i);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 7,
      "vars": [],
      "explanation": {
        "text": "执行第8行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习for循环",
    "pitfalls": [
      "for(初始化;条件;更新)",
      "i<5会循环5次(0到4)",
      "break跳出循环"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
