/**
 * 结构体面试题 04 - 结构体嵌套与链表
 * 难度：⭐⭐⭐⭐⭐
 * 考点：自引用结构体、链表节点
 */

export const struct_interview_004 = {
  title: '结构体嵌套与链表',
  difficulty: '高级',
  question: `定义一个链表节点结构体，并实现：
1. 创建新节点
2. 在链表头部插入节点
3. 遍历打印链表`,
  answer: `#include <stdio.h>
#include <stdlib.h>

// 自引用结构体（链表节点）
struct Node {
    int data;
    struct Node *next;  // 指向同类型结构体的指针
};

// 创建新节点
struct Node* createNode(int data) {
    struct Node *newNode = malloc(sizeof(struct Node));
    if (newNode == NULL) return NULL;
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// 头插法
void insertAtHead(struct Node **head, int data) {
    struct Node *newNode = createNode(data);
    if (newNode == NULL) return;
    newNode->next = *head;
    *head = newNode;
}

// 遍历打印
void printList(struct Node *head) {
    struct Node *current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

// 释放链表
void freeList(struct Node *head) {
    struct Node *temp;
    while (head != NULL) {
        temp = head;
        head = head->next;
        free(temp);
    }
}

int main() {
    struct Node *head = NULL;
    
    insertAtHead(&head, 30);
    insertAtHead(&head, 20);
    insertAtHead(&head, 10);
    
    printList(head);  // 10 -> 20 -> 30 -> NULL
    
    freeList(head);
    
    return 0;
}

关键点：
- 结构体可以包含指向自身的指针
- 这是链表、树等数据结构的基础
- 使用二级指针修改头指针`,
  keyPoints: [
    '自引用结构体定义链表',
    'next 指针指向下一节点',
    '头插法需要二级指针',
    '遍历用单指针即可'
  ],
  commonMistakes: [
    '忘记 next 初始化为 NULL',
    '头插法忘记更新头指针',
    '遍历时丢失后续节点',
    '忘记释放链表内存'
  ]
};
