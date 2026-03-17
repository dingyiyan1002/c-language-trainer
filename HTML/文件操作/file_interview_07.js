/**
 * 文件操作面试题 07 - 二进制文件读写
 * 难度：⭐⭐⭐⭐
 * 考点：fread/fwrite、二进制模式
 */

export const file_interview_07 = {
  title: '二进制文件读写',
  difficulty: '高级',
  question: `以下代码的功能是什么？指出关键要点。

#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id;
    char name[50];
    float score;
} Student;

int main() {
    Student students[3] = {
        {1, "张三", 95.5},
        {2, "李四", 87.0},
        {3, "王五", 92.3}
    };
    
    FILE *fp = fopen("students.dat", "wb");
    if (fp == NULL) {
        printf("无法创建文件\n");
        return 1;
    }
    
    fwrite(students, sizeof(Student), 3, fp);
    fclose(fp);
    
    // 读取
    fp = fopen("students.dat", "rb");
    Student readStudents[3];
    fread(readStudents, sizeof(Student), 3, fp);
    fclose(fp);
    
    for (int i = 0; i < 3; i++) {
        printf("%d %s %.1f\n", readStudents[i].id, 
               readStudents[i].name, readStudents[i].score);
    }
    
    return 0;
}`,
  answer: `功能：将结构体数组以二进制形式写入文件，然后读取

输出：
1 张三 95.5
2 李四 87.0
3 王五 92.3

关键要点：
1. "wb"/"rb" 模式用于二进制读写
2. fwrite/fread 直接读写内存块，效率高
3. 适合存储结构体等复杂数据
4. 二进制文件不可读，但紧凑高效`,
  keyPoints: [
    '二进制模式用"wb"/"rb"，文本模式用"w"/"r"',
    'fwrite/fread 按字节块读写，适合结构体',
    '二进制文件紧凑高效但不可直接阅读',
    '注意结构体对齐和跨平台兼容性问题'
  ],
  commonMistakes: [
    '混淆二进制模式和文本模式',
    '忘记指定正确的元素个数和大小',
    '不考虑结构体对齐的跨平台问题',
    '不检查 fread/fwrite 返回值'
  ]
};