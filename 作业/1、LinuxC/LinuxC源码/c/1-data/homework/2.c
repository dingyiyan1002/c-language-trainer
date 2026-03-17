#include <stdio.h>

int main()
{
	int num1, num2;
	int i;

	scanf("%d %d", &num1, &num2);

	int min = (num1 > num2) ? num2 : num1;

	for (i = min; i > 0; i--)
	{
		if (num1 % i == 0 && num2 % i == 0)
		{
			printf("最大公约数是 %d\n", i);
			break;
		}
	}

	int max = (num1 > num2) ? num1 : num2;

	for (i = max; i <= num1 * num2; i++)
	{
		if (i % num1 == 0 && i % num2 == 0)
		{
			printf("最小公倍数是 %d\n", i);
			break;
		}
	}

	return 0;
}
