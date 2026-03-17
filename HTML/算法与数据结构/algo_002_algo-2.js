window.LESSON_DATA = {
  "meta": {
    "chapterId": "algo",
    "lessonId": "algo-2",
    "title": "查找算法",
    "index": 2,
    "filename": "algo_002_algo-2.js",
    "keyPoints": [
      "二分查找",
      "顺序查找",
      "哈希查找"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "int binary_search(int arr[], int n, int target) {",
    "    int l = 0, r = n - 1;",
    "    while (l <= r) {",
    "        int mid = l + (r - l) / 2;",
    "        if (arr[mid] == target) return mid;",
    "        if (arr[mid] < target) l = mid + 1;",
    "        else r = mid - 1;",
    "    }",
    "    return -1;",
    "}",
    "int main() {",
    "    int arr[] = {1, 3, 5, 7, 9, 11, 13};",
    "    int n = sizeof(arr)/sizeof(arr[0]);",
    "    int idx = binary_search(arr, n, 7);",
    "    printf(\"7 在位置：%d\\n\", idx);",
    "    idx = binary_search(arr, n, 6);",
    "    printf(\"6 在位置：%d\\n\", idx);",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：查找算法",
        "detail": "查找算法用于快速定位数据。",
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
        "detail": "#include <stdio.h>",
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
        "detail": "int binary_search(int arr[], int n, int target) {",
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
        "detail": "int l = 0, r = n - 1;",
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
        "detail": "while (l <= r) {",
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
        "detail": "int mid = l + (r - l) / 2;",
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
        "detail": "if (arr[mid] == target) return mid;",
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
        "detail": "if (arr[mid] < target) l = mid + 1;",
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
        "detail": "else r = mid - 1;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 8,
      "vars": [],
      "explanation": {
        "text": "执行第9行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 9,
      "vars": [],
      "explanation": {
        "text": "执行第10行",
        "detail": "return -1;",
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
        "detail": "}",
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
        "detail": "int main() {",
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
        "detail": "int arr[] = {1, 3, 5, 7, 9, 11, 13};",
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
        "detail": "int n = sizeof(arr)/sizeof(arr[0]);",
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
        "detail": "int idx = binary_search(arr, n, 7);",
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
        "detail": "printf(\"7 在位置：%d\\n\", idx);",
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
        "detail": "idx = binary_search(arr, n, 6);",
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
        "detail": "printf(\"6 在位置：%d\\n\", idx);",
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
        "detail": "return 0;",
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
    }
  ],
  "summary": {
    "oneLiner": "学习查找算法",
    "pitfalls": [
      "二分查找",
      "顺序查找",
      "哈希查找"
    ],
    "transferQuestion": "算法在嵌入式中如何使用？",
    "miniExercise": "实现一个栈排序算法"
  }
};
