/**
 * 基础练习题 02 - 变量定义与输出
 * 难度：★
 */
export const basics_02 = {
  title: '变量定义与输出',
  difficulty: '入门',
  question: `完成以下练习`,
  code: `#include <stdio.h>

int main() {
    int age = 25;
    float height = 1.75;
    char grade = 'A';
    
    printf("Age: %d\n", age);
    printf("Height: %.2f\n", height);
    printf("Grade: %c\n", grade);
    
    return 0;
}`,
  answer: `int、float、char 三种基本类型的定义和输出`,
  keyPoints: ['基础语法', '核心概念', '入门必备']
};
