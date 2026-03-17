#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>

pthread_mutex_t mutex;           //定义互斥锁

void delay()
{
	int i, j;
	for (i = 0; i < 10000; i++)
		for (j = 0; j < 5000; j++);
}

int g_ticket = 100;

void *sale_ticket(void *arg)
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

	int i;
	pthread_t tid[5] = {0};

	for (i = 0; i < 5; i++)
	{
		if (pthread_create(&tid[i], NULL, sale_ticket, NULL) != 0)
		{
			perror("pthread_create");
			exit(1);
		}
	}

	void *status;
	for (i = 0; i < 5; i++)
	{
		pthread_join(tid[i], &status);
	}

	pthread_mutex_destroy(&mutex);

	return 0;
}
