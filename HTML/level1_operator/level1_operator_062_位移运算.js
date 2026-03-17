window.LESSON_DATA = {
  "meta": {
    "chapterId": "level1_operator",
    "lessonId": "q062",
    "title": "位移运算",
    "questionNum": 62,
    "tags": "<<、>>、位移、乘除"
  },
  "codeLines": [
    "1 | #include <stdio.h>",
    " 2 | #include <stdint.h>",
    " 3 |",
    " 4 | int main(void)",
    " 5 | {",
    " 6 |     uint8_t value = 0x05;",
    " 7 |",
    " 8 |     printf(\"value << 1 = 0x%02X\\n\", value << 1);",
    " 9 |     printf(\"value << 2 = 0x%02X\\n\", value << 2);",
    "10 |     printf(\"value << 4 = 0x%02X\\n\", value << 4);",
    "11 |",
    "12 |     uint16_t packed = (value << 8) | value;",
    "13 |     printf(\"packed = 0x%04X\\n\", packed);",
    "14 |",
    "15 |     return 0;",
    "16 | }"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "题目：位移运算",
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
        "detail": "4 | int main(void)",
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
        "detail": "5 | {",
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
        "detail": "6 |     uint8_t value = 0x05;",
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
        "detail": "8 |     printf(\"value << 1 = 0x%02X\\n\", value << 1);",
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
        "detail": "9 |     printf(\"value << 2 = 0x%02X\\n\", value << 2);",
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
        "detail": "10 |     printf(\"value << 4 = 0x%02X\\n\", value << 4);",
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
        "detail": "12 |     uint16_t packed = (value << 8) | value;",
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
        "detail": "13 |     printf(\"packed = 0x%04X\\n\", packed);",
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
        "detail": "14 |",
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
        "detail": "15 |     return 0;",
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
        "detail": "16 | }",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习位移运算",
    "pitfalls": [
      "移位溢出",
      "有符号数右移",
      "移位数为负或过大"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改代码，观察输出变化"
  },
  "hint": "左移n位等于乘以2^n，右移n位等于除以2^n。",
  "analysis": "- 第6行：初始值0x05\n- 第8行：左移1位，0x0A\n- 第9行：左移2位，0x14\n- 第10行：左移4位，0x50\n- 🔥 第12行：组合成16位数据0x0505"
};
