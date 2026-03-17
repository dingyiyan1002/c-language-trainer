#include <stdio.h>

typedef struct Box
{
	int x;           //点的横坐标（行）
	int y;           //点的纵坐标（列）
	int dir;         //下一个点的方向
}Box;

typedef struct
{
	Box data[1024];
	int top;         //栈顶指针（-1表示空栈）
}Stack;

int map[6][6] = {
	{0, 0, 0, 0, 0, 0},
	{0, 1, 0, 1, 1, 0},
	{0, 1, 0, 0, 1, 0},
	{0, 1, 1, 0, 1, 0},
	{0, 1, 1, 0, 0, 1},
	{0, 0, 0, 0, 0, 0}
};

void InitStack(Stack *s)
{
	s->top = -1;
}

void push(Stack *s, Box b)
{
	if (s->top == 1023)
	{
		return;
	}

	s->data[++(s->top)] = b;
}

int EmptyStack(Stack *s)
{
	return ((s->top == -1) ? 1 : 0);
}

void GetTop(Stack *s, Box *b)
{
	*b = s->data[s->top];
}

void pop(Stack *s)
{
	s->top--;
}

void ShowPath(Stack *s)
{
	int i;
	for (i = 0; i <= s->top; i++)
	{
		printf("[%d %d] --> ", s->data[i].x, s->data[i].y);
	}
	printf("\n");
}

void Walk(Stack *s, int x1, int y1, int x2, int y2)
{
	Box now;

	now.x = x1;
	now.y = y1;
	now.dir = -1;

	push(s, now);             //起点进栈
	map[now.x][now.y] = -1;   //表示点走过

	while (EmptyStack(s) != 1)//只要栈不为空，就一直循环   
	{
		GetTop(s, &now);

		if (now.x == x2 && now.y == y2)   //是终点
		{
			ShowPath(s);                  //打印路径
			map[now.x][now.y] = 0;        //表示点没有走过
			pop(s);
		}
		else
		{
			int k, i, j;
			for (k = now.dir + 1; k < 4; k++)
			{
				switch(k)
				{
					case 0:
						i = now.x - 1;
						j = now.y;
						break;
					case 1:
						i = now.x;
						j = now.y + 1;
						break;
					case 2:
						i = now.x + 1;
						j = now.y;
						break;
					case 3:
						i = now.x;
						j = now.y - 1;
						break;
				}
				
				Box t;
				if (i >= 0 && i <= 5 && j >= 0 && j <= 5 && map[i][j] == 0)
				{
					t.x = i;
					t.y = j;
					t.dir = -1;

					s->data[s->top].dir = k;
					push(s, t);
					map[i][j] = -1;

					break;
				}
			}

			if (4 == k)
			{
				pop(s);
				map[now.x][now.y] = 0;
			}
		}

	}
}

int main()
{
	Stack stack;

	InitStack(&stack);

	Walk(&stack, 0, 0, 5, 5);

	return 0;
}
