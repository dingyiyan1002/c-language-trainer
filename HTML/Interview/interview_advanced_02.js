/**
 * C 语言高级面试题 02 - volatile 关键字与嵌入式编程
 * 难度：高级 ⭐⭐⭐⭐⭐
 * 考点：volatile、中断、多线程、编译器优化
 */

const question = {
    title: "volatile 关键字的正确使用",
    description: `
关于 volatile 关键字，以下说法正确的是？

A. volatile 变量不会被编译器优化
B. volatile 保证原子性操作
C. volatile 可以替代互斥锁
D. volatile 变量适合用于多线程共享计数器

场景题：
在嵌入式系统中，以下哪些变量应该声明为 volatile？
1. 中断服务程序中修改的全局变量
2. 多线程共享的标志位
3. 内存映射的硬件寄存器
4. 普通局部变量
`,
    options: [
        "只有 A 正确，场景题答案：1、2、3",
        "A 和 B 正确，场景题答案：1、2",
        "只有 A 正确，场景题答案：1、3",
        "A、B、C 都正确，场景题答案：1、2、3、4"
    ],
    correctAnswer: 0,
    explanation: `
【答案】只有 A 正确，场景题答案：1、2、3

【详细解析】

📌 volatile 的作用：
- 告诉编译器该变量可能被外部因素改变
- 每次访问都从内存读取，不使用寄存器缓存
- 禁止编译器对该变量进行优化

📌 选项分析：
A ✓ 正确 - volatile 变量确实不会被编译器优化
B ✗ 错误 - volatile 不保证原子性，只是保证可见性
C ✗ 错误 - volatile 不能替代互斥锁，不保证原子操作
D ✗ 错误 - volatile 不适合计数器，因为++操作不是原子的

📌 场景题分析：
1 ✓ 中断服务程序修改的全局变量 - 必须 volatile
2 ✓ 多线程共享的标志位 - 应该 volatile（但复杂同步需互斥锁）
3 ✓ 内存映射的硬件寄存器 - 必须 volatile
4 ✗ 普通局部变量 - 不需要 volatile

💡 经典错误示例：
volatile int counter = 0;
// 错误：counter++ 不是原子操作！
// 应该使用原子操作或互斥锁
`,
    keyPoints: [
        "volatile 保证可见性，不保证原子性",
        "中断、多线程、硬件寄存器需要 volatile",
        "volatile 不能替代同步原语",
        "计数器操作需要原子函数或互斥锁"
    ],
    commonMistakes: [
        "误以为 volatile 保证原子性",
        "用 volatile 替代互斥锁",
        "在不需要的场景滥用 volatile"
    ],
    codeExample: `
// 正确使用 volatile 的示例
volatile int g_interrupt_flag = 0;  // 中断标志
volatile uint32_t *const UART_DR = (uint32_t *)0x4000C000;  // 硬件寄存器

// 中断服务程序
void ISR_Timer(void) {
    g_interrupt_flag = 1;  // 修改标志
}

// 主程序
int main(void) {
    while (1) {
        if (g_interrupt_flag) {  // 每次都会从内存读取
            g_interrupt_flag = 0;
            // 处理中断逻辑
        }
    }
}

// 错误示例 - volatile 不能保证原子性
volatile int counter = 0;
void increment(void) {
    counter++;  // 实际是：读->改->写，不是原子的！
}
`
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = question;
}
