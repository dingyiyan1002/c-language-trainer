#include <stdio.h>
#include <string.h>

int main()
{
	char s1[32] = "helloworld";
	
	printf("%s\n", strchr(s1, 'w'));

	printf("%s\n", strchr(s1, 'l'));

	printf("%s\n", strrchr(s1, 'l'));

	return 0;
}
