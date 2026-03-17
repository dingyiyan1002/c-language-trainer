window.LESSON_DATA = {
  "meta": {
    "chapterId": "file",
    "lessonId": "file-3",
    "title": "格式化文件读写",
    "index": 3,
    "filename": "file_003_file-3.js",
    "keyPoints": [
      "fprintf",
      "fscanf",
      "格式化输出",
      "格式化输入"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "int main(void) {",
    "    FILE *fp = fopen(\"data.txt\", \"w\");",
    "    int age = 25;",
    "    float score = 95.5f;",
    "    char name[] = \"张三\";",
    "    fprintf(fp, \"%s %d %.1f\\n\", name, age, score);",
    "    fclose(fp);",
    "    ",
    "    fp = fopen(\"data.txt\", \"r\");",
    "    char n[50];",
    "    int a;",
    "    float s;",
    "    fscanf(fp, \"%s %d %f\", n, &a, &s);",
    "    printf(\"姓名：%s, 年龄：%d, 分数：%.1f\\n\", n, a, s);",
    "    fclose(fp);",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：格式化文件读写",
        "detail": "fprintf 和 fscanf 用于格式化读写。",
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
        "detail": "int main(void) {",
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
        "detail": "FILE *fp = fopen(\"data.txt\", \"w\");",
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
        "detail": "int age = 25;",
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
        "detail": "float score = 95.5f;",
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
        "detail": "char name[] = \"张三\";",
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
        "detail": "fprintf(fp, \"%s %d %.1f\\n\", name, age, score);",
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
        "detail": "fclose(fp);",
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
        "detail": "fp = fopen(\"data.txt\", \"r\");",
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
        "detail": "char n[50];",
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
        "detail": "int a;",
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
        "detail": "float s;",
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
        "detail": "fscanf(fp, \"%s %d %f\", n, &a, &s);",
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
        "detail": "printf(\"姓名：%s, 年龄：%d, 分数：%.1f\\n\", n, a, s);",
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
        "detail": "fclose(fp);",
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
        "detail": "return 0;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习格式化文件读写",
    "pitfalls": [
      "fprintf",
      "fscanf",
      "格式化输出"
    ],
    "transferQuestion": "文件操作在哪些场景下使用？",
    "miniExercise": "实现一个简单的文件复制程序"
  }
};
