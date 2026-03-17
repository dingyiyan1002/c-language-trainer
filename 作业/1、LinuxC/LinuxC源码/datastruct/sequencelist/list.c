//实现所有的函数
#include "list.h"
#include <stdlib.h>
#include <stdio.h>

/*顺序表初始化操作*/
int init_list(List *l)
{
	//入参判断，防止传进来空指针
	if (NULL == l)
	{
		return FAILURE;
	}

	l->data = (int *)malloc(sizeof(int) * SIZE);
	if (NULL == l->data)
	{
		return FAILURE;
	}

	l->length = 0;

	return SUCCESS;
}

/*顺序表的插入操作*/
int insert_list(List *l, int p, int num)
{
	if (NULL == l || NULL == l->data)
	{
		return FAILURE;
	}

	//判断顺序表是否满
	if (l->length >= SIZE)
	{
		return FAILURE;
	}

	//判断位置是否合法
	if (p > l->length + 1)
	{
		return FAILURE;
	}

	int i;
	for (i = 0; i < l->length - p + 1; i++)
	{
		l->data[l->length - i] = l->data[l->length - 1 - i];
	}

	l->data[p - 1] = num;

	l->length++;

	return SUCCESS;
}

/*顺序表的遍历操作*/
void traverse_list(List l)
{
	int i;
	for (i = 0; i < l.length; i++)
	{
		printf("%d ", l.data[i]);
	}

	printf("\n");
}

/*函数描述：顺序表获取前驱操作
 * 函数参数：顺序表 匹配的数字 保存结果
 * 返回值：成功返回SUCCESS   失败返回FAILURE*/
int get_prior_list(List l, int num, int *r)
{
	int i;
	for (i = 1; i < l.length; i++)
	{
		if (l.data[i] == num)
		{
			*r = l.data[i - 1];
			return SUCCESS;
		}
	}

	return FAILURE;
}

/*顺序表获取后继操作*/
int get_next_list(List l, int num, int *r)
{
	int i;
	for (i = 0; i < l.length - 1; i++)
	{
		if (l.data[i] == num)
		{
			*r = l.data[i + 1];
			return SUCCESS;
		}
	}

	return FAILURE;
}

/*
 * 函数描述：顺序表查找功能
 * 函数参数：顺序表 位置 保存结果
 * 返回值：成功返回SUCCESS 失败返回FAILURE*/
int find_list(List l, int p, int *n)
{
	//先判断位置是否合法
	if (p <= 0 || p > l.length)
	{
		return FAILURE;
	}

	*n = l.data[p - 1];

	return SUCCESS;
}

/*
 * 函数描述：顺序表定位操作
 * 函数参数：顺序表 要定位的元素 保存位置
 * 函数返回值：成功返回SUCCESS 失败返回FAILURE*/
int locat_list(List l, int num, int *p)
{
	int i;
	for (i = 0; i < l.length; i++)
	{
		if (num == l.data[i])
		{
			*p = i + 1;
			return SUCCESS;
		}
	}

	return FAILURE;
}

/*
 * 函数描述：顺序表的删除操作
 * 函数参数：顺序表 删除的位置 保存删除的元素
 * 返回值：成功返回SUCCESS  失败返回FAILURE*/
int delete_list(List *l, int p, int *n)
{
	if (NULL == l || NULL == n)
	{
		return FAILURE;
	}

	//判断删除的位置
	if (p > l->length || p <= 0)
	{
		return FAILURE;
	}

	*n = l->data[p - 1];

	int i;
	for (i = 0; i < l->length - p; i++)
	{
		l->data[p - 1 + i] = l->data[p + i];
	}

	l->length--;

	return SUCCESS;
}

int clear_list(List *l)
{
	if (NULL == l)
	{
		return FAILURE;
	}

	l->length = 0;

	return SUCCESS;
}

int destroy_list(List *l)
{
	if (NULL == l)
		return FAILURE;

	free(l->data);
	l->data = NULL;

	return SUCCESS;
}
