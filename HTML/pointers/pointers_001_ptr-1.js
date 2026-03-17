window.LESSON_DATA = {
  "meta": {
    "chapterId": "pointers",
    "lessonId": "ptr-1",
    "title": "指针基础",
    "keyPoints": [
      "&取地址",
      "*解引用",
      "指针存的是地址",
      "通过指针可以修改原变量"
    ]
  },
  "codeLines": [
    "int a = 10;",
    "int *p = &a;  // p存储a的地址",
    "",
    "// & 取地址",
    "// * 解引用（获取地址上的值）",
    "",
    "printf(\"%d\", *p);  // 输出10",
    "*p = 20;           // 通过指针修改a",
    "printf(\"%d\", a);   // 输出20"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：指针基础",
        "detail": "指针存储变量的**内存地址**：  ```c int a = 10; int *p = &a;  // p存储a的地址  // & 取地址 // * 解引用（获取地址上的值）  printf(\"%d\", *p);  // 输出10 *p = 20;           // 通过指针修改a printf(\"%d\", a);   // 输出20 ```",
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
        "detail": "int a = 10;",
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
        "detail": "int *p = &a;  // p存储a的地址",
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
        "detail": "printf(\"%d\", *p);  // 输出10",
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
        "detail": "*p = 20;           // 通过指针修改a",
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
        "detail": "printf(\"%d\", a);   // 输出20",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习指针基础",
    "pitfalls": [
      "&取地址",
      "*解引用",
      "指针存的是地址"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
