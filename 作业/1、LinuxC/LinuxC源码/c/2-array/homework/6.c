#include <stdio.h>
#include <string.h>

int get_sub(char str[], char sub[])
{
	int str_length = strlen(str);
	int sub_length = strlen(sub);
	int i, count = 0;

	for (i = 0; i < str_length - sub_length + 1; i++)
	{
		if (!strncmp(str + i, sub, sub_length))
		{
			count++;
		}
	}

	return count;
}

int main()
{
	char str[128] = {0};
	char sub[128] = {0};

	printf("输入两个字符串 \n");
	scanf("%s %s", str, sub);

	int num = get_sub(str, sub);
	printf("子串出现了 %d 次\n", num);

	return 0;
}
