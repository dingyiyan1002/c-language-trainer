#include <stdio.h>
#include <stdlib.h>

int main()
{
	//int *p;     //野指针
	//*p = 100;
	
	//int *p = (int *)0x10000;    //野指针
	//*p = 100;
	
	//int *p = NULL;    //空指针 也不能用
	//*p = 100;

	//if (p !== NULL)  if (p == NULL)
	
	int num;
	int *p = &num;     //合法的内存
	*p = 1000;

	int *q = (int *)malloc(sizeof(int) * 4);
	*q = 1000;
	free(q);

	return 0;
}
