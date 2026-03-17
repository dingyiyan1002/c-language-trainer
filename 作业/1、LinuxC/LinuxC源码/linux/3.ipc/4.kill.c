#include <stdio.h>
#include <sys/types.h>
#include <signal.h>
#include <sys/types.h>
#include <unistd.h>

int main()
{
	//kill(getpid(), SIGINT);       //给进程本身发送SIGINT信号
	raise(2);                       //只能给进程本身发送信号

	while (1);

	return 0;
}
