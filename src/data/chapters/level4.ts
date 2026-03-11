// level4 章节数据
import type { Chapter } from '../types';

export const level4: Chapter = {
    id: 'level4',
    name: 'Level 4 高级真题',
    icon: 'Target',
    description: '多线程编程、进程通信、网络编程、信号处理、高级指针 - 工作半年进阶技能',
    questionCount: 120,
    mode: 'real',
    lessons: [
      {
        id: 'l4-thread',
        title: '多线程编程',
        content: `线程创建与同步。

**线程函数：**
- pthread_create：创建
- pthread_join：等待
- mutex：互斥锁

**嵌入式场景：** 并发处理`,
        keyPoints: ['pthread', 'mutex', '线程同步']
      },
      {
        id: 'l4-process',
        title: '进程通信',
        content: `进程间通信机制。

**IPC机制：**
- 管道
- 共享内存
- 消息队列
- 信号量

**嵌入式场景：** 多进程协作`,
        keyPoints: ['管道', '共享内存', '信号量']
      },
      {
        id: 'l4-network',
        title: '网络编程',
        content: `Socket编程基础。

**Socket函数：**
- socket：创建
- bind：绑定
- listen/accept：监听
- send/recv：收发

**嵌入式场景：** 设备联网`,
        keyPoints: ['socket', 'TCP/UDP', '网络通信']
      },
      {
        id: 'l4-signal',
        title: '信号处理',
        content: `信号机制与处理。

**信号函数：**
- signal：注册处理
- sigaction：高级处理
- kill：发送信号

**嵌入式场景：** 异步事件处理`,
        keyPoints: ['signal', 'sigaction', '信号处理']
      },
      {
        id: 'l4-advanced-ptr',
        title: '高级指针应用',
        content: `复杂指针应用场景。

**高级指针：**
- 多级指针
- 指针数组vs数组指针
- 函数指针数组

**嵌入式场景：** 复杂数据结构`,
        keyPoints: ['多级指针', '数组指针', '函数指针数组']
      }
    ]
  };

export default level4;
