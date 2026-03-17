#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>          /* See NOTES */
#include <sys/socket.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>

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

	char buf[1024] = {0};
	while (1)
	{
		scanf("%s", buf);

		if (send(sockfd, buf, strlen(buf), 0) == -1)
		{
			perror("send");
			break;
		}

		if (!strcmp(buf, "bye"))
			break;

		bzero(buf, 1024);
	}

	close(sockfd);

	return 0;
}
