# Fix 速查表 v5.3
> 每条 Fix 都来自真实的 Bug。遇到对应问题时查这里。

---

## Fix-1：CSS position + inset 必须分号分隔
```css
/* ❌ */ .var-card::before { position: absolute inset: -2px; }
/* ✅ */ .var-card::before { position: absolute; inset: -2px; }
```

---

## Fix-2 + Fix-3：VarCard 禁止 key={value}，必须用 useRef 对比

```jsx
/* ❌ 错误 */ <div key={varData.value}>{varData.value}</div>

/* ✅ 唯一正确写法（完整复制，不要自己改） */
function VarCard({ name, type, value, addr, glowColor, accentCls, badgeCls, isActive, isNew }) {
  const prevRef = useRef(value);
  const [changed, setChanged] = useState(false);
  useEffect(() => {
    if (value !== null && value !== undefined && prevRef.current !== value) {
      prevRef.current = value;
      setChanged(true);
      const t = setTimeout(() => setChanged(false), 640);
      return () => clearTimeout(t);
    }
  }, [value]);
  return (
    <div className={`var-card ${isActive ? 'is-active' : ''} p-3 relative`}
         style={{ '--card-glow': glowColor, background: 'rgba(255,255,255,0.026)',
           border: '1px solid rgba(255,255,255,0.068)',
           animation: isNew ? 'boxPop 0.45s cubic-bezier(0.34,1.3,0.64,1) forwards' : 'none',
           borderRadius: 12, minWidth: 82 }}>
      <div className={`absolute -top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold border ${badgeCls}`}>{type}</div>
      <div className={`text-[11px] mt-1 mb-0.5 ${accentCls}`}>{name}</div>
      <div className={`text-[22px] font-bold leading-none text-white ${changed ? 'anim-value-changed' : ''}`}>{value ?? '—'}</div>
      <div className="text-[10px] text-gray-700 mt-1.5 font-mono tracking-tight">{addr}</div>
    </div>
  );
}
```

---

## Fix-4：COLOR_MAP 只有 6 个合法颜色键

```
✅ 合法：green / red / yellow / purple / blue / orange
❌ 非法：amber / gray / cyan / teal（用了会白屏）
```

---

## Fix-5：currentLine 必须在所有 useEffect 之前声明

```jsx
// ✅ 正确顺序
function App() {
  // 先：所有 useState
  // 再：所有 useRef
  const LINE_MAP = { 0:-1, 1:3, ... };   // ← currentLine 在这里
  const currentLine = LINE_MAP[step] ?? -1;
  // 最后：所有 useEffect（此时 currentLine 已经可以用了）
}
```

---

## Fix-6：msgScrollRef 滚动 effect 依赖 [step]

```jsx
// ✅ 正确
useEffect(() => {
  if (msgScrollRef.current) msgScrollRef.current.scrollTop = 0;
}, [step]);   // ← 依赖 step，不是 explanations 或其他

// ❌ 错误
}, [explanations.length]);
```

---

## Fix-7：explanations 的 color 字段只能用 6 个合法键

```jsx
// ✅ color:'blue' / color:'yellow' / color:'red' 等 6 个
// ❌ color:'amber'  color:'gray'  color:'teal'  （会报错）
```

---

## Fix-8：VarCard 颜色通过 prop 传入，独立于 COLOR_MAP

```jsx
// ✅ VarCard 的颜色用 glowColor/accentCls/badgeCls prop 传入
// ❌ 不要把 COLOR_MAP[xxx] 传给 VarCard 的这些 prop
```

---

## Fix-9：isNew 用精确等号

```jsx
// ✅ isNew={step === 3}    只在第3步出现时触发一次入场动画
// ❌ isNew={step >= 3}     每次渲染都触发，动画循环播放
// ❌ isNew={varA !== null} 只要变量存在就一直触发
```

---

## Fix-10：ICON_MAP 和 COLOR_MAP 在 App 外部顶层声明

```jsx
// ✅ App 函数外部
const ICON_MAP = { ... };
const COLOR_MAP = { ... };
function App() { ... }

// ❌ App 函数内部（每次渲染都重建）
function App() {
  const COLOR_MAP = { ... }; // 错误！
}
```

---

## Fix-11：★★★ LINE_MAP 必须与 explanations 逐步对齐

**这是最常见的致命 Bug。** 症状：高亮的代码行比讲解内容快一步。

根因：`LINE_MAP[N]` 指向的行，和 `explanations` 里 step N 描述的行不一致。

**唯一可靠的方法：先填对齐表（见主文件第二步），再写代码。**

```jsx
// ✅ 每行注释同时写「高亮哪行」+「解释什么」，两者必须一致
const LINE_MAP = {
  0: -1,  // step 0 → 无高亮            explanation: 无
  1:  3,  // step 1 → 高亮第3行         explanation: "进入 main 函数"（第3行）
  2:  4,  // step 2 → 高亮第4行         explanation: "声明 int a = 10"（第4行）
  3:  5,  // step 3 → 高亮第5行         explanation: "声明 int *p = &a"（第5行）
  4:  6,  // step 4 → 高亮第6行         explanation: "*p = 20 修改 a"（第6行）
};
```

**同时：executedLines 不包含当前步的行**
```
case 2: setExecutedLines([3]);      // 第3行已执行完，当前高亮第4行
case 3: setExecutedLines([3, 4]);   // 第3、4行已执行完，当前高亮第5行
// 规律：case N 的 executedLines = case N-1 的 executedLines + case N-1 的 currentLine
```

---

## Fix-12：★★★ CodeLine 内必须用 span 语法着色

```
颜色速查（背下来）：
text-blue-400   → 关键字/类型：int char void return if else while for struct const sizeof
text-purple-400 → 预处理器：#include #define
text-green-300  → 字符串/头文件：<stdio.h>  "hello"  'A'
text-orange-300 → 数字字面量：10  0xFF  3.14
text-yellow-300 → 函数名：printf main malloc free 自定义函数
text-pink-400   → 运算符：= + - * & -> == != && || ++ --
text-gray-500 italic → 注释：// ...  /* ... */
（无类名）       → 普通变量名、括号、分号
```

---

## Fix-13：★★★ 状态机：顶部全量重置 + 逐 case 完整快照

```jsx
useEffect(() => {
  // ★ 第一部分：重置所有状态（必须包含所有业务变量）
  setHighlightVar(null);
  setIsDangerLine(false);
  setExecutedLines([]);
  setOutput([]);
  setVarA(null);   // ← 业务变量
  setVarP(null);   // ← 业务变量
  setVarB(null);   // ← 业务变量（有多少写多少）

  // ★ 第二部分：每个 case 都是完整快照，不依赖前一个 case
  switch (step) {
    case 0: break;  // 保持上面的初始值
    case 1: break;  // 同上
    case 2:
      setVarA(10);
      setExecutedLines([3]);
      setHighlightVar('a');
      break;
    case 3:
      setVarA(10);        // ★ 必须重复写！顶部已经重置为 null 了
      setVarP('0x1000');
      setExecutedLines([3, 4]);
      setHighlightVar('p');
      break;
    // ... 每个 case 都如此，完整写出所有状态
  }
}, [step]);
```
