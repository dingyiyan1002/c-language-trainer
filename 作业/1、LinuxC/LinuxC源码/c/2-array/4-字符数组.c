#include <stdio.h>

int main()
{
	//char a[5] = {'h', 'e', 'l', 'l', 'o'};
	char a[10] = "hello";     //1、字符数组定义大一些   2、尽量初始化
	char ptr[10] = {0};

	/*int i;
	for (i = 0; i < 5; i++)
	{
		printf("%c", a[i]);
	}
	printf("\n");*/

	printf("%s\n", a);      //打印字符串，格式%s，参数是字符串的地址

	return 0;
}
