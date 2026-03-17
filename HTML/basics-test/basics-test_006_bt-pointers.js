window.LESSON_DATA = {
  "meta": {
    "chapterId": "basics-test",
    "lessonId": "bt-pointers",
    "title": "指针基础",
    "keyPoints": [
      "指针本质",
      "指针运算",
      "NULL处理"
    ]
  },
  "codeLines": [
    "// 指针定义与初始化",
    "int n = 10;",
    "int *p = &n;    // & 取地址",
    "int *ptr = NULL;  // NULL表示空指针",
    "",
    "// 指针运算符",
    "int value = *p;   // * 解引用，取值",
    "*p = 20;          // 通过指针修改原变量",
    "",
    "// 指针与数组",
    "int arr[] = {1, 2, 3, 4, 5};",
    "int *p = arr;     // 数组名就是首元素地址",
    "int first = *p;       // 1",
    "int second = *(p + 1); // 2",
    "int third = p[2];      // 3 (等价于*(p+2))",
    "",
    "// 指针运算",
    "p++;      // 指向下一个元素",
    "p--;      // 指向上一个元素",
    "ptrdiff_t diff = p2 - p1;  // 元素间距",
    "",
    "// 指针与字符串",
    "char *str = \"Hello\";  // 字符串常量",
    "char arr[] = \"World\";",
    "",
    "// 指针数组 vs 数组指针",
    "int *arr[10];     // 指针数组 (10个int指针)",
    "int (*p)[10];     // 数组指针 (指向int[10])",
    "",
    "// 函数指针",
    "int (*func_ptr)(int, int) = &add;",
    "int result = func_ptr(3, 4);"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：指针基础",
        "detail": "C语言指针基础测试  ```c // 指针定义与初始化 int n = 10; int *p = &n;    // & 取地址 int *ptr = NULL;  // NULL表示空指针  // 指针运算符 int value = *p;   // * 解引用，取值 *p = 20;          // 通过指针修改原变量  // 指针与数组 int arr[] = {1, 2, 3, 4",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    },
    {
      "line": 1,
      "vars": [],
      "explanation": {
        "text": "执行第2行",
        "detail": "int n = 10;",
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
        "detail": "int *p = &n;    // & 取地址",
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
        "detail": "int *ptr = NULL;  // NULL表示空指针",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 6,
      "vars": [],
      "explanation": {
        "text": "执行第7行",
        "detail": "int value = *p;   // * 解引用，取值",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 7,
      "vars": [],
      "explanation": {
        "text": "执行第8行",
        "detail": "*p = 20;          // 通过指针修改原变量",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 10,
      "vars": [],
      "explanation": {
        "text": "执行第11行",
        "detail": "int arr[] = {1, 2, 3, 4, 5};",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 11,
      "vars": [],
      "explanation": {
        "text": "执行第12行",
        "detail": "int *p = arr;     // 数组名就是首元素地址",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 12,
      "vars": [],
      "explanation": {
        "text": "执行第13行",
        "detail": "int first = *p;       // 1",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 13,
      "vars": [],
      "explanation": {
        "text": "执行第14行",
        "detail": "int second = *(p + 1); // 2",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 14,
      "vars": [],
      "explanation": {
        "text": "执行第15行",
        "detail": "int third = p[2];      // 3 (等价于*(p+2))",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 17,
      "vars": [],
      "explanation": {
        "text": "执行第18行",
        "detail": "p++;      // 指向下一个元素",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 18,
      "vars": [],
      "explanation": {
        "text": "执行第19行",
        "detail": "p--;      // 指向上一个元素",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 19,
      "vars": [],
      "explanation": {
        "text": "执行第20行",
        "detail": "ptrdiff_t diff = p2 - p1;  // 元素间距",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 22,
      "vars": [],
      "explanation": {
        "text": "执行第23行",
        "detail": "char *str = \"Hello\";  // 字符串常量",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 23,
      "vars": [],
      "explanation": {
        "text": "执行第24行",
        "detail": "char arr[] = \"World\";",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 26,
      "vars": [],
      "explanation": {
        "text": "执行第27行",
        "detail": "int *arr[10];     // 指针数组 (10个int指针)",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 27,
      "vars": [],
      "explanation": {
        "text": "执行第28行",
        "detail": "int (*p)[10];     // 数组指针 (指向int[10])",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 30,
      "vars": [],
      "explanation": {
        "text": "执行第31行",
        "detail": "int (*func_ptr)(int, int) = &add;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 31,
      "vars": [],
      "explanation": {
        "text": "执行第32行",
        "detail": "int result = func_ptr(3, 4);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习指针基础",
    "pitfalls": [
      "指针本质",
      "指针运算",
      "NULL处理"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
