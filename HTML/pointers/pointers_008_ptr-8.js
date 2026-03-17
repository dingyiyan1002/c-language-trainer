/**
 * 指针面试题 06 - const 与指针
 * 难度：⭐⭐⭐⭐⭐
 * 考点：const 指针、指针常量、常量指针
 */

export const pointer_interview_006 = {
  title: 'const 与指针的四种组合',
  difficulty: '高级',
  question: `解释以下四种声明的区别：

1. const int *p1
2. int const *p2
3. int * const p3
4. const int * const p4

并说明哪些可以修改，哪些不能。`,
  answer: `四种声明详解：

1. const int *p1 （指向常量的指针）
   - p1 可以指向其他地址：p1 = &b; ✓
   - 不能修改指向的值：*p1 = 10; ✗
   - 记忆：const 在 * 左边，值不能改

2. int const *p2 （等价于第 1 种）
   - 与 const int *p1 完全相同
   - const 修饰 int，值不能改

3. int * const p3 （常量指针）
   - p3 不能指向其他地址：p3 = &b; ✗
   - 可以修改指向的值：*p3 = 10; ✓
   - 记忆：const 在 * 右边，指针不能改
   - 必须在声明时初始化

4. const int * const p4（指向常量的常量指针）
   - 不能修改指向：p4 = &b; ✗
   - 不能修改值：*p4 = 10; ✗
   - 完全不可变

示例代码：
int a = 10, b = 20;

const int *p1 = &a;
p1 = &b;    // OK
//*p1 = 30;   // Error

int * const p3 = &a;
//p3 = &b;    // Error
*p3 = 30;     // OK

记忆口诀：
- const 在 * 左：值不能动
- const 在 * 右：指针不能动
- 两边都有：都不能动`,
  keyPoints: [
    'const int* 和 int* const 的区别',
    'const 在*左边修饰值',
    'const 在*右边修饰指针',
    '常量指针必须初始化'
  ],
  commonMistakes: [
    '混淆 const int* 和 int* const',
    '不知道 const int* 等价于 int const*',
    '常量指针忘记初始化',
    '不理解 const 的位置决定修饰对象'
  ]
};
