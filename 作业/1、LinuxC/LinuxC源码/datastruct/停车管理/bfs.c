#include <stdio.h>
#include "park.h"

#define SIZE   4096

extern int park[ROW][COLUMN];
int map[ROW][COLUMN];

/*
 * 表示二维数组中的一个元素
 * */
typedef struct _Box
{
	int x;            //点的横坐标
	int y;            //点的纵坐标
	int pre;          //上一个点的下标
}_Box;

//顺序队列
typedef struct Queue
{
	_Box data[SIZE];
	int front;
	int rear;
}Queue;

void init_bfs(Queue *q)
{
	q->front = q->rear = 0;
}

void push(Queue *q, _Box b)
{
	if (q->rear >= SIZE - 1)
	{
		fprintf(stderr, "算法队列已满\n");
		return;
	}

	q->data[q->rear++] = b;
}

int EmptyQueue(Queue *q)
{
	return (q->front == q->rear) ? 1 : 0;
}

void pop(Queue *q, _Box *b)
{
	if (q->front == q->rear)
	{
		fprintf(stderr, "队列为空 无法出队\n");
		return;
	}

	*b = q->data[q->front++];
}

/*
 * 判断该点是不是目标
 * */
int is_destination(_Box b, int x, int y)
{
	if ((b.x - 1 == x && b.y == y) ||
	    (b.x == x && b.y + 1 == y) ||
		(b.x + 1 == x && b.y == y) ||
		(b.x == x && b.y - 1 == y))
	{
		return 1;
	}
	else
	{
		return 0;
	}
}

/*
 * 判断下一个点是否能走
 * */
int is_ok(_Box b)
{
	if (b.x >= 0 && b.x < ROW && b.y >= 0 && b.y < COLUMN &&
			map[b.x][b.y] == WAY)
	{
		return 1;
	}
	else
		return 0;
}

/*
 * 打印路径
 * */
void show_path(Queue *q, int front)
{
	int i, tmp;
	for (i = front - 1; i >= 0;)
	{
		tmp = q->data[i].pre;
		q->data[i].pre = -1;
		i = tmp;
	}

	//记录原来起点的状态
	int state = park[q->data[0].x][q->data[0].y];

	for (i = 0; i < front; i++)
	{
		if (q->data[i].pre == -1)
		{
			park[q->data[i].x][q->data[i].y] = PATH;
		}
	}

	print_array(park);

	for (i = 0; i < front; i++)
	{
		if (q->data[i].pre == -1)
		{
			park[q->data[i].x][q->data[i].y] = WAY;
		}
	}

	park[q->data[0].x][q->data[0].y] = state;
}

void bfs(Queue *q, int x1, int y1, int x2, int y2)
{
	_Box now, next;

	now.x = x1;
	now.y = y1;
	now.pre = -1;

	push(q, now);
	map[now.x][now.y] = -1;

	while (EmptyQueue(q) != 1)
	{
		pop(q, &now);

		if (is_destination(now, x2, y2))
		{
			show_path(q, q->front);
			return;
		}

		int dir;
		for (dir = 0; dir < 4; dir++)
		{
			switch (dir)
			{
				case 0:
					next.x = now.x - 1;
					next.y = now.y;
					break;
				case 1:
					next.x = now.x;
					next.y = now.y + 1;
					break;
				case 2:
					next.x = now.x + 1;
					next.y = now.y;
					break;
				case 3:
					next.x = now.x;
					next.y = now.y - 1;
					break;
			}

			if (is_ok(next))
			{
				next.pre = q->front - 1;
				push(q, next);
				map[next.x][next.y] = -1;
			}
		}
	}
}

void walk(int start_x, int start_y, int end_x, int end_y)
{
	Queue queue;

	init_bfs(&queue);

	int i, j;
	for (i = 0; i < ROW; i++)
	{
		for (j = 0; j < COLUMN; j++)
		{
			map[i][j] = park[i][j];
		}
	}

	bfs(&queue, start_x, start_y, end_x, end_y);
}
