window.LESSON_DATA = {
  "meta": {
    "chapterId": "struct",
    "lessonId": "struct-1",
    "title": "结构体定义与声明",
    "index": 1,
    "filename": "struct_001_struct-1.js",
    "keyPoints": [
      "struct 关键字",
      "成员定义",
      "结构体变量声明",
      "点运算符"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <string.h>",
    "",
    "// 结构体定义",
    "struct Point {",
    "    int x;",
    "    int y;",
    "};",
    "",
    "int main(void) {",
    "    // 结构体变量声明",
    "    struct Point p1;",
    "    p1.x = 10;",
    "    p1.y = 20;",
    "    ",
    "    // 声明时初始化",
    "    struct Point p2 = {30, 40};",
    "    ",
    "    printf(\"p1: (%d, %d)\\n\", p1.x, p1.y);",
    "    printf(\"p2: (%d, %d)\\n\", p2.x, p2.y);",
    "    ",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：结构体定义与声明",
        "detail": "结构体是 C 语言中最重要的自定义类型，用于将相关数据组织在一起。",
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
        "detail": "#include <string.h>",
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
        "detail": "struct Point {",
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
        "detail": "int x;",
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
        "detail": "int y;",
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
        "detail": "};",
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
        "detail": "int main(void) {",
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
        "detail": "struct Point p1;",
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
        "detail": "p1.x = 10;",
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
        "detail": "p1.y = 20;",
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
        "detail": "struct Point p2 = {30, 40};",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 18,
      "vars": [],
      "explanation": {
        "text": "执行第19行",
        "detail": "printf(\"p1: (%d, %d)\\n\", p1.x, p1.y);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 19,
      "vars": [],
      "explanation": {
        "text": "执行第20行",
        "detail": "printf(\"p2: (%d, %d)\\n\", p2.x, p2.y);",
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
        "detail": "return 0;",
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
    }
  ],
  "summary": {
    "oneLiner": "学习结构体定义与声明",
    "pitfalls": [
      "struct 关键字",
      "成员定义",
      "结构体变量声明"
    ],
    "transferQuestion": "你能用结构体组织哪些数据？",
    "miniExercise": "尝试定义一个表示学生信息的结构体"
  }
};\n