/**
 * 文件操作练习 18
 * 难度：高级 ⭐⭐⭐⭐
 * 主题：文件锁与并发
 */

const exercise = {
    id: 18,
    title: "文件操作 - 文件锁与并发",
    difficulty: "高级",
    category: "file_io",
    topic: "文件锁与并发",
    description: "本题考察文件操作中的 文件锁与并发...",
    apiReferences: [
        "fopen()", "fclose()", "fread()", "fwrite()",
        "fseek()", "ftell()", "rewind()",
        "fprintf()", "fscanf()", "fgets()", "fputs()"
    ],
    practicalScenario: "实际文件处理场景...",
    errorHandling: "EOF 处理、错误检查、资源释放",
    hints: ["检查文件打开成功", "注意缓冲区刷新", "正确关闭文件"]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = exercise;
}
