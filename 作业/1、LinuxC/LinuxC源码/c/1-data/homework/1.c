#include <stdio.h>

int main()
{
	int i, count = 0;
	for (i = 200; i <= 300; i++)
	{
		if (i % 3 == 0)    //能被整除
		{
			printf("%d ", i);
			count++;
			if (5 == count)
			{
				printf("\n");
				count = 0;
			}
		}
	}
	return 0;
}
