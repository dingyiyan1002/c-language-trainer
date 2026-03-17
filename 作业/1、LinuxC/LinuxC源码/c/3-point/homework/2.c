#include <stdio.h>
#include <stdlib.h>

void move(char *s)
{
	while (*s != '\0')
	{
		*s = *(s + 1);
		s++;
	}
}

void delete_space(char *p)
{
	while (*p != '\0')
	{
		if (*p == ' ')
		{
			move(p);
		}
		else
		{
			p++;
		}
	}
}

int main()
{
	char *s = (char *)malloc(sizeof(char) * 128);
	char ch;

	//scanf("%s", s);
	int i = 0;
	while ((ch = getchar()) != '\n')
	{
		*(s + i++)  = ch;
	}

	delete_space(s);

	printf("%s\n", s);

	free(s);

	return 0;
}
