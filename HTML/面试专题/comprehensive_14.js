/**
 * 综合实战题 14 - 实现 atoi 完整版
 */
export const comprehensive_14 = {
  title: '实现 atoi 完整版',
  difficulty: '高级',
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
        int digit = *str - '0';
        
        // 检查溢出
        if (result * 10 + digit > INT_MAX) {
            return sign == 1 ? INT_MAX : INT_MIN;
        }
        
        result = result * 10 + digit;
        str++;
    }
    
    return (int)(result * sign);
}`,
  answer: `完整 atoi 实现，处理溢出`,
  keyPoints: ['标准库实现', '代码能力', '边界处理']
};
