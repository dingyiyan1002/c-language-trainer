// interview 章节数据
import type { Chapter } from '../types';

export const interview: Chapter = {
    id: 'interview',
    name: '面试专题',
    icon: 'Briefcase',
    description: '面试常考的手写代码、系统设计、Bug修复、性能优化、概念深度题',
    questionCount: 30,
    mode: 'practice',
    lessons: [
      {
        id: 'interview-1',
        title: '手写代码题',
        content: `面试中常要求手写基础算法实现：

**必会算法：**
- 字符串操作：反转、拷贝、比较、求长度
- 内存操作：memcpy、memmove、memset
- 链表操作：反转、合并、检测环
- 查找排序：二分查找、快速排序

**面试要点：**
1. 考虑边界条件（空指针、空字符串）
2. 注意内存重叠（memcpy vs memmove）
3. 返回值设计（支持链式调用）
4. 代码简洁优雅`,
        keyPoints: ['字符串操作', '内存拷贝', '链表反转', '二分查找', '边界条件']
      },
      {
        id: 'interview-2',
        title: '系统设计题',
        content: `设计嵌入式常用数据结构：

**内存池(Memory Pool)**
- 预先分配固定大小内存块
- 用链表管理空闲块
- 避免频繁malloc/free的开销和碎片

**环形缓冲区(Ring Buffer)**
- 生产者-消费者模型
- head/tail指针，模运算实现环形
- 适用于串口通信、音频处理

**状态机(State Machine)**
- 函数指针数组实现跳转表
- 比switch-case更高效
- 适用于协议解析`,
        keyPoints: ['内存池设计', '环形缓冲区', '状态机实现', '对象池']
      },
      {
        id: 'interview-3',
        title: ' Bug修复题',
        content: `常见C语言陷阱和修复方法：

**内存问题**
- 野指针：返回局部变量地址
- 内存泄漏：malloc后没有free
- 重复释放：double free
- 越界访问：数组索引超出范围

**并发问题**
- 竞争条件：非原子操作被中断
- 临界区：需要保护的数据访问

**数值问题**
- 整数溢出：无符号数回绕
- 符号扩展：有符号/无符号混用`,
        keyPoints: ['野指针', '内存泄漏', '竞争条件', '整数溢出', '缓冲区溢出']
      },
      {
        id: 'interview-4',
        title: '性能优化题',
        content: `嵌入式性能优化技巧：

**代码层面**
- 循环展开：减少跳转开销
- 内联函数：消除调用开销
- 分支预测：likely/unlikely提示

**内存层面**
- 缓存友好：按行优先访问数组
- 对齐访问：避免非对齐内存访问
- 预取指令：提前加载数据到缓存

**算法层面**
- 时间复杂度优化
- 空间换时间
- 查表法替代计算`,
        keyPoints: ['循环展开', '缓存优化', '分支预测', '内联函数', '内存对齐']
      },
      {
        id: 'interview-5',
        title: '概念深度题',
        content: `深入理解C语言和系统原理：

**volatile关键字**
- 防止编译器优化
- 确保每次从内存读取
- 用于硬件寄存器、多线程标志

**内存屏障**
- 防止指令重排序
- 确保操作顺序
- 多核同步必备

**系统调用**
- 用户态到内核态切换
- 参数传递和上下文切换
- 开销较大，应减少调用

**链接方式**
- 静态链接：独立运行，体积大
- 动态链接：共享库，依赖环境`,
        keyPoints: ['volatile原理', '内存屏障', '系统调用', '静态/动态链接', 'MMU', 'DMA']
      }
    ]
  };

export default interview;
