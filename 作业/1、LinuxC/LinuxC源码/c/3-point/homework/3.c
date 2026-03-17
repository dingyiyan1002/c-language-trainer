#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int is_huiwen(char *s)
{
	char *p = s;
	int length = strlen(s), i;

	while (*p != 0)
		p++;

	p--;

	for (i = 0; i < length / 2; i++)
	{
		if (*p == *s)
		{
			p--;
			s++;
		}
		else
		{
			return 0;
		}
	}

	return 1;
}

int main()
{
	char *s = (char *)malloc(sizeof(char) * 128);

	scanf("%s", s);

	printf("%s\n", (is_huiwen(s) == 0) ? "不是回文" : "是回文");

	free(s);

	return 0;
}
