/**
 * 综合实战题 06 - 实现 memcpy
 * 难度：★★★★★
 */
export const comprehensive_06 = {
  title: '实现 memcpy',
  difficulty: '高级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void* my_memcpy(void *dst, const void *src, size_t n) {
    if (dst == NULL || src == NULL) return NULL;
    
    unsigned char *d = (unsigned char*)dst;
    const unsigned char *s = (const unsigned char*)src;
    
    // 处理重叠情况（从后往前复制）
    if (d < s || d >= s + n) {
        while (n--) *d++ = *s++;
    } else {
        d += n;
        s += n;
        while (n--) *--d = *--s;
    }
    
    return dst;
}`,
  answer: `处理内存重叠，是 memmove 的简化版`,
  keyPoints: ['经典算法', '代码实现', '边界处理']
};
