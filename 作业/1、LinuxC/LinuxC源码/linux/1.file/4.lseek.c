#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>

int main(int argc, char *argv[])
{
	int fd = open(argv[1], O_RDONLY);
	if (-1 == fd)
	{
		perror("open");
		return -1;
	}

	printf("%ld\n", lseek(fd, 0, SEEK_END));

	close(fd);

	return 0;
}
