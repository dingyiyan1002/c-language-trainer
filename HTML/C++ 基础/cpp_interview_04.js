/**
 * C++ 基础题 04 - 类和对象
 */
export const cpp_interview_04 = {
  title: '类和对象',
  difficulty: '中级',
  question: `完成以下练习`,
  code: `#include <iostream>
#include <string>
using namespace std;

class Person {
private:
    string name;
    int age;
public:
    void setInfo(string n, int a) {
        name = n;
        age = a;
    }
    void display() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

int main() {
    Person p;
    p.setInfo("Alice", 25);
    p.display();
    return 0;
}`,
  answer: `C++ 类的基本结构`,
  keyPoints: ['C++ 特性', '面向对象', '语法基础']
};
