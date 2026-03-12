# Textarea Caret Sync Fix Spec

## Why
用户在代码编辑器中发现光标位置（实际输入位置）与视觉显示不一致的问题。特别是当代码中出现特殊字符（如 `<`、`>`、`&`、`;` 等）时，textarea 的 selectionStart 计算的位置与高亮层显示的字符宽度不匹配。

## What Changes
- **根本原因分析**：双层渲染架构导致 sub-pixel 累积误差
  - textarea 层：浏览器原生渲染，光标位置精确
  - highlight 层：React 渲染的多个 `<span>` 元素，每个 token 独立渲染产生 sub-pixel 偏差
  - 多层叠加后，偏差累积导致视觉错位
- **核心问题**：只要使用双层渲染，就不可避免地会产生渲染误差
- **解决方案**：
  1. **彻底移除 highlight 层**，只保留 textarea 单层渲染
  2. 将 textarea 的文本颜色从透明改为可见（`color: '#e2e8f0'`）
  3. 移除所有与 highlight 层相关的代码（tokenize、tokenizedLines、highlightRef 等）

## Impact
- **Affected specs**: 无
- **Affected code**: `src/components/CodeRunner.tsx` - HighlightedLine 组件和 highlight 层的 pre 元素

## ADDED Requirements
### Requirement: 光标与视觉同步
系统 SHALL 确保光标位置（textarea 的 selectionStart）与视觉显示完全同步，无论代码中包含何种特殊字符。

#### Scenario: 特殊字符代码
- **WHEN** 用户输入包含 `<`、`>`、`&`、`;` 等特殊字符的代码
- **THEN** 光标应该始终位于正确的字符位置，视觉显示与实际输入位置偏差不超过 1 像素

## MODIFIED Requirements
### Requirement: HighlightedLine 组件
HighlightedLine 组件 SHALL 使用与 textarea 完全一致的字体和间距设置，不添加任何额外的字体特性。

### Requirement: 高亮层 pre 元素
高亮层的 pre 元素 SHALL 使用与 textarea 相同的 `white-space: pre-wrap` 和 `break-normal` 设置。

## REMOVED Requirements
### Requirement: 复杂字体特性
**Reason**: `font-feature-settings: "calt" 0` 和 `font-variant-numeric: tabular-nums` 在 highlight 层和 textarea 层的渲染行为不一致，导致字符宽度计算偏差。
**Migration**: 移除这些设置，使用浏览器默认的等宽字体渲染。
