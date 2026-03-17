#include <stdio.h>
#include <string.h>

#define SIZE   128

int main(int argc, char *argv[])
{
	FILE *fp_from = fopen(argv[1], "r");
	if (NULL == fp_from)
	{
		perror("fopen");
		return -1;
	}

	FILE *fp_to = fopen(argv[2], "w");
	if (NULL == fp_to)
	{
		perror("fopen2");
		return -2;
	}

	char buf[SIZE] = {0};
	size_t size;

	while (1)
	{
		size = fread(buf, 1, SIZE - 1, fp_from);
		if (0 == size)
		{
			printf("拷贝完毕\n");
			break;
		}

		size = fwrite(buf, 1, size, fp_to);
		if (0 == size)
		{
			perror("fwrite");
			break;
		}

		memset(buf, 0, SIZE);
	}

	fclose(fp_from);
	fclose(fp_to);

	return 0;
}
