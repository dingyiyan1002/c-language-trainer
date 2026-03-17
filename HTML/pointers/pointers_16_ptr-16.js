/**
 * 指针面试题 16 - 指针实现 memcpy
 * 难度：★★★★★
 */
export const pointer_interview_16 = {
  title: '指针实现 memcpy',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <stdlib.h>

void* my_memcpy(void *dst, const void *src, size_t n) {
    char *d = (char*)dst;
    const char *s = (const char*)src;
    while (n--) *d++ = *s++;
    return dst;
}`,
  answer: `类型转换、指针算术、返回值`,
  keyPoints: ['指针核心概念', '实际应用', '代码分析']
};
