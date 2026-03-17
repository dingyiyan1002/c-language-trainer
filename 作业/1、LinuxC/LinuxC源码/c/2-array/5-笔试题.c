#include <stdio.h>
#include <string.h>

int main()
{
	char str[32] = {0};
	int num, i;
	char ch;

	printf("输入 字符串  位置  字符\n");
	scanf("%s %d %c", str, &num, &ch);

	int length = strlen(str);    //计算字符串长度

	for (i = 0; i < length - num + 1; i++)
	{
		str[length - i] = str[length - 1 - i];
	}

	str[num - 1] = ch;

	printf("%s\n", str);

	return 0;
}
