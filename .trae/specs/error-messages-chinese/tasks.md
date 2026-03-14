# Tasks
- [ ] Task 1: 扩展错误信息翻译映射
  - [ ] 收集常见的 GCC 错误信息
  - [ ] 翻译成中文
  - [ ] 添加到 runner.js 的 translateErrorMessage 函数
  
- [ ] Task 2: 解析错误行号
  - [ ] 从 GCC 错误信息中提取行号
  - [ ] 返回错误行号数组给前端
  
- [ ] Task 3: Canvas 绘制红色波浪线
  - [ ] 添加波浪线绘制函数
  - [ ] 在错误行下方绘制波浪线
  - [ ] 使用红色，线宽 2px
  
- [ ] Task 4: 前端错误显示
  - [ ] 接收后端返回的错误行号
  - [ ] 传递给 Canvas 渲染
  - [ ] 测试错误标记显示

# Task Dependencies
- Task 2 依赖于 Task 1
- Task 3 依赖于 Task 2
- Task 4 依赖于 Task 3
