/**
 * 算法面试题 01 - 链表插入排序
 */
export const algo_interview_01 = {
  title: '链表插入排序',
  difficulty: '高级',
  question: `实现以下算法`,
  code: `struct Node { int data; struct Node *next; };

struct Node* insertion_sort(struct Node *head) {
    if (!head || !head->next) return head;
    
    struct Node dummy = {0, head};
    struct Node *sorted = head, *curr = head->next;
    
    while (curr) {
        if (curr->data >= sorted->data) {
            sorted = curr;
        } else {
            struct Node *prev = &dummy;
            while (prev->next->data < curr->data)
                prev = prev->next;
            sorted->next = curr->next;
            curr->next = prev->next;
            prev->next = curr;
        }
        curr = sorted->next;
    }
    return dummy.next;
}`,
  answer: `链表插入排序，O(n²)时间复杂度`,
  keyPoints: ['数据结构', '算法思想', '时间复杂度']
};
