/**
 * 基础练习题 08 - 找最大值
 * 难度：★
 */
export const basics_08 = {
  title: '找最大值',
  difficulty: '入门',
  question: `完成以下练习`,
  code: `#include <stdio.h>

int main() {
    int arr[] = {23, 56, 12, 89, 34};
    int max = arr[0];
    
    for (int i = 1; i < 5; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    printf("Max = %d\n", max);
    return 0;
}`,
  answer: `遍历数组找最大值`,
  keyPoints: ['基础语法', '核心概念', '入门必备']
};
