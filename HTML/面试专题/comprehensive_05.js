/**
 * 综合实战题 05 - 实现 memset
 * 难度：★★★
 */
export const comprehensive_05 = {
  title: '实现 memset',
  difficulty: '中级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <string.h>

void* my_memset(void *ptr, int value, size_t num) {
    if (ptr == NULL) return NULL;
    
    unsigned char *p = (unsigned char*)ptr;
    unsigned char v = (unsigned char)value;
    
    while (num--) {
        *p++ = v;
    }
    
    return ptr;
}

int main() {
    char buffer[10];
    my_memset(buffer, 'A', 10);
    buffer[9] = '\0';
    printf("%s\n", buffer);  // AAAAAAAAA
    return 0;
}`,
  answer: `逐字节设置，返回原指针`,
  keyPoints: ['经典算法', '代码实现', '边界处理']
};
