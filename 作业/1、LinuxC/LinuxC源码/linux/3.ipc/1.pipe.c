#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/wait.h>

int main()
{
	int fd[2] = {0};
	int num = 0;

	if (pipe(fd) == -1)
	{
		perror("pipe");
		exit(1);
	}

	if (fork() == 0)    //子进程写数据
	{
		num++;
		//写入管道
		if (write(fd[1], &num, 4) == -1) //如果管道已满，write阻塞
		{
			perror("write");
			exit(1);
		}

		printf("child num = %d\n", num);
	}
	else                //父进程读取数据
	{
		if (read(fd[0], &num, 4) == -1)   //阻塞 如果管道为空，则程序停在这，直到有数据可读
		{
			perror("read");
			exit(1);
		}

		num++;

		printf("parent num = %d\n", num);

		int status;
		wait(&status);
	}
	return 0;
}
