/**
 * 嵌入式 C 面试题 03 - 内存映射 I/O
 */
export const embedded_interview_03 = {
  title: '内存映射 I/O',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <stdint.h>

// 定义硬件寄存器地址
#define GPIO_BASE  0x40020000
#define GPIO_ODR   (*(volatile uint32_t*)(GPIO_BASE + 0x14))

int main() {
    // 直接操作硬件寄存器
    GPIO_ODR |= (1 << 5);    // 设置第 5 引脚为高电平
    GPIO_ODR &= ~(1 << 5);   // 设置第 5 引脚为低电平
    return 0;
}`,
  answer: `嵌入式系统直接访问硬件`,
  keyPoints: ['嵌入式系统', '硬件相关', '底层编程']
};
