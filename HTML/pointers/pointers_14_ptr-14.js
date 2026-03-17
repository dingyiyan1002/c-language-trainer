/**
 * 指针面试题 14 - 指针数组排序
 * 难度：★★★★★
 */
export const pointer_interview_14 = {
  title: '指针数组排序',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <string.h>

void sort(char *arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = i+1; j < n; j++) {
            if (strcmp(arr[i], arr[j]) > 0) {
                char *t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
}`,
  answer: `指针数组存储字符串，交换指针而非内容`,
  keyPoints: ['指针核心概念', '实际应用', '代码分析']
};
