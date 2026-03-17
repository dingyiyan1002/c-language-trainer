/**
 * 结构体面试题 03 - 结构体传参（值传递 vs 指针传递）
 * 难度：⭐⭐⭐⭐
 * 考点：结构体作为函数参数、效率、修改原值
 */

export const struct_interview_003 = {
  title: '结构体传参方式对比',
  difficulty: '中级',
  question: `有以下三种结构体传参方式，请分析它们的区别和适用场景：

1. void func1(struct Student s)
2. void func2(struct Student *s)
3. void func3(const struct Student *s)`,
  answer: `三种方式对比：

1. 值传递：void func1(struct Student s)
   优点：函数内修改不影响原结构体
   缺点：大结构体拷贝开销大
   适用：小结构体、不需要修改

2. 指针传递：void func2(struct Student *s)
   优点：只传递地址，效率高
   优点：可以修改原结构体
   缺点：需要小心空指针
   适用：大结构体、需要修改

3. 常量指针：void func3(const struct Student *s)
   优点：只传递地址，效率高
   优点：保证不修改（只读访问）
   缺点：不能修改成员
   适用：大结构体、只读访问（最推荐）

示例：
struct Student {
    char name[50];
    int age;
    float scores[10];
};  // 约 100 字节

// 不推荐：每次调用拷贝 100 字节
void printStudent1(struct Student s) {
    printf("%s\\n", s.name);
}

// 推荐：只传递指针（4/8 字节）
void printStudent2(const struct Student *s) {
    printf("%s\\n", s->name);
}

// 需要修改时用非常量指针
void setAge(struct Student *s, int age) {
    s->age = age;
}`,
  keyPoints: [
    '值传递会拷贝整个结构体',
    '指针传递只传地址效率高',
    'const 保证只读安全',
    '大结构体优先用 const 指针'
  ],
  commonMistakes: [
    '大结构体使用值传递',
    '忘记加 const 导致意外修改',
    '指针传递不检查 NULL',
    '不知道三种方式的区别'
  ]
};
