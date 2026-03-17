/**
 * 结构体面试题 12 - 结构体对齐
 * 难度：★★★
 */
export const struct_interview_12 = {
  title: '结构体对齐',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `#include <stdio.h>

struct Data {
    char a;      // 1 字节
    // 填充 3 字节
    int b;       // 4 字节
    double c;    // 8 字节
};  // 总共 16 字节`,
  answer: `内存对齐规则，填充字节`,
  keyPoints: ['结构体核心概念', '内存布局', '实际应用']
};
