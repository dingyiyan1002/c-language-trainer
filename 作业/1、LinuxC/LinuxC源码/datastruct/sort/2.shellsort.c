#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE     100000

void shell_sort(int *a, int size)
{
	int i, j, num, h;
	for (h = size / 2; h > 0; h /= 2)
	{
		for (i = h; i < size; i++)
		{
			num = a[i];
			for (j = i - h; j >= 0; j = j - h)
			{
				if (num < a[j])
				{
					a[j + h] = a[j];
				}
				else
				{
					break;
				}
			}
			a[j + h] = num;
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

	shell_sort(arr, SIZE);

	for (i = 0; i < SIZE; i++)
	{
		printf("%d ", arr[i]);
	}
	printf("\n");

	return 0;
}
