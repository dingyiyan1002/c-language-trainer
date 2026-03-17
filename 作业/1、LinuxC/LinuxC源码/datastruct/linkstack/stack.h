#ifndef _STACK_H
#define _STACK_H

#define SUCCESS  1000
#define FAILURE  1001

//表示节点的结构体
typedef struct Node
{
	int data;
	struct Node *next;
}Node;

//表示栈的结构体
typedef struct Stack
{
	Node *top;
	int length;     //表示栈的长度
}LinkStack;

int InitStack(LinkStack *s);
int PushStack(LinkStack *s, int num);
int PopStack(LinkStack *s);

#endif
