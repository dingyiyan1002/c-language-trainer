#include "data.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

extern Queue wait;
extern LinkNode *head;

void init_queue()
{
	QueueNode *n = (QueueNode *)malloc(sizeof(QueueNode));
	if (NULL == n)
	{
		fprintf(stderr, "malloc failure\n");
		return;
	}

	wait.front = wait.rear = n;
}

void init_link()
{
	head = (LinkNode *)malloc(sizeof(LinkNode));
	if (NULL == head)
	{
		fprintf(stderr, "malloc failure\n");
		return;
	}

	head->next = NULL;
}

/*
 * 把车辆放入等待队列
 * */
void push_queue(char *id)
{
	QueueNode *n = (QueueNode *)malloc(sizeof(QueueNode));
	if (NULL == n)
	{
		fprintf(stderr, "malloc failure\n");
		return;
	}

	strcpy(n->id, id);
	n->next = NULL;
	wait.rear->next = n;
	wait.rear = n;
}

/*
 * 出队操作
 * */
void pop_queue(char *id)
{
	strcpy(id, wait.front->next->id);

	QueueNode *n = wait.front->next;
	wait.front->next = n->next;
	free(n);
}

int empty_queue()
{
	return (wait.front == wait.rear) ? 1 : 0;
}

void insert_link(const char *id, Box b)
{
	LinkNode *p = head;

	while (p->next)
	{
		p = p->next;
	}

	LinkNode *n = (LinkNode *)malloc(sizeof(LinkNode));
	if (NULL == n)
	{
		fprintf(stderr, "malloc filaure\n");
		return;
	}

	strcpy(n->id, id);
	n->start = time(NULL);
	n->locate = b;
	n->next = NULL;

	p->next = n;
}

void traverse_link()
{
	LinkNode *p = head->next;
	while (p)
	{
		printf("车牌号：%s\n", p->id);
		printf("\t进场时间：%s\t停放的位置：%d %d\n", 
				ctime(&(p->start)), p->locate.row, p->locate.column);

		p = p->next;
	}
}

void delete_link(const char *id)
{
	LinkNode *fast = head->next, *slow = head;

	while (fast)
	{
		if (strcmp(fast->id, id) == 0)
		{
			slow->next = fast->next;
			free(fast);

			return;
		}

		fast = fast->next;
		slow = slow->next;
	}
}

Box get_place_by_id(const char *id)
{
	Box b = {-1, -1};

	LinkNode *p = head->next;
	while (p)
	{
		if (strcmp(p->id, id) == 0)
		{
			b = p->locate;
			return b;
		}

		p = p->next;
	}

	return b;
}

time_t get_time_by_id(const char *id)
{
	LinkNode *p = head->next;

	while (p)
	{
		if (strcmp(p->id, id) == 0)
		{
			return p->start;
		}

		p = p->next;
	}

	return 0;
}

int id_is_repeat(const char *id)
{
	LinkNode *p = head->next;
	while (p)
	{
		if (strcmp(p->id, id) == 0)
		{
			return 1;
		}

		p = p->next;
	}

	return 0;
}
