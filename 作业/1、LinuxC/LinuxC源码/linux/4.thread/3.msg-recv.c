#include <stdio.h>
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <stdlib.h>
#include <string.h>
#include <pthread.h>

struct msgbuf {
	long mtype;       /* message type, must be > 0 */
	char mtext[128];    /* message data */
};

#define MSGKEY   1000

pthread_t tid[2] = {0};

void *recv_thread(void *arg)
{
	int msgid = *(int *)arg;
	struct msgbuf m;

	while (1)
	{
		if (msgrcv(msgid, &m, sizeof(m.mtext), 1, 0) == -1)
		{
			perror("msgrcv");
			break;
		}

		if (!strcmp(m.mtext, "bye"))
		{
			pthread_cancel(tid[1]);
			break;
		}

		printf("\t\t%s\n", m.mtext);

		memset(&m, 0, sizeof(m));
	}
}

void *send_thread(void *arg)
{
	int msgid = *(int *)arg;
	struct msgbuf m;

	while (1)
	{
		scanf("%s", m.mtext);
		m.mtype = 2;             //消息的类型
		if (msgsnd(msgid, &m, sizeof(m.mtext), 0) == -1)
		{
			perror("msgsnd");
			break;
		}

		if (!strcmp(m.mtext, "bye"))
		{
			pthread_cancel(tid[0]);
			break;
		}

		memset(&m, 0, sizeof(m));
	}

}

int main()
{
	//获取消息队列
	int msgid = msgget(MSGKEY, 0);
	if (-1 == msgid)
	{
		perror("msgget");
		exit(1);
	}

	//pthread_t tid[2] = {0};

	if (pthread_create(&tid[0], NULL, recv_thread, &msgid) != 0)
	{
		perror("pthread_create");
		exit(2);
	}

	if (pthread_create(&tid[1], NULL, send_thread, &msgid) != 0)
	{
		perror("pthread_create");
		exit(3);
	}

	void *status;
	pthread_join(tid[0], &status);
	pthread_join(tid[1], &status);

	return 0;
}
