#include "park.h"
#include "data.h"
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

extern int park[ROW][COLUMN];
extern int Total;
extern int CarNumber;

/*
 * 初始化停车场
 */
void init_park()
{
	int i, j;
	for (i = 0; i < ROW; i++)
	{
		for (j = 0; j < COLUMN; j++)
		{
			if (i == 0 || i == ROW - 1 || j == 0 || j % 3 == 0 || 
					(j == COLUMN - 1 && j % 3 != 1))
			{
				park[i][j] = WAY;
			}
			else
			{
				park[i][j] = CAR;
				Total++;
			}
		}
	}
}

/*
 * 场内所有车辆的信息
 */
void car_info()
{
	if (CarNumber == 0)
	{
		printf("停车场没有车\n");
	}
	else
	{
		traverse_link();
	}

	getchar();
	getchar();
}

/*
 * 场内停车信息
 */
void park_info()
{
	print_array(park);
}

/*
 * 查看停车场情况
*/
void show_park()
{
	int c;
	system("clear");

	printf("1、查看所有车辆信息；\n");
	printf("2、查看场内停车情况；\n");

	scanf("%d", &c);

	switch(c)
	{
		case 1:
			car_info();
			break;
		case 2:
			park_info();
			break;
		default:
			fprintf(stderr, "输入有误\n");
			break;
	}

}

/*
 * 在停车场中找到一个空闲的车位
 * */
Box get_place()
{
	int row, column;
	Box b;
	srand(time(NULL));

	while (1)
	{
		row = rand() % ROW;
		column = rand() % COLUMN;

		if (park[row][column] == CAR)
		{
			b.row = row;
			b.column = column;
			return b;
		}
	}
}

void push_car(char *id)
{
	Box b = get_place();

	park[b.row][b.column] = CAREXIST;

	insert_link(id, b);

	CarNumber++;

	printf("车辆停放成功，位置：%d %d\n", b.row, b.column);
}

/*
 * 停车
 */
void push_park()
{
	char id[32] = {0};

	printf("请输入车牌号：");

	scanf("%s", id);

	//判断长度是不是6 以及有没有重复
	int length = strlen(id);
	while (length != 6 || id_is_repeat(id))
	{
		printf("输入的车牌号有误，请重新输入：");
		scanf("%s", id);
		length = strlen(id);
	}
	
	if (CarNumber >= Total)
	{
		printf("停车场已满，进入等待队列\n");
		push_queue(id);
	}
	else
	{
		push_car(id);
	}

	getchar();
	getchar();
}

/*
 * 根据车牌号和当前位置，规划最短路径
 * */
void find_car()
{
	char id[32] = {0};
	int row, column;

	printf("请输入车牌号：");
	scanf("%s", id);

	printf("请输入当前的位置：");
	scanf("%d %d", &row, &column);

	//判断输入的位置是否有误
	if (row < 0 || row >= ROW || column < 0 || column >= COLUMN)
	{
		fprintf(stderr, "输入的位置有误\n");

		getchar();
		getchar();

		return;
	}

	Box b = get_place_by_id(id);
	if (b.row == -1 || b.column == -1)
	{
		fprintf(stderr, "输入的车牌号有误\n");

		getchar();
		getchar();

		return;
	}

	walk(row, column, b.row, b.column);
}

void plane_route()
{
	char id[32] = {0};
	int c;

	printf("请输入车牌号：");
	scanf("%s", id);

	Box b = get_place_by_id(id);
	if (b.row == -1 || b.column == -1)
	{
		fprintf(stderr, "输入的车牌号有误\n");

		getchar();
		getchar();

		return;
	}

	time_t start = get_time_by_id(id);

	double park_time = difftime(time(NULL), start);

	printf("停车时长 %.1f 秒，请缴费 %f 元\n", park_time, park_time * 0.01);

	printf("1.已缴费       2.放弃缴费\n");
	scanf("%d", &c);

	switch(c)
	{
		case 1:
			walk(b.row, b.column, ROW - 1, COLUMN - 1);
			break;
		case 2:
			return;
	}

	delete_link(id);
	park[b.row][b.column] = CAR;
	CarNumber--;

	printf("车辆已经离场\n");

	if (!empty_queue())
	{
		char id[32] = {0};
		pop_queue(id);

		push_car(id);
	}

	getchar();
}

/*
 * 离开
 * 1、找车
 * 2、规划离开路线
 */
void leave_park()
{
	int c;
	system("clear");

	printf("1.找车\n");
	printf("2.离场\n");

	scanf("%d", &c);

	switch(c)
	{
		case 1:
			find_car();
			break;
		case 2:
			plane_route();
			break;
		default:
			fprintf(stderr, "输入有误\n");
			break;
	}
}
