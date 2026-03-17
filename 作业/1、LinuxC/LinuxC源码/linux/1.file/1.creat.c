#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int main()
{
	int fd = creat("hello.c", 00400 | 00200);
	if (-1 == fd)              //出错处理
	{
		perror("creat");
		return -1;
	}

	printf("fd = %d\n", fd);

	return 0;
}
