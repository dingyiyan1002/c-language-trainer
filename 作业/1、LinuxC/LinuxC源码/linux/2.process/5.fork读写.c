#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

void child_write(int fd)
{
	char buf[128] = {0};
	while (1)
	{
		scanf("%s", buf);

		if (write(fd, buf, strlen(buf)) == -1)
		{
			perror("write");
			break;
		}

		//父子进程使用同一个文件描述符，共享一个文件指针，把文件指针移动到前面
		lseek(fd, -1 * strlen(buf), SEEK_CUR);

		if (!strcmp(buf, "bye"))
			break;

		memset(buf, 0, 128);
	}
}

void parent_read(int fd)
{
	char buf[128] = {0};

	while (1)
	{
		int ret = read(fd, buf, sizeof(buf));
		if (-1 == ret)
		{
			perror("read");
			break;
		}
		else if (0 == ret)
		{
			continue;
		}

		if (!strcmp(buf, "bye"))
			break;

		printf("child get : %s\n", buf);

		memset(buf, 0, 128);
	}
}

int main()
{
	int fd = open("hello.txt", O_CREAT | O_RDWR, 00400 | 00200);
	if (-1 == fd)
	{
		perror("open");
		exit(1);
	}

	if (fork() == 0)     //子进程负责写文件
	{
		child_write(fd);
	}
	else                 //父进程负责读文件
	{
		parent_read(fd);
	}

	close(fd);

	return 0;
}
