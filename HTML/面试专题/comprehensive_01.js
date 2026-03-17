/**
 * 综合实战题 01 - 实现 strcpy
 * 难度：★★★
 */
export const comprehensive_01 = {
  title: '实现 strcpy',
  difficulty: '中级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>

char* my_strcpy(char *dst, const char *src) {
    if (dst == NULL || src == NULL) return NULL;
    
    char *original_dst = dst;
    while ((*dst++ = *src++) != '\0');
    
    return original_dst;
}

int main() {
    char src[] = "Hello, World!";
    char *dst = malloc(strlen(src) + 1);
    my_strcpy(dst, src);
    printf("%s\n", dst);
    free(dst);
    return 0;
}`,
  answer: `返回值支持链式调用，注意检查 NULL`,
  keyPoints: ['经典算法', '代码实现', '边界处理']
};
