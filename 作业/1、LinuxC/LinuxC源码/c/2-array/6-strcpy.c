#include <stdio.h>
#include <string.h>

int main()
{
	char s1[32] = "hellowrold";
	char s2[32] = {0};

	strcpy(s2, s1);       //把s1拷贝到s2中

	printf("%s\n", s2);

	char s3[32] = "helloworld";
	char s4[32] = "11111111112222222222";

	strcpy(s4, s3);     //拷贝包含'\0'

	printf("%s\n", s4);

	char s5[32] = "11111111112222222222";

	strncpy(s5, s3, 10);

	printf("%s\n", s5);

	return 0;
}
