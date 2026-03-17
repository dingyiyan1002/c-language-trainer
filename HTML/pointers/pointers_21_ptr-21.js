/**
 * 指针面试题 21 - 指针与二维数组
 */
export const pointer_interview_21 = {
  title: '指针与二维数组',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>

int main() {
    int arr[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };
    
    // 指向数组的指针
    int (*p)[4] = arr;
    
    printf("%d\n", *(*(p + 1) + 2));  // 输出 7
    printf("%d\n", p[1][2]);          // 输出 7
    
    return 0;
}`,
  answer: `二维数组与指针的关系`,
  keyPoints: ['指针高级应用', '内存模型', '实际场景']
};
