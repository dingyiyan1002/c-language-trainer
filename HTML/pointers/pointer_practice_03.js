/**
 * 指针专项跟打练习 03 - 指针与函数
 * 难度：⭐⭐⭐
 * 目标：掌握指针作为函数参数（传址调用）
 */

export const pointer_practice_03 = {
  title: '指针与函数跟打',
  difficulty: '中级',
  exercise: \`// 跟打练习 3：实现 swap 函数
#include <stdio.h>

// 完成 swap 函数，交换两个变量的值
void swap(____ a, ____ b) {
    int temp = ____;
    ____ = *b;
    ____ = temp;
}

int main() {
    int x = 10, y = 20;
    printf("Before: x=%d, y=%d\\n", x, y);
    
    swap(____, ____);  // 调用 swap
    
    printf("After: x=%d, y=%d\\n", x, y);
    
    return 0;
}

// 预期输出：
// Before: x=10, y=20
// After: x=20, y=10\`,
  answer: \`#include <stdio.h>

// 完成 swap 函数，交换两个变量的值
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    printf("Before: x=%d, y=%d\\n", x, y);
    
    swap(&x, &y);  // 传递地址
    
    printf("After: x=%d, y=%d\\n", x, y);
    
    return 0;
}\`,
  keyPoints: [
    '传值调用：函数内修改不影响原变量',
    '传址调用：通过指针修改原变量',
    '调用时传递 &x &y（地址）',
    '函数内用 *a *b 访问和修改'
  ],
  tips: [
    '需要修改实参时用指针',
    '调用时传地址 &variable',
    '函数定义用 *param',
    '函数内用 *param 访问值'
  ]
};
