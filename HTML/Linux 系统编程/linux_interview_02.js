/**
 * Linux 系统编程面试题 02 - 管道通信
 */
export const linux_interview_02 = {
  title: '管道通信',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <unistd.h>
#include <string.h>

int main() {
    int pipefd[2];
    pipe(pipefd);
    
    if (fork() == 0) {
        // 子进程 - 写
        close(pipefd[0]);
        write(pipefd[1], "Hello", 6);
        close(pipefd[1]);
    } else {
        // 父进程 - 读
        close(pipefd[1]);
        char buf[100];
        read(pipefd[0], buf, sizeof(buf));
        printf("Received: %s\n", buf);
        close(pipefd[0]);
        wait(NULL);
    }
    return 0;
}`,
  answer: `管道用于进程间通信，单向数据流`,
  keyPoints: ['系统调用', '进程/线程', '实际应用']
};
