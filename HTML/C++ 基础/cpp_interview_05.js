/**
 * C++ 基础题 05 - 构造函数
 */
export const cpp_interview_05 = {
  title: '构造函数',
  difficulty: '中级',
  question: `完成以下练习`,
  code: `#include <iostream>
using namespace std;

class Rectangle {
private:
    int width, height;
public:
    Rectangle(int w, int h) : width(w), height(h) {}
    
    int area() {
        return width * height;
    }
};

int main() {
    Rectangle rect(5, 10);
    cout << "Area: " << rect.area() << endl;
    return 0;
}`,
  answer: `构造函数初始化列表`,
  keyPoints: ['C++ 特性', '面向对象', '语法基础']
};
