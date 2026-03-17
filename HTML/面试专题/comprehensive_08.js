/**
 * 综合实战题 08 - 实现括号匹配
 * 难度：★★★★★
 */
export const comprehensive_08 = {
  title: '实现括号匹配',
  difficulty: '高级',
  question: `实现以下功能`,
  code: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

#define MAX_SIZE 100

bool is_valid_parentheses(const char *s) {
    char stack[MAX_SIZE];
    int top = -1;
    
    for (int i = 0; s[i]; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            stack[++top] = s[i];
        } else {
            if (top == -1) return false;
            char open = stack[top--];
            if ((open == '(' && s[i] != ')') ||
                (open == '[' && s[i] != ']') ||
                (open == '{' && s[i] != '}')) {
                return false;
            }
        }
    }
    return top == -1;
}`,
  answer: `栈的经典应用，检查括号匹配`,
  keyPoints: ['经典算法', '代码实现', '边界处理']
};
