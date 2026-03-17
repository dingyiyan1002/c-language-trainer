#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>

int main()
{
	//创建有名管道
	if (mkfifo("fifo.tmp", 00400 | 00200) == -1)
	{
		perror("mkfifo");
		exit(1);
	}

	int fd = open("fifo.tmp", O_RDONLY);
	if (-1 == fd)
	{
		perror("open");
		exit(2);
	}

	char buf[128] = {0};

	while (1)
	{
		if (read(fd, buf, 128) == -1)
		{
			perror("read");
			break;
		}

		if (!strcmp(buf, "bye"))
			break;

		printf("%s\n", buf);

		memset(buf, 0, 128);
	}

	close(fd);

	//删除有名管道
	unlink("fifo.tmp");

	return 0;
}
