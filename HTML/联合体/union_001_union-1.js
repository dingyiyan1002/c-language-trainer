window.LESSON_DATA = {
  "meta": {
    "chapterId": "union",
    "lessonId": "union-1",
    "title": "联合体定义与使用",
    "index": 1,
    "filename": "union_001_union-1.js",
    "keyPoints": [
      "union 关键字",
      "共享内存",
      "sizeof 联合体",
      "与结构体区别"
    ]
  },
  "codeLines": [
    "#include <stdio.h>\n\nstruct DataStruct {\n    int i;\n    float f;\n    char c;\n};\n\nunion DataUnion {\n    int i;\n    float f;\n    char c;\n};\n\nint main(void) {\n    printf(\"结构体大小：%zu 字节",
    "\", sizeof(struct DataStruct));\n    printf(\"联合体大小：%zu 字节",
    "\", sizeof(union DataUnion));\n    \n    union DataUnion data;\n    data.i = 65;\n    printf(\"data.i = %d",
    "\", data.i);\n    \n    data.f = 3.14f;\n    printf(\"data.f = %f",
    "\", data.f);\n    printf(\"data.i = %d (被覆盖)",
    "\", data.i);\n    \n    data.c = 'A';\n    printf(\"data.c = %c",
    "\", data.c);\n    printf(\"data.i = %d (低字节)",
    "\", data.i);\n    \n    return 0;\n}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：联合体定义与使用",
        "detail": "联合体所有成员共享同一块内存，任一时刻只能存储一个成员的值。",
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
        "detail": "#include <stdio.h>\n\nstruct DataStruct {\n    int i;\n    float f;\n    char c;\n};\n\n",
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
        "detail": "\", sizeof(struct DataStruct));\n    printf(\"联合体大小：%zu 字节",
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
        "detail": "\", sizeof(union DataUnion));\n    \n    union DataUnion data;\n    data.i = 65;\n   ",
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
        "detail": "\", data.i);\n    \n    data.f = 3.14f;\n    printf(\"data.f = %f",
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
        "detail": "\", data.f);\n    printf(\"data.i = %d (被覆盖)",
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
        "detail": "\", data.i);\n    \n    data.c = 'A';\n    printf(\"data.c = %c",
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
        "detail": "\", data.c);\n    printf(\"data.i = %d (低字节)",
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
        "detail": "\", data.i);\n    \n    return 0;\n}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习联合体定义与使用",
    "pitfalls": [
      "union 关键字",
      "共享内存",
      "sizeof 联合体"
    ],
    "transferQuestion": "联合体在哪些场景下比结构体更合适？",
    "miniExercise": "尝试用联合体实现一个支持多种类型的变量"
  }
};\n