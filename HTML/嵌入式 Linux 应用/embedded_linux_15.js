/**
 * 嵌入式 Linux 应用练习 15
 * 难度：高级 ⭐⭐⭐⭐⭐
 * 主题：并发与竞态
 */

const exercise = {
    id: 15,
    title: "嵌入式 Linux - 并发与竞态",
    difficulty: "高级",
    category: "embedded_linux",
    topic: "并发与竞态",
    description: "本题考察嵌入式 Linux 中的 并发与竞态...",
    kernelAPIs: [
        "module_init", "module_exit",
        "register_chrdev", "unregister_chrdev",
        "request_irq", "free_irq",
        "kmalloc", "kfree"
    ],
    codeExample: 
// 内核模块示例
#include <linux/module.h>
#include <linux/kernel.h>

static int __init my_init(void) {
    printk(KERN_INFO "Module loaded\\n");
    return 0;
}

static void __exit my_exit(void) {
    printk(KERN_INFO "Module unloaded\\n");
}

module_init(my_init);
module_exit(my_exit);
,
    practicalScenario: "实际嵌入式 Linux 应用场景...",
    hints: ["理解内核空间与用户空间", "注意内存管理", "处理并发问题"]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = exercise;
}
