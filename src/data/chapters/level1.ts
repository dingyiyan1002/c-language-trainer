// level1 章节数据
import type { Chapter } from '../types';

export const level1: Chapter = {
    id: 'level1',
    name: 'Level 1 入门真题',
    icon: 'Target',
    description: 'C语言基础：printf、变量、运算符、条件、循环、函数、数组、宏、字符串、作用域 - 工作第一周就会用到',
    questionCount: 80,
    mode: 'real',
    lessons: [
      {
        id: 'l1-printf',
        title: 'printf格式化输出',
        content: `调试打印是嵌入式开发最基本的技能。

**常用格式符：**
- %d/%i：有符号十进制
- %u：无符号十进制
- %x/%X：十六进制
- %p：指针地址
- %s：字符串

**嵌入式场景：** 打印寄存器值、调试信息、日志输出`,
        keyPoints: ['格式符', '十六进制输出', '调试打印']
      },
      {
        id: 'l1-types',
        title: '整型类型与溢出',
        content: `stdint类型是嵌入式开发必备。

**常用类型：**
- uint8_t：无符号8位（0~255）
- int8_t：有符号8位（-128~127）
- uint16_t：无符号16位

**嵌入式场景：** 传感器数据、寄存器值、计数器`,
        keyPoints: ['stdint类型', '溢出', '数据范围']
      },
      {
        id: 'l1-condition',
        title: '条件判断',
        content: `设备状态判断、错误处理。

**if-else规范：**
- 必须加花括号{}
- 先处理错误情况

**嵌入式场景：** 错误码判断、状态机`,
        keyPoints: ['if-else规范', 'switch-case', '错误处理']
      },
      {
        id: 'l1-loop',
        title: '循环',
        content: `数据处理、超时等待。

**嵌入式场景：** 数据采集、超时检测、缓冲区处理`,
        keyPoints: ['for循环', 'while循环', '超时处理']
      },
      {
        id: 'l1-function',
        title: '函数',
        content: `模块化设计基础。

**返回值规范：**
- 0：成功
- 负数：错误码

**嵌入式场景：** 驱动接口、设备操作`,
        keyPoints: ['函数设计', '返回值规范', '错误码']
      },
      {
        id: 'l1-bit',
        title: '位运算',
        content: `嵌入式最常用操作。

**位运算符：**
- &：按位与（清零位）
- |：按位或（设置位）
- ^：按位异或（翻转位）

**嵌入式场景：** 寄存器配置、标志位操作`,
        keyPoints: ['位运算', '掩码操作', '寄存器配置']
      },
      {
        id: 'l1-macro',
        title: '宏和预处理',
        content: `代码配置和优化。

**常用宏：**
- #define：常量定义
- BIT(n)：位掩码

**嵌入式场景：** 寄存器配置、调试开关`,
        keyPoints: ['#define', '条件编译', '位操作宏']
      }
    ]
  };

export default level1;
