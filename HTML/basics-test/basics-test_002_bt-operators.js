window.LESSON_DATA = {
  "meta": {
    "chapterId": "basics-test",
    "lessonId": "bt-operators",
    "title": "运算符",
    "keyPoints": [
      "运算符优先级",
      "短路求值",
      "位运算"
    ]
  },
  "codeLines": [
    "// 算术运算符",
    "int a = 10, b = 3;",
    "int sum    = a + b;   // 13 加",
    "int diff   = a - b;   // 7  减",
    "int prod   = a * b;   // 30 乘",
    "int quot   = a / b;   // 3  整除",
    "int rem    = a % b;   // 1  取余",
    "",
    "// 关系运算符 (结果为 1真 或 0假)",
    "int eq  = (a == b);  // 0",
    "int neq = (a != b);  // 1",
    "int lt  = (a < b);   // 0",
    "int gt  = (a > b);   // 1",
    "",
    "// 逻辑运算符",
    "int and = (a > 5 && b < 5);  // 1 && 1 = 1",
    "int or  = (a > 5 || b > 5);  // 1 || 0 = 1",
    "int not = !0;                 // 1  取反",
    "",
    "// 位运算符 (嵌入式常用)",
    "uint8_t x = 0x0F;    // 00001111",
    "uint8_t and_res = x & 0x0F;  // 0x0F 与",
    "uint8_t or_res  = x | 0x30;  // 0x3F 或",
    "uint8_t xor_res = x ^ 0x0F;  // 0x00 异或",
    "uint8_t not_res = ~x;         // 0xF0 取反",
    "uint8_t lsh = x << 2;         // 0x3C 左移2位",
    "uint8_t rsh = x >> 2;        // 0x03 右移2位",
    "",
    "// 赋值运算符",
    "a += 5;   // a = a + 5",
    "b -= 2;   // b = b - 2",
    "x &= 0x0F; // x = x & 0x0F",
    "",
    "// 条件运算符 (三元运算符)",
    "int max = (a > b) ? a : b;  // 取较大值"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：运算符",
        "detail": "C语言运算符测试  ```c // 算术运算符 int a = 10, b = 3; int sum    = a + b;   // 13 加 int diff   = a - b;   // 7  减 int prod   = a * b;   // 30 乘 int quot   = a / b;   // 3  整除 int rem    = a % b;   // 1  取余  // 关",
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
        "detail": "int a = 10, b = 3;",
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
        "detail": "int sum    = a + b;   // 13 加",
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
        "detail": "int diff   = a - b;   // 7  减",
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
        "detail": "int prod   = a * b;   // 30 乘",
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
        "detail": "int quot   = a / b;   // 3  整除",
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
        "detail": "int rem    = a % b;   // 1  取余",
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
        "detail": "int eq  = (a == b);  // 0",
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
        "detail": "int neq = (a != b);  // 1",
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
        "detail": "int lt  = (a < b);   // 0",
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
        "detail": "int gt  = (a > b);   // 1",
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
        "detail": "int and = (a > 5 && b < 5);  // 1 && 1 = 1",
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
        "detail": "int or  = (a > 5 || b > 5);  // 1 || 0 = 1",
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
        "detail": "int not = !0;                 // 1  取反",
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
        "detail": "uint8_t x = 0x0F;    // 00001111",
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
        "detail": "uint8_t and_res = x & 0x0F;  // 0x0F 与",
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
        "detail": "uint8_t or_res  = x | 0x30;  // 0x3F 或",
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
        "detail": "uint8_t xor_res = x ^ 0x0F;  // 0x00 异或",
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
        "detail": "uint8_t not_res = ~x;         // 0xF0 取反",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 25,
      "vars": [],
      "explanation": {
        "text": "执行第26行",
        "detail": "uint8_t lsh = x << 2;         // 0x3C 左移2位",
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
        "detail": "uint8_t rsh = x >> 2;        // 0x03 右移2位",
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
        "detail": "a += 5;   // a = a + 5",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 30,
      "vars": [],
      "explanation": {
        "text": "执行第31行",
        "detail": "b -= 2;   // b = b - 2",
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
        "detail": "x &= 0x0F; // x = x & 0x0F",
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
        "detail": "int max = (a > b) ? a : b;  // 取较大值",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习运算符",
    "pitfalls": [
      "运算符优先级",
      "短路求值",
      "位运算"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
