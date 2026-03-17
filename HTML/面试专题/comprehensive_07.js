/**
 * 综合实战题 07 - 实现链表去重
 * 难度：★★★★★
 */
export const comprehensive_07 = {
  title: '实现链表去重',
  difficulty: '高级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

void remove_duplicates(struct Node *head) {
    if (head == NULL) return;
    
    struct Node *current = head;
    while (current && current->next) {
        struct Node *runner = current;
        while (runner->next) {
            if (runner->next->data == current->data) {
                struct Node *temp = runner->next;
                runner->next = runner->next->next;
                free(temp);
            } else {
                runner = runner->next;
            }
        }
        current = current->next;
    }
}`,
  answer: `双重循环，O(n²)时间复杂度`,
  keyPoints: ['经典算法', '代码实现', '边界处理']
};
