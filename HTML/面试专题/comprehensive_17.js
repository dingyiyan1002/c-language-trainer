/**
 * 综合实战题 17 - 实现 qsort 比较函数
 */
export const comprehensive_17 = {
  title: '实现 qsort 比较函数',
  difficulty: '高级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>

// 升序比较函数
int compare_asc(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

// 降序比较函数
int compare_desc(const void *a, const void *b) {
    return (*(int*)b - *(int*)a);
}

// 字符串比较函数
int compare_str(const void *a, const void *b) {
    return strcmp(*(char**)a, *(char**)b);
}

int main() {
    int arr[] = {5, 2, 9, 1, 7};
    qsort(arr, 5, sizeof(int), compare_asc);
    
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`,
  answer: `qsort 比较函数实现`,
  keyPoints: ['标准库实现', '代码能力', '边界处理']
};
