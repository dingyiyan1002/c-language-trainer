/**
 * 文件操作面试题 06 - 文件写入
 * 难度：⭐⭐⭐
 * 考点：fopen 写入模式、fputs、fclose
 */

export const file_interview_06 = {
  title: '文件写入操作',
  difficulty: '中级',
  question: `以下代码的功能是什么？指出潜在问题。

#include <stdio.h>

int main() {
    FILE *fp = fopen("output.txt", "w");
    if (fp == NULL) {
        printf("无法创建文件\\n");
        return 1;
    }
    
    fprintf(fp, "Hello, World!\\n");
    fprintf(fp, "第 2 行内容\\n");
    fprintf(fp, "第 3 行内容\\n");
    
    fclose(fp);
    printf("文件写入完成\\n");
    return 0;
}`,
  answer: `功能：创建 output.txt 文件并写入 3 行文本

输出：
文件写入完成

潜在问题：
1. 如果 output.txt 已存在，"w" 模式会清空原内容
2. 没有检查 fprintf 的返回值（可能写入失败）
3. 如果程序在 fclose 前崩溃，数据可能丢失

改进建议：
- 使用 "a" 模式追加而不是覆盖
- 检查 fprintf 返回值
- 重要数据及时 fflush 或 fclose`,
  keyPoints: [
    'fopen 的"w"模式会清空已存在的文件',
    'fprintf 用于格式化写入',
    '必须检查文件操作返回值',
    'fclose 确保数据写入磁盘'
  ],
  commonMistakes: [
    '忘记检查 fopen 返回值',
    '使用"w"模式意外覆盖重要文件',
    '写入后不调用 fclose 导致数据丢失',
    '不检查 fprintf 是否成功'
  ]
};