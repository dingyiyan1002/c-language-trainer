/**
 * 结构体面试题 01 - 结构体内存布局
 * 难度：⭐⭐⭐⭐
 * 考点：内存对齐、sizeof 计算
 */

export const struct_interview_01 = {
  title: '结构体内存布局',
  difficulty: '高级',
  question: `以下结构体的 sizeof 是多少？解释内存对齐规则。

struct Data {
    char a;      // 1 字节
    int b;       // 4 字节
    short c;     // 2 字节
    double d;    // 8 字节
};

printf("sizeof(struct Data) = %zu\\n", sizeof(struct Data));`,
  answer: `答案：24 字节（在大多数 64 位系统上）

内存布局：
偏移 0-0:   char a     (1 字节) + 3 字节填充
偏移 4-7:   int b      (4 字节)
偏移 8-9:   short c    (2 字节) + 2 字节填充
偏移 12-19: double d   (8 字节)
总计：1+3+4+2+2+8 = 20 字节

但实际是 24 字节，因为还要对齐到最大成员 (double=8) 的倍数

内存对齐规则：
1. 每个成员按自身大小对齐
2. 结构体总大小是最大成员的整数倍
3. 编译器会插入填充字节`,
  keyPoints: [
    '内存对齐提高访问效率',
    '每个成员按自身大小对齐',
    '结构体总大小是最大成员的整数倍',
    '使用#pragma pack 可以改变对齐方式'
  ],
  commonMistakes: [
    '简单相加各成员大小（忽略填充）',
    '不理解对齐规则',
    '忽略结构体总大小的对齐要求'
  ]
};