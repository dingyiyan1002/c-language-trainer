#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>
#include <unistd.h>

//表示任务队列结点的结构体
typedef struct Task
{
	void (*function)(void *arg);
	void *arg;
	struct Task *next;
}Task;

//表示线程池
typedef struct ThreadPool
{
	//任务队列
	Task *queueFront;
	Task *queueRear;

	//线程的数量
	int num;

	//线程号
	pthread_t *threadID;

	//互斥锁和条件变量
	pthread_mutex_t mutex;
	pthread_cond_t cond;

	//关闭线程池的标志位
	int shutdown;
}ThreadPool;

//线程处理函数
void *worker(void *arg)
{
	ThreadPool *pool = (ThreadPool *)arg;

	while (1)
	{
		pthread_mutex_lock(&pool->mutex);

		//如果任务队列为空 且线程池没有被关闭 线程睡眠
		while (pool->queueFront == pool->queueRear && pool->shutdown == 0)
		{
			pthread_cond_wait(&pool->cond, &pool->mutex);
		}

		//如果线程池被关闭 
		if (pool->shutdown == 1)
		{
			pthread_mutex_unlock(&pool->mutex);
			printf("线城池被关闭 线程 %ld 退出...\n", pthread_self());
			pthread_exit((void *)0);
		}

		//从任务队列获取（出队）一个任务，并且执行
		Task task;
		Task *t = pool->queueFront->next;
		task.function = t->function;
		task.arg = t->arg;
		pool->queueFront->next = t->next;
		free(t);
		if (pool->queueFront->next == NULL)
		{
			pool->queueRear = pool->queueFront;
		}

		//释放互斥锁
		pthread_mutex_unlock(&pool->mutex);

		//执行任务
		printf("thread %ld start working ...\n", pthread_self());
		task.function(task.arg);    //通过函数指针调用函数
		printf("thread %ld end working ...\n", pthread_self());
	}
}

ThreadPool *create_thread_pool(int num)
{
	//申请线程池结构体
	ThreadPool *pool = (ThreadPool *)malloc(sizeof(ThreadPool));
	if (NULL == pool)
	
	{
		fprintf(stderr, "malloc ThreadPool failure\n");
		return NULL;
	}

	//初始化任务队列
	pool->queueFront = (Task *)malloc(sizeof(Task));
	if (NULL == pool->queueFront)
	{
		fprintf(stderr, "malloc Task failure\n");
		free(pool);
		return NULL;
	}
	pool->queueRear = pool->queueFront;
	pool->queueFront->next = NULL;

	//初始化线程的数量
	pool->num = num;

	//初始化线程号
	pool->threadID = (pthread_t *)malloc(sizeof(pthread_t) * num);
	if (NULL == pool->threadID)
	{
		fprintf(stderr, "malloc pthread_t failure\n");
		free(pool->queueFront);
		free(pool);
		return NULL;
	}
	
	//初始化线程
	int i;
	for (i = 0; i < num; i++)
	{
		if (pthread_create(&pool->threadID[i], NULL, worker, pool) != 0)
		{
			fprintf(stderr, "pthread_create failure\n");
			free(pool->queueFront);
			free(pool->threadID);
			free(pool);
			return NULL;
		}

		pthread_detach(pool->threadID[i]);    //线程运行结束后自动释放资源
	}

	//初始化互斥锁和条件变量
	pthread_mutex_init(&pool->mutex, NULL);
	pthread_cond_init(&pool->cond, NULL);

	//初始化关闭线程池的标志位
	pool->shutdown = 0;
}

//任务函数
void taskfunc(void *arg)
{
	int num = *(int *)arg;

	printf("thread %ld is working num = %d ...\n", pthread_self(), num);
	
	sleep(1);

	free(arg);
}

void thread_pool_add(ThreadPool *pool, void (*func)(void *), void *arg)
{
	pthread_mutex_lock(&pool->mutex);

	//进队操作
	Task *t = (Task *)malloc(sizeof(Task));
	if (NULL == t)
	{
		fprintf(stderr, "malloc Task failure\n");
		return;
	}

	t->function = func;
	t->arg = arg;
	t->next = NULL;

	pool->queueRear->next = t;
	pool->queueRear = t;

	pthread_mutex_unlock(&pool->mutex);

	pthread_cond_signal(&pool->cond);
}

void thread_pool_destroy(ThreadPool *pool)
{
	//关闭线程池
	pool->shutdown = 1;

	//唤醒所有线程
	int i;
	for (i = 0; i < pool->num; i++)
	{
		pthread_cond_signal(&pool->cond);
	}

	//释放线程号
	if (pool->threadID)
		free(pool->threadID);

	//释放任务队列
	while (pool->queueFront->next)
	{
		Task *t = pool->queueFront->next;
		pool->queueFront->next = t->next;
		free(t);
	}

	free(pool->queueFront);

	//销毁互斥量和条件变量
	pthread_mutex_destroy(&pool->mutex);
	pthread_cond_destroy(&pool->cond);

	//释放线程池结构体
	free(pool);
}

int main()
{
	//创建线程池
	ThreadPool *pool = create_thread_pool(10);
	if (NULL == pool)
	{
		return -1;
	}

	printf("线程池创建完成 \n");

	sleep(1);

	//主线程往任务队列中添加任务，并且唤醒线程池中的线程
	int i;
	for (i = 0; i < 50; i++)
	{
		int *n = (int *)malloc(sizeof(int));

		*n = i;

		//把任务添加到任务队列
		thread_pool_add(pool, taskfunc, n);
	}

	sleep(6);

	thread_pool_destroy(pool);

	return 0;
}
