/**
 * 文件操作面试题 21 - 文件锁机制
 * 难度：⭐⭐⭐⭐⭐
 * 考点：并发访问、文件锁
 */

export const file_interview_21 = {
  title: '文件锁机制',
  difficulty: '专家',
  question: `如何实现文件锁防止并发写入冲突？

（提示：fcntl 或 flock）`,
  answer: `文件锁实现（POSIX fcntl）：

#include <fcntl.h>
#include <unistd.h>

int lock_file(int fd, int lock_type) {
    struct flock fl;
    fl.l_type = lock_type;      // F_RDLCK/F_WRLCK
    fl.l_whence = SEEK_SET;
    fl.l_start = 0;
    fl.l_len = 0;  // 锁定整个文件
    
    return fcntl(fd, F_SETLKW, &fl);  // W=等待锁
}

int unlock_file(int fd) {
    struct flock fl;
    fl.l_type = F_UNLCK;
    fl.l_whence = SEEK_SET;
    fl.l_start = 0;
    fl.l_len = 0;
    
    return fcntl(fd, F_SETLKW, &fl);
}

使用示例：
int fd = open("data.txt", O_RDWR);
lock_file(fd, F_WRLCK);  // 加写锁
// ... 写入操作 ...
unlock_file(fd);  // 解锁

锁类型：
- F_RDLCK: 读锁（共享）
- F_WRLCK: 写锁（独占）
- F_UNLCK: 解锁

注意：Windows 用 LockFile/UnlockFile`,
  keyPoints: [
    'fcntl 文件锁',
    '读锁共享/写锁独占',
    '防止并发冲突',
    '用完必须解锁'
  ],
  commonMistakes: [
    '忘记解锁导致死锁',
    '读写锁混用',
    '不检查锁操作返回值',
    '忽略平台差异'
  ]
};
