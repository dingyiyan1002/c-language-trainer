/**
 * 结构体面试题 15 - typedef 结构体
 * 难度：★★★
 */
export const struct_interview_15 = {
  title: 'typedef 结构体',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `#include <stdio.h>

typedef struct {
    int x, y;
} Point;

typedef struct Node {
    int data;
    struct Node *next;
} Node;`,
  answer: `typedef 简化结构体声明`,
  keyPoints: ['结构体核心概念', '内存布局', '实际应用']
};
