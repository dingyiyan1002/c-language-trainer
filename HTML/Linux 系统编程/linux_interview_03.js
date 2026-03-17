/**
 * Linux 系统编程面试题 03 - 信号处理
 */
export const linux_interview_03 = {
  title: '信号处理',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <unistd.h>

void sigint_handler(int sig) {
    printf("\nCaught SIGINT!\n");
}

int main() {
    signal(SIGINT, sigint_handler);
    
    printf("Press Ctrl+C to test...\n");
    while (1) {
        printf("Working...\n");
        sleep(1);
    }
    return 0;
}`,
  answer: `signal 注册信号处理函数`,
  keyPoints: ['系统调用', '进程/线程', '实际应用']
};
