// level3 章节数据
import type { Chapter } from '../types';

export const level3: Chapter = {
    id: 'level3',
    name: 'Level 3 核心真题',
    icon: 'Target',
    description: '内存管理、文件操作、位操作进阶、预处理进阶、复杂声明 - 工作三个月核心技能',
    questionCount: 150,
    mode: 'real',
    lessons: [
      {
        id: 'l3-memory',
        title: '动态内存管理',
        content: `堆内存分配与释放。

**内存函数：**
- malloc：分配
- free：释放
- calloc：清零分配
- realloc：重新分配

**嵌入式场景：** 动态数据结构`,
        keyPoints: ['malloc', 'free', '内存泄漏']
      },
      {
        id: 'l3-file',
        title: '文件操作',
        content: `文件读写操作。

**文件函数：**
- fopen/fclose：打开关闭
- fread/fwrite：读写
- fseek/ftell：定位

**嵌入式场景：** 配置文件、日志`,
        keyPoints: ['fopen', 'fread', 'fwrite']
      },
      {
        id: 'l3-bit-advanced',
        title: '位操作进阶',
        content: `复杂位操作技巧。

**位操作技巧：**
- 位域提取
- 位域设置
- 位反转

**嵌入式场景：** 寄存器配置、协议解析`,
        keyPoints: ['位域提取', '位掩码', '位操作技巧']
      },
      {
        id: 'l3-preprocessor',
        title: '预处理进阶',
        content: `高级预处理技术。

**预处理技巧：**
- 宏展开
- 条件编译
- #和##运算符

**嵌入式场景：** 配置管理、调试开关`,
        keyPoints: ['宏展开', '##运算符', '条件编译']
      },
      {
        id: 'l3-complex-decl',
        title: '复杂声明解析',
        content: `理解复杂C声明。

**声明规则：**
- 右左法则
- 优先级：() > [] > *
- typedef简化

**嵌入式场景：** 理解库函数声明`,
        keyPoints: ['右左法则', '声明优先级', 'typedef']
      }
    ]
  };

export default level3;
