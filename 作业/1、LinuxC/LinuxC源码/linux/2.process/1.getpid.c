#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main()
{
	pid_t pid = getpid();
	printf("当前进程的进程号是:%d\n", pid);

	printf("父进程的进程号是:%d\n", getppid());

	while (1);

	return 0;
}
