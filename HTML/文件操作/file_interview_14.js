/**
 * 文件操作面试题 14 - fread/fwrite 二进制读写
 * 难度：⭐⭐⭐⭐
 * 考点：二进制文件操作、结构体序列化
 */

export const file_interview_14 = {
  title: 'fread/fwrite 二进制读写',
  difficulty: '高级',
  question: `分析以下代码的问题：

#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id;
    char name[20];
    float score;
} Student;

int main() {
    Student s = {1, "Alice", 95.5};
    FILE *fp = fopen("data.bin", "wb");
    
    fwrite(&s, sizeof(Student), 1, fp);
    fclose(fp);
    
    // 读取
    fp = fopen("data.bin", "rb");
    Student s2;
    fread(&s2, sizeof(Student), 1, fp);
    fclose(fp);
    
    printf("%d, %s, %.1f\n", s2.id, s2.name, s2.score);
    return 0;
}`,
  answer: `代码分析：

优点：
- 正确使用二进制模式"rb"/"wb"
- fwrite/fread 参数正确：&s, sizeof(Student), 1, fp

潜在问题：
1. 结构体填充（padding）问题
   - 不同平台/编译器可能有不同的内存对齐
   - 跨平台读取可能出错

2. 没有检查 fopen 返回值
3. 没有检查 fwrite/fread 返回值

改进方案：
// 检查返回值
if (fp == NULL) { /* 错误处理 */ }
if (fwrite(...) != 1) { /* 错误处理 */ }
if (fread(...) != 1) { /* 错误处理 */ }

// 跨平台建议使用文本格式或定义明确的序列化格式`,
  keyPoints: [
    '二进制读写使用"rb"/"wb"模式',
    'fwrite/fread 返回值检查',
    '结构体填充的跨平台问题',
    'fopen 返回值检查'
  ],
  commonMistakes: [
    '忘记检查 fopen/fread/fwrite 返回值',
    '用文本模式打开二进制文件',
    '忽略结构体对齐的平台差异',
    '直接序列化含指针的结构体'
  ]
};
