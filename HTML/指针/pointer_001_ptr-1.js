window.LESSON_DATA = {
  "meta": {
    "chapterId": "pointer",
    "lessonId": "ptr-1",
    "title": "指针基础概念",
    "index": 1,
    "filename": "pointer_001_ptr-1.js",
    "keyPoints": [
      "指针定义",
      "取地址",
      "解引用",
      "指针类型"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "int main(void) {",
    "    int a = 42;",
    "    int *p = &a;",
    "    printf(\"a = %d, *p = %d\\n\", a, *p);",
    "    *p = 100;",
    "    printf(\"a = %d\\n\", a);",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：指针基础概念",
        "detail": "指针存储变量的内存地址。",
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
        "detail": "int a = 42;",
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
        "detail": "int *p = &a;",
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
        "detail": "printf(\"a = %d, *p = %d\\n\", a, *p);",
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
        "detail": "*p = 100;",
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
        "detail": "printf(\"a = %d\\n\", a);",
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
        "detail": "return 0;",
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
    }
  ],
  "summary": {
    "oneLiner": "学习指针基础概念",
    "pitfalls": [
      "指针定义",
      "取地址",
      "解引用"
    ],
    "transferQuestion": "指针在哪些场景下必不可少？",
    "miniExercise": "尝试用指针实现两个变量交换"
  }
};
