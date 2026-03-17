/**
 * 联合体练习 9
 * 难度：高级 ⭐⭐⭐⭐
 * 主题：联合体与内存复用
 */

const exercise = {
    id: 9,
    title: "联合体 - 内存复用与类型双关",
    difficulty: "高级",
    category: "union",
    topics: [
        "内存共享",
        "类型双关",
        "变体类型",
        "字节序检测"
    ],
    description: "本题考察联合体的高级应用...",
    codeExample: 
// 字节序检测
union EndianCheck {
    int i;
    char c;
};

// 变体类型
typedef struct {
    enum { TYPE_INT, TYPE_FLOAT, TYPE_STRING } type;
    union {
        int i;
        float f;
        char* str;
    } data;
} Variant;
,
    practicalUse: "协议解析、变体类型、内存优化",
    hints: ["同一时刻只有一个成员有效", "大小为最大成员", "注意类型安全"]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = exercise;
}
