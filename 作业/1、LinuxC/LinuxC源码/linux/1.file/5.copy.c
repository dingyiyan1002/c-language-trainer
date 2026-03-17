#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <stdlib.h>
#include <unistd.h>

#define SIZE    128

int main(int argc, char *argv[])
{
	//以只读方式打开第一个文件，已经存在
	int fd_from = open(argv[1], O_RDONLY);
	if (-1 == fd_from)
	{
		perror("open1");
		exit(1);
	}

	//以只写的方式打开第二个文件，文件不存在
	int fd_to = open(argv[2], O_WRONLY | O_CREAT | O_EXCL, 00400 | 00200);
	if (-1 == fd_to)
	{
		perror("open2");
		exit(2);
	}

	char buf[SIZE] = {0};
	ssize_t size;
	while (1)
	{
		size = read(fd_from, buf, sizeof(buf) - 1);
		if (-1 == size)
		{
			perror("read");
			break;
		}
		else if (0 == size)     //文件读完
		{
			printf("文件拷贝完毕\n");
			break;
		}

		size = write(fd_to, buf, size);
		if (-1 == size)
		{
			perror("write");
			break;
		}
	}

	close(fd_from);
	close(fd_to);

	return 0;
}
