window.LESSON_DATA = {
  "meta": {
    "chapterId": "level1_types_overflow",
    "lessonId": "q016",
    "title": "位移与类型范围",
    "questionNum": 16,
    "tags": "位移、溢出、类型范围"
  },
  "codeLines": [
    "1 | #include <stdio.h>",
    "  2 | #include <stdint.h>",
    "  3 |",
    " 4 | #define BIT_7  (1 << 7)",
    " 5 | #define BIT_15 (1 << 15)",
    " 6 | #define BIT_31 (1 << 31)",
    " 7 |",
    " 8 | int main(void)",
    " 9 | {",
    "10 |     uint8_t  val8  = BIT_7;",
    "11 |     uint16_t val16 = BIT_15;",
    "12 |     uint32_t val32 = BIT_31;",
    "13 |",
    "14 |     printf(\"BIT_7:  0x%02X\\n\", val8);",
    "15 |     printf(\"BIT_15: 0x%04X\\n\", val16);",
    "16 |     printf(\"BIT_31: 0x%08X\\n\", val32);",
    "17 |",
    "18 |     return 0;",
    "19 | }"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "题目：位移与类型范围",
        "detail": "准备执行代码",
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
        "detail": "1 | #include <stdio.h>",
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
        "detail": "2 | #include <stdint.h>",
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
        "detail": "3 |",
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
        "detail": "4 | #define BIT_7  (1 << 7)",
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
        "detail": "5 | #define BIT_15 (1 << 15)",
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
        "detail": "6 | #define BIT_31 (1 << 31)",
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
        "detail": "7 |",
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
        "detail": "8 | int main(void)",
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
        "detail": "9 | {",
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
        "detail": "10 |     uint8_t  val8  = BIT_7;",
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
        "detail": "11 |     uint16_t val16 = BIT_15;",
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
        "detail": "12 |     uint32_t val32 = BIT_31;",
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
        "detail": "13 |",
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
        "detail": "14 |     printf(\"BIT_7:  0x%02X\\n\", val8);",
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
        "detail": "15 |     printf(\"BIT_15: 0x%04X\\n\", val16);",
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
        "detail": "16 |     printf(\"BIT_31: 0x%08X\\n\", val32);",
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
        "detail": "17 |",
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
        "detail": "18 |     return 0;",
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
        "detail": "19 | }",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习位移与类型范围",
    "pitfalls": [
      "忘记位移操作数是有符号int",
      "位移超过类型位数是未定义行为",
      "宏定义中的位移陷阱"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改代码，观察输出变化"
  },
  "hint": "1是int类型，1<<31会怎样？宏定义中的位移安全吗？",
  "analysis": "- 🔥 第4行：1<<7=128，安全\n- 🔥 第5行：1<<15=32768，安全\n- 🔥 第6行：**问题！** 1是int，1<<31溢出\n- 第6行：有符号int位移溢出是未定义行为\n- 第10行：赋值给uint8_t，取低8位=0x80\n- 第11行：赋值给uint16_t，可能得到0x8000或错误值\n- 第12行：赋值给uint32_t，结果不确定"
};
