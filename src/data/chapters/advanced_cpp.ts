// advanced_cpp 章节数据 - C++ 核心难点
import type { Chapter } from '../types';

export const advancedCpp: Chapter = {
    id: 'advanced-cpp',
    name: 'C++ 核心难点',
    icon: 'Brain',
    description: '深入理解 C++ 的核心特性：智能指针、移动语义、多态、模板元编程',
    questionCount: 45,
    mode: 'practice',
    lessons: [
      {
        id: 'cpp-smart-ptr',
        title: '智能指针深度解析',
        content: `**unique_ptr - 独占所有权**

\`\`\`cpp
std::unique_ptr<int> p1 = std::make_unique<int>(10);
// std::unique_ptr<int> p2 = p1;  // 错误！不能拷贝
std::unique_ptr<int> p3 = std::move(p1);  // 所有权转移
// p1 现在为空，p3 拥有资源
\`\`\`

**shared_ptr - 共享所有权**
\`\`\`cpp
std::shared_ptr<int> p1 = std::make_shared<int>(10);
std::shared_ptr<int> p2 = p1;  // 引用计数+1
std::cout << p1.use_count();   // 输出 2
// 最后一个 shared_ptr 销毁时释放资源
\`\`\`

**weak_ptr - 打破循环引用**
\`\`\`cpp
std::weak_ptr<int> wp = p1;  // 不增加引用计数
if (auto sp = wp.lock()) {   // 尝试提升为 shared_ptr
    std::cout << *sp;
}
\`\`\``,
        keyPoints: ['RAII 原理', '引用计数', '循环引用', '自定义删除器']
      },
      {
        id: 'cpp-move-semantics',
        title: '移动语义与完美转发',
        content: `**左值引用 vs 右值引用**
\`\`\`cpp
int x = 10;
int& lref = x;           // 左值引用
int&& rref = 10;         // 右值引用
int&& rref2 = std::move(x);  // 将左值转为右值
\`\`\`

**移动构造函数**
\`\`\`cpp
class String {
    char* data;
public:
    // 移动构造函数
    String(String&& other) noexcept 
        : data(other.data) {
        other.data = nullptr;  // 窃取资源
    }
};
\`\`\`

**完美转发**
\`\`\`cpp
template<typename T>
void wrapper(T&& arg) {
    func(std::forward<T>(arg));  // 保持值类别
}
\`\`\``,
        keyPoints: ['std::move', 'std::forward', '值类别', '引用折叠']
      },
      {
        id: 'cpp-virtual',
        title: '虚函数与多态',
        content: `**虚函数表 (vtable)**
\`\`\`cpp
class Base {
    virtual void foo() { }  // 引入 vtable
    virtual ~Base() { }     // 虚析构函数
};

class Derived : public Base {
    void foo() override { }  // 重写
};
\`\`\`

**虚函数表布局**
- 每个类一个 vtable
- 每个对象包含 vptr 指针
- vptr 指向类的 vtable
- vtable 存储虚函数地址

**多重继承的虚函数**
\`\`\`cpp
class A { virtual void f(); };
class B { virtual void g(); };
class C : public A, public B { };
// C 对象包含两个 vptr
\`\`\``,
        keyPoints: ['vtable 原理', 'vptr 指针', '虚析构函数', '多重继承']
      },
      {
        id: 'cpp-template',
        title: '模板元编程基础',
        content: `**模板特化**
\`\`\`cpp
template<typename T>
class Container { };

// 部分特化
template<typename T>
class Container<T*> { };

// 完全特化
template<>
class Container<int> { };
\`\`\`

**SFINAE - 替换失败不是错误**
\`\`\`cpp
template<typename T>
auto foo(T t) -> decltype(t.bar(), void()) {
    // 只有 T 有 bar() 方法时才匹配
}
\`\`\`

**constexpr 编译期计算**
\`\`\`cpp
constexpr int factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n-1);
}
static_assert(factorial(5) == 120);
\`\`\``,
        keyPoints: ['模板特化', 'SFINAE', 'constexpr', '类型萃取']
      },
      {
        id: 'cpp-memory-model',
        title: 'C++ 内存模型',
        content: `**内存序 (Memory Order)**
\`\`\`cpp
std::atomic<int> x;

// 宽松序：只保证原子性
x.store(1, std::memory_order_relaxed);

// 获取 - 释放序：建立同步关系
x.store(1, std::memory_order_release);  // 释放操作
int v = x.load(std::memory_order_acquire);  // 获取操作

// 顺序一致性：最强的保证
x.store(1, std::memory_order_seq_cst);
\`\`\`

**happens-before 关系**
- 同一线程内的操作顺序
- 锁的获取和释放
- 原子操作的获取 - 释放序

**虚假唤醒**
\`\`\`cpp
std::unique_lock<std::mutex> lock(m);
cv.wait(lock, []{ return ready; });  // 使用谓词
\`\`\``,
        keyPoints: ['内存序', '原子操作', 'happens-before', '虚假唤醒']
      }
    ]
  };

export default advancedCpp;
