/**
 * 指针面试题 13 - 指针与常量
 * 难度：★★★
 */
export const pointer_interview_13 = {
  title: '指针与常量',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `#include <stdio.h>

int main() {
    const int *p1;  // 指向常量的指针
    int * const p2;  // 常量指针
    return 0;
}`,
  answer: `const 在*左边值不能改，在右边指针不能改`,
  keyPoints: ['指针核心概念', '实际应用', '代码分析']
};
