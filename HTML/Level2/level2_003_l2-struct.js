window.LESSON_DATA = {
  meta: {
    id: 'l2-struct',
    title: '结构体',
    chapter: 'level2',
    index: 3,
    filename: 'struct-sensor.c',
    keyPoints: ['结构体定义', '成员访问', '内存对齐']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'Sensor' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 4, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'id' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 传感器 ID' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'name' }, { type: 'punc', text: '[' }, { type: 'num', text: '32' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 名称' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'float' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'value' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 测量值' }] },
    { num: 7, tokens: [{ type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'Sensor' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'temp' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }, { type: 'num', text: '1' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"Temperature"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'num', text: '25.5' }, { type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"ID: %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'temp' }, { type: 'punc', text: '.' }, { type: 'id', text: 'id' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Name: %s\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'temp' }, { type: 'punc', text: '.' }, { type: 'id', text: 'name' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Value: %.1f\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'temp' }, { type: 'punc', text: '.' }, { type: 'id', text: 'value' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'Sensor' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'humid' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'humid' }, { type: 'punc', text: '.' }, { type: 'id', text: 'id' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '2' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Humid ID: %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'humid' }, { type: 'punc', text: '.' }, { type: 'id', text: 'id' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'temp', name: 'temp', type: 'struct Sensor', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'humid', name: 'humid', type: 'struct Sensor', addr: '0x7ffc30', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 5 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习结构体', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 3, executedLines: [1, 2], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '定义 struct Sensor 结构体类型', color: 'purple', actor: 'CPU', detail: '结构体是用户的自定义数据类型，可以将不同类型的数据组合在一起。Sensor 结构体包含 id(int)、name(字符数组)、value(float) 三个成员。' }, prediction: { question: '结构体可以包含哪些类型的成员？', options: ['只能是 int', '可以是不同类型', '只能是相同类型'], answer: 1 }, misconception: null, actor: 'CPU', target: 'preprocessor', timing: 'pre-compile' },
    { step: 2, line: 10, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9], vars: { temp: { id: 1, name: 'Temperature', value: 25.5 } }, highlightVar: 'temp', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 struct Sensor temp 并初始化', color: 'yellow', actor: 'CPU', detail: 'temp 是 Sensor 结构体变量，在栈上分配内存。id=1, name="Temperature", value=25.5。结构体大小是各成员大小之和（考虑内存对齐）。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:temp', timing: 'main-loop' },
    { step: 3, line: 11, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vars: { temp: { id: 1, name: 'Temperature', value: 25.5 } }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'ID: 1' }], explanation: { icon: 'terminal', text: 'printf 输出 ID: 1', color: 'green', actor: 'CPU', detail: 'temp.id 使用点运算符 (.) 访问结构体成员。temp.id 得到 id 成员的值 1。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 4, line: 12, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], vars: { temp: { id: 1, name: 'Temperature', value: 25.5 } }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'ID: 1' }, { type: 'success', text: 'Name: Temperature' }], explanation: { icon: 'terminal', text: 'printf 输出 Name: Temperature', color: 'green', actor: 'CPU', detail: 'temp.name 是字符数组，%s 格式符输出字符串。name 成员存储传感器名称。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 5, line: 13, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], vars: { temp: { id: 1, name: 'Temperature', value: 25.5 } }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'ID: 1' }, { type: 'success', text: 'Name: Temperature' }, { type: 'success', text: 'Value: 25.5' }], explanation: { icon: 'terminal', text: 'printf 输出 Value: 25.5', color: 'green', actor: 'CPU', detail: '%.1f 格式符输出浮点数，保留 1 位小数。temp.value 得到 25.5。结构体可以组合不同类型的数据，非常适合表示复杂对象。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 6, line: 14, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], vars: { temp: { id: 1, name: 'Temperature', value: 25.5 }, humid: { id: 0, name: '', value: 0 } }, highlightVar: 'humid', isDanger: false, output: [{ type: 'success', text: 'ID: 1' }, { type: 'success', text: 'Name: Temperature' }, { type: 'success', text: 'Value: 25.5' }], explanation: { icon: 'memory', text: '声明 struct Sensor humid，未初始化', color: 'blue', actor: 'CPU', detail: 'humid 是另一个 Sensor 结构体变量。未显式初始化时，成员值是未定义的（栈上残留值）。应该逐个赋值或使用={0}清零初始化。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:humid', timing: 'main-loop' },
    { step: 7, line: 15, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], vars: { temp: { id: 1, name: 'Temperature', value: 25.5 }, humid: { id: 2, name: '', value: 0 } }, highlightVar: 'humid', isDanger: false, output: [{ type: 'success', text: 'ID: 1' }, { type: 'success', text: 'Name: Temperature' }, { type: 'success', text: 'Value: 25.5' }], explanation: { icon: 'bolt', text: 'humid.id = 2，通过点运算符赋值', color: 'green', actor: 'CPU', detail: '点运算符 (.) 用于访问结构体成员。humid.id = 2 将 id 成员设置为 2。可以逐个初始化结构体成员。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:humid', timing: 'main-loop' },
    { step: 8, line: 16, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], vars: { temp: { id: 1, name: 'Temperature', value: 25.5 }, humid: { id: 2, name: '', value: 0 } }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'ID: 1' }, { type: 'success', text: 'Name: Temperature' }, { type: 'success', text: 'Value: 25.5' }, { type: 'success', text: 'Humid ID: 2' }], explanation: { icon: 'terminal', text: 'printf 输出 Humid ID: 2', color: 'green', actor: 'CPU', detail: '验证 humid.id 确实被设置为 2。结构体在嵌入式中广泛用于设备配置、协议帧解析等场景。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '结构体组合不同类型数据，点运算符 (.) 访问成员，嵌入式中用于设备配置',
    pitfalls: [
      '结构体大小不是简单相加，要考虑内存对齐（通常是最大成员的倍数）',
      '未初始化的结构体成员值是未定义的，应该显式初始化',
      '点运算符 (.) 用于结构体变量，箭头运算符 (->) 用于结构体指针'
    ],
    transferQuestion: '如果 struct Sensor 包含 int(4 字节)+char[32]+float(4 字节)，sizeof(Sensor) 是多少？',
    miniExercise: {
      bugCode: 'struct Sensor s;\\nprintf("%d", s.id);  // 这样写有什么问题？',
      hint: 's 未初始化，s.id 的值是未定义的（栈上残留值），应该先赋值再使用'
    }
  }
};
