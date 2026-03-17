window.LESSON_DATA = {
  "meta": {
    "chapterId": "struct",
    "lessonId": "struct-5",
    "title": "结构体实战应用",
    "index": 5,
    "filename": "struct_005_struct-5.js",
    "keyPoints": [
      "链表节点",
      "数据记录",
      "状态机",
      "嵌入式应用"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <stdlib.h>",
    "#include <string.h>",
    "",
    "// 链表节点",
    "struct Node {",
    "    int data;",
    "    struct Node *next;",
    "};",
    "",
    "// 传感器数据记录",
    "struct SensorData {",
    "    uint32_t timestamp;",
    "    float temperature;",
    "    float humidity;",
    "    uint8_t status;",
    "};",
    "",
    "// 状态机",
    "enum State {IDLE, RUNNING, PAUSED, STOPPED};",
    "",
    "struct Machine {",
    "    enum State state;",
    "    int counter;",
    "    void (*on_state_change)(enum State);",
    "};",
    "",
    "void state_handler(enum State s) {",
    "    const char *names[] = {\"IDLE\", \"RUNNING\", \"PAUSED\", \"STOPPED\"};",
    "    printf(\"状态变更：%s\\n\", names[s]);",
    "}",
    "",
    "int main(void) {",
    "    // 链表操作",
    "    struct Node *head = malloc(sizeof(struct Node));",
    "    head->data = 1;",
    "    head->next = NULL;",
    "    ",
    "    // 状态机",
    "    struct Machine m = {",
    "        .state = IDLE,",
    "        .counter = 0,",
    "        .on_state_change = state_handler",
    "    };",
    "    ",
    "    m.state = RUNNING;",
    "    m.on_state_change(m.state);",
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
        "text": "知识点：结构体实战应用",
        "detail": "结构体是链表、树、状态机等数据结构的基础，也是嵌入式系统的核心。",
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
      "line": 5,
      "vars": [],
      "explanation": {
        "text": "执行第6行",
        "detail": "struct Node {",
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
        "detail": "int data;",
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
        "detail": "struct Node *next;",
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
        "detail": "};",
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
        "detail": "struct SensorData {",
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
        "detail": "uint32_t timestamp;",
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
        "detail": "float temperature;",
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
        "detail": "float humidity;",
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
        "detail": "uint8_t status;",
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
        "detail": "};",
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
        "detail": "enum State {IDLE, RUNNING, PAUSED, STOPPED};",
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
        "detail": "struct Machine {",
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
        "detail": "enum State state;",
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
        "detail": "int counter;",
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
        "detail": "void (*on_state_change)(enum State);",
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
        "detail": "};",
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
        "detail": "void state_handler(enum State s) {",
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
        "detail": "const char *names[] = {\"IDLE\", \"RUNNING\", \"PAUSED\", \"STOPPED\"};",
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
        "detail": "printf(\"状态变更：%s\\n\", names[s]);",
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
        "detail": "}",
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
        "detail": "int main(void) {",
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
        "detail": "struct Node *head = malloc(sizeof(struct Node));",
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
        "detail": "head->data = 1;",
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
        "detail": "head->next = NULL;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 39,
      "vars": [],
      "explanation": {
        "text": "执行第40行",
        "detail": "struct Machine m = {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 40,
      "vars": [],
      "explanation": {
        "text": "执行第41行",
        "detail": ".state = IDLE,",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 41,
      "vars": [],
      "explanation": {
        "text": "执行第42行",
        "detail": ".counter = 0,",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 42,
      "vars": [],
      "explanation": {
        "text": "执行第43行",
        "detail": ".on_state_change = state_handler",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 43,
      "vars": [],
      "explanation": {
        "text": "执行第44行",
        "detail": "};",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 45,
      "vars": [],
      "explanation": {
        "text": "执行第46行",
        "detail": "m.state = RUNNING;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 46,
      "vars": [],
      "explanation": {
        "text": "执行第47行",
        "detail": "m.on_state_change(m.state);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 48,
      "vars": [],
      "explanation": {
        "text": "执行第49行",
        "detail": "return 0;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 49,
      "vars": [],
      "explanation": {
        "text": "执行第50行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习结构体实战应用",
    "pitfalls": [
      "链表节点",
      "数据记录",
      "状态机"
    ],
    "transferQuestion": "你能用结构体组织哪些数据？",
    "miniExercise": "尝试定义一个表示学生信息的结构体"
  }
};\n