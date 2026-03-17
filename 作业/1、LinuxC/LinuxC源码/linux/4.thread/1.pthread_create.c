#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>
#include <unistd.h>

pthread_t tid[2];

void *my_thread1(void *arg)
{
	int i;
	for (i = 0; i < 3; i++)
	{
		printf("this is my thread1 ...\n");
		sleep(1);
	}

	//取消线程2
	pthread_cancel(tid[1]);

	pthread_exit((void *)100);    //线程退出
}

void *my_thread2(void *arg)
{
	//修改线程属性：不能被取消
	int old;
	pthread_setcancelstate(PTHREAD_CANCEL_DISABLE, &old);

	int i;
	for (i = 0; i < 5; i++)
	{
		printf("%s\n", (char *)arg);
		sleep(1);
	}
}

int main()
{
	//pthread_t tid[2];

	//1.线程号  2.线程属性  3.线程函数   4.线程函数参数
	if (pthread_create(&tid[0], NULL, my_thread1, NULL) != 0)
	{
		perror("pthread_create");
		exit(1);
	}

	if (pthread_create(&tid[1], NULL, my_thread2, "helloworld") != 0)
	{
		perror("pthread_create");
		exit(1);
	}

	//主线程一定不能提前结束
	//主线程等待，直到两个线程都结束
	void *status;
	pthread_join(tid[0], &status);   //等待子线程结束  回收线程资源
	printf("线程1结束 %d...\n", (int)status);
	pthread_join(tid[1], &status);
	printf("线程2结束...\n");

	return 0;
}
