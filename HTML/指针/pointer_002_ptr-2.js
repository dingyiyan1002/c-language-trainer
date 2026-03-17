window.LESSON_DATA = {
  "meta": {
    "chapterId": "pointer",
    "lessonId": "ptr-2",
    "title": "指针运算",
    "index": 2,
    "filename": "pointer_002_ptr-2.js",
    "keyPoints": [
      "指针加减",
      "指针比较",
      "指针与数组"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "int main(void) {",
    "    int arr[] = {10, 20, 30, 40, 50};",
    "    int *p = arr;",
    "    p++;",
    "    printf(\"*p = %d\\n\", *p);",
    "    p += 2;",
    "    printf(\"*p = %d\\n\", *p);",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：指针运算",
        "detail": "指针运算按类型大小步长计算。",
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
        "detail": "int arr[] = {10, 20, 30, 40, 50};",
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
        "detail": "int *p = arr;",
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
        "detail": "p++;",
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
        "detail": "printf(\"*p = %d\\n\", *p);",
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
        "detail": "p += 2;",
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
        "detail": "printf(\"*p = %d\\n\", *p);",
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
    "oneLiner": "学习指针运算",
    "pitfalls": [
      "指针加减",
      "指针比较",
      "指针与数组"
    ],
    "transferQuestion": "指针在哪些场景下必不可少？",
    "miniExercise": "尝试用指针实现两个变量交换"
  }
};
