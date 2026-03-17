/**
 * 文件操作题 01 - 读取文件内容
 */
export const file_interview_01 = {
  title: '读取文件内容',
  difficulty: '中级',
  question: `完成以下功能`,
  code: `#include <stdio.h>

int main() {
    FILE *fp = fopen("test.txt", "r");
    if (fp == NULL) {
        printf("无法打开文件\n");
        return 1;
    }
    
    char ch;
    while ((ch = fgetc(fp)) != EOF) {
        putchar(ch);
    }
    
    fclose(fp);
    return 0;
}`,
  answer: `fopen/fgetc/fclose 基本文件读取`,
  keyPoints: ['文件操作', '标准库', '实际应用']
};
