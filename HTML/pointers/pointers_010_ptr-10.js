/**
 * 指针面试题 08 - 函数指针
 * 难度：⭐⭐⭐⭐⭐
 * 考点：函数指针定义、回调函数
 */

export const pointer_interview_008 = {
  title: '函数指针与回调',
  difficulty: '高级',
  question: `实现一个计算器，使用函数指针来执行不同的运算。

要求：
1. 定义 add、subtract、multiply、divide 四个函数
2. 使用函数指针调用这些函数
3. 实现一个 calculate 函数，接受函数指针作为参数`,
  answer: `#include <stdio.h>

// 定义运算函数
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }
int divide(int a, int b) { 
    if (b == 0) return 0;
    return a / b; 
}

// 函数指针类型定义
typedef int (*Operation)(int, int);

// 通用计算函数（回调）
int calculate(int a, int b, Operation op) {
    return op(a, b);
}

int main() {
    // 直接使用函数指针
    Operation ops[] = {add, subtract, multiply, divide};
    char *names[] = {"加", "减", "乘", "除"};
    
    int x = 20, y = 5;
    
    for (int i = 0; i < 4; i++) {
        int result = calculate(x, y, ops[i]);
        printf("%d %s %d = %d\\n", x, names[i], y, result);
    }
    
    // 输出：
    // 20 加 5 = 25
    // 20 减 5 = 15
    // 20 乘 5 = 100
    // 20 除 5 = 4
    
    return 0;
}

函数指针语法：
- 定义：返回类型 (*指针名)(参数类型)
- typedef: typedef 返回类型 (*别名)(参数类型)
- 调用：指针名 (参数) 或 (*指针名)(参数)

应用场景：
- 回调函数
- 函数表/跳转表
- 状态机
- 策略模式`,
  keyPoints: [
    '函数指针存储函数入口地址',
    'typedef 简化函数指针语法',
    '函数指针可作为参数传递',
    '实现回调和策略模式'
  ],
  commonMistakes: [
    '忘记函数指针的括号 (*op)',
    '混淆函数和函数指针',
    '不理解回调函数的原理',
    '忘记检查除零等边界条件'
  ]
};
