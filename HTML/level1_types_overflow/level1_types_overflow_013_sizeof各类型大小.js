window.LESSON_DATA = {
  "meta": {
    "chapterId": "level1_types_overflow",
    "lessonId": "q013",
    "title": "sizeof各类型大小",
    "questionNum": 13,
    "tags": "sizeof、stdint类型、数据类型大小"
  },
  "codeLines": [
    "1 | #include <stdio.h>",
    " 2 | #include <stdint.h>",
    " 3 |",
    " 4 | int main(void)",
    " 5 | {",
    " 6 |     printf(\"uint8_t:  %zu bytes\\n\", sizeof(uint8_t));",
    " 7 |     printf(\"uint16_t: %zu bytes\\n\", sizeof(uint16_t));",
    " 8 |     printf(\"uint32_t: %zu bytes\\n\", sizeof(uint32_t));",
    " 9 |     printf(\"uint64_t: %zu bytes\\n\", sizeof(uint64_t));",
    "10 |     printf(\"int8_t:   %zu bytes\\n\", sizeof(int8_t));",
    "11 |     printf(\"int16_t:  %zu bytes\\n\", sizeof(int16_t));",
    "12 |     printf(\"int32_t:  %zu bytes\\n\", sizeof(int32_t));",
    "13 |     printf(\"int64_t:  %zu bytes\\n\", sizeof(int64_t));",
    "14 |     printf(\"pointer:  %zu bytes\\n\", sizeof(void *));",
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
        "text": "题目：sizeof各类型大小",
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
        "detail": "6 |     printf(\"uint8_t:  %zu bytes\\n\", sizeof(uint8_t));",
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
        "detail": "7 |     printf(\"uint16_t: %zu bytes\\n\", sizeof(uint16_t));",
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
        "detail": "8 |     printf(\"uint32_t: %zu bytes\\n\", sizeof(uint32_t));",
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
        "detail": "9 |     printf(\"uint64_t: %zu bytes\\n\", sizeof(uint64_t));",
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
        "detail": "10 |     printf(\"int8_t:   %zu bytes\\n\", sizeof(int8_t));",
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
        "detail": "11 |     printf(\"int16_t:  %zu bytes\\n\", sizeof(int16_t));",
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
        "detail": "12 |     printf(\"int32_t:  %zu bytes\\n\", sizeof(int32_t));",
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
        "detail": "13 |     printf(\"int64_t:  %zu bytes\\n\", sizeof(int64_t));",
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
        "detail": "14 |     printf(\"pointer:  %zu bytes\\n\", sizeof(void *));",
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
    "oneLiner": "学习sizeof各类型大小",
    "pitfalls": [
      "以为int一定是4字节（实际平台相关）",
      "忘记指针大小与平台相关",
      "用%zu打印size_t（不是%d）"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改代码，观察输出变化"
  },
  "hint": "stdint类型的大小是固定的，不随平台变化。指针大小呢？",
  "analysis": "- 🔥 第6行：uint8_t固定1字节，%zu打印size_t\n- 第7行：uint16_t固定2字节\n- 第8行：uint32_t固定4字节\n- 第9行：uint64_t固定8字节\n- 第10-13行：有符号版本大小相同\n- 🔥 第14行：指针大小取决于系统位数，64位系统是8字节"
};
