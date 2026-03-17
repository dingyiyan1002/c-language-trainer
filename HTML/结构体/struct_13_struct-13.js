/**
 * 结构体面试题 13 - 结构体嵌套
 * 难度：★★★
 */
export const struct_interview_13 = {
  title: '结构体嵌套',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `#include <stdio.h>

struct Address {
    char city[50];
    char street[100];
};

struct Person {
    char name[50];
    int age;
    struct Address addr;
};`,
  answer: `结构体包含结构体，成员访问`,
  keyPoints: ['结构体核心概念', '内存布局', '实际应用']
};
