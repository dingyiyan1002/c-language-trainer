window.LESSON_DATA = {
  "meta": {
    "chapterId": "linux",
    "lessonId": "linux-7",
    "title": "内存管理深度",
    "keyPoints": [
      "MMU负责地址转换",
      "缺页中断按需分配",
      "mmap直接访问文件"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：内存管理深度",
        "detail": "Linux内存管理：  **虚拟内存** - 每个进程独立的地址空间 - MMU将虚拟地址转换为物理地址 - 页表实现地址映射  **内存分配** - brk/mmap: 系统调用申请内存 - ptmalloc/tcmalloc: 用户态内存管理 - 内存碎片问题  **缺页中断** - 访问未映射的页面触发 - 内核分配物理页并建立映射 - 按需调页(Demand Paging)  **内存映射",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习内存管理深度",
    "pitfalls": [
      "MMU负责地址转换",
      "缺页中断按需分配",
      "mmap直接访问文件"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
