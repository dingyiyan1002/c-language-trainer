#include <stdio.h>
#include <string.h>

void insert_string(char str[], int num, char insert[])
{
	char tmp[32] = {0};

	strncpy(tmp, str, num - 1);
	strcat(tmp, insert);
	strcat(tmp, str + (num - 1));

	strcpy(str, tmp);
}

int main()
{
	char str[32] = {0};
	int num;
	char insert[32] = {0};

	printf("输入 字符串 位置  插入的字符串\n");
	scanf("%s %d %s", str, &num, insert);

	insert_string(str, num, insert);

	printf("%s\n", str);

	return 0;
}
