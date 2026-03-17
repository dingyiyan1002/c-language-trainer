/**
 * 指针面试题 15 - 返回指针的函数
 * 难度：★★★★★
 */
export const pointer_interview_15 = {
  title: '返回指针的函数',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <stdlib.h>

int* find_max(int *arr, int n) {
    int *max = arr;
    for (int i = 1; i < n; i++) {
        if (arr[i] > *max) max = &arr[i];
    }
    return max;
}`,
  answer: `返回指针而不是值，注意不能返回局部变量地址`,
  keyPoints: ['指针核心概念', '实际应用', '代码分析']
};
