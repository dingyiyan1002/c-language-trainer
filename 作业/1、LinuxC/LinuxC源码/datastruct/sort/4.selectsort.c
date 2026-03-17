#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE     100000

void select_sort(int *a, int size)
{
	int i, min, index, j;
	for (i = 0; i < size - 1; i++)
	{
		min = a[i];
		index = i;

		for (j = i + 1; j < size; j++)
		{
			if (a[j] < min)
			{
				min = a[j];
				index = j;
			}
		}

		if (min != a[i])
		{
			a[index] = a[i];
			a[i] = min;
		}
	}
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

	select_sort(arr, SIZE);

	for (i = 0; i < SIZE; i++)
	{
		printf("%d ", arr[i]);
	}
	printf("\n");

	return 0;
}
