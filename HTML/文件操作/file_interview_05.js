/**
 * 文件操作题 05 - 统计文件行数
 */
export const file_interview_05 = {
  title: '统计文件行数',
  difficulty: '中级',
  question: `完成以下功能`,
  code: `#include <stdio.h>

int main() {
    FILE *fp = fopen("test.txt", "r");
    if (fp == NULL) return 1;
    
    int lines = 0;
    char ch;
    while ((ch = fgetc(fp)) != EOF) {
        if (ch == '\n') lines++;
    }
    
    printf("Lines: %d\n", lines);
    fclose(fp);
    return 0;
}`,
  answer: `字符级别统计`,
  keyPoints: ['文件操作', '标准库', '实际应用']
};
