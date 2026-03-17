#include <stdio.h>
#include <string.h>

int main()
{
	char s1[32] = "helloworld";
	char s2[32] = "helloboy";

	if (strcmp(s1, s2) > 0)
	{
		printf("%s > %s\n", s1, s2);
	}

	char s3[32] = "helloboy";

	if (strcmp(s2, s3) == 0)
	{
		printf("%s = %s\n", s2, s3);
	}

	if (strncmp(s1, s2, 5) == 0)
	{
		printf("%s = %s\n", s1, s2);
	}

	return 0;
}
