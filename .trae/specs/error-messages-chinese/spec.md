# 错误提示中文化和红色波浪线 Spec

## Why
1. 当前错误提示是英文，对中文用户不友好
2. 没有直观的错误位置标记，用户难以定位错误
3. 需要增强错误提示的可视化效果

## What Changes
- **错误信息中文化**：
  1. 扩展 runner.js 的错误翻译映射
  2. 翻译所有常见的 GCC 错误信息
  3. 翻译运行时错误信息
  
- **红色波浪线标记**：
  1. Canvas 渲染时解析错误信息，提取错误行号
  2. 在错误行下方绘制红色波浪线
  3. 支持多行错误标记

## Impact
- **Affected specs**: textarea-caret-sync-fix, coderunner-deep-optimization
- **Affected code**: 
  - `server/runner.js` - 错误翻译
  - `src/components/CodeRunner.tsx` - Canvas 渲染波浪线

## ADDED Requirements
### Requirement: 错误信息中文化
系统 SHALL 将所有错误提示翻译成中文，包括：
- 编译错误
- 链接错误
- 运行时错误
- 语法错误

#### Scenario: 编译错误
- **WHEN** 代码有语法错误
- **THEN** 显示中文错误提示，如"致命错误：未识别的标识符"

### Requirement: 红色波浪线标记
系统 SHALL 在错误代码行下方绘制红色波浪线

#### Scenario: 单行错误
- **WHEN** 第 5 行代码有错误
- **THEN** 第 5 行下方显示红色波浪线

#### Scenario: 多行错误
- **WHEN** 多行代码有错误
- **THEN** 每行下方都显示红色波浪线

## MODIFIED Requirements
### Requirement: Canvas 渲染
Canvas SHALL 支持绘制错误标记（红色波浪线）

### Requirement: 错误解析
系统 SHALL 解析 GCC 错误信息，提取行号和错误类型

## REMOVED Requirements
### Requirement: 英文错误提示
**Reason**: 对中文用户不友好
**Migration**: 全部翻译为中文
