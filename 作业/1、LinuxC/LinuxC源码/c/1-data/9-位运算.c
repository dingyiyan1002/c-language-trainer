#include <stdio.h>

//一组数组，除了一个数字外，其他都出现了两次，如何快速找到这个数字

int main()
{
	int a[5] = {1, 1, 2, 2, 3};

	int i, result = 0;
	for (i = 0; i < 5; i++)
	{
		result = result ^ a[i];
	}

	printf("%d\n", result);

	return 0;
}


