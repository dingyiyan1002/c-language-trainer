/**
 * 指针专项跟打练习 04 - 二级指针
 * 难度：⭐⭐⭐⭐
 * 目标：理解二级指针的概念和使用
 */

export const pointer_practice_04 = {
  title: '二级指针跟打',
  difficulty: '高级',
  exercise: \`// 跟打练习 4：二级指针操作
#include <stdio.h>

int main() {
    int a = 100;
    int *p = &a;      // 一级指针
    int **pp = ____;  // 二级指针，指向 p
    
    printf("a = %d\\n", a);
    printf("*p = %d\\n", *p);
    printf("**pp = %d\\n", ____);  // 通过二级指针访问 a
    
    printf("&a = %p\\n", &a);
    printf("p = %p\\n", p);
    printf("*pp = %p\\n", ____);
    printf("&pp = %p\\n", ____);
    
    ____ = 200;  // 通过二级指针修改 a
    printf("a = %d\\n", a);
    
    return 0;
}\`,
  answer: \`#include <stdio.h>

int main() {
    int a = 100;
    int *p = &a;      // 一级指针
    int **pp = &p;    // 二级指针，指向 p
    
    printf("a = %d\\n", a);
    printf("*p = %d\\n", *p);
    printf("**pp = %d\\n", **pp);  // 通过二级指针访问 a
    
    printf("&a = %p\\n", &a);
    printf("p = %p\\n", p);
    printf("*pp = %p\\n", *pp);
    printf("&pp = %p\\n", &pp);
    
    **pp = 200;  // 通过二级指针修改 a
    printf("a = %d\\n", a);
    
    return 0;
}\`,
  keyPoints: [
    '二级指针是指针的指针',
    'int **pp 存储的是一级指针的地址',
    '*pp 得到一级指针的值（即 a 的地址）',
    '**pp 得到最终的值（a 的值）'
  ],
  tips: [
    '一级指针：int *p = &a',
    '二级指针：int **pp = &p',
    '*pp 等价于 p',
    '**pp 等价于 *p 等价于 a'
  ]
};
