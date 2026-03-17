/**
 * 指针专项跟打练习 01 - 基础指针操作
 * 难度：⭐⭐
 * 建议：手打 3 遍，理解每行代码
 */

export const pointer_drill_01 = {
  title: '指针基础跟打',
  difficulty: '入门',
  code: `#include <stdio.h>

int main() {
    int a = 10;
    int *p = &a;
    
    printf("a = %d\\n", a);
    printf("*p = %d\\n", *p);
    printf("&a = %p\\n", (void*)&a);
    printf("p = %p\\n", (void*)p);
    
    *p = 20;
    printf("a = %d\\n", a);
    
    return 0;
}`,
  practicePoints: [
    '定义指针：int *p = &a;',
    '解引用：*p 访问指针指向的值',
    '取地址：&a 获取变量地址',
    '通过指针修改变量：*p = 20'
  ],
  output: `a = 10
*p = 10
&a = 0x7fff...
p = 0x7fff...
a = 20`
};