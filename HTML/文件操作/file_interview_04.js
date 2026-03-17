/**
 * 文件操作题 04 - 追加模式写文件
 */
export const file_interview_04 = {
  title: '追加模式写文件',
  difficulty: '中级',
  question: `完成以下功能`,
  code: `#include <stdio.h>

int main() {
    FILE *fp = fopen("log.txt", "a");
    if (fp == NULL) return 1;
    
    fprintf(fp, "New log entry\n");
    fclose(fp);
    return 0;
}`,
  answer: `追加模式 'a'`,
  keyPoints: ['文件操作', '标准库', '实际应用']
};
