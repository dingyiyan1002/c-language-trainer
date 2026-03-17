#include <stdio.h>
#include <sys/types.h>          /* See NOTES */
#include <sys/socket.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <json-c/json.h>

int main()
{
	int sockfd = socket(AF_INET, SOCK_STREAM, 0);
	if (-1 == sockfd)
	{
		perror("socket");
		exit(1);
	}

	struct sockaddr_in server_addr;
	memset(&server_addr, 0, sizeof(server_addr));
	server_addr.sin_family = AF_INET;
	server_addr.sin_port = 8000;
	server_addr.sin_addr.s_addr = inet_addr("127.0.0.1");
	//向服务器发起连接
	int ret = connect(sockfd, (struct sockaddr *)&server_addr, sizeof(server_addr));
	if (-1 == ret)
	{
		perror("connect");
		exit(1);
	}

	struct json_object *json = json_object_new_object();
	json_object_object_add(json, "name", json_object_new_string("jack"));
	json_object_object_add(json, "age", json_object_new_int(11));
	json_object_object_add(json, "sex", json_object_new_string("male"));

	const char *buf = json_object_to_json_string(json);

	ret = send(sockfd, buf, strlen(buf), 0);
	if (-1 == ret)
	{
		perror("send");
		exit(1);
	}

	printf("字符串 %s 发送成功 长度 %ld!\n", buf, strlen(buf));

	close(sockfd);

	return 0;
}
