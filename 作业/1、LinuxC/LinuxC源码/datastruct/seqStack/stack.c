#include "stack.h"
#include <stdlib.h>

int InitStack(Stack *s)
{
	if (NULL == s)
	{
		return FAILURE;
	}

	s->data = (int *)malloc(sizeof(int) * SIZE);
	if (NULL == s->data)
	{
		return FAILURE;
	}
	s->top = -1;

	return SUCCESS;
}

int PushStack(Stack *s, int num)
{
	if (NULL == s || NULL == s->data)
	{
		return FAILURE;
	}

	//判断栈是否已满
	if (s->top >= SIZE - 1)
		return FAILURE;

	s->data[++s->top] = num;

	return SUCCESS;
}

int EmptyStack(Stack s)
{
	return (s.top == -1) ? SUCCESS : FAILURE;
}

int GetTop(Stack s)
{
	return (s.top == -1) ? FAILURE : s.data[s.top];
}

int PopStack(Stack *s)
{
	if (NULL == s)
		return FAILURE;

	//判断栈是否为空
	if (s->top == -1)
		return FAILURE;

	return s->data[s->top--];
}

int ClearStack(Stack *s)
{
	if (NULL == s)
		return FAILURE;

	s->top = -1;

	return SUCCESS;
}

int DestroyStack(Stack *s)
{
	if (NULL == s)
		return FAILURE;

	free(s->data);
	s->data = NULL;

	return SUCCESS;
}
