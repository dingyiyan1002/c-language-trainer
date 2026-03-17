/**
 * 基础练习题 09 - 函数定义与调用
 * 难度：★
 */
export const basics_09 = {
  title: '函数定义与调用',
  difficulty: '入门',
  question: `完成以下练习`,
  code: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(3, 5);
    printf("3 + 5 = %d\n", result);
    return 0;
}`,
  answer: `函数的定义、参数传递、返回值`,
  keyPoints: ['基础语法', '核心概念', '入门必备']
};
