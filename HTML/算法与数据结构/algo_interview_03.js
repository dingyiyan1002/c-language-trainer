/**
 * 算法面试题 03 - 检测环
 */
export const algo_interview_03 = {
  title: '检测环',
  difficulty: '高级',
  question: `实现以下算法`,
  code: `struct Node { int data; struct Node *next; };

int has_cycle(struct Node *head) {
    if (!head || !head->next) return 0;
    
    struct Node *slow = head, *fast = head->next;
    while (fast && fast->next) {
        if (slow == fast) return 1;
        slow = slow->next;
        fast = fast->next->next;
    }
    return 0;
}`,
  answer: `快慢指针，Floyd 判圈算法`,
  keyPoints: ['数据结构', '算法思想', '时间复杂度']
};
