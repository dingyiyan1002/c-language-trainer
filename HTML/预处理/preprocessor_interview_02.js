/**
 * 预处理面试题 02 - 条件编译
 */
export const preprocessor_interview_02 = {
  title: '条件编译',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `#define DEBUG 1

int main() {
#ifdef DEBUG
    printf("Debug mode\n");
#else
    printf("Release mode\n");
#endif

#if DEBUG > 0
    printf("Debug enabled\n");
#endif
    return 0;
}`,
  answer: `#ifdef #ifndef #if 条件编译`,
  keyPoints: ['宏定义', '条件编译', '预处理技巧']
};
