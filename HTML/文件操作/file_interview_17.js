/**
 * 文件操作面试题 17 - 文件指针移动
 * 难度：⭐⭐⭐⭐
 * 考点：fseek、ftell、rewind
 */

export const file_interview_17 = {
  title: '文件指针移动',
  difficulty: '高级',
  question: \`分析以下代码的输出：

#include <stdio.h>

int main() {
    FILE *fp = fopen("test.txt", "w+");
    fprintf(fp, "Hello World");
    
    fseek(fp, 6, SEEK_SET);
    fprintf(fp, "C");
    
    rewind(fp);
    fseek(fp, 0, SEEK_END);
    long size = ftell(fp);
    printf("Size: %ld\\n", size);
    
    fseek(fp, 0, SEEK_SET);
    char buf[20];
    fread(buf, 1, 11, fp);
    buf[11] = '\\0';
    printf("Content: %s\\n", buf);
    
    fclose(fp);
    return 0;
}\`,
  answer: \`输出结果：
Size: 11
Content: Hello Corld

解析：
1. 初始写入 "Hello World" (11 字节)
2. fseek(fp, 6, SEEK_SET) 移动到第 6 个位置（从 0 开始）
3. fprintf(fp, "C") 覆盖 'W' 为 'C'
4. rewind(fp) 回到文件开头
5. fseek(fp, 0, SEEK_END) 移动到文件末尾
6. ftell(fp) 返回文件大小 11
7. 重新读取内容得到 "Hello Corld"

关键要点：
- fseek(file, offset, origin) 移动文件指针
- SEEK_SET: 从文件开头
- SEEK_CUR: 从当前位置
- SEEK_END: 从文件末尾
- ftell() 返回当前位置
- rewind() 回到开头\`,
  keyPoints: [
    'fseek 三个参数',
    'SEEK_SET/CUR/END 区别',
    'ftell 获取位置',
    'rewind 重置指针'
  ],
  commonMistakes: [
    '混淆 SEEK_SET 和 SEEK_CUR',
    '忘记 SEEK_END 时 offset 通常为负数',
    'ftell 返回 long 类型',
    '写入后需要 fseek 才能读取'
  ]
};
