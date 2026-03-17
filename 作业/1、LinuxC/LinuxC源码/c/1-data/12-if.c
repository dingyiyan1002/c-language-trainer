#include <stdio.h>

int main()
{
	int num1, num2, result;
	char opt;

	scanf("%d%c%d", &num1, &opt, &num2);

	if ('+' == opt)
	{
		result = num1 + num2;
	}
	else if ('-' == opt)
	{
		result = num1 - num2;
	}
	else if ('*' == opt)
	{
		result = num1 * num2;
	}
	else if ('/' == opt)
	{
		result = num1 / num2;
	}
	else
	{
		printf("unkown opt\n");
		return -1;
	}

	printf("%d\n", result);

	return 0;
}
