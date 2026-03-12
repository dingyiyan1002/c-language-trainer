# CodeRunner 深度优化 Spec

## Why
虽然已经解决了光标同步问题，但当前实现失去了语法高亮功能，影响了代码可读性和用户体验。需要在保持光标精确同步的前提下，恢复语法高亮功能，并优化整体性能。

## What Changes
- **深度分析当前问题**：
  1. 单层渲染虽然解决了光标同步，但失去了语法高亮
  2. 用户需要手动输入代码，没有视觉反馈
  3. 长时间编写代码容易疲劳和出错
  
- **优化方案**：
  1. **使用 Canvas 渲染语法高亮背景** - Canvas 可以精确控制每个像素，避免 sub-pixel 误差
  2. **textarea 保持透明** - 只负责接收输入和显示光标
  3. **Canvas 作为背景层** - 渲染语法高亮，不参与交互
  
- **技术优势**：
  - Canvas 渲染是精确的像素级渲染，不会有 sub-pixel 累积误差
  - textarea 仍然是原生渲染，光标位置精确
  - 两层完全独立，不会相互影响

## Impact
- **Affected specs**: textarea-caret-sync-fix
- **Affected code**: `src/components/CodeRunner.tsx` - 添加 Canvas 渲染层

## ADDED Requirements
### Requirement: Canvas 语法高亮背景
系统 SHALL 使用 Canvas 渲染语法高亮作为背景层，确保与 textarea 精确对齐。

#### Scenario: 代码输入
- **WHEN** 用户输入代码
- **THEN** Canvas 实时更新语法高亮，textarea 保持透明接收输入

### Requirement: 性能优化
系统 SHALL 确保 Canvas 渲染不会影响输入性能，帧率保持 60fps。

#### Scenario: 快速输入
- **WHEN** 用户快速打字输入
- **THEN** Canvas 渲染不会造成输入延迟或卡顿

## MODIFIED Requirements
### Requirement: textarea 样式
textarea SHALL 保持透明（`color: 'transparent'`），只显示光标，背景高亮由 Canvas 提供。

### Requirement: 同步机制
Canvas 渲染 SHALL 与 textarea 内容同步，使用 requestAnimationFrame 优化渲染时机。

## REMOVED Requirements
### Requirement: 无语法高亮
**Reason**: 用户体验差，长时间编写代码容易疲劳。
**Migration**: 使用 Canvas 渲染语法高亮背景。
