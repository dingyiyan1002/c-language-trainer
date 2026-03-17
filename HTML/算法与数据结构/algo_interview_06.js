/**
 * 算法面试题 06 - 队列的实现
 */
export const algo_interview_06 = {
  title: '队列的实现',
  difficulty: '中级',
  question: `实现以下算法`,
  code: `#define MAX_SIZE 100

struct Queue {
    int data[MAX_SIZE];
    int front, rear;
};

void init(struct Queue *q) { q->front = q->rear = 0; }
int is_empty(struct Queue *q) { return q->front == q->rear; }

void enqueue(struct Queue *q, int val) {
    if ((q->rear + 1) % MAX_SIZE != q->front)
        q->data[q->rear++ % MAX_SIZE] = val;
}

int dequeue(struct Queue *q) {
    if (!is_empty(q))
        return q->data[q->front++ % MAX_SIZE];
    return -1;
}`,
  answer: `循环队列，FIFO`,
  keyPoints: ['数据结构', '算法思想', '时间复杂度']
};
