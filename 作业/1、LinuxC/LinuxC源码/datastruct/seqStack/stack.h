#ifndef _STACK_H
#define _STACK_H

#define SIZE    10
#define SUCCESS 1000
#define FAILURE 1001

//表示栈的结构体
typedef struct seqStack
{
	int *data;
	int top;
}Stack;

int InitStack(Stack *s);
int PushStack(Stack *s, int num);
int EmptyStack(Stack s);
int GetTop(Stack s);
int PopStack(Stack *s);
int ClearStack(Stack *s);
int DestroyStack(Stack *s);

#endif
