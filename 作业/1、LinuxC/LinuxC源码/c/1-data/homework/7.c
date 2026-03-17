#include <stdio.h>

int main()
{
	int m = 1;

	while (0.6 * m < 50 + 0.4 * m)
	{
		m++;
	}

	printf("通话 %d 分钟，全球通更合适\n", m);

	return 0;
}
