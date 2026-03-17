#include <stdio.h>

int main()
{
	int result = (1 + 1, 2 + 2);

	/*int i;
	for (i = 0, printf("1\n"); i < 5, printf("2\n"); i++, printf("3\n"))
	{
		printf("helloworld\n");
	}*/

	int i, j;
	for (i = 0; i < 5; i++)
	{
		for (j = 0; j < 3; j++)
		{
			if (1 == j)
			{
				//continue;   //结束本次循环，开始下一次循环
				break;        //结束这一层循环
			}

			printf("hello\n");
		}
	}

	return 0;
}
