/**
 * 调试规范题 01 - printf 调试法
 */
export const debug_interview_01 = {
  title: 'printf 调试法',
  difficulty: '入门',
  question: `学习调试技巧`,
  code: `#include <stdio.h>

int factorial(int n) {
    printf("factorial(%d) called\n", n);
    if (n <= 1) {
        printf("returning 1\n");
        return 1;
    }
    int result = n * factorial(n - 1);
    printf("factorial(%d) = %d\n", n, result);
    return result;
}`,
  answer: `最简单的调试方法：打印日志`,
  keyPoints: ['调试方法', '开发规范', '问题排查']
};
