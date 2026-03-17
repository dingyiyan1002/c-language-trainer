/**
 * 指针面试题 07 - 指针与字符串
 * 难度：⭐⭐⭐⭐
 * 考点：字符串常量、字符数组、字符指针
 */

export const pointer_interview_007 = {
  title: '指针与字符串',
  difficulty: '中级',
  question: `以下代码有什么问题？

#include <stdio.h>

int main() {
    char *str1 = "hello";
    char str2[] = "hello";
    
    str1[0] = 'H';
    str2[0] = 'H';
    
    printf("%s\\n", str1);
    printf("%s\\n", str2);
    
    return 0;
}`,
  answer: `问题分析：
str1[0] = 'H'; 会导致未定义行为（通常崩溃）

原因：
1. char *str1 = "hello";
   - "hello" 是字符串常量，存储在只读数据段
   - str1 指向只读内存
   - 尝试修改会导致段错误

2. char str2[] = "hello";
   - 在栈上创建数组并复制字符串
   - str2 是可修改的
   - str2[0] = 'H'; 是安全的

修复方法：
// 方法 1：使用数组（推荐）
char str1[] = "hello";
str1[0] = 'H';  // OK

// 方法 2：如果只需要读取，不要修改
const char *str1 = "hello";
// str1[0] = 'H';  // 仍然错误，但 const 提醒不能改

// 方法 3：动态分配
char *str1 = malloc(6);
strcpy(str1, "hello");
str1[0] = 'H';  // OK
free(str1);

sizeof 对比：
char *p = "hello";      // sizeof(p) = 8 (64 位指针)
char arr[] = "hello";   // sizeof(arr) = 6 (5 字符 + 1 结束符)`,
  keyPoints: [
    '字符串常量存储在只读区',
    '字符数组在栈上可修改',
    'char* 指向常量不能修改',
    'char[] 创建可修改副本'
  ],
  commonMistakes: [
    '试图修改字符串常量',
    '混淆 char* 和 char[] 的区别',
    '不理解字符串常量的存储位置',
    '忘记字符串有隐藏的\\0 结束符'
  ]
};
