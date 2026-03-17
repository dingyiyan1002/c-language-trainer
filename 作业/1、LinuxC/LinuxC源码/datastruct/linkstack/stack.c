#include "stack.h"
#include <stdlib.h>

int InitStack(LinkStack *s)
{
	if (NULL == s)
		return FAILURE;

	s->top = NULL;
	s->length = 0;

	return SUCCESS;
}

int PushStack(LinkStack *s, int num)
{
	if (NULL == s)
		return FAILURE;

	Node *m = (Node *)malloc(sizeof(Node));
	if (NULL == m)
		return FAILURE;

	m->data = num;
	m->next = s->top;
	s->top = m;
	s->length++;

	return SUCCESS;
}

int PopStack(LinkStack *s)
{
	if (NULL == s)
		return FAILURE;

	int num = s->top->data;
	Node *n = s->top;
	s->top = n->next;

	free(n);

	return num;
}
