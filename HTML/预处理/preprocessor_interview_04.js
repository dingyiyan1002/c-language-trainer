/**
 * 预处理面试题 04 - #pragma once
 */
export const preprocessor_interview_04 = {
  title: '#pragma once',
  difficulty: '中级',
  question: `分析以下代码`,
  code: `// 头文件保护
#pragma once

// 或传统方式
#ifndef HEADER_H
#define HEADER_H

// 头文件内容

#endif`,
  answer: `防止头文件重复包含`,
  keyPoints: ['宏定义', '条件编译', '预处理技巧']
};
