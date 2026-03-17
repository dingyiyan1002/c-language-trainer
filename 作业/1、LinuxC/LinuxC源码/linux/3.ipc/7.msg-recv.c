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
	//获取消息队列
	int msgid = msgget(MSGKEY, 0);
	if (-1 == msgid)
	{
		perror("msgget");
		exit(1);
	}

	struct msgbuf m;

	while (1)
	{
		if (msgrcv(msgid, &m, sizeof(m.mtext), 1, 0) == -1)
		{
			perror("msgsnd");
			break;
		}

		if (!strcmp(m.mtext, "bye"))
			break;

		printf("%s\n", m.mtext);

		memset(&m, 0, sizeof(m));
	}

	return 0;
}
