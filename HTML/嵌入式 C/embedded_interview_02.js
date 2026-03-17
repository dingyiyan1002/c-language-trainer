/**
 * 嵌入式 C 面试题 02 - 位操作 - 设置位
 */
export const embedded_interview_02 = {
  title: '位操作 - 设置位',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `#include <stdio.h>

// 设置第 n 位
unsigned int set_bit(unsigned int val, int n) {
    return val | (1 << n);
}

// 清除第 n 位
unsigned int clear_bit(unsigned int val, int n) {
    return val & ~(1 << n);
}

// 切换第 n 位
unsigned int toggle_bit(unsigned int val, int n) {
    return val ^ (1 << n);
}

// 检查第 n 位
int check_bit(unsigned int val, int n) {
    return (val >> n) & 1;
}`,
  answer: `位操作基础：| & ^ ~ << >>`,
  keyPoints: ['嵌入式系统', '硬件相关', '底层编程']
};
