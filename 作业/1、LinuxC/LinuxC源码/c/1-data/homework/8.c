#include <stdio.h>

int main()
{
	int i, count = 0;
	
	for (i = 0; i < 21 * 7; i++)
	{
		if (i % 5 == 0)   //A在放炮
		{
			count++;
			continue;
		}
		else if (i % 6 == 0)   //B在放炮
		{
			count++;
			continue;
		}
		else if (i % 7 == 0)   //C在放炮
		{
			count++;
		}
	}

	printf("%d\n", count);

	return 0;
}
