#include <stdio.h>

//static int num = 100;   //static作用1：修饰全局变量，可以改变变量的作用域，只能在本文件被使用

int num = 100;

void show();

int main()
{
	show();

	return 0;
}

