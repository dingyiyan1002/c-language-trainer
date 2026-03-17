#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{
	char *p = (char *)malloc(sizeof(char) * 128);
	char *begin = p;
	int i;

	scanf("%s", p);

	while (*p != '\0')
	{
		for (i = 0; i < strlen(begin); i++)
		{
			if (begin + i == p)
			{
				continue;
			}

			if (*(begin + i) == *p)
			{
				break;
			}
		}

		if (i == strlen(begin))
		{
			printf("第一个不重复的字符是 %c\n", *p);
			break;
		}

		p++;
	}

	free(begin);

	return 0;
}
