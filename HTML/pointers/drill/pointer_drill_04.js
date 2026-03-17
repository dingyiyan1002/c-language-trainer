/**
 * 指针专项跟打练习 04 - 二级指针
 * 难度：⭐⭐⭐⭐
 * 建议：手打 3 遍，理解指针的指针
 */

export const pointer_drill_04 = {
  title: '二级指针',
  difficulty: '高级',
  code: `#include <stdio.h>

int main() {
    int a = 10;
    int *p = &a;
    int **pp = &p;
    
    printf("a = %d\\n", a);
    printf("*p = %d\\n", *p);
    printf("**pp = %d\\n", **pp);
    
    printf("&a = %p\\n", (void*)&a);
    printf("p = %p\\n", (void*)p);
    printf("*pp = %p\\n", (void*)*pp);
    
    **pp = 20;
    printf("修改后 a = %d\\n", a);
    
    return 0;
}`,
  practicePoints: [
    '二级指针定义：int **pp = &p',
    '一级解引用：*pp 得到 p（指针）',
    '二级解引用：**pp 得到 a（值）',
    '通过二级指针间接修改原变量'
  ],
  output: `a = 10
*p = 10
**pp = 10
&a = 0x7fff...
p = 0x7fff...
*pp = 0x7fff...
修改后 a = 20`
};