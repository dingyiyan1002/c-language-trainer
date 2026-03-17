/**
 * 结构体面试题 03 - 结构体传参（值传递 vs 指针）
 * 难度：⭐⭐⭐⭐
 * 考点：函数参数传递、效率对比
 */

export const struct_interview_03 = {
  title: '结构体传参方式对比',
  difficulty: '高级',
  question: `以下三种传参方式有什么区别？推荐哪种？

struct LargeStruct {
    int data[1000];
    double values[500];
};

// 方式 1：值传递
void func1(struct LargeStruct s) {
    s.data[0] = 100;  // 只修改副本
}

// 方式 2：指针传递
void func2(struct LargeStruct *s) {
    s->data[0] = 100;  // 修改原结构体
}

// 方式 3：const 指针传递
void func3(const struct LargeStruct *s) {
    // s->data[0] = 100;  // 错误！不能修改
    printf("%d\\n", s->data[0]);  // 只读访问
}`,
  answer: `三种方式对比：

方式 1（值传递）：
- 复制整个结构体，开销大
- 函数内修改不影响原结构体
- 适合小结构体

方式 2（指针传递）：
- 只传递地址，效率高
- 函数内可以修改原结构体
- 适合大结构体或需要修改时

方式 3（const 指针传递）⭐推荐：
- 只传递地址，效率高
- 保证不修改原结构体
- 适合大结构体只读访问

推荐：
- 小结构体（<4 字节）：值传递
- 大结构体只读：const 指针
- 大结构体需修改：指针`,
  keyPoints: [
    '值传递会复制整个结构体',
    '指针传递只传地址，效率高',
    'const 指针保证只读安全',
    '大结构体优先用指针传递'
  ],
  commonMistakes: [
    '大结构体用值传递导致性能问题',
    '需要修改时用了 const 指针',
    '不需要修改时没用 const'
  ]
};