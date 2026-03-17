/**
 * 预处理面试题 03 - #error 和#warning
 */
export const preprocessor_interview_03 = {
  title: '#error 和#warning',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `#ifndef __STDC_VERSION__
#error "This code requires C99 or later"
#endif

#if __STDC_VERSION__ < 201112L
#warning "Consider upgrading to C11"
#endif

int main() { return 0; }`,
  answer: `编译时检查和提示`,
  keyPoints: ['宏定义', '条件编译', '预处理技巧']
};
