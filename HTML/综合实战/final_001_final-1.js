window.LESSON_DATA = {
  "meta": {
    "chapterId": "final",
    "lessonId": "final-1",
    "title": "综合实战 - 学生管理系统",
    "index": 1,
    "filename": "final_001_final-1.js",
    "keyPoints": [
      "结构体数组",
      "文件存储",
      "菜单驱动",
      "CRUD 操作"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <stdlib.h>",
    "#include <string.h>",
    "#define MAX_STUDENTS 100",
    "typedef struct { int id; char name[50]; float score; } Student;",
    "Student students[MAX_STUDENTS];",
    "int count = 0;",
    "void add(int id, char* name, float score) {",
    "    students[count].id = id;",
    "    strcpy(students[count].name, name);",
    "    students[count].score = score;",
    "    count++;",
    "}",
    "void list() {",
    "    for (int i = 0; i < count; i++)",
    "        printf(\"%d: %s - %.1f\\n\", students[i].id, students[i].name, students[i].score);",
    "}",
    "void save() {",
    "    FILE* f = fopen(\"students.dat\", \"wb\");",
    "    fwrite(&count, sizeof(int), 1, f);",
    "    fwrite(students, sizeof(Student), count, f);",
    "    fclose(f);",
    "}",
    "void load() {",
    "    FILE* f = fopen(\"students.dat\", \"rb\");",
    "    if (!f) return;",
    "    fread(&count, sizeof(int), 1, f);",
    "    fread(students, sizeof(Student), count, f);",
    "    fclose(f);",
    "}",
    "int main() {",
    "    load();",
    "    add(1, \"张三\", 95.5);",
    "    add(2, \"李四\", 88.0);",
    "    list();",
    "    save();",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：综合实战 - 学生管理系统",
        "detail": "综合应用所学知识实现完整系统。",
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
        "detail": "#include <string.h>",
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
        "detail": "#define MAX_STUDENTS 100",
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
        "detail": "typedef struct { int id; char name[50]; float score; } Student;",
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
        "detail": "Student students[MAX_STUDENTS];",
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
        "detail": "int count = 0;",
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
        "detail": "void add(int id, char* name, float score) {",
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
        "detail": "students[count].id = id;",
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
        "detail": "strcpy(students[count].name, name);",
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
        "detail": "students[count].score = score;",
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
        "detail": "}",
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
        "detail": "void list() {",
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
        "detail": "for (int i = 0; i < count; i++)",
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
        "detail": "printf(\"%d: %s - %.1f\\n\", students[i].id, students[i].name, students[i].score);",
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
        "detail": "void save() {",
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
        "detail": "FILE* f = fopen(\"students.dat\", \"wb\");",
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
        "detail": "fwrite(&count, sizeof(int), 1, f);",
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
        "detail": "fwrite(students, sizeof(Student), count, f);",
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
        "detail": "fclose(f);",
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
        "detail": "}",
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
        "detail": "void load() {",
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
        "detail": "FILE* f = fopen(\"students.dat\", \"rb\");",
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
        "detail": "if (!f) return;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 26,
      "vars": [],
      "explanation": {
        "text": "执行第27行",
        "detail": "fread(&count, sizeof(int), 1, f);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 27,
      "vars": [],
      "explanation": {
        "text": "执行第28行",
        "detail": "fread(students, sizeof(Student), count, f);",
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
        "detail": "fclose(f);",
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
        "detail": "}",
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
        "detail": "int main() {",
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
        "detail": "load();",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 32,
      "vars": [],
      "explanation": {
        "text": "执行第33行",
        "detail": "add(1, \"张三\", 95.5);",
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
        "detail": "add(2, \"李四\", 88.0);",
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
        "detail": "list();",
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
        "detail": "save();",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 36,
      "vars": [],
      "explanation": {
        "text": "执行第37行",
        "detail": "return 0;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习综合实战 - 学生管理系统",
    "pitfalls": [
      "结构体数组",
      "文件存储",
      "菜单驱动"
    ],
    "transferQuestion": "如何综合应用所学知识？",
    "miniExercise": "扩展项目功能"
  }
};
