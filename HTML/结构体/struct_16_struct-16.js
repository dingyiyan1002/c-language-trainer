/**
 * 结构体面试题 16 - 枚举与结构体
 * 难度：★★★
 */
export const struct_interview_16 = {
  title: '枚举与结构体',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `#include <stdio.h>

enum Status { OK, ERROR, PENDING };

struct Result {
    enum Status status;
    int value;
    char *message;
};`,
  answer: `枚举作为结构体成员`,
  keyPoints: ['结构体核心概念', '内存布局', '实际应用']
};
