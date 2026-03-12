# Tasks
- [x] Task 1: 备份原始文件
  - [x] 创建 CodeRunner.tsx.backup 备份文件
  
- [x] Task 2: 移除 HighlightedLine 组件
  - [x] 删除整个 HighlightedLine 函数定义
  
- [x] Task 3: 移除 highlight 层相关代码
  - [x] 移除 highlightRef 引用
  - [x] 移除 tokenizedLines 和 tokenize 逻辑
  - [x] 移除 syncScroll 同步滚动函数
  - [x] 移除 highlight 层的 pre 元素渲染
  
- [x] Task 4: 修改 textarea 样式
  - [x] 将文本颜色从透明改为可见（`color: '#e2e8f0'`）
  - [x] 移除 WebkitTextFillColor 设置
  - [x] 移除 onScroll={syncScroll} 绑定
  
- [x] Task 5: 测试验证
  - [x] 测试删除分号 `;` 时光标位置正确
  - [x] 测试包含特殊字符的代码光标正确
  - [x] 验证单层渲染没有性能问题

# Task Dependencies
- Task 2 依赖于 Task 1
- Task 3 依赖于 Task 1 和 Task 2
- Task 4 依赖于 Task 1、Task 2 和 Task 3
