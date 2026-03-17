#include <stdio.h>
#include "park.h"
#include "data.h"

int park[ROW][COLUMN];
int Total;              //记录车辆总数
int CarNumber;          //实际停放的车辆
Queue wait;             //等待队列
LinkNode *head;         //存放车辆信息的链表

int main()
{
	int c;

	welcome();
	init_park();
	init_queue();
	init_link();

	while (1)
	{
		menu();

		scanf("%d", &c);

		switch (c)
		{
			case 1:
				show_park();
				break;
			case 2:
				push_park();
				break;
			case 3:
				leave_park();
				break;
			default:
				fprintf(stderr, "输入有误\n");
				break;
		}
	}

	return 0;
}
