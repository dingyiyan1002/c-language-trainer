# AI 提示词可视化配置器 Spec

## Why
当前 AI 提示词配置分散在代码中，修改不便，且提示词不够简洁直白。需要一个可视化的配置页面，让用户能用大白话轻松配置 AI 回答风格，并支持保存和复用模板。

## What Changes
- ✅ 创建可视化提示词配置页面
- ✅ 提供大白话提示词模板（简洁、直接、说人话）
- ✅ 支持自定义提示词并实时预览
- ✅ 保存配置到 localStorage
- ✅ 创建通用提示词生成器组件
- ✅ 后端 API 支持动态加载提示词

## Impact
- 受影响文件：`server/aiProviders.js`, `src/components/AIPromptConfig.tsx`
- 新增文件：可视化配置页面、提示词模板库

## ADDED Requirements

### Requirement: 可视化提示词配置页面
系统 SHALL 提供一个可视化页面，让用户可以：
- 选择不同的提示词模板
- 实时预览提示词效果
- 自定义编辑提示词
- 保存配置

#### Scenario: 成功配置
- **WHEN** 用户打开配置页面
- **THEN** 看到多个提示词模板选项
- **THEN** 可以实时预览和编辑
- **THEN** 点击保存后配置立即生效

### Requirement: 大白话提示词模板
系统 SHALL 提供以下预设模板：
1. **简洁直接版** - "说人话，别啰嗦"
2. **详细讲解版** - "像老师一样耐心讲解"
3. **代码优先版** - "先给代码，再简单解释"
4. **考试技巧版** - "告诉怎么得分"

### Requirement: 通用提示词生成器
系统 SHALL 提供一个通用组件，可以：
- 根据选择的模板生成提示词
- 支持自定义参数（语气、长度、重点等）
- 导出为 JSON 配置

## MODIFIED Requirements

### Requirement: 后端 AI 调用
**修改**: `server/aiProviders.js` 中的 `DEFAULT_SYSTEM_PROMPT`
- 从硬编码改为可动态加载
- 支持从 localStorage 读取用户配置
- 提供默认模板作为后备

## REMOVED Requirements
无
