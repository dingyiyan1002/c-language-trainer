#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>

int main()
{
	//打开已经存在的文件  第二个参数表示打开的方式
	int fd = open("hello.c", O_RDONLY);    //只读的方式打开hello.c文件
	if (-1 == fd)
	{
		perror("open1");
		return -1;
	}

	close(fd);       //关闭文件

	//创建并打开文件   O_EXCL:如果文件存在，则报错
	fd = open("hello.txt", O_WRONLY | O_CREAT | O_EXCL, 00700 | 00400);
	if (-1 == fd)
	{
		perror("open2");
		return -2;
	}

	close(fd);

	return 0;
}
