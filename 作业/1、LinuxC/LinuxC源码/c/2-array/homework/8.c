#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int get_index(char str[], char sub[])
{
	int str_length = strlen(str);
	int sub_length = strlen(sub);

	int i;
	for (i = 0; i < str_length - sub_length + 1; i++)
	{
		if (strncmp(str + i, sub, sub_length) == 0)
		{
			return i;
		}
	}

	return -1;
}

int main()
{
	char str[128] = {0};
	char tail[32] = {0};
	char head[32] = {0};

	printf("输入 字符串 帧头  帧尾\n");
	scanf("%s %s %s", str, head, tail);

	//先获得帧头的下标
	int head_index = get_index(str, head);

	//再获得帧尾的下标
	int tail_index = get_index(str, tail);

	if (-1 == head_index || -1 == tail_index)
	{
		printf("输入有误\n");
		exit(1);
	}

	char t[128] = {0};
	strncpy(t, str + head_index, tail_index - head_index + strlen(tail));

	printf("%s\n", t);

	return 0;
}
