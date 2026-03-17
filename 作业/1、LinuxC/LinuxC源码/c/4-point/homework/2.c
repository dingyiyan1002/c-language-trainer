#include <stdio.h>
#include <string.h>

void merge(char *s1, char *s2, char *s3)
{
	while (*s1 != '\0' && *s2 != '\0')
	{
		if (*s1 < *s2)
		{
			*s3++ = *s1++;
		}
		else
		{
			*s3++ = *s2++;
		}
	}

	if (*s1 == '\0')
	{
		strcat(s3, s2);
	}
	else if (*s2 == '\0')
	{
		strcat(s3, s1);
	}
}

int main()
{
	char s1[128] = {0};
	char s2[128] = {0};
	char s3[128] = {0};

	scanf("%s %s", s1, s2);

	merge(s1, s2, s3);

	printf("%s\n", s3);

	return 0;
}
