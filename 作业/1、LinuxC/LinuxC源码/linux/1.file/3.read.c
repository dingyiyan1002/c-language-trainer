#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>

int main()
{
	//打开存在的文件
	int fd = open("hello.c", O_RDWR);
	if (-1 == fd)
	{
		perror("open");
		return -1;
	}

	const char *s = "helloworld";
	//往哪写 写什么东西  写多少个字节  返回实际写入的字节数
	ssize_t size = write(fd, s, strlen(s));
	if (-1 == size)
	{
		perror("write");
		return -2;
	}

	//移动文件指针
	//lseek(fd, 0, SEEK_SET);     //相对文件开头移动0字节
	//lseek(fd, -10, SEEK_END);   //相对文件末尾向前移动10字节
	lseek(fd, -10, SEEK_CUR);   //相对文件末尾向前移动10字节

	char buf[128] = {0};
	size = read(fd, buf, sizeof(buf));
	if (-1 == size)
	{
		perror("read");
		return -3;
	}

	printf("%s\n", buf);

	close(fd);

	return 100;
}
