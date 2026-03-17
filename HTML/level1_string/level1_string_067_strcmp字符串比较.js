window.LESSON_DATA = {
  "meta": {
    "chapterId": "level1_string",
    "lessonId": "q067",
    "title": "strcmp字符串比较",
    "questionNum": 67,
    "tags": "strcmp、字符串比较、返回值"
  },
  "codeLines": [
    "1 | #include <stdio.h>",
    " 2 | #include <stdint.h>",
    " 3 | #include <string.h>",
    " 4 |",
    " 5 | int main(void)",
    " 6 | {",
    " 7 |     char cmd1[] = \"START\";",
    " 8 |     char cmd2[] = \"START\";",
    " 9 |     char cmd3[] = \"STOP\";",
    "10 |     char cmd4[] = \"STATUS\";",
    "11 |",
    "12 |     printf(\"cmd1 vs cmd2: %d\\n\", strcmp(cmd1, cmd2));",
    "13 |     printf(\"cmd1 vs cmd3: %d\\n\", strcmp(cmd1, cmd3));",
    "14 |     printf(\"cmd3 vs cmd1: %d\\n\", strcmp(cmd3, cmd1));",
    "15 |     printf(\"cmd1 vs cmd4: %d\\n\", strcmp(cmd1, cmd4));",
    "16 |",
    "17 |     return 0;",
    "18 | }"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "题目：strcmp字符串比较",
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
        "detail": "3 | #include <string.h>",
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
        "detail": "4 |",
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
        "detail": "5 | int main(void)",
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
        "detail": "6 | {",
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
        "detail": "7 |     char cmd1[] = \"START\";",
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
        "detail": "8 |     char cmd2[] = \"START\";",
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
        "detail": "9 |     char cmd3[] = \"STOP\";",
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
        "detail": "10 |     char cmd4[] = \"STATUS\";",
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
        "detail": "12 |     printf(\"cmd1 vs cmd2: %d\\n\", strcmp(cmd1, cmd2));",
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
        "detail": "13 |     printf(\"cmd1 vs cmd3: %d\\n\", strcmp(cmd1, cmd3));",
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
        "detail": "14 |     printf(\"cmd3 vs cmd1: %d\\n\", strcmp(cmd3, cmd1));",
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
        "detail": "15 |     printf(\"cmd1 vs cmd4: %d\\n\", strcmp(cmd1, cmd4));",
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
        "detail": "16 |",
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
        "detail": "17 |     return 0;",
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
        "detail": "18 | }",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习strcmp字符串比较",
    "pitfalls": [
      "用==比较字符串（比较的是地址）",
      "返回值含义混淆",
      "大小写敏感"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改代码，观察输出变化"
  },
  "hint": "strcmp返回0表示相等，负数表示小于，正数表示大于。",
  "analysis": "- 第7-10行：定义四个命令字符串\n- 🔥 第12行：相同字符串比较，返回0\n- 第13行：START < STOP，返回负数\n- 第14行：STOP > START，返回正数\n- 第15行：START < STATUS，返回负数"
};
