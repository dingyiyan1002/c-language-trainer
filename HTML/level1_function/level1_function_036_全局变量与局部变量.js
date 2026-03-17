window.LESSON_DATA = {
  "meta": {
    "chapterId": "level1_function",
    "lessonId": "q036",
    "title": "全局变量与局部变量",
    "questionNum": 36,
    "tags": "全局变量、局部变量、作用域"
  },
  "codeLines": [
    "1 | #include <stdio.h>",
    " 2 | #include <stdint.h>",
    " 3 |",
    " 4 | uint32_t g_device_status = 0;",
    " 5 |",
    " 6 | void set_status(uint32_t status)",
    " 7 | {",
    " 8 |     g_device_status = status;",
    " 9 | }",
    "10 |",
    "11 | int main(void)",
    "12 | {",
    "13 |     uint32_t local_status = 100;",
    "14 |",
    "15 |     printf(\"Global: %lu\\n\", g_device_status);",
    "16 |     set_status(50);",
    "17 |     printf(\"Global after set: %lu\\n\", g_device_status);",
    "18 |",
    "19 |     {",
    "20 |         uint32_t local_status = 200;",
    "21 |         printf(\"Inner local: %lu\\n\", local_status);",
    "22 |     }",
    "23 |",
    "24 |     printf(\"Outer local: %lu\\n\", local_status);",
    "25 |     return 0;",
    "26 | }"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "题目：全局变量与局部变量",
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
        "detail": "4 | uint32_t g_device_status = 0;",
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
        "detail": "6 | void set_status(uint32_t status)",
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
        "detail": "8 |     g_device_status = status;",
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
        "detail": "9 | }",
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
        "detail": "11 | int main(void)",
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
        "detail": "12 | {",
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
        "detail": "13 |     uint32_t local_status = 100;",
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
        "detail": "15 |     printf(\"Global: %lu\\n\", g_device_status);",
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
        "detail": "16 |     set_status(50);",
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
        "detail": "17 |     printf(\"Global after set: %lu\\n\", g_device_status);",
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
        "detail": "19 |     {",
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
        "detail": "20 |         uint32_t local_status = 200;",
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
        "detail": "21 |         printf(\"Inner local: %lu\\n\", local_status);",
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
        "detail": "22 |     }",
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
        "detail": "23 |",
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
        "detail": "24 |     printf(\"Outer local: %lu\\n\", local_status);",
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
        "detail": "25 |     return 0;",
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
        "detail": "26 | }",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习全局变量与局部变量",
    "pitfalls": [
      "同名变量遮蔽",
      "全局变量命名冲突",
      "忘记初始化"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改代码，观察输出变化"
  },
  "hint": "全局变量所有函数共享，局部变量只在定义的作用域内有效。",
  "analysis": "- 第4行：全局变量，所有函数可访问\n- 第6-9行：函数修改全局变量\n- 第13行：main的局部变量\n- 第15行：打印全局变量0\n- 第16行：设置全局变量为50\n- 第17行：打印全局变量50\n- 🔥 第19-22行：代码块内定义同名变量，遮蔽外层\n- 第21行：打印内层局部变量200\n- 第24行：打印外层局部变量100"
};
