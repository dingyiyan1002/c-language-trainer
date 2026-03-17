/**
 * 指针面试题 01 - 指针基础概念
 * 难度：⭐⭐⭐
 * 考点：指针定义、取地址、解引用
 */

export const pointer_interview_001 = {
  title: '指针基础概念',
  difficulty: '中级',
  question: `以下代码的输出是什么？

#include <stdio.h>

int main() {
    int a = 10;
    int *p = &a;
    
    printf("a = %d\\n", a);
    printf("*p = %d\\n", *p);
    printf("&a = %p\\n", (void*)&a);
    printf("p = %p\\n", (void*)p);
    
    *p = 20;
    printf("a = %d\\n", a);
    
    return 0;
}`,
  answer: `输出结果：
a = 10
*p = 10
&a = 0x7fff...（内存地址）
p = 0x7fff...（与&a 相同）
a = 20

解析：
1. int *p = &a; 定义了一个指向 int 的指针 p，存储 a 的地址
2. *p 是指针解引用，访问 p 指向的内存中的值
3. p 和 &a 的值相同，都是变量 a 的内存地址
4. *p = 20 通过指针修改了 a 的值，所以最后 a 变成 20

核心要点：
- 指针存储的是地址
- * 运算符用于解引用（访问指针指向的值）
- & 运算符用于取地址
- 通过指针可以间接修改变量的值`,
  keyPoints: [
    '指针存储地址',
    '* 解引用运算符',
    '& 取地址运算符',
    '通过指针间接修改变量'
  ],
  commonMistakes: [
    '混淆 *p（值）和 p（地址）',
    '忘记指针需要先赋值地址才能使用',
    '不理解指针和原变量共享同一内存'
  ]
};
