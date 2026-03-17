#include <stdio.h>

#define size    5

int b[size];                   //未初始化的全局变量是0

int main()
{
	//int k = 100;
	//int a[k] = {0};          //数组的长度一定是确定的
	
	//int a[size];             //位初始化的局部变量是随机值
	//int a[size] = {1, 2, 3, 4, 5};
	//int a[] = {1, 2, 3, 4, 5};
	//int a[5] = {1, 2, 3};
	int a[5] = {0};

	int i;
	for (i = 0; i < 5; i++)
	{
		printf("%d ", a[i]);
	}
	printf("\n");

	printf("%p\n", a);         //数组名：表示数组首元素地址
	printf("%p\n", &a[0]);     //首元素的地址
	printf("%p\n", &a);        //表示整个数组的地址 加一相当于跨越一个数组

	printf("%p\n", a + 1);        
	printf("%p\n", &a[0] + 1);
	printf("%p\n", &a + 1);

	return 0;
}

