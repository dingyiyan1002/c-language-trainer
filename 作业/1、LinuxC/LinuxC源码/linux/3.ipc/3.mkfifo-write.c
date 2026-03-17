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
	int fd = open("fifo.tmp", O_WRONLY);
	if (-1 == fd)
	{
		perror("open");
		exit(2);
	}

	char buf[128] = {0};

	while (1)
	{
		scanf("%s", buf);

		if (write(fd, buf, strlen(buf)) == -1)
		{
			perror("write");
			break;
		}

		if (!strcmp(buf, "bye"))
			break;

		memset(buf, 0, 128);
	}

	close(fd);

	return 0;
}
