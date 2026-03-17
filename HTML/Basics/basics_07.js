/**
 * 基础练习题 07 - 数组求和
 * 难度：★
 */
export const basics_07 = {
  title: '数组求和',
  difficulty: '入门',
  question: `完成以下练习`,
  code: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int sum = 0;
    
    for (int i = 0; i < 5; i++) {
        sum += arr[i];
    }
    
    printf("Sum = %d\n", sum);
    return 0;
}`,
  answer: `数组定义、遍历、累加求和`,
  keyPoints: ['基础语法', '核心概念', '入门必备']
};
