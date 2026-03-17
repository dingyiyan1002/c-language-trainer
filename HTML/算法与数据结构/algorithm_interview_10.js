/**
 * 算法面试题 10 - 合并有序链表
 * 难度：⭐⭐⭐⭐
 * 考点：链表、归并思想
 */

export const algorithm_interview_10 = {
  title: '合并有序链表',
  difficulty: '高级',
  question: \`合并两个有序链表：

#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node* merge_two_lists(Node *l1, Node *l2) {
    // 创建虚拟头节点
    Node dummy;
    dummy.next = NULL;
    Node *tail = &dummy;
    
    while (____ != NULL && ____ != NULL) {
        if (____->data < ____->data) {
            tail->next = ____;
            ____ = ____->next;
        } else {
            tail->next = ____;
            ____ = ____->next;
        }
        ____ = ____->next;
    }
    
    // 连接剩余部分
    if (____ != NULL) {
        tail->next = ____;
    } else {
        tail->next = ____;
    }
    
    return ____;  // dummy.next 是真正的头节点
}\`,
  answer: \`Node* merge_two_lists(Node *l1, Node *l2) {
    // 创建虚拟头节点
    Node dummy;
    dummy.next = NULL;
    Node *tail = &dummy;
    
    while (l1 != NULL && l2 != NULL) {
        if (l1->data < l2->data) {
            tail->next = l1;
            l1 = l1->next;
        } else {
            tail->next = l2;
            l2 = l2->next;
        }
        tail = tail->next;
    }
    
    // 连接剩余部分
    if (l1 != NULL) {
        tail->next = l1;
    } else {
        tail->next = l2;
    }
    
    return dummy.next;  // dummy.next 是真正的头节点
}\`,
  keyPoints: [
    '虚拟头节点简化边界处理',
    '双指针比较两个链表',
    '小的节点接到结果链表',
    '最后连接剩余部分',
    '时间复杂度 O(m+n)'
  ],
  commonMistakes: [
    '忘记创建虚拟头节点导致边界复杂',
    '比较后忘记移动对应链表指针',
    '忘记移动 tail 指针',
    '忘记连接剩余的链表部分',
    '返回 dummy 而不是 dummy.next'
  ]
};
