/**
 * 指针面试题 03 - 指针与数组
 * 难度：⭐⭐⭐⭐
 * 考点：数组名是指针、指针算术运算
 */

export const pointer_interview_003 = {
  title: '指针与数组',
  difficulty: '中级',
  question: `以下代码的输出是什么？

#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = arr;
    
    printf("*p = %d\\n", *p);
    printf("*(p+1) = %d\\n", *(p+1));
    printf("*(p+2) = %d\\n", *(p+2));
    
    p++;
    printf("*p = %d\\n", *p);
    
    printf("arr[2] = %d\\n", arr[2]);
    printf("*(arr+2) = %d\\n", *(arr+2));
    printf("2[arr] = %d\\n", 2[arr]);
    
    return 0;
}`,
  answer: `输出结果：
*p = 10
*(p+1) = 20
*(p+2) = 30
*p = 20
arr[2] = 30
*(arr+2) = 30
2[arr] = 30

解析：
1. 数组名 arr 本质上是首元素地址，等价于 &arr[0]
2. int *p = arr; 让 p 指向数组第一个元素
3. *(p+1) 访问 p 后面第 1 个 int 位置的值（20）
4. p++ 后，p 指向 arr[1]（20）
5. arr[2] 等价于 *(arr+2)
6. 2[arr] 也等价于 *(2+arr)，因为 [] 定义为 *(base+index)

核心要点：
- 数组名是指向首元素的常量指针
- arr[i] 等价于 *(arr+i)
- 指针可以进行算术运算（+、-、++、--）
- p+1 移动的字节数取决于指针类型（int*移动 4 字节）`,
  keyPoints: [
    '数组名是首元素地址',
    'arr[i] 等价于 *(arr+i)',
    '指针算术运算按类型大小移动',
    '2[arr] 语法上合法但不推荐'
  ],
  commonMistakes: [
    '认为数组名是变量（实际是常量）',
    '不理解指针 +1 移动的字节数',
    '混淆数组和指针的 sizeof 结果'
  ]
};
