/**
 * Linux 系统编程面试题 04 - 文件锁
 */
export const linux_interview_04 = {
  title: '文件锁',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>

int main() {
    int fd = open("test.txt", O_RDWR | O_CREAT, 0644);
    
    struct flock fl;
    fl.l_type = F_WRLCK;    // 写锁
    fl.l_whence = SEEK_SET;
    fl.l_start = 0;
    fl.l_len = 0;           // 锁整个文件
    
    fcntl(fd, F_SETLK, &fl);
    printf("File locked\n");
    
    // ... 操作文件 ...
    
    fl.l_type = F_UNLCK;    // 解锁
    fcntl(fd, F_SETLK, &fl);
    close(fd);
    return 0;
}`,
  answer: `fcntl 文件锁，防止并发冲突`,
  keyPoints: ['系统调用', '进程/线程', '实际应用']
};
