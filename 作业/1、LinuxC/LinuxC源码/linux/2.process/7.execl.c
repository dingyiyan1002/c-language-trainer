#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main()
{
	if (vfork() == 0)   
	{
		printf("child pid = %d\n", getpid());
		//启动新的进程 新的进程一旦启动，父进程开始运行
		execl("/usr/bin/cp", "cp", "-r", "/usr/local", ".", NULL);

		//exit(0);
		printf("helloworld\n");
	}
	else 
	{
		printf("parent pid = %d\n", getpid());
	}

	return 0;
}
