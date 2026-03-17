/**
 * 文件操作面试题 09 - 文件复制
 * 难度：⭐⭐⭐
 * 考点：文件读写综合应用
 */

export const file_interview_09 = {
  title: '文件复制功能',
  difficulty: '中级',
  question: `完善以下文件复制函数，指出关键要点。

#include <stdio.h>

int copyFile(const char *src, const char *dest) {
    FILE *srcFp = fopen(src, "rb");
    if (srcFp == NULL) {
        return -1;
    }
    
    FILE *destFp = fopen(dest, "wb");
    if (destFp == NULL) {
        fclose(srcFp);
        return -1;
    }
    
    char buffer[1024];
    size_t bytesRead;
    
    while ((bytesRead = fread(buffer, 1, sizeof(buffer), srcFp)) > 0) {
        fwrite(buffer, 1, bytesRead, destFp);
    }
    
    fclose(srcFp);
    fclose(destFp);
    return 0;
}`,
  answer: `功能：复制源文件到目标文件

关键要点：
1. 使用"rb"/"wb"二进制模式，适用于所有文件类型
2. 使用缓冲区（1024 字节）提高读写效率
3. 先打开源文件，失败时直接返回
4. 打开目标文件失败时，记得关闭已打开的源文件
5. fread 返回实际读取字节数，可能小于请求的字节数
6. 两个文件都要正确关闭`,
  keyPoints: [
    '二进制模式适用于所有文件类型',
    '缓冲区读写提高效率',
    '错误处理时要关闭已打开的文件',
    'fread 返回值是实际读取的字节数'
  ],
  commonMistakes: [
    '忘记关闭文件导致资源泄漏',
    '错误处理时忘记关闭已打开的文件',
    '使用文本模式复制二进制文件',
    '不检查 fread/fwrite 返回值'
  ]
};