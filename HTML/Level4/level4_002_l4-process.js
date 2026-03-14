window.LESSON_DATA = {
  meta: {
    id: 'l4-process',
    title: '进程管理',
    chapter: 'level4',
    index: 2,
    filename: 'process-fork.c',
    keyPoints: ['fork', 'exec', 'wait', 'IPC']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdlib.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<unistd.h>' }] },
    { num: 4, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<sys/wait.h>' }] },
    { num: 5, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 6, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'shared_data' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '100' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 全局变量' }] },
    { num: 7, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 8, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'pid_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'pid' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'shared_data' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '200' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'pid' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'fork' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'pid' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 13, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'perror' }, { type: 'punc', text: '(' }, { type: 'str', text: '\"fork failed\"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'pid' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 17, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'shared_data' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '50' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 子进程修改' }] },
    { num: 18, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '\"Child:  pid=%d, data=%d\\\\n\"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'getpid' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'shared_data' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'else' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 21, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '\"Parent: pid=%d, child_pid=%d, data=%d\\\\n\"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'getpid' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'pid' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'shared_data' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 22, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'status' }, { type: 'punc', text: ';' }] },
    { num: 23, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'wait' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'status' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 24, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '\"Parent: child exited, status=%d\\\\n\"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'status' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 25, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 26, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 27, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'shared_data', name: 'shared_data', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'pid', name: 'pid', type: 'pid_t', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 },
    { key: 'status', name: 'status', type: 'int', addr: '0x7ffc08', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 7 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习进程管理', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 6, executedLines: [1, 2, 3, 4, 5], vars: { shared_data: 100 }, highlightVar: 'shared_data', isDanger: false, output: [], explanation: { icon: 'memory', text: 'int shared_data = 100，全局变量', color: 'yellow', actor: 'CPU', detail: 'shared_data 是全局变量。注意：fork 后子进程复制父进程的数据空间，不是真正的共享。修改互不影响。' }, prediction: { question: 'fork 后子进程中的 shared_data 与父进程是什么关系？', options: ['完全共享', '各自独立副本', '只读共享'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:shared_data', timing: 'init' },
    { step: 2, line: 10, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9], vars: { shared_data: 200 }, highlightVar: 'shared_data', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'shared_data = 200，父进程修改', color: 'green', actor: 'CPU', detail: '父进程将 shared_data 修改为 200。这个值将在 fork 时被复制到子进程。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:shared_data', timing: 'main-loop' },
    { step: 3, line: 11, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vars: { shared_data: 200, pid: 'forking' }, highlightVar: 'pid', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'pid = fork() 创建子进程', color: 'green', actor: 'CPU', detail: 'fork() 创建新进程：1) 复制父进程代码/数据/BSS；2) 返回两次（父进程返回子进程 PID，子进程返回 0）；3) 两个进程从 fork() 后继续执行。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:pid', timing: 'fork' },
    { step: 4, line: 12, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], vars: { shared_data: 200, pid: 'result' }, highlightVar: 'pid', isDanger: false, output: [], explanation: { icon: 'target', text: '检查 pid < 0，fork 是否失败', color: 'orange', actor: 'CPU', detail: 'fork 失败返回 -1（系统资源不足时）。必须检查返回值！' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'condition-check' },
    { step: 5, line: 17, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], vars: { shared_data: 50 }, highlightVar: 'shared_data', isDanger: false, output: [], explanation: { icon: 'bolt', text: '子进程：shared_data = 50', color: 'green', actor: 'Child', detail: '子进程修改自己的 shared_data 副本为 50。注意：这不会影响父进程的 shared_data（仍为 200）。这是写时复制（Copy-on-Write）语义。' }, prediction: null, misconception: { title: '进程间内存隔离', text: 'fork 后父子进程有独立的地址空间。子进程修改变量不影响父进程。真正的 IPC 需要管道、共享内存或消息队列。' }, actor: 'Child', target: 'var:shared_data', timing: 'child-exec' },
    { step: 6, line: 18, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], vars: { shared_data: 50 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Child:  pid=12345, data=50' }], explanation: { icon: 'terminal', text: '子进程输出：pid=12345, data=50', color: 'green', actor: 'Child', detail: 'getpid() 返回子进程自己的 PID。data=50 证明子进程修改了自己的副本。' }, prediction: null, misconception: null, actor: 'Child', target: 'stdout', timing: 'child-exec' },
    { step: 7, line: 21, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], vars: { shared_data: 200, pid: 12345 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Child:  pid=12345, data=50' }, { type: 'success', text: 'Parent: pid=12344, child_pid=12345, data=200' }], explanation: { icon: 'terminal', text: '父进程输出：data=200（未被子进程影响）', color: 'green', actor: 'CPU', detail: '父进程的 shared_data 保持 200，证明进程间内存隔离。child_pid=12345 是 fork 返回的子进程 PID。' }, prediction: { question: '父进程中 shared_data 的值是多少？', options: ['50', '200', '0'], answer: 1 }, misconception: null, actor: 'CPU', target: 'stdout', timing: 'parent-exec' },
    { step: 8, line: 23, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], vars: { shared_data: 200, pid: 12345, status: 0 }, highlightVar: 'status', isDanger: false, output: [{ type: 'success', text: 'Child:  pid=12345, data=50' }, { type: 'success', text: 'Parent: pid=12344, child_pid=12345, data=200' }], explanation: { icon: 'bolt', text: 'wait(&status) 等待子进程结束', color: 'green', actor: 'CPU', detail: 'wait 阻塞直到子进程退出。status 接收子进程退出状态（return 0）。防止僵尸进程（zombie process）。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:status', timing: 'wait' },
    { step: 9, line: 24, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], vars: { shared_data: 200, pid: 12345, status: 0 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Child:  pid=12345, data=50' }, { type: 'success', text: 'Parent: pid=12344, child_pid=12345, data=200' }, { type: 'success', text: 'Parent: child exited, status=0' }], explanation: { icon: 'terminal', text: '父进程输出：child exited, status=0', color: 'green', actor: 'CPU', detail: '子进程正常退出（status=0）。wait 确保父进程回收子进程资源。完整的进程生命周期：fork→exec→wait。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'parent-exec' }
  ],
  summary: {
    oneLiner: 'fork 创建子进程（返回两次），父子进程内存独立，wait 回收资源',
    pitfalls: [
      'fork 返回两次：父进程返回子进程 PID，子进程返回 0',
      '父子进程有独立的地址空间，修改互不影响（写时复制）',
      '必须用 wait 等待子进程，否则产生僵尸进程'
    ],
    transferQuestion: '为什么子进程修改 shared_data=50 后，父进程的 shared_data 仍然是 200？',
    miniExercise: {
      bugCode: 'fork();\\n// 父进程直接 exit，没有 wait\\n// 这样有什么问题？',
      hint: '僵尸进程！子进程结束后无法被回收，占用进程表条目。必须用 wait/waitpid 回收。'
    }
  }
};
