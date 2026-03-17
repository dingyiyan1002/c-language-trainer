/**
 * 文件操作面试题 18 - 逐行读取文件
 * 难度：⭐⭐⭐
 * 考点：fgets、缓冲区、EOF 判断
 */

export const file_interview_18 = {
  title: '逐行读取文件',
  difficulty: '中级',
  question: \`实现逐行读取文件并统计行数：

#include <stdio.h>

int count_lines(const char *filename) {
    FILE *fp = fopen(filename, "r");
    if (fp == NULL) {
        return -1;
    }
    
    char buffer[256];
    int count = 0;
    
    while (fgets(buffer, sizeof(buffer), fp) != NULL) {
        count++;
    }
    
    fclose(fp);
    return count;
}

int main() {
    // 先创建测试文件
    FILE *fp = fopen("test.txt", "w");
    fprintf(fp, "Line 1\\n");
    fprintf(fp, "Line 2\\n");
    fprintf(fp, "Line 3\\n");
    fclose(fp);
    
    int lines = count_lines("test.txt");
    printf("Total lines: %d\\n", lines);
    
    return 0;
}\`,
  answer: \`输出结果：
Total lines: 3

解析：
1. fgets(buffer, size, fp) 每次读取一行（包括换行符）
2. 读到 EOF 时返回 NULL，循环结束
3. 每成功读取一行，计数器加 1
4. 最后返回总行数 3

关键要点：
- fgets 安全读取，防止缓冲区溢出
- 返回值 NULL 表示 EOF 或错误
- 每行包括换行符 '\\n'
- 空文件返回 0 行

扩展：
- 如果要统计非空行数，需要检查 buffer 是否只有换行符
- 大文件可以增大缓冲区提高效率\`,
  keyPoints: [
    'fgets 逐行读取',
    'EOF 判断方法',
    '缓冲区大小设置',
    '文件行统计'
  ],
  commonMistakes: [
    '忘记检查 fopen 返回值',
    '缓冲区太小导致行被截断',
    '混淆 fgets 和 gets（gets 已废弃）',
    '忘记 fclose'
  ]
};
