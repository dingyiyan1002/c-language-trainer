/**
 * 综合实战题 11 - 实现 strncpy
 */
export const comprehensive_11 = {
  title: '实现 strncpy',
  difficulty: '中级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>

char* my_strncpy(char *dst, const char *src, size_t n) {
    if (dst == NULL || src == NULL) return NULL;
    
    char *original_dst = dst;
    size_t i;
    
    for (i = 0; i < n && src[i] != '\0'; i++) {
        dst[i] = src[i];
    }
    
    // 填充剩余部分为\0
    for (; i < n; i++) {
        dst[i] = '\0';
    }
    
    return original_dst;
}`,
  answer: `安全字符串复制，注意填充\0`,
  keyPoints: ['标准库实现', '代码能力', '边界处理']
};
