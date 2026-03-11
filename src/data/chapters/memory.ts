// memory 章节数据
import type { Chapter } from '../types';

export const memory: Chapter = {
    id: 'memory',
    name: '内存安全',
    icon: 'Shield️',
    description: '理解内存管理，避免内存泄漏和溢出',
    questionCount: 8,
    mode: 'practice',
    lessons: [
      {
        id: 'mem-1',
        title: '内存布局',
        content: `程序内存四区：

\`\`\`
┌─────────────┐ 高地址
│    栈区     │ ← 局部变量，自动释放，~8MB
├─────────────┤
│    堆区     │ ← malloc分配，手动管理，GB级
├─────────────┤
│   数据段    │ ← 全局/静态变量
├─────────────┤
│   代码段    │ ← 程序指令，只读
└─────────────┘ 低地址
\`\`\`

**核心区别**：栈自动管理但空间小，堆手动管理但空间大`,
        keyPoints: ['栈自动管理，空间有限', '堆手动管理，空间大']
      },
      {
        id: 'mem-2',
        title: '动态内存',
        content: `\`\`\`c
// malloc: 分配不初始化
int *p = malloc(10 * sizeof(int));

// calloc: 分配并初始化为0
int *q = calloc(10, sizeof(int));

// realloc: 调整大小
p = realloc(p, 20 * sizeof(int));

// 必须检查
if (p == NULL) return;

// 使用...

free(p);     // 释放
p = NULL;    // 置空防野指针
\`\`\`

**铁律**：malloc/free配对，free后置NULL`,
        keyPoints: ['malloc/free配对', '检查NULL', 'free后置NULL']
      },
      {
        id: 'mem-3',
        title: '内存泄漏',
        content: `**三大泄漏场景**：

\`\`\`c
// 1. 忘记释放
void leak1() {
    int *p = malloc(100);
    // 忘记free就返回
}

// 2. 异常路径
void leak2(int x) {
    int *p = malloc(100);
    if (x < 0) return;  // 泄漏！
    free(p);
}

// 3. 指针覆盖
void leak3() {
    int *p = malloc(100);
    p = malloc(200);  // 第一次的内存丢失！
    free(p);
}
\`\`\`

**检测**：gcc -fsanitize=address 或 valgrind`,
        keyPoints: ['malloc/free配对', '异常路径也要释放', '不要覆盖未释放指针']
      },
      {
        id: 'mem-4',
        title: '野指针',
        content: `**野指针**：未初始化
\`\`\`c
int *p;     // 野指针！
*p = 10;    // 崩溃或破坏数据
\`\`\`

**悬空指针**：指向已释放内存
\`\`\`c
int *p = malloc(4);
free(p);
*p = 10;    // 悬空指针！
\`\`\`

**经典错误：返回局部变量地址**
\`\`\`c
// XCircle 错误
int *bad() {
    int x = 10;   // 栈变量
    return &x;    // 返回后x销毁！
}

// CheckCircle 正确
int *good() {
    static int x = 10;  // 静态变量
    return &x;
}
\`\`\`

**防身术**：声明时初始化NULL，free后置NULL`,
        keyPoints: ['野指针：未初始化', '悬空指针：指向已释放内存', '不要返回局部变量地址', 'free后置NULL']
      },
      {
        id: 'mem-5',
        title: '缓冲区溢出',
        content: `**数组越界**：
\`\`\`c
int arr[5];
arr[5] = 1;   // XCircle 越界！索引0-4
\`\`\`

**字符串溢出**：
\`\`\`c
char buf[10];
strcpy(buf, "Hello World!");  // XCircle 12>10

// CheckCircle 安全
snprintf(buf, sizeof(buf), "%s", "Hello World!");
\`\`\`

**栈溢出**：
\`\`\`c
// XCircle 栈上分配大数组
void bad() { int big[10000000]; }

// CheckCircle 堆上分配
void good() { 
    int *big = malloc(10000000 * sizeof(int));
    free(big);
}
\`\`\`

**安全函数**：strcpy→snprintf, gets→fgets`,
        keyPoints: ['数组索引不能越界', '字符串用安全函数', '大数组用堆分配']
      },
      {
        id: 'mem-6',
        title: '双重释放',
        content: `**双重释放**：同一块内存释放两次
\`\`\`c
int *p = malloc(4);
free(p);
free(p);   // XCircle 崩溃！
\`\`\`

**解决**：free后置NULL
\`\`\`c
free(p);
p = NULL;  // CheckCircle 再free(NULL)安全
\`\`\`

**使用已释放内存**：
\`\`\`c
free(p);
printf("%d", *p);  // XCircle 未定义行为
\`\`\`

**检测工具**：
\`\`\`bash
gcc -fsanitize=address program.c
# 检测：内存泄漏、溢出、双重释放、使用已释放内存
\`\`\`

**黄金法则**：谁分配谁释放，free后置NULL`,
        keyPoints: ['不要双重释放', 'free后置NULL', '用AddressSanitizer检测']
      }
    ]
  };

export default memory;
