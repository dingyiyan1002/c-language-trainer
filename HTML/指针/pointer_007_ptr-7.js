window.LESSON_DATA = {
  "meta": {
    "chapterId": "pointer",
    "lessonId": "ptr-7",
    "title": "函数指针",
    "index": 7,
    "filename": "pointer_007_ptr-7.js",
    "keyPoints": [
      "函数地址",
      "回调函数",
      "跳转表"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "int add(int a, int b) { return a + b; }",
    "int sub(int a, int b) { return a - b; }",
    "typedef int (*MathOp)(int, int);",
    "int main(void) {",
    "    MathOp ops[] = {add, sub};",
    "    printf(\"5 + 3 = %d\\n\", ops[0](5, 3));",
    "    printf(\"5 - 3 = %d\\n\", ops[1](5, 3));",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：函数指针",
        "detail": "函数指针存储函数入口地址。",
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
        "detail": "int add(int a, int b) { return a + b; }",
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
        "detail": "int sub(int a, int b) { return a - b; }",
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
        "detail": "typedef int (*MathOp)(int, int);",
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
        "detail": "int main(void) {",
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
        "detail": "MathOp ops[] = {add, sub};",
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
        "detail": "printf(\"5 + 3 = %d\\n\", ops[0](5, 3));",
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
        "detail": "printf(\"5 - 3 = %d\\n\", ops[1](5, 3));",
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
    "oneLiner": "学习函数指针",
    "pitfalls": [
      "函数地址",
      "回调函数",
      "跳转表"
    ],
    "transferQuestion": "指针在哪些场景下必不可少？",
    "miniExercise": "尝试用指针实现两个变量交换"
  }
};
