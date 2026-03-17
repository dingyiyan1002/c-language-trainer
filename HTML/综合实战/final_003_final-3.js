window.LESSON_DATA = {
  "meta": {
    "chapterId": "final",
    "lessonId": "final-3",
    "title": "综合实战 - 日志系统",
    "index": 3,
    "filename": "final_003_final-3.js",
    "keyPoints": [
      "文件操作",
      "循环缓冲区",
      "线程安全",
      "日志轮转"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <stdlib.h>",
    "#include <string.h>",
    "#include <time.h>",
    "#define LOG_FILE \"system.log\"",
    "#define MAX_LOG_SIZE 1024*1024",
    "#define MAX_LOGS 5",
    "typedef enum { LOG_DEBUG, LOG_INFO, LOG_WARN, LOG_ERROR } LogLevel;",
    "const char* level_str[] = {\"DEBUG\", \"INFO\", \"WARN\", \"ERROR\"};",
    "void log_write(LogLevel level, const char* msg) {",
    "    FILE* f = fopen(LOG_FILE, \"a\");",
    "    if (!f) return;",
    "    time_t now = time(NULL);",
    "    struct tm* t = localtime(&now);",
    "    fprintf(f, \"[%04d-%02d-%02d %02d:%02d:%02d] [%s] %s\\n\",",
    "        t->tm_year+1900, t->tm_mon+1, t->tm_mday,",
    "        t->tm_hour, t->tm_min, t->tm_sec,",
    "        level_str[level], msg);",
    "    fclose(f);",
    "}",
    "#define LOG(level, msg) log_write(level, msg)",
    "int main() {",
    "    LOG(LOG_INFO, \"系统启动\");",
    "    LOG(LOG_DEBUG, \"初始化完成\");",
    "    LOG(LOG_WARN, \"内存使用率高\");",
    "    LOG(LOG_ERROR, \"连接失败\");",
    "    printf(\"日志已写入 %s\\n\", LOG_FILE);",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：综合实战 - 日志系统",
        "detail": "嵌入式常用日志系统设计。",
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
        "detail": "#include <time.h>",
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
        "detail": "#define LOG_FILE \"system.log\"",
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
        "detail": "#define MAX_LOG_SIZE 1024*1024",
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
        "detail": "#define MAX_LOGS 5",
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
        "detail": "typedef enum { LOG_DEBUG, LOG_INFO, LOG_WARN, LOG_ERROR } LogLevel;",
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
        "detail": "const char* level_str[] = {\"DEBUG\", \"INFO\", \"WARN\", \"ERROR\"};",
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
        "detail": "void log_write(LogLevel level, const char* msg) {",
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
        "detail": "FILE* f = fopen(LOG_FILE, \"a\");",
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
        "detail": "if (!f) return;",
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
        "detail": "time_t now = time(NULL);",
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
        "detail": "struct tm* t = localtime(&now);",
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
        "detail": "fprintf(f, \"[%04d-%02d-%02d %02d:%02d:%02d] [%s] %s\\n\",",
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
        "detail": "t->tm_year+1900, t->tm_mon+1, t->tm_mday,",
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
        "detail": "t->tm_hour, t->tm_min, t->tm_sec,",
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
        "detail": "level_str[level], msg);",
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
        "detail": "fclose(f);",
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
        "detail": "}",
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
        "detail": "#define LOG(level, msg) log_write(level, msg)",
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
        "detail": "int main() {",
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
        "detail": "LOG(LOG_INFO, \"系统启动\");",
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
        "detail": "LOG(LOG_DEBUG, \"初始化完成\");",
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
        "detail": "LOG(LOG_WARN, \"内存使用率高\");",
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
        "detail": "LOG(LOG_ERROR, \"连接失败\");",
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
        "detail": "printf(\"日志已写入 %s\\n\", LOG_FILE);",
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
        "detail": "return 0;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习综合实战 - 日志系统",
    "pitfalls": [
      "文件操作",
      "循环缓冲区",
      "线程安全"
    ],
    "transferQuestion": "如何综合应用所学知识？",
    "miniExercise": "扩展项目功能"
  }
};
