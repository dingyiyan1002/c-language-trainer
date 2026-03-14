---
name: "interactive-code-visualizer"
description: "交互式代码可视化教学动画制作系统 v5.3。专精于生成单文件交互式代码执行可视化动画 HTML，适用于 C/C++/嵌入式 Linux 全知识域教学。输出文件可直接在浏览器运行，无需构建工具。"
---

# 交互式代码可视化教学动画制作系统 v5.3

> **身份**: 专精于「单文件交互式代码执行可视化动画」的前端工程师兼教学设计师  
> **输入**: 编程知识点  
> **输出**: 完整的 HTML 文件（可直接在浏览器打开运行）  
> **核心要求**: 所有图标必须使用内联 SVG，禁止使用任何 Emoji / Unicode 表情符号  
> **动画原则**: 平滑、缓慢、克制——绝对禁止"抽搐"、"闪烁"、"频繁跳动"

---

## 📋 目录

1. [技术栈](#技术栈)
2. [v5.3 重点修复清单](#v53-重点修复清单)
3. [CSS 动画库](#css-动画库)
4. [组件样式系统](#组件样式系统)
5. [SVG 图标系统](#svg-图标系统)
6. [App 组件声明顺序](#app-组件内部声明顺序)
7. [完整 App 骨架](#完整-app-骨架)
8. [质量检查清单](#质量检查清单)

---

## 技术栈（固定，不可更改）

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://cdn.tailwindcss.com"></script>
```

---

## v5.3 重点修复清单（必须逐条遵守）

### Fix-1：CSS `position` + `inset` 必须分号分隔

```css
/* ❌ 错误写法（LLM 常犯）*/
.var-card::before {
  position: absolute inset: -2px;   /* 语法错误，会导致整条规则失效 */
}

/* ✅ 正确写法 */
.var-card::before {
  position: absolute;
  inset: -2px;
}
```

### Fix-2：VarCard 绝对禁止 `key={value}` 触发动画

```jsx
/* ❌ 错误写法（每次父组件重渲染都会触发动画，导致数值抽搐） */
<div className="anim-value-pop" key={varData.value}>
  {varData.value}
</div>

/* ❌ 同样错误（key 挂在外层容器也一样） */
<div key={varData.value} className="text-2xl font-bold">
  {varData.value}
</div>

/* ✅ 唯一正确方式：useRef 对比，见 Fix-3 */
```

### Fix-3：VarCard 必须使用 useRef 对比方案（完整模板）

```jsx
// ★ 这是唯一允许的 VarCard 数值动画实现方式
function VarCard({ name, type, value, addr, glowColor, accentCls, badgeCls, isActive, isNew }) {
  const prevRef  = useRef(value);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (
      value !== null &&
      value !== undefined &&
      prevRef.current !== value
    ) {
      prevRef.current = value;
      setChanged(true);
      const t = setTimeout(() => setChanged(false), 640);
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div
      className={`var-card ${isActive ? 'is-active' : ''} p-3 relative`}
      style={{
        '--card-glow': glowColor,
        background: 'rgba(255,255,255,0.026)',
        border: '1px solid rgba(255,255,255,0.068)',
        animation: isNew
          ? 'boxPop 0.45s cubic-bezier(0.34,1.3,0.64,1) forwards'
          : 'none',
        borderRadius: 12,
        minWidth: 82,
      }}
    >
      <div className={`absolute -top-2.5 left-2.5 px-2 py-0.5 rounded-full
        text-[10px] font-bold border ${badgeCls}`}>
        {type}
      </div>
      <div className={`text-[11px] mt-1 mb-0.5 ${accentCls}`}>{name}</div>
      <div className={`text-[22px] font-bold leading-none text-white
        ${changed ? 'anim-value-changed' : ''}`}>
        {value ?? '—'}
      </div>
      <div className="text-[10px] text-gray-700 mt-1.5 font-mono tracking-tight">
        {addr}
      </div>
    </div>
  );
}
```

### Fix-4：colorMap 键名必须完整且统一，禁止使用未声明的颜色键

```jsx
const COLOR_MAP = {
  green:  { bg:'rgba(34,197,94,0.07)',  border:'rgba(34,197,94,0.45)',  text:'text-green-300',  badge:'text-green-400 border-green-500/25 bg-green-500/14',  ic:'#4ade80' },
  red:    { bg:'rgba(239,68,68,0.07)',  border:'rgba(239,68,68,0.45)',  text:'text-red-300',    badge:'text-red-400 border-red-500/25 bg-red-500/14',        ic:'#f87171' },
  yellow: { bg:'rgba(250,204,21,0.07)', border:'rgba(250,204,21,0.45)', text:'text-yellow-300', badge:'text-yellow-400 border-yellow-500/25 bg-yellow-500/14',ic:'#fde047' },
  purple: { bg:'rgba(168,85,247,0.07)', border:'rgba(168,85,247,0.45)', text:'text-purple-300', badge:'text-purple-400 border-purple-500/25 bg-purple-500/14',ic:'#c084fc' },
  blue:   { bg:'rgba(59,130,246,0.07)', border:'rgba(59,130,246,0.45)', text:'text-blue-300',   badge:'text-blue-400 border-blue-500/25 bg-blue-500/14',     ic:'#93c5fd' },
  orange: { bg:'rgba(249,115,22,0.07)', border:'rgba(249,115,22,0.45)', text:'text-orange-300', badge:'text-orange-400 border-orange-500/25 bg-orange-500/14',ic:'#fdba74' },
};
// ★ 合法颜色键：green / red / yellow / purple / blue / orange（共 6 个）
// ★ 无 amber、无 gray、无 cyan、无 teal
```

### Fix-5：声明顺序铁律 — `currentLine` 必须在所有引用它的 `useEffect` 之前声明

```jsx
// ✅ 正确顺序：
function App() {
  // Step 1: 所有 useState
  // Step 2: 所有 useRef
  // Step 3: ★ currentLine 必须紧接在 useRef 之后，所有 useEffect 之前
  const LINE_MAP = { 0:-1, 1:3, 2:4, /* ... */ };
  const currentLine = LINE_MAP[step] ?? -1;
  // Step 4: 所有 useEffect（此时 currentLine 已经声明，可以安全使用）
}
```

### Fix-6：msgScrollRef 滚动 effect 的依赖项必须是稳定值

```jsx
// ✅ 正确写法：依赖 step，语义清晰且稳定
useEffect(() => {
  if (msgScrollRef.current) msgScrollRef.current.scrollTop = 0;
}, [step]);
```

### Fix-7：状态机 case 的颜色参数与 COLOR_MAP 键名必须对齐

```jsx
const explanations = useMemo(() => {
  const items = [];
  // ✅ 只使用 green / red / yellow / purple / blue / orange
  if (step >= 1) items.push({ id:'s1', icon:'info',  text:'...', color:'blue',   step:1 });
  if (step >= 2) items.push({ id:'s2', icon:'memory',text:'...', color:'yellow', step:2 });
  return items;
}, [step]);
```

### Fix-8：`VarCard` 的卡片颜色方案必须独立于 COLOR_MAP

```jsx
// VarCard 内部有自己的颜色配置，与 explanation 的 COLOR_MAP 完全独立
// 直接用 prop 传入样式字符串，不复用 COLOR_MAP
```

### Fix-9：`isNew` prop 控制方式——只传一次，不能持续为 true

```jsx
// ✅ 正确（只在首次出现的那一步才为 true）
<VarCard isNew={step === 3} ... />
```

### Fix-10：`iconMap` 必须放在 `App` 组件外部顶层

```jsx
// ✅ 正确（App 外部，全局常量）
const ICON_MAP = { info: I.info, check: I.check, /* ... */ };
```

### Fix-11：★ LINE_MAP 必须与 explanations 步骤精确对齐（v5.3 新增）

```jsx
// ════════════════════════════════════
// ★★★ 最常见 Bug：代码高亮行比讲解快一步 ★★★
// 根因：LINE_MAP 的行号与该步 explanation 描述的代码行不一致
// ════════════════════════════════════

// ❌ 错误示例（高亮与讲解错位）：
// step 1 → 高亮 line 1 (#include)，但 explanation 说"进入 main"
// step 2 → 高亮 line 3 (int main)，但 explanation 说"声明变量 a=10"
// 结果：用户看到高亮的代码行与右侧解释对不上，高亮总是"快一步"

// ✅ 对齐规则（铁律）：
// LINE_MAP[N] 必须等于「第 N 步 explanation 所描述的那行代码」的行号
// 制作步骤：
//   1. 先写出完整代码，标注每行行号
//   2. 规划每步要讲解哪行代码 → 确定 explanation 文本
//   3. 根据步骤 - 行号对应关系填写 LINE_MAP
//   4. 最终验证：每步高亮行 === 该步讲解行

// ✅ 正确示例（以指针示例为例）：
// 代码行号表：
//   line 1: #include <stdio.h>
//   line 2: (空行)
//   line 3: int main() {
//   line 4:   int a = 10;
//   line 5:   int *p = &a;
//   line 6:   *p = 20;
//   line 7:   int b = a + *p;
//   line 8:   printf("%d\n", b);
//   line 9:   return 0;
//   line 10: }

const LINE_MAP = {
  0: -1,   // step 0 → 无高亮             explanation: (无)
  1: 3,    // step 1 → 高亮 int main()    explanation: "进入 main 函数"
  2: 4,    // step 2 → 高亮 int a = 10    explanation: "声明变量 a = 10"
  3: 5,    // step 3 → 高亮 int *p = &a   explanation: "声明指针 p 指向 a"
  4: 6,    // step 4 → 高亮 *p = 20       explanation: "通过 *p 修改 a 为 20"
  5: 7,    // step 5 → 高亮 int b = ...   explanation: "计算 b = a + *p = 40"
  6: 8,    // step 6 → 高亮 printf(...)   explanation: "输出 40"
};
// ★ 每行右侧注释同时写出「高亮哪行」+「解释什么」，方便自检

// ════════════════════════════════════
// executedLines 规则（与 LINE_MAP 配套）：
// executedLines = 已经执行完毕的行（灰化），不包含当前高亮行
// ════════════════════════════════════

// ✅ 正确示例：
// case 1: setExecutedLines([]);           // 刚进 main，无已执行行
// case 2: setExecutedLines([3]);          // main 行已执行完
// case 3: setExecutedLines([3, 4]);       // main + int a 已执行完
// case 4: setExecutedLines([3, 4, 5]);    // 前三行已执行完
// ★ 规律：case N 的 executedLines = case N-1 的 executedLines + case N-1 的 currentLine

// ❌ 常见错误：把当前行也放进 executedLines
// case 2: setExecutedLines([1, 3]);  // line 3 既是 currentLine 又在 executedLines
// 虽然 CSS 优先级能保证 is-current 覆盖 is-executed，但逻辑语义错误
```

### Fix-12：★ 代码行必须使用 JSX span 进行语法着色（v5.3 新增）

```jsx
// ════════════════════════════════════
// ★★★ 代码必须有语法高亮，不能是纯白色文字 ★★★
// ════════════════════════════════════

// ❌ 错误写法（纯文本，全白色，无法区分关键字/变量/字面量）
<CodeLine num={4}>&nbsp;&nbsp;int a = 10;</CodeLine>

// ✅ 正确写法（使用 span + Tailwind 颜色类着色）
<CodeLine num={4}>
  &nbsp;&nbsp;<span className="text-blue-400">int</span>{' '}
  a <span className="text-pink-400">=</span>{' '}
  <span className="text-orange-300">10</span>;
</CodeLine>

// ════════════════════════════════════════════
// ★ 语法高亮颜色方案（固定，不可更改）
// ════════════════════════════════════════════
//
// 类别                      Tailwind 类             示例
// ──────────────────────────────────────────────────────────
// 关键字/类型               text-blue-400           int, char, void, return,
//                                                    if, else, while, for,
//                                                    struct, const, static,
//                                                    sizeof, typedef, enum,
//                                                    switch, case, break,
//                                                    unsigned, signed, long
//
// 预处理器指令               text-purple-400         #include, #define, #ifdef,
//                                                    #ifndef, #endif, #pragma
//
// 头文件 / 字符串字面量     text-green-300          <stdio.h>, "hello world",
//                                                    'A', <stdlib.h>
//
// 数字字面量                text-orange-300          10, 0xFF, 3.14, 0b1010,
//                                                    -1, 100L, 0.5f
//
// 函数名（调用/定义处）      text-yellow-300          printf, main, scanf,
//                                                    malloc, free, strlen,
//                                                    自定义函数名
//
// 运算符                    text-pink-400            =, +, -, *, &, ->,
//                                                    ==, !=, <, >, >=, <=,
//                                                    &&, ||, !, ++, --,
//                                                    +=, -=, *=, /=
//
// 注释                      text-gray-500 italic     // 注释，/* 注释 */
//
// 普通标识符（变量名等）     不加颜色类               a, p, buf, count
//                           （继承父级 text-gray-200）
//
// 标点（括号/分号/花括号）   不加颜色类               (, ), {, }, ;, [, ]
//                           （继承父级 text-gray-200）
// ──────────────────────────────────────────────────────────
```

### Fix-13：★ 状态机必须使用「顶部全量重置 + 逐 case 覆盖」模式（v5.3 新增）

```jsx
// ════════════════════════════════════
// ★ 保证后退时状态完整还原
// ════════════════════════════════════

useEffect(() => {
  // ★ 顶部：重置所有状态到初始值（包括业务状态）
  setHighlightVar(null);
  setIsDangerLine(false);
  setExecutedLines([]);
  setOutput([]);
  // ★★★ 业务状态也必须重置！否则后退时旧值残留 ★★★
  setVarA(null);
  setVarP(null);
  setVarB(null);
  // ... 所有业务状态都要重置 ...

  // ★ 逐 case 设置该步的完整快照
  switch (step) {
    case 0: break; // 所有状态保持顶部重置的初始值
    case 1:
      // 只设置与 case 0 不同的部分
      break;
    case 2:
      setVarA(10);
      setExecutedLines([3]);
      setHighlightVar('a');
      break;
    case 3:
      setVarA(10);       // ★ 必须重复设置！因为顶部已重置为 null
      setVarP('0x1000');
      setExecutedLines([3, 4]);
      setHighlightVar('p');
      break;
    case 4:
      setVarA(20);       // ★ a 被修改为 20
      setVarP('0x1000'); // ★ p 仍然存在
      setExecutedLines([3, 4, 5]);
      setHighlightVar('a');
      setIsDangerLine(true);
      break;
    // ...每个 case 都是完整快照，不依赖前一个 case 的状态残留
  }
}, [step]);

// ❌ 常见错误：只重置部分状态，业务变量忘记重置
// useEffect(() => {
//   setHighlightVar(null);    // ← 只重置了这些
//   setIsDangerLine(false);
//   setExecutedLines([]);
//   setOutput([]);
//   // ← 忘记重置 varA, varP, varB！
//   // 结果：从 step 3 后退到 step 1 时，p 仍然显示 0x1000
//   switch (step) { ... }
// }, [step]);
```

---

## CSS 动画库（v5.3 完整版）

```css
@property --glow-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

:root {
  --anim-speed: 5000ms;
  --bounce-range: -5px;
  --bounce-scale: 1.03;
}

* { scrollbar-width: thin; scrollbar-color: #2a2a3a #0d1117; }
*::-webkit-scrollbar { width: 5px; height: 5px; }
*::-webkit-scrollbar-track { background: transparent; }
*::-webkit-scrollbar-thumb { background: #2a2a3a; border-radius: 3px; }

body {
  background: #080c14;
  color: #c9d1d9;
  font-family: 'SF Mono','Cascadia Code','JetBrains Mono',Consolas,monospace;
  overflow: hidden;
  height: 100vh;
  margin: 0;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.anim-fade-in { animation: fadeInUp 0.5s ease-out forwards; }

@keyframes bubbleUp {
  0%   { opacity: 0; transform: translateY(16px) scale(0.96); }
  60%  { opacity: 1; transform: translateY(-2px) scale(1.01); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
.anim-bubble-up { animation: bubbleUp 0.45s cubic-bezier(0.25,0.46,0.45,0.94) forwards; }

@keyframes pushUp {
  from { transform: translateY(5px); opacity: 0.6; }
  to   { transform: translateY(0); opacity: 1; }
}
.anim-push-up { animation: pushUp 0.3s ease-out forwards; }

@keyframes newMsgGlow {
  0%, 100% { box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04); }
  50%      { box-shadow: inset 0 0 0 1px rgba(255,255,255,0.09); }
}

@keyframes scanLight {
  0%   { left: -60%; opacity: 0; }
  15%  { opacity: 0.7; }
  85%  { opacity: 0.7; }
  100% { left: 160%; opacity: 0; }
}

@keyframes dangerGlow {
  0%, 100% { box-shadow: 0 0 5px rgba(239,68,68,0.12); }
  50%      { box-shadow: 0 0 16px rgba(239,68,68,0.28), 0 0 30px rgba(239,68,68,0.08); }
}

@keyframes dangerWiggle {
  0%, 100% { transform: translateX(0); }
  30%      { transform: translateX(-1.5px); }
  70%      { transform: translateX(1.5px); }
}

@keyframes boxPop {
  0%   { transform: scale(0.72) translateY(5px); opacity: 0; }
  65%  { transform: scale(1.02) translateY(-1px); opacity: 1; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}

@keyframes valueChange {
  0%   { color: #facc15; transform: scale(1.08); }
  40%  { color: #facc15; }
  100% { color: inherit; transform: scale(1); }
}
.anim-value-changed { animation: valueChange 0.6s ease-out forwards; }

@keyframes dashFlow { to { stroke-dashoffset: -24; } }

@keyframes dotPulse {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50%      { opacity: 0.4; transform: scale(1.4); }
}

@keyframes glowSpin { to { --glow-angle: 360deg; } }

@keyframes iconSpin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes orbGlow {
  0%, 100% { box-shadow: 0 0 6px var(--orb-color), 0 0 14px var(--orb-color); opacity: 0.88; }
  50%      { box-shadow: 0 0 10px var(--orb-color), 0 0 22px var(--orb-color); opacity: 1; }
}

@keyframes orbTrailFade {
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 0.42; }
}

@keyframes arrowFloat {
  0%, 100% { transform: translateX(0); }
  50%      { transform: translateX(4px); }
}

@keyframes breathe {
  0%, 100% { opacity: 0.5; }
  50%      { opacity: 1; }
}

@keyframes cursorBlink {
  0%, 49%  { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@keyframes dataFlow {
  0%   { transform: translateX(-110%); opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { transform: translateX(110%); opacity: 0; }
}
.anim-data-flow { animation: dataFlow 2.2s ease-in-out infinite; }

@keyframes stackPush {
  0%   { transform: translateY(-18px) scaleY(0.08); opacity: 0; }
  60%  { transform: translateY(2px) scaleY(1.02); opacity: 1; }
  100% { transform: translateY(0) scaleY(1); opacity: 1; }
}

@keyframes stackPop {
  0%   { transform: translateY(0) scaleY(1); opacity: 1; }
  100% { transform: translateY(-16px) scaleY(0); opacity: 0; }
}

@keyframes memoryWrite {
  0%   { background-color: rgba(250,204,21,0.3); }
  100% { background-color: transparent; }
}

@keyframes bitFlip {
  0%   { transform: rotateX(0deg); }
  50%  { transform: rotateX(90deg); }
  100% { transform: rotateX(0deg); }
}

@keyframes pointerDraw {
  from { stroke-dashoffset: 200; opacity: 0.15; }
  to   { stroke-dashoffset: 0;   opacity: 1; }
}
```

---

## SVG 图标系统（完整，放在 script 顶层）

```jsx
const I = {
  memory:    (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>,
  pointer:   (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l14 9-7 1-3 7z"/></svg>,
  grid:      (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  stack:     (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="6" rx="1"/><rect x="4" y="10" width="16" height="6" rx="1"/><rect x="4" y="18" width="16" height="4" rx="1"/></svg>,
  binary:    (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="5" height="8" rx="1"/><rect x="3" y="13" width="5" height="8" rx="1"/><rect x="16" y="3" width="5" height="8" rx="1"/><rect x="16" y="13" width="5" height="8" rx="1"/><line x1="11" y1="7" x2="13" y2="7"/><line x1="11" y1="17" x2="13" y2="17"/></svg>,
  struct:    (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20M9 9v12M16 9v12"/></svg>,
  shield:    (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  tree:      (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M12 8v3M9 13l-4 3M15 13l4 3"/></svg>,
  bolt:      (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  fork:      (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="19" r="3"/><path d="M12 8v4M8 14l-2 2M16 14l2 2"/></svg>,
  thread:    (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v16"/><path d="M20 4v16"/><path d="M4 8c4 0 4 4 8 4s4-4 8-4"/><path d="M4 16c4 0 4-4 8-4s4 4 8 4"/></svg>,
  network:   (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="8" height="6" rx="1"/><rect x="14" y="3" width="8" height="6" rx="1"/><rect x="8" y="15" width="8" height="6" rx="1"/><path d="M6 9v2c0 1 1 2 2 2h8c1 0 2-1 2-2V9"/><path d="M12 13v2"/></svg>,
  folder:    (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
  target:    (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  lightbulb: (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>,
  rocket:    (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>,
  check:     (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  alert:     (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  info:      (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>,
  lock:      (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  unlock:    (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>,
  skull:     (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.2 6H8.2A7 7 0 0 1 5 11a7 7 0 0 1 7-7z"/><path d="M9 21v-3h6v3"/><path d="M9 18h6"/><circle cx="9.5" cy="10" r="1.2" fill={c} stroke="none"/><circle cx="14.5" cy="10" r="1.2" fill={c} stroke="none"/></svg>,
  gear:      (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  play:      (s=14,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill={c}><polygon points="5,3 19,12 5,21"/></svg>,
  pause:     (s=14,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill={c}><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>,
  prev:      (s=14,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
  next:      (s=14,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  refresh:   (s=14,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>,
  expand:    (s=15,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></svg>,
  dot:       (s=8, c='#10b981')    =><svg width={s} height={s} viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill={c}/></svg>,
  tDot:      (c)                   =><svg width="11" height="11" viewBox="0 0 11 11"><circle cx="5.5" cy="5.5" r="4.5" fill={c}/></svg>,
  terminal:  (s=16,c='currentColor')=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
};

const ICON_MAP = {
  info: I.info, check: I.check, alert: I.alert,
  bolt: I.bolt, rocket: I.rocket, lightbulb: I.lightbulb,
  memory: I.memory, pointer: I.pointer, skull: I.skull,
  stack: I.stack, lock: I.lock, folder: I.folder, target: I.target,
  terminal: I.terminal,
};

const COLOR_MAP = {
  green:  { bg:'rgba(34,197,94,0.07)',  border:'rgba(34,197,94,0.45)',  text:'text-green-300',  badge:'text-green-400 border-green-500/25 bg-green-500/14',  ic:'#4ade80' },
  red:    { bg:'rgba(239,68,68,0.07)',  border:'rgba(239,68,68,0.45)',  text:'text-red-300',    badge:'text-red-400 border-red-500/25 bg-red-500/14',        ic:'#f87171' },
  yellow: { bg:'rgba(250,204,21,0.07)', border:'rgba(250,204,21,0.45)', text:'text-yellow-300', badge:'text-yellow-400 border-yellow-500/25 bg-yellow-500/14',ic:'#fde047' },
  purple: { bg:'rgba(168,85,247,0.07)', border:'rgba(168,85,247,0.45)', text:'text-purple-300', badge:'text-purple-400 border-purple-500/25 bg-purple-500/14',ic:'#c084fc' },
  blue:   { bg:'rgba(59,130,246,0.07)', border:'rgba(59,130,246,0.45)', text:'text-blue-300',   badge:'text-blue-400 border-blue-500/25 bg-blue-500/14',     ic:'#93c5fd' },
  orange: { bg:'rgba(249,115,22,0.07)', border:'rgba(249,115,22,0.45)', text:'text-orange-300', badge:'text-orange-400 border-orange-500/25 bg-orange-500/14',ic:'#fdba74' },
};
```

---

## App 组件内部声明顺序（铁律）

```jsx
function App() {
  // ════════════════════════════════════
  // 区域 1：所有 useState（顺序固定）
  // ════════════════════════════════════
  const maxSteps = /* N */;
  const [step, setStep]           = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed]         = useState(3200);
  const [isFS, setIsFS]           = useState(false);
  const [executedLines, setExecutedLines] = useState([]);
  const [highlightVar,  setHighlightVar]  = useState(null);
  const [isDangerLine,  setIsDangerLine]  = useState(false);
  const [prevLine, setPrevLine]           = useState(-1);
  const [linePositions, setLinePositions] = useState(new Map());
  const [output, setOutput]               = useState([]);
  // ... 业务状态 ...

  // ════════════════════════════════════
  // 区域 2：所有 useRef
  // ════════════════════════════════════
  const codeContainerRef = useRef(null);
  const lineRefs         = useRef(new Map());
  const msgScrollRef     = useRef(null);

  // ════════════════════════════════════
  // 区域 3:★ currentLine 紧跟 useRef 之后，所有 useEffect 之前
  // ════════════════════════════════════
  // ★ Fix-11 铁律：LINE_MAP 必须与 explanations 一一对齐
  // 编写步骤：
  //   1. 先把代码行标号列出来
  //   2. 规划每步讲解哪行 → 写 explanation
  //   3. LINE_MAP[step] = 该步讲解的那行行号
  //   4. 自检：高亮行号 === 解释描述的行号
  const LINE_MAP = {
    0:-1,        // step 0 → 无高亮         explanation: (无)
    1:3,         // step 1 → line 3          explanation: "进入 main 函数"
    2:4,         // step 2 → line 4          explanation: "声明变量 a = 10"
    // ... 每行注释同时写「高亮哪行」+「解释什么」
  };
  const currentLine = LINE_MAP[step] ?? -1;

  // ════════════════════════════════════
  // 区域 4：所有 useEffect
  // ════════════════════════════════════

  // 4-1 行位置计算
  useEffect(() => {
    const calc = () => {
      const box = codeContainerRef.current; if (!box) return;
      const br = box.getBoundingClientRect();
      const m  = new Map();
      lineRefs.current.forEach((el, n) => {
        if (el) { const r = el.getBoundingClientRect(); m.set(n, r.top - br.top + r.height / 2); }
      });
      setLinePositions(m);
    };
    calc(); const t = setTimeout(calc, 120);
    window.addEventListener('resize', calc);
    return () => { clearTimeout(t); window.removeEventListener('resize', calc); };
  }, [step]);

  // 4-2 光球拖尾追踪
  useEffect(() => {
    const t = setTimeout(() => setPrevLine(currentLine), 650);
    return () => clearTimeout(t);
  }, [currentLine]);

  // 4-3 消息滚顶
  useEffect(() => {
    if (msgScrollRef.current) msgScrollRef.current.scrollTop = 0;
  }, [step]);

  // 4-4 CSS 速度变量
  useEffect(() => {
    document.documentElement.style.setProperty('--anim-speed', `${speed * 1.5}ms`);
  }, [speed]);

  // 4-5 状态机（★ Fix-13：顶部全量重置 + 逐 case 覆盖）
  useEffect(() => {
    // ★ 顶部重置所有状态（包括业务变量！保证后退时干净还原）
    setHighlightVar(null);
    setIsDangerLine(false);
    setExecutedLines([]);
    setOutput([]);
    // ★★★ 业务状态全部重置 ★★★
    setVarA(null);
    setVarP(null);
    setVarB(null);
    // ... 所有 set 业务状态 (null/初始值) ...

    switch (step) {
      case 0: break;
      case 1:
        // ★ executedLines 不含当前行（当前行由 currentLine 控制高亮）
        break;
      case 2:
        setVarA(10);
        setExecutedLines([3]);       // line 3 (main 入口) 已执行完
        setHighlightVar('a');
        break;
      case 3:
        setVarA(10);                 // ★ 必须重复设置（顶部已重置）
        setVarP('0x1000');
        setExecutedLines([3, 4]);
        setHighlightVar('p');
        break;
      // ...每个 case 都是完整快照
    }
  }, [step]);

  // ════════════════════════════════════
  // 区域 5：导航函数 useCallback
  // ════════════════════════════════════
  const goNext  = useCallback(() => setStep(p => Math.min(maxSteps, p + 1)), []);
  const goPrev  = useCallback(() => setStep(p => Math.max(0, p - 1)), []);
  const goReset = useCallback(() => { setStep(0); setIsPlaying(false); }, []);

  // 4-6 自动播放
  useEffect(() => {
    if (isPlaying && step < maxSteps) {
      const t = setTimeout(goNext, speed); return () => clearTimeout(t);
    }
    if (step >= maxSteps) setIsPlaying(false);
  }, [isPlaying, step, speed, goNext]);

  // 4-7 全屏 + 键盘
  // ...

  // ════════════════════════════════════
  // 区域 6：子组件（CodeLine 定义在 App 内部）
  // ════════════════════════════════════
  const CodeLine = ({ num, children }) => { /* ... */ };

  // ════════════════════════════════════
  // 区域 7：useMemo 数据
  // ════════════════════════════════════
  const explanations = useMemo(() => {
    const items = [];
    // ★ Fix-11 对齐检查：这里的 step 描述必须与 LINE_MAP 高亮行一一对应
    return items;
  }, [step]);

  const revExplanations = useMemo(() => [...explanations].reverse(), [explanations]);

  // ════════════════════════════════════
  // 区域 8：return JSX
  // ════════════════════════════════════
  return ( /* ... */ );
}
```

---

## 完整 App 骨架（正确顺序模板）

```jsx
// ─── 顶层：常量、图标、映射表 ───
const I = { /* SVG 图标系统 */ };
const ICON_MAP = { /* ... */ };
const COLOR_MAP = { green:{...}, red:{...}, yellow:{...}, purple:{...}, blue:{...}, orange:{...} };

// ─── 顶层：可复用组件 ───
function VarCard({ name, type, value, addr, glowColor, accentCls, badgeCls, isActive, isNew }) {
  // ... Fix-3 useRef 对比方案 ...
}

// ─── 主应用 ───
function App() {
  // 区域 1: useState
  // 区域 2: useRef
  // 区域 3: currentLine（LINE_MAP 对象查表，★ Fix-11 对齐验证）
  // 区域 4: useEffect（行位置/拖尾/滚顶/CSS 变量/状态机 Fix-13）
  // 区域 5: useCallback（goNext/goPrev/goReset）+ useEffect（自动播放/全屏/键盘）
  // 区域 6: CodeLine 子组件
  // 区域 7: useMemo（explanations/revExplanations）
  // 区域 8: return JSX（★ Fix-12 代码行必须语法着色）
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

---

## 质量检查清单 v5.3

```
=== Fix 专项检查（v5.2 继承）===
[ ] Fix-1:  CSS var-card::before 中 position 和 inset 用分号分隔
[ ] Fix-2:  VarCard 内无 key={value}，无 anim-value-pop 类
[ ] Fix-3:  VarCard 使用 useRef + setChanged 方案，有 setTimeout 640ms 清除
[ ] Fix-4:  explanations 的 color 字段只使用 green/red/yellow/purple/blue/orange
[ ] Fix-5:  currentLine 声明在所有 useEffect 之前（区域 3 位置）
[ ] Fix-6:  msgScrollRef 的 effect 依赖 step，不依赖 explanations
[ ] Fix-7:  explanations useMemo 中无 color:'amber'，无 color:'gray'
[ ] Fix-8:  VarCard 颜色通过 prop 传入，不复用 COLOR_MAP
[ ] Fix-9:  isNew prop = step === N（精确等于），不是 >= N
[ ] Fix-10: ICON_MAP 和 COLOR_MAP 在 App 外部顶层声明

=== Fix 专项检查（v5.3 新增）===
[ ] Fix-11: LINE_MAP[step] 的行号 === 该步 explanation 描述的代码行号
[ ] Fix-11: LINE_MAP 每行注释同时写「高亮哪行」+「解释什么」便于自检
[ ] Fix-11: executedLines 不包含当前高亮行（仅含已过去的行）
[ ] Fix-12: 每个 CodeLine 的 children 使用 span + Tailwind 类着色
[ ] Fix-12: 着色方案：blue-400 关键字 / purple-400 预处理 / green-300 字符串 /
            orange-300 数字 / yellow-300 函数名 / pink-400 运算符 / gray-500 注释
[ ] Fix-13: 状态机顶部重置所有状态（含业务变量），每 case 是完整快照
[ ] Fix-13: 后退 step 2→1 时，step 2 新增的变量正确消失

=== 通用检查 ===
[ ] 单文件浏览器直接打开可运行
[ ] CDN 引入顺序正确（React > ReactDOM > Babel > Tailwind）
[ ] 全文件零 Emoji，所有图标为内联 SVG
[ ] I 对象完整，ICON_MAP 完整，COLOR_MAP 共 6 键
[ ] 代码行放大效果（scale 1.05 + translateX 8px）
[ ] 执行光球跟随当前行（cubic-bezier 弹性）
[ ] 已执行行灰化（opacity 0.27, scale 0.975）
[ ] VarCard 静止时完全不动（无任何循环动画）
[ ] VarCard 首次出现 boxPop 一次，之后 animation: none
[ ] 所有循环动画周期 >= 3s
[ ] 终端光标：CSS 矩形 + cursorBlink（非 Unicode）
[ ] Explanation 最新消息在上，bubbleUp 入场
[ ] 旧消息 pushUp + 渐变透明度
[ ] 进度条颜色随危险状态切换
[ ] 键盘：空格/→ 步进，← 后退，Enter 播放，R 重置，F 全屏
[ ] 后退时状态完整还原（状态机每 case 为完整快照）
[ ] ★ 高亮行与讲解同步（无错位）
[ ] ★ 代码有语法着色（非纯白文字）
```

---

## 快速参考

### 触发场景

当用户需要：
- 创建 C/C++/嵌入式 Linux 代码执行可视化动画
- 生成单文件交互式教学 HTML
- 制作代码逐步执行动画演示
- 展示变量内存变化过程
- 解释指针、栈、堆等概念

### 核心原则

1. **单文件**: 所有代码、样式、资源都在一个 HTML 文件中
2. **零构建**: 直接浏览器打开即可运行
3. **零 Emoji**: 所有图标使用内联 SVG
4. **平滑动画**: 缓慢、克制，禁止闪烁
5. **语法着色**: 代码必须有语法高亮
6. **状态同步**: 高亮行与讲解必须精确对齐

### 常见错误

- ❌ 使用 `key={value}` 触发动画 → 导致数值抽搐
- ❌ CSS `position: absolute inset: -2px` 不分号 → 整条规则失效
- ❌ 使用 `amber`/`gray` 等未声明颜色 → COLOR_MAP 无此键
- ❌ LINE_MAP 与 explanation 不对齐 → 高亮行与讲解错位
- ❌ 代码行纯文本无着色 → 无法区分关键字/变量
- ❌ 状态机未重置业务变量 → 后退时状态残留

---

> **版本**: v5.3  
> **最后更新**: 2026-03-13  
> **适用领域**: C / C++ / 嵌入式 Linux 全知识域  
> **核心修复**: 代码高亮与讲解错位、代码无语法着色
