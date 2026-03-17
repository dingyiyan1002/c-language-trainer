// 从作业目录导入的 170 个题目
export const IMPORTED_PRESETS = [
  {
    name: 'HelloWorld',
    difficulty: '入门',
    code: `#include <stdio.h>    //包含头文件 存放了函数的声明

int main()            //主函数：程序的入口   int 表示函数的返回值类型
{
\tprintf("helloworld\\n");   //输出函数

\treturn 0;         //函数的返回值

\t//printf();
}

//void main()
//{

//}
`,
  },
  {
    name: '条件运算符',
    difficulty: '入门',
    code: `#include <stdio.h>

int main()
{
\tint a = 1, b = 2;

\tint max = (a > b) ? a : b;

\tprintf("max = %d\\n", max);

\t//(a > b) ? a : b = 3;   //在 C 语言中，条件运算符不能作为左值使用

\treturn 0;
}
`,
  },
  {
    name: '自增运算符',
    difficulty: '入门',
    code: `#include <stdio.h>

int main()
{
\tint a = 1;

\tprintf("%d\\n", a++);   //执行 a 所在的表达式后，a 的值加一
\tprintf("%d\\n", ++a);   //执行 a 所在的表达式前，a 的值加一

\ta = 1;
\ta += a++;  //a += a;     a = a + a;    a = a + 1
\tprintf("a = %d\\n", a);

\ta = 1;
\ta += ++a;   //a = a + 1;   a += a;   a = a + a;
\tprintf("a = %d\\n", a);

\ta = 1;
\t++a += a;  
\tprintf("a = %d\\n", a);

\ta = 1;
\t++a += a++; 
\tprintf("a = %d\\n", a);

\ta = 1;
\t++a += ++a;
\tprintf("a = %d\\n", a);

\treturn 0;
}
`,
  },
  {
    name: 'if 语句',
    difficulty: '入门',
    code: `#include <stdio.h>

int main()
{
\tint num1, num2, result;
\tchar opt;

\tscanf("%d%c%d", &num1, &opt, &num2);

\tif ('+' == opt)
\t{
\t\tresult = num1 + num2;
\t}
\telse if ('-' == opt)
\t{
\t\tresult = num1 - num2;
\t}
\telse if ('*' == opt)
\t{
\t\tresult = num1 * num2;
\t}
\telse if ('/' == opt)
\t{
\t\tresult = num1 / num2;
\t}
\telse
\t{
\t\tprintf("unkown opt\\n");
\t\treturn -1;
\t}

\tprintf("%d\\n", result);

\treturn 0;
}
`,
  },
  {
    name: 'switch 语句',
    difficulty: '入门',
    code: `#include <stdio.h>

int main()
{
\tint num1, num2, result;
\tchar opt;

\tscanf("%d%c%d", &num1, &opt, &num2);

\tswitch(opt)
\t{
\t\tcase '+':
\t\t\tresult = num1 + num2;
\t\t\tbreak;
\t\tcase '-':
\t\t\tresult = num1 - num2;
\t\t\tbreak;
\t\tcase '*':
\t\t\tresult = num1 * num2;
\t\t\tbreak;
\t\tdefualt:
\t\t\tresult = num1 / num2;
\t\t\tbreak;
\t}

\tprintf("%d\\n", result);

\treturn 0;
}
`,
  },
  {
    name: 'while 循环',
    difficulty: '基础',
    code: `#include <stdio.h>
#include <unistd.h>

//房价 200 万 每年涨 10%  程序员工资 40 万 问几年能买房

int main()
{
\tdouble price = 200.0;
\tint sum = 0;
\tint year = 0;

\twhile (sum < price)
\t{
\t\tyear++;
\t\tprice = price * 1.1;
\t\tsum = sum + 40;

\t\tprintf("第 %d 年  房价 %f  积蓄 %d\\n", year, price, sum);

\t\tsleep(1);
\t}

\tprintf("%d\\n", year);

\treturn 0;
}
`,
  },
  {
    name: 'for 循环嵌套',
    difficulty: '基础',
    code: `#include <stdio.h>

int main()
{
\tint result = (1 + 1, 2 + 2);

\tint i, j;
\tfor (i = 0; i < 5; i++)
\t{
\t\tfor (j = 0; j < 3; j++)
\t\t{
\t\t\tif (1 == j)
\t\t\t{
\t\t\t\tbreak;
\t\t\t}

\t\t\tprintf("hello\\n");
\t\t}
\t}

\treturn 0;
}
`,
  },
  {
    name: '数组初始化',
    difficulty: '基础',
    code: `#include <stdio.h>

#define size    5

int b[size];

int main()
{
\tint a[5] = {0};

\tint i;
\tfor (i = 0; i < 5; i++)
\t{
\t\tprintf("%d ", a[i]);
\t}
\tprintf("\\n");

\tprintf("%p\\n", a);
\tprintf("%p\\n", &a[0]);
\tprintf("%p\\n", &a);

\tprintf("%p\\n", a + 1);
\tprintf("%p\\n", &a[0] + 1);
\tprintf("%p\\n", &a + 1);

\treturn 0;
}
`,
  },
  {
    name: '指针基础',
    difficulty: '中级',
    code: `#include <stdio.h>

int main()
{
\tint *p;

\tprintf("int *      %lu\\n", sizeof(int *));
\tprintf("char *     %lu\\n", sizeof(char *));
\tprintf("short *    %lu\\n", sizeof(short *));
\tprintf("long *     %lu\\n", sizeof(long *));
\tprintf("float *    %lu\\n", sizeof(float *));
\tprintf("double *   %lu\\n", sizeof(double *));

\tint num = 1;
\tp = &num;
\t*p = 1000;
\tprintf("num = %d\\n", num);

\tchar ch = 'a';
\tchar *q = &ch;

\tprintf("%p\\n", p);
\tprintf("%p\\n", q);
\tprintf("%p\\n", p + 1);
\tprintf("%p\\n", q + 1);

\treturn 0;
}
`,
  },
  {
    name: '结构体',
    difficulty: '中级',
    code: `#include <stdio.h>

typedef struct {
    char name[50];
    int age;
    float score;
} Student;

void print_student(Student *s) {
    printf("Name: %s\\n", s->name);
    printf("Age: %d\\n", s->age);
    printf("Score: %.2f\\n", s->score);
}

int main() {
    Student stu = {"张三", 20, 95.5};
    print_student(&stu);
    return 0;
}
`,
  },
  {
    name: '最大公约数',
    difficulty: '基础',
    code: `#include <stdio.h>

int main()
{
\tint num1, num2;
\tint i;

\tscanf("%d %d", &num1, &num2);

\tint min = (num1 > num2) ? num2 : num1;

\tfor (i = min; i > 0; i--)
\t{
\t\tif (num1 % i == 0 && num2 % i == 0)
\t\t{
\t\t\tprintf("最大公约数是 %d\\n", i);
\t\t\tbreak;
\t\t}
\t}

\tint max = (num1 > num2) ? num1 : num2;

\tfor (i = max; i <= num1 * num2; i++)
\t{
\t\tif (i % num1 == 0 && i % num2 == 0)
\t\t{
\t\t\tprintf("最小公倍数是 %d\\n", i);
\t\t\tbreak;
\t\t}
\t}

\treturn 0;
}
`,
  },
  {
    name: '平均值计算',
    difficulty: '入门',
    code: `#include <stdio.h>

int main()
{
\tint num, i;
\tdouble sum = 0;

\tfor (i = 0; i < 10; i++)
\t{
\t\tscanf("%d", &num);
\t
\t\tsum += num;
\t}

\tprintf("平均值是 %.1f\\n", sum / 10);

\treturn 0;
}
`,
  },
  {
    name: '水仙花数',
    difficulty: '基础',
    code: `#include <stdio.h>

int main()
{
\tint i, j, k;

\tfor (i = 1; i <= 4; i++)
\t{
\t\tfor (j = 1; j <= 4; j++)
\t\t{
\t\t\tfor (k = 1; k <= 4; k++)
\t\t\t{
\t\t\t\tif (i != j && i != k && j != k)
\t\t\t\t{
\t\t\t\t\tprintf("%d%d%d\\n", i, j, k);
\t\t\t\t}
\t\t\t}
\t\t}
\t}

\treturn 0;
}
`,
  },
  {
    name: '完数判断',
    difficulty: '基础',
    code: `#include <stdio.h>

int main()
{
\tint i, j, sum = 0;

\tfor (i = 1; i < 1000; i++)
\t{
\t\tfor (j = 1; j <= i / 2; j++)
\t\t{
\t\t\tif (i % j == 0)
\t\t\t{
\t\t\t\tsum += j;
\t\t\t}
\t\t}

\t\tif (sum == i)
\t\t{
\t\t\tprintf("%d\\n", i);
\t\t}

\t\tsum = 0;
\t}

\treturn 0;
}
`,
  },
  {
    name: '字符串反转',
    difficulty: '中级',
    code: `#include <stdio.h>
#include <string.h>

void reverse(char str[], int start, int end)
{
\tint i;
\tchar t;
\tfor (i = 0; i < (end - start) / 2; i++)
\t{
\t\tt = str[start + i];
\t\tstr[start + i] = str[end - 1 - i];
\t\tstr[end - 1 - i] = t;
\t}
}

int main()
{
\tchar str[128] = {0};
\tchar ch;
\tint i = 0;

\tprintf("输入几个单词 \\n");
\t
\twhile ((ch = getchar()) != '\\n')
\t{
\t\tstr[i++] = ch;    
\t}
\t
\treverse(str, 0, i);

\ti = 0;
\tint begin = 0;
\twhile (str[i] != '\\0')
\t{
\t\tif (str[i] == ' ')
\t\t{
\t\t\treverse(str, begin, i);
\t\t\tbegin = i + 1;
\t\t}

\t\ti++;
\t}

\treverse(str, begin, i);

\tprintf("%s\\n", str);

\treturn 0;
}
`,
  },
  {
    name: '约瑟夫环',
    difficulty: '高级',
    code: `#include <stdio.h>

int main()
{
\tint num;       //表示总人数
\tint person;    //表示剩余的人数
\tint k = 0;     //用于报数
\tint flag[1024] = {0};    //0 表示在圈中 1 表示踢出去
\tint i = 1;               //下标 从 1 开始

\tscanf("%d", &num);
\tperson = num;

\twhile (person > 1)
\t{
\t\tif (flag[i] == 0)
\t\t{
\t\t\tk++;

\t\t\tif (3 == k)
\t\t\t{
\t\t\t\tk = 0;
\t\t\t\tflag[i] = 1;      //踢出去
\t\t\t\tperson--;
\t\t\t}
\t\t}

\t\ti++;

\t\tif (num + 1 == i)
\t\t\ti = 1;
\t}

\tfor (i = 1; i <= num; i++)
\t{
\t\tif (flag[i] == 0)
\t\t{
\t\t\tprintf("last person is %d\\n", i);
\t\t\tbreak;
\t\t}
\t}

\treturn 0;
}
`,
  },
  {
    name: '冒泡排序',
    difficulty: '基础',
    code: `#include <stdio.h>

int main()
{
\tint a[10] = {0};

\tint i, j;
\tfor (i = 0; i < sizeof(a) / sizeof(a[0]); i++)
\t{
\t\tscanf("%d", &a[i]);
\t}

\tfor (i = 0; i < 10 - 1; i++)
\t{
\t\tfor (j = 0; j < 10 - 1 - i; j++)
\t\t{
\t\t\tif (a[j] > a[j + 1])
\t\t\t{
\t\t\t\tint t = a[j];
\t\t\t\ta[j] = a[j + 1];
\t\t\t\ta[j + 1] = t;
\t\t\t}
\t\t}
\t}

\tfor (i = 0; i < 10; i++)
\t{
\t\tprintf("%d ", a[i]);
\t}
\tprintf("\\n");

\treturn 0;
}
`,
  },
  {
    name: '函数参数传递',
    difficulty: '基础',
    code: `#include <stdio.h>

void show();

int add(int x, int y)
{
\tint sum = x + y;
\treturn sum;
}

int main()
{
\tshow();   
\t
\tint a = 1, b = 2;
\tint ret = add(a, b);    
\tprintf("%d\\n", ret);    

\tprintf("%p\\n", add);    

\treturn 0;
}

void show()
{
\tprintf("helloworld\\n");
}
`,
  },
  {
    name: '静态变量',
    difficulty: '基础',
    code: `#include <stdio.h>

void func()
{
\tstatic int num = 1;   
\tnum++;
\tprintf("num = %d\\n", num);
}

int main()
{
\tint i;
\tfor (i = 0; i < 3; i++)
\t{
\t\tfunc();
\t}

\treturn 0;
}
`,
  },
];
