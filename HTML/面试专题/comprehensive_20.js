/**
 * 综合实战题 20 - 实现简单栈
 */
export const comprehensive_20 = {
  title: '实现简单栈',
  difficulty: '中级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];
    int top;
} Stack;

void init(Stack *s) { s->top = -1; }
int is_empty(Stack *s) { return s->top == -1; }
int is_full(Stack *s) { return s->top == MAX_SIZE - 1; }

void push(Stack *s, int val) {
    if (!is_full(s)) s->data[++s->top] = val;
}

int pop(Stack *s) {
    if (!is_empty(s)) return s->data[s->top--];
    return -1;
}

int peek(Stack *s) {
    if (!is_empty(s)) return s->data[s->top];
    return -1;
}`,
  answer: `数组实现栈结构`,
  keyPoints: ['标准库实现', '代码能力', '边界处理']
};
