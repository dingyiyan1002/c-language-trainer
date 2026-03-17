#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE     100000

void merge(int *a, int start, int mid, int end)
{
	int left_len = mid - start + 1; 
	int right_len = end - mid;

	int *L = (int *)malloc(sizeof(int) * left_len);
	int *R = (int *)malloc(sizeof(int) * right_len);

	int i, k = start, j;
	for (i = 0; i < left_len; i++, k++)
	{
		L[i] = a[k];
	}

	for (i = 0; i < right_len; i++, k++)
	{
		R[i] = a[k];
	}

	for (i = 0, j = 0, k = start; i < left_len && j < right_len; k++)
	{
		if (L[i] > R[j])
		{
			a[k] = R[j++];
		}
		else
		{
			a[k] = L[i++];
		}
	}

	if (i < left_len)
	{
		for (; i < left_len; i++, k++)
		{
			a[k] = L[i];
		}
	}

	if (j < right_len)
	{
		for (; j < right_len; j++, k++)
		{
			a[k] = R[j];
		}
	}

	free(L);
	free(R);
}

void merge_sort(int *a, int start, int end)
{
	if (start >= end)
		return;

	int mid = (end + start) / 2;

	merge_sort(a, start, mid);
	merge_sort(a, mid + 1, end);

	merge(a, start, mid, end);
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

	merge_sort(arr, 0, SIZE - 1);

	for (i = 0; i < SIZE; i++)
	{
		printf("%d ", arr[i]);
	}
	printf("\n");

	return 0;
}
