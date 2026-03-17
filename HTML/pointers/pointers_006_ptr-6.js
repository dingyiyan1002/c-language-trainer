/**
 * 指针面试题 04 - 指针与函数（传址调用）
 * 难度：⭐⭐⭐⭐
 * 考点：指针作为函数参数、交换两个数
 */

export const pointer_interview_004 = {
  title: '指针与函数 - 交换两个数',
  difficulty: '中级',
  question: `实现一个函数 swap，交换两个整数的值。

要求：
1. 不能使用全局变量
2. 必须在函数内部完成交换
3. 调用后 main 函数中的变量值要真正改变`,
  answer: `正确实现：
#include <stdio.h>

// 使用指针传址调用
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
    // 输出：x=20, y=10
    
    return 0;
}

错误示例（值传递）：
void swap_wrong(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    // 只交换了局部副本，不影响原变量
}

解析：
- C 语言默认是值传递，函数内修改不影响原变量
- 传递指针（地址）可以实现"传址调用"
- 函数内通过 *a、*b 解引用修改原内存的值

扩展：不使用临时变量交换
void swap_xor(int *a, int *b) {
    if (a != b) {  // 防止相同地址
        *a ^= *b;
        *b ^= *a;
        *a ^= *b;
    }
}`,
  keyPoints: [
    'C 语言是值传递',
    '指针实现传址调用',
    '传递变量的地址 &x',
    '函数内解引用 *a 修改原值'
  ],
  commonMistakes: [
    '忘记传递地址（写成 swap(x, y)）',
    '函数参数定义为 int 而非 int*',
    '函数内交换指针而非指针指向的值',
    '相同地址时异或交换会清零'
  ]
};
