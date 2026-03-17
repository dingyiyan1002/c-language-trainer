/**
 * 综合实战题 02 - 实现 strcmp
 * 难度：★★★
 */
export const comprehensive_02 = {
  title: '实现 strcmp',
  difficulty: '中级',
  question: `实现以下功能`,
  code: `#include <stdio.h>

int my_strcmp(const char *s1, const char *s2) {
    while (*s1 && (*s1 == *s2)) {
        s1++;
        s2++;
    }
    return *(unsigned char*)s1 - *(unsigned char*)s2;
}

int main() {
    printf("%d\n", my_strcmp("abc", "abc"));  // 0
    printf("%d\n", my_strcmp("abc", "abd"));  // 负数
    printf("%d\n", my_strcmp("abd", "abc"));  // 正数
    return 0;
}`,
  answer: `返回值：0 相等，负数 s1<s2，正数 s1>s2`,
  keyPoints: ['经典算法', '代码实现', '边界处理']
};
