// advanced_cpp 章节的测试题
import type { Question } from '../types';

export const advancedCppQuestions: Question[] = [
  // ========== 智能指针专题 ==========
  {
    id: 'cpp-smart-ptr-1',
    chapter: 'advanced-cpp',
    section: '智能指针深度解析',
    difficulty: 'intermediate',
    question: '以下代码的输出是什么？\n\n```cpp\nstd::unique_ptr<int> p1 = std::make_unique<int>(10);\nstd::unique_ptr<int> p2 = std::move(p1);\nstd::cout << (p1 ? *p1 : 0);\n```',
    options: ['10', '0', '编译错误', '运行时错误'],
    correct: 1,
    explanation: 'std::move 后，p1 的所有权转移给 p2，p1 变为空指针（nullptr），所以输出 0。',
    knowledgePoints: ['unique_ptr', '所有权转移', 'std::move']
  },
  {
    id: 'cpp-smart-ptr-2',
    chapter: 'advanced-cpp',
    section: '智能指针深度解析',
    difficulty: 'advanced',
    question: '以下哪种情况会导致循环引用？\n\n```cpp\nclass A {\n    std::shared_ptr<B> b_ptr;\n};\nclass B {\n    // 在这里选择成员类型\n};\n```',
    options: ['std::shared_ptr<A> a_ptr;', 'std::weak_ptr<A> a_ptr;', 'std::unique_ptr<A> a_ptr;', 'A* a_ptr;'],
    correct: 0,
    explanation: '当 A 持有 B 的 shared_ptr，B 也持有 A 的 shared_ptr 时，会形成循环引用，导致引用计数永远不为 0，内存泄漏。应该使用 weak_ptr 打破循环。',
    knowledgePoints: ['shared_ptr', '循环引用', 'weak_ptr']
  },
  {
    id: 'cpp-smart-ptr-3',
    chapter: 'advanced-cpp',
    section: '智能指针深度解析',
    difficulty: 'advanced',
    question: '以下代码有几个对象被销毁？\n\n```cpp\n{\n    std::shared_ptr<int> p1 = std::make_shared<int>(10);\n    std::shared_ptr<int> p2 = p1;\n    std::weak_ptr<int> wp = p1;\n}\n```',
    options: ['0 个', '1 个', '2 个', '3 个'],
    correct: 1,
    explanation: '只有 1 个 int 对象。p1 和 p2 共享同一个对象，wp 是 weak_ptr 不拥有对象。当 p1 和 p2 都销毁时（引用计数归 0），int 对象被销毁。',
    knowledgePoints: ['shared_ptr', 'weak_ptr', '引用计数']
  },
  {
    id: 'cpp-smart-ptr-4',
    chapter: 'advanced-cpp',
    section: '智能指针深度解析',
    difficulty: 'expert',
    question: '如何为 shared_ptr 指定自定义删除器？\n\n```cpp\nstd::shared_ptr<FILE> fp(\n    fopen("test.txt", "r"),\n    // 自定义删除器应该怎么写？\n);\n```',
    options: ['[](FILE* p) { fclose(p); }', 'fclose', 'std::default_delete<FILE>()', '以上都可以'],
    correct: 3,
    explanation: '三种方式都可以：lambda 表达式、函数指针、函数对象。自定义删除器允许 shared_ptr 管理任意类型的资源。',
    knowledgePoints: ['shared_ptr', '自定义删除器', 'RAII']
  },
  
  // ========== 移动语义专题 ==========
  {
    id: 'cpp-move-1',
    chapter: 'advanced-cpp',
    section: '移动语义与完美转发',
    difficulty: 'intermediate',
    question: 'std::move 的本质是什么？',
    options: ['移动资源', '将左值转换为右值引用', '调用移动构造函数', '释放资源'],
    correct: 1,
    explanation: 'std::move 本身不做任何移动操作，它只是进行类型转换，将左值转换为右值引用，从而可以绑定到移动构造函数。',
    knowledgePoints: ['std::move', '右值引用', '值类别']
  },
  {
    id: 'cpp-move-2',
    chapter: 'advanced-cpp',
    section: '移动语义与完美转发',
    difficulty: 'advanced',
    question: '以下代码调用了什么构造函数？\n\n```cpp\nstd::vector<int> v1 = {1, 2, 3};\nstd::vector<int> v2 = std::move(v1);\n```',
    options: ['拷贝构造函数', '移动构造函数', '拷贝赋值运算符', '移动赋值运算符'],
    correct: 1,
    explanation: '使用 std::move 后，调用移动构造函数，v2 接管 v1 的资源，v1 变为空。',
    knowledgePoints: ['移动构造函数', 'std::move', 'vector']
  },
  {
    id: 'cpp-move-3',
    chapter: 'advanced-cpp',
    section: '移动语义与完美转发',
    difficulty: 'expert',
    question: '以下函数模板中，std::forward 的作用是什么？\n\n```cpp\ntemplate<typename T>\nvoid wrapper(T&& arg) {\n    func(std::forward<T>(arg));\n}\n```',
    options: ['强制转换为左值', '强制转换为右值', '保持原始值类别', '复制参数'],
    correct: 2,
    explanation: 'std::forward 实现完美转发，保持参数的原始值类别（左值/右值），确保正确的重载被调用。',
    knowledgePoints: ['std::forward', '完美转发', '引用折叠']
  },
  
  // ========== 虚函数与多态专题 ==========
  {
    id: 'cpp-virtual-1',
    chapter: 'advanced-cpp',
    section: '虚函数与多态',
    difficulty: 'intermediate',
    question: '为什么基类的析构函数应该是虚函数？',
    options: ['为了语法正确', '防止内存泄漏', '提高性能', '节省内存'],
    correct: 1,
    explanation: '当通过基类指针删除派生类对象时，如果析构函数不是虚函数，只会调用基类析构函数，导致派生类部分未清理，造成内存泄漏。',
    knowledgePoints: ['虚析构函数', '多态', '内存管理']
  },
  {
    id: 'cpp-virtual-2',
    chapter: 'advanced-cpp',
    section: '虚函数与多态',
    difficulty: 'advanced',
    question: '以下代码的输出是什么？\n\n```cpp\nclass A {\npublic:\n    virtual void f() { cout << "A"; }\n};\nclass B : public A {\npublic:\n    void f() override { cout << "B"; }\n};\n\nA* p = new B();\np->f();\n```',
    options: ['A', 'B', 'AB', '编译错误'],
    correct: 1,
    explanation: '由于 f() 是虚函数，通过基类指针调用时会动态绑定到派生类的实现，输出 B。',
    knowledgePoints: ['虚函数', '动态绑定', '多态']
  },
  {
    id: 'cpp-virtual-3',
    chapter: 'advanced-cpp',
    section: '虚函数与多态',
    difficulty: 'expert',
    question: '多重继承下，派生类对象包含几个 vptr？\n\n```cpp\nclass A { virtual void f(); };\nclass B { virtual void g(); };\nclass C : public A, public B { };```',
    options: ['0 个', '1 个', '2 个', '3 个'],
    correct: 2,
    explanation: 'C 继承自 A 和 B，每个基类都有自己的 vtable，所以 C 对象包含 2 个 vptr，分别指向 A 和 B 的 vtable。',
    knowledgePoints: ['多重继承', 'vptr', 'vtable']
  },
  
  // ========== 模板元编程专题 ==========
  {
    id: 'cpp-template-1',
    chapter: 'advanced-cpp',
    section: '模板元编程基础',
    difficulty: 'advanced',
    question: '以下代码使用了什么技术？\n\n```cpp\ntemplate<typename T, typename = std::enable_if_t<std::is_integral_v<T>>>\nvoid foo(T t);\n```',
    options: ['SFINAE', '概念 (Concepts)', '模板特化', '类型擦除'],
    correct: 0,
    explanation: '使用 std::enable_if_t 和类型萃取实现 SFINAE，限制 T 必须是整数类型。',
    knowledgePoints: ['SFINAE', 'enable_if', '类型萃取']
  },
  {
    id: 'cpp-template-2',
    chapter: 'advanced-cpp',
    section: '模板元编程基础',
    difficulty: 'expert',
    question: 'constexpr 函数的主要特点是什么？',
    options: ['运行更快', '在编译期求值', '不能递归', '只能是纯函数'],
    correct: 1,
    explanation: 'constexpr 函数可以在编译期求值，结果直接嵌入代码中，避免运行时开销。但也可以在运行期调用。',
    knowledgePoints: ['constexpr', '编译期计算', '元编程']
  },
  
  // ========== 内存模型专题 ==========
  {
    id: 'cpp-memory-1',
    chapter: 'advanced-cpp',
    section: 'C++ 内存模型',
    difficulty: 'advanced',
    question: '以下哪种内存序最强？',
    options: ['memory_order_relaxed', 'memory_order_acquire', 'memory_order_release', 'memory_order_seq_cst'],
    correct: 3,
    explanation: 'memory_order_seq_cst（顺序一致性）提供最强的保证，所有线程看到的操作顺序一致。',
    knowledgePoints: ['内存序', '原子操作', '顺序一致性']
  },
  {
    id: 'cpp-memory-2',
    chapter: 'advanced-cpp',
    section: 'C++ 内存模型',
    difficulty: 'expert',
    question: '以下代码有什么问题？\n\n```cpp\nstd::condition_variable cv;\nstd::mutex m;\nbool ready = false;\n\n// 消费者线程\ncv.wait(lock);\nif (!ready) { /* 处理 */ }\n```',
    options: ['没有问题', '可能错过唤醒', '死锁', '性能问题'],
    correct: 0,
    explanation: '应该使用带谓词的 wait：cv.wait(lock, []{ return ready; }); 否则可能发生虚假唤醒，导致在 ready 为 false 时继续执行。',
    knowledgePoints: ['condition_variable', '虚假唤醒', '同步']
  },
  
  // ========== 综合难题 ==========
  {
    id: 'cpp-comprehensive-1',
    chapter: 'advanced-cpp',
    section: '综合应用',
    difficulty: 'expert',
    question: '以下代码的输出顺序是什么？\n\n```cpp\nclass A {\npublic:\n    A() { cout << "A"; }\n    ~A() { cout << "~A"; }\n};\n\nstd::shared_ptr<A> create() {\n    std::shared_ptr<A> p(new A());\n    return p;\n}\n\nint main() {\n    auto p = create();\n    cout << "|";\n}\n```',
    options: ['A|~A', '|A~A', 'A~A|', '无法确定'],
    correct: 0,
    explanation: 'create() 中构造 A 对象输出 A，返回后输出 |，main 结束时 p 销毁，调用析构函数输出~A。',
    knowledgePoints: ['shared_ptr', '生命周期', '析构顺序']
  },
  {
    id: 'cpp-comprehensive-2',
    chapter: 'advanced-cpp',
    section: '综合应用',
    difficulty: 'expert',
    question: '以下代码是否安全？\n\n```cpp\nclass Widget {\n    std::unique_ptr<int[]> data;\npublic:\n    Widget(size_t n) : data(new int[n]) {}\n    // 还需要实现什么？\n};\n```',
    options: ['不需要额外的', '拷贝构造函数', '移动构造函数和移动赋值', '析构函数'],
    correct: 2,
    explanation: 'unique_ptr 不可拷贝，所以 Widget 也不可拷贝。需要实现移动构造函数和移动赋值运算符来转移所有权。',
    knowledgePoints: ['Rule of Five', 'unique_ptr', '移动语义']
  }
];

export default advancedCppQuestions;
