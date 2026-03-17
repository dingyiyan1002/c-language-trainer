#include <stdio.h>

int num;                        //未初始化的全局变量 BSS段
char ch = 'x';                  //已初始化的全局变量 

int main()
{
	char *s = "helloworld";     //s栈空间   helloworld只读数据区
	//s[0] = 'x';
	
	static int a = 0;           //静态数据区

	char *p = (char *)malloc(sizeof(char) * 128); //p栈空间   128字节属于堆空间

	char p1[] = "hellowrold";
	char *p2 = "helloworld";

	//堆和栈的区别
	//1、堆空间是用户管理  栈空间是系统管理的
	//2、堆空间更大 栈空间更小
	//3、堆空间效率低  栈空间效率高
	//4、堆空间函数结束不会释放  栈空间函数结束释放

	return 0;
}
