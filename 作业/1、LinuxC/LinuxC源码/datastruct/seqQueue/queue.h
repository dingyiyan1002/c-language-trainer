#ifndef _QUEUE_H
#define _QUEUE_H

#define SIZE    10
#define SUCCESS 1000
#define FAILURE 1001

typedef int T;

typedef struct seqQueue
{
	T *data;
	int front;
	int rear;
}seqQueue;

int InitQueue(seqQueue *q);
int PushQueue(seqQueue *q, T num);
int EmptyQueue(seqQueue q);
T GetTop(seqQueue q);
T PopQueue(seqQueue *q);
int ClearQueue(seqQueue *q);
int DestroyQueue(seqQueue *q);

#endif
