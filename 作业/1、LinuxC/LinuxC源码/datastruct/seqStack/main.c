#include "stack.h"
#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main()
{
	Stack s;

	//初始化栈
	int ret = InitStack(&s);
	if (SUCCESS == ret)
	{
		printf("栈初始化成功\n");
	}
	else
	{
		printf("栈初始化失败\n");
	}

	int i, num;
	srand(time(NULL));
	for (i = 0; i < 11; i++)
	{
		num = rand() % 20;
		ret = PushStack(&s, num);
		if (SUCCESS == ret)
		{
			printf("%d 进栈成功\n", num);
		}
		else
		{
			printf("%d 进栈失败\n", num);
		}
	}

	//判断栈是否为空
	ret = EmptyStack(s);
	if (ret == SUCCESS)
	{
		printf("栈为空\n");
	}
	else
	{
		printf("栈不为空\n");
	}

	//获取栈顶元素
	ret = GetTop(s);
	if (FAILURE == ret)
	{
		printf("不存在栈顶元素\n");
	}
	else
	{
		printf("栈顶元素是 %d\n", ret);
	}

	//出栈操作
	for (i = 0; i < 15; i++)
	{
		ret = PopStack(&s);
		if (FAILURE == ret)
		{
			printf("出栈失败\n");
		}
		else
		{
			printf("%d 出栈成功\n", ret);
		}
	}

	//清空操作
	ret = ClearStack(&s);
	if (SUCCESS == ret)
	{
		printf("清空成功\n");
	}
	else
	{
		printf("清空失败\n");
	}

	//获取栈顶元素
	ret = GetTop(s);
	if (FAILURE == ret)
	{
		printf("不存在栈顶元素\n");
	}
	else
	{
		printf("栈顶元素是 %d\n", ret);
	}

	ret = DestroyStack(&s);
	if (SUCCESS == ret)
	{
		printf("销毁成功\n");
	}
	else
	{
		printf("销毁失败\n");
	}

	for (i = 0; i < 11; i++)
	{
		num = rand() % 20;
		ret = PushStack(&s, num);
		if (SUCCESS == ret)
		{
			printf("%d 进栈成功\n", num);
		}
		else
		{
			printf("%d 进栈失败\n", num);
		}
	}

	return 0;
}
