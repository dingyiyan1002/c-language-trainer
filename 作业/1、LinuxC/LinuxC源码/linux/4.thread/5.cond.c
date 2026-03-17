#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>

pthread_mutex_t mutex;           //定义互斥锁
pthread_cond_t  cond;            //定义条件变量

void delay()
{
	int i, j;
	for (i = 0; i < 10000; i++)
		for (j = 0; j < 5000; j++);
}

int g_ticket = 100;

void *sale_ticket_a(void *arg)
{
	int cur;

	while (1)
	{
		pthread_mutex_lock(&mutex);

		cur = g_ticket;

		if (cur <= 0)
		{
			pthread_mutex_unlock(&mutex);
			break;
		}

		//如果票数等于50，唤醒b
		if (cur == 50)
		{
			pthread_cond_signal(&cond);
		}

		printf("%ld get %d ticket\n", pthread_self(), cur);

		cur--;

		g_ticket = cur;

		pthread_mutex_unlock(&mutex);

		delay();
	}
}

void *sale_ticket_b(void *arg)
{
	int cur;

	while (1)
	{
		pthread_mutex_lock(&mutex);

		cur = g_ticket;

		if (cur <= 0)
		{
			pthread_mutex_unlock(&mutex);
			break;
		}

		//如果票数大于50，睡眠
		if (cur > 50)
		{
			pthread_cond_wait(&cond, &mutex);
			cur = g_ticket;
		}

		printf("%ld get %d ticket\n", pthread_self(), cur);

		cur--;

		g_ticket = cur;

		pthread_mutex_unlock(&mutex);

		delay();
	}
}
int main()
{
	pthread_mutex_init(&mutex, NULL);
	pthread_cond_init(&cond, NULL);

	int i;
	pthread_t tid[2] = {0};

	if (pthread_create(&tid[0], NULL, sale_ticket_a, NULL) != 0)
	{
		perror("pthread_create");
		exit(1);
	}

	if (pthread_create(&tid[1], NULL, sale_ticket_b, NULL) != 0)
	{
		perror("pthread_create");
		exit(1);
	}

	void *status;
	
	for (i = 0; i < 2; i++)
	{
		pthread_join(tid[i], &status);
	}

	pthread_mutex_destroy(&mutex);
	pthread_cond_destroy(&cond);

	return 0;
}
