#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <stdlib.h>
#include <event.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>

/*
当监听的事件满足条件的时候，会触发回调函数，通过回调函数读取数据
*/
void fifo_read(evutil_socket_t fd, short events, void *arg)
{
	char buf[32] = {0};
	int ret = read(fd, buf, sizeof(buf));
	if (-1 == ret)
	{
		perror("read");
		exit(1);
	}

	printf("从管道读取 %s\n", buf);
}

int main()
{
	int ret = mkfifo("fifo.tmp", 00700);	
	if (-1 == ret)
	{
		perror("mkfifo");
		exit(1);
	}

	int fd = open("fifo.tmp", O_RDONLY);
	if (-1 == fd)
	{
		perror("open");
		exit(1);
	}

	//创建事件
	struct event ev;

	//初始化事件集合
	event_init();

	//初始化事件（把fd和事件ev绑定） 事件 关联的文件描述符 事件类型 回调函数 回调函数参数
	event_set(&ev, fd, EV_READ | EV_PERSIST, fifo_read, NULL);

	//把事件添加到集合中
	event_add(&ev, NULL);

	//开始监听
	event_dispatch();  //死循环 如果集合中没有事件可以监听，则返回

	return 0;
}
