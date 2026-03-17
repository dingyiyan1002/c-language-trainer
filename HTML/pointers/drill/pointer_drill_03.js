/**
 * 指针专项跟打练习 03 - 指针与函数（传址调用）
 * 难度：⭐⭐⭐
 * 建议：手打 3 遍，理解传址 vs 传值
 */

export const pointer_drill_03 = {
  title: '指针与函数',
  difficulty: '中级',
  code: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void doubleValue(int *p) {
    *p = *p * 2;
}

int main() {
    int x = 10, y = 20;
    
    printf("交换前：x = %d, y = %d\\n", x, y);
    swap(&x, &y);
    printf("交换后：x = %d, y = %d\\n", x, y);
    
    int num = 5;
    printf("加倍前：%d\\n", num);
    doubleValue(&num);
    printf("加倍后：%d\\n", num);
    
    return 0;
}`,
  practicePoints: [
    '函数参数用指针实现传址调用',
    '实参传递地址：swap(&x, &y)',
    '形参接收指针：int *a, int *b',
    '通过指针修改原变量的值'
  ],
  output: `交换前：x = 10, y = 20
交换后：x = 20, y = 10
加倍前：5
加倍后：10`
};