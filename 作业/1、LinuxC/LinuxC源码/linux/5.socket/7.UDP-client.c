#include <stdio.h>
#include <sys/types.h>          /* See NOTES */
#include <sys/socket.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>

int main()
{
	//创建socket
	int sockfd = socket(AF_INET, SOCK_DGRAM, 0);
	if (-1 == sockfd)
	{
		perror("socket");
		exit(1);
	}

	char buf[1024] = {0};
	struct sockaddr_in server_info;
	bzero(&server_info, sizeof(server_info));
	server_info.sin_family = AF_INET;
	server_info.sin_port = htons(6000);
	server_info.sin_addr.s_addr = inet_addr("127.0.0.1");
	while (1)
	{
		scanf("%s", buf);

		ssize_t size = sendto(sockfd, buf, strlen(buf), 0, (struct sockaddr *)&server_info, 
											sizeof(server_info));
		if (-1 == size)
		{
			perror("sendto");
			break;
		}

		bzero(buf, 1024);
	}

	close(sockfd);

	return 0;
}
