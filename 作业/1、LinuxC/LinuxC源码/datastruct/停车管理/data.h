#ifndef _DATA_H
#define _DATA_H

#include <time.h>
#include "park.h"

//等待队列
typedef struct QueueNode
{
	char id[16];
	struct QueueNode *next;
}QueueNode;

typedef struct Queue
{
	QueueNode *front;
	QueueNode *rear;
}Queue;

void init_queue();
void push_queue(char *id);
void pop_queue(char *id);
int empty_queue();

void init_link();
void insert_link(const char *id, Box b);
void traverse_link();
void delete_link(const char *id);
Box get_place_by_id(const char *id);
time_t get_time_by_id(const char *id);

int id_is_repeat(const char *id);

//链表
typedef struct LinkNode
{
	char id[32];
	time_t start;
	Box locate;
	struct LinkNode *next;
}LinkNode;


#endif

