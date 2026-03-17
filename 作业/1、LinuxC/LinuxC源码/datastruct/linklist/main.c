#include <stdio.h>
#include "link.h"
#include <stdlib.h>
#include <time.h>

void show(int x)
{
	printf("%d ", x);
}

int main()
{
	//定义一个头指针
	Node *head = NULL;

	//初始化链表
	int ret = init_link(&head);
	if (SUCCESS == ret)
	{
		printf("链表初始化成功\n");
	}
	else
	{
		printf("链表初始化失败\n");
	}

	srand(time(NULL));
	//插入元素
	int i, num;
	for (i = 0; i < 10; i++)
	{
		num = rand() % 20 + 1;
		ret = insert_link(head, i + 1, num);    //尾插法
		if (SUCCESS == ret)
		{
			printf("在第 %d 个位置插入 %d 成功\n", i + 1, num);
		}
		else 
		{
			printf("插入 %d 失败\n", num);
		}
	}

	//遍历链表
	traverse_link(head, show);    //链表头指针   函数指针
	printf("\n");

	//判断链表是否为空
	ret = empty_link(head);
	if (SUCCESS == ret)
	{
		printf("链表为空\n");
	}
	else
	{
		printf("链表不为空\n");
	}

	printf("链表的长度是 %d\n", length_link(head));

	num = rand() % 20 + 1;
	int res[10] = {0};
	ret = find_link(head, num, res);
	if (SUCCESS == ret)
	{
		printf("%d 出现的位置是 ", num);
		for (i = 0; i < 10 && res[i] != 0; i++)
		{
			printf("%d ", res[i]);
		}
		printf("\n");
	}
	else
	{
		printf("%d 不存在\n", num);
	}

	//反转链表
	reverse_link(head);

	//遍历链表
	traverse_link(head, show);    //链表头指针   函数指针
	printf("\n");

	int p;
	//链表的删除
	for (i = 0; i < 5; i++)
	{
		p = rand() % 15;
		ret = delete_link(head, p, &num);
		if (SUCCESS == ret)
		{
			printf("删除第 %d 个元素成功 %d\n", p, num);
		}
		else
		{
			printf("删除第 %d 个元素失败\n", p);
		}
	}

	//遍历链表
	traverse_link(head, show);    //链表头指针   函数指针
	printf("\n");

	int prior;
	num = rand() % 30;
	ret = prior_link(head, num, &prior);
	if (SUCCESS == ret)
	{
		printf("元素 %d 的前驱是 %d\n", num, prior);
	}
	else
	{
		printf("元素 %d 不存在前驱\n", num);
	}

	ret = destroy_link(&head);
	if (SUCCESS == ret)
	{
		printf("链表销毁成功\n");
	}
	else
	{
		printf("链表销毁失败\n");
	}

	ret = clear_link(head);
	if (SUCCESS == ret)
	{
		printf("链表清空成功\n");
	}
	else
	{
		printf("链表清空失败\n");
	}

	//遍历链表
	traverse_link(head, show);    //链表头指针   函数指针
	printf("\n");


	return 0;
}
