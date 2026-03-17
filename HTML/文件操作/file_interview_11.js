/**
 * 文件操作面试题 11 - 追加模式
 * 难度：⭐⭐
 * 考点：fopen 追加模式、日志文件
 */

export const file_interview_11 = {
  title: '文件追加操作',
  difficulty: '中级',
  question: `以下代码使用什么模式打开文件？有什么特点？

#include <stdio.h>
#include <time.h>

int writeLog(const char *message) {
    FILE *fp = fopen("app.log", "a");
    if (fp == NULL) {
        return -1;
    }
    
    time_t now = time(NULL);
    fprintf(fp, "[%ld] %s\n", now, message);
    
    fclose(fp);
    return 0;
}`,
  answer: `模式："a" 追加模式

特点：
1. 文件指针自动定位到文件末尾
2. 如果文件不存在则创建
3. 如果文件存在，新内容追加到末尾，不覆盖原内容
4. 适合日志文件、记录累积数据

相关模式：
- "a": 追加写入（文本）
- "a+": 追加读写（文本）
- "ab": 追加写入（二进制）
- "a+b": 追加读写（二进制）`,
  keyPoints: [
    '"a"模式自动定位到文件末尾写入',
    '不会覆盖已有内容',
    '适合日志和累积数据记录',
    '文件不存在时自动创建'
  ],
  commonMistakes: [
    '误用"w"模式覆盖日志文件',
    '不知道追加模式自动定位到末尾',
    '忘记检查 fopen 返回值',
    '频繁打开关闭文件影响性能'
  ]
};