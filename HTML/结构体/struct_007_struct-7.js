/**
 * 结构体面试题 02 - 结构体指针与箭头运算符
 * 难度：⭐⭐⭐
 * 考点：结构体指针、-> 运算符
 */

export const struct_interview_002 = {
  title: '结构体指针与箭头运算符',
  difficulty: '中级',
  question: `有以下代码：

struct Point {
    int x;
    int y;
};

struct Point p1 = {10, 20};
struct Point *p2 = &p1;

请问以下访问方式哪些正确？
1. p1.x
2. (*p2).x
3. p2->x
4. *p2.x`,
  answer: `正确答案：1、2、3 正确，4 错误

详解：
1. p1.x ✓
   - 直接通过结构体变量访问成员

2. (*p2).x ✓
   - 先解引用指针得到结构体，再访问成员
   - 括号必须，因为.优先级高于*

3. p2->x ✓
   - 箭头运算符是 (*p).x 的简写
   - 推荐写法，更清晰

4. *p2.x ✗
   - 错误！.优先级高于*
   - 实际解析为 *(p2.x)
   - p2 是指针，没有.x 成员

示例代码：
#include <stdio.h>

struct Point {
    int x;
    int y;
};

void printPoint(struct Point *p) {
    // 函数内使用箭头运算符
    printf("(%d, %d)\\n", p->x, p->y);
}

int main() {
    struct Point p1 = {10, 20};
    struct Point *p2 = &p1;
    
    printf("%d\\n", p1.x);      // 10
    printf("%d\\n", (*p2).x);   // 10
    printf("%d\\n", p2->x);     // 10
    
    printPoint(&p1);  // (10, 20)
    
    return 0;
}`,
  keyPoints: [
    '-> 是 (*p). 的简写',
    '.优先级高于*',
    '指针访问成员用 ->',
    '变量访问成员用.'
  ],
  commonMistakes: [
    '忘记 (*p).x 需要括号',
    '错误使用 *p.x',
    '混淆.和 -> 的使用场景',
    '不知道 -> 的优先级'
  ]
};
