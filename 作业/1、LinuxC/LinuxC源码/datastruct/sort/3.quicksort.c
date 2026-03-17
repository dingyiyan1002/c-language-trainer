#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE     100000

void quick_sort(int *a, int start, int end)
{
	if (end <= start)
		return;

	int x = start;
	int y = end;
	int num = a[start];

	while (x < y)
	{
		while (a[y] > num && x < y)
		{
			y--;
		}

		if (x < y)
		{
			a[x++] = a[y];
		}

		while (a[x] < num && x < y)
		{
			x++;
		}

		if (x < y)
		{
			a[y--] = a[x];
		}
	}

	a[x] = num;

	quick_sort(a, start, x - 1);
	quick_sort(a, x + 1, end);
}

int main()
{
	int num, arr[SIZE] = {0}, i;

	//随机产生数组
	srand(time(NULL));
	for (i = 0; i < SIZE; i++)
	{
		arr[i] = rand() % 100;
	}

	quick_sort(arr, 0, SIZE - 1);

	for (i = 0; i < SIZE; i++)
	{
		printf("%d ", arr[i]);
	}
	printf("\n");

	return 0;
}
