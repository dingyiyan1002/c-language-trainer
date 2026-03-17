/**
 * 文件操作面试题 25 - 文件 IO 性能优化
 * 难度：⭐⭐⭐⭐
 * 考点：缓冲、批量 IO、性能调优
 */

export const file_interview_25 = {
  title: '文件 IO 性能优化',
  difficulty: '高级',
  question: `如何优化文件 IO 性能？

列举至少 5 种优化方法。`,
  answer: `文件 IO 优化方法：

1. 使用缓冲 IO
   // 差：每次 1 字节
   while ((ch = fgetc(fp)) != EOF) { ... }
   
   // 好：批量读取
   char buf[8192];
   while (fread(buf, 1, sizeof(buf), fp) > 0) { ... }

2. 增大缓冲区
   char big_buf[65536];
   setvbuf(fp, big_buf, _IOFBF, sizeof(big_buf));

3. 减少系统调用
   // 差：每次循环 open/close
   for (i=0; i<1000; i++) {
       fd = open(...); write(fd, ...); close(fd);
   }
   
   // 好：打开一次
   fd = open(...);
   for (i=0; i<1000; i++) { write(fd, ...); }
   close(fd);

4. 顺序访问优于随机访问
   - 利用预读机制
   - 避免频繁 fseek

5. 异步 IO（高级）
   - aio_read/aio_write (POSIX)
   - io_uring (Linux 5.1+)

6. 直接 IO（绕过页缓存）
   - O_DIRECT 标志
   - 需要对齐缓冲区

7. 内存映射
   - mmap 大文件`,
  keyPoints: [
    '批量 IO 减少调用',
    '增大缓冲区',
    '顺序访问',
    '减少 open/close',
    '考虑 mmap'
  ],
  commonMistakes: [
    '小数据量频繁 IO',
    '忽略缓冲作用',
    '随机访问大文件',
    '不根据场景选择 IO 方式'
  ]
};
