/**
 * C 语言高级面试题 01 - 内存对齐与性能优化
 * 难度：高级 ⭐⭐⭐⭐
 * 考点：内存对齐、结构体优化、性能分析
 */

const question = {
    title: "内存对齐与结构体性能优化",
    description: `
给定以下三个结构体定义，请回答：
1. 每个结构体的 sizeof 大小是多少？
2. 为什么会有这样的差异？
3. 如何优化结构体 2 的内存布局？

struct Struct1 {
    char a;      // 1 byte
    int b;       // 4 bytes
    short c;     // 2 bytes
};

struct Struct2 {
    char a;      // 1 byte
    short b;     // 2 bytes
    int c;       // 4 bytes
    double d;    // 8 bytes
    char e;      // 1 byte
};

struct Struct3 {
    double a;    // 8 bytes
    int b;       // 4 bytes
    short c;     // 2 bytes
    char d;      // 1 byte
    char e;      // 1 byte
};
`,
    options: [
        "Struct1=12, Struct2=24, Struct3=16",
        "Struct1=8, Struct2=20, Struct3=16",
        "Struct1=12, Struct2=20, Struct3=20",
        "Struct1=8, Struct2=24, Struct3=20"
    ],
    correctAnswer: 0,
    explanation: `
【答案】Struct1=12, Struct2=24, Struct3=16

【详细解析】

📌 内存对齐规则：
1. 结构体变量的首地址能被其最宽基本类型成员的大小整除
2. 每个成员相对于首地址的偏移量是该成员大小的整数倍
3. 结构体总大小是最宽基本类型成员大小的整数倍

📌 Struct1 分析（最宽类型 int=4 字节）：
- char a:    偏移 0，占用 1 字节，padding 3 字节
- int b:     偏移 4，占用 4 字节
- short c:   偏移 8，占用 2 字节，padding 2 字节
- 总计：4 + 4 + 4 = 12 字节 ✓

📌 Struct2 分析（最宽类型 double=8 字节）：
- char a:    偏移 0，占用 1 字节，padding 1 字节
- short b:   偏移 2，占用 2 字节，padding 4 字节
- int c:     偏移 8，占用 4 字节
- double d:  偏移 16，占用 8 字节
- char e:    偏移 24，占用 1 字节，padding 7 字节
- 总计：2 + 4 + 4 + 8 + 8 = 24 字节 ✓

📌 Struct3 分析（最宽类型 double=8 字节）：
- double a:  偏移 0，占用 8 字节
- int b:     偏移 8，占用 4 字节
- short c:   偏移 12，占用 2 字节
- char d:    偏移 14，占用 1 字节
- char e:    偏移 15，占用 1 字节
- 总计：8 + 4 + 2 + 2 = 16 字节 ✓

💡 优化建议：
将成员按大小从大到小排列可以减少 padding，提高内存利用率。
Struct2 优化后类似 Struct3，可从 24 字节降到 16 字节。
`,
    keyPoints: [
        "内存对齐是为了提高 CPU 访问效率",
        "结构体成员排列顺序影响总大小",
        "按成员大小降序排列可优化内存",
        "使用#pragma pack 可改变对齐方式"
    ],
    commonMistakes: [
        "直接相加成员大小，忽略 padding",
        "不了解不同平台的对齐规则差异",
        "忽视 double 类型的 8 字节对齐要求"
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = question;
}
