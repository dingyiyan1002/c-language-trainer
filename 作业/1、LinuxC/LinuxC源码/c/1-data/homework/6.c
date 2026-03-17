#include <stdio.h>

int main()
{
	int i, j, sum = 0;

	for (i = 1; i < 1000; i++)
	{
		for (j = 1; j <= i / 2; j++)
		{
			if (i % j == 0)
			{
				sum += j;
			}
		}

		if (sum == i)
		{
			printf("%d\n", i);
		}

		sum = 0;
	}

	return 0;
}
