/**
 * 结构体面试题 04 - 结构体嵌套与链表
 * 难度：⭐⭐⭐⭐⭐
 * 考点：自引用结构体、链表节点
 */

export const struct_interview_04 = {
  title: '结构体嵌套与链表',
  difficulty: '高级',
  question: `以下结构体定义了什么数据结构？如何创建 3 个节点的链表？

struct Node {
    int data;
    struct Node *next;
};

// 创建链表
struct Node *head = NULL;

// 创建第一个节点
struct Node *n1 = malloc(sizeof(struct Node));
n1->data = 10;
n1->next = NULL;

// 创建第二个节点
struct Node *n2 = malloc(sizeof(struct Node));
n2->data = 20;
n2->next = NULL;

// 创建第三个节点
struct Node *n3 = malloc(sizeof(struct Node));
n3->data = 30;
n3->next = NULL;

// 连接节点
head = n1;
n1->next = n2;
n2->next = n3;`,
  answer: `数据结构：单向链表

关键要点：
1. 自引用结构体：struct Node *next 指向同类型结构体
2. 链表通过指针连接节点
3. 最后一个节点的 next 为 NULL
4. 动态分配内存（malloc）

遍历链表：
struct Node *current = head;
while (current != NULL) {
    printf("%d ", current->data);
    current = current->next;
}

输出：10 20 30`,
  keyPoints: [
    '自引用结构体定义链表节点',
    'next 指针连接下一个节点',
    'NULL 表示链表结束',
    '动态分配节点内存'
  ],
  commonMistakes: [
    '忘记初始化 next 为 NULL',
    '忘记 malloc 分配内存',
    '遍历忘记检查 NULL',
    '忘记释放内存导致泄漏'
  ]
};