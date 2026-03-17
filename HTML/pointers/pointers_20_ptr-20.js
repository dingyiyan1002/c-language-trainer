/**
 * 指针面试题 20 - 二分查找 - 指针版
 * 难度：★★★
 */
export const pointer_interview_20 = {
  title: '二分查找 - 指针版',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `#include <stdio.h>

int* binary_search(int *arr, int n, int target) {
    int *left = arr, *right = arr + n - 1;
    while (left <= right) {
        int *mid = left + (right - left) / 2;
        if (*mid == target) return mid;
        if (*mid < target) left = mid + 1;
        else right = mid - 1;
    }
    return NULL;
}`,
  answer: `指针算术、二分思想、返回指针`,
  keyPoints: ['指针核心概念', '实际应用', '代码分析']
};
