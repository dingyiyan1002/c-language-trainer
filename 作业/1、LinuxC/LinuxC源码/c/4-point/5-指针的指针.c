#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void init(char **s)
{
	*s = malloc(sizeof(char) * 128);
}

int main()
{
	char *str = NULL;

	init(&str);     //如果要修改实参的值，一定要取地址

	strcpy(str, "helloworld");

	return 0;
}
