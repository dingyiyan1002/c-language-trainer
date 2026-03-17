/**
 * Linux 系统编程面试题 05 - 线程创建
 */
export const linux_interview_05 = {
  title: '线程创建',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <pthread.h>

void* thread_func(void *arg) {
    printf("Thread running\n");
    return NULL;
}

int main() {
    pthread_t tid;
    pthread_create(&tid, NULL, thread_func, NULL);
    pthread_join(tid, NULL);
    printf("Thread finished\n");
    return 0;
}`,
  answer: `pthread 创建线程，join 等待线程`,
  keyPoints: ['系统调用', '进程/线程', '实际应用']
};
