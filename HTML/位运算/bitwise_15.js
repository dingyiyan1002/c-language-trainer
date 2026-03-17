/**
 * 位运算练习 15
 * 难度：高级 ⭐⭐⭐⭐
 * 主题：位操作技巧
 */

const exercise = {
    id: 15,
    title: "位运算高级技巧",
    difficulty: "高级",
    category: "bitwise",
    techniques: [
        "位掩码",
        "位设置/清除",
        "位翻转",
        "位计数",
        "位反转",
        "交换技巧"
    ],
    description: "本题考察位运算的高级技巧...",
    commonOperations: 
// 设置第 n 位
x |= (1 << n)

// 清除第 n 位
x &= ~(1 << n)

// 翻转第 n 位
x ^= (1 << n)

// 检查第 n 位
(x >> n) & 1

// 最低位 1
x & (-x)

// 清除最低位 1
x &= (x - 1)
,
    practicalUse: "标志位、权限控制、数据压缩、加密",
    hints: ["理解二进制表示", "注意运算符优先级", "考虑符号位"]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = exercise;
}
