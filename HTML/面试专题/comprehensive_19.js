/**
 * 综合实战题 19 - 实现简单链表
 */
export const comprehensive_19 = {
  title: '实现简单链表',
  difficulty: '高级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node* create_node(int data) {
    struct Node *node = malloc(sizeof(struct Node));
    node->data = data;
    node->next = NULL;
    return node;
}

void append(struct Node **head, int data) {
    struct Node *new_node = create_node(data);
    if (*head == NULL) {
        *head = new_node;
        return;
    }
    
    struct Node *curr = *head;
    while (curr->next) curr = curr->next;
    curr->next = new_node;
}

void print_list(struct Node *head) {
    while (head) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

void free_list(struct Node *head) {
    while (head) {
        struct Node *temp = head;
        head = head->next;
        free(temp);
    }
}`,
  answer: `完整链表实现`,
  keyPoints: ['标准库实现', '代码能力', '边界处理']
};
