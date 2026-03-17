window.LESSON_DATA = {
  "meta": {
    "chapterId": "interview",
    "lessonId": "interview-3",
    "title": " Bug修复题",
    "keyPoints": [
      "野指针",
      "内存泄漏",
      "竞争条件",
      "整数溢出",
      "缓冲区溢出"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点： Bug修复题",
        "detail": "常见C语言陷阱和修复方法：  **内存问题** - 野指针：返回局部变量地址 - 内存泄漏：malloc后没有free - 重复释放：double free - 越界访问：数组索引超出范围  **并发问题** - 竞争条件：非原子操作被中断 - 临界区：需要保护的数据访问  **数值问题** - 整数溢出：无符号数回绕 - 符号扩展：有符号/无符号混用",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习 Bug修复题",
    "pitfalls": [
      "野指针",
      "内存泄漏",
      "竞争条件"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
