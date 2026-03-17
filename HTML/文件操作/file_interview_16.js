/**
 * 文件操作面试题 16 - 二进制文件读写
 * 难度：⭐⭐⭐⭐
 * 考点：fread/fwrite、二进制模式
 */

export const file_interview_16 = {
  title: '二进制文件读写',
  difficulty: '高级',
  question: \`使用二进制模式读写结构体数据：

#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id;
    char name[20];
    float score;
} Student;

int main() {
    Student s1 = {1, "Alice", 95.5};
    Student s2;
    FILE *fp;
    
    // 写二进制文件
    fp = fopen("students.dat", "wb");
    if (fp == NULL) {
        printf("无法打开文件\\n");
        return 1;
    }
    fwrite(&s1, sizeof(Student), 1, fp);
    fclose(fp);
    
    // 读二进制文件
    fp = fopen("students.dat", "rb");
    if (fp == NULL) {
        printf("无法打开文件\\n");
        return 1;
    }
    fread(&s2, sizeof(Student), 1, fp);
    fclose(fp);
    
    printf("ID: %d, Name: %s, Score: %.1f\\n", s2.id, s2.name, s2.score);
    
    return 0;
}\`,
  answer: \`输出结果：
ID: 1, Name: Alice, Score: 95.5

解析：
1. "wb" 和 "rb" 是二进制写入和读取模式
2. fwrite(&s1, sizeof(Student), 1, fp) 写入一个 Student 结构体
3. fread(&s2, sizeof(Student), 1, fp) 读取一个 Student 结构体
4. 二进制模式直接存储内存中的字节，效率高但不可移植

关键要点：
- 二进制模式：'wb' 写入，'rb' 读取
- fwrite/fread 参数：指针、单个大小、数量、文件指针
- 二进制文件紧凑高效，但依赖平台字节序
- 文本文件可移植但占用空间大\`,
  keyPoints: [
    '二进制模式 wb/rb',
    'fwrite/fread 函数使用',
    '结构体直接读写',
    '二进制 vs 文本文件'
  ],
  commonMistakes: [
    '忘记检查 fopen 返回值',
    '混淆 fwrite 参数顺序',
    '忽略二进制文件的平台依赖性问题',
    '忘记 fclose 关闭文件'
  ]
};
