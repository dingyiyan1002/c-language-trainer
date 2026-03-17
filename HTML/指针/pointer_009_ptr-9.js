window.LESSON_DATA = {
  "meta": {
    "chapterId": "pointer",
    "lessonId": "ptr-9",
    "title": "指针与字符串",
    "index": 9,
    "filename": "pointer_009_ptr-9.js",
    "keyPoints": [
      "字符串字面量",
      "字符指针",
      "字符数组"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <string.h>",
    "int main(void) {",
    "    char *s1 = \"Hello\";",
    "    char s2[] = \"Hello\";",
    "    s2[0] = 'h';",
    "    printf(\"s2 = %s\\n\", s2);",
    "    char *fruits[] = {\"Apple\", \"Banana\", \"Cherry\"};",
    "    for (int i = 0; i < 3; i++) printf(\"%s\\n\", fruits[i]);",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：指针与字符串",
        "detail": "字符串字面量存储在只读区。",
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
      "line": 3,
      "vars": [],
      "explanation": {
        "text": "执行第4行",
        "detail": "char *s1 = \"Hello\";",
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
        "detail": "char s2[] = \"Hello\";",
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
        "detail": "s2[0] = 'h';",
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
        "detail": "printf(\"s2 = %s\\n\", s2);",
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
        "detail": "char *fruits[] = {\"Apple\", \"Banana\", \"Cherry\"};",
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
        "detail": "for (int i = 0; i < 3; i++) printf(\"%s\\n\", fruits[i]);",
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
        "detail": "return 0;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习指针与字符串",
    "pitfalls": [
      "字符串字面量",
      "字符指针",
      "字符数组"
    ],
    "transferQuestion": "指针在哪些场景下必不可少？",
    "miniExercise": "尝试用指针实现两个变量交换"
  }
};
