/**
 * 嵌入式 C 语言练习 14
 * 难度：高级 ⭐⭐⭐⭐⭐
 * 主题：DMA 传输
 */

const exercise = {
    id: 14,
    title: "嵌入式 C - DMA 传输",
    difficulty: "高级",
    category: "embedded",
    topic: "DMA 传输",
    description: "本题考察嵌入式系统中的 DMA 传输...",
    hardwareConcepts: [
        "内存映射 IO",
        "寄存器配置",
        "中断向量表",
        "时钟系统"
    ],
    codeExample: 
// 寄存器定义
#define GPIO_BASE  0x40020000
#define GPIO_MODER (*(volatile uint32_t*)(GPIO_BASE))

// 配置 GPIO
void gpio_init(void) {
    GPIO_MODER |= (1 << 0);  // 设置模式
}
,
    practicalScenario: "实际嵌入式应用场景...",
    constraints: ["实时性要求", "资源受限", "功耗限制"],
    hints: ["使用 volatile", "注意原子操作", "考虑中断安全"]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = exercise;
}
