/**
 * Linux 系统编程练习 19
 * 难度：高级 ⭐⭐⭐⭐
 * 主题：进程间通信 - 共享内存
 */

const exercise = {
    id: 19,
    title: "Linux 系统编程 - 进程间通信 - 共享内存",
    difficulty: "高级",
    category: "linux",
    topic: "进程间通信 - 共享内存",
    description: "本题考察 Linux 系统编程中的 进程间通信 - 共享内存...",
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
