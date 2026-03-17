/**
 * Linux 系统编程面试题 06 - 互斥锁
 */
export const linux_interview_06 = {
  title: '互斥锁',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <pthread.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
int counter = 0;

void* increment(void *arg) {
    for (int i = 0; i < 1000; i++) {
        pthread_mutex_lock(&mutex);
        counter++;
        pthread_mutex_unlock(&mutex);
    }
    return NULL;
}`,
  answer: `互斥锁保护共享资源`,
  keyPoints: ['系统调用', '进程/线程', '实际应用']
};
