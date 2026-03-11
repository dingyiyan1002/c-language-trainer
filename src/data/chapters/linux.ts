// linux 章节数据
import type { Chapter } from '../types';

export const linux: Chapter = {
    id: 'linux',
    name: 'Linux系统编程',
    icon: 'Bird',
    description: '深入理解Linux系统编程原理：进程管理、并发编程、IO模型、性能优化',
    questionCount: 30,
    mode: 'practice',
    lessons: [
      {
        id: 'linux-1',
        title: '文件IO与内核机制',
        content: `Linux文件IO系统调用：

**open/close**
- open(): 打开文件，返回文件描述符
- close(): 关闭文件描述符

**read/write系统调用开销**
- 用户态→内核态切换：约100-200ns
- 数据拷贝：用户缓冲区ArrowLeftRight页缓存ArrowLeftRight磁盘
- 上下文切换成本：保存/恢复寄存器

**零拷贝技术**
- mmap: 文件直接映射到进程地址空间
- sendfile: 内核直接传递数据，无需用户态参与
- splice: 管道零拷贝

**页缓存(Page Cache)**
- 文件数据缓存在内存中
- 延迟写回策略提升性能
- read可能不触发磁盘IO`,
        keyPoints: ['系统调用有开销', '零拷贝提升性能', '页缓存加速文件访问']
      },
      {
        id: 'linux-2',
        title: '进程管理深度',
        content: `进程创建和控制：

**fork()的Copy-on-Write**
- fork时并不复制整个地址空间
- 只复制页表，标记为只读
- 写入时才复制实际页面(COW)
- 这就是为什么fork比想象中快

**exec族**
- 替换当前进程映像
- 加载新程序，重置地址空间
- 文件描述符默认保持打开

**进程调度**
- CFS(完全公平调度器)
- vruntime决定调度顺序
- nice值影响权重`,
        keyPoints: ['fork使用COW机制', 'exec替换地址空间', 'CFS基于vruntime调度']
      },
      {
        id: 'linux-3',
        title: '线程与并发原理',
        content: `POSIX线程(pthread)：

**线程 vs 进程**
- 线程共享：代码段、数据段、堆、打开的文件
- 线程私有：栈、寄存器、线程局部存储
- 线程切换比进程切换快(无需切换页表)

**互斥锁实现**
- 用户态：自旋锁(短暂等待)
- 内核态：futex(快速用户态互斥)
- 避免频繁系统调用

**缓存一致性**
- MESI协议：Modified/Exclusive/Shared/Invalid
- 伪共享：同一缓存行的独立变量
- 内存屏障：防止指令重排序`,
        keyPoints: ['线程切换比进程快', 'futex实现高效锁', 'MESI保证缓存一致']
      },
      {
        id: 'linux-4',
        title: 'IO多路复用',
        content: `同时监视多个文件描述符：

**select的局限**
- fd_set大小限制(1024)
- 每次调用都要拷贝fd_set到内核
- 返回后需要遍历所有fd检查状态
- 时间复杂度O(n)

**poll的改进**
- 使用数组存储fd，无大小限制
- 但仍需遍历所有fd
- 数据拷贝开销仍然存在

**epoll的革命**
- epoll_create: 创建epoll实例
- epoll_ctl: 注册感兴趣的事件(一次)
- epoll_wait: 只返回就绪的fd
- 时间复杂度O(1)，无拷贝开销
- 使用红黑树存储fd，回调机制通知就绪`,
        keyPoints: ['select/poll需要遍历', 'epoll只返回就绪fd', 'epoll使用回调机制']
      },
      {
        id: 'linux-5',
        title: '进程间通信原理',
        content: `IPC机制对比：

**管道/命名管道**
- 基于内核缓冲区(通常4KB-64KB)
- 单向流式通信
- 数据拷贝：用户→内核→用户

**共享内存**
- 最快的IPC(无数据拷贝)
- 需要同步机制(mutex/信号量)
- shmget/shmat创建和映射

**Unix Domain Socket**
- 类似网络socket，但本地通信
- 可以传递文件描述符
- 支持流和数据报两种模式

**消息队列**
- 内核维护的消息链表
- 支持消息类型选择接收
- 有大小和数量限制`,
        keyPoints: ['共享内存最快', '管道有拷贝开销', 'UDS可传递fd']
      },
      {
        id: 'linux-6',
        title: '信号与异步编程',
        content: `信号处理机制：

**信号发送与处理**
- 内核检查目标进程的signal_pending
- 从内核态返回用户态时处理信号
- 信号处理函数在进程上下文中执行

**可重入函数**
- 信号处理中只能调用异步信号安全函数
- 不安全：malloc/free, printf, 操作全局链表
- 安全：write, _exit, 部分系统调用

**实时信号**
- 支持排队(普通信号不排队)
- 支持携带数据(sigqueue)
- 优先级高于普通信号`,
        keyPoints: ['信号在返回用户态时处理', '信号处理要异步安全', '实时信号支持排队']
      },
      {
        id: 'linux-7',
        title: '内存管理深度',
        content: `Linux内存管理：

**虚拟内存**
- 每个进程独立的地址空间
- MMU将虚拟地址转换为物理地址
- 页表实现地址映射

**内存分配**
- brk/mmap: 系统调用申请内存
- ptmalloc/tcmalloc: 用户态内存管理
- 内存碎片问题

**缺页中断**
- 访问未映射的页面触发
- 内核分配物理页并建立映射
- 按需调页(Demand Paging)

**内存映射文件**
- mmap将文件映射到内存
- 访问内存即访问文件
- 共享映射：多个进程共享数据`,
        keyPoints: ['MMU负责地址转换', '缺页中断按需分配', 'mmap直接访问文件']
      },
      {
        id: 'linux-8',
        title: '性能分析与优化',
        content: `系统性能优化：

**系统调用优化**
- 批量操作减少syscall次数
- 使用vread/vwrite批量IO
- 内存映射避免拷贝

**缓存优化**
- CPU缓存行对齐(通常64字节)
- 避免伪共享
- 预取指令优化访问模式

**锁优化**
- 减小临界区
- 读写锁分离读/写
- 无锁数据结构

**IO优化**
- 使用epoll替代select/poll
- 异步IO(aio/io_uring)
- 直接IO绕过页缓存`,
        keyPoints: ['批量操作减少syscall', '缓存行对齐避免伪共享', 'epoll替代select']
      }
    ]
  };

export default linux;
