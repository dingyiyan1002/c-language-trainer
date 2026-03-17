#include <stdio.h>

int main()
{
	printf("char      %lu\n", sizeof(char));   //sizeof是关键字 用于计算数据类型的长度
	printf("short     %lu\n", sizeof(short));   //unsigned
	printf("int       %lu\n", sizeof(int));
	printf("long      %lu\n", sizeof(long));
	printf("float     %lu\n", sizeof(float));
	printf("double    %lu\n", sizeof(double));

	int a = 1;
	printf("%lu\n", sizeof(a++));  //sizeof是关键字 不是函数 a++不会执行
	printf("a = %d\n", a);

	long double b = 1;
	printf("%Lf\n", b);

	return 0;
}
