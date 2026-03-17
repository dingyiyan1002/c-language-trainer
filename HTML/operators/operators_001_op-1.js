window.LESSON_DATA = {
  "meta": {
    "chapterId": "operators",
    "lessonId": "op-1",
    "title": "算术与比较运算符",
    "keyPoints": [
      "%取余数",
      "==是比较不是=",
      "整数除法截断小数"
    ]
  },
  "codeLines": [
    "+ - * /   // 加减乘除",
    "%         // 取余数：10 % 3 = 1"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：算术与比较运算符",
        "detail": "**算术运算符：** ```c + - * /   // 加减乘除 %         // 取余数：10 % 3 = 1 ```  **比较运算符：** 返回1(真)或0(假) ```c ==  // 等于（注意不是=） !=  // 不等于 >  <  >=  <=  // 大小比较 ```  **特别注意：** `=` 是赋值，`==` 是比较！",
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
        "detail": "+ - * /   // 加减乘除",
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
        "detail": "%         // 取余数：10 % 3 = 1",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习算术与比较运算符",
    "pitfalls": [
      "%取余数",
      "==是比较不是=",
      "整数除法截断小数"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
