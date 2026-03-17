#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	char *str[5] = {0};
	int min = 0;                //记录最短的下标
	int short_len;
	char sub[32] = {0};

	int i, j;
	for (i = 0; i < 5; i++)
	{
		str[i] = (char *)malloc(sizeof(char) * 32);
		scanf("%s", str[i]);

		if (0 == i)
		{
			short_len = strlen(str[i]);
		}
		else
		{
			if (strlen(str[i]) < short_len)
			{
				min = i;
				short_len = strlen(str[i]);
			}
		}
	}

	for (i = short_len; i >= 1; i--)
	{
		memset(sub, 0, 32);
		strncpy(sub, str[min], i);

		for (j = 0; j < 5; j++)
		{
			if (strncmp(str[i], sub, i) != 0)
			{
				break;
			}
		}
		if (j == 5)
		{
			printf("最长公共子串是 %s\n", sub);
			return 0;
		}
	}

	printf("不存在\n");

	return 0;
}
