/**
 * 文件操作面试题 23 - 文件描述符与 FILE 指针
 * 难度：⭐⭐⭐⭐
 * 考点：底层 IO vs 缓冲 IO、fileno/fdopen
 */

export const file_interview_23 = {
  title: '文件描述符与 FILE 指针',
  difficulty: '高级',
  question: `文件描述符 (int fd) 和 FILE 指针有什么区别？

如何互相转换？`,
  answer: `文件描述符 vs FILE 指针：

文件描述符 (int fd):
- 底层 IO，POSIX 标准
- open/read/write/close
- 无缓冲，每次调用进入内核
- 更快但频繁系统调用

FILE 指针 (FILE *fp):
- 标准库 IO，C 标准
- fopen/fread/fwrite/fclose
- 有用户空间缓冲
- 减少系统调用次数

互相转换：

1. fd → FILE*
   int fd = open("file.txt", O_RDWR);
   FILE *fp = fdopen(fd, "r+");
   // 现在可以用 fprintf 等

2. FILE* → fd
   FILE *fp = fopen("file.txt", "r");
   int fd = fileno(fp);
   // 现在可以用 read/write

使用场景：
- 高性能：用文件描述符
- 格式化 IO：用 FILE 指针
- 网络 socket：通常用 fd
- 普通文件：通常用 FILE*`,
  keyPoints: [
    'fd 是底层 IO',
    'FILE* 是缓冲 IO',
    'fdopen 转换 fd 到 FILE*',
    'fileno 获取 fd'
  ],
  commonMistakes: [
    '混用两种 IO 操作同一文件',
    '转换后关闭两次',
    '不理解缓冲机制',
    '忽略 fd 和 FILE* 的缓冲区同步'
  ]
};
