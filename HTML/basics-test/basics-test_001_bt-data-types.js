window.LESSON_DATA = {
  "meta": {
    "chapterId": "basics-test",
    "lessonId": "bt-data-types",
    "title": "数据类型",
    "keyPoints": [
      "数据类型取值范围",
      "有符号无符号",
      "stdint类型"
    ]
  },
  "codeLines": [
    "// 常用数据类型示例",
    "int     i = 10;        // 有符号整型 (通常4字节)",
    "char    c = 'A';       // 字符 (1字节)",
    "float   f = 3.14f;     // 单精度浮点",
    "double  d = 3.14159;    // 双精度浮点",
    "",
    "// 嵌入式常用定宽类型",
    "#include <stdint.h>",
    "uint8_t  u8 = 255;      // 无符号8位 (0~255)",
    "uint16_t u16 = 65535;   // 无符号16位 (0~65535)",
    "uint32_t u32 = 4294967295; // 无符号32位",
    "int32_t  s32 = -1;      // 有符号32位",
    "",
    "// 有符号 vs 无符号",
    "signed   int   s_i = -1;    // 有符号 (最高位为符号位)",
    "unsigned int   u_i = 4294967295; // 无符号 (全部是数值位)"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：数据类型",
        "detail": "C语言基础数据类型测试  ```c // 常用数据类型示例 int     i = 10;        // 有符号整型 (通常4字节) char    c = 'A';       // 字符 (1字节) float   f = 3.14f;     // 单精度浮点 double  d = 3.14159;    // 双精度浮点  // 嵌入式常用定宽类型 #include <stdint",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    },
    {
      "line": 1,
      "vars": [],
      "explanation": {
        "text": "执行第2行",
        "detail": "int     i = 10;        // 有符号整型 (通常4字节)",
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
        "detail": "char    c = 'A';       // 字符 (1字节)",
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
        "detail": "float   f = 3.14f;     // 单精度浮点",
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
        "detail": "double  d = 3.14159;    // 双精度浮点",
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
        "detail": "uint8_t  u8 = 255;      // 无符号8位 (0~255)",
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
        "detail": "uint16_t u16 = 65535;   // 无符号16位 (0~65535)",
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
        "detail": "uint32_t u32 = 4294967295; // 无符号32位",
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
        "detail": "int32_t  s32 = -1;      // 有符号32位",
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
        "detail": "signed   int   s_i = -1;    // 有符号 (最高位为符号位)",
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
        "detail": "unsigned int   u_i = 4294967295; // 无符号 (全部是数值位)",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习数据类型",
    "pitfalls": [
      "数据类型取值范围",
      "有符号无符号",
      "stdint类型"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
