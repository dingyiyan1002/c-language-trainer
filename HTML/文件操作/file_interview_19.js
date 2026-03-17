/**
 * 文件操作面试题 19 - 文件复制函数实现
 * 难度：⭐⭐⭐⭐
 * 考点：综合文件操作、错误处理
 */

export const file_interview_19 = {
  title: '文件复制函数实现',
  difficulty: '高级',
  question: `实现一个文件复制函数：
int copy_file(const char *src, const char *dst);

要求：
1. 处理错误情况
2. 高效复制（不要一次读整个文件）
3. 返回 0 成功，-1 失败`,
  answer: `int copy_file(const char *src, const char *dst) {
    if (src == NULL || dst == NULL) return -1;
    
    FILE *src_fp = fopen(src, "rb");
    if (src_fp == NULL) return -1;
    
    FILE *dst_fp = fopen(dst, "wb");
    if (dst_fp == NULL) {
        fclose(src_fp);
        return -1;
    }
    
    // 使用缓冲区提高效率
    char buffer[4096];
    size_t bytes_read;
    
    while ((bytes_read = fread(buffer, 1, sizeof(buffer), src_fp)) > 0) {
        size_t bytes_written = fwrite(buffer, 1, bytes_read, dst_fp);
        if (bytes_written != bytes_read) {
            fclose(src_fp);
            fclose(dst_fp);
            return -1;
        }
    }
    
    // 检查是否有读取错误
    if (ferror(src_fp)) {
        fclose(src_fp);
        fclose(dst_fp);
        return -1;
    }
    
    fclose(src_fp);
    fclose(dst_fp);
    return 0;
}

关键点：
- 二进制模式"rb"/"wb"
- 4KB 缓冲区平衡效率
- 每次写入后检查字节数
- 错误时关闭已打开的文件`,
  keyPoints: [
    '二进制模式复制',
    '缓冲区提高效率',
    '检查每次读写返回值',
    '错误时清理资源'
  ],
  commonMistakes: [
    '不检查 fopen 返回值',
    '忘记关闭文件',
    '不检查 fread/fwrite 返回值',
    '用文本模式复制二进制文件',
    '错误时没有关闭已打开的文件'
  ]
};
