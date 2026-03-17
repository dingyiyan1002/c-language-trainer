window.LESSON_DATA = {
  "meta": {
    "chapterId": "embedded",
    "lessonId": "embedded-2",
    "title": "进程控制",
    "keyPoints": [
      "fork返回值区分父子进程",
      "exec替换进程映像",
      "wait回收子进程"
    ]
  },
  "codeLines": [],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：进程控制",
        "detail": "Linux进程控制：  **fork - 创建子进程** - 返回值：父进程得到子进程PID，子进程得到0 - 子进程复制父进程地址空间（COW） - 父子进程执行顺序不确定  **exec族 - 执行新程序** - execl/execv/execvp/execlp - 成功不返回，失败返回-1 - 替换当前进程映像  **wait/waitpid - 等待子进程** - wait(&statu",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习进程控制",
    "pitfalls": [
      "fork返回值区分父子进程",
      "exec替换进程映像",
      "wait回收子进程"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
