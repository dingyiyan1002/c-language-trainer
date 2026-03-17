/**
 * 文件操作题 02 - 写入文件
 */
export const file_interview_02 = {
  title: '写入文件',
  difficulty: '中级',
  question: `完成以下功能`,
  code: `#include <stdio.h>

int main() {
    FILE *fp = fopen("output.txt", "w");
    if (fp == NULL) {
        printf("无法创建文件\n");
        return 1;
    }
    
    fprintf(fp, "Hello, File!\n");
    fprintf(fp, "Line 2\n");
    
    fclose(fp);
    return 0;
}`,
  answer: `fprintf 写入文件`,
  keyPoints: ['文件操作', '标准库', '实际应用']
};
