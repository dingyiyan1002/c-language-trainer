/**
 * 嵌入式 C 面试题 01 - volatile 关键字
 */
export const embedded_interview_01 = {
  title: 'volatile 关键字',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `#include <stdio.h>

// volatile 告诉编译器不要优化这个变量
volatile int sensor_value;

int main() {
    // 每次都会从内存读取，不使用缓存值
    while (1) {
        printf("Sensor: %d\n", sensor_value);
    }
    return 0;
}

// 应用场景：
// 1. 内存映射硬件寄存器
// 2. 中断服务程序修改的全局变量
// 3. 多任务共享的标志位`,
  answer: `volatile 防止编译器优化，用于硬件访问`,
  keyPoints: ['嵌入式系统', '硬件相关', '底层编程']
};
