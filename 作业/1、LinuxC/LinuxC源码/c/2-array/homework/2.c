#include <stdio.h>
#include <string.h>

int get_sub_index(char str[], char sub[])
{
	int str_length = strlen(str);
	int sub_length = strlen(sub);
	int i;

	for (i = 0; i < str_length - sub_length + 1; i++)
	{
		if (strncmp(str + i, sub, sub_length) == 0)
			return i + 1;
	}

	return -1;
}

int main()
{
	char str[32] = {0};
	char sub[32] = {0};

	printf("输入两个字符串 \n");
	scanf("%s %s", str, sub);

	int index = get_sub_index(str, sub);
	if (-1 == index)
	{
		printf("不存在\n");
	}
	else
	{
		printf("字符串的位置是 %d\n", index);
	}

	return 0;
}
