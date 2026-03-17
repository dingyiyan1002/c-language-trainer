/**
 * 调试规范题 02 - 断言 assert
 */
export const debug_interview_02 = {
  title: '断言 assert',
  difficulty: '中级',
  question: `学习调试技巧`,
  code: `#include <stdio.h>
#include <assert.h>

int divide(int a, int b) {
    assert(b != 0);  // 检查除数不为 0
    return a / b;
}

int main() {
    printf("%d\n", divide(10, 2));
    // divide(10, 0);  // 会触发断言失败
    return 0;
}`,
  answer: `assert 用于检查前提条件`,
  keyPoints: ['调试方法', '开发规范', '问题排查']
};
