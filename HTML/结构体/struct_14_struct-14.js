/**
 * 结构体面试题 14 - 结构体数组排序
 * 难度：★★★★★
 */
export const struct_interview_14 = {
  title: '结构体数组排序',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int score;
};

void sort_by_score(struct Student *arr, int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = i+1; j < n; j++) {
            if (arr[i].score < arr[j].score) {
                struct Student t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
}`,
  answer: `结构体数组、完整拷贝、排序`,
  keyPoints: ['结构体核心概念', '内存布局', '实际应用']
};
