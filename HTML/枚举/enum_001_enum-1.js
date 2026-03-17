window.LESSON_DATA = {
  meta: {
    chapterId: 'enum',
    lessonId: 'enum-1',
    title: '枚举类型基础',
    index: 1,
    filename: 'enum_001_enum-1.js',
    keyPoints: ['enum 定义', '枚举常量', '枚举变量', '枚举与整数转换']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 枚举类型：命名整数常量集合' }] },
    { num: 2, tokens: [] },
    { num: 3, tokens: [
      { type: 'kw', text: 'enum' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Color' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 4, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'Red' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 默认值：0' }
    ]},
    { num: 5, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'Green' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 默认值：1' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'Blue' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 默认值：2' }
    ]},
    { num: 7, tokens: [
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ]},
    { num: 8, tokens: [] },
    { num: 9, tokens: [
      { type: 'kw', text: 'enum' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Status' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 10, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'Pending' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 显式赋值：10' }
    ]},
    { num: 11, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'Active' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 自动递增：11' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'Closed' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 自动递增：12' }
    ]},
    { num: 13, tokens: [
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ]},
    { num: 14, tokens: [] },
    { num: 15, tokens: [
      { type: 'kw', text: 'enum' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Color' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Red' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// c = Red (0)' }
    ]},
    { num: 16, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'colorValue' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 隐式转换为 int：0' }
    ]},
    { num: 17, tokens: [] },
    { num: 18, tokens: [
      { type: 'kw', text: 'enum' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Status' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Active' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// s = Active (11)' }
    ]},
    { num: 19, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'statusValue' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 隐式转换为 int：11' }
    ]},
    { num: 20, tokens: [] },
    { num: 21, tokens: [
      { type: 'kw', text: 'if' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'c' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '==' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'Red' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ]},
    { num: 22, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 枚举比较：c 是否等于 Red' }
    ]},
    { num: 23, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'isRed' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ';' }
    ]},
    { num: 24, tokens: [
      { type: 'punc', text: '}' }
    ]},
    { num: 25, tokens: [] },
    { num: 26, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'Color', name: 'enum Color', type: 'enum_type', addr: 'N/A', glowColor: 'rgba(168,85,247,0.35)', appearStep: 2, value: '{Red=0, Green=1, Blue=2}' },
    { key: 'Red', name: 'Red', type: 'enum_const', addr: 'N/A', glowColor: 'rgba(239,68,68,0.35)', appearStep: 3, value: '0' },
    { key: 'Green', name: 'Green', type: 'enum_const', addr: 'N/A', glowColor: 'rgba(34,197,94,0.35)', appearStep: 4, value: '1' },
    { key: 'Blue', name: 'Blue', type: 'enum_const', addr: 'N/A', glowColor: 'rgba(59,130,246,0.35)', appearStep: 5, value: '2' },
    { key: 'Status', name: 'enum Status', type: 'enum_type', addr: 'N/A', glowColor: 'rgba(249,115,22,0.35)', appearStep: 8, value: '{Pending=10, Active=11, Closed=12}' },
    { key: 'Pending', name: 'Pending', type: 'enum_const', addr: 'N/A', glowColor: 'rgba(250,204,21,0.35)', appearStep: 9, value: '10' },
    { key: 'Active', name: 'Active', type: 'enum_const', addr: 'N/A', glowColor: 'rgba(168,85,247,0.35)', appearStep: 10, value: '11' },
    { key: 'Closed', name: 'Closed', type: 'enum_const', addr: 'N/A', glowColor: 'rgba(59,130,246,0.35)', appearStep: 11, value: '12' },
    { key: 'c', name: 'c', type: 'enum Color', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 14, value: 'Red (0)' },
    { key: 'colorValue', name: 'colorValue', type: 'int', addr: '0x7ffd04', glowColor: 'rgba(168,85,247,0.35)', appearStep: 15, value: '0' },
    { key: 's', name: 's', type: 'enum Status', addr: '0x7ffd08', glowColor: 'rgba(249,115,22,0.35)', appearStep: 17, value: 'Active (11)' },
    { key: 'statusValue', name: 'statusValue', type: 'int', addr: '0x7ffd0c', glowColor: 'rgba(59,130,246,0.35)', appearStep: 18, value: '11' },
    { key: 'isRed', name: 'isRed', type: 'int', addr: '0x7ffd10', glowColor: 'rgba(239,68,68,0.35)', appearStep: 22, value: '1' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'rocket',
        text: '准备执行代码',
        color: 'blue',
        actor: 'System',
        detail: '程序即将开始运行，演示 C 语言枚举 (enum) 类型的定义和使用方法'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'info',
        text: '阅读注释：枚举类型 - 命名整数常量集合',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示枚举类型：一种用户自定义类型，用于定义命名整数常量'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [1],
      vars: { Color: '{Red=0, Green=1, Blue=2}' },
      highlightVar: 'Color',
      explanation: {
        icon: 'box',
        text: 'enum Color：定义枚举类型',
        color: 'purple',
        actor: 'CPU',
        detail: 'enum 关键字定义新类型 Color。枚举成员默认从 0 开始自动递增。枚举提高代码可读性，让魔法数字变得有意义'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 3],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0' },
      highlightVar: 'Red',
      explanation: {
        icon: 'box',
        text: 'Red：第一个枚举常量，默认值 0',
        color: 'red',
        actor: 'CPU',
        detail: '枚举常量是整型常量。Red 是 Color 类型的第一个成员，默认值为 0。等价于#define Red 0'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 3, 4],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1' },
      highlightVar: 'Green',
      explanation: {
        icon: 'box',
        text: 'Green：第二个枚举常量，自动递增为 1',
        color: 'green',
        actor: 'CPU',
        detail: '未显式赋值的枚举常量自动递增。Green = Red + 1 = 1。枚举常量在编译期确定，不占用运行时内存'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 3, 4, 5],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2' },
      highlightVar: 'Blue',
      explanation: {
        icon: 'box',
        text: 'Blue：第三个枚举常量，值为 2',
        color: 'cyan',
        actor: 'CPU',
        detail: 'Blue = Green + 1 = 2。枚举常量按定义顺序递增。使用枚举代替魔法数字，代码更易读、易维护'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 3, 4, 5, 6],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2' },
      explanation: {
        icon: 'check',
        text: '}；结束枚举类型定义',
        color: 'blue',
        actor: 'CPU',
        detail: 'Color 枚举类型定义完成。此时定义了类型，未分配内存。可以声明该类型的变量'
      }
    },
    {
      step: 7,
      line: 9,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2' },
      explanation: {
        icon: 'info',
        text: '阅读代码：定义 Status 枚举',
        color: 'blue',
        actor: 'CPU',
        detail: 'Status 是另一个枚举类型，用于表示状态。将展示显式赋值和自动递增'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}' },
      highlightVar: 'Status',
      explanation: {
        icon: 'box',
        text: 'enum Status：定义带显式值的枚举',
        color: 'orange',
        actor: 'CPU',
        detail: 'Status 枚举用于表示业务状态。第一个成员显式赋值为 10，后续成员自动递增'
      }
    },
    {
      step: 9,
      line: 10,
      executedLines: [1, 3, 4, 5, 6, 7, 9],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10' },
      highlightVar: 'Pending',
      explanation: {
        icon: 'box',
        text: 'Pending = 10：显式赋值的枚举常量',
        color: 'yellow',
        actor: 'CPU',
        detail: 'Pending 被显式赋值为 10。显式赋值用于将枚举映射到特定整数值，如数据库状态码、协议值等'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11' },
      highlightVar: 'Active',
      explanation: {
        icon: 'box',
        text: 'Active：自动递增，值为 11',
        color: 'purple',
        actor: 'CPU',
        detail: 'Active 未显式赋值，自动继承前一个值并加 1。Active = Pending + 1 = 11'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12' },
      highlightVar: 'Closed',
      explanation: {
        icon: 'box',
        text: 'Closed：自动递增，值为 12',
        color: 'cyan',
        actor: 'CPU',
        detail: 'Closed = Active + 1 = 12。混合使用显式赋值和自动递增是常见做法：关键值显式定义，中间值自动递增'
      }
    },
    {
      step: 12,
      line: 13,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12' },
      explanation: {
        icon: 'check',
        text: '}；结束 Status 枚举定义',
        color: 'blue',
        actor: 'CPU',
        detail: 'Status 枚举定义完成。现在有两种枚举类型可用：Color(0,1,2) 和 Status(10,11,12)'
      }
    },
    {
      step: 13,
      line: 15,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12' },
      explanation: {
        icon: 'info',
        text: '阅读代码：声明枚举变量 c = Red',
        color: 'blue',
        actor: 'CPU',
        detail: '声明 Color 类型的变量 c，初始化为 Red 枚举常量'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12', c: 'Red (0)' },
      highlightVar: 'c',
      explanation: {
        icon: 'box',
        text: 'enum Color c = Red：声明枚举变量',
        color: 'green',
        actor: 'CPU',
        detail: 'c 是 Color 类型变量，占用 4 字节 (0x7ffd00)，存储整数值 0。使用枚举变量比直接使用整数更有语义'
      }
    },
    {
      step: 15,
      line: 16,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12', c: 'Red (0)', colorValue: '0' },
      highlightVar: 'colorValue',
      explanation: {
        icon: 'calculator',
        text: 'int colorValue = c：隐式转换为 int',
        color: 'purple',
        actor: 'CPU',
        detail: '枚举变量可隐式转换为 int。colorValue = c = 0。C 语言中枚举底层是整数，可自由转换'
      }
    },
    {
      step: 16,
      line: 18,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 18],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12', c: 'Red (0)', colorValue: '0' },
      explanation: {
        icon: 'info',
        text: '阅读代码：声明 Status 变量 s = Active',
        color: 'blue',
        actor: 'CPU',
        detail: 's 是 Status 类型变量，初始化为 Active 枚举常量'
      }
    },
    {
      step: 17,
      line: 18,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 18],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12', c: 'Red (0)', colorValue: '0', s: 'Active (11)' },
      highlightVar: 's',
      explanation: {
        icon: 'box',
        text: 'enum Status s = Active：声明枚举变量',
        color: 'orange',
        actor: 'CPU',
        detail: 's 是 Status 类型变量，占用 4 字节 (0x7ffd08)，存储整数值 11。Active 比直接使用 11 更易理解'
      }
    },
    {
      step: 18,
      line: 19,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 18, 19],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12', c: 'Red (0)', colorValue: '0', s: 'Active (11)', statusValue: '11' },
      highlightVar: 'statusValue',
      explanation: {
        icon: 'calculator',
        text: 'int statusValue = s：转换为 int',
        color: 'cyan',
        actor: 'CPU',
        detail: 'statusValue = s = Active = 11。枚举变量到 int 是隐式转换，不需要强制类型转换'
      }
    },
    {
      step: 19,
      line: 21,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 18, 19, 21],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12', c: 'Red (0)', colorValue: '0', s: 'Active (11)', statusValue: '11' },
      explanation: {
        icon: 'info',
        text: '阅读代码：if (c == Red) 枚举比较',
        color: 'blue',
        actor: 'CPU',
        detail: '枚举变量可以用==进行比较。底层是整数比较：c == 0'
      }
    },
    {
      step: 20,
      line: 21,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 18, 19, 21],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12', c: 'Red (0)', colorValue: '0', s: 'Active (11)', statusValue: '11' },
      explanation: {
        icon: 'calculator',
        text: 'c == Red：0 == 0，条件为真',
        color: 'blue',
        actor: 'CPU',
        detail: 'c 的值是 0，Red 的值也是 0。条件 0 == 0 为真，进入 if 块'
      }
    },
    {
      step: 21,
      line: 22,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 18, 19, 21],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12', c: 'Red (0)', colorValue: '0', s: 'Active (11)', statusValue: '11' },
      explanation: {
        icon: 'info',
        text: '阅读注释：枚举比较 - c 是否等于 Red',
        color: 'blue',
        actor: 'CPU',
        detail: '使用枚举常量进行比较比使用魔法数字更清晰。if (c == 0) 不如 if (c == Red) 易读'
      }
    },
    {
      step: 22,
      line: 23,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 18, 19, 21, 22, 23],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12', c: 'Red (0)', colorValue: '0', s: 'Active (11)', statusValue: '11', isRed: '1' },
      highlightVar: 'isRed',
      explanation: {
        icon: 'check',
        text: 'isRed = 1：条件为真，执行块内代码',
        color: 'red',
        actor: 'CPU',
        detail: '因为 c == Red 为真，执行块内代码。isRed = 1 表示 c 确实是红色。isRed 占用 4 字节 (0x7ffd10)'
      }
    },
    {
      step: 23,
      line: 26,
      executedLines: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 18, 19, 21, 22, 23, 24, 26],
      vars: { Color: '{Red=0, Green=1, Blue=2}', Red: '0', Green: '1', Blue: '2', Status: '{Pending=10, Active=11, Closed=12}', Pending: '10', Active: '11', Closed: '12', c: 'Red (0)', colorValue: '0', s: 'Active (11)', statusValue: '11', isRed: '1' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键点：1) enum 定义命名整数常量  2) 默认从 0 开始递增  3) 可显式赋值  4) 枚举变量可隐式转 int  5) 枚举提高代码可读性'
      }
    }
  ],

  summary: {
    oneLiner: '掌握枚举类型的定义、初始化和使用方法',
    pitfalls: [
      'enum 定义命名整数常量集合，提高代码可读性',
      '枚举常量默认从 0 开始自动递增',
      '可显式赋值：Enum { A=10, B, C } → B=11, C=12',
      '枚举变量可隐式转换为 int，无需强制转换',
      '使用枚举常量代替魔法数字，代码更清晰'
    ],
    transferQuestion: '为什么使用枚举而不是#define 定义常量？',
    miniExercise: {
      bugCode: 'enum { A, B=5, C };  // C 的值是？',
      hint: 'C = B + 1 = 6。显式赋值后继续自动递增'
    }
  },

  predictions: [
    {
      question: 'enum { X, Y, Z } 中 Y 的值是多少？',
      options: [
        { text: '0', feedback: '错误！X 才是 0。' },
        { text: '1', feedback: '正确！X=0, Y=1, Z=2，默认从 0 递增。' },
        { text: '2', feedback: '错误！Z 才是 2。' },
        { text: '不确定', feedback: '错误！默认从 0 开始递增，确定是 1。' }
      ],
      correctIndex: 1
    },
    {
      question: 'enum { A=10, B, C } 中 C 的值是多少？',
      options: [
        { text: '10', feedback: '错误！A 才是 10。' },
        { text: '11', feedback: '错误！B 才是 11。' },
        { text: '12', feedback: '正确！A=10, B=11, C=12。' },
        { text: '编译错误', feedback: '错误！这是合法的枚举定义。' }
      ],
      correctIndex: 2
    }
  ],

  misconceptions: [
    {
      myth: '枚举是全新的数据类型',
      truth: 'C 语言的枚举底层就是整数 (int)。枚举变量占用与 int 相同的内存 (通常 4 字节)。枚举提供类型安全和可读性，但没有真正的类型隔离。'
    },
    {
      myth: '枚举常量可以在运行时修改',
      truth: '枚举常量是编译期常量，等价于#define。不能在运行时修改枚举常量的值。如需要运行时修改，应使用枚举变量而非常量。'
    },
    {
      myth: '枚举变量和 int 完全等价',
      truth: '枚举可隐式转 int，但 int 转枚举需要显式转换 (虽然 C 语言不强制)。将任意 int 赋给枚举变量可能导致无效值，应进行验证。'
    },
    {
      myth: '枚举必须从 0 开始',
      truth: '枚举可以不从 0 开始。可以显式指定任意起始值：enum { A=100, B, C } → A=100, B=101, C=102。甚至可以不连续：enum { A=1, B=5, C=10 }。'
    }
  ]
};
