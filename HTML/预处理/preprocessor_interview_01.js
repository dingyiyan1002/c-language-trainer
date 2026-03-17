/**
 * 预处理面试题 01 - 宏定义基础
 */
export const preprocessor_interview_01 = {
  title: '宏定义基础',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `#define MAX(a,b) ((a) > (b) ? (a) : (b))
#define SQUARE(x) ((x) * (x))

int main() {
    int a = 5, b = 10;
    printf("Max: %d\n", MAX(a, b));
    printf("Square: %d\n", SQUARE(5));
    return 0;
}`,
  answer: `宏定义注意括号，避免优先级问题`,
  keyPoints: ['宏定义', '条件编译', '预处理技巧']
};
