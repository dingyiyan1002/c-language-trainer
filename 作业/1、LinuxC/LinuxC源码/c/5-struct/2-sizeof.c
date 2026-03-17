#include <stdio.h>

//1、结构体的总长度一定是最长成员的整数倍
//2、每个成员的偏移量一定是该成员长度的整数倍

struct Test
{
	int a;
	char c;
	int b;
	char d;
};

struct Test2
{
	int z;
	struct Test t;
	char e;
};

int main()
{
	printf("%lu\n", sizeof(struct Test2));

	return 0;
}
