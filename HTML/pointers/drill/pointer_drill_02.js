/**
 * 指针专项跟打练习 02 - 指针与数组
 * 难度：⭐⭐⭐
 * 建议：手打 3 遍，理解指针算术
 */

export const pointer_drill_02 = {
  title: '指针与数组',
  difficulty: '中级',
  code: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = arr;
    
    printf("arr[0] = %d, *p = %d\\n", arr[0], *p);
    printf("arr[1] = %d, *(p+1) = %d\\n", arr[1], *(p+1));
    printf("arr[2] = %d, *(p+2) = %d\\n", arr[2], *(p+2));
    
    p++;
    printf("p++ 后，*p = %d\\n", *p);
    
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d, *(p+%d) = %d\\n", 
               i, arr[i], i, *(p+i));
    }
    
    return 0;
}`,
  practicePoints: [
    '数组名就是指针：arr 等价于 &arr[0]',
    '指针算术：p+1 指向下一个元素',
    '*(p+i) 等价于 arr[i]',
    'p++ 移动到下一个元素'
  ],
  output: `arr[0] = 10, *p = 10
arr[1] = 20, *(p+1) = 20
arr[2] = 30, *(p+2) = 30
p++ 后，*p = 20
arr[0] = 10, *(p+0) = 20
arr[1] = 20, *(p+1) = 20
...`
};