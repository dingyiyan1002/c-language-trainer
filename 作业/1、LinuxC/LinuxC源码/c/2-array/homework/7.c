#include <stdio.h>

void reverse(char str[], int start, int end)
{
	int i;
	char t;
	for (i = 0; i < (end - start) / 2; i++)
	{
		t = str[start + i];
		str[start + i] = str[end - 1 - i];
		str[end - 1 - i] = t;
	}
}

int main()
{
	char str[128] = {0};
	char ch;
	int i = 0;

	printf("输入几个单词 \n");
	//scanf("%s", str);
	//gets(str);
	
	while ((ch = getchar()) != '\n')
	{
		str[i++] = ch;    
	}
	
	reverse(str, 0, i);

	i = 0;
	int begin = 0;
	while (str[i] != '\0')
	{
		if (str[i] == ' ')
		{
			reverse(str, begin, i);
			begin = i + 1;
		}

		i++;
	}

	//最后一个单词反转
	reverse(str, begin, i);

	printf("%s\n", str);

	return 0;
}
