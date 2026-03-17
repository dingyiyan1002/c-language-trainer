#include <stdio.h>

void func()
{
	//存储空间不一样，不加static存放在栈空间，加static存放在静态数据去
	static int num = 1;   //static修饰局部变量：改变变量的生命周期，直到程序结束才被释放
	num++;
	printf("num = %d\n", num);
}

int main()
{
	int i;
	for (i = 0; i < 3; i++)
	{
		func();
	}

	return 0;
}
