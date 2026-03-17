window.LESSON_DATA = {
  "meta": {
    "chapterId": "arrays",
    "lessonId": "arr-1",
    "title": "一维数组",
    "keyPoints": [
      "下标从0开始"
    ]
  },
  "codeLines": [
    "int arr[5] = {1, 2, 3, 4, 5};",
    "",
    "// 访问元素（下标从0开始！）",
    "arr[0] = 10;  // 第一个元素",
    "arr[4] = 50;  // 第五个（最后）元素",
    "// arr[5] 越界！错误！"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：一维数组",
        "detail": "数组存储多个同类型元素：  ```c int arr[5] = {1, 2, 3, 4, 5};  // 访问元素（下标从0开始！） arr[0] = 10;  // 第一个元素 arr[4] = 50;  // 第五个（最后）元素 // arr[5] 越界！错误！ ```  **重要：** 数组下标从0开始，最大下标是 长度-1",
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
        "detail": "int arr[5] = {1, 2, 3, 4, 5};",
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
        "detail": "arr[0] = 10;  // 第一个元素",
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
        "detail": "arr[4] = 50;  // 第五个（最后）元素",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习一维数组",
    "pitfalls": [
      "下标从0开始"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
