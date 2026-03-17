/**
 * 结构体面试题 05 - 联合体 (union) 与结构体区别
 * 难度：⭐⭐⭐⭐
 * 考点：union 内存共享、sizeof 计算
 */

export const struct_interview_005 = {
  title: '联合体 vs 结构体',
  difficulty: '高级',
  question: `以下结构体和联合体的 sizeof 分别是多少？

struct Data {
    int i;
    float f;
    char str[20];
};

union Data2 {
    int i;
    float f;
    char str[20];
};`,
  answer: `答案：
struct Data:  通常 28 字节（考虑对齐）
union Data2:  20 字节

详解：

结构体（struct）：
- 每个成员有独立内存
- 总大小 = 各成员大小之和 + 对齐填充
- int(4) + float(4) + char[20](20) = 28 字节

联合体（union）：
- 所有成员共享同一内存
- 总大小 = 最大成员的大小
- max(4, 4, 20) = 20 字节

内存布局：
struct: [int 4 字节][float 4 字节][char 20 字节]
union:  [共享的 20 字节空间]

使用示例：
union Number {
    int i;
    float f;
};

union Number n;
n.i = 10;
printf("%d\\n", n.i);   // 10
printf("%f\\n", n.f);   // 未定义（同一内存解释为 float）

应用场景：
1. 节省内存（互斥的数据）
2. 类型双关（同一数据不同解释）
3. 变体类型（tagged union）
4. 硬件寄存器映射

带标签的联合体：
struct Variant {
    enum { INT, FLOAT, STRING } type;
    union {
        int i;
        float f;
        char *str;
    } data;
};`,
  keyPoints: [
    'struct 成员独立内存',
    'union 成员共享内存',
    'union 大小等于最大成员',
    'union 用于互斥数据'
  ],
  commonMistakes: [
    '混淆 struct 和 union 的内存布局',
    '同时使用 union 的多个成员',
    '不知道 union 的节省内存特性',
    '不理解类型双关的用途'
  ]
};
