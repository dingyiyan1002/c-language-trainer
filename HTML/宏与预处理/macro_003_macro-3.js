window.LESSON_DATA = {
  "meta": {
    "chapterId": "macro",
    "lessonId": "macro-3",
    "title": "高级宏技巧",
    "index": 3,
    "filename": "macro_003_macro-3.js",
    "keyPoints": [
      "#运算符",
      "##连接符",
      "__VA_ARGS__",
      "do-while(0)"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <string.h>",
    "#define STR(x) #x",
    "#define CONCAT(a, b) a##b",
    "#define PRINT_VAR(var) printf(#var \" = %d\\n\", var)",
    "#define LOG(msg, ...) printf(\"[LOG] \" msg \"\\n\", ##__VA_ARGS__)",
    "#define SAFE_CALL(func) do { if ((func) != 0) printf(\"错误\\n\"); } while(0)",
    "int main(void) {",
    "    printf(\"STR(Hello) = %s\\n\", STR(Hello));",
    "    int var123 = 456;",
    "    PRINT_VAR(var123);",
    "    LOG(\"测试消息，值=%d\", 100);",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：高级宏技巧",
        "detail": "高级宏技巧实现强大功能。",
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
      "line": 1,
      "vars": [],
      "explanation": {
        "text": "执行第2行",
        "detail": "#include <string.h>",
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
        "detail": "#define STR(x) #x",
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
        "detail": "#define CONCAT(a, b) a##b",
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
        "detail": "#define PRINT_VAR(var) printf(#var \" = %d\\n\", var)",
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
        "detail": "#define LOG(msg, ...) printf(\"[LOG] \" msg \"\\n\", ##__VA_ARGS__)",
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
        "detail": "#define SAFE_CALL(func) do { if ((func) != 0) printf(\"错误\\n\"); } while(0)",
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
        "detail": "int main(void) {",
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
        "detail": "printf(\"STR(Hello) = %s\\n\", STR(Hello));",
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
        "detail": "int var123 = 456;",
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
        "detail": "PRINT_VAR(var123);",
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
        "detail": "LOG(\"测试消息，值=%d\", 100);",
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
        "detail": "return 0;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习高级宏技巧",
    "pitfalls": [
      "#运算符",
      "##连接符",
      "__VA_ARGS__"
    ],
    "transferQuestion": "宏在哪些场景下不可替代？",
    "miniExercise": "编写一个安全的宏实现 swap 功能"
  }
};
