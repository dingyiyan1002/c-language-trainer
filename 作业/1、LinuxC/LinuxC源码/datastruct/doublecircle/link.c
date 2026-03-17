#include "link.h"
#include <stdlib.h>

int init_link(Node **h)
{
	if (NULL == h)
	{
		return FAILURE;
	}

	*h = (Node *)malloc(sizeof(Node) * 1);
	if (NULL == (*h))
	{
		return FAILURE;
	}

	(*h)->next = *h;
	(*h)->next = *h;

	return SUCCESS;
}

/*
 * 函数描述：链表的插入操作
 * 函数参数：链表  插入的位置  插入的元素
 * 函数返回值：成功返回SUCCESS 失败返回FAILURE
 * */
int insert_link(Node *h, int p, int n)
{
	if (NULL == h)
	{
		return FAILURE;
	}

	//判断位置是否合法
	if (p <= 0 || p > length_link(h) + 1)
	{
		return FAILURE;
	}

	//移动指针
	Node *q = h;
	int i;
	for (i = 0; i < p - 1; i++)
	{
		q = q->next;
	}

	Node *m = (Node *)malloc(sizeof(Node) * 1);
	if (NULL == m)
	{
		return FAILURE;
	}

	m->data = n;
	m->next = q->next;
	m->prior = q;
	q->next->prior = m;
	q->next = m;

	return SUCCESS;
}

void traverse_link(Node *h, void (*p)(int))
{	
	if (NULL == h)
	{
		return;
	}

	Node *q = h->next;   //q指向第一个节点
	while (q != h)
	{
		p(q->data);     //调用show函数
		q = q->next;
	}
}

int empty_link(Node *h)
{
	if (NULL == h)
	{
		return FAILURE;
	}

	return (h->next == h) ? SUCCESS : FAILURE;
}

int length_link(Node *h)
{
	if (NULL == h)
	{
		return FAILURE;
	}

	Node *q = h->next;
	int length = 0;
	while (q != h)
	{
		length++;
		q = q->next;
	}

	return length;
}

/*
 * 函数描述：链表的查找操作
 * 函数参数：链表  要查找的元素  保存满足条件的位置
 * 函数返回值：找到返回SUCCESS   找不到返回FAILURE
 * */
int find_link(Node *h, int n, int *r)
{
	if (NULL == h || NULL == r)
	{
		return FAILURE;
	}

	Node *q = h->next;
	int i = 0, len = 0, flag = 0;
	while (q != h)
	{
		len++;
		if (q->data == n)
		{
			r[i++] = len;
			flag = 1;
		}
		q = q->next;
	}

	if (flag == 1)
	{
		return SUCCESS;
	}
	else
	{
		return FAILURE;
	}
}

int reverse_link(Node *h)
{
	if (NULL == h)
		return FAILURE;

	Node *p = h->next;
	h->next = NULL;

	while (p)
	{
		Node *q = p;
		p = p->next;
		q->next = h->next;
		h->next = q;
	}

	return SUCCESS;
}

/*
 * 函数描述：链表的删除操作
 * 函数参数：链表 删除的位置 保存删除的元素
 * 函数返回值：成功返回SUCCESS   失败返回FAILURE
 * */
int delete_link(Node *h, int p, int *num)
{
	if (NULL == h || NULL == num)
	{
		return FAILURE;
	}

	//判断位置是否合法
	if (p <= 0 || p > length_link(h))
	{
		return FAILURE;
	}

	//移动指针
	int i;
	Node *q = h;
	for (i = 0 ; i < p - 1; i++)
	{
		q = q->next;
	}

	Node *n = q->next;    //要删除的节点
	*num = n->data;

	n->next->prior = q;
	q->next = n->next;

	free(n);

	return SUCCESS;
}

/*
 * 函数描述：获得元素的前驱
 * 函数参数：链表 要查找的元素 保存前驱元素
 * 函数返回值：成功返回SUCCESS   失败返回FAILURE
 * */
int prior_link(Node *h, int num, int *p)
{
	if (NULL == h || NULL == p)
	{
		return FAILURE;
	}

	if (h == h->next || h == h->next->next)
	{
		return FAILURE;
	}

	Node *k = h->next;    //第一个节点
	Node *q = k->next;    //第二个节点

	while (q != h)
	{
		if (q->data == num)
		{
			*p = k->data;
			return SUCCESS;
		}

		q = q->next;
		k = k->next;
	}

	return FAILURE;
}

int clear_link(Node *h)
{
	if (NULL == h)
		return FAILURE;

	Node *q = h->next;
	while (q != h)
	{
		h->next = q->next;
		free(q);
		q = h->next;
	}

	return SUCCESS;
}

int destroy_link(Node **h)
{
	if (NULL == h)
	{
		return FAILURE;
	}

	if ((*h)->next != *h)
	{
		return FAILURE;
	}

	free(*h);
	*h = NULL;

	return SUCCESS;
}
