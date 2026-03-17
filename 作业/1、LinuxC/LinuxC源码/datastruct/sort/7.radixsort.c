#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE     100000

void radix_sort(int *a, int size)
{
	int i, max = a[0];
	for (i = 1; i < size; i++)
	{
		if (a[i] > max)
			max = a[i];
	}

	int radix = 1;
	while (max > 0)
	{
		int bucket[10] = {0};

		for (i = 0; i < size; i++)
		{
			bucket[a[i] / radix % 10]++;
		}

		int *tmp = (int *)malloc(sizeof(int) * size);

		for (i = 1; i <= 9; i++)
		{
			bucket[i] = bucket[i] + bucket[i - 1];
		}

		for (i = size - 1; i >= 0; i--)
		{
			tmp[bucket[a[i] / radix % 10] - 1] = a[i];
			bucket[a[i] / radix % 10]--;
		}

		for (i = 0; i < size; i++)
		{
			a[i] = tmp[i];
		}

		free(tmp);

		radix = radix * 10;
		max = max / 10;
	}

}

int main()
{
	int num, arr[SIZE] = {0}, i;

	//随机产生数组
	srand(time(NULL));
	for (i = 0; i < SIZE; i++)
	{
		arr[i] = rand() % 10000;
	}

	radix_sort(arr, SIZE);

	for (i = 0; i < SIZE; i++)
	{
		printf("%d ", arr[i]);
	}
	printf("\n");

	return 0;
}
