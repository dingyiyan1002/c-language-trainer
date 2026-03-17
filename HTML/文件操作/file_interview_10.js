/**
 * 文件操作面试题 10 - 统计文件行数
 * 难度：⭐⭐⭐
 * 考点：逐字符读取、换行符统计
 */

export const file_interview_10 = {
  title: '统计文件行数',
  difficulty: '中级',
  question: `实现一个函数统计文件的行数。

#include <stdio.h>

int countLines(const char *filename) {
    FILE *fp = fopen(filename, "r");
    if (fp == NULL) {
        return -1;
    }
    
    int lines = 0;
    int ch;
    
    while ((ch = fgetc(fp)) != EOF) {
        if (ch == '\n') {
            lines++;
        }
    }
    
    // 如果文件最后一行没有换行符，也要计数
    if (lines > 0 || ftell(fp) > 0) {
        // 检查最后一个字符是否是换行符
        fseek(fp, -1, SEEK_END);
        if (fgetc(fp) != '\n') {
            lines++;
        }
    }
    
    fclose(fp);
    return lines;
}`,
  answer: `功能：统计文件中的行数

实现要点：
1. 逐字符读取文件，统计换行符'\n'的个数
2. 特殊情况：文件最后一行没有换行符也要计数
3. 空文件返回 0
4. 使用 int 接收 fgetc 返回值（因为 EOF 是 -1）

边界情况：
- 空文件：返回 0
- 没有换行符的单行文件：返回 1
- 以换行符结尾的文件：正常计数`,
  keyPoints: [
    'fgetc 返回 int 类型，不是 char',
    '统计换行符数量',
    '处理最后一行无换行符的情况',
    '空文件的边界处理'
  ],
  commonMistakes: [
    '用 char 接收 fgetc 返回值（无法正确判断 EOF）',
    '忽略最后一行没有换行符的情况',
    '空文件处理不当',
    '忘记关闭文件'
  ]
};