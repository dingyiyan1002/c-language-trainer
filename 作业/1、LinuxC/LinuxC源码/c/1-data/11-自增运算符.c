#include <stdio.h>

int main()
{
	int a = 1;

	printf("%d\n", a++);   //执行a所在的表达式后，a的值加一
	printf("%d\n", ++a);   //执行a所在的表达式前，a的值加一

	a = 1;
	a += a++;  //a += a;     a = a + a;    a = a + 1
	printf("a = %d\n", a);

	a = 1;
	a += ++a;   //a = a + 1;   a += a;   a = a + a;
	printf("a = %d\n", a);

	a = 1;
	++a += a;  
	printf("a = %d\n", a);

	a = 1;
	++a += a++; 
	printf("a = %d\n", a);

	a = 1;
	++a += ++a;
	printf("a = %d\n", a);

	return 0;
}


