#include <stdio.h>
#include <string.h>

void sort(char *str[], int size)
{
	int i, j;
	for (i = 0; i < size - 1; i++)
	{
		for (j = 0; j < size - 1 - i; j++)
		{
			if (strcmp(str[j], str[j + 1]) > 0)
			{
				char *t = str[j];
				str[j] = str[j + 1];
				str[j + 1] = t;
			}

		}
	}
}

int main(int argc, char *argv[])
{
	sort(argv + 1, argc - 1);

	int i;

	for (i = 1; i < argc; i++)
	{
		printf("%s ", argv[i]);
	}
	printf("\n");


	return 0;
}
