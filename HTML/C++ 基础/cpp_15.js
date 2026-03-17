/**
 * C++ 基础练习 15
 * 难度：中高级 ⭐⭐⭐⭐
 * 主题：RAII 资源管理
 */

const exercise = {
    id: 15,
    title: "C++ - RAII 资源管理",
    difficulty: "中高级",
    category: "cpp",
    topic: "RAII 资源管理",
    description: "本题考察 C++ 中的 RAII 资源管理...",
    keyConcepts: [
        "面向对象编程",
        "封装继承多态",
        "资源管理",
        "类型安全"
    ],
    codeExample: 
// 示例代码框架
class Base {
public:
    virtual void foo() = 0;  // 纯虚函数
    virtual ~Base() {}
};

class Derived : public Base {
public:
    void foo() override {
        // 实现
    }
};
,
    cppFeatures: ["类", "继承", "多态", "模板", "STL", "智能指针"],
    hints: ["理解 RAII", "注意虚析构函数", "使用智能指针管理资源"]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = exercise;
}
