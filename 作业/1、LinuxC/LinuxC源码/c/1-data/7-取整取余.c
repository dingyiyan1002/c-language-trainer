#include <stdio.h>
#include <stdlib.h>

int main()
{
	int num;

	scanf("%d", &num);

	if (num < 1000 || num >= 10000)
	{
		printf("输入有误\n");
		exit(1);
	}

	int ge = num % 10;
	int shi = num / 10 % 10;
	int bai = num / 100 % 10;
	int qian = num / 1000;

	printf("%d\n", ge * 1000 + shi * 100 + bai * 10 + qian);

	return 0;
}
