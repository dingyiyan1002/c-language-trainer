window.LESSON_DATA = {
  "meta": {
    "chapterId": "interview",
    "lessonId": "interview-2",
    "title": "系统设计题",
    "keyPoints": [
      "内存池设计",
      "环形缓冲区",
      "状态机实现",
      "对象池"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：系统设计题",
        "detail": "设计嵌入式常用数据结构：  **内存池(Memory Pool)** - 预先分配固定大小内存块 - 用链表管理空闲块 - 避免频繁malloc/free的开销和碎片  **环形缓冲区(Ring Buffer)** - 生产者-消费者模型 - head/tail指针，模运算实现环形 - 适用于串口通信、音频处理  **状态机(State Machine)** - 函数指针数组实现跳转表 - 比sw",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习系统设计题",
    "pitfalls": [
      "内存池设计",
      "环形缓冲区",
      "状态机实现"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
