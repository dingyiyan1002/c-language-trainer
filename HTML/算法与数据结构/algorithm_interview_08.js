/**
 * 算法面试题 08 - 反转链表
 * 难度：⭐⭐⭐⭐
 * 考点：链表、指针操作
 */

export const algorithm_interview_08 = {
  title: '反转链表',
  difficulty: '高级',
  question: \`迭代法反转链表：

#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node* reverse_list(Node *head) {
    Node *prev = ____;
    Node *curr = ____;
    Node *next = NULL;
    
    while (____ != NULL) {
        next = ____;       // 保存下一个节点
        ____ = ____;       // 反转指针方向
        ____ = ____;       // 移动 prev
        ____ = ____;       // 移动 curr
    }
    
    return ____;  // 新的头节点
}\`,
  answer: \`Node* reverse_list(Node *head) {
    Node *prev = NULL;
    Node *curr = head;
    Node *next = NULL;
    
    while (curr != NULL) {
        next = curr->next;    // 保存下一个节点
        curr->next = prev;    // 反转指针方向
        prev = curr;          // 移动 prev
        curr = next;          // 移动 curr
    }
    
    return prev;  // 新的头节点
}\`,
  keyPoints: [
    '三个指针：prev、curr、next',
    '保存下一个节点防止丢失',
    '反转当前节点的指针',
    '逐步向前移动',
    '最后返回 prev（新头节点）'
  ],
  commonMistakes: [
    '忘记保存 next 导致链表断裂',
    '反转顺序错误',
    '移动指针顺序错误',
    '返回 curr 而不是 prev'
  ]
};
