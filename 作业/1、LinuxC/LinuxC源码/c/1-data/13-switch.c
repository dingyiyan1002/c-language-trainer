#include <stdio.h>

int main()
{
	int num1, num2, result;
	char opt;

	scanf("%d%c%d", &num1, &opt, &num2);

	switch(opt)
	{
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		/*case '/':
			result = num1 / num2;
			break;
		default:
			printf("unkown opt\n");
			return -1;*/
		defualt:                      //不要拼写错误
			result = num1 / num2;
			break;
	}

	printf("%d\n", result);

	return 0;
}
