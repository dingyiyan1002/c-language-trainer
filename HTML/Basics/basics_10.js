/**
 * 基础练习题 10 - 递归求阶乘
 * 难度：★
 */
export const basics_10 = {
  title: '递归求阶乘',
  difficulty: '入门',
  question: `完成以下练习`,
  code: `#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("5! = %d\n", factorial(5));
    return 0;
}`,
  answer: `递归函数基础，n! = n * (n-1)!`,
  keyPoints: ['基础语法', '核心概念', '入门必备']
};
