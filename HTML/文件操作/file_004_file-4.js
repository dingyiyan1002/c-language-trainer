window.LESSON_DATA = {
  "meta": {
    "chapterId": "file",
    "lessonId": "file-4",
    "title": "二进制文件操作",
    "index": 4,
    "filename": "file_004_file-4.js",
    "keyPoints": [
      "fread",
      "fwrite",
      "二进制模式",
      "结构体读写"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <stdlib.h>",
    "typedef struct { int id; char name[20]; float score; } Student;",
    "int main(void) {",
    "    Student s1 = {1, \"张三\", 95.5f};",
    "    Student s2 = {2, \"李四\", 88.0f};",
    "    FILE *fp = fopen(\"students.dat\", \"wb\");",
    "    fwrite(&s1, sizeof(Student), 1, fp);",
    "    fwrite(&s2, sizeof(Student), 1, fp);",
    "    fclose(fp);",
    "    ",
    "    fp = fopen(\"students.dat\", \"rb\");",
    "    Student buf;",
    "    while (fread(&buf, sizeof(Student), 1, fp) == 1) {",
    "        printf(\"ID:%d, 姓名:%s, 分数:%.1f\\n\", buf.id, buf.name, buf.score);",
    "    }",
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
        "text": "知识点：二进制文件操作",
        "detail": "fread/fwrite 用于二进制数据读写。",
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
        "detail": "#include <stdlib.h>",
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
        "detail": "typedef struct { int id; char name[20]; float score; } Student;",
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
        "detail": "Student s1 = {1, \"张三\", 95.5f};",
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
        "detail": "Student s2 = {2, \"李四\", 88.0f};",
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
        "detail": "FILE *fp = fopen(\"students.dat\", \"wb\");",
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
        "detail": "fwrite(&s1, sizeof(Student), 1, fp);",
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
        "detail": "fwrite(&s2, sizeof(Student), 1, fp);",
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
        "detail": "fclose(fp);",
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
        "detail": "fp = fopen(\"students.dat\", \"rb\");",
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
        "detail": "Student buf;",
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
        "detail": "while (fread(&buf, sizeof(Student), 1, fp) == 1) {",
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
        "detail": "printf(\"ID:%d, 姓名:%s, 分数:%.1f\\n\", buf.id, buf.name, buf.score);",
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
        "detail": "}",
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
        "detail": "fclose(fp);",
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
        "detail": "return 0;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习二进制文件操作",
    "pitfalls": [
      "fread",
      "fwrite",
      "二进制模式"
    ],
    "transferQuestion": "文件操作在哪些场景下使用？",
    "miniExercise": "实现一个简单的文件复制程序"
  }
};
