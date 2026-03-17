/**
 * 指针面试题 23 - 返回指针的函数
 */
export const pointer_interview_23 = {
  title: '返回指针的函数',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// 危险：返回局部变量地址
char* dangerous() {
    char local[] = "Hello";
    return local;  // 错误！
}

// 正确：返回静态变量或动态分配
char* safe_static() {
    static char buffer[100];
    strcpy(buffer, "Hello");
    return buffer;
}

char* safe_malloc() {
    char *buffer = malloc(100);
    strcpy(buffer, "Hello");
    return buffer;  // 调用者负责 free
}`,
  answer: `不能返回局部变量地址`,
  keyPoints: ['指针高级应用', '内存模型', '实际场景']
};
