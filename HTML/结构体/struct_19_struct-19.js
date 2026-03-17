/**
 * 结构体面试题 19 - 结构体位域应用
 * 难度：★★★★★
 */
export const struct_interview_19 = {
  title: '结构体位域应用',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>

struct Packet {
    unsigned int header: 4;
    unsigned int type: 4;
    unsigned int length: 16;
    unsigned int data: 8;
};  // 共 4 字节`,
  answer: `位域压缩数据、网络协议`,
  keyPoints: ['结构体核心概念', '内存布局', '实际应用']
};
