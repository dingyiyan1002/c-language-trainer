#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <sys/wait.h>
#include <stdlib.h>

//父进程负责产生子进程，最后回收子进程资源
//孤儿进程：父进程已经结束，子进程还在运行
//僵尸进程：子进程运行结束，但是父进程没有回收其资源

int main()
{
	if (fork() == 0)
	{
		sleep(1);
		printf("child pid = %d, ppid = %d\n", getpid(), getppid());
		exit(100);
	}
	else
	{
		//sleep(50);
		printf("parent pid = %d\n", getpid());

		int status;             //记录子进程的退出状态
		wait(&status);          //1.等待子进程结束 2.回收子进程的资源
		//waitpid();

		if (WIFEXITED(status))  //判断子进程是否正常结束
		{
			printf("子进程正常结束\n");
			printf("子进程的退出状态 %d\n", WEXITSTATUS(status));
		}
		else
		{
			printf("子进程异常退出\n");
		}
	}

	return 0;
}
