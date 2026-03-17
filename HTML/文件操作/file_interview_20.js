/**
 * 文件操作面试题 20 - 追加模式
 * 难度：⭐⭐
 * 考点：追加模式、文件存在性检查
 */

export const file_interview_20 = {
  title: '追加模式写入',
  difficulty: '中级',
  question: \`分析追加模式的行为：

#include <stdio.h>

int main() {
    FILE *fp;
    
    // 第一次写入
    fp = fopen("log.txt", "a");
    fprintf(fp, "Log entry 1\\n");
    fprintf(fp, "Log entry 2\\n");
    fclose(fp);
    
    // 第二次追加
    fp = fopen("log.txt", "a");
    fprintf(fp, "Log entry 3\\n");
    fclose(fp);
    
    // 读取全部内容
    fp = fopen("log.txt", "r");
    char ch;
    while ((ch = fgetc(fp)) != EOF) {
        putchar(ch);
    }
    fclose(fp);
    
    return 0;
}\`,
  answer: \`输出结果：
Log entry 1
Log entry 2
Log entry 3

解析：
1. "a" 模式：追加写入，文件不存在则创建
2. 第一次写入 2 行，文件指针自动移到末尾
3. 第二次打开仍用 "a" 模式，内容追加到后面
4. 最终文件有 3 行内容

关键要点：
- "a" 追加模式：写入总在文件末尾
- 文件不存在时自动创建
- 无法用 fseek 改变写入位置（总是追加）
- 读取需要用 "r" 或 "r+" 模式

文件模式总结：
- "r": 只读，文件必须存在
- "w": 只写，存在则清空，不存在则创建
- "a": 追加，存在则追加，不存在则创建
- "r+": 读写，文件必须存在
- "w+": 读写，存在则清空
- "a+": 读追加，写入总在末尾\`,
  keyPoints: [
    '追加模式 "a" 特性',
    '文件自动创建',
    '写入位置固定在末尾',
    '文件模式区别'
  ],
  commonMistakes: [
    '以为 "a" 模式可以用 fseek 改变位置',
    '混淆 "w" 和 "a"（"w" 会清空文件）',
    '忘记 "a" 模式只能写入不能读取',
    '用 "a+" 时不知道读取可以从任意位置但写入总在末尾'
  ]
};
