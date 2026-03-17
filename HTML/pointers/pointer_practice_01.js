/**
 * 指针专项跟打练习 01 - 基础指针操作
 * 难度：⭐⭐
 * 目标：熟悉指针定义、赋值、解引用
 */

export const pointer_practice_01 = {
  title: '基础指针跟打',
  difficulty: '初级',
  exercise: \`// 跟打练习 1：完成以下代码
#include <stdio.h>

int main() {
    int a = 10;
    int *p = ______;  // 让 p 指向 a
    
    printf("a = %d\\n", a);
    printf("*p = %d\\n", ____);  // 通过指针访问 a
    printf("&a = %p\\n", ____);  // 打印 a 的地址
    printf("p = %p\\n", ____);   // 打印 p 的值
    
    ____ = 20;  // 通过指针修改 a 的值
    printf("a = %d\\n", a);
    
    return 0;
}

// 预期输出：
// a = 10
// *p = 10
// &a = 0x...
// p = 0x...
// a = 20\`,
  answer: \`#include <stdio.h>

int main() {
    int a = 10;
    int *p = &a;  // 让 p 指向 a
    
    printf("a = %d\\n", a);
    printf("*p = %d\\n", *p);  // 通过指针访问 a
    printf("&a = %p\\n", &a);  // 打印 a 的地址
    printf("p = %p\\n", p);   // 打印 p 的值
    
    *p = 20;  // 通过指针修改 a 的值
    printf("a = %d\\n", a);
    
    return 0;
}\`,
  keyPoints: [
    '& 取地址运算符',
    '* 解引用运算符',
    '指针存储的是地址',
    '通过 *p 可以访问和修改指向的值'
  ],
  tips: [
    '指针定义：类型名 *指针名',
    '初始化指针：指针 = &变量',
    '访问值：*指针',
    '修改值：*指针 = 新值'
  ]
};
