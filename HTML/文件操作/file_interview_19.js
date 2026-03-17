/**
 * 文件操作面试题 19 - 文件复制
 * 难度：⭐⭐⭐
 * 考点：fgetc/fputc、缓冲区优化
 */

export const file_interview_19 = {
  title: '文件复制',
  difficulty: '中级',
  question: \`实现文件复制函数（逐字符版本）：

#include <stdio.h>

int copy_file(const char *src, const char *dst) {
    FILE *fp_src = fopen(src, "rb");
    if (fp_src == NULL) {
        return -1;
    }
    
    FILE *fp_dst = fopen(dst, "wb");
    if (fp_dst == NULL) {
        fclose(fp_src);
        return -1;
    }
    
    int ch;
    while ((ch = fgetc(fp_src)) != EOF) {
        fputc(ch, fp_dst);
    }
    
    fclose(fp_src);
    fclose(fp_dst);
    return 0;
}

int main() {
    // 创建测试文件
    FILE *fp = fopen("src.txt", "w");
    fprintf(fp, "Hello World");
    fclose(fp);
    
    if (copy_file("src.txt", "dst.txt") == 0) {
        printf("File copied successfully\\n");
    }
    
    return 0;
}\`,
  answer: \`输出结果：
File copied successfully

解析：
1. 以二进制模式打开源文件（rb）和目标文件（wb）
2. fgetc 逐字符读取，返回 int（能容纳 EOF）
3. fputc 逐字符写入
4. 遇到 EOF 结束循环
5. 关闭两个文件指针

关键要点：
- 二进制模式复制适用于所有文件类型
- fgetc 返回 int 不是 char（EOF 是 -1）
- 错误处理要关闭已打开的文件
- 逐字符效率低，实际用缓冲区优化

优化版本：
- 使用 fread/fwrite 配合大缓冲区
- 典型缓冲区大小：4KB-64KB\`,
  keyPoints: [
    'fgetc/fputc 逐字符操作',
    '二进制模式复制',
    'EOF 判断',
    '错误处理关闭文件'
  ],
  commonMistakes: [
    'fgetc 返回值用 char 接收（无法判断 EOF）',
    '忘记关闭文件',
    '源文件打开失败时仍尝试打开目标',
    '用文本模式复制二进制文件'
  ]
};
