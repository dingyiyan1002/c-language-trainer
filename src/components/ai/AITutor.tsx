import { useEffect, useState, useCallback, memo } from 'react';
import { getAIExplanation, getAIHint, type QuestionContext } from '../services/aiTutorService';
import { MessageSquare, Lightbulb, X, Loader2, RefreshCw, Settings } from 'lucide-react';
import { AIConfigPanel } from '../ai/AIConfigPanel';

interface AITutorProps {
  question: QuestionContext;
  onClose: () => void;
  isDarkMode: boolean;
}

export const AITutor = memo(function AITutor({ question, onClose, isDarkMode }: AITutorProps) {
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [hints, setHints] = useState<string[]>([]);
  const [hintLevel, setHintLevel] = useState(1);
  const [error, setError] = useState('');
  const [showConfig, setShowConfig] = useState(false);

  useEffect(() => {
    if (!explanation && !loading) {
      handleAskAI();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAskAI = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const result = await getAIExplanation(question);
      setExplanation(result.explanation);
      setHints(result.hints || []);
    } catch (err) {
      setError('AI 暂时不可用，请稍后重试。');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [question]);

  const handleGetHint = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const hint = await getAIHint(question, hintLevel);
      setHints((prev) => [...prev, hint]);
      setHintLevel((prev) => Math.min(prev + 1, 3));
    } catch (err) {
      setError('提示获取失败，请重试。');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [question, hintLevel]);

  return (
    <div className={`rounded-xl border p-4 ${isDarkMode ? 'bg-slate-900/60 border-slate-700' : 'bg-white border-slate-200'}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-cyan-500" />
          <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>AI 辅导（DeepSeek）</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowConfig(true)}
            className={`p-1.5 rounded-md transition-colors ${isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
            title="配置 AI 模型"
          >
            <Settings className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-md transition-colors ${isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
            title="收起"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className={`mb-4 text-xs rounded-lg p-3 ${isDarkMode ? 'bg-slate-800/70 text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
        <div className="font-medium mb-1">当前题目上下文</div>
        <div>题目：{question.title}</div>
        <div>类型：{question.type} | 章节：{question.chapter}</div>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={handleAskAI}
          disabled={loading}
          className="px-3 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-500 text-white text-sm font-medium transition-colors flex items-center gap-2"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <MessageSquare className="w-4 h-4" />}
          重新生成解析
        </button>

        <button
          onClick={handleGetHint}
          disabled={loading}
          className="px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:bg-slate-500 text-white text-sm font-medium transition-colors flex items-center gap-2"
        >
          <Lightbulb className="w-4 h-4" />
          再给一个提示
        </button>
      </div>

      {error && (
        <div className={`mb-4 p-3 rounded-lg border ${isDarkMode ? 'bg-red-500/10 border-red-500/30 text-red-300' : 'bg-red-50 border-red-200 text-red-700'}`}>
          {error}
        </div>
      )}

      {explanation && (
        <div className="mb-4">
          <h4 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>解析</h4>
          <div className={`rounded-lg p-3 whitespace-pre-wrap text-sm leading-relaxed ${isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-slate-50 text-slate-700'}`}>
            {explanation}
          </div>
        </div>
      )}

      {hints.length > 0 && (
        <div>
          <h4 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-amber-300' : 'text-amber-700'}`}>提示</h4>
          <div className="space-y-2">
            {hints.map((hint, index) => (
              <div
                key={index}
                className={`rounded-lg p-3 text-sm border ${isDarkMode ? 'bg-amber-500/10 border-amber-500/30 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-700'}`}
              >
                {hint}
              </div>
            ))}
          </div>
        </div>
      )}

      {showConfig && (
        <AIConfigPanel 
          isDarkMode={isDarkMode} 
          onClose={() => setShowConfig(false)} 
        />
      )}
    </div>
  );
});

export default AITutor;