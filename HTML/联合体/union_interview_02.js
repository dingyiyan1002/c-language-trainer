/**
 * 联合体面试题 02 - 联合体实际应用
 * 难度：⭐⭐⭐⭐⭐
 * 考点：类型标签 + 联合体组合
 */

export const union_interview_02 = {
  title: '联合体实际应用',
  difficulty: '高级',
  question: `以下代码实现了什么功能？

typedef enum {
    TYPE_INT,
    TYPE_FLOAT,
    TYPE_STRING
} ValueType;

typedef struct {
    ValueType type;
    union {
        int intValue;
        float floatValue;
        char *stringValue;
    } data;
} Variant;

// 使用
Variant v1;
v1.type = TYPE_INT;
v1.data.intValue = 42;

Variant v2;
v2.type = TYPE_FLOAT;
v2.data.floatValue = 3.14f;

Variant v3;
v3.type = TYPE_STRING;
v3.data.stringValue = "Hello";`,
  answer: `功能：实现变体类型（Variant Type）

设计要点：
1. 用枚举 type 标记当前存储的类型
2. 用 union 存储实际数据（共享内存）
3. 根据 type 决定访问哪个成员

优势：
- 类型安全：通过 type 知道当前是什么类型
- 内存高效：union 共享内存，只占用最大成员空间
- 灵活：可以存储多种类型的值

应用场景：
- JSON 解析器（值可以是数字/字符串/布尔/数组/对象）
- 脚本语言解释器
- 配置系统（不同配置项不同类型）
- 消息系统（不同消息类型）`,
  keyPoints: [
    '枚举 + 联合体实现变体类型',
    'type 字段标记当前有效成员',
    '内存高效且类型安全',
    'JSON/脚本语言的常见实现方式'
  ],
  commonMistakes: [
    '忘记检查 type 就访问 union 成员',
    'type 和实际存储的类型不一致',
    '字符串忘记管理内存'
  ]
};