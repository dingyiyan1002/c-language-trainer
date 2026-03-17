window.LESSON_DATA = {
  "meta": {
    "chapterId": "functions",
    "lessonId": "func-1",
    "title": "函数定义与调用",
    "keyPoints": [
      "返回类型写在函数名前",
      "void表示无返回值",
      "参数用逗号分隔"
    ]
  },
  "codeLines": [
    "返回类型 函数名(参数列表) {",
    "    // 函数体",
    "    return 返回值;",
    "}",
    "",
    "// 例：计算两数之和",
    "int add(int a, int b) {",
    "    return a + b;",
    "}",
    "",
    "// 调用",
    "int result = add(3, 5);  // result = 8"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：函数定义与调用",
        "detail": "函数的基本结构：  ```c 返回类型 函数名(参数列表) {     // 函数体     return 返回值; }  // 例：计算两数之和 int add(int a, int b) {     return a + b; }  // 调用 int result = add(3, 5);  // result = 8 ```",
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
        "detail": "返回类型 函数名(参数列表) {",
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
        "detail": "return 返回值;",
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
        "detail": "}",
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
        "detail": "int add(int a, int b) {",
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
        "detail": "return a + b;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 8,
      "vars": [],
      "explanation": {
        "text": "执行第9行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 11,
      "vars": [],
      "explanation": {
        "text": "执行第12行",
        "detail": "int result = add(3, 5);  // result = 8",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习函数定义与调用",
    "pitfalls": [
      "返回类型写在函数名前",
      "void表示无返回值",
      "参数用逗号分隔"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
