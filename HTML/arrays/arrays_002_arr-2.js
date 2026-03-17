window.LESSON_DATA = {
  "meta": {
    "chapterId": "arrays",
    "lessonId": "arr-2",
    "title": "字符串",
    "keyPoints": [
      "字符串以\\\\0结尾",
      "strlen不含\\\\0",
      "字符用单引号，字符串用双引号"
    ]
  },
  "codeLines": [
    "char str[] = \"Hello\";",
    "// 实际存储：H e l l o \\\\0 （6个字符）",
    "",
    "strlen(str);  // 返回5（不含\\\\0）",
    "sizeof(str);  // 返回6（含\\\\0）"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：字符串",
        "detail": "C语言字符串是字符数组，以\\\\0结尾：  ```c char str[] = \"Hello\"; // 实际存储：H e l l o \\\\0 （6个字符）  strlen(str);  // 返回5（不含\\\\0） sizeof(str);  // 返回6（含\\\\0） ```  常用字符串函数（需要 #include <string.h>）： - strlen: 长度 - strcpy: 复制 - s",
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
        "detail": "char str[] = \"Hello\";",
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
        "detail": "strlen(str);  // 返回5（不含\\\\0）",
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
        "detail": "sizeof(str);  // 返回6（含\\\\0）",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习字符串",
    "pitfalls": [
      "字符串以\\\\0结尾",
      "strlen不含\\\\0",
      "字符用单引号，字符串用双引号"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
