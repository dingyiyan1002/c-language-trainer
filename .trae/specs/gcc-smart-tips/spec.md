# GCC 智能提示增强 Spec

## Why
当前 GCC 错误提示虽然已中文化，但还不够智能：
- 只告诉用户"哪里错了"，没说"为什么错"
- 没有提供修复建议
- 初学者可能看不懂错误信息
- 同样的错误反复犯

## What Changes
- **智能错误分析**：
  1. 识别常见错误模式（如 `stdio. h` 空格问题）
  2. 提供详细的错误原因解释
  3. 给出修复建议
  4. 提供正确的代码示例

- **知识点关联**：
  1. 关联到相关的 C 语言知识点
  2. 推荐学习资料
  3. 提示常见陷阱

- **错误分类**：
  1. 语法错误（红色 - 必须修复）
  2. 警告（黄色 - 建议修复）
  3. 提示（蓝色 - 最佳实践）

## Impact
- **Affected specs**: error-messages-chinese
- **Affected code**: `server/runner.js` - 智能错误分析
- **Affected code**: `src/components/CodeRunner.tsx` - 显示智能提示

## ADDED Requirements
### Requirement: 智能错误解释
系统 SHALL 为常见错误提供详细解释和修复建议

#### Scenario: 头文件空格错误
- **WHEN** 用户写 `#include <stdio. h>`（带空格）
- **THEN** 提示"头文件名不能包含空格"，建议"改为 `#include <stdio.h>`"

### Requirement: 代码示例
系统 SHALL 为常见错误提供正确的代码示例

#### Scenario: 函数未声明
- **WHEN** 使用了未声明的函数
- **THEN** 显示正确的函数声明示例

## MODIFIED Requirements
### Requirement: 错误显示
错误提示 SHALL 包含：错误类型 + 原因解释 + 修复建议 + 示例代码

## REMOVED Requirements
### Requirement: 简单错误提示
**Reason**: 不够智能，对初学者不友好
**Migration**: 使用智能错误分析
