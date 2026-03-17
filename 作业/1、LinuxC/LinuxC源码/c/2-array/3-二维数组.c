#include <stdio.h>

int main()
{
	//int array[3][4];
	//int array[3][4] = {{1, 2, 3, 4}, {2, 3, 4, 5}, {3, 4, 5, 6}};
	//int array[3][4] = {{1}, {2, 3}};
	//int array[][4] = {{1, 2, 3, 4}, {2, 3, 4, 5}, {3, 4, 5, 6}};
	int array[3][4] = {0};

	int i, j;
	for (i = 0; i < 3; i++)
	{
		for (j = 0; j < 4; j++)
		{
			printf("%d ", array[i][j]);
		}
		printf("\n");
	}

	//二维数组数组名
	printf("%p\n", &array[0][0]);         //首行首元素地址
	printf("%p\n", array);                //首行地址   加一相当于加一行
	printf("%p\n", array[0]);             //首行首元素地址    array[1]第二行首元素地址
	printf("%p\n", &array);               //数组的地址  加一相当于加一个数组

	printf("---------------------\n");

	printf("%p\n", &array[0][0] + 1);
	printf("%p\n", array + 1);
	printf("%p\n", array[0] + 1);
	printf("%p\n", &array + 1);
	
	return 0;
}
