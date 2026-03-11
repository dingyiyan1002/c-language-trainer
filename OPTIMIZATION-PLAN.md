# 项目优化计划

## 安全审查结果

**审查日期**: 2026-03-10

### 已验证安全
- ✅ Hooks 系统 - 11 个文件，仅本地操作
- ✅ Scripts 库 - 6 个文件，标准 Node.js API
- ✅ Agents - 16 个智能体，纯 Markdown 配置
- ✅ Skills - 46+ 个全局技能
- ✅ MCP - 200+ 个工具，官方来源

### 当前部署状态
- **Skills**: 46+ 个 (全局) + 23+ 个 (项目)
- **Commands**: 28 个
- **Agents**: 16 个
- **MCP 工具**: 200+ 个

---

## 代码优化优先级

### P0 - 严重 (立即执行)

| 文件 | 行数 | 问题 | 解决方案 |
|------|------|------|----------|
| `src/data/lessons.ts` | 23,308 | 数据文件过大 | 按章节拆分为独立文件 |
| `src/App.tsx` | 3,447 | 组件过大 | 提取视图组件 |

### P1 - 高 (本周执行)

| 文件/目录 | 问题 | 解决方案 |
|-----------|------|----------|
| `src/components/` | 32 个组件平铺 | 按功能分组为子目录 |
| `src/data/*.ts` | 类型定义分散 | 集中到 `data/types/` |

### P2 - 中 (后续优化)

- 提取共享 Hooks
- 创建共享 UI 组件库
- 优化打包体积

---

## 实施步骤

### 步骤 1: 拆分 lessons.ts
```
src/data/
├── lessons.ts (仅导出索引)
├── chapters/
│   ├── basics.ts
│   ├── pointers.ts
│   ├── memory.ts
│   └── ...
```

### 步骤 2: 提取视图组件
```
src/views/
├── HomeView.tsx
├── TrainingView.tsx
├── ReviewView.tsx
├── StatsView.tsx
├── ProjectView.tsx
├── LabView.tsx
└── ...
```

### 步骤 3: 重组 components
```
src/components/
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
├── learning/
│   ├── QuestionCard.tsx
│   └── LessonView.tsx
├── visualization/
│   ├── Visualization.tsx
│   └── MemoryViz.tsx
├── game/
│   ├── BitSwitchGame.tsx
│   └── StructPackerGame.tsx
└── ui/
    ├── Button.tsx
    └── Card.tsx
```

---

## 预期收益

- **主包体积**: 减少 300KB+
- **加载速度**: FCP 提升 20%
- **代码可维护性**: 显著提升
- **开发效率**: 更容易定位和修改

---

**状态**: 等待执行
