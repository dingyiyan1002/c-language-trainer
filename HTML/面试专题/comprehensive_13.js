/**
 * 综合实战题 13 - 实现 strstr
 */
export const comprehensive_13 = {
  title: '实现 strstr',
  difficulty: '高级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <string.h>

char* my_strstr(const char *haystack, const char *needle) {
    if (haystack == NULL || needle == NULL) return NULL;
    if (*needle == '\0') return (char*)haystack;
    
    for (const char *h = haystack; *h != '\0'; h++) {
        const char *hi = h;
        const char *ni = needle;
        
        while (*hi != '\0' && *ni != '\0' && *hi == *ni) {
            hi++;
            ni++;
        }
        
        if (*ni == '\0') return (char*)h;
    }
    
    return NULL;
}`,
  answer: `子串查找，朴素匹配算法`,
  keyPoints: ['标准库实现', '代码能力', '边界处理']
};
