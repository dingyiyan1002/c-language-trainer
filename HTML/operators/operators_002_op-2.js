window.LESSON_DATA = {
  "meta": {
    "chapterId": "operators",
    "lessonId": "op-2",
    "title": "自增自减与逻辑运算",
    "keyPoints": [
      "a++先用后加",
      "++a先加后用",
      "&&两真才真",
      "||一真就真"
    ]
  },
  "codeLines": [
    "a++  // 先用后加：b = a++; (b得旧值)",
    "++a  // 先加后用：b = ++a; (b得新值)"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：自增自减与逻辑运算",
        "detail": "**自增自减：** ```c a++  // 先用后加：b = a++; (b得旧值) ++a  // 先加后用：b = ++a; (b得新值) ```  **逻辑运算符：** ```c &&  // 与：两边都真才真 ||  // 或：一边真就真 !   // 非：取反 ```",
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
        "detail": "a++  // 先用后加：b = a++; (b得旧值)",
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
        "detail": "++a  // 先加后用：b = ++a; (b得新值)",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习自增自减与逻辑运算",
    "pitfalls": [
      "a++先用后加",
      "++a先加后用",
      "&&两真才真"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
