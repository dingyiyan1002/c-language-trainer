# 🤖 致 Claude：项目说明与严格要求

## 📊 第一部分：我的项目是什么

### 项目定位

**项目名称：** C 语言可视化教学系统

**项目本质：** 将 718 道 C 语言题目转化为可视化交互动画

**目标用户：** 零基础学生（大学生、转行者、自学者）

**使用场景：** 
- 高校 C 语言课程教学
- 在线学习平台
- 面试刷题准备

---

### 题目规模

**总题目数：718 题**

**章节分布：**
```
基础入门 → 177 题
Level 1 入门真题 → 80 题
Level 2 进阶真题 → 70 题
Level 3 核心真题 → 60 题
Level 4 高级真题 → 40 题
Level 5 专家真题 → 20 题
面试专题 → 48 题
基础语法入门 → 46 题
变量与数据类型 → 28 题
运算符与表达式 → 29 题
控制流语句 → 27 题
函数 → 11 题
数组 → 15 题
指针陷阱 → 41 题
内存安全 → 13 题
Linux 系统编程 → 40 题
Linux 常用命令 → 10 题
嵌入式 Linux 应用 → 10 题
C++ 基础入门 → 30 题
```

---

### 题目文件位置

**所有题目都在这个目录：**
```
c:\Users\6\Downloads\web-development-request-received - 副本\src\data\chapters\
```

**19 个 TypeScript 文件：**
- `basics_test.ts` → 177 题
- `level1.ts` → 80 题
- `level2.ts` → 70 题
- `level3.ts` → 60 题
- `level4.ts` → 40 题
- `level5.ts` → 20 题
- `interview.ts` → 48 题
- `basics.ts` → 46 题
- `variables.ts` → 28 题
- `operators.ts` → 29 题
- `control.ts` → 27 题
- `functions.ts` → 11 题
- `arrays.ts` → 15 题
- `pointers.ts` → 41 题
- `memory.ts` → 13 题
- `linux.ts` → 40 题
- `linux_cmds.ts` → 10 题
- `embedded.ts` → 10 题
- `cpp.ts` → 30 题

**每个文件的结构：**
```typescript
export const chapter_name: Chapter = {
  id: '章节 ID',
  name: '章节名称',
  icon: '图标名称',
  description: '章节描述',
  questionCount: 题目数量，
  mode: 'practice',
  lessons: [  // ← 所有题目都在这里！
    {
      id: '题目 ID',
      title: '题目标题',
      content: `题目内容（包含代码块）`,
      keyPoints: ['知识点 1', '知识点 2']
    },
    // ... 更多题目
  ]
};
```

---

## 🚨 第二部分：我遇到的问题

### 问题 1：Claude 偷懒跳过题目

**具体表现：**
- ❌ 本章有 177 题，只做了前 3 题，后面 174 题全跳过
- ❌ 挑简单的做，难的题目直接跳过
- ❌ 说"做几个意思一下就行了"

**我的要求：**
- ✅ **718 题，每题都要做！一个不能少！**
- ✅ 从 `lessons[0]` 到 `lessons[176]`，按顺序制作
- ✅ 文件名：`basics_test_001_bt-data-types.html` ... `basics_test_177_xxx.html`

---

### 问题 2：制作的网页质量严重下降

**具体表现：**
- ❌ 单独做一个网页时，质量很好（90 分）
- ❌ 批量做 177 题时，质量降到不及格（50 分）
- ❌ 前面的题目认真做，后面的题目敷衍了事

**质量对比：**
```
单独制作（第 1 题）：
✅ 四层结构完整
✅ 执行光球动画流畅
✅ 变量卡片带动画
✅ 讲解面板详细
✅ 配色专业
→ 质量：90 分

批量制作（第 100 题）：
❌ 只有两层结构
❌ 执行光球没有动画
❌ 变量卡片是静态的
❌ 讲解面板随便写几个字
❌ 配色混乱
→ 质量：50 分
```

**我的要求：**
- ✅ **每题质量必须一致！**
- ✅ 第 1 题 90 分，第 177 题也要 90 分
- ✅ 不接受质量下降

---

### 问题 3：简化功能，偷工减料

**具体表现：**
```
v5.3 规范要求的功能：
✅ Layer 1: 行号层
✅ Layer 2: 语法高亮层（Canvas 渲染）
✅ Layer 3: 执行光球层（动画）
✅ Layer 4: 输入层（透明 textarea）
✅ 执行光球：圆形光晕 + 从上到下移动 + 拖尾效果
✅ 变量卡片：显示名称、类型、值、地址 + 值变化动画
✅ 讲解面板：步骤说明 + 变量变化 + 知识点提示
✅ 控制功能：播放/暂停/重置/速度调节/全屏

Claude 实际做的：
✅ Layer 1: 行号层
❌ Layer 2: 没有语法高亮，纯色背景
❌ Layer 3: 没有执行光球
❌ Layer 4: 不透明 textarea
❌ 执行光球：完全没有
❌ 变量卡片：静态显示，没有动画
❌ 讲解面板：只有一句话
❌ 控制功能：只有播放按钮
```

**我的要求：**
- ✅ **v5.3 规范要求的功能，一个不能少！**
- ✅ 四层结构、执行光球、VarCard、讲解面板、控制功能，必须完整
- ✅ 少一个功能 → 重新制作

---

### 问题 4：编造题目，不从 lessons 读取

**具体表现：**
```
题目文件中的 lesson：
{
  id: 'bt-data-types',
  title: '数据类型',
  content: `C 语言基础数据类型测试

\`\`\`c
// 常用数据类型示例
int     i = 10;        // 有符号整型
char    c = 'A';       // 字符
float   f = 3.14f;     // 单精度浮点
double  d = 3.14159;   // 双精度浮点
\`\`\`

**测试范围：**
- 基本数据类型 (int, char, float, double)
- 整型修饰符 (short, long, signed, unsigned)
- stdint 类型 (uint8_t, uint16_t, uint32_t, int32_t)
`,
  keyPoints: ['数据类型取值范围', '有符号无符号', 'stdint 类型']
}

Claude 制作的题目：
{
  title: 'Hello World',  // ← 自己编的水题
  content: `写一个程序输出 Hello World

\`\`\`c
#include <stdio.h>
int main() {
    printf("Hello World");
    return 0;
}
\`\`\`
`
}
```

**我的要求：**
- ✅ **必须从 lessons 数组读取题目！**
- ✅ lesson 是什么，就做什么
- ✅ 禁止自己编造题目

---

### 问题 5：批量模板，一个模板套所有

**具体表现：**
```
第 1 题：
- 独立设计可视化方案
- 根据题目内容定制动画
- 质量：90 分

第 2 题：
- 复制第 1 题的模板
- 只改代码，不改可视化
- 变量卡片一样
- 讲解面板一样
- 质量：60 分

第 3-177 题：
- 全部用同一个模板
- 100 个 HTML 长得一样
- 质量：50 分
```

**我的要求：**
- ✅ **每题独立设计可视化方案！**
- ✅ 根据题目内容定制动画
- ✅ 指针题要有指针可视化
- ✅ 数组题要有数组可视化
- ✅ 内存题要有内存布局可视化

---

## ✅ 第三部分：我的严格要求

### 要求 1：数量要求

**本章有 X 题 → 必须做 X 个 HTML**

**验收：**
```
题目数量：177 题
提交数量：177 个 HTML

✅ 177 = 177 → 通过
❌ 177 > 3 → 不通过，补全并重做
```

---

### 要求 2：质量要求

**每题必须达到 90 分以上**

**验收标准：**
```
功能验收（100 分）：
- 代码编辑器（25 分）：四层结构、语法高亮、执行光球
- 变量卡片（20 分）：显示所有变量、值变化动画
- 讲解面板（20 分）：详细步骤说明、知识点提示
- 控制功能（20 分）：播放/暂停/重置/速度/全屏
- 内存布局（15 分）：栈内存、地址标注

视觉验收（100 分）：
- 配色（25 分）：深色主题、代码高亮配色
- 动画（25 分）：流畅 60fps、无卡顿
- 布局（25 分）：三栏布局合理、间距统一
- 字体（25 分）：等宽字体、字号层级

内容验收（100 分）：
- 题目来源（40 分）：来自 lessons 数组
- 代码准确（30 分）：与题目一致
- 讲解匹配（30 分）：与代码匹配

总分 ≥ 90 → 通过 ✅
总分 < 90 → 重做 ❌
```

---

### 要求 3：一致性要求

**每题质量必须一致**

**验收：**
```
第 1 题：90 分
第 50 题：90 分
第 100 题：90 分
第 177 题：90 分

✅ 全部 90 分 → 通过
❌ 第 1 题 90 分，第 177 题 50 分 → 不通过，全部重做
```

---

### 要求 4：进度要求

**每做完 10 题，提交验收一次**

**流程：**
```
制作第 1-10 题
  ↓
提交验收（10 个 HTML）
  ↓
验收通过 → 继续制作第 11-20 题
验收不通过 → 立即整改，通过后继续
  ↓
制作第 11-20 题
  ↓
提交验收
  ↓
... 循环直到完成 177 题
```

---

## 📋 第四部分：制作流程

### 标准流程（每题 20-30 分钟）

```
Step 1: 读取题目（2 分钟）
  打开章节文件，读取 lessons 数组

Step 2: 提取代码（3 分钟）
  从 lesson.content 提取代码块

Step 3: 设计可视化（5 分钟）
  分析变量、设计执行步骤、设计内存布局

Step 4: 实现 HTML（15 分钟）
  按照 v5.3 规范实现所有功能

Step 5: 自检测试（5 分钟）
  功能检查、视觉检查、内容检查

Step 6: 提交验收（1 分钟）
  保存到目录，发送验收请求
```

---

### 详细步骤

#### Step 1: 读取题目
```javascript
// 打开文件：c:\Users\6\Downloads\web-development-request-received - 副本\src\data\chapters\basics_test.ts

// 读取 lessons 数组
const lessons = basics_test.lessons;

console.log(`本章共${lessons.length}题`);
// 输出：本章共 177 题
```

#### Step 2: 提取代码
```javascript
// 读取第一个 lesson
const lesson = lessons[0];

console.log('题目 ID:', lesson.id);       // 'bt-data-types'
console.log('题目标题:', lesson.title);   // '数据类型'
console.log('题目内容:', lesson.content); // 完整内容

// 提取代码块
const codeBlock = lesson.content.match(/```c([\s\S]*?)```/)[1];

console.log(codeBlock);
// 输出：
// int     i = 10;
// char    c = 'A';
// float   f = 3.14f;
// double  d = 3.14159;
```

#### Step 3: 设计可视化
```javascript
// 分析变量
const variables = [
  { name: 'i', type: 'int', value: 10, addr: '0x7fff1' },
  { name: 'c', type: 'char', value: 'A', addr: '0x7fff2' },
  { name: 'f', type: 'float', value: 3.14, addr: '0x7fff3' },
  { name: 'd', type: 'double', value: 3.14159, addr: '0x7fff4' }
];

// 设计执行步骤
const steps = [
  { line: 1, desc: '声明变量 i = 10', changes: [{var:'i', value:10}] },
  { line: 2, desc: '声明变量 c = A', changes: [{var:'c', value:'A'}] },
  { line: 3, desc: '声明变量 f = 3.14', changes: [{var:'f', value:3.14}] },
  { line: 4, desc: '声明变量 d = 3.14159', changes: [{var:'d', value:3.14159}] }
];

// 设计内存布局
const memory = {
  stack: [
    { addr: '0x7fff1', name: 'i', size: 4, value: 10 },
    { addr: '0x7fff2', name: 'c', size: 1, value: 'A' },
    { addr: '0x7fff3', name: 'f', size: 4, value: 3.14 },
    { addr: '0x7fff4', name: 'd', size: 8, value: 3.14159 }
  ]
};
```

#### Step 4: 实现 HTML
```javascript
// 按照 v5.3 规范实现
function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1.0);
  
  return (
    <div className="app">
      <CodeEditor code={codeBlock} currentLine={steps[currentStep].line} />
      <ExecutionOrb currentLine={currentStep} isPlaying={isPlaying} />
      <VarCard variables={variables} activeVar={steps[currentStep].changes?.[0]?.var} />
      <MemoryLayout stack={memory.stack} />
      <ExplanationPanel currentStep={steps[currentStep]} />
      <Controls 
        isPlaying={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onReset={() => setCurrentStep(0)}
        speed={speed}
        onSpeedChange={setSpeed}
      />
    </div>
  );
}
```

#### Step 5: 自检测试
```javascript
// 功能检查
[ ] 代码语法高亮正确 ✓
[ ] 执行光球从上到下移动 ✓
[ ] 当前行高亮显示 ✓
[ ] 已执行行变暗 ✓
[ ] 变量卡片显示所有变量 ✓
[ ] 变量值变化有动画 ✓
[ ] 讲解面板详细 ✓
[ ] 播放/暂停/重置正常 ✓

// 内容检查
[ ] 题目来自 lessons[0] ✓
[ ] 代码准确无误 ✓
[ ] 讲解与代码匹配 ✓

// 视觉检查
[ ] 深色主题专业 ✓
[ ] 动画流畅 60fps ✓
[ ] 布局合理清晰 ✓

全部通过 → 提交验收
```

#### Step 6: 提交验收
```javascript
// 保存文件
文件名：basics_test_001_bt-data-types.html
目录：HTML/基础测试/

// 发送验收请求
【提交验收】
章节：基础入门
题目：第 1 题 bt-data-types 数据类型
文件：basics_test_001_bt-data-types.html
自检：全部通过 ✓
```

---

## ⚠️ 第五部分：约束条款

### 条款 1：数量约束
- 本章 177 题 → 必须做 177 个 HTML
- 少一个 → 补全并重做

### 条款 2：质量约束
- 每题必须 90 分以上
- 一题不及格 → 全部重做

### 条款 3：一致性约束
- 每题质量必须一致
- 质量下降 → 全部重做

### 条款 4：进度约束
- 每 10 题提交验收一次
- 验收不通过 → 立即整改

### 条款 5：惩罚条款
**发现以下行为，立即更换人员并记录：**
1. 偷懒跳过题目
2. 编造题目
3. 简化功能
4. 批量模板

---

## 📞 第六部分：立即询问

**遇到以下情况，立即问：**

1. ❓ 找不到 lessons 数组
2. ❓ 不会提取代码块
3. ❓ 不确定可视化方案
4. ❓ v5.3 规范不清楚
5. ❓ 文件名不知道怎么取
6. ❓ 题目内容看不懂
7. ❓ 动画效果不会实现

**提问格式：**
```
【问题】[描述你的问题]
【章节】[你在制作哪个章节]
【题目】[第几题，题目 ID 是什么]
【尝试】[你已经尝试了什么]
【困惑】[你卡在哪里]
```

**禁止：**
- ❌ 自己猜测
- ❌ 自作主张
- ❌ 跳过不做

---

## ✋ 第七部分：承诺书签署

**在开始制作前，请签署以下承诺：**

```
我承诺：

1. ✅ 我已完整阅读本说明
2. ✅ 我理解项目规模（718 题）
3. ✅ 我理解问题所在（偷懒、质量下降、简化功能）
4. ✅ 我承诺从 lessons[0] 开始按顺序制作
5. ✅ 我承诺不编造题目
6. ✅ 我承诺不跳过题目
7. ✅ 我承诺不简化功能
8. ✅ 我承诺每题质量一致（90 分）
9. ✅ 我承诺每 10 题提交验收
10. ✅ 我承诺有问题立即询问

签署人：Claude
日期：______________
```

---

## 🚀 第八部分：开始制作

**现在，打开文件：**
```
c:\Users\6\Downloads\web-development-request-received - 副本\src\data\chapters\basics_test.ts
```

**从 lessons[0] 开始，严格按照流程制作第一个 HTML！**

**记住：**
- 718 题，你是其中一环
- 每题都要 90 分以上
- 质量必须一致
- 不能偷懒

**开始！** 🎯
