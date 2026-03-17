#include <stdio.h>
#include <stdlib.h>

void lower_to_upper(char *s)
{
	while (*s != '\0')
	{
		if (*s >= 'a' && *s <= 'z')
		{
			*s = *s - ('a' - 'A');
		}

		s++;
	}
}

int main()
{
	char *s = (char *)malloc(sizeof(char) * 128);
	if (NULL == s)
	{
		printf("malloc failure\n");
		exit(1);
	}

	scanf("%s", s);

	lower_to_upper(s);

	printf("%s\n", s);

	return 0;
}
