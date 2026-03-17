/**
 * Linux 系统编程练习 8
 * 难度：高级 ⭐⭐⭐⭐
 * 主题：信号处理与信号量
 */

const exercise = {
    id: 8,
    title: "Linux 系统编程 - 信号处理与信号量",
    difficulty: "高级",
    category: "linux",
    topic: "信号处理与信号量",
    description: "本题考察 Linux 系统编程中的 信号处理与信号量...",
    apiReferences: [
        "fork()", "exec()", "wait()",
        "pipe()", "read()", "write()",
        "pthread_create()", "pthread_mutex_lock()"
    ],
    practicalScenario: "实际应用场景描述...",
    hints: ["注意错误处理", "检查返回值", "资源清理"]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = exercise;
}
