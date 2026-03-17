#include <stdio.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <stdlib.h>
#include <unistd.h>

#define SHMKEY   1000
#define SHMSIZE  4096

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

	int num = 100;

	//写入共享内存
	*(int *)addr = num;

	while (1)
	{
		num = *(int *)addr;

		if (num <= 0)
		{
			break;
		}

		printf("%d get %d\n", getpid(), num);

		num--;
		usleep(100000);

		*(int *)addr = num;

	}

	//删除共享内存
	shmctl(shmid, IPC_RMID, NULL);	


	return 0;
}
