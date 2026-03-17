/**
 * 指针专项跟打练习 05 - const 与指针
 * 难度：⭐⭐⭐⭐
 * 目标：掌握 const 与指针的四种组合
 */

export const pointer_practice_05 = {
  title: 'const 与指针跟打',
  difficulty: '高级',
  exercise: \`// 跟打练习 5：const 与指针的四种组合
#include <stdio.h>

int main() {
    int a = 10, b = 20;
    
    // 1. 指针常量：指针本身是常量（不能改指向）
    int * const ptr1 = &a;
    ____ = 15;    // ✓ 可以改值
    // ptr1 = &b; // ✗ 不能改指向
    
    // 2. 常量指针：指向常量的指针（不能改值）
    const int *ptr2 = &a;
    // *ptr2 = 15;  // ✗ 不能改值
    ptr2 = &b;      // ✓ 可以改指向
    
    // 3. 指向常量的常量指针（都不能改）
    const int * const ptr3 = &a;
    // *ptr3 = 15;  // ✗ 不能改值
    // ptr3 = &b;   // ✗ 不能改指向
    
    // 4. 普通指针（都能改）
    int *ptr4 = &a;
    ____ = 25;     // ✓ 可以改值
    ____ = &b;     // ✓ 可以改指向
    
    printf("a=%d, b=%d\\n", a, b);
    
    return 0;
}\`,
  answer: \`#include <stdio.h>

int main() {
    int a = 10, b = 20;
    
    // 1. 指针常量：指针本身是常量（不能改指向）
    int * const ptr1 = &a;
    *ptr1 = 15;    // ✓ 可以改值
    // ptr1 = &b;  // ✗ 不能改指向
    
    // 2. 常量指针：指向常量的指针（不能改值）
    const int *ptr2 = &a;
    // *ptr2 = 15;  // ✗ 不能改值
    ptr2 = &b;      // ✓ 可以改指向
    
    // 3. 指向常量的常量指针（都不能改）
    const int * const ptr3 = &a;
    // *ptr3 = 15;  // ✗ 不能改值
    // ptr3 = &b;   // ✗ 不能改指向
    
    // 4. 普通指针（都能改）
    int *ptr4 = &a;
    *ptr4 = 25;    // ✓ 可以改值
    ptr4 = &b;     // ✓ 可以改指向
    
    printf("a=%d, b=%d\\n", a, b);
    
    return 0;
}\`,
  keyPoints: [
    'int * const p: 指针常量（p 不能改）',
    'const int *p: 常量指针（*p 不能改）',
    'const int * const p: 都不能改',
    'int *p: 普通指针（都能改）',
    '记忆口诀：const 在 * 前改值，const 在 * 后改向'
  ],
  tips: [
    '从右往左读：int * const p 读作 "p 是 const 指针指向 int"',
    'const int *p 读作 "p 是指针指向 const int"',
    'const 修饰谁，谁就不能改',
    'const 在 * 左边：值不能改',
    'const 在 * 右边：指针不能改'
  ]
};
