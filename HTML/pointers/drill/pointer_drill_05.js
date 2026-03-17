/**
 * 指针专项跟打练习 05 - 指针数组
 * 难度：⭐⭐⭐⭐
 * 建议：手打 3 遍，理解指针数组 vs 数组指针
 */

export const pointer_drill_05 = {
  title: '指针数组',
  difficulty: '高级',
  code: `#include <stdio.h>

int main() {
    int a = 1, b = 2, c = 3;
    
    // 指针数组：数组的每个元素都是指针
    int *ptrArray[3] = {&a, &b, &c};
    
    printf("直接访问：%d, %d, %d\\n", a, b, c);
    printf("通过指针数组：%d, %d, %d\\n", 
           *ptrArray[0], *ptrArray[1], *ptrArray[2]);
    
    // 修改值
    *ptrArray[0] = 100;
    *ptrArray[1] = 200;
    *ptrArray[2] = 300;
    
    printf("修改后：%d, %d, %d\\n", a, b, c);
    
    // 遍历指针数组
    for (int i = 0; i < 3; i++) {
        printf("ptrArray[%d] = %p, 值=%d\\n", 
               i, (void*)ptrArray[i], *ptrArray[i]);
    }
    
    return 0;
}`,
  practicePoints: [
    '指针数组定义：int *ptrArray[3]',
    '每个元素都是 int* 类型',
    'ptrArray[i] 是指针，*ptrArray[i] 是值',
    '常用于存储多个相关变量的地址'
  ],
  output: `直接访问：1, 2, 3
通过指针数组：1, 2, 3
修改后：100, 200, 300
ptrArray[0] = 0x7fff..., 值=100
ptrArray[1] = 0x7fff..., 值=200
ptrArray[2] = 0x7fff..., 值=300`
};