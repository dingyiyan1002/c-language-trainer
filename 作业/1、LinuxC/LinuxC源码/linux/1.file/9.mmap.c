//通过mmap来读取文件内容

#include <stdio.h>
#include <sys/mman.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <fcntl.h>

#define FILENAME "8.copy.c"

int main()
{
	int fd = open(FILENAME, O_RDONLY);
	if (-1 == fd)
	{
		perror("open");
		return -2;
	}

	//求文件长度
	struct stat s;
	if (-1 == stat(FILENAME, &s))
	{
		perror("stat");
		return -1;
	}

	int length = s.st_size;

	/*1.NULL表示让系统自己分配内存
	 * 2.映射的长度
	 * 3.内存的属性
	 * 4.要映射的文件
	 * 5.文件的偏移量
	 * */
	void *addr = mmap(NULL, length, PROT_READ, MAP_SHARED, fd, 0);
	if (MAP_FAILED == addr)
	{
		perror("mmap");
		return -3;
	}

	int i;
	for (i = 0; i < length; i++)
	{
		printf("%c", *((char *)addr + i));
	}
	printf("\n");

	munmap(addr, length);

	close(fd);

	return 0;
}
