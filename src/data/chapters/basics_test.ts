// basics-test 章节数据
import type { Chapter } from '../types';

export const basics_test: Chapter = {
    id: 'basics-test',
    name: '基础入门',
    icon: 'BookOpen',
    description: 'C语言基础知识选择题 - 零基础入门，查漏补缺',
    questionCount: 178,
    mode: 'practice',
    lessons: [
      {
        id: 'bt-data-types',
        title: '数据类型',
        content: `C语言基础数据类型测试

\`\`\`c
// 常用数据类型示例
int     i = 10;        // 有符号整型 (通常4字节)
char    c = 'A';       // 字符 (1字节)
float   f = 3.14f;     // 单精度浮点
double  d = 3.14159;    // 双精度浮点

// 嵌入式常用定宽类型
#include <stdint.h>
uint8_t  u8 = 255;      // 无符号8位 (0~255)
uint16_t u16 = 65535;   // 无符号16位 (0~65535)
uint32_t u32 = 4294967295; // 无符号32位
int32_t  s32 = -1;      // 有符号32位

// 有符号 vs 无符号
signed   int   s_i = -1;    // 有符号 (最高位为符号位)
unsigned int   u_i = 4294967295; // 无符号 (全部是数值位)
\`\`\`

**测试范围：**
- 基本数据类型 (int, char, float, double)
- 整型修饰符 (short, long, signed, unsigned)
- stdint类型 (uint8_t, uint16_t, uint32_t, int32_t)

**学习目标：**
- 掌握各类型取值范围
- 理解有符号与无符号区别
- 熟悉嵌入式常用类型`,
        keyPoints: ['数据类型取值范围', '有符号无符号', 'stdint类型']
      },
      {
        id: 'bt-operators',
        title: '运算符',
        content: `C语言运算符测试

\`\`\`c
// 算术运算符
int a = 10, b = 3;
int sum    = a + b;   // 13 加
int diff   = a - b;   // 7  减
int prod   = a * b;   // 30 乘
int quot   = a / b;   // 3  整除
int rem    = a % b;   // 1  取余

// 关系运算符 (结果为 1真 或 0假)
int eq  = (a == b);  // 0
int neq = (a != b);  // 1
int lt  = (a < b);   // 0
int gt  = (a > b);   // 1

// 逻辑运算符
int and = (a > 5 && b < 5);  // 1 && 1 = 1
int or  = (a > 5 || b > 5);  // 1 || 0 = 1
int not = !0;                 // 1  取反

// 位运算符 (嵌入式常用)
uint8_t x = 0x0F;    // 00001111
uint8_t and_res = x & 0x0F;  // 0x0F 与
uint8_t or_res  = x | 0x30;  // 0x3F 或
uint8_t xor_res = x ^ 0x0F;  // 0x00 异或
uint8_t not_res = ~x;         // 0xF0 取反
uint8_t lsh = x << 2;         // 0x3C 左移2位
uint8_t rsh = x >> 2;        // 0x03 右移2位

// 赋值运算符
a += 5;   // a = a + 5
b -= 2;   // b = b - 2
x &= 0x0F; // x = x & 0x0F

// 条件运算符 (三元运算符)
int max = (a > b) ? a : b;  // 取较大值
\`\`\`

**测试范围：**
- 算术运算符 (+, -, *, /, %)
- 关系运算符 (==, !=, <, >, <=, >=)
- 逻辑运算符 (&&, ||, !)
- 位运算符 (&, |, ^, ~, <<, >>)
- 赋值运算符 (=, +=, -=, *=, /=)
- 条件运算符 (? : )

**学习目标：**
- 掌握运算符优先级
- 理解短路求值特性
- 熟练使用位运算`,
        keyPoints: ['运算符优先级', '短路求值', '位运算']
      },
      {
        id: 'bt-control',
        title: '控制流',
        content: `C语言控制流测试

\`\`\`c
// if-else 条件判断
int score = 85;
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else {
    grade = 'C';
}

// switch-case 多分支
int day = 3;
switch (day) {
    case 1: printf("周一"); break;
    case 2: printf("周二"); break;
    case 3: printf("周三"); break;
    default: printf("其他"); break;
}

// for 循环
for (int i = 0; i < 10; i++) {
    sum += i;
}

// while 循环
int count = 0;
while (count < 5) {
    count++;
}

// do-while 循环
int n = 0;
do {
    printf("%d ", n);
    n++;
} while (n < 3);

// break/continue
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;  // 跳过本次
    if (i == 7) break;      // 跳出循环
}
\`\`\`

**测试范围：**
- if-else 条件判断
- switch-case 多分支
- while/do-while 循环
- for 循环
- break/continue/return

**学习目标：**
- 理解条件执行流程
- 掌握循环控制技巧
- 避免死循环`,
        keyPoints: ['条件分支', '循环结构', '跳转控制']
      },
      {
        id: 'bt-functions',
        title: '函数',
        content: `C语言函数基础测试

\`\`\`c
// 函数定义
int add(int a, int b) {
    return a + b;
}

// 函数声明 (头文件或源文件顶部)
int multiply(int x, int y);

// 值传递 vs 指针传递
void by_value(int n) {
    n = 100;  // 只修改局部副本
}

void by_pointer(int *p) {
    *p = 100;  // 修改原变量
}

// 调用
int n = 10;
by_value(n);      // n 仍然是 10
by_pointer(&n);  // n 变成 100

// 递归函数
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// 内联函数 (编译时展开)
static inline int max(int a, int b) {
    return (a > b) ? a : b;
}
\`\`\`

**测试范围：**
- 函数定义与声明
- 参数传递 (值传递/指针传递)
- 返回值处理
- 递归函数
- 内联函数

**学习目标：**
- 理解函数调用机制
- 掌握参数传递方式
- 学会设计函数接口`,
        keyPoints: ['函数调用', '参数传递', '返回值']
      },
      {
        id: 'bt-arrays',
        title: '数组',
        content: `C语言数组测试

\`\`\`c
// 一维数组定义
int arr[10];       // 未初始化，内容不确定
int nums[5] = {1, 2, 3, 4, 5};  // 完全初始化
int data[] = {10, 20, 30};        // 自动推断大小

// 数组访问 (下标从0开始)
int first = nums[0];  // 1
int last = nums[4];   // 5

// 数组遍历
for (int i = 0; i < 5; i++) {
    printf("%d ", nums[i]);
}

// 数组作为函数参数 (退化为指针)
void print_array(int arr[], int len) {
    for (int i = 0; i < len; i++) {
        printf("%d ", arr[i]);
    }
}

// 二维数组
int matrix[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};
int val = matrix[1][2];  // 7

// 字符数组与字符串
char str1[] = "Hello";     // 自动加\\0
char str2[10] = {'H', 'e', 'l', 'l', 'o', '\\0'};
\`\`\`

**测试范围：**
- 一维数组定义与使用
- 数组初始化
- 数组作为函数参数
- 二维数组
- 字符数组与字符串

**学习目标：**
- 掌握数组下标运算
- 理解数组内存布局
- 熟练处理字符串`,
        keyPoints: ['数组下标', '内存布局', '字符串']
      },
      {
        id: 'bt-pointers',
        title: '指针基础',
        content: `C语言指针基础测试

\`\`\`c
// 指针定义与初始化
int n = 10;
int *p = &n;    // & 取地址
int *ptr = NULL;  // NULL表示空指针

// 指针运算符
int value = *p;   // * 解引用，取值
*p = 20;          // 通过指针修改原变量

// 指针与数组
int arr[] = {1, 2, 3, 4, 5};
int *p = arr;     // 数组名就是首元素地址
int first = *p;       // 1
int second = *(p + 1); // 2
int third = p[2];      // 3 (等价于*(p+2))

// 指针运算
p++;      // 指向下一个元素
p--;      // 指向上一个元素
ptrdiff_t diff = p2 - p1;  // 元素间距

// 指针与字符串
char *str = "Hello";  // 字符串常量
char arr[] = "World";

// 指针数组 vs 数组指针
int *arr[10];     // 指针数组 (10个int指针)
int (*p)[10];     // 数组指针 (指向int[10])

// 函数指针
int (*func_ptr)(int, int) = &add;
int result = func_ptr(3, 4);
\`\`\`

**测试范围：**
- 指针定义与初始化
- 指针运算符 (*, &)
- 指针与数组关系
- 指针运算
- NULL指针处理

**学习目标：**
- 理解指针本质
- 掌握指针运算规则
- 避免野指针`,
        keyPoints: ['指针本质', '指针运算', 'NULL处理']
      }
    ]
  };

export default basics_test;
