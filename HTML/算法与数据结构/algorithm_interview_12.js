/**
 * 算法面试题 12 - 队列的实现
 * 难度：⭐⭐⭐
 * 考点：队列、循环队列
 */

export const algorithm_interview_12 = {
  title: '循环队列的实现',
  difficulty: '中级',
  question: \`用数组实现循环队列：

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];
    int front;  // 队头
    int rear;   // 队尾
    int count;  // 当前元素个数
} Queue;

void init_queue(Queue *q) {
    q->front = ____;
    q->rear = ____;
    q->count = ____;
}

bool is_empty(Queue *q) {
    return ____;
}

bool is_full(Queue *q) {
    return ____;
}

bool enqueue(Queue *q, int value) {
    if (____) return false;
    q->data[____] = value;
    q->rear = ____;  // 循环移动
    ____;
    return true;
}

int dequeue(Queue *q) {
    if (____) return -1;
    int value = ____;
    q->front = ____;  // 循环移动
    ____;
    return value;
}\`,
  answer: \`void init_queue(Queue *q) {
    q->front = 0;
    q->rear = 0;
    q->count = 0;
}

bool is_empty(Queue *q) {
    return q->count == 0;
}

bool is_full(Queue *q) {
    return q->count == MAX_SIZE;
}

bool enqueue(Queue *q, int value) {
    if (is_full(q)) return false;
    q->data[q->rear] = value;
    q->rear = (q->rear + 1) % MAX_SIZE;  // 循环移动
    q->count++;
    return true;
}

int dequeue(Queue *q) {
    if (is_empty(q)) return -1;
    int value = q->data[q->front];
    q->front = (q->front + 1) % MAX_SIZE;  // 循环移动
    q->count--;
    return value;
}\`,
  keyPoints: [
    '循环队列用取模实现循环',
    'front 指向队头元素',
    'rear 指向下一个空位',
    'count 记录元素个数简化判断',
    '(index + 1) % MAX_SIZE 循环移动'
  ],
  commonMistakes: [
    '忘记取模导致数组越界',
    '用 front==rear 判断空（浪费一个空间）',
    '忘记更新 count',
    'dequeue 不检查空队列'
  ]
};
