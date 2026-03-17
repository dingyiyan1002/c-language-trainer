/**
 * 指针面试题 17 - 字符串反转 - 指针实现
 * 难度：★★★
 */
export const pointer_interview_17 = {
  title: '字符串反转 - 指针实现',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <string.h>

void reverse(char *str) {
    int len = strlen(str);
    for (int i = 0; i < len/2; i++) {
        char t = str[i];
        str[i] = str[len-1-i];
        str[len-1-i] = t;
    }
}`,
  answer: `双指针法，一头一尾交换`,
  keyPoints: ['指针核心概念', '实际应用', '代码分析']
};
