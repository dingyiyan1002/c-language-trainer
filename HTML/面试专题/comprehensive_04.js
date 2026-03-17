/**
 * 综合实战题 04 - 实现 atoi
 * 难度：★★★
 */
export const comprehensive_04 = {
  title: '实现 atoi',
  difficulty: '中级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <ctype.h>
#include <limits.h>

int my_atoi(const char *str) {
    if (str == NULL) return 0;
    
    // 跳过空白
    while (isspace(*str)) str++;
    
    // 处理符号
    int sign = 1;
    if (*str == '-') { sign = -1; str++; }
    else if (*str == '+') { str++; }
    
    // 转换数字
    long result = 0;
    while (isdigit(*str)) {
        result = result * 10 + (*str - '0');
        if (result * sign > INT_MAX) return INT_MAX;
        if (result * sign < INT_MIN) return INT_MIN;
        str++;
    }
    
    return (int)(result * sign);
}`,
  answer: `处理符号、空白、溢出检查`,
  keyPoints: ['经典算法', '代码实现', '边界处理']
};
