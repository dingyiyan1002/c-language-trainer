/**
 * 算法面试题 11 - 栈的实现
 * 难度：⭐⭐⭐
 * 考点：栈、数组实现
 */

export const algorithm_interview_11 = {
  title: '栈的实现',
  difficulty: '中级',
  question: \`用数组实现栈：

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];
    int top;  // 栈顶指针
} Stack;

void init_stack(Stack *s) {
    s->top = ____;  // 初始化栈顶
}

bool is_empty(Stack *s) {
    return ____;
}

bool is_full(Stack *s) {
    return ____;
}

bool push(Stack *s, int value) {
    if (____) return false;  // 栈满
    s->data[____] = value;  // 先放值
    ____;  // 再移动 top
    return true;
}

int pop(Stack *s) {
    if (____) return -1;  // 栈空
    ____;  // 先移动 top
    return s->data[____];  // 再返回值
}

int peek(Stack *s) {
    if (____) return -1;
    return s->data[____];
}\`,
  answer: \`void init_stack(Stack *s) {
    s->top = -1;  // 初始化栈顶
}

bool is_empty(Stack *s) {
    return s->top == -1;
}

bool is_full(Stack *s) {
    return s->top == MAX_SIZE - 1;
}

bool push(Stack *s, int value) {
    if (is_full(s)) return false;  // 栈满
    s->data[++s->top] = value;  // 先移动 top 再放值
    return true;
}

int pop(Stack *s) {
    if (is_empty(s)) return -1;  // 栈空
    return s->data[s->top--];  // 先返回值再移动 top
}

int peek(Stack *s) {
    if (is_empty(s)) return -1;
    return s->data[s->top];
}\`,
  keyPoints: [
    'top=-1 表示空栈',
    'top=MAX_SIZE-1 表示满栈',
    'push: 先 ++top 再赋值',
    'pop: 先取值再 --top',
    'peek: 只看不改'
  ],
  commonMistakes: [
    'top 初始化为 0（应该是 -1）',
    'push 和 pop 的顺序错误',
    '忘记检查栈空/栈满',
    'peek 修改了 top 指针'
  ]
};
