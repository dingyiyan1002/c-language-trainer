window.LESSON_DATA = {
  "meta": {
    "chapterId": "interview",
    "lessonId": "interview-4",
    "title": "嵌入式面试题",
    "index": 4,
    "filename": "interview_004_interview-4.js",
    "keyPoints": [
      "volatile 作用",
      "中断处理",
      "位操作",
      "大小端"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <stdint.h>",
    "#define IS_BIG_ENDIAN() (*(uint16_t*)\"\\0\\x01\" == 0x0100)",
    "int check_endian(void) {",
    "    uint16_t x = 0x1234;",
    "    uint8_t *p = (uint8_t*)&x;",
    "    if (*p == 0x34) return 1; // 小端",
    "    return 0; // 大端",
    "}",
    "int main(void) {",
    "    printf(\"大端：%s\\n\", IS_BIG_ENDIAN() ? \"是\" : \"否\");",
    "    printf(\"检测方法：%s\\n\", check_endian() ? \"小端\" : \"大端\");",
    "    ",
    "    // 位操作",
    "    uint8_t flags = 0x05;",
    "    flags |= (1 << 2);  // 设置第 2 位",
    "    flags &= ~(1 << 0); // 清除第 0 位",
    "    printf(\"flags = 0x%02X\\n\", flags);",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：嵌入式面试题",
        "detail": "嵌入式岗位特有面试问题。",
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
        "detail": "#include <stdint.h>",
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
        "detail": "#define IS_BIG_ENDIAN() (*(uint16_t*)\"\\0\\x01\" == 0x0100)",
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
        "detail": "int check_endian(void) {",
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
        "detail": "uint16_t x = 0x1234;",
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
        "detail": "uint8_t *p = (uint8_t*)&x;",
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
        "detail": "if (*p == 0x34) return 1; // 小端",
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
        "detail": "return 0; // 大端",
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
      "line": 10,
      "vars": [],
      "explanation": {
        "text": "执行第11行",
        "detail": "printf(\"大端：%s\\n\", IS_BIG_ENDIAN() ? \"是\" : \"否\");",
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
        "detail": "printf(\"检测方法：%s\\n\", check_endian() ? \"小端\" : \"大端\");",
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
        "detail": "uint8_t flags = 0x05;",
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
        "detail": "flags |= (1 << 2);  // 设置第 2 位",
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
        "detail": "flags &= ~(1 << 0); // 清除第 0 位",
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
        "detail": "printf(\"flags = 0x%02X\\n\", flags);",
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
        "detail": "return 0;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习嵌入式面试题",
    "pitfalls": [
      "volatile 作用",
      "中断处理",
      "位操作"
    ],
    "transferQuestion": "面试中如何展示 C 语言能力？",
    "miniExercise": "准备 5 个常见 C 语言面试题"
  }
};
