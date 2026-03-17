#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	char *p = (char *)malloc(sizeof(char) * 128);
	char *q = (char *)malloc(sizeof(char) * 128);
	int num;

	scanf("%s %d", p, &num);

	strcpy(q, p + num);
	strncat(q, p, num);

	strcpy(p, q);

	printf("%s\n", p);

	free(p);
	free(q);

	return 0;
}
