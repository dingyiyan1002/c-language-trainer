#include "queue.h"
#include <stdlib.h>

int InitQueue(seqQueue *q)
{
	if (NULL == q)
		return FAILURE;

	q->data = (T *)malloc(sizeof(T) * SIZE);
	if (NULL == q->data)
	{
		return FAILURE;
	}

	q->front = q->rear = 0;

	return SUCCESS;
}

int PushQueue(seqQueue *q, T num)
{
	if (NULL == q || NULL == q->data)
		return FAILURE;

	if ((q->rear + 1) % SIZE == q->front)
	{
		return FAILURE;
	}

	q->data[q->rear] = num;

	q->rear = (q->rear + 1) % SIZE;

	return SUCCESS;
}

int EmptyQueue(seqQueue q)
{
	return (q.front == q.rear) ? SUCCESS : FAILURE;
}

T GetTop(seqQueue q)
{
	return ((q.front == q.rear) ? FAILURE : q.data[q.front]);
}

T PopQueue(seqQueue *q)
{
	if (NULL == q)
		return FAILURE;

	if (q->front == q->rear)
		return FAILURE;

	T num = q->data[q->front];

	q->front = (q->front + 1) % SIZE;

	return num;
}

int ClearQueue(seqQueue *q)
{
	if (NULL == q)
		return FAILURE;

	q->front = q->rear = 0;

	return SUCCESS;
}

int DestroyQueue(seqQueue *q)
{
	if (NULL == q)
		return FAILURE;

	if (q->data)
		free(q->data);

	q->data = NULL;

	return SUCCESS;
}
