/**
 * 调试规范题 03 - 条件编译调试
 */
export const debug_interview_03 = {
  title: '条件编译调试',
  difficulty: '中级',
  question: `学习调试技巧`,
  code: `#include <stdio.h>

#define DEBUG 1

int main() {
    int x = 10;
    
#ifdef DEBUG
    printf("[DEBUG] x = %d\n", x);
#endif
    
    x = 20;
    
#ifdef DEBUG
    printf("[DEBUG] x = %d\n", x);
#endif
    
    return 0;
}`,
  answer: `#ifdef DEBUG 控制调试输出`,
  keyPoints: ['调试方法', '开发规范', '问题排查']
};
