import { memo, useState, useCallback, useEffect } from 'react';

// 函数栈帧可视化 - 深度交互组件
// 理解：函数调用、栈帧结构、局部变量、返回地址

type StackFrame = {
  id: string;
  functionName: string;
  parameters: { name: string; value: string }[];
  locals: { name: string; value: string }[];
  returnAddress: string;
  returnValue?: string;
};

type ExecutionStep = {
  description: string;
  stack: StackFrame[];
  highlightLine: number;
  console?: string;
};

export const StackFrameViz = memo(function StackFrameViz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // 示例：递归计算阶乘
  const factorialScenario = {
    name: '递归函数调用栈',
    code: [
      'int factorial(int n) {',
      '    if (n <= 1) return 1;',
      '    int result = n * factorial(n - 1);',
      '    return result;',
      '}',
      '',
      'int main() {',
      '    int ans = factorial(3);',
      '    printf("%d", ans);',
      '}',
    ],
    steps: [
      {
        description: 'main() 开始执行，调用 factorial(3)',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'ans', value: '?' }], returnAddress: 'OS' }
        ],
        highlightLine: 6,
        console: ''
      },
      {
        description: 'factorial(3) 被调用，创建新栈帧',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'ans', value: '?' }], returnAddress: 'OS' },
          { id: 'f3', functionName: 'factorial', parameters: [{ name: 'n', value: '3' }], locals: [{ name: 'result', value: '?' }], returnAddress: 'main:7' }
        ],
        highlightLine: 0,
        console: ''
      },
      {
        description: 'n=3 > 1，继续递归调用 factorial(2)',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'ans', value: '?' }], returnAddress: 'OS' },
          { id: 'f3', functionName: 'factorial', parameters: [{ name: 'n', value: '3' }], locals: [{ name: 'result', value: '?' }], returnAddress: 'main:7' },
          { id: 'f2', functionName: 'factorial', parameters: [{ name: 'n', value: '2' }], locals: [{ name: 'result', value: '?' }], returnAddress: 'f3:2' }
        ],
        highlightLine: 2,
        console: ''
      },
      {
        description: 'n=2 > 1，继续递归调用 factorial(1)',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'ans', value: '?' }], returnAddress: 'OS' },
          { id: 'f3', functionName: 'factorial', parameters: [{ name: 'n', value: '3' }], locals: [{ name: 'result', value: '?' }], returnAddress: 'main:7' },
          { id: 'f2', functionName: 'factorial', parameters: [{ name: 'n', value: '2' }], locals: [{ name: 'result', value: '?' }], returnAddress: 'f3:2' },
          { id: 'f1', functionName: 'factorial', parameters: [{ name: 'n', value: '1' }], locals: [], returnAddress: 'f2:2' }
        ],
        highlightLine: 2,
        console: ''
      },
      {
        description: 'n=1 <= 1，到达基准条件，返回 1',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'ans', value: '?' }], returnAddress: 'OS' },
          { id: 'f3', functionName: 'factorial', parameters: [{ name: 'n', value: '3' }], locals: [{ name: 'result', value: '?' }], returnAddress: 'main:7' },
          { id: 'f2', functionName: 'factorial', parameters: [{ name: 'n', value: '2' }], locals: [{ name: 'result', value: '?' }], returnAddress: 'f3:2' },
          { id: 'f1', functionName: 'factorial', parameters: [{ name: 'n', value: '1' }], locals: [], returnAddress: 'f2:2', returnValue: '1' }
        ],
        highlightLine: 1,
        console: ''
      },
      {
        description: 'factorial(1) 返回 1，栈帧弹出，f2 继续执行',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'ans', value: '?' }], returnAddress: 'OS' },
          { id: 'f3', functionName: 'factorial', parameters: [{ name: 'n', value: '3' }], locals: [{ name: 'result', value: '?' }], returnAddress: 'main:7' },
          { id: 'f2', functionName: 'factorial', parameters: [{ name: 'n', value: '2' }], locals: [{ name: 'result', value: '2' }], returnAddress: 'f3:2', returnValue: '2' }
        ],
        highlightLine: 3,
        console: ''
      },
      {
        description: 'factorial(2) 返回 2，栈帧弹出，f3 继续执行',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'ans', value: '?' }], returnAddress: 'OS' },
          { id: 'f3', functionName: 'factorial', parameters: [{ name: 'n', value: '3' }], locals: [{ name: 'result', value: '6' }], returnAddress: 'main:7', returnValue: '6' }
        ],
        highlightLine: 3,
        console: ''
      },
      {
        description: 'factorial(3) 返回 6，栈帧弹出，回到 main',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'ans', value: '6' }], returnAddress: 'OS' }
        ],
        highlightLine: 7,
        console: ''
      },
      {
        description: 'main 打印结果 6',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'ans', value: '6' }], returnAddress: 'OS' }
        ],
        highlightLine: 8,
        console: '6'
      }
    ] as ExecutionStep[]
  };

  // 另一个示例：普通函数调用
  const functionCallScenario = {
    name: '普通函数调用',
    code: [
      'int add(int a, int b) {',
      '    int sum = a + b;',
      '    return sum;',
      '}',
      '',
      'int main() {',
      '    int x = 5;',
      '    int y = 3;',
      '    int result = add(x, y);',
      '    printf("%d", result);',
      '}',
    ],
    steps: [
      {
        description: 'main() 开始执行',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'x', value: '5' }, { name: 'y', value: '3' }, { name: 'result', value: '?' }], returnAddress: 'OS' }
        ],
        highlightLine: 5,
        console: ''
      },
      {
        description: '调用 add(5, 3)，参数压栈',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'x', value: '5' }, { name: 'y', value: '3' }, { name: 'result', value: '?' }], returnAddress: 'OS' },
          { id: 'add', functionName: 'add', parameters: [{ name: 'a', value: '5' }, { name: 'b', value: '3' }], locals: [{ name: 'sum', value: '?' }], returnAddress: 'main:8' }
        ],
        highlightLine: 0,
        console: ''
      },
      {
        description: 'add 函数执行，计算 sum = 5 + 3',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'x', value: '5' }, { name: 'y', value: '3' }, { name: 'result', value: '?' }], returnAddress: 'OS' },
          { id: 'add', functionName: 'add', parameters: [{ name: 'a', value: '5' }, { name: 'b', value: '3' }], locals: [{ name: 'sum', value: '8' }], returnAddress: 'main:8' }
        ],
        highlightLine: 1,
        console: ''
      },
      {
        description: 'add 返回 8，栈帧弹出',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'x', value: '5' }, { name: 'y', value: '3' }, { name: 'result', value: '8' }], returnAddress: 'OS' }
        ],
        highlightLine: 8,
        console: ''
      },
      {
        description: '打印结果 8',
        stack: [
          { id: 'main', functionName: 'main', parameters: [], locals: [{ name: 'x', value: '5' }, { name: 'y', value: '3' }, { name: 'result', value: '8' }], returnAddress: 'OS' }
        ],
        highlightLine: 9,
        console: '8'
      }
    ] as ExecutionStep[]
  };

  const scenarios = [factorialScenario, functionCallScenario];
  const [currentScenario, setCurrentScenario] = useState(0);
  const currentSteps = scenarios[currentScenario].steps;

  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, [currentScenario]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= currentSteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSteps.length]);

  const step = currentSteps[currentStep];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-2xl">
      {/* 标题和场景选择 */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">BookOpen 函数栈帧可视化</h3>
          <p className="text-slate-400 text-sm">理解函数调用时栈的变化</p>
        </div>
        <div className="flex gap-2">
          {scenarios.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrentScenario(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentScenario === i
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* 代码显示 */}
        <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-slate-500">C代码</span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs disabled:opacity-50"
              >
                ← 上一步
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1 bg-emerald-600 text-white rounded text-xs font-medium"
              >
                {isPlaying ? 'Pause 暂停' : 'Play 播放'}
              </button>
              <button
                onClick={() => setCurrentStep(Math.min(currentSteps.length - 1, currentStep + 1))}
                disabled={currentStep === currentSteps.length - 1}
                className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs disabled:opacity-50"
              >
                下一步 →
              </button>
            </div>
          </div>
          <pre className="text-sm font-mono">
            {scenarios[currentScenario].code.map((line, i) => (
              <div
                key={i}
                className={`px-2 py-0.5 rounded ${
                  i === step.highlightLine
                    ? 'bg-emerald-500/20 text-emerald-300 border-l-2 border-emerald-500'
                    : 'text-slate-400'
                }`}
              >
                {line}
              </div>
            ))}
          </pre>
        </div>

        {/* 栈可视化 */}
        <div className="space-y-4">
          {/* 步骤说明 */}
          <div className="bg-blue-900/20 rounded-xl p-4 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-blue-400 font-medium">步骤 {currentStep + 1} / {currentSteps.length}</span>
            </div>
            <p className="text-sm text-blue-200">{step.description}</p>
          </div>

          {/* 栈帧显示 */}
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-500 font-medium">调用栈（栈顶在上）</span>
              <span className="text-xs text-slate-500">地址: 高 → 低</span>
            </div>
            
            <div className="space-y-2">
              {[...step.stack].reverse().map((frame, idx) => (
                <div
                  key={frame.id}
                  className={`
                    rounded-lg border-2 p-3 transition-all
                    ${idx === 0 ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-700/50 border-slate-600'}
                  `}
                >
                  {/* 函数名 */}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-bold ${idx === 0 ? 'text-emerald-400' : 'text-slate-300'}`}>
                      {frame.functionName}()
                    </span>
                    <span className="text-xs text-slate-500">返回: {frame.returnAddress}</span>
                  </div>

                  {/* 参数 */}
                  {frame.parameters.length > 0 && (
                    <div className="mb-2">
                      <span className="text-[10px] text-slate-500 uppercase">参数</span>
                      <div className="flex gap-2 mt-1">
                        {frame.parameters.map((param, pidx) => (
                          <span key={pidx} className="px-2 py-0.5 bg-amber-900/30 text-amber-300 rounded text-xs">
                            {param.name} = {param.value}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 局部变量 */}
                  {frame.locals.length > 0 && (
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase">局部变量</span>
                      <div className="flex gap-2 mt-1 flex-wrap">
                        {frame.locals.map((local, lidx) => (
                          <span key={lidx} className="px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded text-xs">
                            {local.name} = {local.value}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 返回值 */}
                  {frame.returnValue && (
                    <div className="mt-2 pt-2 border-t border-slate-600">
                      <span className="text-[10px] text-emerald-500 uppercase">返回值</span>
                      <span className="ml-2 px-2 py-0.5 bg-emerald-900/30 text-emerald-300 rounded text-xs">
                        {frame.returnValue}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 控制台输出 */}
          <div className="bg-black rounded-xl p-3 border border-slate-800">
            <span className="text-xs text-slate-600">控制台输出</span>
            <div className="mt-1 font-mono text-green-400">
              {step.console || '_'}
            </div>
          </div>
        </div>
      </div>

      {/* 教学提示 */}
      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
          <h4 className="text-xs font-bold text-slate-300 mb-1">Pin 栈帧包含</h4>
          <ul className="text-xs text-slate-400 space-y-0.5">
            <li>• 参数（传入的值）</li>
            <li>• 局部变量</li>
            <li>• 返回地址</li>
          </ul>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
          <h4 className="text-xs font-bold text-slate-300 mb-1">RefreshCcw 调用过程</h4>
          <ul className="text-xs text-slate-400 space-y-0.5">
            <li>• 参数压栈</li>
            <li>• 保存返回地址</li>
            <li>• 跳转到函数</li>
          </ul>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
          <h4 className="text-xs font-bold text-slate-300 mb-1">AlertTriangle️ 栈溢出</h4>
          <ul className="text-xs text-slate-400 space-y-0.5">
            <li>• 递归太深会导致</li>
            <li>• 栈空间有限（~8MB）</li>
            <li>• 无限递归会崩溃</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default StackFrameViz;
