/**
 * 文件操作面试题 08 - 文件定位 (fseek/ftell)
 * 难度：⭐⭐⭐⭐
 * 考点：fseek、ftell、rewind
 */

export const file_interview_08 = {
  title: '文件定位操作',
  difficulty: '高级',
  question: `以下代码的输出是什么？解释 fseek 的参数。

#include <stdio.h>

int main() {
    FILE *fp = fopen("test.txt", "w+");
    fprintf(fp, "Hello World");
    
    // 定位到文件开头
    fseek(fp, 0, SEEK_SET);
    printf("位置 1: %ld\n", ftell(fp));
    
    // 读取 5 个字符
    char buf[6] = {0};
    fread(buf, 1, 5, fp);
    printf("读取：%s\n", buf);
    printf("位置 2: %ld\n", ftell(fp));
    
    // 从当前位置后退 3 个字符
    fseek(fp, -3, SEEK_CUR);
    printf("位置 3: %ld\n", ftell(fp));
    
    // 定位到文件末尾
    fseek(fp, 0, SEEK_END);
    printf("位置 4: %ld\n", ftell(fp));
    
    fclose(fp);
    return 0;
}`,
  answer: `输出：
位置 1: 0
读取：Hello
位置 2: 5
位置 3: 2
位置 4: 11

fseek 参数解释：
fseek(fp, offset, origin)
- offset: 偏移量（正数向后，负数向前）
- origin: 起始位置
  - SEEK_SET: 文件开头 (0)
  - SEEK_CUR: 当前位置 (1)
  - SEEK_END: 文件末尾 (2)`,
  keyPoints: [
    'fseek 用于移动文件指针',
    'ftell 返回当前文件指针位置',
    'SEEK_SET/SEEK_CUR/SEEK_END 三种定位方式',
    'w+ 模式可读写，会清空原文件'
  ],
  commonMistakes: [
    '混淆 SEEK_SET/SEEK_CUR/SEEK_END',
    '对 SEEK_END 使用正偏移（应该用负数）',
    '忘记文本模式和二进制模式的差异',
    '不检查 fseek 返回值'
  ]
};