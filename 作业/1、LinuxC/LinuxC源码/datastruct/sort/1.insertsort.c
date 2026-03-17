#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE     100000

void insert_sort(int *a, int size)
{
	int i, j, num;
	for (i = 1; i < size; i++)
	{
		num = a[i];
		for (j = i - 1; j >= 0; j--)
		{
			if (num < a[j])
			{
				a[j + 1] = a[j];
			}
			else
			{
				break;
			}
		}
		a[j + 1] = num;
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

	insert_sort(arr, SIZE);

	for (i = 0; i < SIZE; i++)
	{
		printf("%d ", arr[i]);
	}
	printf("\n");

	return 0;
}
