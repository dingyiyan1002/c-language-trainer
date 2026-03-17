#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <stdlib.h>
#include <unistd.h>

//vfork和fork的区别：vfork产生的子进程和父进程共享地址空间

int main()
{
	int num = 0;
	pid_t pid = vfork();      //产生子进程  子进程先运行，父进程后运行
	if (-1 == pid)
	{
		perror("fork");
		exit(1);
	}
	else if (0 == pid)      //子进程
	{
		num++;
		printf("child pid = %d, getpid = %d getppid = %d\n", pid, getpid(), getppid());
		printf("child num = %d\n", num);
		sleep(5);
		exit(0);            //vfork创建的子进程需要指定退出方式
	}
	else                   //父进程
	{
		num++;
		printf("parent num = %d\n", num);
		printf("parent pid = %d, getpid = %d getppid = %d\n", pid, getpid(), getppid());
	}

	return 0;
}
