#include <stdio.h>
#include <string.h>

int main()
{
	FILE *fp = fopen("hello.txt", "a+");
	if (NULL == fp)
	{
		perror("fopen");
		return -1;
	}

	size_t size;
	//写什么东西  一块多大  写多少块  往哪写
	const char *s = "hellworld";
	size = fwrite(s, 1, strlen(s), fp);
	if (size == 0)
	{
		perror("fwrite");
		return -2;
	}

	//移动文件指针
	fseek(fp, 0, SEEK_SET);      //配合ftell求文件长度

	char buf[128] = {0};
	size = fread(buf, 1, sizeof(buf), fp);
	if (0 == size)
	{
		perror("fread");
		return -3;
	}

	printf("%s\n", buf);

	fclose(fp);

	return 0;
}
