/**
 * C++ 基础题 02 - 引用 vs 指针
 */
export const cpp_interview_02 = {
  title: '引用 vs 指针',
  difficulty: '中级',
  question: `完成以下练习`,
  code: `#include <iostream>
using namespace std;

void swap_by_ref(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;
    swap_by_ref(x, y);
    cout << "x=" << x << ", y=" << y << endl;
    return 0;
}`,
  answer: `C++ 引用作为函数参数`,
  keyPoints: ['C++ 特性', '面向对象', '语法基础']
};
