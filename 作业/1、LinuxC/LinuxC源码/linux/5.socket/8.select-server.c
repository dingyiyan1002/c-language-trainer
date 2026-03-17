#include <stdio.h>
#include <sys/types.h>          /* See NOTES */
#include <sys/socket.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>
#include <unistd.h>
#include <sys/select.h>
/* According to earlier standards */
#include <sys/time.h>
#include <sys/types.h>
#include <unistd.h>

int main()
{
	//创建socket  地址族：IPV4协议   套接字类型：流式套接字  
	int sockfd = socket(AF_INET, SOCK_STREAM, 0);
	if (-1 == sockfd)
	{
		perror("socket");
		exit(1);
	}

	//绑定
	struct sockaddr_in server_info;     //用于保存服务器的信息（IP PORT）
	bzero(&server_info, sizeof(struct sockaddr_in));  //清空
	server_info.sin_family = AF_INET;   //地址族
	server_info.sin_port = htons(7000); //端口  大于1024都行
	//server_info.sin_addr.s_addr = 127.0.0.1;  //表示回环IP 用于测试
	server_info.sin_addr.s_addr = inet_addr("10.0.16.3");
	if (bind(sockfd, (struct sockaddr *)&server_info, sizeof(server_info)) == -1)
	{
		perror("bind");
		exit(2);
	}

	//设置监听队列
	if (listen(sockfd, 10) == -1)
	{
		perror("listen");
		exit(3);
	}

	printf("等待客户端的连接 ...\n");

	//定义两个集合
	fd_set readset, tmpset;

	//两个集合初始化
	FD_ZERO(&readset);
	FD_ZERO(&tmpset);

	//把文件描述符添加到集合中
	FD_SET(sockfd, &readset);
	
	int maxfd = sockfd;
	int ret, i;
	int fd[1024] = {0};

	while (1)
	{
		tmpset = readset;
		ret = select(maxfd + 1, &tmpset, NULL, NULL, NULL);
		if (-1 == ret)
		{
			perror("select");
			break;
		}

		if (FD_ISSET(sockfd, &tmpset))  //判断sockfd是否留在集合中（是否有客户端发起连接）
		{
			//接受连接  （阻塞）
			struct sockaddr_in client_info;    //用于保存客户端的信息
			int length = sizeof(client_info);

			for (i = 0; i < 1024; i++)
			{
				if (0 == fd[i])
					break;
			}

			fd[i] = accept(sockfd, (struct sockaddr *)&client_info, &length);
			if (-1 == fd[i])
			{
				perror("accept");
				exit(4);
			}

			printf("接受客户端的连接 %d\n", fd[i]);

			//把新的文件描述符加入集合中
			FD_SET(fd[i], &readset);

			//更新最大文件描述符
			if (maxfd < fd[i])
			{
				maxfd = fd[i];
			}
		}
		else                            //有客户端发送数据
		{
			for (i = 0; i < 1024; i++)
			{
				if (FD_ISSET(fd[i], &tmpset))
				{
					char buf[1024] = {0};
					ssize_t size;

					size = recv(fd[i], buf, sizeof(buf), 0);
					if (size == -1)
					{
						perror("recv");
					}
					else if (size == 0)
					{
						printf("客户端 %d 退出\n", fd[i]);
						FD_CLR(fd[i], &readset);   //从集合中删掉
						close(fd[i]);              //关闭TCP连接
						fd[i] = 0;
					}
					else 
					{
						printf("%s\n", buf);
					}

					break;
				}
			}
		}

	}

	close(sockfd);   //关闭socket    不能再处理客户端的请求

	//sockfd用于处理客户端连接  fd用于处理客户端的消息
	return 0;
}
