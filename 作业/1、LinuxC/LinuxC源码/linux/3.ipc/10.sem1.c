#include <stdio.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/sem.h>

#define SHMKEY   1000
#define SHMSIZE  4096
#define SEMKEY   1000

union semun {
	int              val;    /* Value for SETVAL */
	struct semid_ds *buf;    /* Buffer for IPC_STAT, IPC_SET */
	unsigned short  *array;  /* Array for GETALL, SETALL */
	struct seminfo  *__buf;  /* Buffer for IPC_INFO(Linux-specific) */
};

void sem_p(int id)
{
	struct sembuf s;
	s.sem_num = 0;    //表示第0个信号量
	s.sem_op = -1;    //减一操作
	s.sem_flg = SEM_UNDO; //如果进程异常退出，信号量会恢复初值
	if (semop(id, &s, 1) == -1)
	{
		perror("semop");
	}
}

void sem_v(int id)
{
	struct sembuf s;
	s.sem_num = 0;    //表示第0个信号量
	s.sem_op = 1;    //加一操作
	s.sem_flg = SEM_UNDO; //如果进程异常退出，信号量会恢复初值
	if (semop(id, &s, 1) == -1)
	{
		perror("semop");
	}
}

int main()
{
	//创建共享内存
	int shmid = shmget(SHMKEY, SHMSIZE, IPC_CREAT | IPC_EXCL);
	if (-1 == shmid)
	{
		perror("shmget");
		exit(1);
	}

	//映射  NULL表示系统自动分配一块空闲的内存   
	void *addr = shmat(shmid, NULL, 0);
	if ((void *)-1 == addr)
	{
		perror("shmat");
		exit(2);
	}
 
	//创建信号量  1表示创建1个信号量   
	int semid = semget(SEMKEY, 1, IPC_CREAT | IPC_EXCL);
	if (-1 == semid)
	{
		perror("semget");
		exit(3);
	}

	union semun s;
	s.val = 1;          //二值信号量
	//初始化信号量  0表示第一个信号量
	if (semctl(semid, 0, SETVAL, s) == -1)
	{
		perror("semctl");
		exit(4);
	}

	int num = 100;

	//写入共享内存
	*(int *)addr = num;

	while (1)
	{
		//减一操作
		sem_p(semid);

		num = *(int *)addr;

		if (num <= 0)
		{
			sem_v(semid);
			break;
		}

		printf("%d get %d\n", getpid(), num);

		num--;
		usleep(100000);

		*(int *)addr = num;
		
		//加一操作
		sem_v(semid);
	}

	usleep(500000);

	//删除共享内存
	shmctl(shmid, IPC_RMID, NULL);	
	semctl(semid, 0, IPC_RMID);   //ipcs -s     ipcrm -s id

	return 0;
}
