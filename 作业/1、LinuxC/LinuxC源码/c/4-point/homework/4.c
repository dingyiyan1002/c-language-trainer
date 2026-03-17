#include <stdio.h>

int find_one(int r)
{
	int i;
	for (i = 0; i < 32; i++)
	{
		if (r & 1 == 1)
		{
			return i + 1;
		}
		r >>= 1;
	}

	return -1;
}


int main()
{
	int array[10] = {1, 1, 2, 2, 3, 3, 4, 5, 6, 6};

	int i, result = 0, num1 = 0, num2 = 0;

	for (i = 0; i < 10; i++)
	{
		result = result ^ array[i];
	}

	int index = find_one(result);

	for (i = 0; i < 10; i++)
	{
		//判断第index位是不是1
		if ((array[i] >> (index - 1)) & 1 == 1)
		{
			num1 ^= array[i];
		}
		else
		{
			num2 ^= array[i];
		}
	}

	printf("%d %d\n", num1, num2);

	return 0;
}
