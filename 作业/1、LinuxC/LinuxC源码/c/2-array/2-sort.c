#include <stdio.h>

int main()
{
	int a[10] = {0};

	int i, j;
	for (i = 0; i < sizeof(a) / sizeof(a[0]); i++) //数组的总长度 / 每个元素的长度
	{
		scanf("%d", &a[i]);
	}

	for (i = 0; i < 10 - 1; i++)
	{
		for (j = 0; j < 10 - 1 - i; j++)
		{
			if (a[j] > a[j + 1])
			{
				int t = a[j];
				a[j] = a[j + 1];
				a[j + 1] = t;
			}
		}
	}

	for (i = 0; i < 10; i++)
	{
		printf("%d ", a[i]);
	}
	printf("\n");

	return 0;
}
