/**
 * 算法面试题 05 - 栈的实现
 */
export const algo_interview_05 = {
  title: '栈的实现',
  difficulty: '中级',
  question: `实现以下算法`,
  code: `#define MAX_SIZE 100

struct Stack {
    int data[MAX_SIZE];
    int top;
};

void init(struct Stack *s) { s->top = -1; }
int is_empty(struct Stack *s) { return s->top == -1; }
int is_full(struct Stack *s) { return s->top == MAX_SIZE - 1; }

void push(struct Stack *s, int val) {
    if (!is_full(s)) s->data[++s->top] = val;
}

int pop(struct Stack *s) {
    if (!is_empty(s)) return s->data[s->top--];
    return -1;
}`,
  answer: `数组实现栈，LIFO`,
  keyPoints: ['数据结构', '算法思想', '时间复杂度']
};
