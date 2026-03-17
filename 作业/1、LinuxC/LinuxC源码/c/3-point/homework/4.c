#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int is_sub(const char *s1, const char *s2)
{
	int len1 = strlen(s1);
	int len2 = strlen(s2);
	int i;

	for (i = 0; i < len1 - len2 + 1; i++)
	{
		if (strncmp(s1 + i, s2, len2) == 0)
		{
			return 1;
		}
	}

	return 0;
}

int main()
{
	char *p = (char *)malloc(sizeof(char) * 128);
	char *q = (char *)malloc(sizeof(char) * 128);

	printf("输入两个字符串\n");
	scanf("%s %s", p, q);

	int len_p = strlen(p);
	int len_q = strlen(q);

	int short_length, long_length;
	char *short_str, *long_str;

	if (len_p > len_q)
	{
		short_length = len_q;
		long_length = len_p;

		short_str = q;
		long_str = p;
	}
	else
	{
		short_length = len_p;
		long_length = len_q;

		short_str = p;
		long_str = q;
	}

	int i, j;
	char buf[128] = {0};
	for (i = short_length; i >= 1; i--)    //i表示子串的长度
	{
		for (j = 0; j < short_length - i + 1; j++)
		{
			memset(buf, 0, 128);
			strncpy(buf, short_str + j, i);
			if (is_sub(long_str, buf))
			{
				printf("最长公共子串是 %s\n", buf);
				i = 1;
				break;
			}
		}
	}


	free(q);
	free(p);

	return 0;
}
