// arrays 章节数据
import type { Chapter } from '../types';

export const arrays: Chapter = {
    id: 'arrays',
    name: '数组',
    icon: 'BarChart3',
    description: '批量存储同类型数据，理解内存布局',
    questionCount: 11,
    mode: 'practice',
    lessons: [
      {
        id: 'arr-1',
        title: '一维数组',
        content: `数组存储多个同类型元素：

\`\`\`c
int arr[5] = {1, 2, 3, 4, 5};

// 访问元素（下标从0开始！）
arr[0] = 10;  // 第一个元素
arr[4] = 50;  // 第五个（最后）元素
// arr[5] 越界！错误！
\`\`\`

**重要：** 数组下标从0开始，最大下标是 长度-1`,
        keyPoints: ['下标从0开始', 'int arr[5]下标0-4', '越界访问是严重错误']
      },
      {
        id: 'arr-2',
        title: '字符串',
        content: `C语言字符串是字符数组，以\\0结尾：

\`\`\`c
char str[] = "Hello";
// 实际存储：H e l l o \\0 （6个字符）

strlen(str);  // 返回5（不含\\0）
sizeof(str);  // 返回6（含\\0）
\`\`\`

常用字符串函数（需要 #include <string.h>）：
- strlen: 长度
- strcpy: 复制
- strcmp: 比较`,
        keyPoints: ['字符串以\\0结尾', 'strlen不含\\0', '字符用单引号，字符串用双引号']
      }
    ]
  };

export default arrays;
