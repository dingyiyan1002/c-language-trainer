#include <stdio.h>
#include "stack.h"

int main()
{
	LinkStack stack;

	//初始化栈
	int ret = InitStack(&stack);
	if (SUCCESS == ret)
	{
		printf("初始化栈成功\n");
	}
	else
	{
		printf("初始化栈失败\n");
	}

	ret = PushStack(&stack, 10);
	if (SUCCESS == ret)
	{
		printf("进栈成功\n");
	}
	else
	{
		printf("进栈失败\n");
	}

	ret = PopStack(&stack);
	if (FAILURE == ret)
	{
		printf("出栈失败\n");
	}
	else
	{
		printf("%d 出栈成功\n", ret);
	}

	return 0;
}
