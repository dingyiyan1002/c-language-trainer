#include <stdio.h>

int main()
{
	int num, i, tmp, count = 0;

	scanf("%d", &num);

	for (i = 1; i <= num; i++)
	{
		tmp = i;
		while (tmp > 0)
		{
			if (tmp % 10 == 9)
			{
				count++;
			}

			tmp = tmp / 10;
		}
	}

	printf("%d\n", count);

	return 0;
}

