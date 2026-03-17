/**
 * 指针面试题 05 - 二级指针
 * 难度：⭐⭐⭐⭐⭐
 * 考点：指针的指针、修改指针本身
 */

export const pointer_interview_005 = {
  title: '二级指针 - 修改指针本身',
  difficulty: '高级',
  question: `实现一个函数 allocate_array，动态分配一个整数数组，
并在函数内初始化数组元素。

要求：
1. 在函数内部分配内存
2. 调用后 main 函数中的指针能访问分配的内存
3. 初始化数组为 0, 1, 2, 3, 4`,
  answer: `正确实现（使用二级指针）：
#include <stdio.h>
#include <stdlib.h>

void allocate_array(int **arr, int size) {
    *arr = (int*)malloc(size * sizeof(int));
    
    for (int i = 0; i < size; i++) {
        (*arr)[i] = i;
    }
}

int main() {
    int *myArray = NULL;
    
    allocate_array(&myArray, 5);
    
    for (int i = 0; i < 5; i++) {
        printf("%d ", myArray[i]);
    }
    // 输出：0 1 2 3 4
    
    free(myArray);
    myArray = NULL;
    
    return 0;
}

解析：
- 要修改指针本身（让它指向新内存），需要传递指针的地址
- int **arr 是指针的指针
- *arr = malloc(...) 修改了调用者的指针
- (*arr)[i] 访问分配的数组

对比（错误做法）：
int* allocate_wrong(int size) {
    int *arr = malloc(size * sizeof(int));
    // 返回指针，但如果需要多个输出就不够用
    return arr;
}`,
  keyPoints: [
    '二级指针是指针的指针',
    '修改指针本身需要传指针的地址',
    '*arr 解引用得到原指针',
    '常用于函数返回动态分配的内存'
  ],
  commonMistakes: [
    '混淆 *arr 和 **arr 的使用',
    '忘记在 main 中传递 &myArray',
    '不理解为什么需要二级指针',
    '忘记 free 释放内存'
  ]
};
