#include <stdio.h>

void mystrcpy(char *dest, const char *src)
{
	/*while (*src != '\0')
	{
		*dest = *src;
		dest++;
		src++;
	}
	*dest = '\0';*/

	//src++;
	//(*src)++;

	while ((*dest++ = *src++) != '\0');
}

int main()
{
	char s1[32] = "hellowrold";
	char s2[32] = {0};

	mystrcpy(s2, s1);

	printf("%s\n", s2);

	char s3[32] = "helloworld12345";
	mystrcpy(s3, s1);
	printf("%s\n", s3);

	return 0;
}

//就近原则
void func()
{
	int num = -1;

	const int *p1 = &num;    //*p1 不能修改   p1指向的内容不能修改
	p1++;
	//(*p1)++;

	int *const p2 = &num;    //p2不能修改   *p2可以修改
	//p2++;
	(*p2)++;

	const int *const p3 = &num;  //两个都不能修改
}
