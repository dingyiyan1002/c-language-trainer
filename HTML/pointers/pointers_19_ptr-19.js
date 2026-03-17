/**
 * 指针面试题 19 - 快速排序 - 指针实现
 * 难度：★★★★★
 */
export const pointer_interview_19 = {
  title: '快速排序 - 指针实现',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>

void swap(int *a, int *b) {
    int t = *a; *a = *b; *b = t;
}

int partition(int *arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i+1], &arr[high]);
    return i + 1;
}`,
  answer: `指针传参、原地排序、分治思想`,
  keyPoints: ['指针核心概念', '实际应用', '代码分析']
};
