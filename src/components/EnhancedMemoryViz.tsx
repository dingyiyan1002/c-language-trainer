import { memo, useState, useCallback } from 'react';

export interface StepState {
  step: number;
  line: number;
  description: string;
  variables: Array<{
    name: string;
    value: string;
    binary?: string;
    decimal?: string;
    hex?: string;
    changed?: boolean;
    previousValue?: string;
  }>;
}

interface EnhancedMemoryVizProps {
  steps: StepState[];
  isDarkMode?: boolean;
}

export const EnhancedMemoryViz = memo(function EnhancedMemoryViz({ steps, isDarkMode = true }: EnhancedMemoryVizProps) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!steps || steps.length === 0) {
    return null;
  }

  const step = steps[currentStep];
  const totalSteps = steps.length;

  const toBinary = useCallback((val: string): string => {
    try {
      let num: number;
      if (val.startsWith('0x') || val.startsWith('0X')) {
        num = parseInt(val, 16);
      } else {
        num = parseInt(val, 10);
      }
      if (isNaN(num)) return val;
      const binary = num.toString(2).padStart(8, '0').padStart(32, '0');
      return binary.slice(-32).replace(/(\d{4})/g, '$1 ').trim();
    } catch {
      return '';
    }
  }, []);

  const toHex = (val: string): string => {
    try {
      let num: number;
      if (val.startsWith('0x') || val.startsWith('0X')) {
        return val;
      }
      num = parseInt(val, 10);
      if (isNaN(num)) return val;
      return '0x' + num.toString(16).toUpperCase().padStart(8, '0');
    } catch {
      return val;
    }
  };

  return (
    <div className={`rounded-xl overflow-hidden ${isDarkMode ? 'bg-[#0d1117] border border-purple-500/30' : 'bg-white border border-purple-200'}`}>
      {/* 头部 */}
      <div className={`flex items-center justify-between px-4 py-3 ${isDarkMode ? 'bg-purple-500/10 border-b border-purple-500/20' : 'bg-purple-50 border-b border-purple-100'}`}>
        <div className="flex items-center gap-2">
          <span className="text-lg">BarChart3</span>
          <span className={`font-medium ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>执行步骤可视化</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            步骤 {currentStep + 1} / {totalSteps}
          </span>
        </div>
      </div>

      {/* 步骤导航 */}
      <div className="flex gap-1 px-4 py-2 overflow-x-auto">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentStep(idx)}
            className={`px-2 py-1 text-xs rounded transition-colors whitespace-nowrap ${
              idx === currentStep
                ? 'bg-purple-500 text-white'
                : isDarkMode
                  ? 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            第{s.line}行
          </button>
        ))}
      </div>

      {/* 当前步骤详情 */}
      <div className="p-4 space-y-4">
        {/* 步骤说明 */}
        <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>第{step.line}行</span>
            {step.description.includes('【重点】') && (
              <span className="text-xs bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">重点</span>
            )}
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            {step.description.replace(/【重点】/g, '')}
          </p>
        </div>

        {/* 变量状态表格 */}
        {step.variables.length > 0 && (
          <div className="space-y-2">
            <div className={`text-xs font-medium ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>变量状态</div>
            {step.variables.map((v, idx) => {
              const binary = v.binary || toBinary(v.value);
              const hex = v.hex || toHex(v.value);
              const decimal = v.decimal || (() => {
                try {
                  if (v.value.startsWith('0x')) return parseInt(v.value, 16).toString();
                  return v.value;
                } catch { return v.value; }
              })();

              return (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border ${
                    v.changed
                      ? isDarkMode
                        ? 'bg-green-500/10 border-green-500/30'
                        : 'bg-green-50 border-green-200'
                      : isDarkMode
                        ? 'bg-slate-800/50 border-slate-700'
                        : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono font-medium ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                      {v.name}
                    </span>
                    {v.changed && v.previousValue && (
                      <span className="text-xs text-green-400">
                        {v.previousValue} → {v.value}
                      </span>
                    )}
                  </div>

                  {/* 二进制视图 */}
                  <div className="font-mono text-xs mb-2">
                    <span className={`${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>二进制: </span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>
                      {binary}
                    </span>
                  </div>

                  {/* 十六进制和十进制 */}
                  <div className="flex gap-4 text-xs">
                    <div>
                      <span className={`${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>十六进制: </span>
                      <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>{hex}</span>
                    </div>
                    <div>
                      <span className={`${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>十进制: </span>
                      <span className={isDarkMode ? 'text-orange-400' : 'text-orange-600'}>{decimal}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 导航按钮 */}
        <div className="flex justify-between pt-2">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              currentStep === 0
                ? 'opacity-50 cursor-not-allowed'
                : isDarkMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            ← 上一步
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(totalSteps - 1, currentStep + 1))}
            disabled={currentStep === totalSteps - 1}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              currentStep === totalSteps - 1
                ? 'opacity-50 cursor-not-allowed'
                : 'bg-purple-500 text-white hover:bg-purple-600'
            }`}
          >
            下一步 →
          </button>
        </div>
      </div>
    </div>
  );
});

// generateStepsFromCode 函数已移动到：src/utils/generateStepsFromCode.ts
