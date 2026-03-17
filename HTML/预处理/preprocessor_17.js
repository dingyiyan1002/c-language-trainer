/**
 * 预处理练习 17
 * 难度：高级 ⭐⭐⭐⭐
 * 主题：内联函数 vs 宏
 */

const exercise = {
    id: 17,
    title: "预处理 - 内联函数 vs 宏",
    difficulty: "高级",
    category: "preprocessor",
    topic: "内联函数 vs 宏",
    description: "本题考察预处理中的 内联函数 vs 宏...",
    macros: [
        "#define", "#ifdef", "#ifndef", "#endif",
        "#include", "#error", "#warning", "#pragma",
        "#", "##", "__VA_ARGS__"
    ],
    codeExample: 
// 示例宏定义
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define STRINGIFY(x) #x
#define CONCAT(a, b) a##b
,
    commonMistakes: ["宏展开优先级问题", "副作用", "调试困难"],
    hints: ["理解宏展开过程", "注意括号", "考虑副作用"]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = exercise;
}
