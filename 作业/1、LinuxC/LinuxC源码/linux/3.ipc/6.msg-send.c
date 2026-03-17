#include <stdio.h>
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <stdlib.h>
#include <string.h>

struct msgbuf {
	long mtype;       /* message type, must be > 0 */
	char mtext[128];    /* message data */
};

#define MSGKEY   1000

int main()
{
	//创建消息队列
	int msgid = msgget(MSGKEY, IPC_CREAT | IPC_EXCL);
	if (-1 == msgid)
	{
		perror("msgget");
		exit(1);
	}

	struct msgbuf m;

	while (1)
	{
		scanf("%s", m.mtext);
		m.mtype = 1;             //消息的类型
		if (msgsnd(msgid, &m, sizeof(m.mtext), 0) == -1)
		{
			perror("msgsnd");
			break;
		}

		if (!strcmp(m.mtext, "bye"))
			break;

		memset(&m, 0, sizeof(m));
	}

	//删除消息队列
	msgctl(msgid, IPC_RMID, NULL);

	return 0;
}
