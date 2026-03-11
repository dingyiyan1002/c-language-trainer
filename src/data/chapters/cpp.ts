// cpp 章节数据
import type { Chapter } from '../types';

export const cpp: Chapter = {
    id: 'cpp',
    name: 'C++基础入门',
    icon: 'Square',
    description: '从C到C++：引用、类与对象、继承多态、STL容器、智能指针、移动语义、模板',
    questionCount: 30,
    mode: 'practice',
    lessons: [
      {
        id: 'cpp-1',
        title: 'C++与C的区别',
        content: `C++在C基础上的增强：

**新增特性**
- 引用(&): 变量别名
- bool类型: true/false
- 命名空间(namespace)
- 函数重载: 同名不同参数
- 默认参数: 函数参数默认值

**类型安全**
- 更严格的类型检查
- const更强大
- 新式类型转换: static_cast等

**面向对象**
- 类(class): 封装数据和方法
- 继承: 代码复用
- 多态: 运行时绑定

**标准库**
- STL容器: vector, map, string
- 智能指针: unique_ptr, shared_ptr
- 算法: sort, find, transform`,
        keyPoints: ['引用是别名', '类封装数据和方法', 'STL提供现成容器']
      },
      {
        id: 'cpp-2',
        title: '引用 vs 指针',
        content: `引用和指针的区别：

**引用特性**
- 必须初始化
- 不能改变引用目标
- 没有空引用
- 语法更简洁

**指针特性**
- 可以不初始化
- 可以改变指向
- 可以是空指针
- 需要解引用(*)

**使用场景**
- 函数参数传递: 优先用引用
- 可能为空: 用指针
- 需要重新指向: 用指针
- 运算: 用指针

**const引用**
- const int& ref = 10; // 合法
- 可以绑定临时值
- 避免拷贝开销`,
        keyPoints: ['引用必须初始化', '引用不能改变目标', '参数传递优先用引用']
      },
      {
        id: 'cpp-3',
        title: '类与对象',
        content: `C++类的核心概念：

**类定义**
- class ClassName { ... };
- 成员变量(属性)
- 成员函数(方法)
- 访问控制: public/private/protected

**构造函数**
- 与类同名，无返回值
- 对象创建时自动调用
- 可以重载
- 初始化列表: ClassName(): member(val) {}

**析构函数**
- ~ClassName()
- 对象销毁时自动调用
- 用于释放资源

**this指针**
- 指向当前对象
- 成员函数隐含参数
- return *this; 支持链式调用`,
        keyPoints: ['构造函数初始化对象', '析构函数释放资源', 'this指向当前对象']
      },
      {
        id: 'cpp-4',
        title: '继承与多态',
        content: `C++面向对象核心：

**继承**
- class Derived : public Base
- 子类继承父类成员
- public/protected/private继承

**虚函数(virtual)**
- virtual void func();
- 子类可以重写(override)
- 实现运行时多态

**纯虚函数与抽象类**
- virtual void func() = 0;
- 含纯虚函数的类是抽象类
- 不能实例化

**多态条件**
1. 基类指针/引用
2. 虚函数
3. 子类重写

**虚析构函数**
- virtual ~Base();
- 确保正确调用子类析构
- 多态基类必须有`,
        keyPoints: ['virtual实现多态', '纯虚函数定义抽象类', '基类析构函数要virtual']
      },
      {
        id: 'cpp-5',
        title: 'STL容器基础',
        content: `C++标准模板库(STL)：

**序列容器**
- vector: 动态数组，尾部插入快
- deque: 双端队列
- list: 双向链表
- array: 固定大小数组

**关联容器**
- map: 键值对，有序
- set: 唯一键集合，有序
- unordered_map: 哈希表，O(1)查找

**常用操作**
- push_back()/pop_back(): 尾部操作
- insert()/erase(): 插入删除
- size()/empty(): 大小判断
- begin()/end(): 迭代器

**遍历方式**
- for(auto& item : container)
- for(auto it = v.begin(); it != v.end(); ++it)`,
        keyPoints: ['vector动态数组', 'map键值对', '范围for遍历']
      },
      {
        id: 'cpp-6',
        title: '智能指针',
        content: `C++11智能指针：

**unique_ptr**
- 独占所有权
- 不可拷贝，可移动
- 最轻量级
- auto p = std::make_unique<T>();

**shared_ptr**
- 共享所有权
- 引用计数
- 可拷贝
- auto p = std::make_shared<T>();

**weak_ptr**
- 弱引用，不增加计数
- 解决循环引用
- 需要lock()获取shared_ptr

**使用建议**
- 优先用unique_ptr
- 共享时用shared_ptr
- 避免裸指针管理资源
- 用make_unique/make_shared创建`,
        keyPoints: ['unique_ptr独占所有权', 'shared_ptr引用计数', 'weak_ptr解决循环引用']
      }
    ]
  };

export default cpp;
