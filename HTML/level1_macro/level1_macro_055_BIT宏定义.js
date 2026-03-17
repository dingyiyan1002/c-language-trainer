window.LESSON_DATA = {
  "meta": {
    "chapterId": "level1_macro",
    "lessonId": "q055",
    "title": "BIT宏定义",
    "questionNum": 55,
    "tags": "BIT宏、位操作、寄存器"
  },
  "codeLines": [
    "1 | #include <stdio.h>",
    " 2 | #include <stdint.h>",
    " 3 |",
    " 4 | #define BIT(n)     (1U << (n))",
    " 5 | #define SET_BIT(reg, n)    ((reg) |= BIT(n))",
    " 6 | #define CLEAR_BIT(reg, n)  ((reg) &= ~BIT(n))",
    " 7 | #define READ_BIT(reg, n)   (((reg) >> (n)) & 1)",
    " 8 |",
    " 9 | int main(void)",
    "10 | {",
    "11 |     uint8_t gpio_reg = 0x00;",
    "12 |",
    "13 |     SET_BIT(gpio_reg, 3);",
    "14 |     printf(\"After SET_BIT(3): 0x%02X\\n\", gpio_reg);",
    "15 |",
    "16 |     SET_BIT(gpio_reg, 5);",
    "17 |     printf(\"After SET_BIT(5): 0x%02X\\n\", gpio_reg);",
    "18 |",
    "19 |     printf(\"BIT(3) = %u\\n\", READ_BIT(gpio_reg, 3));",
    "20 |     printf(\"BIT(5) = %u\\n\", READ_BIT(gpio_reg, 5));",
    "21 |",
    "22 |     return 0;",
    "23 | }"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "题目：BIT宏定义",
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
        "detail": "4 | #define BIT(n)     (1U << (n))",
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
        "detail": "5 | #define SET_BIT(reg, n)    ((reg) |= BIT(n))",
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
        "detail": "6 | #define CLEAR_BIT(reg, n)  ((reg) &= ~BIT(n))",
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
        "detail": "7 | #define READ_BIT(reg, n)   (((reg) >> (n)) & 1)",
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
        "detail": "8 |",
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
        "detail": "9 | int main(void)",
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
        "detail": "10 | {",
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
        "detail": "11 |     uint8_t gpio_reg = 0x00;",
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
        "detail": "12 |",
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
        "detail": "13 |     SET_BIT(gpio_reg, 3);",
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
        "detail": "14 |     printf(\"After SET_BIT(3): 0x%02X\\n\", gpio_reg);",
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
        "detail": "15 |",
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
        "detail": "16 |     SET_BIT(gpio_reg, 5);",
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
        "detail": "17 |     printf(\"After SET_BIT(5): 0x%02X\\n\", gpio_reg);",
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
        "detail": "18 |",
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
        "detail": "19 |     printf(\"BIT(3) = %u\\n\", READ_BIT(gpio_reg, 3));",
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
        "detail": "20 |     printf(\"BIT(5) = %u\\n\", READ_BIT(gpio_reg, 5));",
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
        "detail": "21 |",
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
        "detail": "22 |     return 0;",
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
        "detail": "23 | }",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习BIT宏定义",
    "pitfalls": [
      "忘记U后缀",
      "参数有副作用",
      "位号超出范围"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改代码，观察输出变化"
  },
  "hint": "BIT(n)生成第n位的掩码，1U确保无符号。",
  "analysis": "- 第4行：BIT宏生成位掩码，1U保证无符号\n- 第5行：设置位宏\n- 第6行：清除位宏\n- 第7行：读取位宏\n- 第13行：设置第3位\n- 第16行：设置第5位\n- 第19-20行：读取位值"
};
