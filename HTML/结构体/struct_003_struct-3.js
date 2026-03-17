window.LESSON_DATA = {
  "meta": {
    "chapterId": "struct",
    "lessonId": "struct-3",
    "title": "结构体与指针",
    "index": 3,
    "filename": "struct_003_struct-3.js",
    "keyPoints": [
      "结构体指针",
      "箭头运算符",
      "动态分配",
      "作为函数参数"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <stdlib.h>",
    "",
    "struct Rectangle {",
    "    int width;",
    "    int height;",
    "};",
    "",
    "// 通过指针访问结构体",
    "void print_rect(struct Rectangle *rect) {",
    "    printf(\"尺寸：%d x %d\\n\", rect->width, rect->height);",
    "    printf(\"面积：%d\\n\", rect->width * rect->height);",
    "}",
    "",
    "// 修改结构体成员",
    "void resize(struct Rectangle *rect, int w, int h) {",
    "    rect->width = w;",
    "    rect->height = h;",
    "}",
    "",
    "int main(void) {",
    "    // 栈上分配",
    "    struct Rectangle r1 = {10, 20};",
    "    print_rect(&r1);",
    "    ",
    "    // 堆上动态分配",
    "    struct Rectangle *r2 = malloc(sizeof(struct Rectangle));",
    "    r2->width = 30;",
    "    r2->height = 40;",
    "    print_rect(r2);",
    "    ",
    "    resize(r2, 50, 60);",
    "    print_rect(r2);",
    "    ",
    "    free(r2);",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：结构体与指针",
        "detail": "结构体指针是高效传递和修改结构体的关键，->运算符用于指针访问成员。",
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
        "detail": "#include <stdlib.h>",
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
        "detail": "struct Rectangle {",
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
        "detail": "int width;",
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
        "detail": "int height;",
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
        "detail": "void print_rect(struct Rectangle *rect) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 10,
      "vars": [],
      "explanation": {
        "text": "执行第11行",
        "detail": "printf(\"尺寸：%d x %d\\n\", rect->width, rect->height);",
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
        "detail": "printf(\"面积：%d\\n\", rect->width * rect->height);",
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
        "detail": "}",
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
        "detail": "void resize(struct Rectangle *rect, int w, int h) {",
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
        "detail": "rect->width = w;",
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
        "detail": "rect->height = h;",
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
        "detail": "int main(void) {",
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
        "detail": "struct Rectangle r1 = {10, 20};",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 23,
      "vars": [],
      "explanation": {
        "text": "执行第24行",
        "detail": "print_rect(&r1);",
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
        "detail": "struct Rectangle *r2 = malloc(sizeof(struct Rectangle));",
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
        "detail": "r2->width = 30;",
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
        "detail": "r2->height = 40;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 29,
      "vars": [],
      "explanation": {
        "text": "执行第30行",
        "detail": "print_rect(r2);",
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
        "detail": "resize(r2, 50, 60);",
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
        "detail": "print_rect(r2);",
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
        "detail": "free(r2);",
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
        "detail": "return 0;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 36,
      "vars": [],
      "explanation": {
        "text": "执行第37行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习结构体与指针",
    "pitfalls": [
      "结构体指针",
      "箭头运算符",
      "动态分配"
    ],
    "transferQuestion": "你能用结构体组织哪些数据？",
    "miniExercise": "尝试定义一个表示学生信息的结构体"
  }
};\n