#include <stdio.h>

int main()
{
	int num, i;
	double sum = 0;

	for (i = 0; i < 10; i++)
	{
		scanf("%d", &num);
	
		sum += num;
	}

	printf("平均值是 %.1f\n", sum / 10);

	return 0;
}
