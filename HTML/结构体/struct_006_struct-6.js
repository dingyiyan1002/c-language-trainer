/**
 * 结构体面试题 01 - 结构体基础与内存布局
 * 难度：⭐⭐⭐
 * 考点：结构体定义、成员访问、sizeof
 */

export const struct_interview_001 = {
  title: '结构体基础与内存布局',
  difficulty: '中级',
  question: `以下结构体的 sizeof 是多少？为什么？

struct Student {
    char name[20];
    int age;
    float score;
};

struct Student s;
printf("%zu\\n", sizeof(s));`,
  answer: `答案：通常是 28 字节（取决于编译器对齐设置）

内存布局分析：
- char name[20]: 20 字节（偏移 0-19）
- 填充：4 字节（为了让 int 对齐到 4 的倍数）
- int age: 4 字节（偏移 24-27）
- float score: 4 字节（偏移 28-31）
总计：20 + 4(填充) + 4 + 4 = 32 字节

实际测试：
#include <stdio.h>

struct Student {
    char name[20];
    int age;
    float score;
};

int main() {
    printf("sizeof(struct Student) = %zu\\n", sizeof(struct Student));
    printf("offsetof(age) = %zu\\n", offsetof(struct Student, age));
    printf("offsetof(score) = %zu\\n", offsetof(struct Student, score));
    return 0;
}

内存对齐规则：
1. 每个成员按自身对齐要求对齐
2. int 和 float 通常 4 字节对齐
3. 结构体总大小是最大对齐值的倍数

消除填充（紧凑排列）：
#pragma pack(1)
struct Student {
    char name[20];
    int age;
    float score;
};  // sizeof = 28 字节
#pragma pack()`,
  keyPoints: [
    '结构体成员可能有填充字节',
    '内存对齐提高访问效率',
    '使用 offsetof 获取成员偏移',
    '#pragma pack 可改变对齐'
  ],
  commonMistakes: [
    '认为 sizeof 等于成员大小之和',
    '忽略内存对齐的影响',
    '不知道填充字节的存在',
    '混淆结构体和数组的内存布局'
  ]
};
