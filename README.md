# 嵌入式学习平台

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?style=flat&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.9-blue?style=flat&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-7-green?style=flat&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind-4-purple?style=flat&logo=tailwind-css" alt="Tailwind CSS">
</p>

## 项目简介

**嵌入式学习平台**是一个面向嵌入式开发学习者的在线学习平台。通过交互式练习、可视化教学和智能题库，帮助用户掌握嵌入式开发所需的核心知识，包括 C 语言、数据结构、计算机组成原理、单片机等。

### 核心特性

- **200+ 精选真题**：涵盖 C 语言基础、指针、结构体、内存管理等核心知识点
- **交互式学习**：选择题、排序题、代码练习等多种题型
- **代码可视化**：动态展示代码执行过程、内存布局、指针操作
- **互动实验室**：指针沙盒、结构体打包、位运算练习
- **学习进度跟踪**：本地存储学习进度，统计正确率
- **暗黑/亮色主题**：支持深色/浅色模式切换

### 学习路线

- ✅ C 语言核心（已完成）
- 🔜 数据结构与算法
- 📋 计算机组成原理
- 📋 操作系统基础
- 📋 单片机/ARM
- 📋 嵌入式 Linux

---

## 技术栈

| 类别 | 技术 |
|------|------|
| 前端框架 | React 19.2.3 |
| 语言 | TypeScript 5.9.3 |
| 构建工具 | Vite 7.2.4 |
| 样式方案 | Tailwind CSS 4.1.17 |
| 工具库 | clsx, tailwind-merge |
| 图标 | Lucide React 0.563.0 |
| 后端 | Node.js + Express (端口 3001) |

---

## 快速开始

### 环境要求
- Node.js 18+
- npm 或 yarn

### 一键启动
双击 `start.bat` 即可自动安装依赖并启动前后端服务。

### 手动启动

```bash
# 安装依赖
npm install

# 启动前端（端口 5173）
npm run dev

# 启动后端（端口 3001）
npm run dev:server

# 同时启动前后端
npm run dev:all
```

---

## 项目结构

```
embedded-learning/
├── src/                # 前端源代码
│   ├── components/     # React 组件
│   ├── data/           # 题目数据
│   ├── hooks/          # 自定义 Hooks
│   ├── services/       # API 服务
│   └── utils/          # 工具函数
├── server/             # 后端服务器
│   ├── index.js        # Express 服务器
│   └── runner.js       # 错误分析器
├── public/             # 静态资源
└── package.json        # 项目配置
```

---

## 许可证

MIT License
