window.LESSON_DATA = {
  "meta": {
    "chapterId": "level1_printf",
    "lessonId": "q007",
    "title": "格式化宽度和对齐",
    "questionNum": 7,
    "tags": "printf、宽度、对齐、左对齐"
  },
  "codeLines": [
    "1 | #include <stdio.h>",
    " 2 | #include <stdint.h>",
    " 3 |",
    " 4 | int main(void)",
    " 5 | {",
    " 6 |     printf(\"%-10s %8s %6s\\n\", \"Device\", \"Value\", \"Unit\");",
    " 7 |     printf(\"%-10s %8u %6s\\n\", \"Temp\", 25, \"C\");",
    " 8 |     printf(\"%-10s %8u %6s\\n\", \"Humidity\", 65, \"%\");",
    " 9 |     printf(\"%-10s %8u %6s\\n\", \"Pressure\", 1013, \"hPa\");",
    "10 |",
    "11 |     return 0;",
    "12 | }"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "题目：格式化宽度和对齐",
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
        "detail": "6 |     printf(\"%-10s %8s %6s\\n\", \"Device\", \"Value\", \"Unit\");",
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
        "detail": "7 |     printf(\"%-10s %8u %6s\\n\", \"Temp\", 25, \"C\");",
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
        "detail": "8 |     printf(\"%-10s %8u %6s\\n\", \"Humidity\", 65, \"%\");",
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
        "detail": "9 |     printf(\"%-10s %8u %6s\\n\", \"Pressure\", 1013, \"hPa\");",
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
        "detail": "10 |",
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
        "detail": "11 |     return 0;",
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
        "detail": "12 | }",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习格式化宽度和对齐",
    "pitfalls": [
      "负号表示左对齐，正数（省略+号）表示右对齐",
      "宽度不足时按实际宽度输出，不会截断",
      "混淆宽度和精度"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改代码，观察输出变化"
  },
  "hint": "%-10s表示左对齐宽度10，%8s表示右对齐宽度8。",
  "analysis": "- 🔥 第6行：表头，%-10s左对齐10字符宽度，%8s右对齐8字符宽度\n- 第7行：Temp左对齐，25右对齐8位，C右对齐6位\n- 第8行：Humidity左对齐（刚好10字符），65右对齐\n- 第9行：Pressure左对齐，1013右对齐，hPa右对齐"
};
