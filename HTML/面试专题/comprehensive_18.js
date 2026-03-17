/**
 * 综合实战题 18 - 实现 bsearch
 */
export const comprehensive_18 = {
  title: '实现 bsearch',
  difficulty: '高级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    int arr[] = {1, 3, 5, 7, 9, 11, 13};
    int key = 7;
    
    int *result = bsearch(&key, arr, 7, sizeof(int), compare);
    
    if (result != NULL) {
        printf("Found %d at index %ld\n", 
               key, result - arr);
    } else {
        printf("Not found\n");
    }
    
    return 0;
}`,
  answer: `二分查找标准库函数`,
  keyPoints: ['标准库实现', '代码能力', '边界处理']
};
