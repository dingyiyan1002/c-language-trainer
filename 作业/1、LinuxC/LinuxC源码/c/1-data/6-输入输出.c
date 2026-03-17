#include <stdio.h>

int main()
{
	int num;
	char ch;

	//scanf("%d", &num);
	//printf("%d\n", num);
	
	//scanf("%c", &ch);
	//printf("%c\n", ch);

	//scanf("%d %c", &num, &ch);
	//printf("%d %c\n", num, ch);

	char *s = "helloworld";
	printf("%s\n", s);

	num = 100;
	printf("%x %p\n", num, num);

	return 0;
}
