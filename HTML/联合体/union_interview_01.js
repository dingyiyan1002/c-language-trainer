/**
 * 联合体面试题 01 - union 与 struct 区别
 * 难度：⭐⭐⭐⭐
 * 考点：内存共享、sizeof 计算
 */

export const union_interview_01 = {
  title: '联合体与结构体区别',
  difficulty: '高级',
  question: `以下 struct 和 union 的 sizeof 分别是多少？

struct Data {
    int i;       // 4 字节
    double d;    // 8 字节
    char c;      // 1 字节
};

union Data2 {
    int i;       // 4 字节
    double d;    // 8 字节
    char c;      // 1 字节
};

printf("struct: %zu, union: %zu\\n", 
       sizeof(struct Data), 
       sizeof(union Data2));`,
  answer: `答案：
struct Data: 16 字节（考虑对齐）
union Data2: 8 字节

区别：
1. 结构体：每个成员独立内存，总大小=各成员大小之和（+填充）
2. 联合体：所有成员共享同一内存，大小=最大成员大小

联合体特点：
- 同一时间只能存储一个成员的值
- 修改一个成员会影响其他成员
- 节省内存，适合存储"多选一"的数据

应用场景：
- 变体类型（如 JSON 值：数字/字符串/布尔）
- 协议解析（不同消息类型共享缓冲区）
- 硬件寄存器映射`,
  keyPoints: [
    '结构体成员独立，联合体成员共享',
    '联合体大小=最大成员大小',
    '联合体同一时间只能存一个值',
    '适合"多选一"的场景'
  ],
  commonMistakes: [
    '混淆 struct 和 union 的内存布局',
    '同时使用联合体的多个成员',
    '不理解联合体的应用场景'
  ]
};