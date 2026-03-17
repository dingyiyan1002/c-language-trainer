/**
 * 基础练习题 04 - 判断奇偶数
 * 难度：★
 */
export const basics_04 = {
  title: '判断奇偶数',
  difficulty: '入门',
  question: `完成以下练习`,
  code: `#include <stdio.h>

int main() {
    int num = 7;
    
    if (num % 2 == 0) {
        printf("%d 是偶数\n", num);
    } else {
        printf("%d 是奇数\n", num);
    }
    
    return 0;
}`,
  answer: `if-else 条件判断，% 运算符判断奇偶`,
  keyPoints: ['基础语法', '核心概念', '入门必备']
};
