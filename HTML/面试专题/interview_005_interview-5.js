window.LESSON_DATA = {
  "meta": {
    "chapterId": "interview",
    "lessonId": "interview-5",
    "title": "代码阅读与改错",
    "index": 5,
    "filename": "interview_005_interview-5.js",
    "keyPoints": [
      "代码审查",
      "常见错误",
      "边界条件",
      "代码规范"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <string.h>",
    "int buggy_strcmp(const char* s1, const char* s2) {",
    "    // Bug: 没有检查 NULL",
    "    while (*s1 == *s2) {",
    "        if (*s1 == '\\0') return 0;",
    "        s1++; s2++;",
    "    }",
    "    return 1;",
    "}",
    "int safe_strcmp(const char* s1, const char* s2) {",
    "    if (!s1 || !s2) return -1;",
    "    while (*s1 && *s2 && *s1 == *s2) {",
    "        s1++; s2++;",
    "    }",
    "    return *s1 - *s2;",
    "}",
    "int main(void) {",
    "    printf(\"strcmp(\"abc\", \"abc\") = %d\\n\", safe_strcmp(\"abc\", \"abc\"));",
    "    printf(\"strcmp(\"abc\", \"abd\") = %d\\n\", safe_strcmp(\"abc\", \"abd\"));",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：代码阅读与改错",
        "detail": "代码阅读能力是工程师基本素养。",
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
        "detail": "int buggy_strcmp(const char* s1, const char* s2) {",
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
        "detail": "while (*s1 == *s2) {",
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
        "detail": "if (*s1 == '\\0') return 0;",
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
        "detail": "s1++; s2++;",
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
        "detail": "}",
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
        "detail": "return 1;",
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
        "detail": "}",
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
        "detail": "int safe_strcmp(const char* s1, const char* s2) {",
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
        "detail": "if (!s1 || !s2) return -1;",
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
        "detail": "while (*s1 && *s2 && *s1 == *s2) {",
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
        "detail": "s1++; s2++;",
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
        "detail": "}",
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
        "detail": "return *s1 - *s2;",
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
        "detail": "}",
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
        "detail": "int main(void) {",
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
        "detail": "printf(\"strcmp(\"abc\", \"abc\") = %d\\n\", safe_strcmp(\"abc\", \"abc\"));",
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
        "detail": "printf(\"strcmp(\"abc\", \"abd\") = %d\\n\", safe_strcmp(\"abc\", \"abd\"));",
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
        "detail": "return 0;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习代码阅读与改错",
    "pitfalls": [
      "代码审查",
      "常见错误",
      "边界条件"
    ],
    "transferQuestion": "面试中如何展示 C 语言能力？",
    "miniExercise": "准备 5 个常见 C 语言面试题"
  }
};
