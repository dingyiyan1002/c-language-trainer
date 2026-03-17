/**
 * 文件操作面试题 22 - 追加写入的原子性
 * 难度：⭐⭐⭐⭐
 * 考点：O_APPEND、并发写入
 */

export const file_interview_22 = {
  title: '追加写入的原子性',
  difficulty: '高级',
  question: `多个进程同时向一个文件追加写入，如何保证不冲突？

O_APPEND 标志的作用是什么？`,
  answer: `O_APPEND 保证追加原子性：

打开文件时指定 O_APPEND：
int fd = open("log.txt", O_WRONLY | O_APPEND | O_CREAT, 0644);

O_APPEND 的作用：
1. 每次 write 前自动 seek 到文件末尾
2. seek+write 是原子操作
3. 多进程同时追加不会覆盖

示例（日志写入）：
void write_log(const char *msg) {
    int fd = open("app.log", O_WRONLY | O_APPEND | O_CREAT, 0644);
    if (fd < 0) return;
    
    write(fd, msg, strlen(msg));  // 原子追加
    close(fd);
}

为什么需要原子性：
进程 A: seek 到末尾 (位置 100)
进程 B: seek 到末尾 (位置 100)
进程 A: write 10 字节 (到 110)
进程 B: write 10 字节 (覆盖 A 的数据！)

用 O_APPEND:
进程 A: seek+write 原子 (到 110)
进程 B: seek+write 原子 (到 120)
不会覆盖

注意：fopen 的"a"模式也使用 O_APPEND`,
  keyPoints: [
    'O_APPEND 原子追加',
    '多进程安全写入',
    '日志文件常用',
    '避免数据覆盖'
  ],
  commonMistakes: [
    '手动 seek 再 write 不是原子操作',
    '多进程写入不加锁',
    '忽略 O_APPEND 的自动 seek',
    '用"w"模式追加导致清空'
  ]
};
