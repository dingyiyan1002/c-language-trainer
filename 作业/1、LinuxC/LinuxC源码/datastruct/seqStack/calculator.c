#include <stdio.h>
#include "stack.h"

int Priority(char ch)
{
	switch(ch)
	{
		case '(':
			return 3;
		case '*':
		case '/':
			return 2;
		case '+':
		case '-':
			return 1;
		default:
			return 0;
	}
}

int main()
{
	Stack s_num, s_opt;

	if (InitStack(&s_num) != SUCCESS || InitStack(&s_opt) != SUCCESS)
	{
		printf("初始化失败\n");
		return -1;
	}

	char opt[128] = {0};
	scanf("%s", opt);
	int i = 0, tmp = 0;

	while (opt[i] != '\0' || EmptyStack(s_opt) != SUCCESS)
	{
		if (opt[i] >= '0' && opt[i] <= '9')   //运算数
		{
			tmp = tmp * 10 + (opt[i] - '0');
			i++;
			if (opt[i] < '0' || opt[i] > '9')
			{
				PushStack(&s_num, tmp);
				tmp = 0;
			}
		}
		else           //运算符 
		{
			if (EmptyStack(s_opt) == SUCCESS || (Priority(opt[i]) > Priority(GetTop(s_opt)))
					|| (GetTop(s_opt) == '(' && opt[i] != ')'))	
			{
				PushStack(&s_opt, opt[i]);
				i++;
				continue;
			}

			if (GetTop(s_opt) == '(' && opt[i] == ')')
			{
				PopStack(&s_opt);
				i++;
				continue;
			}

			if (Priority(opt[i]) <= Priority(GetTop(s_opt)) || 
					(opt[i] == ')' && GetTop(s_opt) != '(') || 
					opt[i] == '\0' && EmptyStack(s_opt) != SUCCESS)
			{
				char ch = PopStack(&s_opt);
				int num1 = PopStack(&s_num);
				int num2 = PopStack(&s_num);
				switch(ch)
				{
					case '+':
						PushStack(&s_num, num2 + num1);
						break;
					case '-':
						PushStack(&s_num, num2 - num1);
						break;
					case '*':
						PushStack(&s_num, num2 * num1);
						break;
					case '/':
						PushStack(&s_num, num2 / num1);
						break;
				}
			}
		}
	}

	printf("%d\n", GetTop(s_num));

	return 0;
}
