window.LESSON_DATA = {
  "meta": {
    "chapterId": "macro",
    "lessonId": "macro-1",
    "title": "#define 宏定义",
    "index": 1,
    "filename": "macro_001_macro-1.js",
    "keyPoints": [
      "#define",
      "宏替换",
      "带参宏",
      "宏陷阱"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#define PI 3.14159",
    "#define SQUARE(x) ((x) * (x))",
    "#define MAX(a, b) ((a) > (b) ? (a) : (b))",
    "#define MIN(a, b) ((a) < (b) ? (a) : (b))",
    "int main(void) {",
    "    printf(\"PI = %f\\n\", PI);",
    "    printf(\"SQUARE(5) = %d\\n\", SQUARE(5));",
    "    printf(\"MAX(3, 7) = %d\\n\", MAX(3, 7));",
    "    printf(\"MIN(10, 2) = %d\\n\", MIN(10, 2));",
    "    int x = 3;",
    "    printf(\"SQUARE(x+1) = %d\\n\", SQUARE(x+1));",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：#define 宏定义",
        "detail": "#define 定义宏，预处理器进行文本替换。",
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
        "detail": "#define PI 3.14159",
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
        "detail": "#define SQUARE(x) ((x) * (x))",
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
        "detail": "#define MAX(a, b) ((a) > (b) ? (a) : (b))",
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
        "detail": "#define MIN(a, b) ((a) < (b) ? (a) : (b))",
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
        "detail": "int main(void) {",
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
        "detail": "printf(\"PI = %f\\n\", PI);",
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
        "detail": "printf(\"SQUARE(5) = %d\\n\", SQUARE(5));",
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
        "detail": "printf(\"MAX(3, 7) = %d\\n\", MAX(3, 7));",
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
        "detail": "printf(\"MIN(10, 2) = %d\\n\", MIN(10, 2));",
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
        "detail": "int x = 3;",
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
        "detail": "printf(\"SQUARE(x+1) = %d\\n\", SQUARE(x+1));",
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
    "oneLiner": "学习#define 宏定义",
    "pitfalls": [
      "#define",
      "宏替换",
      "带参宏"
    ],
    "transferQuestion": "宏在哪些场景下不可替代？",
    "miniExercise": "编写一个安全的宏实现 swap 功能"
  }
};
