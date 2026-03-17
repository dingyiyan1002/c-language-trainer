#include "queue.h"
#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main()
{
	seqQueue queue;

	int ret = InitQueue(&queue);
	if (SUCCESS == ret)
	{
		printf("队列初始化成功\n");
	}
	else
	{
		printf("队列初始化失败\n");
	}

	srand(time(NULL));
	int i, num;
	for (i = 0; i < 10; i++)
	{
		num = rand() % 20;
		ret = PushQueue(&queue, num);
		if (SUCCESS == ret)
		{
			printf("%d 进队成功\n", num);
		}
		else
		{
			printf("%d 进队失败\n", num);
		}
	}

	ret = EmptyQueue(queue);
	if (SUCCESS == ret)
	{
		printf("队列为空\n");
	}
	else
	{
		printf("队列不为空\n");
	}

	ret = GetTop(queue);
	if (FAILURE == ret)
	{
		printf("没有队头元素\n");
	}
	else
	{
		printf("队头元素是 %d\n", ret);
	}

	for (i = 0; i < 10; i++)
	{
		ret = PopQueue(&queue);
		if (FAILURE == ret)
		{
			printf("出队失败\n");
		}
		else 
		{
			printf("%d 出队成功\n", ret);
		}
	}

	ret = ClearQueue(&queue);
	if (SUCCESS == ret)
	{
		printf("清空成功\n");
	}
	else
	{
		printf("清空失败\n");
	}

	ret = GetTop(queue);
	if (FAILURE == ret)
	{
		printf("没有队头元素\n");
	}
	else
	{
		printf("队头元素是 %d\n", ret);
	}

	ret = DestroyQueue(&queue);
	if (SUCCESS == ret)
	{
		printf("销毁成功\n");
	}
	else
	{
		printf("销毁失败\n");
	}

	for (i = 0; i < 10; i++)
	{
		num = rand() % 20;
		ret = PushQueue(&queue, num);
		if (SUCCESS == ret)
		{
			printf("%d 进队成功\n", num);
		}
		else
		{
			printf("%d 进队失败\n", num);
		}
	}

	return 0;
}
