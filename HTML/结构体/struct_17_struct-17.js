/**
 * 结构体面试题 17 - 结构体实现栈
 * 难度：★★★★★
 */
export const struct_interview_17 = {
  title: '结构体实现栈',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <stdlib.h>

struct Stack {
    int *data;
    int top;
    int capacity;
};

struct Stack* create_stack(int cap) {
    struct Stack *s = malloc(sizeof(struct Stack));
    s->data = malloc(cap * sizeof(int));
    s->top = -1;
    s->capacity = cap;
    return s;
}

void push(struct Stack *s, int val) {
    if (s->top < s->capacity - 1) {
        s->data[++s->top] = val;
    }
}`,
  answer: `结构体实现数据结构、动态内存`,
  keyPoints: ['结构体核心概念', '内存布局', '实际应用']
};
