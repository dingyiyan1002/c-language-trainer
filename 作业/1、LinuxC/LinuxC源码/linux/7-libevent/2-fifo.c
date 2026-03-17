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
	//默认是阻塞的
	int fd = open("fifo.tmp", O_WRONLY);
	if (-1 == fd)
	{
		perror("open");
		exit(1);
	}

	int ret;
	char buf[32] = {0};
	while (1)
	{
		scanf("%s", buf);
		ret = write(fd, buf, strlen(buf));
		if (-1 == ret)
		{	
			perror("write");
			exit(1);
		}

		if (!strcmp(buf, "bye"))
		{
			break;
		}

		memset(buf, 0, sizeof(buf));
	}

	close(fd);
	unlink("fifo.tmp");     //删除管道文件

	return 0;
}
