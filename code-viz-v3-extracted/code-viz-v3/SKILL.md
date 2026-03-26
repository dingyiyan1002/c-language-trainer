---
name: code-viz-animation
description: >
  交互式代码可视化教学动画制作系统 v5.4（强化版），适用于 C / C++ / 嵌入式 Linux 全知识域。
  接收一个编程知识点，输出单文件可直接在浏览器运行的完整 HTML 动画。
  凡用户说「给我做一个 XX 的动画」「可视化这段代码」「交互式演示 XX」
  「动画讲解指针/内存/链表/排序/递归/位运算」「帮我做教学演示」等，
  必须立即使用本技能。即使用户只说「做个 HTML」「演示一下 XX」
  也应优先考虑本技能。输出包含代码高亮步进、变量卡片、讲解面板的完整单文件 HTML。
---

# 交互式代码可视化动画 v5.4 — 执行手册（强化版）

> 本手册专为「按步骤执行」设计。**不要跳步，不要自由发挥，每一步都有明确指令。**
> 
> **v5.4 新增**：基于实战测试强化，修复「代码高亮与讲解错位」「输出提前显示」两大核心问题。

---

## ⛔ 动手前必读：三条死亡禁令

在写任何代码之前，把这三条背下来。这是最常见的致命错误：

### 禁令 A：LINE_MAP 必须与 explanations 逐步对齐（v5.4 强化）

```
LINE_MAP[N] 高亮的行号  ===  第 N 步 explanation 描述的那行代码

❌ 死错：LINE_MAP[2]=3，但 explanation step 2 说的是"声明变量 a"（在第 4 行）
✅ 正确：LINE_MAP[2]=4，explanation step 2 说"声明变量 a"（第 4 行）

❌ 死错：代码行号从 1 开始，但 LINE_MAP 写的是 3,4,5...（实际代码在 4,5,6...）
✅ 正确：先写出完整代码，逐行编号，然后 LINE_MAP 直接抄实际行号
```

**执行步骤**：
1. 先写出完整示例代码，**给每行标上行号**（包括 `#include` 和空行）
2. 规划每一步讲解哪行代码
3. 填写对齐表（见第二步）
4. LINE_MAP 直接抄对齐表的行号列

---

### 禁令 B：状态机必须"顶部全量重置 + 逐 case 完整快照"（v5.4 强化）

```jsx
// ❌ 死错：只重置部分状态，忘记重置业务变量
useEffect(() => {
  setExecutedLines([]);
  // 忘了 setVarA(null)、setVarP(null) → 后退时旧值残留

// ✅ 正确：顶部把所有变量（包括业务变量）全部重置为初始值，然后 switch 里逐 case 完整设置
useEffect(() => {
  // 第一步：重置所有状态（包括业务变量！）
  setHighlightVar(null); 
  setIsDangerLine(false);
  setExecutedLines([]); 
  setOutput([]);
  setVarA(null);  // ← 所有业务变量都要写！
  setVarP(null); 
  setVarB(null);
  
  // 第二步：switch 每个 case 都是完整快照，不能依赖前一个 case 的状态
  switch(step) { 
    case 0: break;
    case 1:
      setVarA(10);
      setExecutedLines([]);  // 当前行是第 1 步，之前没有执行完的行
      break;
    case 2:
      setVarA(10);  // ← 必须重复设置！因为顶部已重置为 null
      setVarB(20);
      setExecutedLines([4]);  // 行 4 已执行完（不包含当前行 5）
      break;
  }
}, [step]);
```

**executedLines 核心规则**（v5.4 重点修复）：
```
executedLines = 已经执行完毕的行（灰化显示），不包含当前高亮行

❌ 死错：case 2 高亮行 5，但 executedLines 写 [3,4,5]（包含了当前行 5）
✅ 正确：case 2 高亮行 5，executedLines 写 [3,4]（只包含已执行完的行）

规律：case N 的 executedLines = case N-1 的 executedLines + case N-1 的 currentLine
```

---

### 禁令 C：CodeLine 内必须用 span 语法着色，禁止纯文字

```jsx
// ❌ 死错（纯白色文字，没有语法高亮）
<CodeLine num={4}>&nbsp;&nbsp;int a = 10;</CodeLine>

// ✅ 正确（关键字蓝色、数字橙色、运算符粉色）
<CodeLine num={4}>
  &nbsp;&nbsp;<span className="text-blue-400">int</span>{' '}
  a <span className="text-pink-400">=</span>{' '}
  <span className="text-orange-300">10</span>;
</CodeLine>
```

着色速查表在 `references/4-着色与组件.md`。

---

## 强制执行流程（按顺序，不能跳步）

### ✅ 第一步：规划代码内容

确定要演示的知识点后，**先在脑子里或草稿上写出完整的示例代码**，给每行编号。

例如演示"C 指针"：
```
行号  代码内容
1:    #include <stdio.h>
2:    （空行）
3:    int main() {
4:      int a = 10;
5:      int *p = &a;
6:      *p = 20;
7:      int b = a + *p;
8:      printf("%d\n", b);
9:      return 0;
10:   }
```

**重要**：行号必须连续，包括 `#include`、空行、花括号都要算行号。

---

### ✅ 第二步：填写"步骤 - 行号对齐表"（必须完成，不能跳过）

**这是防止 LINE_MAP 错位的唯一可靠方法。**

在草稿里填完下面这个表，再继续：

| step | 本步讲解的内容（用一句话） | 对应的代码行号 | LINE_MAP[N] |
|------|--------------------------|--------------|-------------|
| 0    | （初始，不讲解）           | -1           | -1          |
| 1    | 进入 main 函数             | 3            | 3           |
| 2    | 声明 int a = 10            | 4            | 4           |
| 3    | 声明 int *p = &a           | 5            | 5           |
| 4    | 通过 printf 输出 a          | 7            | 7           |
| 5    | 通过*p 修改 a 的值          | 6            | 6           |
| ...  | ...                        | ...          | ...         |

**规则**：
- 第三列「对应的代码行号」= 这步讲解的代码在哪一行
- 第四列 `LINE_MAP[N]` = 直接抄第三列的数字
- **每一步的 LINE_MAP 值必须等于这步 explanation 描述的代码行号**

---

### ✅ 第三步：确定业务状态变量 + 填写快照表

列出这个动画需要哪些变量卡片（VarCard），例如：
- `varA`（显示变量 a 的值）
- `varP`（显示指针 p 的值）
- `varB`（显示变量 b 的值）

然后**填写状态机快照表**（v5.4 强化版）：

| step | LINE_MAP | 当前高亮行 | executedLines（不含当前行） | varA | varP | highlightVar | isDangerLine | output |
|------|----------|-----------|---------------------------|------|------|--------------|--------------|--------|
| 0    | -1       | -         | []                        | null | null | null         | false        | []     |
| 1    | 3        | 3         | []                        | null | null | null         | false        | []     |
| 2    | 4        | 4         | [3]                       | 10   | null | 'a'          | false        | []     |
| 3    | 5        | 5         | [3,4]                     | 10   | null | null         | false        | []     |
| 4    | 6        | 6         | [3,4,5]                   | 10   | '0x1000' | 'p'       | false        | []     |
| 5    | 7        | 7         | [3,4,5,6]                 | 20   | '0x1000' | 'a'       | true         | []     |
| 6    | 8        | 8         | [3,4,5,6,7]               | 20   | '0x1000' | null      | false        | ['20'] |

**关键规则**（v5.4 重点修复）：
1. `executedLines` 不包含当前高亮行（当前行由 LINE_MAP 负责）
2. 每个 case 必须重复设置所有业务变量（因为顶部已重置）
3. `output` 在这步代码执行完后才显示（不是在执行前）

---

### ✅ 第四步：读取代码模板，填空输出

打开 `references/3-完整模板.md`，**从头到尾复制模板**，然后把其中标有 `【填入：...】` 的位置替换成你的内容。

模板里已经包含：
- 所有 CSS 样式（直接复用，不要修改）
- SVG 图标系统（直接复用）
- VarCard 组件（直接复用）
- App 组件骨架（按顺序填空）

**不要从空白开始写，只填空。**

---

### ✅ 第五步：输出前自检（v5.4 强化版）

输出 HTML 之前，对照下面的清单逐条检查：

```
【═══════════════════════════════════════】
【 致命错误检查（违反任何一条都会错位）】
【═══════════════════════════════════════】

[ ] LINE_MAP 每条注释同时写了「高亮哪行」+「讲解什么」，两者一致
    检查方法：LINE_MAP[2]=4  →  explanation step 2 必须说第 4 行的内容
    
[ ] 状态机 useEffect 顶部重置了所有业务变量（一个都没漏）
    检查方法：搜索所有 setVarX，确保顶部都有 setVarX(null)
    
[ ] switch 每个 case 都写了完整状态（不依赖前一个 case）
    检查方法：每个 case 是否重复设置了所有需要变化的变量
    
[ ] executedLines 不包含当前高亮行
    检查方法：case N 的 executedLines 不应该包含 LINE_MAP[N] 的值
    
[ ] 每个 CodeLine 的 children 用了 span 着色（没有纯文字的行）
    检查方法：搜索 `&nbsp;&nbsp;int`，如果有就是错的

【═══════════════════════════════════════】
【 常见错误检查（违反会导致显示异常） 】
【═══════════════════════════════════════】

[ ] COLOR_MAP 颜色键只用了 6 个合法值：green/red/yellow/purple/blue/orange
    检查方法：搜索 `amber` `gray` `cyan` `teal`，有就是错的
    
[ ] isNew={step === N}（精确等号），不是 >= N
    检查方法：搜索 `isNew={`，确保右边是 `step ===`
    
[ ] currentLine 声明在所有引用它的 useEffect 之前
    检查顺序：useState → useRef → currentLine = LINE_MAP[step] → useEffect
    
[ ] msgScrollRef 的 effect 依赖 [step]，不是 [explanations.length]
    检查方法：搜索 `msgScrollRef`，依赖项必须是 [step]
    
[ ] ICON_MAP 和 COLOR_MAP 在 App 函数外部声明
    检查方法：确保它们在 `function App()` 之前
    
[ ] CSS .var-card::before 里 position 和 inset 是两行，分号分隔
    检查方法：搜索 `.var-card::before`，确保是两行不是一行

【═══════════════════════════════════════】
【 通用检查                                       】
【═══════════════════════════════════════】

[ ] CDN 引入顺序：React → ReactDOM → Babel → Tailwind
[ ] 全文零 Emoji，所有图标是内联 SVG
[ ] 单文件，浏览器直接打开可运行
[ ] 代码行号与实际内容匹配（不要出现行号 4 但内容是#include）
```

---

## v5.4 新增：实战测试中发现的典型 Bug

### Bug 1：代码高亮与讲解错位一步

**症状**：高亮到 `int a = 10` 时，下面讲解已经显示「声明变量 b」

**根因**：`executedLines` 包含了当前高亮行，导致状态提前更新

**修复**：
```jsx
// ❌ 错误
case 2:  // 高亮行 4: int a = 10
  setExecutedLines([3, 4]);  // 包含了当前行 4
  break;

// ✅ 正确
case 2:  // 高亮行 4: int a = 10
  setExecutedLines([3]);  // 只包含已执行完的行 3
  break;
```

---

### Bug 2：输出提前显示

**症状**：高亮到 `printf("a = %d\n", a)` 时，输出区已经显示了结果

**根因**：output 在错误的时间点设置（应该在 printf 执行完后）

**修复**：
```jsx
// ❌ 错误：高亮 printf 时就显示输出
case 4:  // 高亮行 7: printf(...)
  setOutput(['a = 10']);
  break;

// ✅ 正确：高亮下一行时才显示上一行的输出
case 4:  // 高亮行 7: printf(...)
  // 不设置 output
  break;
case 5:  // 高亮行 8: 下一行
  setOutput(['a = 10']);  // 现在才显示
  break;
```

---

### Bug 3：后退时状态残留

**症状**：从 step 5 后退到 step 2 时，指针 p 仍然显示值

**根因**：状态机顶部没有重置业务变量

**修复**：
```jsx
// ❌ 错误：只重置 UI 状态
useEffect(() => {
  setHighlightVar(null);
  setIsDangerLine(false);
  setExecutedLines([]);
  // 忘了重置 varA, varP, varB
  switch(step) { ... }
}, [step]);

// ✅ 正确：所有变量都重置
useEffect(() => {
  setHighlightVar(null);
  setIsDangerLine(false);
  setExecutedLines([]);
  setOutput([]);
  setVarA(null);  // ← 业务变量也要重置
  setVarP(null);
  setVarB(null);
  switch(step) { ... }
}, [step]);
```

---

### Bug 4：LINE_MAP 与代码实际行号不匹配

**症状**：代码高亮跳到了空行或 `#include` 行

**根因**：写 LINE_MAP 时凭记忆写行号，没有对照实际代码

**修复**：
1. 先写出完整代码，每行标上行号
2. 填写对齐表时直接抄行号
3. LINE_MAP 直接抄对齐表

```jsx
// ✅ 正确做法：注释写清楚高亮哪行 + 讲解什么
const LINE_MAP = {
  0: -1,   // step 0 → 无高亮              explanation: 无
  1: 4,    // step 1 → 高亮 int a = 10     explanation: 声明变量 a
  2: 5,    // step 2 → 高亮 int b = 20     explanation: 声明变量 b
  3: 6,    // step 3 → 高亮 int *p = &a    explanation: 声明指针 p
};
```

---

## 参考文件索引

| 文件 | 用途 | 何时读 |
|------|------|--------|
| `references/1-原始规范.md` | 完整原始文档（权威参考）| 遇到疑问时 |
| `references/2-Fix 速查.md` | 13 条 Fix 的错误/正确对比 | 遇到具体 Bug 时 |
| `references/3-完整模板.md` | 可填空的 HTML 完整模板 | **第四步时必读** |
| `references/4-着色与组件.md` | 语法着色速查 + 所有 UI 组件代码 | 写 CodeLine 时 |

---

## 快速检查清单（打印贴桌前）

```
□ 1. 写出完整代码，标好行号
□ 2. 填写「步骤 - 行号对齐表」
□ 3. 填写「状态机快照表」
□ 4. 打开模板填空
□ 5. 对照自检清单逐条检查
□ 6. 重点检查 executedLines 是否包含当前行
□ 7. 重点检查 LINE_MAP 与 explanation 是否对齐
□ 8. 重点检查状态机顶部是否重置所有变量
```

---

*版本：v5.4（2026-03 强化版）*  
*基于实战测试修复「代码高亮错位」「输出提前显示」两大核心问题*
