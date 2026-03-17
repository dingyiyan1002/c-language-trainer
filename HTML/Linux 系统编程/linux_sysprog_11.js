/**
 * Linux 系统编程练习 11
 * 难度：高级 ⭐⭐⭐⭐
 * 主题：Socket 网络编程
 */

const exercise = {
    id: 11,
    title: "Linux 系统编程 - Socket 网络编程",
    difficulty: "高级",
    category: "linux",
    topic: "Socket 网络编程",
    description: "本题考察 Linux 系统编程中的 Socket 网络编程...",
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
