#include <stdio.h>
#include <signal.h>
#include <unistd.h>

void handler(int sig)
{
	printf("get %d\n", sig);
}

void handler2(int sig)
{
	printf("get %d\n", sig);
	alarm(2);
}

int main()
{
	signal(SIGINT, SIG_IGN);     //忽略SIGINT信号
	//signal(SIGKILL, SIG_IGN);  //SIGKILL和SIGSTOP不能被忽略
	
	signal(SIGHUP, handler);     //收到SIGHUP信号，调用handler函数

	alarm(2);                    //2秒后给进程本身发送SIGALRM信号
	signal(SIGALRM, handler2);

	while(1);

	return 0;
}
