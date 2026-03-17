window.LESSON_DATA = {
  "meta": {
    "chapterId": "union",
    "lessonId": "union-3",
    "title": "匿名联合体与位域",
    "index": 3,
    "filename": "union_003_union-3.js",
    "keyPoints": [
      "匿名联合体",
      "位域定义",
      "硬件寄存器",
      "内存优化"
    ]
  },
  "codeLines": [
    "#include <stdio.h>\n#include <stdint.h>\n\n// 匿名联合体 (C11)\nstruct Packet {\n    uint8_t type;\n    union {\n        struct {\n            uint8_t x, y;\n        } pos;\n        struct {\n            uint16_t value;\n        } data;\n    };  // 匿名联合体，直接访问 pos/data\n};\n\n// 位域 - 硬件寄存器映射\nstruct ControlReg {\n    uint8_t enable : 1;    // 第 0 位\n    uint8_t mode : 2;      // 第 1-2 位\n    uint8_t speed : 3;     // 第 3-5 位\n    uint8_t reserved : 1;  // 第 6 位\n    uint8_t valid : 1;     // 第 7 位\n};\n\n// 状态寄存器\nstruct StatusReg {\n    uint16_t error : 4;\n    uint16_t warning : 4;\n    uint16_t ready : 1;\n    uint16_t busy : 1;\n    uint16_t reserved : 6;\n};\n\nint main(void) {\n    struct Packet p;\n    p.type = 1;\n    p.pos.x = 10;\n    p.pos.y = 20;\n    printf(\"位置：(%d, %d)",
    "\", p.pos.x, p.pos.y);\n    \n    // 位域操作\n    struct ControlReg ctrl = {0};\n    ctrl.enable = 1;\n    ctrl.mode = 2;\n    ctrl.speed = 5;\n    ctrl.valid = 1;\n    \n    printf(\"控制寄存器：0x%02X",
    "\", *(uint8_t*)&ctrl);\n    \n    return 0;\n}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：匿名联合体与位域",
        "detail": "匿名联合体简化访问，位域精确控制每一位，是嵌入式寄存器操作的核心技术。",
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
        "detail": "#include <stdio.h>\n#include <stdint.h>\n\n// 匿名联合体 (C11)\nstruct Packet {\n    uint8",
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
        "detail": "\", p.pos.x, p.pos.y);\n    \n    // 位域操作\n    struct ControlReg ctrl = {0};\n    ctr",
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
        "detail": "\", *(uint8_t*)&ctrl);\n    \n    return 0;\n}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习匿名联合体与位域",
    "pitfalls": [
      "匿名联合体",
      "位域定义",
      "硬件寄存器"
    ],
    "transferQuestion": "联合体在哪些场景下比结构体更合适？",
    "miniExercise": "尝试用联合体实现一个支持多种类型的变量"
  }
};\n