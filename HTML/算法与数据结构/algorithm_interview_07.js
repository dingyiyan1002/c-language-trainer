/**
 * 算法面试题 07 - 快慢指针找中点
 * 难度：⭐⭐⭐⭐
 * 考点：链表、快慢指针
 */

export const algorithm_interview_07 = {
  title: '快慢指针找中点',
  difficulty: '高级',
  question: \`使用快慢指针找到链表中点：

#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node* find_middle(Node *head) {
    if (head == NULL) return NULL;
    
    Node *slow = head;
    Node *fast = head;
    
    while (____ != NULL && ____ != NULL) {
        slow = ____;        // 慢指针走一步
        fast = ____;        // 快指针走两步
    }
    
    return ____;  // slow 就是中点
}

// 测试：1->2->3->4->5->NULL，中点是 3
// 测试：1->2->3->4->5->6->NULL，中点是 4\`,
  answer: \`Node* find_middle(Node *head) {
    if (head == NULL) return NULL;
    
    Node *slow = head;
    Node *fast = head;
    
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;        // 慢指针走一步
        fast = fast->next->next;  // 快指针走两步
    }
    
    return slow;  // slow 就是中点
}\`,
  keyPoints: [
    '快指针速度是慢指针的 2 倍',
    '快指针到末尾时，慢指针在中点',
    '奇数长度：正中间',
    '偶数长度：中间两个的后一个',
    '循环条件：fast 和 fast->next 都不为空'
  ],
  commonMistakes: [
    '忘记检查 head 是否为空',
    '循环条件只检查 fast 不检查 fast->next',
    '快指针一次走一步（应该两步）',
    '返回 fast 而不是 slow'
  ]
};
