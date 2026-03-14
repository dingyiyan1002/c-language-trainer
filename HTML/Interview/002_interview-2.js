window.LESSON_DATA = {
  meta: {
    id: 'interview-2',
    title: '系统设计题',
    chapter: 'Interview',
    index: 2,
    filename: 'memory_pool.c',
    keyPoints: ['内存池设计', '链表管理', '固定大小块']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdlib.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'POOL_SIZE' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1024' }] },
    { num: 6, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'BLOCK_SIZE' }, { type: 'ws', text: ' ' }, { type: 'num', text: '64' }] },
    { num: 7, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 8, tokens: [{ type: 'kw', text: 'typedef' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'Block' }] },
    { num: 9, tokens: [{ type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'Block' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'next' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'data' }, { type: 'punc', text: '[' }, { type: 'id', text: 'BLOCK_SIZE' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'punc', text: '}' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'Block' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 14, tokens: [{ type: 'kw', text: 'typedef' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'Block' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'freeList' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'size_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'freeCount' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'punc', text: '}' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'MemoryPool' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 19, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'poolInit' }, { type: 'punc', text: '(' }, { type: 'id', text: 'MemoryPool' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'pool' }, { type: 'punc', text: ')' }] },
    { num: 20, tokens: [{ type: 'punc', text: '{' }] },
    { num: 21, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'Block' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'blocks' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'Block' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'fn', text: 'malloc' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'id', text: 'Block' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'POOL_SIZE' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'pool' }, { type: 'op', text: '->' }, { type: 'id', text: 'freeList' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'blocks' }, { type: 'punc', text: ';' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'size_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'POOL_SIZE' }, { type: 'ws', text: ' ' }, { type: 'op', text: '-' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 24, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'blocks' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'punc', text: ']' }, { type: 'op', text: '->' }, { type: 'id', text: 'next' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'id', text: 'blocks' }, { type: 'punc', text: '[' }, { type: 'id', text: 'i' }, { type: 'op', text: '+' }, { type: 'num', text: '1' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 25, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 26, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'blocks' }, { type: 'punc', text: '[' }, { type: 'id', text: 'POOL_SIZE' }, { type: 'ws', text: ' ' }, { type: 'op', text: '-' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ']' }, { type: 'op', text: '->' }, { type: 'id', text: 'next' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ';' }] },
    { num: 27, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'pool' }, { type: 'op', text: '->' }, { type: 'id', text: 'freeCount' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'POOL_SIZE' }, { type: 'punc', text: ';' }] },
    { num: 28, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Pool initialized with %zu blocks\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'pool' }, { type: 'op', text: '->' }, { type: 'id', text: 'freeCount' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 29, tokens: [{ type: 'punc', text: '}' }] },
    { num: 30, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 31, tokens: [{ type: 'kw', text: 'void' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'poolAlloc' }, { type: 'punc', text: '(' }, { type: 'id', text: 'MemoryPool' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'pool' }, { type: 'punc', text: ')' }] },
    { num: 32, tokens: [{ type: 'punc', text: '{' }] },
    { num: 33, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'pool' }, { type: 'op', text: '->' }, { type: 'id', text: 'freeList' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ';' }] },
    { num: 34, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'Block' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'block' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'pool' }, { type: 'op', text: '->' }, { type: 'id', text: 'freeList' }, { type: 'punc', text: ';' }] },
    { num: 35, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'pool' }, { type: 'op', text: '->' }, { type: 'id', text: 'freeList' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'block' }, { type: 'op', text: '->' }, { type: 'id', text: 'next' }, { type: 'punc', text: ';' }] },
    { num: 36, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'pool' }, { type: 'op', text: '->' }, { type: 'id', text: 'freeCount' }, { type: 'op', text: '--' }, { type: 'punc', text: ';' }] },
    { num: 37, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'block' }, { type: 'op', text: '->' }, { type: 'id', text: 'data' }, { type: 'punc', text: ';' }] },
    { num: 38, tokens: [{ type: 'punc', text: '}' }] },
    { num: 39, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 40, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'poolFree' }, { type: 'punc', text: '(' }, { type: 'id', text: 'MemoryPool' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'pool' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }] },
    { num: 41, tokens: [{ type: 'punc', text: '{' }] },
    { num: 42, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'op', text: '!' }, { type: 'id', text: 'ptr' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'return' }, { type: 'punc', text: ';' }] },
    { num: 43, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'Block' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'block' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'id', text: 'ptr' }, { type: 'ws', text: ' ' }, { type: 'op', text: '-' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'offsetof' }, { type: 'punc', text: '(' }, { type: 'id', text: 'Block' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'data' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 44, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'block' }, { type: 'op', text: '->' }, { type: 'id', text: 'next' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'pool' }, { type: 'op', text: '->' }, { type: 'id', text: 'freeList' }, { type: 'punc', text: ';' }] },
    { num: 45, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'pool' }, { type: 'op', text: '->' }, { type: 'id', text: 'freeList' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'block' }, { type: 'punc', text: ';' }] },
    { num: 46, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'pool' }, { type: 'op', text: '->' }, { type: 'id', text: 'freeCount' }, { type: 'op', text: '++' }, { type: 'punc', text: ';' }] },
    { num: 47, tokens: [{ type: 'punc', text: '}' }] },
    { num: 48, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 49, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }] },
    { num: 50, tokens: [{ type: 'punc', text: '{' }] },
    { num: 51, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'MemoryPool' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'pool' }, { type: 'punc', text: ';' }] },
    { num: 52, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'poolInit' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'pool' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 53, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'void' }, { type: 'op', text: '*' }, { type: 'id', text: 'p1' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'poolAlloc' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'pool' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 54, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Allocated: %p, free=%zu\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'p1' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'pool' }, { type: 'op', text: '->' }, { type: 'id', text: 'freeCount' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 55, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'poolFree' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'pool' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'p1' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 56, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Freed, free=%zu\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'pool' }, { type: 'op', text: '->' }, { type: 'id', text: 'freeCount' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 57, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 58, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'pool', name: 'pool', type: 'MemoryPool', addr: '0x7fff00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'freeList', name: 'freeList', type: 'Block*', addr: '0x7fff08', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'blocks', name: 'blocks', type: 'Block*', addr: '0xHeap001', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
  ],
  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: { icon: 'rocket', text: '点击播放，学习内存池系统设计', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 5,
      executedLines: [1, 2, 3, 4],
      vars: {},
      highlightVar: 'pool',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'struct',
        text: '#define POOL_SIZE 1024, BLOCK_SIZE 64 — 内存池参数',
        color: 'yellow',
        actor: 'Architect',
        detail: '预定义内存池大小：1024 个块，每块 64 字节。内存池预先分配固定大小的内存块，避免频繁 malloc/free 导致的碎片和性能开销。'
      },
      prediction: {
        question: '内存池的主要优势是什么？',
        options: ['节省内存', '避免碎片 + 提高性能', '代码更简单'],
        answer: 1
      },
      misconception: null,
      actor: 'Architect',
      target: 'const:POOL_SIZE',
      timing: 'design-time'
    },
    {
      step: 2,
      line: 8,
      executedLines: [1, 2, 3, 4, 5, 6, 7],
      vars: {},
      highlightVar: 'pool',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'struct',
        text: 'struct Block — 内存块结构（next 指针 + 数据区）',
        color: 'green',
        actor: 'Architect',
        detail: '每个 Block 包含：1) next 指针（链表管理）2) data[64] 数据区。链表结构用于组织空闲块，类似单链表。'
      },
      prediction: null,
      misconception: null,
      actor: 'Architect',
      target: 'type:Block',
      timing: 'design-time'
    },
    {
      step: 3,
      line: 14,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: {},
      highlightVar: 'freeList',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'struct',
        text: 'MemoryPool — 内存池管理结构',
        color: 'purple',
        actor: 'Architect',
        detail: 'MemoryPool 包含：1) freeList 指向第一个空闲块 2) freeCount 记录空闲块数量。这是内存池的"元数据"。'
      },
      prediction: null,
      misconception: {
        title: '空闲链表设计',
        text: '空闲链表（Free List）是内存管理的核心：1) 分配时从链表头取下 2) 释放时插回链表头 3) O(1) 时间复杂度 4) 无需遍历。'
      },
      actor: 'Architect',
      target: 'type:MemoryPool',
      timing: 'design-time'
    },
    {
      step: 4,
      line: 19,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      vars: {},
      highlightVar: 'pool',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'poolInit — 初始化内存池',
        color: 'blue',
        actor: 'Developer',
        detail: '初始化函数：1) malloc 分配连续内存 2) 将所有块串成链表 3) 设置 freeCount。一次性分配避免了后续碎片。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'func:poolInit',
      timing: 'design-time'
    },
    {
      step: 5,
      line: 21,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      vars: { pool: { freeList: null, freeCount: 0 } },
      highlightVar: 'blocks',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'malloc(sizeof(Block) * POOL_SIZE) — 分配连续内存',
        color: 'blue',
        actor: 'OS',
        detail: '一次性分配 1024*64 字节（64KB）连续内存。这是内存池的"存储区"。只调用一次 malloc，避免后续碎片。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'heap',
      timing: 'runtime'
    },
    {
      step: 6,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      vars: { pool: { freeList: 'blocks[0]', freeCount: 0 }, blocks: '0xHeap001' },
      highlightVar: 'blocks',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'loop',
        text: 'for 循环：将所有块串成链表',
        color: 'yellow',
        actor: 'CPU',
        detail: '循环将 1024 个块串成单链表：blocks[0]->next = &blocks[1]，blocks[1]->next = &blocks[2]，...。这是初始化空闲链表的关键步骤。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'loop',
      timing: 'runtime'
    },
    {
      step: 7,
      line: 31,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      vars: { pool: { freeList: 'blocks[0]', freeCount: 1024 }, blocks: '0xHeap001' },
      highlightVar: 'freeList',
      isDanger: false,
      output: [{ type: 'success', text: 'Pool initialized with 1024 blocks' }],
      explanation: {
        icon: 'check',
        text: '内存池初始化完成 — freeList 指向 blocks[0]，freeCount=1024',
        color: 'green',
        actor: 'Developer',
        detail: '初始化完成：1) freeList 指向第一个块 2) 最后一个块的 next=NULL 3) freeCount=1024。所有块都在空闲链表中。'
      },
      prediction: {
        question: 'poolAlloc 的时间复杂度是多少？',
        options: ['O(1)', 'O(n)', 'O(log n)'],
        answer: 0
      },
      misconception: null,
      actor: 'Developer',
      target: 'var:pool',
      timing: 'runtime'
    },
    {
      step: 8,
      line: 31,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
      vars: { pool: { freeList: 'blocks[0]', freeCount: 1024 } },
      highlightVar: 'freeList',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'code',
        text: 'poolAlloc — 从内存池分配（O(1) 时间）',
        color: 'green',
        actor: 'Developer',
        detail: '分配函数：1) 检查 freeList 是否为空 2) 取链表头节点 3) freeList 指向下一个 4) 返回 data 指针。O(1) 时间，比 malloc 快。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'func:poolAlloc',
      timing: 'design-time'
    },
    {
      step: 9,
      line: 34,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
      vars: { pool: { freeList: 'blocks[0]', freeCount: 1024 } },
      highlightVar: 'freeList',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'pointer',
        text: 'Block* block = pool->freeList — 取链表头节点',
        color: 'purple',
        actor: 'CPU',
        detail: '从空闲链表头取出第一个可用块。block 指向 blocks[0]。这是要分配的块。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:block',
      timing: 'runtime'
    },
    {
      step: 10,
      line: 37,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      vars: { pool: { freeList: 'blocks[1]', freeCount: 1023 } },
      highlightVar: 'freeList',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: '返回 block->data — 用户获得 64 字节内存',
        color: 'green',
        actor: 'CPU',
        detail: '返回块的数据区指针（block->data）。用户可用这 64 字节。pool->freeList 现在指向 blocks[1]，freeCount=1023。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'return',
      timing: 'runtime'
    },
    {
      step: 11,
      line: 53,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
      vars: { pool: { freeList: 'blocks[1]', freeCount: 1023 } },
      highlightVar: 'pool',
      isDanger: false,
      output: [{ type: 'success', text: 'Allocated: 0x..., free=1023' }],
      explanation: {
        icon: 'terminal',
        text: 'main 函数测试：分配→打印→释放',
        color: 'green',
        actor: 'CPU',
        detail: 'main 函数演示：1) 初始化内存池 2) 分配一块 3) 打印状态 4) 释放回池。完整的内存池使用流程。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'runtime'
    },
    {
      step: 12,
      line: 58,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
      vars: { pool: { freeList: 'blocks[0]', freeCount: 1024 } },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Allocated: 0x..., free=1023' }, { type: 'success', text: 'Freed, free=1024' }],
      explanation: {
        icon: 'check',
        text: '内存池设计要点：预分配 + 链表管理 + O(1) 分配/释放',
        color: 'green',
        actor: 'Architect',
        detail: '内存池要点：1) 预分配连续内存 2) 链表管理空闲块 3) O(1) 分配/释放 4) 避免碎片 5) 适合固定大小对象。嵌入式系统常用技术。'
      },
      prediction: null,
      misconception: null,
      actor: 'Architect',
      target: 'exit',
      timing: 'runtime'
    }
  ],
  summary: {
    oneLiner: '内存池设计：预分配连续内存 + 单链表管理空闲块 + O(1) 时间分配/释放',
    pitfalls: [
      '内存池适合固定大小对象，不适合大小变化大的场景',
      'poolFree 时需要从 data 指针反推 Block 结构体地址（用 offsetof 宏）',
      '初始化时必须正确设置最后一个块的 next=NULL，否则链表会指向随机内存'
    ],
    transferQuestion: '如何设计支持多种块大小的内存池？（提示：多个空闲链表，每种大小一个）',
    miniExercise: {
      bugCode: 'void poolFree(MemoryPool* pool, void* ptr) {\n    Block* block = (Block*)ptr;  // 直接转换有什么问题？\n    block->next = pool->freeList;\n    pool->freeList = block;\n}',
      hint: 'ptr 指向 block->data，不是 Block 本身。应该用 offsetof 计算 Block 起始地址：(char*)ptr - offsetof(Block, data)'
    }
  }
};
