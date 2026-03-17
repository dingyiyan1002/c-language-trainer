#include <stdio.h>

void show();

int add(int x, int y)   //x y叫做形参 类型和个数要和实参对应   2、给形参分配空间
{                       //3、传参：值传递  地址传递
	int sum = x + y;    //4、执行函数体
	return sum;         //5、返回数据     6、释放空间（栈空间：局部变量 x y sum）
}

int main()
{
	show();   
	//show(1, 2, 3, "hellowrold");
	
	int a = 1, b = 2;
	int ret = add(a, b);    //a b叫做实参    1、通过函数名找到函数的入口地址
	printf("%d\n", ret);    //printf("%d\n", add(a, b));

	printf("%p\n", add);    //函数名也是地址 函数的入口地址

	return 0;
}

void show()     //没有返回值   没有形参(函数可以接受任意个数的参数)
{
	printf("helloworld\n");
}
