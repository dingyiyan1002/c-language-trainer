/**
 * 结构体面试题 02 - 结构体指针与箭头运算符
 * 难度：⭐⭐⭐
 * 考点：-> 运算符、结构体指针
 */

export const struct_interview_02 = {
  title: '结构体指针与箭头运算符',
  difficulty: '中级',
  question: `以下两种访问方式有什么区别？

struct Person {
    char name[50];
    int age;
};

struct Person p = {"张三", 25};
struct Person *ptr = &p;

// 方式 1
printf("%s, %d\\n", p.name, p.age);

// 方式 2
printf("%s, %d\\n", ptr->name, ptr->age);

// 方式 3
printf("%s, %d\\n", (*ptr).name, (*ptr).age);`,
  answer: `三种方式的区别：

方式 1：直接访问结构体成员
- 使用点运算符 .
- 适用于结构体变量

方式 2：箭头运算符访问
- 使用 -> 运算符
- 适用于结构体指针
- ptr->name 等价于 (*ptr).name

方式 3：解引用后访问
- 先解引用 *ptr 得到结构体
- 再用点运算符访问
- 括号必须，因为.优先级高于*

结论：
- 结构体变量用 .
- 结构体指针用 ->（更简洁）
- ptr->name 和 (*ptr).name 等价`,
  keyPoints: [
    '点运算符.用于结构体变量',
    '箭头运算符->用于结构体指针',
    'ptr->member 等价于 (*ptr).member',
    '解引用时括号不能省略'
  ],
  commonMistakes: [
    '混淆.和->的使用场景',
    '忘记解引用时需要括号',
    '对指针使用.运算符'
  ]
};