/**
 * 结构体面试题 18 - 变长结构体
 * 难度：★★★★★
 */
export const struct_interview_18 = {
  title: '变长结构体',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <stdlib.h>

struct Buffer {
    size_t size;
    char data[];  // 柔性数组成员
};

struct Buffer* create_buffer(size_t size) {
    struct Buffer *buf = malloc(sizeof(struct Buffer) + size);
    buf->size = size;
    return buf;
}`,
  answer: `C99 柔性数组成员`,
  keyPoints: ['结构体核心概念', '内存布局', '实际应用']
};
