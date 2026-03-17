#include <stdio.h>     //头文件直接展开

#define PRICE    10    //宏定义直接替换

#if 0                  //条件编译，如果不满足条件，代码丢掉
void f1()
{
	printf("helloworld!\n");
}
#endif

int main()
{
	printf("helloworld!\n");
	PRICE * 12;

	return 0;
}
