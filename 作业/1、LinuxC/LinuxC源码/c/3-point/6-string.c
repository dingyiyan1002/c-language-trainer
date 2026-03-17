#include <stdio.h>

int main()
{
	char s1[] = "helloworld";    //数组名是指针常量，不能被修改的

	//printf("%s\n", s1);
	//s1++;     //数组名不能修改
	s1[0]++;    //里面的内容可以修改

	char *s2 = "helloworld";    //"hellowrold"存放在只读数据区
	s2++;
	//s2[0]++;
	
	char s3[20];
	//s3 = "hellowrold";

	char *s4;
	s4 = "helloworld";
	
	char *string[] = {"I love China!", "I am"}; 
	printf("%s\n", string[0]); 
	printf("%s\n", string[1]);

	return 0;
}
