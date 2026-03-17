#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char ptr[32] = {0};

int add(int x, int y)     //整形函数
{
}

char *init()
{
	//char str[32] = {0};    //不能返回局部变量的地址
	char *str = (char *)malloc(sizeof(char) * 32);
	return str;
}

int main()
{
	char *s = init();
	strcpy(s, "hellowrold");

	free(s);

	return 0;
}
