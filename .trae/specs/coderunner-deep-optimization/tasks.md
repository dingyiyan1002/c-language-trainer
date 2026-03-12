# Tasks
- [ ] Task 1: 添加 Canvas 元素作为背景层
  - [ ] 在 textarea 后面添加 Canvas 元素
  - [ ] 设置 Canvas 样式为绝对定位，与 textarea 完全重叠
  - [ ] 设置 Canvas 的 pointer-events 为 none
  
- [ ] Task 2: 实现 Canvas 语法高亮渲染
  - [ ] 创建 tokenize 函数（复用之前的逻辑）
  - [ ] 实现 Canvas 文本渲染函数
  - [ ] 为不同类型的 token 设置不同颜色
  - [ ] 使用 requestAnimationFrame 优化渲染
  
- [ ] Task 3: 实现 Canvas 与 textarea 同步
  - [ ] 监听 textarea 的 onChange 事件
  - [ ] 监听 textarea 的 onScroll 事件
  - [ ] 同步 Canvas 和 textarea 的滚动位置
  - [ ] 同步字体大小、行高等样式
  
- [ ] Task 4: 性能优化
  - [ ] 使用防抖处理 Canvas 渲染
  - [ ] 只渲染可见区域的代码
  - [ ] 缓存已渲染的行
  - [ ] 使用离屏 Canvas 预渲染
  
- [ ] Task 5: 测试验证
  - [ ] 测试语法高亮正确显示
  - [ ] 测试光标位置精确同步
  - [ ] 测试快速输入时没有卡顿
  - [ ] 测试滚动同步正常
  - [ ] 测试特殊字符显示正确

# Task Dependencies
- Task 2 依赖于 Task 1
- Task 3 依赖于 Task 1 和 Task 2
- Task 4 依赖于 Task 2 和 Task 3
- Task 5 依赖于 Task 1、Task 2、Task 3 和 Task 4
