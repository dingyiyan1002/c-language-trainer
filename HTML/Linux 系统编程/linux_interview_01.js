/**
 * Linux 系统编程面试题 01 - 进程创建 fork
 */
export const linux_interview_01 = {
  title: '进程创建 fork',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid = fork();
    
    if (pid < 0) {
        perror("fork failed");
        return 1;
    } else if (pid == 0) {
        // 子进程
        printf("Child PID: %d\n", getpid());
    } else {
        // 父进程
        printf("Parent PID: %d, Child PID: %d\n", getpid(), pid);
        wait(NULL);
    }
    return 0;
}`,
  answer: `fork 返回值：父进程返回子 PID，子进程返回 0`,
  keyPoints: ['系统调用', '进程/线程', '实际应用']
};
