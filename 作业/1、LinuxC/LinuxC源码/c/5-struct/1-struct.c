#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct Student
{
	char name[32];
	int id;
	char sex;
}stu;

int main()
{
	struct Student s1;   //定义结构体变量
	struct Student s2 = {"jack", 1, 'm'};
	//s1.name = "tom";    //char name[32]; name = "aaa"; 
	strcpy(s1.name, "tom");
	s1.id = 2;
	s1.sex = 'f';

	printf("%s %d %c\n", s1.name, s1.id, s1.sex);
	printf("%s %d %c\n", s2.name, s2.id, s2.sex);

	stu *ps = (stu *)malloc(sizeof(stu));   //结构体指针
	strcpy(ps->name, "boy");
	ps->id = 3;
	ps->sex = 'm';
	printf("%s %d %c\n", ps->name, ps->id, ps->sex);

	stu s3[5] = {{"aa", 4, 'f'}, {"bb", 5, 'f'}};
	int i;
	for (i = 0; i < 5; i++)
	{
		printf("%s %d %c\n", s3[i].name, s3[i].id, s3[i].sex);
	}

	return 0;
}
