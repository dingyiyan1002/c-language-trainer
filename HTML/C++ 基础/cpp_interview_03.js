/**
 * C++ 基础题 03 - 函数重载
 */
export const cpp_interview_03 = {
  title: '函数重载',
  difficulty: '中级',
  question: `完成以下练习`,
  code: `#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

int main() {
    cout << add(1, 2) << endl;
    cout << add(1.5, 2.5) << endl;
    cout << add(1, 2, 3) << endl;
    return 0;
}`,
  answer: `C++ 函数重载`,
  keyPoints: ['C++ 特性', '面向对象', '语法基础']
};
