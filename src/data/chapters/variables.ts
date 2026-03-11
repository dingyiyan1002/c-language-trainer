// variables 章节数据
import type { Chapter } from '../types';

export const variables: Chapter = {
    id: 'variables',
    name: '变量与数据类型',
    icon: 'Package',
    description: '学会声明变量，理解不同数据类型',
    questionCount: 17,
    mode: 'practice',
    lessons: [
      {
        id: 'var-1',
        title: '变量声明与初始化',
        content: `变量是用来存储数据的"容器"：

\`\`\`c
int age = 20;       // 整型变量
float price = 9.9;  // 浮点型
char grade = 'A';   // 字符型
\`\`\`

**声明语法：** \`类型 变量名 = 初始值;\`

**命名规则：**
- 只能包含字母、数字、下划线
- 必须以字母或下划线开头
- 不能使用关键字（如int、if等）`,
        keyPoints: ['int存整数', 'float存小数', 'char存单个字符', '变量名不能数字开头']
      },
      {
        id: 'var-2',
        title: '格式化输入输出',
        content: `使用格式说明符进行输入输出：

\`\`\`c
int num;
scanf("%d", &num);     // 输入整数，注意&
printf("%d", num);     // 输出整数

// 常用格式说明符
%d - 整数    %f - 浮点数
%c - 字符    %s - 字符串
\`\`\`

**重要：scanf读取变量时需要加 & 取地址符！**`,
        keyPoints: ['scanf需要&取地址', '%d对应int', '%f对应float', '%c对应char']
      }
    ]
  };

export default variables;
