#include <stdio.h>

int f1()
{
	printf("this is f1 ...\n");
	return 1;
}

int f2()
{
	printf("this is f2 ...\n");
	return 0;
}

int main()
{
	if (f1() || f2())   //短路原则：如果表达式1已经成立，则不会执行表达式2
	{
		printf("helloworld\n");
	}

	return 0;
}
