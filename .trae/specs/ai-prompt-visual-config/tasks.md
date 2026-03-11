# Tasks

- [x] Task 1: 创建大白话提示词模板库
  - [x] 定义 4 种风格的提示词模板（简洁、详细、代码优先、考试技巧）
  - [x] 每个模板包含：名称、描述、提示词内容、适用场景

- [x] Task 2: 创建提示词生成器组件
  - [x] 实现通用提示词生成函数
  - [x] 支持自定义参数（语气、长度、重点等）
  - [x] 导出为 JSON 格式

- [x] Task 3: 创建可视化配置页面组件
  - [x] 模板选择卡片（4 种风格）
  - [x] 实时预览区域
  - [x] 自定义编辑文本框
  - [x] 保存和重置按钮
  - [x] 使用 Tailwind CSS 美化界面

- [x] Task 4: 更新后端支持动态提示词
  - [x] 修改 `server/aiProviders.js`
  - [x] 从 localStorage 读取用户配置
  - [x] 提供默认模板作为后备
  - [x] 添加获取/保存提示词配置的 API 端点

- [x] Task 5: 集成到主应用
  - [x] 在 AI 配置面板添加"提示词设置"入口
  - [x] 点击可打开可视化配置页面
  - [x] 配置实时生效

- [x] Task 6: 测试和文档
  - [x] 测试所有模板的生成效果
  - [x] 测试配置保存和加载
  - [x] 创建使用说明文档

# Task Dependencies
- Task 2 depends on Task 1
- Task 3 depends on Task 2
- Task 4 depends on Task 2
- Task 5 depends on Task 3 and Task 4
- Task 6 depends on Task 5
