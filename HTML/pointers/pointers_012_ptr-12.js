/**
 * 指针面试题 10 - 指针常见陷阱
 * 难度：⭐⭐⭐⭐⭐
 * 考点：返回局部变量地址、内存泄漏、悬空指针
 */

export const pointer_interview_010 = {
  title: '指针常见陷阱',
  difficulty: '高级',
  question: `以下代码各有什么问题？

代码 1:
int* getPointer() {
    int local = 100;
    return &local;
}

代码 2:
void leak() {
    int *p = malloc(sizeof(int) * 100);
    *p = 42;
    // 忘记 free
}

代码 3:
int *p = malloc(sizeof(int));
*p = 10;
free(p);
printf("%d\\n", *p);`,
  answer: `问题 1：返回局部变量地址
int* getPointer() {
    int local = 100;
    return &local;  // 错误！
}
问题：local 是栈变量，函数返回后内存被回收
返回的指针成为悬空指针（dangling pointer）
修复：使用 static 或 malloc
static int local = 100;  // 静态存储期
或 int *local = malloc(sizeof(int));

问题 2：内存泄漏
void leak() {
    int *p = malloc(sizeof(int) * 100);
    *p = 42;
    // 忘记 free - 内存泄漏！
}
问题：分配的内存没有释放
修复：使用后立即 free
free(p);
p = NULL;

问题 3：使用已释放的内存
int *p = malloc(sizeof(int));
*p = 10;
free(p);
printf("%d\\n", *p);  // 错误！使用已释放内存
问题：free 后继续访问是未定义行为
修复：free 后立即设为 NULL
free(p);
p = NULL;
if (p != NULL) printf("%d\\n", *p);  // 安全检查

常见陷阱总结：
1. 返回局部变量地址
2. 忘记 free 导致内存泄漏
3. free 后继续使用（悬空指针）
4. 重复 free
5. 越界访问`,
  keyPoints: [
    '不能返回局部变量地址',
    'malloc 必须配对 free',
    'free 后指针变悬空',
    '使用后立即设为 NULL'
  ],
  commonMistakes: [
    '返回栈变量地址',
    '忘记释放动态内存',
    'free 后继续使用指针',
    '对同一指针多次 free',
    '数组越界访问'
  ]
};
