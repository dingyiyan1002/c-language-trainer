import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, FastForward, Rewind, Settings } from 'lucide-react';

interface AnimationStep {
  description: string;
  code?: string;
  memoryBefore?: Record<string, any>;
  memoryAfter?: Record<string, any>;
  highlights?: number[];
  arrows?: { from: string; to: string; label?: string }[];
  output?: string;
  note?: string;
}

interface EnhancedVisualizationProps {
  title: string;
  steps: AnimationStep[];
  isDarkMode: boolean;
  type: 'memory' | 'pointer' | 'array' | 'flow' | 'execution';
}

export const EnhancedVisualization: React.FC<EnhancedVisualizationProps> = ({
  title,
  steps,
  isDarkMode,
  type
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1500);
  const [showSettings, setShowSettings] = useState(false);
  const [animatingVars, setAnimatingVars] = useState<Set<string>>(new Set());

  const step = steps[currentStep];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(timer);
  }, [isPlaying, speed, steps.length]);

  useEffect(() => {
    if (step?.memoryAfter) {
      const changed = new Set<string>();
      const memAfter = step.memoryAfter;
      const memBefore = step.memoryBefore || {};
      Object.keys(memAfter).forEach(key => {
        if (memBefore[key] !== memAfter[key]) {
          changed.add(key);
        }
      });
      setAnimatingVars(changed);
      const timer = setTimeout(() => setAnimatingVars(new Set()), 500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, step]);

  const goToStep = useCallback((index: number) => {
    setCurrentStep(Math.max(0, Math.min(steps.length - 1, index)));
  }, [steps.length]);

  const renderMemoryView = () => {
    const memory = step?.memoryAfter || {};
    
    return (
      <div className="memory-grid">
        {Object.entries(memory).map(([name, value]) => {
          const isChanged = animatingVars.has(name);
          return (
            <div 
              key={name}
              className={`memory-cell ${isChanged ? 'changed' : ''} ${isDarkMode ? 'dark' : 'light'}`}
            >
              <div className="cell-name">{name}</div>
              <div className="cell-value">
                {typeof value === 'object' ? JSON.stringify(value) : String(value)}
              </div>
              {isChanged && <div className="change-indicator" />}
            </div>
          );
        })}
      </div>
    );
  };

  const renderArrayView = () => {
    const array = step?.memoryAfter?.array || [];
    const pointers = step?.memoryAfter?.pointers || {};
    
    return (
      <div className="array-container">
        <div className="array-grid">
          {array.map((val: any, idx: number) => {
            const isHighlighted = step?.highlights?.includes(idx);
            const pointerHere = Object.entries(pointers).find(([_, p]) => p === idx);
            
            return (
              <div key={idx} className="array-cell-wrapper">
                {pointerHere && (
                  <div className={`pointer-label ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    ↑ {pointerHere[0]}
                  </div>
                )}
                <div 
                  className={`array-cell ${isHighlighted ? 'highlighted' : ''} ${isDarkMode ? 'dark' : 'light'}`}
                >
                  <div className="cell-index">[{idx}]</div>
                  <div className="cell-value">{val}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderFlowView = () => {
    const flowSteps = step?.memoryAfter?.flow || [];
    
    return (
      <div className="flow-container">
        {flowSteps.map((fs: any, idx: number) => (
          <React.Fragment key={idx}>
            <div className={`flow-node ${fs.active ? 'active' : ''} ${isDarkMode ? 'dark' : 'light'}`}>
              <div className="node-label">{fs.label}</div>
              {fs.value && <div className="node-value">{fs.value}</div>}
            </div>
            {idx < flowSteps.length - 1 && (
              <div className="flow-arrow">
                <svg viewBox="0 0 60 20" className="arrow-svg">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill={isDarkMode ? '#64748b' : '#94a3b8'} />
                    </marker>
                  </defs>
                  <line x1="0" y1="10" x2="50" y2="10" stroke={isDarkMode ? '#64748b' : '#94a3b8'} strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderExecutionView = () => (
    <div className="execution-container">
      {step?.code && (
        <div className={`code-line ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} p-3 rounded font-mono text-sm`}>
          <span className="text-green-500">→</span> {step.code}
        </div>
      )}
      {step?.output && (
        <div className={`output-line ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'} p-2 rounded mt-2 font-mono text-xs`}>
          输出: {step.output}
        </div>
      )}
    </div>
  );

  return (
    <div className={`enhanced-viz ${isDarkMode ? 'dark' : 'light'}`}>
      <style>{`
        /* ===== 全局动画变量 ===== */
        .enhanced-viz {
          --transition-curve: cubic-bezier(0.34, 1.56, 0.64, 1);
          --transition-fast: 300ms var(--transition-curve);
          --transition-normal: 400ms var(--transition-curve);
          --transition-slow: 500ms var(--transition-curve);
        }

        .enhanced-viz {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          border-radius: 12px;
          overflow: hidden;
        }

        .enhanced-viz.dark {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
          border: 1px solid rgba(100, 116, 139, 0.3);
        }

        .enhanced-viz.light {
          background: linear-gradient(135deg, rgba(248, 250, 252, 1), rgba(241, 245, 249, 1));
          border: 1px solid rgba(203, 213, 225, 0.8);
        }

        .viz-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid ${isDarkMode ? 'rgba(100, 116, 139, 0.2)' : 'rgba(203, 213, 225, 0.5)'};
          transition: border-color var(--transition-fast);
        }

        .viz-title {
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color var(--transition-fast);
        }

        .dark .viz-title { color: #60a5fa; }
        .light .viz-title { color: #2563eb; }

        .viz-controls {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .control-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .dark .control-btn {
          background: rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
        }

        .light .control-btn {
          background: rgba(0, 0, 0, 0.05);
          color: #475569;
        }

        .control-btn:hover:not(:disabled) {
          transform: scale(1.1);
        }

        .control-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
          transform: scale(1);
        }

        .control-btn.primary {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }

        .control-btn.primary:hover:not(:disabled) {
          box-shadow: 0 0 16px rgba(59, 130, 246, 0.5);
          transform: scale(1.12);
        }

        .step-display {
          padding: 16px;
        }

        .step-description {
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 13px;
          line-height: 1.6;
          margin-bottom: 16px;
          transition: all var(--transition-normal);
          animation: slideIn 0.4s var(--transition-curve);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dark .step-description {
          background: rgba(59, 130, 246, 0.1);
          border-left: 3px solid #3b82f6;
          color: #e2e8f0;
        }

        .light .step-description {
          background: rgba(59, 130, 246, 0.05);
          border-left: 3px solid #3b82f6;
          color: #334155;
        }

        .memory-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .memory-cell {
          padding: 12px 16px;
          border-radius: 8px;
          text-align: center;
          min-width: 80px;
          transition: all var(--transition-normal);
          position: relative;
          animation: cellEnter var(--transition-normal) var(--transition-curve) both;
        }

        @keyframes cellEnter {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .dark .memory-cell {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .light .memory-cell {
          background: white;
          border: 2px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .memory-cell.changed {
          animation: pulse var(--transition-slow) var(--transition-curve);
        }

        .dark .memory-cell.changed {
          border-color: #10b981;
          box-shadow: 0 0 24px rgba(16, 185, 129, 0.4);
        }

        .light .memory-cell.changed {
          border-color: #10b981;
          box-shadow: 0 0 24px rgba(16, 185, 129, 0.3);
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(16, 185, 129, 0);
          }
          30% {
            transform: scale(1.08);
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
          }
          60% {
            transform: scale(0.98);
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        .cell-name {
          font-size: 11px;
          color: ${isDarkMode ? '#94a3b8' : '#64748b'};
          margin-bottom: 4px;
          transition: color var(--transition-fast);
        }

        .cell-value {
          font-size: 16px;
          font-weight: 600;
          color: ${isDarkMode ? '#e2e8f0' : '#1e293b'};
          transition: all var(--transition-normal);
        }

        .memory-cell.changed .cell-value {
          color: #10b981;
        }

        .change-indicator {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: blink 1s var(--transition-curve) infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }

        .array-grid {
          display: flex;
          gap: 4px;
          justify-content: center;
        }

        .array-cell-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: arrayCellEnter var(--transition-normal) var(--transition-curve) both;
        }

        @keyframes arrayCellEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pointer-label {
          font-size: 10px;
          font-weight: 600;
          margin-bottom: 2px;
          transition: all var(--transition-fast);
          animation: pointerDrop 0.3s var(--transition-curve);
        }

        @keyframes pointerDrop {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .array-cell {
          width: 50px;
          padding: 8px;
          border-radius: 6px;
          text-align: center;
          transition: all var(--transition-normal);
        }

        .dark .array-cell {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .light .array-cell {
          background: white;
          border: 2px solid rgba(0, 0, 0, 0.08);
        }

        .array-cell.highlighted {
          border-color: #3b82f6;
          box-shadow: 0 0 16px rgba(59, 130, 246, 0.5);
          transform: scale(1.08);
          background: rgba(59, 130, 246, 0.15);
        }

        .cell-index {
          font-size: 9px;
          color: ${isDarkMode ? '#64748b' : '#94a3b8'};
          transition: color var(--transition-fast);
        }

        .flow-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 20px;
        }

        .flow-node {
          padding: 12px 20px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          transition: all var(--transition-normal);
          animation: flowNodeEnter var(--transition-slow) var(--transition-curve) both;
        }

        @keyframes flowNodeEnter {
          from {
            opacity: 0;
            transform: translateX(-20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .dark .flow-node {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
        }

        .light .flow-node {
          background: white;
          border: 2px solid rgba(0, 0, 0, 0.08);
          color: #64748b;
        }

        .flow-node.active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-color: transparent;
          color: white;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.5);
          transform: scale(1.08);
        }

        .flow-arrow {
          width: 40px;
          transition: all var(--transition-normal);
          animation: arrowPulse 2s var(--transition-curve) infinite;
        }

        @keyframes arrowPulse {
          0%, 100% { opacity: 0.6; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(4px); }
        }

        .arrow-svg {
          width: 100%;
          height: 20px;
        }

        .progress-bar {
          height: 4px;
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
          border-radius: 2px;
          margin: 12px 16px;
          overflow: hidden;
          transition: background var(--transition-fast);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
          transition: width var(--transition-normal) var(--transition-curve);
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: progressShine 1.5s var(--transition-curve) infinite;
        }

        @keyframes progressShine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }

        .step-dots {
          display: flex;
          justify-content: center;
          gap: 6px;
          padding: 8px;
        }

        .step-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          cursor: pointer;
          transition: all var(--transition-fast);
          animation: dotEnter var(--transition-normal) var(--transition-curve) both;
        }

        @keyframes dotEnter {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .dark .step-dot {
          background: rgba(255, 255, 255, 0.2);
        }

        .light .step-dot {
          background: rgba(0, 0, 0, 0.1);
        }

        .step-dot.active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          transform: scale(1.4);
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
        }

        .step-dot:hover {
          transform: scale(1.3);
        }

        .note {
          padding: 8px 16px;
          font-size: 12px;
          font-style: italic;
          color: ${isDarkMode ? '#64748b' : '#94a3b8'};
          transition: all var(--transition-fast);
          animation: noteFade var(--transition-normal) var(--transition-curve);
        }

        @keyframes noteFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .speed-control {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'};
          border-radius: 8px;
          margin: 8px 16px;
          transition: all var(--transition-fast);
        }

        .speed-label {
          font-size: 11px;
          color: ${isDarkMode ? '#94a3b8' : '#64748b'};
          transition: color var(--transition-fast);
        }

        .speed-slider {
          flex: 1;
          height: 4px;
          -webkit-appearance: none;
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          border-radius: 2px;
          outline: none;
          transition: all var(--transition-fast);
        }

        .speed-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .speed-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.5);
        }

        /* ===== 交错动画延迟 ===== */
        .memory-cell:nth-child(1) { animation-delay: 0ms; }
        .memory-cell:nth-child(2) { animation-delay: 50ms; }
        .memory-cell:nth-child(3) { animation-delay: 100ms; }
        .memory-cell:nth-child(4) { animation-delay: 150ms; }
        .memory-cell:nth-child(5) { animation-delay: 200ms; }
        .memory-cell:nth-child(6) { animation-delay: 250ms; }
        .memory-cell:nth-child(7) { animation-delay: 300ms; }
        .memory-cell:nth-child(8) { animation-delay: 350ms; }

        .array-cell-wrapper:nth-child(1) { animation-delay: 0ms; }
        .array-cell-wrapper:nth-child(2) { animation-delay: 40ms; }
        .array-cell-wrapper:nth-child(3) { animation-delay: 80ms; }
        .array-cell-wrapper:nth-child(4) { animation-delay: 120ms; }
        .array-cell-wrapper:nth-child(5) { animation-delay: 160ms; }
        .array-cell-wrapper:nth-child(6) { animation-delay: 200ms; }
        .array-cell-wrapper:nth-child(7) { animation-delay: 240ms; }
        .array-cell-wrapper:nth-child(8) { animation-delay: 280ms; }
        .array-cell-wrapper:nth-child(9) { animation-delay: 320ms; }
        .array-cell-wrapper:nth-child(10) { animation-delay: 360ms; }

        .flow-node:nth-child(1) { animation-delay: 0ms; }
        .flow-node:nth-child(3) { animation-delay: 100ms; }
        .flow-node:nth-child(5) { animation-delay: 200ms; }
        .flow-node:nth-child(7) { animation-delay: 300ms; }
        .flow-node:nth-child(9) { animation-delay: 400ms; }

        .step-dot:nth-child(1) { animation-delay: 0ms; }
        .step-dot:nth-child(2) { animation-delay: 30ms; }
        .step-dot:nth-child(3) { animation-delay: 60ms; }
        .step-dot:nth-child(4) { animation-delay: 90ms; }
        .step-dot:nth-child(5) { animation-delay: 120ms; }
        .step-dot:nth-child(6) { animation-delay: 150ms; }
        .step-dot:nth-child(7) { animation-delay: 180ms; }
        .step-dot:nth-child(8) { animation-delay: 210ms; }
        .step-dot:nth-child(9) { animation-delay: 240ms; }
        .step-dot:nth-child(10) { animation-delay: 270ms; }
      `}</style>
      
      <div className="viz-header">
        <div className="viz-title">
          <span>Target</span>
          {title}
        </div>
        <div className="viz-controls">
          <button className="control-btn" onClick={() => setCurrentStep(0)} title="重置">
            <RotateCcw size={14} />
          </button>
          <button className="control-btn" onClick={() => goToStep(currentStep - 5)} disabled={currentStep === 0} title="快退">
            <Rewind size={14} />
          </button>
          <button className="control-btn" onClick={() => goToStep(currentStep - 1)} disabled={currentStep === 0}>
            <ChevronLeft size={14} />
          </button>
          <button className="control-btn primary" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button className="control-btn" onClick={() => goToStep(currentStep + 1)} disabled={currentStep === steps.length - 1}>
            <ChevronRight size={14} />
          </button>
          <button className="control-btn" onClick={() => goToStep(currentStep + 5)} disabled={currentStep === steps.length - 1} title="快进">
            <FastForward size={14} />
          </button>
          <button className="control-btn" onClick={() => setShowSettings(!showSettings)} title="设置">
            <Settings size={14} />
          </button>
        </div>
      </div>
      
      {showSettings && (
        <div className="speed-control">
          <span className="speed-label">速度</span>
          <input 
            type="range" 
            className="speed-slider"
            min={500} 
            max={3000} 
            value={3500 - speed}
            onChange={(e) => setSpeed(3500 - parseInt(e.target.value))}
          />
          <span className="speed-label">{Math.round(3500 / speed * 10) / 10}x</span>
        </div>
      )}
      
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
      </div>
      
      <div className="step-display">
        <div className="step-description">
          {step?.description}
        </div>
        
        {type === 'memory' && renderMemoryView()}
        {type === 'array' && renderArrayView()}
        {type === 'flow' && renderFlowView()}
        {type === 'execution' && renderExecutionView()}
        
        {step?.note && (
          <div className="note">
            Lightbulb {step.note}
          </div>
        )}
      </div>
      
      <div className="step-dots">
        {steps.map((_, idx) => (
          <div 
            key={idx}
            className={`step-dot ${idx === currentStep ? 'active' : ''}`}
            onClick={() => goToStep(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedVisualization;
