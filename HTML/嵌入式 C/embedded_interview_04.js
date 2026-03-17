/**
 * 嵌入式 C 面试题 04 - 中断服务程序
 */
export const embedded_interview_04 = {
  title: '中断服务程序',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <signal.h>

volatile sig_atomic_t interrupt_count = 0;

void interrupt_handler(int sig) {
    interrupt_count++;  // 原子操作
}

int main() {
    signal(SIGINT, interrupt_handler);
    
    while (1) {
        printf("Interrupts: %d\n", interrupt_count);
    }
    return 0;
}`,
  answer: `中断处理，sig_atomic_t 保证原子性`,
  keyPoints: ['嵌入式系统', '硬件相关', '底层编程']
};
