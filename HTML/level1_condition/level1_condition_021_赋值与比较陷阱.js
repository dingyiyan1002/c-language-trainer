window.LESSON_DATA = {
  "meta": {
    "chapterId": "level1_condition",
    "lessonId": "q021",
    "title": "赋值与比较陷阱",
    "questionNum": 21,
    "tags": "=和==、赋值表达式、常见bug"
  },
  "codeLines": [
    "1 | #include <stdio.h>",
    " 2 | #include <stdint.h>",
    " 3 |",
    " 4 | #define MODE_A  1",
    " 5 | #define MODE_B  2",
    " 6 |",
    " 7 | int main(void)",
    " 8 | {",
    " 9 |     uint8_t mode = MODE_A;",
    "10 |     uint8_t status = 0;",
    "11 |",
    "12 |     if (mode = MODE_B) {",
    "13 |         status = 1;",
    "14 |         printf(\"Mode B\\n\");",
    "15 |     } else {",
    "16 |         status = 0;",
    "17 |         printf(\"Mode A\\n\");",
    "18 |     }",
    "19 |",
    "20 |     printf(\"mode=%u, status=%u\\n\", mode, status);",
    "21 |     return 0;",
    "22 | }"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "题目：赋值与比较陷阱",
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
        "detail": "4 | #define MODE_A  1",
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
        "detail": "5 | #define MODE_B  2",
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
        "detail": "6 |",
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
        "detail": "7 | int main(void)",
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
        "detail": "8 | {",
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
        "detail": "9 |     uint8_t mode = MODE_A;",
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
        "detail": "10 |     uint8_t status = 0;",
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
        "detail": "12 |     if (mode = MODE_B) {",
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
        "detail": "13 |         status = 1;",
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
        "detail": "14 |         printf(\"Mode B\\n\");",
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
        "detail": "15 |     } else {",
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
        "detail": "16 |         status = 0;",
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
        "detail": "17 |         printf(\"Mode A\\n\");",
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
        "detail": "18 |     }",
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
        "detail": "19 |",
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
        "detail": "20 |     printf(\"mode=%u, status=%u\\n\", mode, status);",
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
        "detail": "21 |     return 0;",
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
        "detail": "22 | }",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习赋值与比较陷阱",
    "pitfalls": [
      "=和==混淆",
      "忽略编译器警告",
      "条件中修改变量"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改代码，观察输出变化"
  },
  "hint": "仔细看第12行，是=还是==？这是经典bug！",
  "analysis": "- 第9行：mode初始值为MODE_A=1\n- 🔥 第12行：**陷阱！** 这是赋值，不是比较\n- 第12行：mode被赋值为MODE_B=2\n- 第12行：赋值表达式值为2，非零为真\n- 第13行：status=1\n- 第14行：打印\"Mode B\"（但原本mode是MODE_A！）\n- 第20行：确认mode被改成了2"
};
