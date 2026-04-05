# 页面布局居中修复 Spec

## Why
页面内容在全屏模式下始终靠左显示，没有正确居中。用户多次反馈"页面还是靠左边"，经过多次尝试修复（添加 w-full、mx-auto、flexbox 等）仍未解决。需要进行深度根因分析并彻底修复。

## What Changes
- 深度诊断布局不居中的根本原因
- 修复 App.tsx 中根容器和 main 元素的布局结构
- 清理 index.css / global.css / tokens.css 中可能冲突的样式
- 确保 Tailwind CSS v4 的类名正确生效
- 验证 Header 和主内容区域的对齐一致性

## Impact
- Affected code:
  - `src/App.tsx` - 根容器和 main 布局
  - `src/index.css` - 全局样式和 #root 定义
  - `src/styles/global.css` - 全局重置样式（* 选择器）
  - `src/styles/tokens.css` - 设计令牌

## 根因分析

### 问题现象
从截图可见：Header 导航栏、统计卡片、章节列表全部靠左，未居中。

### 可能原因（按可能性排序）

1. **global.css 的 `* { margin: 0; padding: 0; }` 与 flexbox 布局冲突**
   - global.css 第1-5行的通用选择器可能干扰 Tailwind 的间距系统

2. **多个 CSS 文件的 body/html 样式重复定义**
   - index.css 定义了 `body { width: 100%; }`
   - global.css 定义了 `body { font-family: var(--font-sans); ... }`
   - 两者的属性合并可能导致意外行为

3. **#root 的 flex 布局与子元素 width 冲突**
   - `#root` 设置了 `display: flex; flex-direction: column;`
   - 但子元素 App 的 div 也设置了 `flex flex-col`
   - 嵌套的 flex 容器可能导致宽度计算异常

4. **Tailwind v4 的 max-w-7xl 行为变化**
   - Tailwind v4 使用新的引擎（Oxide），某些类名的行为可能有差异
   - `mx-auto` 在特定条件下可能不生效

5. **container-main 类的遗留影响**
   - index.css 定义了 `.container-main { max-width: 1024px; }` 但未被使用
   - 可能有其他地方引用了这个类

## ADDED Requirements

### Requirement: 页面内容水平居中
系统 SHALL 在所有屏幕尺寸下将主要内容区域水平居中显示。

#### Scenario: 大屏显示（>1280px）
- **WHEN** 用户在宽屏浏览器中打开应用
- **THEN** Header 和 main 内容应在 `max-w-7xl`(1280px) 容器内居中，左右留白相等

#### Scenario: 中等屏幕（640px-1280px）
- **WHEN** 用户在中等尺寸屏幕查看
- **THEN** 内容应自适应宽度，保持合理的左右内边距

### Requirement: Header 与主内容对齐
系统的 Header 导航栏 SHALL 与下方的主内容区域保持相同的最大宽度和水平位置。

## MODIFIED Requirements

### Requirement: 全局样式清理
移除冗余和冲突的全局样式定义，确保只有一个权威的样式来源。
