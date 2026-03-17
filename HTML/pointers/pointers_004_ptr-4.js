/**
 * 指针面试题 02 - 空指针与野指针
 * 难度：⭐⭐⭐⭐
 * 考点：NULL 指针、野指针、段错误
 */

export const pointer_interview_002 = {
  title: '空指针与野指针',
  difficulty: '中级',
  question: `以下代码有什么问题？如何修复？

#include <stdio.h>

int main() {
    int *p;
    *p = 10;
    
    int *q = NULL;
    *q = 20;
    
    return 0;
}`,
  answer: `问题分析：
1. int *p; 定义了一个未初始化的指针（野指针）
   - p 指向随机内存地址
   - *p = 10 会写入未知内存，可能导致程序崩溃或数据损坏

2. int *q = NULL; 定义了空指针
   - NULL 表示指针不指向任何有效内存
   - *q = 20 会访问地址 0，导致段错误（Segmentation Fault）

修复方法：
#include <stdio.h>
#include <stdlib.h>

int main() {
    // 方法 1：指向已存在的变量
    int a;
    int *p = &a;
    *p = 10;  // 安全
    
    // 方法 2：动态分配内存
    int *q = (int*)malloc(sizeof(int));
    if (q != NULL) {
        *q = 20;  // 安全
        printf("*q = %d\\n", *q);
        free(q);  // 记得释放内存
        q = NULL; // 避免成为野指针
    }
    
    return 0;
}

核心要点：
- 指针使用前必须初始化
- NULL 指针不能解引用
- 动态分配的内存使用后要 free
- free 后将指针设为 NULL 是好习惯`,
  keyPoints: [
    '野指针：未初始化的指针',
    '空指针：值为 NULL 的指针',
    '两者都不能直接解引用',
    '动态内存需要 malloc 和 free 配对'
  ],
  commonMistakes: [
    '使用未初始化的指针',
    '解引用 NULL 指针',
    'free 后忘记将指针设为 NULL',
    '不检查 malloc 返回值'
  ]
};
