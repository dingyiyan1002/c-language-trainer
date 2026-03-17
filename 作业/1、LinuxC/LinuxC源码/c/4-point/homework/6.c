#include <stdio.h>
#include <stdlib.h>

int str_to_int(char *s, int *a)
{
	char *begin = s;
	int i = 0;

	while (*s != '\0')
	{
		if (*s == ',')
		{
			*s = '\0';
			a[i++] = atoi(begin);    //把字符串转换成整数a
			begin = s + 1;
		}
		s++;
	}

	a[i] = atoi(begin);

	return i + 1;
}

int count_num(int *a, int size)
{
	int i, count = 0;
	for (i = 0; i < size; i++)
	{
		if (0 == i)
		{
			count++;
			continue;
		}

		if (a[i] != a[i - 1])
		{
			count++;
		}
	}
	return count;
}

int main()
{
	char str[1024] = {0};
	int array[1024] = {0};

	scanf("%s", str);

	int num = str_to_int(str, array);

	printf("%d\n", count_num(array, num));

	return 0;
}
