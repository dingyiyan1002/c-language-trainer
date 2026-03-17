/**
 * 指针面试题 18 - 链表反转
 * 难度：★★★★★
 */
export const pointer_interview_18 = {
  title: '链表反转',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *next; };

struct Node* reverse(struct Node *head) {
    struct Node *prev = NULL, *curr = head, *next;
    while (curr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,
  answer: `三指针法反转链表`,
  keyPoints: ['指针核心概念', '实际应用', '代码分析']
};
