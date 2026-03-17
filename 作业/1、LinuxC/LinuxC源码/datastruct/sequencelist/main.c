//调用函数
#include <stdio.h>   //默认去系统指定的目录下找头文件   /usr/include 
#include "list.h"    //默认在当前目录下找头文件
#include <time.h>
#include <stdlib.h>

int main()
{
	//创建顺序表（定义结构体变量）
	List seqList;    

	//初始化顺序表
	int ret = init_list(&seqList);    //如果要修改实参的值，必须要取地址
	if (SUCCESS == ret)
	{
		printf("顺序表初始化成功\n");
	}
	else 
	{
		printf("顺序表初始化失败\n");
	}

	//顺序表的插入
	int i, num;
	srand(time(NULL));
	for (i = 0; i < 11; i++)
	{
		num = rand() % 20;
		ret = insert_list(&seqList, i + 1, num);
		if (SUCCESS == ret)
		{
			printf("插入 %d 成功\n", num);
		}
		else
		{
			printf("插入 %d 失败\n", num);
		}
	}

	//遍历顺序表
	traverse_list(seqList);

	//获得前驱
	num = rand() % 20;
	int result;       //保存结果
	ret = get_prior_list(seqList, num, &result);
	if (SUCCESS == ret)
	{
		printf("%d 的前驱是 %d\n", num, result);
	}
	else
	{
		printf("%d 不存在前驱\n", num);
	}

	//获得后继元素
	ret = get_next_list(seqList, num, &result);
	if (SUCCESS == ret)
	{
		printf("%d 的后继是 %d\n", num, result);
	}
	else
	{
		printf("%d 不存在后继\n", num);
	}

	//查找操作
	int p = rand() % 15;
	ret = find_list(seqList, p, &num);
	if (SUCCESS == ret)
	{
		printf("第 %d 个元素是 %d\n", p, num);
	}
	else
	{
		printf("第 %d 个元素不存在\n", p);
	}

	//定位操作
	num = rand() % 20;
	ret = locat_list(seqList, num, &p);
	if (SUCCESS == ret)
	{
		printf("元素 %d 位置是 %d\n", num, p);
	}
	else
	{
		printf("元素 %d 不存在\n", num);
	}

	//删除元素
	for (i = 0; i < 5; i++)
	{
		p = rand() % 10;
		ret = delete_list(&seqList, p, &num);
		if (SUCCESS == ret)
		{
			printf("删除第 %d 个元素成功 %d\n", p, num);
		}
		else
		{
			printf("删除第 %d 个元素失败\n", p);
		}
	}

	//清空操作
	ret = clear_list(&seqList);
	if (SUCCESS == ret)
	{
		printf("顺序表清空成功\n");
	}
	else
	{
		printf("顺序表清空失败\n");
	}

	//遍历顺序表
	traverse_list(seqList);

	//销毁操作
	ret = destroy_list(&seqList);
	if (SUCCESS == ret)
	{
		printf("销毁成功\n");
	}
	else
	{
		printf("销毁失败\n");
	}

	for (i = 0; i < 11; i++)
	{
		num = rand() % 20;
		ret = insert_list(&seqList, i + 1, num);
		if (SUCCESS == ret)
		{
			printf("插入 %d 成功\n", num);
		}
		else
		{
			printf("插入 %d 失败\n", num);
		}
	}

	return 0;
}
