window.LESSON_DATA = {
  "meta": {
    "chapterId": "union",
    "lessonId": "union-2",
    "title": "联合体实战应用",
    "index": 2,
    "filename": "union_002_union-2.js",
    "keyPoints": [
      "类型双关",
      "变体数据",
      "网络协议",
      "内存视图"
    ]
  },
  "codeLines": [
    "#include <stdio.h>\n#include <stdint.h>\n\n// 类型双关 - 查看浮点数二进制表示\nunion FloatBits {\n    float f;\n    uint32_t bits;\n};\n\n// 变体数据类型\nenum ValueType { TYPE_INT, TYPE_FLOAT, TYPE_STRING };\n\nstruct Variant {\n    enum ValueType type;\n    union {\n        int i;\n        float f;\n        char *str;\n    } data;\n};\n\n// 网络协议 - IP 地址\nunion IPAddress {\n    uint32_t value;\n    struct {\n        uint8_t a, b, c, d;\n    } bytes;\n};\n\nint main(void) {\n    // 浮点数二进制表示\n    union FloatBits fb;\n    fb.f = 1.0f;\n    printf(\"1.0f 的二进制：0x%08X",
    "\", fb.bits);\n    \n    // 变体数据\n    struct Variant v1 = {.type = TYPE_INT, .data.i = 42};\n    struct Variant v2 = {.type = TYPE_FLOAT, .data.f = 3.14f};\n    \n    printf(\"v1: %d",
    "\", v1.data.i);\n    printf(\"v2: %f",
    "\", v2.data.f);\n    \n    // IP 地址\n    union IPAddress ip;\n    ip.bytes.a = 192;\n    ip.bytes.b = 168;\n    ip.bytes.c = 1;\n    ip.bytes.d = 1;\n    \n    printf(\"IP: %d.%d.%d.%d (0x%08X)",
    "\", \n           ip.bytes.a, ip.bytes.b, ip.bytes.c, ip.bytes.d,\n           ip.value);\n    \n    return 0;\n}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：联合体实战应用",
        "detail": "联合体用于类型双关、变体数据、网络协议等场景，节省内存且灵活。",
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
        "detail": "#include <stdio.h>\n#include <stdint.h>\n\n// 类型双关 - 查看浮点数二进制表示\nunion FloatBits {\n ",
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
        "detail": "\", fb.bits);\n    \n    // 变体数据\n    struct Variant v1 = {.type = TYPE_INT, .data.i",
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
        "detail": "\", v1.data.i);\n    printf(\"v2: %f",
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
        "detail": "\", v2.data.f);\n    \n    // IP 地址\n    union IPAddress ip;\n    ip.bytes.a = 192;\n ",
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
        "detail": "\", \n           ip.bytes.a, ip.bytes.b, ip.bytes.c, ip.bytes.d,\n           ip.val",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习联合体实战应用",
    "pitfalls": [
      "类型双关",
      "变体数据",
      "网络协议"
    ],
    "transferQuestion": "联合体在哪些场景下比结构体更合适？",
    "miniExercise": "尝试用联合体实现一个支持多种类型的变量"
  }
};\n