// control 章节数据
import type { Chapter } from '../types';

export const control: Chapter = {
    id: 'control',
    name: '控制流语句',
    icon: 'Shuffle',
    description: '条件判断、循环控制，程序的核心逻辑',
    questionCount: 17,
    mode: 'practice',
    lessons: [
      {
        id: 'ctrl-1',
        title: 'if-else条件判断',
        content: `根据条件选择执行不同代码：

\`\`\`c
if (score >= 60) {
    printf("及格");
} else if (score >= 40) {
    printf("补考");
} else {
    printf("重修");
}
\`\`\`

**注意：** 条件表达式放在小括号()内，语句块用大括号{}包围。`,
        keyPoints: ['条件放在()内', '语句块用{}包围', 'else if处理多条件']
      },
      {
        id: 'ctrl-2',
        title: 'for循环',
        content: `for循环的三个部分：

\`\`\`c
for (初始化; 条件; 更新) {
    // 循环体
}

// 例：输出0到4
for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}
// 输出：0 1 2 3 4
\`\`\`

**执行顺序：** 初始化 → 判断条件 → 执行循环体 → 更新 → 判断条件 → ...`,
        keyPoints: ['for(初始化;条件;更新)', 'i<5会循环5次(0到4)', 'break跳出循环', 'continue跳过本次']
      },
      {
        id: 'ctrl-3',
        title: 'while循环',
        content: `while先判断后执行：

\`\`\`c
int i = 0;
while (i < 5) {
    printf("%d ", i);
    i++;
}
\`\`\`

do-while先执行后判断（至少执行一次）：

\`\`\`c
do {
    printf("至少执行一次");
} while (条件);  // 注意分号
\`\`\``,
        keyPoints: ['while先判断后执行', 'do-while至少执行一次', 'while可能一次不执行']
      }
    ]
  };

export default control;
