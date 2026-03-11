// basics 章节数据
import type { Chapter } from '../types';

export const basics: Chapter = {
    id: 'basics',
    name: '基础语法入门',
    icon: 'Sprout',
    description: '从Hello World开始，掌握C语言基本结构',
    questionCount: 16,
    mode: 'practice',
    lessons: [
      {
        id: 'basics-1',
        title: 'C语言程序结构',
        content: `每个C程序都有一个固定的基本结构：

\`\`\`c
#include <stdio.h>  // 引入头文件

int main() {        // 程序入口
    printf("Hello World");  // 执行语句
    return 0;       // 返回值
}
\`\`\`

**#include** 用于引入头文件，<stdio.h> 包含了输入输出函数。
**main()** 是程序的入口点，程序从这里开始执行。
**return 0** 表示程序正常结束。`,
        keyPoints: ['#include引入头文件', 'main是入口函数', '语句以分号结尾', 'return 0表示正常结束']
      },
      {
        id: 'basics-2',
        title: 'printf输出函数',
        content: `printf用于向屏幕输出内容：

\`\`\`c
printf("文本内容");      // 输出文本
printf("数字：%d", 10);  // 输出整数
printf("换行\\n");       // \\n表示换行
\`\`\`

**常用转义字符：**
- \\n - 换行
- \\t - 制表符（Tab）
- \\\\ - 输出反斜杠本身`,
        keyPoints: ['printf输出到屏幕', '%d是整数占位符', '\\n是换行符']
      }
    ]
  };

export default basics;
