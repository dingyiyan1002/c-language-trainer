#include <stdio.h>
#include <stdlib.h>
#include <event.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>
#include <event2/listener.h>

//读取数据
void read_cb(struct bufferevent *bev, void *ctx)
{
	char buf[128] = {0};
	size_t ret = bufferevent_read(bev, buf, sizeof(buf));
	if (ret < 0)
	{
		printf("bufferevent_read error!\n");
	}
	else
	{
		printf("read %s\n", buf);
	}
}

void event_cb(struct bufferevent *bev, short what, void *ctx)
{
	if (what & BEV_EVENT_EOF)
	{
		printf("客户端下线\n");
		bufferevent_free(bev);     //释放bufferevent对象
	}
	else
	{
		printf("未知错误\n");
	}
}

void listener_cb(struct evconnlistener *listener, evutil_socket_t fd, struct sockaddr *addr, int socklen, void *arg)
{
	printf("接受%d的连接\n", fd);
	struct event_base *base = arg;

	//针对已经存在的socket创建bufferevent对象
	//事件集合（从主函数传递来）、fd（代表TCP连接）、BEV_OPT_CLOSE_ON_FREE（如果释放bufferevent对象则关闭连接）
	struct bufferevent *bev = bufferevent_socket_new(base, fd, BEV_OPT_CLOSE_ON_FREE);
	if (NULL == bev)
	{
		printf("bufferevent_socket_new error!\n");
		exit(1);
	}

	//给bufferevent设置回调函数
	//bufferevent对象、读事件回调函数、写事件回调函数、其他事件回调函数、参数
	bufferevent_setcb(bev, read_cb, NULL, event_cb, NULL);

	//使能bufferevent对象
	bufferevent_enable(bev, EV_READ);
}

/*
socket
bind
listen
accept
*/
int main()
{
	//创建一个事件集合
	struct event_base *base = event_base_new();
	if (NULL == base)
	{
		printf("event_base_new error\n");
		exit(1);
	}

	struct sockaddr_in server_addr;
	memset(&server_addr, 0, sizeof(server_addr));
	server_addr.sin_family = AF_INET;
	server_addr.sin_port = htons(8000);
	server_addr.sin_addr.s_addr = inet_addr("10.0.16.3");

	//创建socket、绑定、监听、接受连接
	//创建监听对象，在指定的地址上监听接下来的TCP连接
	//事件集合、当有连接时调用的函数、回调函数参数、释放监听对象关闭socket|端口重复使用、监听队列长度、绑定信息
	struct evconnlistener *listener = evconnlistener_new_bind(base, listener_cb, base, 
		LEV_OPT_CLOSE_ON_FREE | LEV_OPT_REUSEABLE, 10, (struct sockaddr *)&server_addr,sizeof(server_addr));
	if (NULL == listener)
	{
		printf("evconnlistener_new_bind error\n");
		exit(1);
	}

	//监听集合中的事件
	event_base_dispatch(base);

	//释放两个对象
	evconnlistener_free(listener);
	event_base_free(base);

	return 0;
}
