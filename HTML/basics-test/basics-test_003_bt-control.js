window.LESSON_DATA = {
  "meta": {
    "chapterId": "basics-test",
    "lessonId": "bt-control",
    "title": "控制流",
    "keyPoints": [
      "条件分支",
      "循环结构",
      "跳转控制"
    ]
  },
  "codeLines": [
    "// if-else 条件判断",
    "int score = 85;",
    "if (score >= 90) {",
    "    grade = 'A';",
    "} else if (score >= 80) {",
    "    grade = 'B';",
    "} else {",
    "    grade = 'C';",
    "}",
    "",
    "// switch-case 多分支",
    "int day = 3;",
    "switch (day) {",
    "    case 1: printf(\"周一\"); break;",
    "    case 2: printf(\"周二\"); break;",
    "    case 3: printf(\"周三\"); break;",
    "    default: printf(\"其他\"); break;",
    "}",
    "",
    "// for 循环",
    "for (int i = 0; i < 10; i++) {",
    "    sum += i;",
    "}",
    "",
    "// while 循环",
    "int count = 0;",
    "while (count < 5) {",
    "    count++;",
    "}",
    "",
    "// do-while 循环",
    "int n = 0;",
    "do {",
    "    printf(\"%d \", n);",
    "    n++;",
    "} while (n < 3);",
    "",
    "// break/continue",
    "for (int i = 0; i < 10; i++) {",
    "    if (i == 3) continue;  // 跳过本次",
    "    if (i == 7) break;      // 跳出循环",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：控制流",
        "detail": "C语言控制流测试  ```c // if-else 条件判断 int score = 85; if (score >= 90) {     grade = 'A'; } else if (score >= 80) {     grade = 'B'; } else {     grade = 'C'; }  // switch-case 多分支 int day = 3; switch (day) ",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    },
    {
      "line": 1,
      "vars": [],
      "explanation": {
        "text": "执行第2行",
        "detail": "int score = 85;",
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
        "detail": "if (score >= 90) {",
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
        "detail": "grade = 'A';",
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
        "detail": "} else if (score >= 80) {",
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
        "detail": "grade = 'B';",
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
        "detail": "} else {",
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
        "detail": "grade = 'C';",
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
        "detail": "int day = 3;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 12,
      "vars": [],
      "explanation": {
        "text": "执行第13行",
        "detail": "switch (day) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 13,
      "vars": [],
      "explanation": {
        "text": "执行第14行",
        "detail": "case 1: printf(\"周一\"); break;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 14,
      "vars": [],
      "explanation": {
        "text": "执行第15行",
        "detail": "case 2: printf(\"周二\"); break;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 15,
      "vars": [],
      "explanation": {
        "text": "执行第16行",
        "detail": "case 3: printf(\"周三\"); break;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 16,
      "vars": [],
      "explanation": {
        "text": "执行第17行",
        "detail": "default: printf(\"其他\"); break;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 17,
      "vars": [],
      "explanation": {
        "text": "执行第18行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 20,
      "vars": [],
      "explanation": {
        "text": "执行第21行",
        "detail": "for (int i = 0; i < 10; i++) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 21,
      "vars": [],
      "explanation": {
        "text": "执行第22行",
        "detail": "sum += i;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 22,
      "vars": [],
      "explanation": {
        "text": "执行第23行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 25,
      "vars": [],
      "explanation": {
        "text": "执行第26行",
        "detail": "int count = 0;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 26,
      "vars": [],
      "explanation": {
        "text": "执行第27行",
        "detail": "while (count < 5) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 27,
      "vars": [],
      "explanation": {
        "text": "执行第28行",
        "detail": "count++;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 28,
      "vars": [],
      "explanation": {
        "text": "执行第29行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 31,
      "vars": [],
      "explanation": {
        "text": "执行第32行",
        "detail": "int n = 0;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 32,
      "vars": [],
      "explanation": {
        "text": "执行第33行",
        "detail": "do {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 33,
      "vars": [],
      "explanation": {
        "text": "执行第34行",
        "detail": "printf(\"%d \", n);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 34,
      "vars": [],
      "explanation": {
        "text": "执行第35行",
        "detail": "n++;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 35,
      "vars": [],
      "explanation": {
        "text": "执行第36行",
        "detail": "} while (n < 3);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 38,
      "vars": [],
      "explanation": {
        "text": "执行第39行",
        "detail": "for (int i = 0; i < 10; i++) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 39,
      "vars": [],
      "explanation": {
        "text": "执行第40行",
        "detail": "if (i == 3) continue;  // 跳过本次",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 40,
      "vars": [],
      "explanation": {
        "text": "执行第41行",
        "detail": "if (i == 7) break;      // 跳出循环",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 41,
      "vars": [],
      "explanation": {
        "text": "执行第42行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习控制流",
    "pitfalls": [
      "条件分支",
      "循环结构",
      "跳转控制"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
