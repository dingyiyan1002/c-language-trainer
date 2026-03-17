window.LESSON_DATA = {
  "meta": {
    "chapterId": "file",
    "lessonId": "file-5",
    "title": "文件定位与随机访问",
    "index": 5,
    "filename": "file_005_file-5.js",
    "keyPoints": [
      "fseek",
      "ftell",
      "rewind",
      "随机访问"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "int main(void) {",
    "    FILE *fp = fopen(\"data.bin\", \"wb\");",
    "    int arr[] = {1, 2, 3, 4, 5};",
    "    fwrite(arr, sizeof(int), 5, fp);",
    "    fclose(fp);",
    "    ",
    "    fp = fopen(\"data.bin\", \"rb\");",
    "    fseek(fp, 2 * sizeof(int), SEEK_SET);",
    "    int val;",
    "    fread(&val, sizeof(int), 1, fp);",
    "    printf(\"第 3 个元素：%d\\n\", val);",
    "    ",
    "    long pos = ftell(fp);",
    "    printf(\"当前位置：%ld\\n\", pos);",
    "    ",
    "    rewind(fp);",
    "    pos = ftell(fp);",
    "    printf(\"rewind 后：%ld\\n\", pos);",
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
        "text": "知识点：文件定位与随机访问",
        "detail": "fseek 定位文件位置，实现随机访问。",
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
        "detail": "FILE *fp = fopen(\"data.bin\", \"wb\");",
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
        "detail": "int arr[] = {1, 2, 3, 4, 5};",
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
        "detail": "fwrite(arr, sizeof(int), 5, fp);",
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
        "detail": "fclose(fp);",
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
        "detail": "fp = fopen(\"data.bin\", \"rb\");",
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
        "detail": "fseek(fp, 2 * sizeof(int), SEEK_SET);",
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
        "detail": "int val;",
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
        "detail": "fread(&val, sizeof(int), 1, fp);",
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
        "detail": "printf(\"第 3 个元素：%d\\n\", val);",
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
        "detail": "long pos = ftell(fp);",
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
        "detail": "printf(\"当前位置：%ld\\n\", pos);",
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
        "detail": "rewind(fp);",
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
        "detail": "pos = ftell(fp);",
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
        "detail": "printf(\"rewind 后：%ld\\n\", pos);",
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
        "detail": "fclose(fp);",
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
    "oneLiner": "学习文件定位与随机访问",
    "pitfalls": [
      "fseek",
      "ftell",
      "rewind"
    ],
    "transferQuestion": "文件操作在哪些场景下使用？",
    "miniExercise": "实现一个简单的文件复制程序"
  }
};
