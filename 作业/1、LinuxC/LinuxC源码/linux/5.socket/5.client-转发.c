#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>          /* See NOTES */
#include <sys/socket.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <pthread.h>

typedef struct Info
{
	char text[1024];
	int tofd;
}Info;

pthread_t tid[2] = {0};

void *send_thread(void *arg)
{
	int sockfd = *(int *)arg;
	//char buf[1024] = {0};
	Info i;

	while (1)
	{
		scanf("%s %d", i.text, &i.tofd);

		if (send(sockfd, &i, sizeof(i), 0) == -1)
		{
			perror("send");
			break;
		}

		if (!strcmp(i.text, "bye"))
		{
			pthread_cancel(tid[1]);
			break;
		}

		bzero(&i, sizeof(i));
	}
}

void *recv_thread(void *arg)
{
	int sockfd = *(int *)arg;
	Info i;
	ssize_t size;

	while (1)
	{
		size = recv(sockfd, &i, sizeof(i), 0);
		if (size == -1)
		{
			perror("recv");
			break;
		}
		else if (size == 0)
		{
			break;
		}

		printf("\t\t%s\n", i.text);

		bzero(&i, sizeof(i));
	}
}

int main()
{
	//创建socket
	int sockfd = socket(AF_INET, SOCK_STREAM, 0);
	if (-1 == sockfd)
	{
		perror("socket");
		exit(1);
	}

	//发起连接请求
	struct sockaddr_in server_info;    //保存服务器的信息
	bzero(&server_info, sizeof(server_info));
	server_info.sin_family = AF_INET;
	server_info.sin_port = htons(7000);
	server_info.sin_addr.s_addr = inet_addr("10.0.16.3");
	if (connect(sockfd, (struct sockaddr *)&server_info, sizeof(server_info)) == -1)
	{
		perror("connect");
		exit(2);
	}

	//启动两个线程，一个负责发送，一个负责接收
	if ((pthread_create(&tid[0], NULL, send_thread, &sockfd) != 0) || 
			(pthread_create(&tid[1], NULL, recv_thread, &sockfd) != 0))
	{
		perror("pthread_create");
		exit(1);
	}

	void *status;
	pthread_join(tid[0], &status);
	pthread_join(tid[1], &status);

	close(sockfd);

	return 0;
}
