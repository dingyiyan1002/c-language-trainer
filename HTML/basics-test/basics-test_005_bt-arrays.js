window.LESSON_DATA = {
  "meta": {
    "chapterId": "basics-test",
    "lessonId": "bt-arrays",
    "title": "数组",
    "keyPoints": [
      "数组下标",
      "内存布局",
      "字符串"
    ]
  },
  "codeLines": [
    "// 一维数组定义",
    "int arr[10];       // 未初始化，内容不确定",
    "int nums[5] = {1, 2, 3, 4, 5};  // 完全初始化",
    "int data[] = {10, 20, 30};        // 自动推断大小",
    "",
    "// 数组访问 (下标从0开始)",
    "int first = nums[0];  // 1",
    "int last = nums[4];   // 5",
    "",
    "// 数组遍历",
    "for (int i = 0; i < 5; i++) {",
    "    printf(\"%d \", nums[i]);",
    "}",
    "",
    "// 数组作为函数参数 (退化为指针)",
    "void print_array(int arr[], int len) {",
    "    for (int i = 0; i < len; i++) {",
    "        printf(\"%d \", arr[i]);",
    "    }",
    "}",
    "",
    "// 二维数组",
    "int matrix[3][4] = {",
    "    {1, 2, 3, 4},",
    "    {5, 6, 7, 8},",
    "    {9, 10, 11, 12}",
    "};",
    "int val = matrix[1][2];  // 7",
    "",
    "// 字符数组与字符串",
    "char str1[] = \"Hello\";     // 自动加\\\\0",
    "char str2[10] = {'H', 'e', 'l', 'l', 'o', '\\\\0'};"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：数组",
        "detail": "C语言数组测试  ```c // 一维数组定义 int arr[10];       // 未初始化，内容不确定 int nums[5] = {1, 2, 3, 4, 5};  // 完全初始化 int data[] = {10, 20, 30};        // 自动推断大小  // 数组访问 (下标从0开始) int first = nums[0];  // 1 int last = nu",
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
        "detail": "int arr[10];       // 未初始化，内容不确定",
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
        "detail": "int nums[5] = {1, 2, 3, 4, 5};  // 完全初始化",
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
        "detail": "int data[] = {10, 20, 30};        // 自动推断大小",
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
        "detail": "int first = nums[0];  // 1",
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
        "detail": "int last = nums[4];   // 5",
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
        "detail": "for (int i = 0; i < 5; i++) {",
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
        "detail": "printf(\"%d \", nums[i]);",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 15,
      "vars": [],
      "explanation": {
        "text": "执行第16行",
        "detail": "void print_array(int arr[], int len) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 16,
      "vars": [],
      "explanation": {
        "text": "执行第17行",
        "detail": "for (int i = 0; i < len; i++) {",
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
        "detail": "printf(\"%d \", arr[i]);",
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
        "detail": "}",
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
        "detail": "}",
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
        "detail": "int matrix[3][4] = {",
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
        "detail": "{1, 2, 3, 4},",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 24,
      "vars": [],
      "explanation": {
        "text": "执行第25行",
        "detail": "{5, 6, 7, 8},",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 25,
      "vars": [],
      "explanation": {
        "text": "执行第26行",
        "detail": "{9, 10, 11, 12}",
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
        "detail": "};",
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
        "detail": "int val = matrix[1][2];  // 7",
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
        "detail": "char str1[] = \"Hello\";     // 自动加\\\\0",
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
        "detail": "char str2[10] = {'H', 'e', 'l', 'l', 'o', '\\\\0'};",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习数组",
    "pitfalls": [
      "数组下标",
      "内存布局",
      "字符串"
    ],
    "transferQuestion": "你能用这个知识点解决什么问题？",
    "miniExercise": "尝试修改示例代码，观察变化"
  }
};
