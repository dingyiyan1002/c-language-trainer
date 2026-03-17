#include <stdio.h>
#include <unistd.h>

//房价200万 每年涨10%  程序员工资40万 问几年能买房

int main()
{
	double price = 200.0;
	int sum = 0;
	int year = 0;

	while (sum < price)
	{
		year++;
		price = price * 1.1;
		sum = sum + 40;

		printf("第 %d 年  房价 %f  积蓄 %d\n", year, price, sum);

		sleep(1);
	}

	printf("%d\n", year);

	return 0;
}
