#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void traverse(char *str, char **s)
{
	char *begin = str;
	int i = 0;

	while (*str != '\0')
	{
		if (*str == ' ')
		{
			s[i] = (char *)malloc(sizeof(char) * (str - begin));
			strncpy(s[i++], begin, str - begin);
			begin = str + 1;
		}

		str++;
	}

	s[i] = (char *)malloc(sizeof(char) * (str - begin));
	strncpy(s[i++], begin, str - begin);
}

void sort(char **s, int size)
{
	int i, j;
	for (i = 0; i < size - 1; i++)
	{
		for (j = 0; j < size - 1 - i; j++)
		{
			if (strcmp(s[j], s[j + 1]) > 0)
			{
				char *t = s[j];
				s[j] = s[j + 1];
				s[j + 1] = t;
			}
		}
	}
}

int main()
{
	char str[1024] = {0};
	char ch;
	int i = 0;
	int count = 0;     //统计单词的个数

	while ((ch = getchar()) != '\n')
	{
		if (ch == ' ')
			count++;
		str[i++] = ch;
	}
	count++;

	//申请一个指针数组
	char **s = (char **)malloc(sizeof(char *) * count);

	traverse(str, s);

	sort(s, count);

	for (i = 0; i < count; i++)
	{
		printf("%s ", s[i]);
	}
	printf("\n");

	for (i = 0; i < count; i++)
	{
		free(s[i]);
	}
	free(s);

	return 0;
}
