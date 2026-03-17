/**
 * 预处理面试题 06 - 连接运算符
 */
export const preprocessor_interview_06 = {
  title: '连接运算符',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#define CONCAT(a,b) a##b
#define MAKE_FUNC(name) void name##_init(void)

MAKE_FUNC(myfunc);  // 展开为：void myfunc_init(void)

int main() {
    int CONCAT(var, 123) = 42;  // 展开为：int var123 = 42;
    return 0;
}`,
  answer: `## 运算符连接两个标记`,
  keyPoints: ['宏定义', '条件编译', '预处理技巧']
};
