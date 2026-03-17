#include <stdio.h>

//所有成员共享同一块内存空间
//联合体大小：只为最长成员分配空间

union Test
{
	int a;
	int b;
	char c;
};

union Test1
{
	char ch[2];
	short val;
};

int main()
{
	printf("%lu\n", sizeof(union Test));

	union Test t;
	t.a = 100;
	printf("%d\n", t.b);
	printf("%d\n", t.c);

	//判断设备的字节序
	union Test1 t2;
	t2.val = 0x0102;

	if (t2.ch[0] == 1 && t2.ch[1] == 2)
	{
		printf("big\n");
	}
	else if (t2.ch[0] == 2 && t2.ch[1] == 1)
	{
		printf("small\n");
	}

	int num = 1;

	printf("%d\n", ((num & 0x000000ff) << 24) | 
			       ((num & 0x0000ff00) << 8 ) |
				   ((num & 0x00ff0000) >> 8 ) |
				   ((num & 0xff000000) >> 24));

	return 0;
}
