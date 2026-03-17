/**
 * 嵌入式 C 面试题 06 - DMA 数据传输
 */
export const embedded_interview_06 = {
  title: 'DMA 数据传输',
  difficulty: '高级',
  question: `分析以下代码`,
  code: `// DMA 伪代码
// 直接内存访问，不经过 CPU

void dma_transfer(void *src, void *dst, size_t size) {
    DMA_SRC_ADDR = (uint32_t)src;
    DMA_DST_ADDR = (uint32_t)dst;
    DMA_SIZE = size;
    DMA_CTRL = START;  // 启动 DMA
    
    // CPU 可以同时做其他事情
    // DMA 完成后触发中断
}

// 优点：
// 1. 不占用 CPU
// 2. 高速数据传输
// 3. 降低功耗`,
  answer: `DMA 硬件加速数据传输`,
  keyPoints: ['嵌入式系统', '硬件相关', '底层编程']
};
