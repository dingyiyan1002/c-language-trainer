#include <stdio.h>

int main()
{
	int *p;

	printf("int *      %lu\n", sizeof(int *));
	printf("char *     %lu\n", sizeof(char *));
	printf("short *    %lu\n", sizeof(short *));
	printf("lont *     %lu\n", sizeof(long *));
	printf("float *    %lu\n", sizeof(float *));
	printf("double *   %lu\n", sizeof(double *));

	int num = 1;
	p = &num;
	*p = 1000;    //取值
	printf("num = %d\n", num);

	char ch = 'a';
	//int *q = &ch;     //类型不兼容
	char *q = &ch;

	printf("%p\n", p);
	printf("%p\n", q);

	printf("%p\n", p + 1);
	printf("%p\n", q + 1);

	int *p1, *p2;

	return 0;
}
