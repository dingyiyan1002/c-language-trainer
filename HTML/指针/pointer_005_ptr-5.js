window.LESSON_DATA = {
  "meta": {
    "chapterId": "pointer",
    "lessonId": "ptr-5",
    "title": "const 与指针",
    "index": 5,
    "filename": "pointer_005_ptr-5.js",
    "keyPoints": [
      "指针常量",
      "常量指针",
      "const 位置"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "int main(void) {",
    "    int a = 10, b = 20;",
    "    const int *p1 = &a;",
    "    int * const p2 = &a;",
    "    *p2 = 30;",
    "    p1 = &b;",
    "    printf(\"a = %d, b = %d\\n\", a, b);",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：const 与指针",
        "detail": "const 位置决定修饰对象。",
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
        "detail": "#include <stdio.h>",
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
        "detail": "int main(void) {",
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
        "detail": "int a = 10, b = 20;",
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
        "detail": "const int *p1 = &a;",
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
        "detail": "int * const p2 = &a;",
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
        "detail": "*p2 = 30;",
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
        "detail": "p1 = &b;",
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
        "detail": "printf(\"a = %d, b = %d\\n\", a, b);",
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
        "detail": "return 0;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 9,
      "vars": [],
      "explanation": {
        "text": "执行第10行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习const 与指针",
    "pitfalls": [
      "指针常量",
      "常量指针",
      "const 位置"
    ],
    "transferQuestion": "指针在哪些场景下必不可少？",
    "miniExercise": "尝试用指针实现两个变量交换"
  }
};
