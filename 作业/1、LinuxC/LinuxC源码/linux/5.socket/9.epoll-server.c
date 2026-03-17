#include <stdio.h>
#include <sys/types.h>          /* See NOTES */
#include <sys/socket.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>
#include <unistd.h>
#include <sys/epoll.h>

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

	//创建epoll对象（创建集合）
	int epfd = epoll_create(1);
	if (-1 == epfd)
	{
		perror("epoll_create");
		exit(4);
	}

	//把sockfd封装成事件，添加到集合中
	struct epoll_event ev;
	ev.events = EPOLLIN | EPOLLET;     //事件属性
	ev.data.fd = sockfd;
	if (epoll_ctl(epfd, EPOLL_CTL_ADD, sockfd, &ev) == -1)
	{
		perror("epoll_ctl");
		exit(5);
	}

	while (1)
	{
		struct epoll_event events[10];   //用于存放满足条件的事件

		int num = epoll_wait(epfd, events, 10, -1);
		if (num == -1)
		{
			perror("epoll_wait");
			break;
		}

		int i;
		for (i = 0; i < num; i++)
		{
			if (events[i].data.fd == sockfd)    //有客户端发起连接
			{
				//接受连接 
				struct sockaddr_in client_info;    //用于保存客户端的信息
				int length = sizeof(client_info);
				int fd = accept(sockfd, (struct sockaddr *)&client_info, &length);
				if (-1 == fd)
				{
					perror("accept");
					exit(4);
				}

				printf("接受客户端的连接 %d\n", fd);

				ev.events = EPOLLIN;     //事件属性
				ev.data.fd = fd;
				if (epoll_ctl(epfd, EPOLL_CTL_ADD, fd, &ev) == -1)
				{
					perror("epoll_ctl");
					exit(5);
				}
			}
			else                                //有客户端发送数据
			{
				char buf[1024] = {0};
				ssize_t size;

				size = recv(events[i].data.fd, buf, sizeof(buf), 0);
				if (size == -1)
				{
					perror("recv");
				}
				else if (size == 0)
				{
					//把事件从集合中删除
					if (epoll_ctl(epfd, EPOLL_CTL_DEL, events[i].data.fd, &events[i]) == -1)
					{
						perror("epoll_ctl");
						exit(5);
					}
					close(events[i].data.fd);

					printf("客户端 %d 退出\n", events[i].data.fd);
				}				
				else
				{
					printf("%s\n", buf);
				}
			}	
		}
	}

	close(sockfd);   //关闭socket    不能再处理客户端的请求

	//sockfd用于处理客户端连接  fd用于处理客户端的消息
	return 0;
}
