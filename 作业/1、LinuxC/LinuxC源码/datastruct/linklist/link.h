#ifndef _LINK_H
#define _LINK_H

#define SUCCESS    1000
#define FAILURE    1001

//表示节点的结构体
typedef struct Node
{
	int data;
	struct Node *next;
}Node;

int init_link(Node **h);
int insert_link(Node *h, int p, int n);
void traverse_link(Node *h, void (*p)(int));
int empty_link(Node *h);
int length_link(Node *h);
int find_link(Node *h, int n, int *r);
int reverse_link(Node *h);
int delete_link(Node *h, int p, int *num);
int prior_link(Node *h, int num, int *p);
int clear_link(Node *h);
int destroy_link(Node **h);

#endif
