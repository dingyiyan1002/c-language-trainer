// operators 章节数据
import type { Chapter } from '../types';

export const operators: Chapter = {
    id: 'operators',
    name: '运算符与表达式',
    icon: 'Plus',
    description: '掌握各类运算符，理解表达式求值',
    questionCount: 12,
    mode: 'practice',
    lessons: [
      {
        id: 'op-1',
        title: '算术与比较运算符',
        content: `**算术运算符：**
\`\`\`c
+ - * /   // 加减乘除
%         // 取余数：10 % 3 = 1
\`\`\`

**比较运算符：** 返回1(真)或0(假)
\`\`\`c
==  // 等于（注意不是=）
!=  // 不等于
>  <  >=  <=  // 大小比较
\`\`\`

**特别注意：** \`=\` 是赋值，\`==\` 是比较！`,
        keyPoints: ['%取余数', '==是比较不是=', '整数除法截断小数']
      },
      {
        id: 'op-2',
        title: '自增自减与逻辑运算',
        content: `**自增自减：**
\`\`\`c
a++  // 先用后加：b = a++; (b得旧值)
++a  // 先加后用：b = ++a; (b得新值)
\`\`\`

**逻辑运算符：**
\`\`\`c
&&  // 与：两边都真才真
||  // 或：一边真就真
!   // 非：取反
\`\`\``,
        keyPoints: ['a++先用后加', '++a先加后用', '&&两真才真', '||一真就真']
      }
    ]
  };

export default operators;
