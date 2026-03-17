/**
 * 综合实战题 12 - 实现 strchr
 */
export const comprehensive_12 = {
  title: '实现 strchr',
  difficulty: '中级',
  question: `实现以下功能`,
  code: `#include <stdio.h>

char* my_strchr(const char *str, int ch) {
    if (str == NULL) return NULL;
    
    while (*str != '\0') {
        if (*str == (char)ch) return (char*)str;
        str++;
    }
    
    // 检查是否是\0
    if ((char)ch == '\0') return (char*)str;
    
    return NULL;
}`,
  answer: `查找字符第一次出现的位置`,
  keyPoints: ['标准库实现', '代码能力', '边界处理']
};
