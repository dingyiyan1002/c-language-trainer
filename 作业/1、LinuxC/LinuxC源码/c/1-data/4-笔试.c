//混合运算
#include <stdio.h>

int main()
{
	int i = -20;
	unsigned int j = 10;

	printf("%d\n", i + j);

	if (i + j > 0)
	{
		printf("big then 0\n");
	}

	printf("%u\n", i + j);

	return 0;
}
