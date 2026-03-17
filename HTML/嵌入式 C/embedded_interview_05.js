/**
 * 嵌入式 C 面试题 05 - 看门狗定时器
 */
export const embedded_interview_05 = {
  title: '看门狗定时器',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `// 看门狗伪代码
// 看门狗用于检测系统死机

void watchdog_feed(void) {
    // 定期"喂狗"，重置定时器
    WDG_REG = 0xA5;  // 写入特定值重置
}

int main() {
    watchdog_init(1000);  // 1 秒超时
    
    while (1) {
        // 主循环
        do_work();
        
        // 定期喂狗
        watchdog_feed();
    }
    // 如果系统死机，看门狗会复位系统
}`,
  answer: `看门狗防止系统死机`,
  keyPoints: ['嵌入式系统', '硬件相关', '底层编程']
};
