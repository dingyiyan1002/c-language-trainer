#include <stdio.h>

#define PRICE    30    //宏常量
#define A        1.11
#define CH       'a'
#define STR      "helloworld"

int main()
{
	printf("%d\n", PRICE);
	//PRICE = PRICE + 1;
	
	const int num = 1;    //定义只读变量 不能通过num来修改对应内存的值 可以通过其他方式修改

	//num++;
	
	int *p = (int *)&num;
	*p = 1000;           //通过地址来修改
	printf("num = %d\n", num);
	

	return 0;
}
