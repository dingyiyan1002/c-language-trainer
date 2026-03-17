window.LESSON_DATA = {
  "meta": {
    "chapterId": "algo",
    "lessonId": "algo-4",
    "title": "栈与队列",
    "index": 4,
    "filename": "algo_004_algo-4.js",
    "keyPoints": [
      "栈 LIFO",
      "队列 FIFO",
      "循环队列",
      "应用实例"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <stdlib.h>",
    "#define MAX 100",
    "typedef struct { int data[MAX]; int top; } Stack;",
    "typedef struct { int data[MAX]; int front, rear; } Queue;",
    "void stack_init(Stack* s) { s->top = -1; }",
    "void stack_push(Stack* s, int v) { s->data[++s->top] = v; }",
    "int stack_pop(Stack* s) { return s->data[s->top--]; }",
    "void queue_init(Queue* q) { q->front = q->rear = 0; }",
    "void queue_push(Queue* q, int v) { q->data[q->rear++ % MAX] = v; }",
    "int queue_pop(Queue* q) { return q->data[q->front++ % MAX]; }",
    "int main() {",
    "    Stack s; stack_init(&s);",
    "    stack_push(&s, 1); stack_push(&s, 2); stack_push(&s, 3);",
    "    printf(\"栈弹出：%d %d %d\\n\", stack_pop(&s), stack_pop(&s), stack_pop(&s));",
    "    Queue q; queue_init(&q);",
    "    queue_push(&q, 1); queue_push(&q, 2); queue_push(&q, 3);",
    "    printf(\"队列弹出：%d %d %d\\n\", queue_pop(&q), queue_pop(&q), queue_pop(&q));",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：栈与队列",
        "detail": "栈和队列是受限线性表。",
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
        "detail": "#include <stdlib.h>",
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
        "detail": "#define MAX 100",
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
        "detail": "typedef struct { int data[MAX]; int top; } Stack;",
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
        "detail": "typedef struct { int data[MAX]; int front, rear; } Queue;",
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
        "detail": "void stack_init(Stack* s) { s->top = -1; }",
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
        "detail": "void stack_push(Stack* s, int v) { s->data[++s->top] = v; }",
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
        "detail": "int stack_pop(Stack* s) { return s->data[s->top--]; }",
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
        "detail": "void queue_init(Queue* q) { q->front = q->rear = 0; }",
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
        "detail": "void queue_push(Queue* q, int v) { q->data[q->rear++ % MAX] = v; }",
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
        "detail": "int queue_pop(Queue* q) { return q->data[q->front++ % MAX]; }",
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
        "detail": "Stack s; stack_init(&s);",
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
        "detail": "stack_push(&s, 1); stack_push(&s, 2); stack_push(&s, 3);",
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
        "detail": "printf(\"栈弹出：%d %d %d\\n\", stack_pop(&s), stack_pop(&s), stack_pop(&s));",
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
        "detail": "Queue q; queue_init(&q);",
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
        "detail": "queue_push(&q, 1); queue_push(&q, 2); queue_push(&q, 3);",
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
        "detail": "printf(\"队列弹出：%d %d %d\\n\", queue_pop(&q), queue_pop(&q), queue_pop(&q));",
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
    "oneLiner": "学习栈与队列",
    "pitfalls": [
      "栈 LIFO",
      "队列 FIFO",
      "循环队列"
    ],
    "transferQuestion": "算法在嵌入式中如何使用？",
    "miniExercise": "实现一个栈排序算法"
  }
};
