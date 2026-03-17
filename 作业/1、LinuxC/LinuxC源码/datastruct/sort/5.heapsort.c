#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE     100000

void adjust_heap_sort(int *a, int root, int last)
{
	int child;
	while (1)
	{
		child = 2 * root + 1;
		if (child > last)
		{
			break;
		}

		if (child + 1 <= last && a[child] < a[child + 1])
		{
			child++;
		}

		if (a[child] > a[root])
		{
			int num = a[root];
			a[root] = a[child];
			a[child] = num;
		}

		root = child;
	}
}

void heap_sort(int *a, int size)
{
	//构建大顶堆
	int i;
	for (i = size / 2 - 1; i >= 0; i--)
	{
		adjust_heap_sort(a, i, size - 1);
	}

	//调整大顶堆
	for (i = size - 1; i > 0; i--)
	{
		//swap(a[0], a[i]);
		int num = a[0];
		a[0] = a[i];
		a[i] = num;

		adjust_heap_sort(a, 0, i - 1);
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

	heap_sort(arr, SIZE);

	for (i = 0; i < SIZE; i++)
	{
		printf("%d ", arr[i]);
	}
	printf("\n");

	return 0;
}
