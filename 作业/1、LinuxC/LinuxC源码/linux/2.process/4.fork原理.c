#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main()
{
	int num = 0;

	if (fork() == 0)
	{
		num++;
		printf("child num = %d %p\n", num, &num);
	}
	else 
	{
		num++;
		printf("parent num = %d %p\n", num, &num);
	}

	return 0;
}
