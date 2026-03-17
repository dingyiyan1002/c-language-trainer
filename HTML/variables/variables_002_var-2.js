window.LESSON_DATA = {
  "meta": {
    "chapterId": "variables",
    "lessonId": "var-2",
    "title": "格式化输入输出",
    "keyPoints": [
      "scanf需要&取地址",
      "%d对应int",
      "%f对应float",
      "%c对应char"
    ]
  },
  "codeLines": [
    "int num;",
    "scanf(\"%d\", &num);     // 输入整数，注意&",
    "printf(\"%d\", num);     // 输出整数",
    "",
    "// 常用格式说明符",
    "%d - 整数    %f - 浮点数",
    "%c - 字符    %s - 字符串"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：格式化输入输出",
        "detail": "使用格式说明符进行输入输出：  ```c int num; scanf(\"%d\", &num);     // 输入整数，注意& printf(\"%d\", num);     // 输出整数  // 常用格式说明符 %d - 整数    %f - 浮点数 %c - 字符    %s - 字符串 ```  **重要：scanf读取变量时需要加 & 取地址符！**",
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
        "detail": "int num;",
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
        "detail": "scanf(\"%d\", &num);     // 输入整数，注意&",
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
        "detail": "printf(\"%d\", num);     // 输出整数",
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
        "detail": "%d - 整数    %f - 浮点数",
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
        "detail": "%c - 字符    %s - 字符串",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习格式化输入输出",
    "pitfalls": [
      "scanf需要&取地址",
      "%d对应int",
      "%f对应float"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
