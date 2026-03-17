//头文件：存放大家都要使用的东西（宏定义 结构体申明 函数申明）
#ifndef _LIST_H      //防止头文件被重复的包含
#define _LIST_H

#define SIZE       10
#define SUCCESS    1000
#define FAILURE    1001

typedef struct SequenceList
{
	int *data;            //顺序表的起始地址
	int length;           //顺序表长度
}List;

int init_list(List *l);
int insert_list(List *l, int p, int num);
void traverse_list(List l);
int get_prior_list(List l, int num, int *r);
int get_next_list(List l, int num, int *r);
int find_list(List l, int p, int *n);
int locat_list(List l, int num, int *p);
int delete_list(List *l, int p, int *n);
int clear_list(List *l);
int destroy_list(List *l);

#endif
