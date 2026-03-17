/**
 * 预处理面试题 05 - 字符串化运算符
 */
export const preprocessor_interview_05 = {
  title: '字符串化运算符',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#define STRINGIFY(x) #x
#define TOSTRING(x) STRINGIFY(x)
#define LINE __LINE__

int main() {
    printf("Line: %s\n", TOSTRING(LINE));
    printf("Value: %s\n", STRINGIFY(123));
    return 0;
}`,
  answer: `# 运算符将宏参数转换为字符串`,
  keyPoints: ['宏定义', '条件编译', '预处理技巧']
};
