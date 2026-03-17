/**
 * 指针专项跟打练习 02 - 指针与数组
 * 难度：⭐⭐⭐
 * 目标：理解指针和数组的关系
 */

export const pointer_practice_02 = {
  title: '指针与数组跟打',
  difficulty: '中级',
  exercise: \`// 跟打练习 2：指针遍历数组
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = ____;  // p 指向数组首元素
    int i;
    
    // 方法 1：指针算术
    for (i = 0; i < 5; i++) {
        printf("arr[%d] = %d, *(p+%d) = %d\\n", 
               i, arr[i], i, ____);
    }
    
    // 方法 2：移动指针
    p = arr;
    for (i = 0; i < 5; i++) {
        printf("*p = %d, p++\\n", ____);
        ____;  // 移动指针
    }
    
    return 0;
}\`,
  answer: \`#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = arr;  // p 指向数组首元素（或 &arr[0]）
    int i;
    
    // 方法 1：指针算术
    for (i = 0; i < 5; i++) {
        printf("arr[%d] = %d, *(p+%d) = %d\\n", 
               i, arr[i], i, *(p+i));
    }
    
    // 方法 2：移动指针
    p = arr;
    for (i = 0; i < 5; i++) {
        printf("*p = %d, p++\\n", *p);
        p++;  // 移动指针到下一个元素
    }
    
    return 0;
}\`,
  keyPoints: [
    '数组名本身就是指向首元素的指针',
    'arr[i] 等价于 *(arr+i)',
    'p++ 移动一个元素的大小（int 是 4 字节）',
    '指针可以像数组一样用 [] 运算符'
  ],
  tips: [
    'int *p = arr 等价于 int *p = &arr[0]',
    '*(p+i) 访问第 i 个元素',
    'p[i] 等价于 *(p+i)',
    'p++ 后 p 指向下一个 int'
  ]
};
