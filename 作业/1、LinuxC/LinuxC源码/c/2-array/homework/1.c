#include <stdio.h>
#include <string.h>

int get_char_index(char s[], char ch)
{
	int length = strlen(s);
	int i;
	for (i = 0; i < length; i++)
	{
		if (ch == s[i])
			return i + 1;
	}

	return -1;
}

int main()
{
	char str[32] = {0};
	char ch;

	printf("输入 字符串  字符\n");
	scanf("%s %c", str, &ch);

	int index = get_char_index(str, ch);
	if (-1 == index)
	{
		printf("字符不存在\n");
	}
	else
	{
		printf("字符的位置是 %d\n", index);
	}

	return 0;
}
