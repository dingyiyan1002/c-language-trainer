window.LESSON_DATA = {
  "meta": {
    "chapterId": "interview",
    "lessonId": "interview-1",
    "title": "C 语言基础面试题",
    "index": 1,
    "filename": "interview_001_interview-1.js",
    "keyPoints": [
      "const 含义",
      "static 作用",
      "sizeof 与 strlen",
      "指针与数组"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <string.h>",
    "int main(void) {",
    "    // const 含义",
    "    const int a = 10;",
    "    int const b = 20;",
    "    const int *c = &a;",
    "    int * const d = &b;",
    "    ",
    "    // static 作用",
    "    static int count = 0;",
    "    count++;",
    "    printf(\"count = %d\\n\", count);",
    "    ",
    "    // sizeof vs strlen",
    "    char str[] = \"Hello\";",
    "    printf(\"sizeof(str) = %zu\\n\", sizeof(str));",
    "    printf(\"strlen(str) = %zu\\n\", strlen(str));",
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
        "text": "知识点：C 语言基础面试题",
        "detail": "C 语言基础是面试必考内容。",
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
        "detail": "int main(void) {",
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
        "detail": "const int a = 10;",
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
        "detail": "int const b = 20;",
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
        "detail": "const int *c = &a;",
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
        "detail": "int * const d = &b;",
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
        "detail": "static int count = 0;",
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
        "detail": "count++;",
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
        "detail": "printf(\"count = %d\\n\", count);",
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
        "detail": "char str[] = \"Hello\";",
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
        "detail": "printf(\"sizeof(str) = %zu\\n\", sizeof(str));",
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
        "detail": "printf(\"strlen(str) = %zu\\n\", strlen(str));",
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
        "detail": "return 0;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习C 语言基础面试题",
    "pitfalls": [
      "const 含义",
      "static 作用",
      "sizeof 与 strlen"
    ],
    "transferQuestion": "面试中如何展示 C 语言能力？",
    "miniExercise": "准备 5 个常见 C 语言面试题"
  }
};
