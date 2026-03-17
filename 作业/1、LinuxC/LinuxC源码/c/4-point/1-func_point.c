#include <stdio.h>

typedef unsigned char uchar;
typedef int(*T)(int, int);     //用T来表示函数指针类型

void f1()
{
	printf("this is f1 ...\n");
}

int add(int x, int y)
{
	return x + y;
}

int main()
{
	void (*p)() = f1;   //定义函数指针   p是指针，指向函数，函数没有参数，没有返回值
	p();                //通过函数指针调用函数

	//p = add;          //类型不兼容
	int (*q)(int, int);
	q = add;
	printf("%d\n", q(1, 2));

	//int (*k)(int, int) = add;
	T k = add;          //定义函数指针

	return 0;
}
