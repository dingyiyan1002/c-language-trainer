// embedded 章节数据
import type { Chapter } from '../types';

export const embedded: Chapter = {
    id: 'embedded',
    name: '嵌入式Linux应用',
    icon: 'Settings',
    description: '嵌入式Linux应用开发：文件IO、进程线程、IPC通信、设备操作',
    questionCount: 25,
    mode: 'practice',
    lessons: [
      {
        id: 'embedded-1',
        title: '文件IO基础',
        content: `Linux文件IO系统调用：

**open - 打开文件**
- int fd = open(path, flags, mode)
- O_RDONLY/O_WRONLY/O_RDWR: 读写模式
- O_CREAT: 不存在则创建
- O_APPEND: 追加模式
- O_NONBLOCK: 非阻塞模式

**read/write - 读写文件**
- ssize_t read(fd, buf, count)
- ssize_t write(fd, buf, count)
- 返回实际读写字节数

**close - 关闭文件**
- close(fd): 关闭文件描述符
- 进程退出时自动关闭

**lseek - 移动文件指针**
- lseek(fd, offset, SEEK_SET/SEEK_CUR/SEEK_END)`,
        keyPoints: ['open返回文件描述符', 'read/write返回实际字节数', 'close释放fd']
      },
      {
        id: 'embedded-2',
        title: '进程控制',
        content: `Linux进程控制：

**fork - 创建子进程**
- 返回值：父进程得到子进程PID，子进程得到0
- 子进程复制父进程地址空间（COW）
- 父子进程执行顺序不确定

**exec族 - 执行新程序**
- execl/execv/execvp/execlp
- 成功不返回，失败返回-1
- 替换当前进程映像

**wait/waitpid - 等待子进程**
- wait(&status): 等待任意子进程
- waitpid(pid, &status, options): 等待指定子进程
- WIFEXITED/WEXITSTATUS宏解析状态

**exit - 进程退出**
- exit(status): 正常退出
- _exit(status): 直接退出（不刷新缓冲区）`,
        keyPoints: ['fork返回值区分父子进程', 'exec替换进程映像', 'wait回收子进程']
      },
      {
        id: 'embedded-3',
        title: '信号处理',
        content: `Linux信号机制：

**常见信号**
- SIGINT(2): Ctrl+C中断
- SIGKILL(9): 强制终止（不可捕获）
- SIGTERM(15): 正常终止
- SIGSEGV(11): 段错误
- SIGCHLD: 子进程状态改变

**signal/sigaction**
- signal(sig, handler): 简单注册
- sigaction(sig, &act, &oldact): 推荐使用
- SIG_IGN: 忽略信号
- SIG_DFL: 默认处理

**发送信号**
- kill(pid, sig): 发送信号给进程
- raise(sig): 发送信号给自己
- alarm(sec): 定时发送SIGALRM`,
        keyPoints: ['SIGKILL不可捕获', 'sigaction比signal更安全', 'kill发送信号']
      },
      {
        id: 'embedded-4',
        title: '进程间通信IPC',
        content: `Linux IPC机制：

**管道(pipe)**
- int pipe(int fd[2])
- fd[0]读端，fd[1]写端
- 单向通信，父子进程使用

**命名管道(FIFO)**
- mkfifo(path, mode)
- 无亲缘关系进程可通信
- 阻塞特性

**共享内存(shm)**
- shmget(): 创建共享内存
- shmat(): 映射到进程空间
- shmdt(): 分离
- 最快的IPC方式

**消息队列(msg)**
- msgget/msgsnd/msgrcv
- 按类型发送接收消息`,
        keyPoints: ['pipe单向通信', 'shm最快IPC', 'FIFO跨进程通信']
      },
      {
        id: 'embedded-5',
        title: '多线程编程',
        content: `POSIX线程(pthread)：

**线程创建与等待**
- pthread_create(&tid, NULL, func, arg)
- pthread_join(tid, &retval): 等待线程结束
- pthread_exit(retval): 线程退出

**互斥锁(mutex)**
- pthread_mutex_init/destroy
- pthread_mutex_lock/unlock
- 保护临界区

**条件变量(cond)**
- pthread_cond_init/destroy
- pthread_cond_wait(cond, mutex)
- pthread_cond_signal/broadcast
- 生产者-消费者模型

**线程安全**
- 避免竞争条件
- 使用锁保护共享资源
- 注意死锁问题`,
        keyPoints: ['pthread_create创建线程', 'mutex保护临界区', 'cond实现等待通知']
      },
      {
        id: 'embedded-6',
        title: '设备文件操作',
        content: `Linux设备文件：

**设备文件类型**
- 字符设备(c): 按字节访问（串口、键盘）
- 块设备(b): 按块访问（硬盘、U盘）
- 设备文件在/dev目录

**ioctl - 设备控制**
- int ioctl(int fd, unsigned long request, ...)
- 发送控制命令给设备驱动
- 如设置串口波特率

**串口编程**
- open("/dev/ttyUSB0", O_RDWR)
- tcgetattr/tcsetattr: 配置串口参数
- 设置波特率、数据位、停止位

**GPIO操作（嵌入式）**
- /sys/class/gpio/方式
- 或通过ioctl操作/dev/gpio`,
        keyPoints: ['字符设备按字节访问', 'ioctl控制设备', '串口编程配置参数']
      }
    ]
  };

export default embedded;
