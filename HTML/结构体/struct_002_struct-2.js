window.LESSON_DATA = {
  "meta": {
    "chapterId": "struct",
    "lessonId": "struct-2",
    "title": "结构体初始化与访问",
    "index": 2,
    "filename": "struct_002_struct-2.js",
    "keyPoints": [
      "指定初始化器",
      "嵌套结构体",
      "结构体数组",
      "成员访问"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "",
    "struct Date {",
    "    int year;",
    "    int month;",
    "    int day;",
    "};",
    "",
    "struct Employee {",
    "    int id;",
    "    char name[50];",
    "    struct Date hire_date;",
    "    float salary;",
    "};",
    "",
    "int main(void) {",
    "    // C99 指定初始化器",
    "    struct Date d1 = {.year = 2024, .month = 3, .day = 15};",
    "    ",
    "    // 嵌套结构体初始化",
    "    struct Employee emp = {",
    "        .id = 1001,",
    "        .name = \"张三\",",
    "        .hire_date = {.year = 2023, .month = 6, .day = 1},",
    "        .salary = 8000.0f",
    "    };",
    "    ",
    "    // 结构体数组",
    "    struct Employee team[2] = {",
    "        {1001, \"张三\", {2023, 6, 1}, 8000.0f},",
    "        {1002, \"李四\", {2022, 3, 15}, 9000.0f}",
    "    };",
    "    ",
    "    printf(\"员工：%s, 入职：%d-%02d-%02d\\n\", ",
    "           emp.name, emp.hire_date.year, ",
    "           emp.hire_date.month, emp.hire_date.day);",
    "    ",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：结构体初始化与访问",
        "detail": "结构体支持嵌套、数组和指定初始化器，是组织复杂数据的核心工具。",
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
        "detail": "#include <stdio.h>",
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
        "detail": "struct Date {",
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
        "detail": "int year;",
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
        "detail": "int month;",
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
        "detail": "int day;",
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
        "detail": "};",
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
        "detail": "struct Employee {",
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
        "detail": "int id;",
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
        "detail": "char name[50];",
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
        "detail": "struct Date hire_date;",
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
        "detail": "float salary;",
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
        "detail": "};",
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
        "detail": "int main(void) {",
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
        "detail": "struct Date d1 = {.year = 2024, .month = 3, .day = 15};",
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
        "detail": "struct Employee emp = {",
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
        "detail": ".id = 1001,",
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
        "detail": ".name = \"张三\",",
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
        "detail": ".hire_date = {.year = 2023, .month = 6, .day = 1},",
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
        "detail": ".salary = 8000.0f",
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
        "detail": "};",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 28,
      "vars": [],
      "explanation": {
        "text": "执行第29行",
        "detail": "struct Employee team[2] = {",
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
        "detail": "{1001, \"张三\", {2023, 6, 1}, 8000.0f},",
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
        "detail": "{1002, \"李四\", {2022, 3, 15}, 9000.0f}",
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
        "detail": "};",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 33,
      "vars": [],
      "explanation": {
        "text": "执行第34行",
        "detail": "printf(\"员工：%s, 入职：%d-%02d-%02d\\n\",",
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
        "detail": "emp.name, emp.hire_date.year,",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 35,
      "vars": [],
      "explanation": {
        "text": "执行第36行",
        "detail": "emp.hire_date.month, emp.hire_date.day);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 37,
      "vars": [],
      "explanation": {
        "text": "执行第38行",
        "detail": "return 0;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 38,
      "vars": [],
      "explanation": {
        "text": "执行第39行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习结构体初始化与访问",
    "pitfalls": [
      "指定初始化器",
      "嵌套结构体",
      "结构体数组"
    ],
    "transferQuestion": "你能用结构体组织哪些数据？",
    "miniExercise": "尝试定义一个表示学生信息的结构体"
  }
};\n