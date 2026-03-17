/**
 * 综合实战题 15 - 实现 memmove
 */
export const comprehensive_15 = {
  title: '实现 memmove',
  difficulty: '高级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>

void* my_memmove(void *dst, const void *src, size_t n) {
    if (dst == NULL || src == NULL) return NULL;
    
    unsigned char *d = (unsigned char*)dst;
    const unsigned char *s = (const unsigned char*)src;
    
    if (d < s) {
        // 从前往后复制
        while (n--) *d++ = *s++;
    } else {
        // 从后往前复制
        d += n;
        s += n;
        while (n--) *--d = *--s;
    }
    
    return dst;
}`,
  answer: `处理内存重叠的复制`,
  keyPoints: ['标准库实现', '代码能力', '边界处理']
};
