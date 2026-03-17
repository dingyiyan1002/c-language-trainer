#include <stdio.h>

int main()
{
	int num;       //表示总人数
	int	person;    //表示剩余的人数
	int k = 0;     //用于报数
	int flag[1024] = {0};    //0表示在圈中 1表示踢出去
	int i = 1;               //下标 从1开始

	scanf("%d", &num);
	person = num;

	while (person > 1)
	{
		if (flag[i] == 0)
		{
			k++;

			if (3 == k)
			{
				k = 0;
				flag[i] = 1;      //踢出去
				person--;
			}
		}

		i++;

		if (num + 1 == i)
			i = 1;
	}

	for (i = 1; i <= num; i++)
	{
		if (flag[i] == 0)
		{
			printf("last person is %d\n", i);
			break;
		}
	}

	return 0;
}
