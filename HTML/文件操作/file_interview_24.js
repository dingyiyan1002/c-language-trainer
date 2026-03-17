/**
 * 文件操作面试题 24 - 内存映射文件 (mmap)
 * 难度：⭐⭐⭐⭐⭐
 * 考点：mmap、零拷贝、大文件处理
 */

export const file_interview_24 = {
  title: '内存映射文件 (mmap)',
  difficulty: '专家',
  question: `mmap 是什么？相比传统文件 IO 有什么优势？

用 mmap 实现文件读取。`,
  answer: `mmap 内存映射：

将文件直接映射到进程地址空间，像访问内存一样访问文件。

示例：
#include <sys/mman.h>
#include <fcntl.h>
#include <unistd.h>

char *map_file(const char *path, size_t *size) {
    int fd = open(path, O_RDONLY);
    if (fd < 0) return NULL;
    
    struct stat sb;
    fstat(fd, &sb);
    *size = sb.st_size;
    
    char *mapped = mmap(NULL, *size, PROT_READ, MAP_PRIVATE, fd, 0);
    close(fd);  // mmap 后可以关闭 fd
    
    if (mapped == MAP_FAILED) return NULL;
    return mapped;
}

// 使用
size_t size;
char *data = map_file("bigfile.bin", &size);
printf("%c", data[0]);  // 直接访问
munmap(data, size);  // 释放

优势：
1. 零拷贝：不需要 read 到用户缓冲区
2. 按需分页：只加载访问的页面
3. 大文件友好：不需要分配大缓冲区
4. 进程共享：MAP_SHARED 可多进程共享

劣势：
- 小文件可能更慢
- 平台相关（POSIX）
- 需要处理页面对齐`,
  keyPoints: [
    'mmap 零拷贝',
    '按需分页',
    '大文件高效',
    '用完 munmap 释放'
  ],
  commonMistakes: [
    '忘记 munmap 导致内存泄漏',
    'mmap 后关闭 fd 前访问',
    '小文件也用 mmap',
    '忽略 MAP_FAILED 检查'
  ]
};
