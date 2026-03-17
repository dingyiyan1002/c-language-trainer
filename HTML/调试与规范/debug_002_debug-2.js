window.LESSON_DATA = {
  "meta": {
    "chapterId": "debug",
    "lessonId": "debug-2",
    "title": "printf 调试法",
    "index": 2,
    "filename": "debug_002_debug-2.js",
    "keyPoints": [
      "条件打印",
      "宏封装",
      "日志级别",
      "调试开关"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#define DEBUG_LEVEL 2",
    "#define LOG(level, fmt, ...) \\",
    "    do { if (level <= DEBUG_LEVEL) \\",
    "        printf(\"[LOG-%d] \" fmt \"\\n\", level, ##__VA_ARGS__); \\",
    "    } while(0)",
    "#define DBG(fmt, ...) LOG(1, fmt, ##__VA_ARGS__)",
    "#define INFO(fmt, ...) LOG(2, fmt, ##__VA_ARGS__)",
    "#define WARN(fmt, ...) LOG(3, fmt, ##__VA_ARGS__)",
    "int compute(int x) {",
    "    DBG(\"进入 compute, x=%d\", x);",
    "    int result = x * 2;",
    "    INFO(\"计算结果：%d\", result);",
    "    return result;",
    "}",
    "int main() {",
    "    DBG(\"程序开始\");",
    "    compute(10);",
    "    compute(20);",
    "    DBG(\"程序结束\");",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：printf 调试法",
        "detail": "printf 是最常用的调试方法。",
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
        "detail": "#define DEBUG_LEVEL 2",
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
        "detail": "#define LOG(level, fmt, ...) \\",
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
        "detail": "do { if (level <= DEBUG_LEVEL) \\",
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
        "detail": "printf(\"[LOG-%d] \" fmt \"\\n\", level, ##__VA_ARGS__); \\",
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
        "detail": "} while(0)",
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
        "detail": "#define DBG(fmt, ...) LOG(1, fmt, ##__VA_ARGS__)",
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
        "detail": "#define INFO(fmt, ...) LOG(2, fmt, ##__VA_ARGS__)",
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
        "detail": "#define WARN(fmt, ...) LOG(3, fmt, ##__VA_ARGS__)",
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
        "detail": "int compute(int x) {",
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
        "detail": "DBG(\"进入 compute, x=%d\", x);",
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
        "detail": "int result = x * 2;",
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
        "detail": "INFO(\"计算结果：%d\", result);",
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
        "detail": "return result;",
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
        "detail": "int main() {",
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
        "detail": "DBG(\"程序开始\");",
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
        "detail": "compute(10);",
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
        "detail": "compute(20);",
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
        "detail": "DBG(\"程序结束\");",
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
    "oneLiner": "学习printf 调试法",
    "pitfalls": [
      "条件打印",
      "宏封装",
      "日志级别"
    ],
    "transferQuestion": "如何高效调试 C 程序？",
    "miniExercise": "用 GDB 调试一个简单程序"
  }
};
