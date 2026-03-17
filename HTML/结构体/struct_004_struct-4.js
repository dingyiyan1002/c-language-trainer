window.LESSON_DATA = {
  "meta": {
    "chapterId": "struct",
    "lessonId": "struct-4",
    "title": "结构体内存布局",
    "index": 4,
    "filename": "struct_004_struct-4.js",
    "keyPoints": [
      "内存对齐",
      "sizeof 运算符",
      "填充字节",
      "pragma pack"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "",
    "struct Padded {",
    "    char a;      // 1 字节 + 3 字节填充",
    "    int b;       // 4 字节",
    "    short c;     // 2 字节 + 2 字节填充",
    "};",
    "",
    "struct Packed {",
    "    char a;",
    "    int b;",
    "    short c;",
    "};",
    "",
    "struct Optimized {",
    "    int b;       // 先放大成员",
    "    short c;",
    "    char a;",
    "    char pad;    // 手动填充",
    "};",
    "",
    "int main(void) {",
    "    printf(\"Padded: %zu 字节\\n\", sizeof(struct Padded));",
    "    printf(\"Packed: %zu 字节\\n\", sizeof(struct Packed));",
    "    printf(\"Optimized: %zu 字节\\n\", sizeof(struct Optimized));",
    "    ",
    "    // 成员偏移量",
    "    printf(\"a 偏移：%zu\\n\", offsetof(struct Padded, a));",
    "    printf(\"b 偏移：%zu\\n\", offsetof(struct Padded, b));",
    "    printf(\"c 偏移：%zu\\n\", offsetof(struct Padded, c));",
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
        "text": "知识点：结构体内存布局",
        "detail": "结构体内存对齐影响性能和空间，合理排列成员可减少填充字节。",
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
      "line": 2,
      "vars": [],
      "explanation": {
        "text": "执行第3行",
        "detail": "struct Padded {",
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
        "detail": "char a;      // 1 字节 + 3 字节填充",
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
        "detail": "int b;       // 4 字节",
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
        "detail": "short c;     // 2 字节 + 2 字节填充",
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
      "line": 8,
      "vars": [],
      "explanation": {
        "text": "执行第9行",
        "detail": "struct Packed {",
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
        "detail": "char a;",
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
        "detail": "int b;",
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
        "detail": "short c;",
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
        "detail": "};",
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
        "detail": "struct Optimized {",
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
        "detail": "int b;       // 先放大成员",
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
        "detail": "short c;",
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
        "detail": "char a;",
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
        "detail": "char pad;    // 手动填充",
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
        "detail": "};",
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
        "detail": "printf(\"Padded: %zu 字节\\n\", sizeof(struct Padded));",
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
        "detail": "printf(\"Packed: %zu 字节\\n\", sizeof(struct Packed));",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 24,
      "vars": [],
      "explanation": {
        "text": "执行第25行",
        "detail": "printf(\"Optimized: %zu 字节\\n\", sizeof(struct Optimized));",
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
        "detail": "printf(\"a 偏移：%zu\\n\", offsetof(struct Padded, a));",
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
        "detail": "printf(\"b 偏移：%zu\\n\", offsetof(struct Padded, b));",
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
        "detail": "printf(\"c 偏移：%zu\\n\", offsetof(struct Padded, c));",
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
        "detail": "return 0;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习结构体内存布局",
    "pitfalls": [
      "内存对齐",
      "sizeof 运算符",
      "填充字节"
    ],
    "transferQuestion": "你能用结构体组织哪些数据？",
    "miniExercise": "尝试定义一个表示学生信息的结构体"
  }
};\n