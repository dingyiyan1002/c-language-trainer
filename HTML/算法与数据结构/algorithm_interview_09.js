/**
 * 算法面试题 09 - 检测链表环
 * 难度：⭐⭐⭐⭐⭐
 * 考点：快慢指针、环检测
 */

export const algorithm_interview_09 = {
  title: '检测链表环',
  difficulty: '高级',
  question: \`使用快慢指针检测链表是否有环：

#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

int has_cycle(Node *head) {
    if (head == NULL || ____ == NULL) {
        return 0;  // 无环
    }
    
    Node *slow = head;
    Node *fast = head;
    
    while (____ != NULL && ____ != NULL) {
        slow = ____;
        fast = ____;
        
        if (____ == ____) {
            return 1;  // 有环
        }
    }
    
    return 0;  // 无环
}\`,
  answer: \`int has_cycle(Node *head) {
    if (head == NULL || head->next == NULL) {
        return 0;  // 无环
    }
    
    Node *slow = head;
    Node *fast = head;
    
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        
        if (slow == fast) {
            return 1;  // 有环，快慢指针相遇
        }
    }
    
    return 0;  // 无环
}\`,
  keyPoints: [
    '快指针每次走两步，慢指针每次走一步',
    '有环时快慢指针必定相遇',
    '无环时快指针先到达 NULL',
    'Floyd 判圈算法（龟兔赛跑）',
    '时间复杂度 O(n)，空间复杂度 O(1)'
  ],
  commonMistakes: [
    '忘记检查 head 和 head->next 是否为空',
    '循环条件不完整（需要检查 fast 和 fast->next）',
    '相遇判断放在错误位置',
    '快指针只走一步'
  ]
};
