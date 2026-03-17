/**
 * 算法面试题 02 - 反转链表
 */
export const algo_interview_02 = {
  title: '反转链表',
  difficulty: '中级',
  question: `实现以下算法`,
  code: `struct Node { int data; struct Node *next; };

struct Node* reverse(struct Node *head) {
    struct Node *prev = NULL, *curr = head;
    while (curr) {
        struct Node *next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,
  answer: `三指针法，一次遍历`,
  keyPoints: ['数据结构', '算法思想', '时间复杂度']
};
