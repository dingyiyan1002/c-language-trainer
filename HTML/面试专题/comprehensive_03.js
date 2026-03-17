/**
 * 综合实战题 03 - 实现 strcat
 * 难度：★★★
 */
export const comprehensive_03 = {
  title: '实现 strcat',
  difficulty: '中级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* my_strcat(char *dst, const char *src) {
    if (dst == NULL || src == NULL) return NULL;
    
    char *original_dst = dst;
    
    // 找到 dst 末尾
    while (*dst) dst++;
    
    // 复制 src
    while ((*dst++ = *src++) != '\0');
    
    return original_dst;
}

int main() {
    char *dst = malloc(100);
    strcpy(dst, "Hello");
    my_strcat(dst, ", World!");
    printf("%s\n", dst);
    free(dst);
    return 0;
}`,
  answer: `先找到 dst 末尾，再追加 src`,
  keyPoints: ['经典算法', '代码实现', '边界处理']
};
