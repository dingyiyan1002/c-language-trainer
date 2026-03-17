/**
 * 指针面试题 22 - 指针数组与字符串
 */
export const pointer_interview_22 = {
  title: '指针数组与字符串',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `#include <stdio.h>

int main() {
    char *fruits[] = {"Apple", "Banana", "Orange"};
    
    for (int i = 0; i < 3; i++) {
        printf("%s\n", fruits[i]);
    }
    
    // 排序
    for (int i = 0; i < 2; i++) {
        for (int j = i + 1; j < 3; j++) {
            if (strcmp(fruits[i], fruits[j]) > 0) {
                char *temp = fruits[i];
                fruits[i] = fruits[j];
                fruits[j] = temp;
            }
        }
    }
    return 0;
}`,
  answer: `指针数组存储字符串`,
  keyPoints: ['指针高级应用', '内存模型', '实际场景']
};
