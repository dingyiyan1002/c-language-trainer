window.LESSON_DATA = {
  "meta": {
    "chapterId": "algo",
    "lessonId": "algo-1",
    "title": "排序算法",
    "index": 1,
    "filename": "algo_001_algo-1.js",
    "keyPoints": [
      "冒泡排序",
      "快速排序",
      "插入排序",
      "时间复杂度"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "void swap(int* a, int* b) { int t = *a; *a = *b; *b = t; }",
    "void bubble_sort(int arr[], int n) {",
    "    for (int i = 0; i < n-1; i++)",
    "        for (int j = 0; j < n-i-1; j++)",
    "            if (arr[j] > arr[j+1]) swap(&arr[j], &arr[j+1]);",
    "}",
    "void quick_sort(int arr[], int l, int r) {",
    "    if (l >= r) return;",
    "    int p = arr[(l+r)/2], i = l, j = r;",
    "    while (i <= j) {",
    "        while (arr[i] < p) i++;",
    "        while (arr[j] > p) j--;",
    "        if (i <= j) swap(&arr[i++], &arr[j--]);",
    "    }",
    "    quick_sort(arr, l, j);",
    "    quick_sort(arr, i, r);",
    "}",
    "int main() {",
    "    int arr[] = {64, 34, 25, 12, 22, 11, 90};",
    "    int n = sizeof(arr)/sizeof(arr[0]);",
    "    quick_sort(arr, 0, n-1);",
    "    for (int i = 0; i < n; i++) printf(\"%d \", arr[i]);",
    "    printf(\"\\n\");",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：排序算法",
        "detail": "排序是基础算法，面试必考。",
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
        "detail": "void swap(int* a, int* b) { int t = *a; *a = *b; *b = t; }",
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
        "detail": "void bubble_sort(int arr[], int n) {",
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
        "detail": "for (int i = 0; i < n-1; i++)",
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
        "detail": "for (int j = 0; j < n-i-1; j++)",
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
        "detail": "if (arr[j] > arr[j+1]) swap(&arr[j], &arr[j+1]);",
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
        "detail": "}",
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
        "detail": "void quick_sort(int arr[], int l, int r) {",
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
        "detail": "if (l >= r) return;",
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
        "detail": "int p = arr[(l+r)/2], i = l, j = r;",
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
        "detail": "while (i <= j) {",
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
        "detail": "while (arr[i] < p) i++;",
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
        "detail": "while (arr[j] > p) j--;",
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
        "detail": "if (i <= j) swap(&arr[i++], &arr[j--]);",
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
        "detail": "quick_sort(arr, l, j);",
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
        "detail": "quick_sort(arr, i, r);",
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
        "detail": "}",
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
        "detail": "int main() {",
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
        "detail": "int arr[] = {64, 34, 25, 12, 22, 11, 90};",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 20,
      "vars": [],
      "explanation": {
        "text": "执行第21行",
        "detail": "int n = sizeof(arr)/sizeof(arr[0]);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 21,
      "vars": [],
      "explanation": {
        "text": "执行第22行",
        "detail": "quick_sort(arr, 0, n-1);",
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
        "detail": "for (int i = 0; i < n; i++) printf(\"%d \", arr[i]);",
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
        "detail": "printf(\"\\n\");",
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
        "detail": "return 0;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习排序算法",
    "pitfalls": [
      "冒泡排序",
      "快速排序",
      "插入排序"
    ],
    "transferQuestion": "算法在嵌入式中如何使用？",
    "miniExercise": "实现一个栈排序算法"
  }
};
