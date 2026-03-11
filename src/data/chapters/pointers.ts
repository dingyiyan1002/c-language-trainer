// pointers 章节数据
import type { Chapter } from '../types';

export const pointers: Chapter = {
    id: 'pointers',
    name: '指针陷阱',
    icon: 'Finger',
    description: '指针是C的灵魂，也是最大的坑',
    questionCount: 16,
    mode: 'practice',
    lessons: [
      {
        id: 'ptr-1',
        title: '指针基础',
        content: `指针存储变量的**内存地址**：

\`\`\`c
int a = 10;
int *p = &a;  // p存储a的地址

// & 取地址
// * 解引用（获取地址上的值）

printf("%d", *p);  // 输出10
*p = 20;           // 通过指针修改a
printf("%d", a);   // 输出20
\`\`\``,
        keyPoints: ['&取地址', '*解引用', '指针存的是地址', '通过指针可以修改原变量']
      },
      {
        id: 'ptr-2',
        title: '常见指针错误',
        content: `**野指针：** 未初始化就使用
\`\`\`c
int *p;      // p是垃圾值
*p = 10;     // 危险！写入随机地址
\`\`\`

**空指针解引用：**
\`\`\`c
int *p = NULL;
*p = 10;     // 程序崩溃！
\`\`\`

**悬空指针：** 指向已释放的内存
\`\`\`c
int *p = malloc(sizeof(int));
free(p);
*p = 10;     // 危险！内存已释放
\`\`\``,
        keyPoints: ['使用前必须初始化', '用前检查是否NULL', 'free后不要再使用']
      }
    ]
  };

export default pointers;
