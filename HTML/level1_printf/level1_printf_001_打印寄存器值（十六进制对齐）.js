window.LESSON_DATA = {
  "meta": {
    "chapterId": "level1_printf",
    "lessonId": "q001",
    "title": "打印寄存器值（十六进制对齐）",
    "questionNum": 1,
    "tags": "printf、%02X、十六进制"
  },
  "codeLines": [
    "1 | #include <stdio.h>",
    " 2 | #include <stdint.h>",
    " 3 |",
    " 4 | #define REG_BASE_ADDR  0x40000000",
    " 5 |",
    " 6 | int main(void)",
    " 7 | {",
    " 8 |     uint32_t gpio_reg = 0x1234ABCD;",
    " 9 |     uint32_t uart_reg = 0x0056;",
    "10 |     uint32_t spi_reg  = 0xFF;",
    "11 |",
    "12 |     printf(\"GPIO: 0x%08X\\n\", gpio_reg);",
    "13 |     printf(\"UART: 0x%08X\\n\", uart_reg);",
    "14 |     printf(\"SPI:  0x%08X\\n\", spi_reg);",
    "15 |",
    "16 |     return 0;",
    "17 | }"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "题目：打印寄存器值（十六进制对齐）",
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
        "detail": "4 | #define REG_BASE_ADDR  0x40000000",
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
        "detail": "5 |",
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
        "detail": "6 | int main(void)",
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
        "detail": "7 | {",
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
        "detail": "8 |     uint32_t gpio_reg = 0x1234ABCD;",
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
        "detail": "9 |     uint32_t uart_reg = 0x0056;",
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
        "detail": "10 |     uint32_t spi_reg  = 0xFF;",
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
        "detail": "11 |",
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
        "detail": "12 |     printf(\"GPIO: 0x%08X\\n\", gpio_reg);",
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
        "detail": "13 |     printf(\"UART: 0x%08X\\n\", uart_reg);",
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
        "detail": "14 |     printf(\"SPI:  0x%08X\\n\", spi_reg);",
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
        "detail": "16 |     return 0;",
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
        "detail": "17 | }",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习打印寄存器值（十六进制对齐）",
    "pitfalls": [
      "%x和%X的区别（小写ab vs 大写AB）",
      "%08X和%8X的区别（补0 vs 补空格）"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改代码，观察输出变化"
  },
  "hint": "%08X中的0、8、X分别代表什么意思？",
  "analysis": "- 第4行：宏定义寄存器基地址，实际项目中常用\n- 第8行：GPIO寄存器值，32位完整数据\n- 第9行：UART寄存器值，只有低16位有效\n- 第10行：SPI寄存器值，只有低8位有效\n- 🔥 第12行：%08X → 0表示补零，8表示宽度8位，X表示大写十六进制\n- 第13行：0x0056补零后变成0x00000056\n- 第14行：0xFF补零后变成0x000000FF"
};
