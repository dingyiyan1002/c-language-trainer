// 从作业目录导入的 170 个题目 - 第一部分（入门 + 基础）
export const IMPORTED_PRESETS_PART1 = [
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
];
