#ifndef _PARK_H
#define _PARK_H

#define ROW      9
#define COLUMN   18

#define WAY      1000        //表示通道
#define CAREXIST 1001        //表示车位有车
#define CAR      1002        //表示车位没车
#define PATH     1003

typedef struct Box
{
	int row;
	int column;
}Box;

void welcome();
void menu();
void print_array(int array[ROW][COLUMN]);

void show_park();
void push_park();
void leave_park();
void init_park();
void car_info();
void park_info();
void show_park();

void walk(int start_x, int start_y, int end_x, int end_y);

#endif
