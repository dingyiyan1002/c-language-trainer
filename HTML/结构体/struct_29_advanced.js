/**
 * 结构体高级练习 29
 * 难度：高级 ⭐⭐⭐⭐
 * 考点：结构体综合应用
 */

const exercise = {
    id: 29,
    title: "结构体高级练习 29",
    difficulty: "高级",
    category: "struct",
    topics: [
        "内存对齐",
        "结构体嵌套",
        "链表实现",
        "性能优化"
    ],
    description: "本题考察结构体的高级应用...",
    codeTemplate: 
struct Node {
    int data;
    struct Node* next;
};

// 请完成以下函数
void insert_node(struct Node** head, int value) {
    // TODO: 实现插入逻辑
}
,
    hints: ["注意指针的指针", "处理空链表情况", "内存分配检查"]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = exercise;
}
