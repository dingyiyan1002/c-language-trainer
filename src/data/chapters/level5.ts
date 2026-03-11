// level5 章节数据
import type { Chapter } from '../types';

export const level5: Chapter = {
    id: 'level5',
    name: 'Level 5 专家真题',
    icon: 'Target',
    description: '内核编程、驱动开发、性能优化、安全编程、架构设计 - 资深工程师必备',
    questionCount: 50,
    mode: 'real',
    lessons: [
      {
        id: 'l5-kernel',
        title: '内核编程基础',
        content: `Linux内核模块开发。

**内核编程：**
- 模块加载卸载
- 内核空间与用户空间
- 内核API

**嵌入式场景：** 驱动开发`,
        keyPoints: ['内核模块', '内核空间', '内核API']
      },
      {
        id: 'l5-driver',
        title: '驱动开发',
        content: `字符设备驱动开发。

**驱动框架：**
- file_operations
- 设备注册
- 中断处理

**嵌入式场景：** 硬件驱动`,
        keyPoints: ['file_operations', '设备注册', '中断处理']
      },
      {
        id: 'l5-perf',
        title: '性能优化',
        content: `代码性能优化技术。

**优化技术：**
- 算法优化
- 内存访问优化
- 编译器优化

**嵌入式场景：** 实时性要求`,
        keyPoints: ['算法优化', '内存优化', '编译优化']
      },
      {
        id: 'l5-security',
        title: '安全编程',
        content: `安全编码实践。

**安全问题：**
- 缓冲区溢出
- 整数溢出
- 内存安全

**嵌入式场景：** 安全关键系统`,
        keyPoints: ['缓冲区溢出', '整数溢出', '安全编码']
      },
      {
        id: 'l5-arch',
        title: '架构设计',
        content: `软件架构设计原则。

**设计原则：**
- 模块化
- 分层设计
- 接口设计

**嵌入式场景：** 系统架构`,
        keyPoints: ['模块化', '分层设计', '接口设计']
      }
    ]
  };

export default level5;
