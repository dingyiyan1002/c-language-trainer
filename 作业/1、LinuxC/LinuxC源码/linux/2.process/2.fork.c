#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <stdlib.h>
#include <unistd.h>

int main()
{
	pid_t pid = fork();      //产生子进程   父子进程的运行顺序随机
	if (-1 == pid)
	{
		perror("fork");
		exit(1);
	}
	else if (0 == pid)      //子进程
	{
		printf("child pid = %d, getpid = %d getppid = %d\n", pid, getpid(), getppid());
		//while (1)
		{
			printf("this is child ..\n");
			sleep(1);
		}
	}
	else                   //父进程
	{
		printf("parent pid = %d, getpid = %d getppid = %d\n", pid, getpid(), getppid());
		//while (1)
		{
			printf("this is parent ..\n");
			sleep(2);
		}
	}

	printf("helloworld\n");    //if分支之外的代码，父子进程都会执行

	return 0;
}
