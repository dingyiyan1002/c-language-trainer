#include <stdio.h>
#include <string.h>

int main()
{
	char s1[32] = "hello";
	char s2[32] = "world";

	strcat(s1, s2);    //把s2接到s1的后面

	printf("%s\n", s1);

	strncat(s1, s2, 3);
	printf("%s\n", s1);

	return 0;
}
