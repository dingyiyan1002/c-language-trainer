/**
 * 综合实战题 09 - 实现约瑟夫环
 * 难度：★★★★★
 */
export const comprehensive_09 = {
  title: '实现约瑟夫环',
  difficulty: '高级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int num;
    struct Node *next;
};

int josephus(int n, int k) {
    // 创建循环链表
    struct Node *head = malloc(sizeof(struct Node));
    head->num = 1;
    struct Node *prev = head;
    
    for (int i = 2; i <= n; i++) {
        struct Node *node = malloc(sizeof(struct Node));
        node->num = i;
        prev->next = node;
        prev = node;
    }
    prev->next = head;  // 成环
    
    // 模拟过程
    struct Node *curr = head;
    while (curr->next != curr) {
        for (int i = 1; i < k - 1; i++) {
            curr = curr->next;
        }
        struct Node *to_remove = curr->next;
        curr->next = to_remove->next;
        free(to_remove);
        curr = curr->next;
    }
    
    int result = curr->num;
    free(curr);
    return result;
}`,
  answer: `经典算法题，循环链表应用`,
  keyPoints: ['经典算法', '代码实现', '边界处理']
};
