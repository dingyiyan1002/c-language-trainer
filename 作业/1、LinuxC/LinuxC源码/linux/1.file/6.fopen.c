#include <stdio.h>

int main()
{
	FILE *fp = NULL;

	//fp = fopen("hello.txt", "r");      //以只读方式打开文件，要求文件存在
	//fp = fopen("hello.txt", "r+");     //读写方式打开，文件必须存在
	//fp = fopen("xx.c", "w");           //只读写方式创建并且打开文件
	fp = fopen("xx.c", "w+");          //读写方式创建并打开文件
	if (NULL == fp)
	{
		perror("fopen");
		return -1;
	}


	fclose(fp);

	return 0;
}
