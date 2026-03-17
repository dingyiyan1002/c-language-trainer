#include <stdio.h>
#include <sys/types.h>          /* See NOTES */
#include <sys/socket.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>

int main()
{
	//创建socket   数据报套接字
	int sockfd = socket(AF_INET, SOCK_DGRAM, 0);
	if (-1 == sockfd)
	{
		perror("socket");
		exit(1);
	}

	//绑定
	struct sockaddr_in server_info;
	bzero(&server_info, sizeof(server_info));
	server_info.sin_family = AF_INET;
	server_info.sin_port = htons(6000);
	server_info.sin_addr.s_addr = inet_addr("127.0.0.1");
	if (bind(sockfd, (struct sockaddr *)&server_info, sizeof(server_info)) == -1)
	{
		perror("bind");
		exit(2);
	}

	ssize_t size;
	char buf[1024] = {0};
	struct sockaddr_in client_info;
	int len = sizeof(client_info);

	while (1)
	{
		size = recvfrom(sockfd, buf, sizeof(buf), 0, (struct sockaddr *)&client_info, &len);
		if (-1 == size)
		{
			perror("recvfrom");
			break;
		}

		printf("收到 %s : %d 的数据 %s\n", inet_ntoa(client_info.sin_addr), 
				      client_info.sin_port, buf);

		bzero(buf, 1024);
	}

	return 0;
}
