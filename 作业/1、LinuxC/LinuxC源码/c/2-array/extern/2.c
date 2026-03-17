#include <stdio.h>

extern int num;   //声明外部变量（告诉编译器，变量在外部定义）
//extern int num = 100;   //定义：定义是要分配内存的   声明不需要分配内存

//static void show()     static修饰函数：改变了函数的作用域，只能在本文件中被调用
void show()
{
	printf("num = %d\n", num);
}
