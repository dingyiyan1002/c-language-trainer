// level2 章节数据
import type { Chapter } from '../types';

export const level2: Chapter = {
    id: 'level2',
    name: 'Level 2 进阶真题',
    icon: 'Target',
    description: '指针基础、结构体、联合体、枚举进阶、函数指针、多文件编程 - 工作第一个月必备',
    questionCount: 100,
    mode: 'real',
    lessons: [
      {
        id: 'l2-pointer-basic',
        title: '指针基础',
        content: `指针是C语言的核心。

**指针操作：**
- &取地址
- *解引用
- 指针运算

**嵌入式场景：** 寄存器访问、内存映射`,
        keyPoints: ['指针声明', '解引用', '指针运算']
      },
      {
        id: 'l2-pointer-array',
        title: '指针与数组',
        content: `数组名是指针。

**等价关系：**
- a[i] 等价于 *(a+i)
- &a[i] 等价于 a+i

**嵌入式场景：** 缓冲区操作`,
        keyPoints: ['数组名', '指针算术', '下标访问']
      },
      {
        id: 'l2-struct',
        title: '结构体',
        content: `结构体组合不同类型数据。

**结构体操作：**
- 成员访问：. 和 ->
- 内存对齐
- 结构体数组

**嵌入式场景：** 协议帧、设备配置`,
        keyPoints: ['结构体定义', '成员访问', '内存对齐']
      },
      {
        id: 'l2-union',
        title: '联合体',
        content: `联合体共享内存空间。

**联合体特点：**
- 所有成员共享同一内存
- 大小等于最大成员
- 同一时刻只有一个成员有效

**嵌入式场景：** 数据解析、寄存器访问`,
        keyPoints: ['联合体定义', '内存共享', '数据解析']
      },
      {
        id: 'l2-func-pointer',
        title: '函数指针',
        content: `函数指针实现回调机制。

**函数指针用法：**
- 声明：返回类型 (*指针名)(参数)
- 回调函数
- 函数指针数组

**嵌入式场景：** 驱动框架、状态机`,
        keyPoints: ['函数指针声明', '回调函数', '函数指针数组']
      },
      {
        id: 'l2-multi-file',
        title: '多文件编程',
        content: `模块化开发基础。

**多文件组织：**
- .h头文件：声明
- .c源文件：实现
- extern声明

**嵌入式场景：** 驱动模块、库开发`,
        keyPoints: ['头文件', 'extern', '模块化']
      }
    ]
  };

export default level2;
