#include <stdio.h>

int main()
{
	//sizeof(a) / sizeof(a[0])
	
	int array[3][4] = {{1, 2, 3, 4}, {2, 3, 4, 5}, {3, 4, 5, 6}};
	//printf("%lu\n", sizeof(array[0]));  //求第一行所占字节数

	//通过指针数组访问二维数组
	int *s1[3] = {array[0], array[1],  array[2]};
	//printf("%lu\n", sizeof(s1[0]));     //求指针的字节数

	int i, j;
	for (i = 0; i < sizeof(s1) / sizeof(s1[0]); i++)
	{
		for (j = 0; j < sizeof(array[0]) / sizeof(array[0][0]); j++)
		{
			printf("%d ", *(s1[i] + j));    //*()   []     s1[i][j]
		}
		printf("\n");
	}

	//通过数组指针访问二维数组
	int (*s2)[4] = array;

	for (i = 0; i < 3; i++)
	{
		for (j = 0; j < 4; j++)
		{
			printf("%d ", *(*(s2 + i) + j));   //s2[][]
		}
		printf("\n");
	}

	//用指针表示二维数组
	int *s3 = &array[0][0];
	for (i = 0; i < 12; i++)
	{
		printf("%d ", s3[i]);
	}
	printf("\n");


	return 0;
}
