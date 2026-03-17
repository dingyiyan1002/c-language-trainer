/**
 * 基础练习题 06 - 9x9 乘法表
 * 难度：★
 */
export const basics_06 = {
  title: '9x9 乘法表',
  difficulty: '入门',
  question: `完成以下练习`,
  code: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 9; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%dx%d=%2d  ", j, i, i*j);
        }
        printf("\n");
    }
    return 0;
}`,
  answer: `嵌套循环经典练习`,
  keyPoints: ['基础语法', '核心概念', '入门必备']
};
