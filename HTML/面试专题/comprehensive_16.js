/**
 * 综合实战题 16 - 实现 strdup
 */
export const comprehensive_16 = {
  title: '实现 strdup',
  difficulty: '中级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* my_strdup(const char *str) {
    if (str == NULL) return NULL;
    
    size_t len = strlen(str) + 1;
    char *dup = malloc(len);
    
    if (dup != NULL) {
        memcpy(dup, str, len);
    }
    
    return dup;  // 调用者负责 free
}`,
  answer: `字符串复制并分配内存`,
  keyPoints: ['标准库实现', '代码能力', '边界处理']
};
