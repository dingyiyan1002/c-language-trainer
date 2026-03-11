// functions 章节数据
import type { Chapter } from '../types';

export const functions: Chapter = {
    id: 'functions',
    name: '函数',
    icon: 'Settings️',
    description: '代码复用的核心，理解函数调用机制',
    questionCount: 11,
    mode: 'practice',
    lessons: [
      {
        id: 'func-1',
        title: '函数定义与调用',
        content: `函数的基本结构：

\`\`\`c
返回类型 函数名(参数列表) {
    // 函数体
    return 返回值;
}

// 例：计算两数之和
int add(int a, int b) {
    return a + b;
}

// 调用
int result = add(3, 5);  // result = 8
\`\`\``,
        keyPoints: ['返回类型写在函数名前', 'void表示无返回值', '参数用逗号分隔']
      },
      {
        id: 'func-2',
        title: '值传递',
        content: `C语言函数参数是**值传递**——复制一份：

\`\`\`c
void change(int x) {
    x = 100;  // 只修改副本
}

int a = 5;
change(a);
// a仍然是5！
\`\`\`

想要修改原变量，需要传递**指针**（后面学习）。`,
        keyPoints: ['参数是值的副本', '修改形参不影响实参', '要修改原值需用指针']
      }
    ]
  };

export default functions;
