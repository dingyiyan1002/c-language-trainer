/**
 * 结构体面试题 06 - 位域 (Bit Field)
 * 难度：⭐⭐⭐⭐⭐
 * 考点：位域定义、内存压缩、跨平台问题
 */

export const struct_interview_006 = {
  title: '位域 (Bit Field)',
  difficulty: '高级',
  question: `什么是位域？有什么优缺点？
请定义一个表示日期的结构体，使用位域节省内存。`,
  answer: `位域定义：
位域允许在结构体中指定成员占用的比特数

示例（日期结构体）：
struct Date {
    unsigned int day   : 5;   // 1-31 日，5 位足够（2^5=32）
    unsigned int month : 4;   // 1-12 月，4 位足够（2^4=16）
    unsigned int year  : 12;  // 0-4095 年，12 位
};
// 普通结构体：3 个 int = 12 字节
// 位域结构体：3 字节（21 位，向上取整到字节）

使用示例：
struct Date today = {15, 3, 2024};
printf("%d-%d-%d\\n", today.day, today.month, today.year);

优点：
1. 节省内存（适合嵌入式系统）
2. 可以直接操作硬件寄存器
3. 代码更清晰（明确位数）

缺点：
1. 位域布局依赖编译器（不可移植）
2. 访问速度可能较慢（需要位操作）
3. 不能取位域的地址（&today.day 非法）
4. 不同平台字节序可能不同

硬件寄存器示例：
struct ControlReg {
    unsigned int enable  : 1;
    unsigned int mode    : 3;
    unsigned int speed   : 4;
    unsigned int reserved: 24;
};

注意事项：
- 位域不能跨类型（必须是 int/unsigned/signed）
- 不要依赖具体的位布局
- 避免在需要取地址的场景使用`,
  keyPoints: [
    '位域指定成员比特数',
    '节省内存适合嵌入式',
    '布局依赖编译器',
    '不能取位域地址'
  ],
  commonMistakes: [
    '依赖具体的位域布局',
    '试图取位域的地址',
    '忽略跨平台兼容性问题',
    '位域超出类型范围'
  ]
};
