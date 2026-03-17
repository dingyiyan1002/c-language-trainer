#include <stdio.h>

int main()
{
	int array[5] = {1, 2, 3, 4, 5};
	int *p = array;

	int i;
	for (i = 0; i < 5; i++)
	{
		//printf("%d ", array[i]);
		//printf("%d ", p[i]);
		printf("%d ", *(p + i));   //p[i]等价于 *(p + i)
	}
	printf("\n");

	//用数组来表示指针
	char *s = "helloworld";

	for (i = 0; i < 10; i++)
	{
		printf("%c", s[i]);
	}
	printf("\n");

	return 0;
}
