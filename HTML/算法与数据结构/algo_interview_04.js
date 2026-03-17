/**
 * 算法面试题 04 - 合并有序链表
 */
export const algo_interview_04 = {
  title: '合并有序链表',
  difficulty: '高级',
  question: `实现以下算法`,
  code: `struct Node { int data; struct Node *next; };

struct Node* merge(struct Node *l1, struct Node *l2) {
    struct Node dummy = {0, NULL};
    struct Node *tail = &dummy;
    
    while (l1 && l2) {
        if (l1->data <= l2->data) {
            tail->next = l1;
            l1 = l1->next;
        } else {
            tail->next = l2;
            l2 = l2->next;
        }
        tail = tail->next;
    }
    tail->next = l1 ? l1 : l2;
    return dummy.next;
}`,
  answer: `归并思想，双指针`,
  keyPoints: ['数据结构', '算法思想', '时间复杂度']
};
