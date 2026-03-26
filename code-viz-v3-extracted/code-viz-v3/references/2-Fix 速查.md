# Fix 速查手册 v5.4（实战强化版）

> 基于真实生成案例中发现的 Bug，每条都有错误/正确对比。

---

## Fix-1：CSS `position` + `inset` 必须分号分隔

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

---

## Fix-2：VarCard 绝对禁止 `key={value}` 触发动画

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

---

## Fix-3：VarCard 必须使用 useRef 对比方案（完整模板）

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

---

## Fix-4：colorMap 键名必须完整且统一

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

---

## Fix-5：声明顺序铁律 — `currentLine` 必须在所有引用它的 `useEffect` 之前声明

```jsx
// ✅ 正确顺序：
function App() {
  // Step 1: 所有 useState
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // ... 其他 useState
  
  // Step 2: 所有 useRef
  const codeContainerRef = useRef(null);
  const lineRefs = useRef(new Map());
  const msgScrollRef = useRef(null);
  
  // Step 3: ★ currentLine 必须紧接在 useRef 之后，所有 useEffect 之前
  const LINE_MAP = { 0:-1, 1:4, 2:5, /* ... */ };
  const currentLine = LINE_MAP[step] ?? -1;
  
  // Step 4: 所有 useEffect（此时 currentLine 已经声明，可以安全使用）
  useEffect(() => {
    // 这里可以使用 currentLine
  }, [step]);
}
```

---

## Fix-6：msgScrollRef 滚动 effect 的依赖项必须是稳定值

```jsx
// ✅ 正确写法：依赖 step，语义清晰且稳定
useEffect(() => {
  if (msgScrollRef.current) msgScrollRef.current.scrollTop = 0;
}, [step]);

// ❌ 错误写法：依赖不稳定的值
useEffect(() => {
  if (msgScrollRef.current) msgScrollRef.current.scrollTop = 0;
}, [explanations.length]);  // 这会导致滚动行为不稳定
```

---

## Fix-7：状态机 case 的颜色参数与 COLOR_MAP 键名必须对齐

```jsx
const explanations = useMemo(() => {
  const items = [];
  // ✅ 只使用 green / red / yellow / purple / blue / orange
  if (step >= 1) items.push({ id:'s1', icon:'info',  text:'...', color:'blue',   step:1 });
  if (step >= 2) items.push({ id:'s2', icon:'memory', text:'...', color:'yellow', step:2 });
  return items;
}, [step]);

// ❌ 错误：使用了不存在的颜色键
if (step >= 1) items.push({ text:'...', color:'amber', step:1 });  // 无 amber
if (step >= 2) items.push({ text:'...', color:'gray', step:2 });   // 无 gray
```

---

## Fix-8：`VarCard` 的卡片颜色方案必须独立于 COLOR_MAP

```jsx
// VarCard 内部有自己的颜色配置，与 explanation 的 COLOR_MAP 完全独立
// 直接用 prop 传入样式字符串，不复用 COLOR_MAP

// ✅ 正确
<VarCard 
  name="a" 
  type="int" 
  value={varA} 
  addr="0x1000"
  glowColor="rgba(250,204,21,0.4)"  // 独立设置
  accentCls="text-yellow-400"       // 独立设置
  badgeCls="text-yellow-400 border-yellow-500/25 bg-yellow-500/10"
  isActive={highlightVar==='a'} 
  isNew={step===1}
/>
```

---

## Fix-9：`isNew` prop 控制方式——只传一次，不能持续为 true

```jsx
// ✅ 正确（只在首次出现的那一步才为 true）
<VarCard isNew={step === 3} ... />

// ❌ 错误（从 step 3 开始一直为 true）
<VarCard isNew={step >= 3} ... />
```

---

## Fix-10：`iconMap` 必须放在 `App` 组件外部顶层

```jsx
// ✅ 正确（App 外部，全局常量）
const ICON_MAP = {
  info:I.info, 
  check:I.check, 
  alert:I.alert, 
  bolt:I.bolt, 
  rocket:I.rocket,
  lightbulb:I.lightbulb, 
  memory:I.memory, 
  pointer:I.pointer, 
  skull:I.skull,
  stack:I.stack, 
  lock:I.lock, 
  folder:I.folder, 
  target:I.target, 
  terminal:I.terminal,
};

function App() {
  // 直接使用 ICON_MAP
}
```

---

## Fix-11：★ LINE_MAP 必须与 explanations 步骤精确对齐（v5.3 新增）

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

---

## Fix-12：★ 代码行必须使用 JSX span 进行语法着色（v5.3 新增）

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

---

## Fix-13：★ 状态机必须使用「顶部全量重置 + 逐 case 覆盖」模式（v5.3 新增）

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
      setExecutedLines([3]);   // 注意：不包含当前高亮行（LINE_MAP[2]=4）
      setHighlightVar('a');
      break;
    case 3:
      setVarA(10);       // ★ 必须重复设置！因为顶部已重置
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

## Fix-14：★ executedLines 不能包含当前高亮行（v5.4 新增）

```jsx
// ════════════════════════════════════
// ★★★ v5.4 重点修复：代码高亮与讲解错位 ★★★
// 根因：executedLines 包含了当前高亮行
// ════════════════════════════════════

// ❌ 错误示例
case 2:  // 高亮行 4: int a = 10
  setVarA(10);
  setExecutedLines([3, 4]);  // ← 包含了当前行 4！
  setHighlightVar('a');
  break;

// 结果：当高亮到行 4 时，行 4 同时满足 is-current 和 is-executed
// 虽然 CSS 优先级能保证 is-current 覆盖，但逻辑上会导致状态提前更新

// ✅ 正确示例
case 2:  // 高亮行 4: int a = 10
  setVarA(10);
  setExecutedLines([3]);  // ← 只包含已执行完的行 3
  setHighlightVar('a');
  break;

// ════════════════════════════════════
// 规律：case N 的 executedLines = case N-1 的 executedLines + LINE_MAP[N-1]
// ════════════════════════════════════

// 示例验证：
// case 1: LINE_MAP[1]=3, executedLines=[]
// case 2: LINE_MAP[2]=4, executedLines=[3]          ← 上一行的 LINE_MAP
// case 3: LINE_MAP[3]=5, executedLines=[3,4]        ← 上一行的 LINE_MAP
// case 4: LINE_MAP[4]=6, executedLines=[3,4,5]      ← 上一行的 LINE_MAP
```

---

## Fix-15：★ output 必须在代码执行完后才显示（v5.4 新增）

```jsx
// ════════════════════════════════════
// ★★★ v5.4 重点修复：输出提前显示 ★★★
// 根因：output 在错误的时间点设置
// ════════════════════════════════════

// ❌ 错误示例
case 4:  // 高亮行 7: printf("a = %d\n", a);
  setOutput(['a = 10']);  // ← 高亮 printf 时就显示输出
  break;

// 结果：用户看到高亮到 printf 时，输出区已经显示了结果
// 这不符合程序执行的逻辑顺序

// ✅ 正确示例
case 4:  // 高亮行 7: printf("a = %d\n", a);
  // 不设置 output，因为 printf 正在执行
  break;
case 5:  // 高亮行 8: 下一行代码
  setOutput(['a = 10']);  // ← 现在才显示上一行的输出
  break;

// ════════════════════════════════════
// 规律：output 在下一步才显示
// ════════════════════════════════════
```

---

## 快速检查清单

```
□ LINE_MAP 注释同时写了「高亮哪行」+「讲解什么」
□ 状态机顶部重置了所有业务变量
□ switch 每个 case 都写了完整状态
□ executedLines 不包含当前高亮行
□ CodeLine 用了 span 着色
□ COLOR_MAP 只用了 6 个合法颜色键
□ isNew={step === N}（精确等号）
□ currentLine 在所有 useEffect 之前声明
□ msgScrollRef 的 effect 依赖 [step]
□ ICON_MAP 和 COLOR_MAP 在 App 外部声明
□ CSS .var-card::before 里 position 和 inset 分两行
```

---

*版本：v5.4（2026-03 实战强化版）*
