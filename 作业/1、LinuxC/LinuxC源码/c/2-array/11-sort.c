#include <stdio.h>

void get_array(int a[], int size)
{
	int i;
	//for (i = 0; i < sizeof(a) / sizeof(a[0]); i++) //传递过来的数组名不能这样求数组长度
	for (i = 0; i < size; i++)
	{
		scanf("%d", &a[i]);
	}
}

void sort(int a[], int size)
{
	int i, j;
	for (i = 0; i < size - 1; i++)
	{
		for (j = 0; j < size - 1 - i; j++)
		{
			if (a[j] > a[j + 1])
			{
				int t = a[j];
				a[j] = a[j + 1];
				a[j + 1] = t;
			}
		}
	}
}

void put_array(int a[], int size)
{
	int i;
	for (i = 0; i < size; i++)
	{
		printf("%d ", a[i]);
	}
	printf("\n");
}

int main()
{
	int a[10] = {0};

	get_array(a, sizeof(a) / sizeof(a[0]));

	sort(a, 10);

	put_array(a, 10);

	return 0;
}
