window.LESSON_DATA = {
  "meta": {
    "chapterId": "variables",
    "lessonId": "var-1",
    "title": "变量声明与初始化",
    "keyPoints": [
      "int存整数",
      "float存小数",
      "char存单个字符",
      "变量名不能数字开头"
    ]
  },
  "codeLines": [
    "int age = 20;       // 整型变量",
    "float price = 9.9;  // 浮点型",
    "char grade = 'A';   // 字符型"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：变量声明与初始化",
        "detail": "变量是用来存储数据的\"容器\"：  ```c int age = 20;       // 整型变量 float price = 9.9;  // 浮点型 char grade = 'A';   // 字符型 ```  **声明语法：** `类型 变量名 = 初始值;`  **命名规则：** - 只能包含字母、数字、下划线 - 必须以字母或下划线开头 - 不能使用关键字（如int、if等）",
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
        "detail": "int age = 20;       // 整型变量",
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
        "detail": "float price = 9.9;  // 浮点型",
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
        "detail": "char grade = 'A';   // 字符型",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习变量声明与初始化",
    "pitfalls": [
      "int存整数",
      "float存小数",
      "char存单个字符"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
