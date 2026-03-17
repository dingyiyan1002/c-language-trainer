#include <stdio.h>

int main()
{
	int a = 1, b = 2;

	int max = (a > b) ? a : b;

	printf("max = %d\n", max);

	//(a > b) ? a : b = 3;   //在C语言中，条件运算符不能作为左值使用

	return 0;
}
