window.LESSON_DATA = {
  "meta": {
    "chapterId": "basics",
    "lessonId": "basics-1",
    "title": "C语言程序结构",
    "keyPoints": [
      "#include引入头文件",
      "main是入口函数",
      "语句以分号结尾",
      "return 0表示正常结束"
    ]
  },
  "codeLines": [
    "#include <stdio.h>  // 引入头文件",
    "",
    "int main() {        // 程序入口",
    "    printf(\"Hello World\");  // 执行语句",
    "    return 0;       // 返回值",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：C语言程序结构",
        "detail": "每个C程序都有一个固定的基本结构：  ```c #include <stdio.h>  // 引入头文件  int main() {        // 程序入口     printf(\"Hello World\");  // 执行语句     return 0;       // 返回值 } ```  **#include** 用于引入头文件，<stdio.h> 包含了输入输出函数。 **main",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    },
    {
      "line": 2,
      "vars": [],
      "explanation": {
        "text": "执行第3行",
        "detail": "int main() {        // 程序入口",
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
        "detail": "printf(\"Hello World\");  // 执行语句",
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
        "detail": "return 0;       // 返回值",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习C语言程序结构",
    "pitfalls": [
      "#include引入头文件",
      "main是入口函数",
      "语句以分号结尾"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
