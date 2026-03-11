import { useState, useEffect, useCallback, useRef, Suspense, lazy, memo, useMemo } from 'react';
import {
  chapters, questions, getQuestionsByChapter, getChapterById,
  type Question, type Chapter, type Lesson, type QuestionMode
} from './data/lessons';
import { getAllProjects, type Project } from './data/projects';
import { HighlightedLine } from './components/SyntaxHighlighter';
import { deriveVocabularyFromText, mergeVocabulary } from './data/vocabulary';
import { ReferenceSidebar } from './components/ReferenceSidebar';
import ProjectView from './components/ProjectView';
import { BitSwitchGame } from './components/BitSwitchGame';
import { StructPackerGame } from './components/StructPackerGame';
import { PointerSandbox } from './components/PointerSandbox';
import { StackFrameViz } from './components/StackFrameViz';
import { COWMemoryViz } from './components/COWMemoryViz';
import { CodeAnalyzer } from './components/CodeAnalyzer';
import { DeepUnderstandingPanel } from './components/DeepUnderstandingPanel';
import { generateStepsFromCode } from './utils/generateStepsFromCode';
import { useSoundEffects, useKeyboardShortcuts } from './hooks/useInteractions';
import { useUserStats, StatsPanel, AchievementsPanel, StreakDisplay } from './components/StatsAndAchievements';
import { loadProgress as loadProgressApi, saveProgress as saveProgressApi, type Progress } from './services/progressApi';

// 样式常量 - 性能优化
const textStyles = {
  muted: (isDarkMode: boolean) => isDarkMode ? 'text-slate-400' : 'text-slate-600',
  primary: (isDarkMode: boolean) => isDarkMode ? 'text-white' : 'text-slate-800',
};

// 懒加载大组件 - 性能优化
const CodeRunner = lazy(() => import('./components/CodeRunner'));
const CodeTypingPractice = lazy(() => import('./components/CodeTypingPractice'));
const EnhancedMemoryViz = lazy(() => import('./components/EnhancedMemoryViz'));
import {
  BookOpen,
  Trophy,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  XCircle,
  Lightbulb,
  Sparkles,
  Terminal,
  RotateCcw,
  Home,
  Target,
  Flame,
  Award,
  Zap,
  Code2,
  Bug,
  Play,
  GraduationCap,
  Brain,
  AlertTriangle,
  Shuffle, Undo2,
  Sun, Moon,
  FolderOpen,
  Layers,
  Bookmark,
  BookmarkCheck,
  Keyboard,
  BookMarked,
  Clapperboard,
  Beaker,
  Cpu,
  Microscope,
  GitBranch,
  Binary,
  CircleHelp,
  CircleArrowRight,
  CircleDot,
  Boxes,
  Timer,
  Upload,
  Wrench,
  RefreshCcw,
  ScanLine,
  Lock,
  FastForward,
  Repeat2,
  Ruler,
  Split,
  Divide,
  MoveRight,
  Plus,
  Minus,
  Pin,
  TableProperties,
  Type,
  Package,
  SquareFunction,
  Eye,
  HardDrive,
  Network,
  Hash,
  Thermometer,
  CircuitBoard,
  Link,
  Smartphone,
  Phone,
  Eraser,
  FileText,
  HelpCircle,
  ArrowLeft,
  Globe,
  Construction,
  Save,
  Hammer,
  Circle,
  Heart,
  Pointer,
  Tv,
  Star,
  X,
  Check
} from 'lucide-react';

// 图标名称到组件的映射
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Target,
  Trophy,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  XCircle,
  Lightbulb,
  Sparkles,
  Terminal,
  RotateCcw,
  Home,
  Flame,
  Award,
  Zap,
  Code2,
  Bug,
  Play,
  GraduationCap,
  Brain,
  AlertTriangle,
  Shuffle,
  Undo2,
  Sun,
  Moon,
  FolderOpen,
  Layers,
  Bookmark,
  BookmarkCheck,
  Keyboard,
  BookMarked,
  Clapperboard,
  Beaker,
  Cpu,
  Microscope,
  GitBranch,
  Binary,
  CircleHelp,
  CircleArrowRight,
  CircleDot,
  Boxes,
  Timer,
  Upload,
  Wrench,
  RefreshCcw,
  ScanLine,
  Lock,
  FastForward,
  Repeat2,
  Ruler,
  Split,
  Divide,
  MoveRight,
  Plus,
  Minus,
  Pin,
  TableProperties,
  Type,
  Package,
  SquareFunction,
  Eye,
  HardDrive,
  Network,
  Hash,
  Thermometer,
  CircuitBoard,
  Link,
  Smartphone,
  Phone,
  Eraser,
  FileText,
  HelpCircle,
  ArrowLeft,
  Globe,
  Construction,
  Save,
  Hammer,
  Circle,
  Heart,
  Pointer,
  Tv,
  Star,
  X,
  Check
};

const CodeBlock = memo(function CodeBlock({
  code,
  highlightLine,
}: {
  code: string;
  highlightLine?: number;
}) {
  const [copied, setCopied] = useState(false);

  const parsed = useMemo(() => {
    const rawLines = code.split("\n");
    return rawLines.map((raw, idx) => {
      const m = raw.match(/^(\d+)\s*\|\s(.*)$/);
      if (m) {
        return {
          num: parseInt(m[1]!, 10),
          text: m[2] ?? "",
        };
      }
      return { num: idx + 1, text: raw };
    });
  }, [code]);

  const copyText = useMemo(() => parsed.map((l) => l.text).join("\n"), [parsed]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 900);
    } catch {
      // ignore
    }
  }, [copyText]);

  return (
    <div className="code-block relative">
      <button
        type="button"
        onClick={handleCopy}
        className="code-copy-btn"
        title="复制代码"
      >
        {copied ? "已复制" : "复制"}
      </button>

      <div className="code-grid" role="region" aria-label="代码区">
        {parsed.map((ln, idx) => {
          const isHL = highlightLine != null && ln.num === highlightLine;
          return (
            <div key={idx} className={`code-row ${isHL ? "code-row-highlight" : ""}`}>
              <div className={`code-linenum ${isHL ? "code-linenum-highlight" : ""}`}>
                {ln.num}
              </div>
              <div className="code-content">
                <code className="code-code">
                  <HighlightedLine line={ln.text} />
                </code>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

// Header Component
const Header = memo(function Header({
  view,
  setView,
  progress,
  isDarkMode,
  toggleTheme,
  backendAlive
}: {
  view: string;
  setView: (v: string) => void;
  progress: Progress;
  isDarkMode: boolean;
  toggleTheme: () => void;
  backendAlive: boolean;
}) {
  const accuracy = progress.completed.length > 0
    ? Math.round((progress.correct.length / progress.completed.length) * 100)
    : 0;

  return (
    <header className={`sticky top-0 z-50 border-b ${isDarkMode ? 'bg-slate-900/80 border-white/5' : 'bg-white/80 border-slate-200'}`}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setView('home')}
          className="flex items-center gap-2 group"
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-emerald-500 to-cyan-600 shadow-emerald-500/20' : 'bg-gradient-to-br from-emerald-500 to-cyan-600 shadow-emerald-500/20'}`}>
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div className="hidden sm:block">
            <h1 className={`text-lg font-bold ${isDarkMode ? 'text-white group-hover:text-emerald-400' : 'text-slate-800 group-hover:text-emerald-600'} transition-colors`}>
              C语言思维训练器
            </h1>
            <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>硬核代码训练</p>
          </div>
          <div className="ml-2 flex items-center gap-1.5" title={backendAlive ? 'GCC 后端已连接' : 'GCC 后端未连接'}>
            <div className={`w-2 h-2 rounded-full ${backendAlive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
            <span className={`text-xs ${backendAlive ? 'text-green-500' : 'text-red-500'}`}>
              {backendAlive ? 'GCC' : '离线'}
            </span>
          </div>
        </button>

        <nav className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'}`}
            title={isDarkMode ? '切换到浅色模式' : '切换到深色模式'}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setView('home')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              view === 'home'
                ? 'bg-emerald-500/20 text-emerald-400'
                : `${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'}`
            }`}
          >
            <Home className="w-4 h-4 sm:hidden" />
            <span className="hidden sm:inline">首页</span>
          </button>
          <button
            onClick={() => setView('projects')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              view === 'projects' || view === 'project'
                ? 'bg-emerald-500/20 text-emerald-400'
                : `${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'}`
            }`}
          >
            <FolderOpen className="w-4 h-4" />
            <span className="hidden sm:inline">项目</span>
          </button>
          <button
            onClick={() => setView('stats')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              view === 'stats'
                ? 'bg-emerald-500/20 text-emerald-400'
                : `${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'}`
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span className="hidden sm:inline">统计</span>
            {progress.completed.length > 0 && (
              <span className="badge badge-success">{accuracy}%</span>
            )}
          </button>
          <button
            onClick={() => setView('lab')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              view === 'lab'
                ? 'bg-purple-500/20 text-purple-400'
                : `${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'}`
            }`}
          >
            <Zap className="w-4 h-4" />
            <span className="hidden sm:inline">实验室</span>
          </button>
          <button
            onClick={() => setView('typing')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              view === 'typing'
                ? 'bg-cyan-500/20 text-cyan-400'
                : `${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'}`
            }`}
          >
            <Keyboard className="w-4 h-4" />
            <span className="hidden sm:inline">跟打练习</span>
          </button>
        </nav>
      </div>
    </header>
  );
});



// Lesson View Component
const LessonView = memo(function LessonView({
  lesson,
  onComplete,
  isDarkMode,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  onStartPractice
}: {
  lesson: Lesson;
  onComplete: () => void;
  isDarkMode: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  onStartPractice?: () => void;
}) {
  const renderContent = (content: string) => {
    const parts = content.split(/(```c[\s\S]*?```|\*\*.*?\*\*)/g);

    return parts.map((part, idx) => {
      if (part.startsWith('```c')) {
        const code = part.replace(/```c\n?/, '').replace(/```$/, '');
        return <CodeBlock key={idx} code={code.trim()} />;
      } else if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="text-emerald-400">{part.slice(2, -2)}</strong>;
      } else {
        return <span key={idx} className="whitespace-pre-wrap">{part}</span>;
      }
    });
  };

  return (
    <div className="animate-fadeIn">
      <div className={`glass rounded-2xl p-6 sm:p-8 ${isDarkMode ? '' : 'bg-white/60 border-slate-200'}`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>知识讲解</p>
            <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{lesson.title}</h2>
          </div>
        </div>

        <div className={`prose prose-invert max-w-none leading-relaxed mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          {renderContent(lesson.content)}
        </div>

        <div className={`bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 mb-6 ${isDarkMode ? '' : 'bg-emerald-50'}`}>
          <h3 className="text-emerald-400 font-medium mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            关键要点
          </h3>
          <ul className="space-y-2">
            {lesson.keyPoints.map((point, idx) => (
              <li key={idx} className={`flex items-start gap-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onStartPractice || onComplete}
            className="flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:scale-[1.02]"
          >
            <Play className="w-5 h-5" />
            开始练习
          </button>
        </div>

        {/* 上一页/下一页导航 */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={`flex-1 py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-1 text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all ${isDarkMode ? 'glass text-slate-300 hover:bg-slate-800' : 'bg-white/60 border border-slate-200 text-slate-600 hover:bg-white/80'}`}
          >
            <ChevronLeft className="w-4 h-4" />
            上一页
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className={`flex-1 py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-1 text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all ${isDarkMode ? 'glass text-slate-300 hover:bg-slate-800' : 'bg-white/60 border border-slate-200 text-slate-600 hover:bg-white/80'}`}
          >
            下一页
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
});

// Order Type Question Component
const OrderQuestion = memo(function OrderQuestion({
  question,
  onAnswer,
  showResult,
  isCorrect,
  isDarkMode
}: {
  question: Question;
  onAnswer: (answers: string[], correct: boolean) => void;
  showResult: boolean;
  isCorrect: boolean;
  isDarkMode: boolean;
}) {
  const [selectedOrder, setSelectedOrder] = useState<number[]>([]);
  const lines = question.codeLines || [];
  const correctOrder = question.correctOrder || [];

  useEffect(() => {
    setSelectedOrder([]);
  }, [question.id]);

  const handleSelect = (idx: number) => {
    if (showResult) return;
    if (selectedOrder.includes(idx)) return;
    setSelectedOrder([...selectedOrder, idx]);
  };

  const handleUndo = () => {
    if (showResult) return;
    setSelectedOrder(selectedOrder.slice(0, -1));
  };

  const handleReset = () => {
    if (showResult) return;
    setSelectedOrder([]);
  };

  const handleSubmit = () => {
    if (showResult) return;
    const correct = JSON.stringify(selectedOrder) === JSON.stringify(correctOrder);
    onAnswer(selectedOrder.map(String), correct);
  };

  const availableLines = lines.map((_, i) => i).filter(i => !selectedOrder.includes(i));

  return (
    <div className="space-y-4">
      {/* Selected lines (built program) */}
      <div className="order-result-area">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-slate-400 flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            你组装的程序 ({selectedOrder.length}/{lines.length})
          </span>
          <div className="flex gap-2">
            <button
              onClick={handleUndo}
              disabled={selectedOrder.length === 0 || showResult}
              className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-400 hover:text-white disabled:opacity-30 transition-all flex items-center gap-1"
            >
              <Undo2 className="w-3 h-3" /> 撤销
            </button>
            <button
              onClick={handleReset}
              disabled={selectedOrder.length === 0 || showResult}
              className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-400 hover:text-white disabled:opacity-30 transition-all flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> 重置
            </button>
          </div>
        </div>
        <div className="code-block min-h-[120px]">
          <pre>
            {selectedOrder.length === 0 ? (
              <code className="text-slate-600 italic"><Pointer className="w-4 h-4 inline mr-1" /> 点击下方代码行，按正确顺序组装程序</code>
            ) : (
              selectedOrder.map((lineIdx, i) => {
                const isWrong = showResult && correctOrder[i] !== lineIdx;
                const isRight = showResult && correctOrder[i] === lineIdx;
                return (
                  <div key={i} className={`flex items-center gap-2 ${isWrong ? 'bg-red-500/10 -mx-4 px-4 rounded' : ''} ${isRight ? 'bg-emerald-500/10 -mx-4 px-4 rounded' : ''}`}>
                    <span className={`text-xs font-mono w-5 ${isRight ? 'text-emerald-400' : isWrong ? 'text-red-400' : 'text-slate-600'}`}>{i + 1}</span>
                    <code className={`${isWrong ? 'text-red-300' : isRight ? 'text-emerald-300' : ''}`}>{lines[lineIdx]}</code>
                    {isRight && <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />}
                    {isWrong && <XCircle className="w-3 h-3 text-red-400 flex-shrink-0" />}
                  </div>
                );
              })
            )}
          </pre>
        </div>
      </div>

      {/* Available lines */}
      {!showResult && (
        <div>
          <span className="text-sm text-slate-500 mb-2 block flex items-center gap-2">
            <Shuffle className="w-4 h-4" />
            可选代码行（点击选择）
          </span>
          <div className="space-y-2">
            {availableLines.map(idx => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className="order-line-btn"
              >
                <code className="font-mono text-sm">{lines[idx]}</code>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Show correct answer if wrong */}
      {showResult && !isCorrect && (
        <div className="mt-4">
          <span className="text-sm text-emerald-400 mb-2 block flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            正确顺序：
          </span>
          <div className="code-block">
            <pre>
              {correctOrder.map((lineIdx, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs font-mono text-emerald-400/50 w-5">{i + 1}</span>
                  <code className="text-emerald-300">{lines[lineIdx]}</code>
                </div>
              ))}
            </pre>
          </div>
        </div>
      )}

      {/* Show program execution result if correct */}
      {showResult && isCorrect && question.correctOutput && (
        <div className="mt-4">
          <span className="text-sm text-emerald-400 mb-2 block flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            程序运行结果：
          </span>
          <div className={`rounded-lg p-4 font-mono text-sm border ${isDarkMode ? 'bg-slate-800 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
            <div className="flex items-center gap-2 mb-2 text-xs text-slate-500">
              <span>$ gcc program.c -o program</span>
            </div>
            <div className="flex items-center gap-2 mb-2 text-xs text-slate-500">
              <span>$ ./program</span>
            </div>
            <div className="text-lg font-semibold">{question.correctOutput}</div>
          </div>
        </div>
      )}

      {/* Submit */}
      {!showResult && (
        <button
          onClick={handleSubmit}
          disabled={selectedOrder.length !== lines.length}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <CheckCircle className="w-5 h-5" />
          提交排列
        </button>
      )}
    </div>
  );
});

// Question Component
const QuestionView = memo(function QuestionView({
  question,
  onAnswer,
  showResult,
  isCorrect,
  userAnswers,
  isDarkMode,
  isBookmarked,
  onToggleBookmark,
  onNext,
  onPrev
}: {
  question: Question;
  onAnswer: (answers: string[], correct: boolean) => void;
  showResult: boolean;
  isCorrect: boolean;
  userAnswers: string[];
  isDarkMode: boolean;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}) {
  const [inputs, setInputs] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement | null)[]>([]);
  const soundPlayedRef = useRef(false);
  
  const { playCorrect, playWrong, playClick } = useSoundEffects();
  const { stats, recordAnswer } = useUserStats();

  useEffect(() => {
    if (question.type === 'fill' || question.type === 'multi-fill') {
      setInputs(new Array(question.blanks?.length || 0).fill(''));
    } else if (question.type === 'output') {
      setInputs(['']);
    } else if (question.type === 'debug') {
      setInputs(['']);
    } else if (question.type === 'choice' || question.type === 'multi-choice') {
      setInputs(['']);
    }
    setShowHint(false);
    soundPlayedRef.current = false;
  }, [question]);

  useEffect(() => {
    if (showResult) {
      setInputs(userAnswers);
    }
  }, [showResult, userAnswers, question.type]);

  useEffect(() => {
    if (showResult && !soundPlayedRef.current) {
      soundPlayedRef.current = true;
      if (isCorrect) {
        playCorrect();
        recordAnswer(true, question.chapter);
      } else {
        playWrong();
        recordAnswer(false, question.chapter);
      }
    }
  }, [showResult, isCorrect, playCorrect, playWrong, recordAnswer, question.chapter]);

  useKeyboardShortcuts({
    onSubmit: () => {
      if (!showResult) {
        handleSubmit();
      }
    },
    onNext: () => {
      if (showResult && onNext) {
        playClick();
        onNext();
      }
    },
    onPrev: () => {
      if (onPrev) {
        playClick();
        onPrev();
      }
    },
    onHint: () => {
      if (!showResult) {
        setShowHint(h => !h);
      }
    }
  });

  const handleSubmit = useCallback(() => {
    if (showResult) return;

    let correct = false;

    // 规范化用户输入：将中文符号转换为英文符号
    const normalizeInput = (input: string) => {
      return input
        .replace(/≠/g, '!=')   // 不等于符号
        .replace(/≤/g, '<=')   // 小于等于
        .replace(/≥/g, '>=')   // 大于等于
        .replace(/×/g, '*')    // 乘号
        .replace(/÷/g, '/')    // 除号
        .replace(/，/g, ',')   // 中文逗号
        .replace(/。/g, '.')   // 中文句号
        .replace(/；/g, ';')   // 中文分号
        .replace(/（/g, '(')   // 中文左括号
        .replace(/）/g, ')')   // 中文右括号
        .replace(/【/g, '[')   // 中文左方括号
        .replace(/】/g, ']')   // 中文右方括号
        .replace(/｛/g, '{')   // 中文左花括号
        .replace(/｝/g, '}');  // 中文右花括号
    };

    if (question.type === 'fill' || question.type === 'multi-fill') {
      correct = inputs.every((input, idx) => {
        const blank = question.blanks?.[idx];
        if (!blank) return false;
        const answers = Array.isArray(blank.answer) ? blank.answer : [blank.answer];
        const userInput = normalizeInput(input.trim());
        return answers.some(ans => 
          blank.caseSensitive === false 
            ? ans.toLowerCase() === userInput.toLowerCase()
            : ans === userInput
        );
      });
    } else if (question.type === 'output') {
      const userOutput = inputs[0].trim();
      const expected = question.correctOutput?.trim() || '';
      const normalizeOutput = (s: string) => {
        return s
          .replace(/\r\n/g, '\n')
          .replace(/\s+$/gm, '')
          .replace(/\n+/g, '\n')
          .trim();
      };
      correct = normalizeOutput(userOutput) === normalizeOutput(expected);
    } else if (question.type === 'debug') {
      const userLine = parseInt(inputs[0]);
      correct = userLine === question.bugLine;
    } else if (question.type === 'choice' || question.type === 'multi-choice') {
      const userAnswer = inputs[0].trim().toUpperCase();
      const correctAnswer = Array.isArray(question.correctAnswer) 
        ? question.correctAnswer.map(a => a.toUpperCase())
        : question.correctAnswer?.toUpperCase();
      
      if (question.multiCorrect) {
        const userAnswers = userAnswer.split(',').map(s => s.trim()).sort();
        const correctAnswers = (Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer]).sort();
        correct = userAnswers.length === correctAnswers.length && 
                  userAnswers.every((a, i) => a === correctAnswers[i]);
      } else {
        correct = userAnswer === correctAnswer;
      }
    }

    onAnswer(inputs, correct);
  }, [showResult, inputs, question, onAnswer]);

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    // Tab键：在输出预测题中允许输入\t，其他题切换到下一个输入框
    if (e.key === 'Tab') {
      if (question.type === 'output') {
        // 输出预测题：插入Tab字符而不是切换焦点
        e.preventDefault();
        const input = e.target as HTMLInputElement;
        const start = input.selectionStart || 0;
        const end = input.selectionEnd || 0;
        const newValue = inputs[idx].substring(0, start) + '\t' + inputs[idx].substring(end);
        const newInputs = [...inputs];
        newInputs[idx] = newValue;
        setInputs(newInputs);
        // 设置光标位置在插入的Tab之后
        setTimeout(() => {
          input.selectionStart = input.selectionEnd = start + 1;
        }, 0);
      } else {
        // 其他题型：Tab切换到下一个输入框
        e.preventDefault();
        if (idx < inputs.length - 1) {
          inputRefs.current[idx + 1]?.focus();
        }
      }
      return;
    }
    
    // Enter键：提交或切换到下一个
    if (e.key === 'Enter' && !e.shiftKey) {
      if (question.type !== 'output') {
        e.preventDefault();
        if (idx < inputs.length - 1) {
          inputRefs.current[idx + 1]?.focus();
        } else {
          handleSubmit();
        }
      }
    }
  };

  const getGenericHint = (type: string): string => {
    const hints: Record<string, string> = {
      fill: '仔细阅读代码，思考空白处应该填入什么关键字或语法。注意C语言的语法规则和命名规范。',
      'multi-fill': '逐个分析每个空白处，注意变量类型、关键字拼写和语法结构。',
      output: '像编译器一样执行代码：跟踪每个变量的值变化，注意printf的格式符和输出顺序。',
      debug: '检查常见错误：缺少分号、括号不匹配、变量未初始化、类型不匹配、数组越界等。',
      order: '思考程序的执行顺序：头文件 → 宏定义 → 全局变量 → main函数 → 函数定义。'
    };
    return hints[type] || '仔细阅读题目，理解代码逻辑后再作答。';
  };

  const renderTypeIcon = () => {
    switch (question.type) {
      case 'fill': 
      case 'multi-fill':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'output':
        return <Terminal className="w-5 h-5 text-green-400" />;
      case 'debug':
        return <Bug className="w-5 h-5 text-red-400" />;
      case 'order':
        return <Shuffle className="w-5 h-5 text-amber-400" />;
      case 'choice':
      case 'multi-choice':
        return <CheckCircle className="w-5 h-5 text-cyan-400" />;
      default:
        return <Brain className="w-5 h-5 text-purple-400" />;
    }
  };

  const renderTypeBadge = () => {
    const badges: Record<string, { label: string; color: string }> = {
      fill: { label: '代码填空', color: 'badge-info' },
      'multi-fill': { label: '代码填空', color: 'badge-info' },
      output: { label: '输出预测', color: 'badge-success' },
      debug: { label: 'Debug找错', color: 'badge-error' },
      order: { label: '代码排序', color: 'badge-warning' },
      choice: { label: '选择题', color: 'badge-info' },
      'multi-choice': { label: '多选题', color: 'badge-warning' }
    };
    const badge = badges[question.type] || { label: '练习', color: 'badge-info' };
    return <span className={`badge ${badge.color}`}>{badge.label}</span>;
  };

  const renderQuestion = () => {
    // Choice type - render as multiple choice with clickable options
    if (question.type === 'choice' || question.type === 'multi-choice') {
      return (
        <div className="space-y-4">
          {question.code && (
            <div className="code-block mb-4">
              <pre className="whitespace-pre-wrap text-sm">{question.code}</pre>
            </div>
          )}
          <div className="space-y-3">
            {question.options?.map((option) => {
              const isSelected = inputs[0]?.toUpperCase() === option.id.toUpperCase();
              const showCorrect = showResult && (question.type === 'choice' 
                ? option.id.toUpperCase() === (question.correctAnswer as string)?.toUpperCase()
                : (question.correctAnswer as string[])?.map(a => a.toUpperCase()).includes(option.id.toUpperCase())
              );
              const showWrong = showResult && isSelected && !showCorrect;
              
              return (
                <button
                  key={option.id}
                  onClick={() => {
                    const selectedAnswer = option.id.toUpperCase();
                    const correctAnswer = question.correctAnswer?.toString().toUpperCase() || '';
                    const isAnswerCorrect = selectedAnswer === correctAnswer;
                    setInputs([option.id]);
                    onAnswer([option.id], isAnswerCorrect);
                  }}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    showCorrect 
                      ? 'border-green-500 bg-green-500/20 text-green-300'
                      : showWrong
                        ? 'border-red-500 bg-red-500/20 text-red-300'
                        : isSelected
                          ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300'
                          : isDarkMode
                            ? 'border-slate-600 hover:border-cyan-500 hover:bg-cyan-500/10'
                            : 'border-slate-300 hover:border-cyan-500 hover:bg-cyan-50'
                  }`}
                >
                  <span className="font-mono font-bold mr-3">{option.id}.</span>
                  <span>{option.text}</span>
                </button>
              );
            })}
          </div>
          {showResult && (
            <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}`}>
              <p className={isCorrect ? 'text-green-300' : 'text-red-300'}>
                {isCorrect ? '<CheckCircle className="w-4 h-4 inline mr-1" /> 回答正确！' : `<XCircle className="w-4 h-4 inline mr-1" /> 正确答案: ${question.correctAnswer}`}
              </p>
            </div>
          )}
        </div>
      );
    }

    // Order type is handled separately
    if (question.type === 'order') {
      return (
        <OrderQuestion
          question={question}
          onAnswer={onAnswer}
          showResult={showResult}
          isCorrect={isCorrect}
          isDarkMode={isDarkMode}
        />
      );
    }

    if (question.type === 'fill' || question.type === 'multi-fill') {
      const codeWithBlanks = question.code || '';
      const parts = codeWithBlanks.split(/(___①|___②|___③)/g);
      let blankIdx = 0;

      return (
        <div className="code-block">
          <pre className="whitespace-pre-wrap">
            {parts.map((part, idx) => {
              if (part.match(/___[①②③]/)) {
                const currentBlankIdx = blankIdx++;
                const blank = question.blanks?.[currentBlankIdx];
                const isThisCorrect = showResult && (() => {
                  if (!blank) return false;
                  const answers = Array.isArray(blank.answer) ? blank.answer : [blank.answer];
                  return answers.some(ans => 
                    blank.caseSensitive === false 
                      ? ans.toLowerCase() === inputs[currentBlankIdx]?.trim().toLowerCase()
                      : ans === inputs[currentBlankIdx]?.trim()
                  );
                })();
                const isThisWrong = showResult && !isThisCorrect;

                return (
                  <span key={idx} className="inline-block mx-1 align-middle">
                    <input
                      ref={(el) => { inputRefs.current[currentBlankIdx] = el; }}
                      type="text"
                      value={inputs[currentBlankIdx] || ''}
                      onChange={(e) => {
                        const newInputs = [...inputs];
                        newInputs[currentBlankIdx] = e.target.value;
                        setInputs(newInputs);
                      }}
                      onKeyDown={(e) => handleKeyDown(e, currentBlankIdx)}
                      placeholder={showHint ? blank?.hint : '___'}
                      disabled={showResult}
                      className={`inline-input ${isThisCorrect ? 'correct' : ''} ${isThisWrong ? 'wrong' : ''}`}
                      style={{ width: `${Math.max(60, (inputs[currentBlankIdx]?.length || 3) * 12)}px` }}
                    />
                    {showResult && isThisWrong && blank && (
                      <span className="text-emerald-400 ml-1 text-sm">
                        ({Array.isArray(blank.answer) ? blank.answer[0] : blank.answer})
                      </span>
                    )}
                  </span>
                );
              }
              return <code key={idx}>{part}</code>;
            })}
          </pre>
        </div>
      );
    }

    if (question.type === 'output') {
      return (
        <>
          <CodeBlock code={question.code || ''} />
          <div className="mt-4">
            <label className="block text-sm text-slate-400 mb-2">
              输入程序的输出结果：
            </label>
            <textarea
              ref={(el) => { inputRefs.current[0] = el; }}
              value={inputs[0] || ''}
              onChange={(e) => setInputs([e.target.value])}
              placeholder="在此输入输出结果..."
              disabled={showResult}
              rows={3}
              className={`output-input ${showResult && isCorrect ? 'correct' : ''} ${showResult && !isCorrect ? 'wrong' : ''}`}
            />
            {showResult && !isCorrect && (
              <div className="mt-2 text-sm">
                <span className="text-red-400">你的答案：</span>
                <code className="ml-2 text-red-300">{inputs[0] || '(空)'}</code>
                <br />
                <span className="text-emerald-400">正确答案：</span>
                <code className="ml-2 text-emerald-300 whitespace-pre">{question.correctOutput}</code>
              </div>
            )}
          </div>
        </>
      );
    }

    if (question.type === 'debug') {
      return (
        <>
          <CodeBlock code={question.code || ''} highlightLine={showResult ? question.bugLine : undefined} />
          <div className="mt-4">
            <label className="block text-sm text-slate-400 mb-2">
              <AlertTriangle className="w-4 h-4 inline mr-1 text-red-400" />
              输入有错误的行号：
            </label>
            <input
              ref={(el) => { inputRefs.current[0] = el; }}
              type="number"
              value={inputs[0] || ''}
              onChange={(e) => setInputs([e.target.value])}
              onKeyDown={(e) => handleKeyDown(e, 0)}
              placeholder="行号（如：3）"
              disabled={showResult}
              className={`debug-input ${showResult && isCorrect ? 'correct' : ''} ${showResult && !isCorrect ? 'wrong' : ''}`}
            />
            {showResult && (
              <div className="mt-3 p-3 rounded-lg bg-slate-800/50">
                <p className="text-sm text-slate-400 mb-2">正确修复：</p>
                <CodeBlock code={question.bugFix || ''} />
              </div>
            )}
          </div>
        </>
      );
    }

    return null;
  };

  const getDifficultyStars = () => {
    return Array.from({ length: 3 }, (_, i) => (
      <span key={i} className={i < question.difficulty ? 'text-yellow-400' : 'text-slate-600'}><Star className="w-4 h-4 inline" /></span>
    ));
  };

  // ===== Reference Sidebar (always shown) =====
  const chapterName = getChapterById(question.chapter)?.name ?? '当前章节';
  const modeLabelMap: Record<Question['type'], string> = {
    fill: '代码填空（手打关键字）',
    'multi-fill': '代码填空（多处手打）',
    output: '输出预测（像编译器一样心算）',
    debug: 'Debug找错（定位错误行号）',
    order: '代码排序（搭建程序骨架）',
    choice: '选择题（基础知识测试）',
    'multi-choice': '多选题（多个正确答案）'
  };
  const modeLabel = modeLabelMap[question.type] ?? '练习';

  const baseText = [
    question.title,
    question.description ?? '',
    question.code ?? '',
    question.bugFix ?? '',
    question.codeLines?.join('\n') ?? '',
    question.correctOutput ?? ''
  ].join('\n');

  const derived = deriveVocabularyFromText(baseText, 14);
  const mergedVocabulary = mergeVocabulary(question.vocabulary, derived);

  // focus points & mistakes
  const focusPoints: string[] = [chapterName];
  if (question.type === 'fill' || question.type === 'multi-fill') focusPoints.push('拼写与语法肌肉记忆');
  if (question.type === 'output') focusPoints.push('执行顺序/输出细节');
  if (question.type === 'debug') focusPoints.push('定位错误行');
  if (question.type === 'order') focusPoints.push('程序结构骨架');

  const mistakes: string[] = [];
  if (question.type === 'fill' || question.type === 'multi-fill') {
    mistakes.push('只输入空格对应的关键字/符号，不要把整行抄进去。');
    mistakes.push('注意大小写与多余空格（除非题目提示不区分大小写）。');
  }
  if (question.type === 'output') {
    mistakes.push('输出要“完全一致”：空格、换行都算。多行输出请按实际换行输入。');
  }
  if (question.type === 'debug') {
    mistakes.push('输入左侧行号栏的数字（不是代码里的数字）。');
  }
  if (baseText.includes('scanf')) {
    mistakes.push('scanf 读取变量时常常漏写 & 取地址符。');
  }
  if (baseText.includes('==') || baseText.includes(' = ')) {
    mistakes.push('注意：== 是“比较”，= 是“赋值”。');
  }
  if (baseText.includes('\\n')) {
    mistakes.push('含 \\n 时：输出会换行，答案中也要体现换行。');
  }

  const tips: string[] = [];
  if (question.type === 'fill' || question.type === 'multi-fill') {
    tips.push('目标：把缺失的关键字/符号“敲出来”。这会强迫你记住正确拼写。');
    tips.push('如果一时想不起来，可以先点“显示提示”，但提交前建议自己再默写一遍。');
  }
  if (question.type === 'output') {
    tips.push('像人脑编译器一样：按顺序执行每一行，跟踪变量变化，再写出最终输出。');
    tips.push('建议先在脑中/纸上画一个小表格：变量名 → 当前值。');
  }
  if (question.type === 'debug') {
    tips.push('先看编译器最在意的：缺分号、括号不配对、格式符与类型不匹配、scanf漏& 等。');
    tips.push('本题只需输入“最关键的错误行号”。');
  }
  if (question.type === 'order') {
    tips.push('先找骨架：#include → main → 声明变量 → 逻辑/循环 → printf → return → }');
  }

  return (
    <div className="animate-fadeIn grid gap-6 lg:grid-cols-12">
      {/* Reference Sidebar */}
      <div className="lg:col-span-4 order-1">
        <ReferenceSidebar
          modeLabel={modeLabel}
          focusPoints={focusPoints}
          mistakes={mistakes}
          vocabulary={mergedVocabulary}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* Main Question Area */}
      <div className="space-y-4 lg:col-span-8 order-2">
        <div className={`glass rounded-2xl p-6 sm:p-8 ${isDarkMode ? '' : 'bg-white/60 border-slate-200'}`}>
          {/* Question Header */}
          <div className="flex items-start gap-3 mb-6">
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-br from-slate-700 to-slate-800' : 'bg-slate-100'}`}>
              {renderTypeIcon()}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                {renderTypeBadge()}
                <span className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>难度: {getDifficultyStars()}</span>
              </div>
              <h3 className={`text-lg sm:text-xl font-medium leading-relaxed ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                {question.title}
              </h3>
              {question.description && (
                <p className={isDarkMode ? 'text-slate-400 text-sm mt-1' : 'text-slate-500 text-sm mt-1'}>{question.description}</p>
              )}
            </div>
            {/* Bookmark Button */}
            <button
              onClick={onToggleBookmark}
              className={`flex-shrink-0 p-2 rounded-lg transition-all ${
                isBookmarked
                  ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                  : isDarkMode
                    ? 'bg-slate-700/50 text-slate-400 hover:text-yellow-400 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-400 hover:text-yellow-500 hover:bg-slate-200'
              }`}
              title={isBookmarked ? '取消收藏' : '收藏此题'}
            >
              {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
            </button>
          </div>

          {/* 可视化功能已移除 - 待重构 */}

          {/* Question Content */}
          <div className="mb-6">
            {renderQuestion()}
          </div>

          {/* Hint Toggle (for all question types before submission) */}
          {!showResult && (
            <div className="mb-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className={`text-sm flex items-center gap-1 mb-2 transition-colors ${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-amber-600 hover:text-amber-700'}`}
                >
                  <Lightbulb className="w-4 h-4" />
                  {showHint ? '隐藏提示' : '显示提示'}
                </button>
              </div>
              {showHint && (
                <div className={`p-3 rounded-lg border animate-fadeIn ${isDarkMode ? 'bg-amber-500/10 border-amber-500/30 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
                  <p className="text-sm">{question.hint || getGenericHint(question.type)}</p>
                </div>
              )}
            </div>
          )}

          {/* Submit Button (not for order type, it has its own) */}
          {!showResult && question.type !== 'order' && question.type !== 'choice' && question.type !== 'multi-choice' && (
            <button
              onClick={handleSubmit}
              disabled={question.type !== 'output' && inputs.every(i => !i.trim())}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <CheckCircle className="w-5 h-5" />
              提交答案
            </button>
          )}

          {/* Result */}
          {showResult && (
            <div className="animate-fadeIn space-y-4">
              <div className={`rounded-xl p-4 ${isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
                <div className="flex items-center gap-3">
                  {isCorrect ? (
                    <>
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-emerald-400 font-medium flex items-center gap-2">
                          <Sparkles className="w-4 h-4" /> 完全正确！
                        </p>
                        <p className="text-sm text-emerald-400/70">你的代码思维很棒！</p>
                      </div>
                      <StreakDisplay currentStreak={stats.currentStreak} isDarkMode={isDarkMode} />
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <p className="text-red-400 font-medium">还需要再想想</p>
                        <p className="text-sm text-red-400/70">看看解析，理解错误原因</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Explanation */}
              <div className={`rounded-xl bg-blue-500/5 border border-blue-500/10 p-4 ${isDarkMode ? '' : 'bg-blue-50'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-medium">详细解析</span>
                </div>
                <p className={`leading-relaxed whitespace-pre-line ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {question.explanation}
                </p>
              </div>

              {/* Code Analyzer - 代码逐行解析和内存可视化 */}
              {question.code && (
                <>
                  {/* 增强版内存可视化 - 步骤状态（优先显示） */}
                  <Suspense fallback={<div className="p-4 text-center text-slate-500">加载内存可视化...</div>}>
                    <EnhancedMemoryViz
                      steps={generateStepsFromCode(question.code)}
                      isDarkMode={isDarkMode}
                    />
                  </Suspense>

                  {/* 原始代码分析器 */}
                  {question.lineAnalysis && question.lineAnalysis.length > 0 && (
                    <CodeAnalyzer
                      code={question.code}
                      lines={question.lineAnalysis}
                      memoryCells={question.memoryViz?.cells || []}
                      knowledgePoints={question.knowledgePoints || []}
                      hint={question.hint}
                      showAnalysis={true}
                    />
                  )}
                </>
              )}

              {/* Knowledge Points & Common Mistakes */}
              {(question.knowledgePoints?.length || question.commonMistakes?.length || question.relatedConcepts?.length) ? (
                <div className={`rounded-xl p-4 ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-50 border border-slate-200'}`}>
                  {/* Knowledge Points */}
                  {question.knowledgePoints && question.knowledgePoints.length > 0 && (
                    <div className="mb-4">
                      <h4 className={`text-sm font-medium mb-2 flex items-center gap-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        <BookMarked className="w-4 h-4" /> 知识点
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {question.knowledgePoints.map((point, idx) => (
                          <span key={idx} className={`px-2 py-1 rounded text-xs ${isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Common Mistakes */}
                  {question.commonMistakes && question.commonMistakes.length > 0 && (
                    <div className="mb-4">
                      <h4 className={`text-sm font-medium mb-2 flex items-center gap-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        <AlertTriangle className="w-4 h-4" /> 常见错误
                      </h4>
                      <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {question.commonMistakes.map((mistake, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-red-400">•</span>
                            <span>{mistake}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Related Concepts */}
                  {question.relatedConcepts && question.relatedConcepts.length > 0 && (
                    <div>
                      <h4 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}><Link className="w-4 h-4 inline mr-1" />相关概念</h4>
                      <div className="flex flex-wrap gap-2">
                        {question.relatedConcepts.map((concept, idx) => (
                          <span key={idx} className={`px-2 py-1 rounded text-xs ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-700'}`}>
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : null}

              {/* Deep Understanding Panel - 深入理解面板 */}
              <DeepUnderstandingPanel
                question={question}
                isCorrect={isCorrect}
                userAnswers={userAnswers}
                isDarkMode={isDarkMode}
              />
            </div>
          )}
        </div>
      </div>

    </div>
  );
});

// LabQuestionView - 实验室题目详情页（完整答题功能）
const LabQuestionView = memo(function LabQuestionView({
  question,
  isDarkMode,
  onBack,
  onPrev,
  onNext,
  currentIndex,
  totalCount
}: {
  question: any;
  isDarkMode: boolean;
  onBack: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex: number;
  totalCount: number;
}) {
  const [input, setInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // 切换题目时重置状态
  useEffect(() => {
    setInput('');
    setShowResult(false);
    setIsCorrect(false);
    setShowHint(false);
  }, [question.id]);

  const handleSubmit = () => {
    const normalizedInput = input.trim().replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const normalizedCorrect = question.correctOutput.trim().replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const correct = normalizedInput === normalizedCorrect;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleReset = () => {
    setInput('');
    setShowResult(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  return (
    <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-slate-800/50' : 'bg-white'}`}>
      {/* 顶部导航栏 */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            isDarkMode
              ? 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-300'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          返回题目列表
        </button>
        
        {/* 题目进度指示器 */}
        <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          题目 {currentIndex + 1} / {totalCount}
        </div>
      </div>

      {/* 题目头部 */}
      <div className="flex items-start gap-3 mb-6">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
          isDarkMode ? 'bg-slate-700' : 'bg-slate-100'
        }`}>
          <Terminal className="w-5 h-5 text-green-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="badge badge-success">输出预测</span>
          </div>
          <h3 className={`text-lg sm:text-xl font-medium leading-relaxed ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
            {question.title}
          </h3>
          <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {question.description}
          </p>
        </div>
      </div>

      {/* 代码块 */}
      <div className="mb-6">
        <div className={`rounded-lg p-4 font-mono text-sm overflow-x-auto ${
          isDarkMode ? 'bg-slate-900 text-slate-300' : 'bg-slate-100 text-slate-800'
        }`}>
          <pre>{question.code}</pre>
        </div>
      </div>

      {/* 输入区域 */}
      <div className="mb-4">
        <label className={`block text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          输入程序的输出结果：
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={showResult}
          placeholder="在此输入输出结果..."
          rows={3}
          className={`w-full px-4 py-3 rounded-lg font-mono text-sm resize-none transition-all ${
            isDarkMode
              ? 'bg-slate-900 border-slate-700 text-slate-200 placeholder-slate-600 focus:border-emerald-500'
              : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-emerald-500'
          } border-2 focus:outline-none disabled:opacity-50`}
        />
      </div>

      {/* 提示按钮 */}
      {!showResult && (
        <div className="mb-4">
          <button
            onClick={() => setShowHint(!showHint)}
            className={`text-sm flex items-center gap-1 mb-2 transition-colors ${
              isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-amber-600 hover:text-amber-700'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            {showHint ? '隐藏提示' : '显示提示'}
          </button>
          {showHint && (
            <div className={`p-3 rounded-lg border animate-fadeIn ${
              isDarkMode ? 'bg-amber-500/10 border-amber-500/30 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-800'
            }`}>
              <p className="text-sm">{question.explanation}</p>
            </div>
          )}
        </div>
      )}

      {/* 结果显示 */}
      {showResult && (
        <div className={`rounded-xl p-4 mb-4 ${
          isCorrect 
            ? 'bg-emerald-500/10 border border-emerald-500/30' 
            : 'bg-red-500/10 border border-red-500/30'
        }`}>
          <div className="flex items-center gap-3">
            {isCorrect ? (
              <>
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-emerald-400">回答正确！</div>
                  <div className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {question.explanation}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-red-400">回答错误</div>
                  <div className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    正确答案是：{question.correctOutput}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* 按钮组 */}
      <div className="flex flex-wrap gap-3">
        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <CheckCircle className="w-5 h-5" />
            提交答案
          </button>
        ) : (
          <button
            onClick={handleReset}
            className={`flex-1 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
              isDarkMode
                ? 'bg-slate-700 hover:bg-slate-600 text-white'
                : 'bg-slate-200 hover:bg-slate-300 text-slate-800'
            }`}
          >
            <RotateCcw className="w-5 h-5" />
            重新答题
          </button>
        )}
      </div>

      {/* 上一题/下一题导航 */}
      <div className="flex justify-between mt-6 pt-4 border-t border-slate-700/30">
        <button
          onClick={onPrev}
          disabled={!onPrev}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            onPrev
              ? (isDarkMode
                  ? 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-700')
              : 'opacity-50 cursor-not-allowed text-slate-500'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          上一题
        </button>
        
        <button
          onClick={onNext}
          disabled={!onNext}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            onNext
              ? (isDarkMode
                  ? 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-700')
              : 'opacity-50 cursor-not-allowed text-slate-500'
          }`}
        >
          下一题
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
});

// Lab View - 互动实验室
const LabView = memo(function LabView({
  onBack,
  isDarkMode
}: {
  onBack: () => void;
  isDarkMode: boolean;
}) {
  const [activeTab, setActiveTab] = useState<'bits' | 'struct' | 'pointer' | 'stack' | 'cow' | 'runner'>('pointer');

  const tabs = [
    { id: 'pointer', label: <><Target className="w-4 h-4 inline mr-1" />指针与内存</>, color: 'emerald' },
    { id: 'stack', label: <><BookMarked className="w-4 h-4 inline mr-1" />函数栈帧</>, color: 'blue' },
    { id: 'cow', label: <><RefreshCcw className="w-4 h-4 inline mr-1" />COW 机制</>, color: 'amber' },
    { id: 'bits', label: <><CircuitBoard className="w-4 h-4 inline mr-1" />位运算</>, color: 'purple' },
    { id: 'struct', label: <><Package className="w-4 h-4 inline mr-1" />内存对齐</>, color: 'indigo' },
    { id: 'runner', label: <><Zap className="w-4 h-4 inline mr-1" />代码运行</>, color: 'cyan' },
  ];

  return (
    <div className="animate-fadeIn">
      {/* 头部 */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            isDarkMode
              ? 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-300'
              : 'bg-white hover:bg-slate-50 text-slate-600 shadow-sm'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          返回
        </button>
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
          <Beaker className="w-5 h-5 inline mr-1" />互动实验室
        </h2>
      </div>

      {/* 标签切换 */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          const activeClass = isActive ? ({
            pointer: 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30',
            stack: 'bg-blue-600 text-white shadow-lg shadow-blue-500/30',
            cow: 'bg-amber-600 text-white shadow-lg shadow-amber-500/30',
            bits: 'bg-purple-600 text-white shadow-lg shadow-purple-500/30',
            struct: 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30',
            runner: 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
          }[tab.id] || 'bg-purple-600') : (isDarkMode ? 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50' : 'bg-white text-slate-600 hover:bg-slate-50 shadow-sm');
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${activeClass}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 可视化区域 */}
      <div className="py-4">
        {activeTab === 'pointer' && <PointerSandbox />}
        {activeTab === 'stack' && <StackFrameViz />}
        {activeTab === 'cow' && <COWMemoryViz />}
        {activeTab === 'bits' && <BitSwitchGame />}
        {activeTab === 'struct' && <StructPackerGame />}
        {activeTab === 'runner' && (
          <Suspense fallback={<div className="p-4 text-center text-slate-500">加载代码运行器...</div>}>
            <CodeRunner />
          </Suspense>
        )}
      </div>

      {/* 说明 */}
      <div className={`mt-8 p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/50' : 'bg-white'} border border-slate-200/20`}>
        <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
          <><Lightbulb className="w-5 h-5 inline mr-1" />互动实验室使用指南</>
        </h3>
        <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          <li>• <strong><Target className="w-3 h-3 inline mr-1" />指针与内存</strong>：可视化指针、地址、解引用、多级指针，理解指针运算和危险操作</li>
          <li>• <strong><BookMarked className="w-3 h-3 inline mr-1" />函数栈帧</strong>：观察函数调用时栈的变化，理解递归调用栈、局部变量生命周期</li>
          <li>• <strong><RefreshCcw className="w-3 h-3 inline mr-1" /> COW机制</strong>：理解fork的写时复制原理，观察页表和物理页的关系变化</li>
          <li>• <strong><CircuitBoard className="w-3 h-3 inline mr-1" />位运算</strong>：通过开关理解二进制、十六进制转换</li>
          <li>• <strong><Package className="w-3 h-3 inline mr-1" />内存对齐</strong>：拖拽字段观察结构体内存布局和填充字节</li>
          <li>• <strong><Zap className="w-3 h-3 inline mr-1" />代码运行</strong>：在线编译运行C代码，检测内存错误</li>
        </ul>
      </div>

    </div>
  );
});

// Home View Component
const HomeView = memo(function HomeView({
  progress,
  onStartChapter,
  onReview,
  onViewBookmarks,
  onStartTyping,
  isDarkMode
}: {
  progress: Progress;
  onStartChapter: (chapterId: string) => void;
  onReview: () => void;
  onViewBookmarks: () => void;
  onStartTyping: () => void;
  isDarkMode: boolean;
}) {
  const completedCount = progress.completed.length;
  const correctCount = progress.correct.length;
  const accuracy = completedCount > 0 ? Math.round((correctCount / completedCount) * 100) : 0;
  const [modeFilter, setModeFilter] = useState<'all' | QuestionMode>('all');

  const filteredChapters = modeFilter === 'all' 
    ? chapters 
    : chapters.filter(ch => ch.mode === modeFilter);

  return (
    <div className="animate-fadeIn">
      {/* Hero section */}
      <div className="text-center mb-10 pt-6">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 ${isDarkMode ? '' : 'bg-white/60 border-slate-200'}`}>
          <Brain className="w-4 h-4 text-emerald-400" />
          <span className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>输入式答题 · 拒绝无脑选择</span>
        </div>
        <h1 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
          C语言<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">代码思维</span>训练
        </h1>
        <p className={`text-lg max-w-xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          亲手敲代码，像编译器一样思考
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        <div className={`glass rounded-xl p-4 text-center ${isDarkMode ? '' : 'bg-white/60 border-slate-200'}`}>
          <Target className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
          <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{completedCount}</p>
          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>已完成</p>
        </div>
        <div className={`glass rounded-xl p-4 text-center ${isDarkMode ? '' : 'bg-white/60 border-slate-200'}`}>
          <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{correctCount}</p>
          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>答对</p>
        </div>
        <div className={`glass rounded-xl p-4 text-center ${isDarkMode ? '' : 'bg-white/60 border-slate-200'}`}>
          <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{accuracy}%</p>
          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>正确率</p>
        </div>
        <div className={`glass rounded-xl p-4 text-center ${isDarkMode ? '' : 'bg-white/60 border-slate-200'}`}>
          <Flame className="w-6 h-6 text-orange-400 mx-auto mb-2" />
          <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{progress.wrong.length}</p>
          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>待攻克</p>
        </div>
        <button
          onClick={onViewBookmarks}
          className={`glass rounded-xl p-4 text-center transition-all hover:scale-105 ${isDarkMode ? 'hover:bg-yellow-500/10' : 'bg-white/60 border-slate-200 hover:bg-yellow-50'}`}
        >
          <Bookmark className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{progress.bookmarked.length}</p>
          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>已收藏</p>
        </button>
      </div>

      {/* Quick actions */}
      <div className="flex gap-3 mb-6">
        {progress.wrong.length > 0 && (
          <button
            onClick={onReview}
            className={`flex-1 py-4 px-6 rounded-xl text-orange-400 font-medium flex items-center justify-center gap-2 transition-all ${isDarkMode ? 'bg-orange-500/10 border border-orange-500/30 hover:bg-orange-500/20' : 'bg-orange-50 border border-orange-200 hover:bg-orange-100'}`}
          >
            <RotateCcw className="w-5 h-5" />
            复习错题（{progress.wrong.length}道）
          </button>
        )}
        {progress.bookmarked.length > 0 && (
          <button
            onClick={onViewBookmarks}
            className={`flex-1 py-4 px-6 rounded-xl text-yellow-400 font-medium flex items-center justify-center gap-2 transition-all ${isDarkMode ? 'bg-yellow-500/10 border border-yellow-500/30 hover:bg-yellow-500/20' : 'bg-yellow-50 border border-yellow-200 hover:bg-yellow-100'}`}
          >
            <Bookmark className="w-5 h-5" />
            查看收藏（{progress.bookmarked.length}道）
          </button>
        )}
      </div>

      {/* Chapters */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-xl font-bold flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
            <BookOpen className="w-5 h-5 text-emerald-400" />
            学习章节
          </h2>
          {/* Mode Filter Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setModeFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                modeFilter === 'all'
                  ? isDarkMode 
                    ? 'bg-slate-500/20 text-slate-300 border border-slate-500/30'
                    : 'bg-slate-600/20 text-slate-800 border border-slate-600/30'
                  : isDarkMode 
                    ? 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'
              }`}
            >
              全部
            </button>
            <button
              onClick={() => setModeFilter('real')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                modeFilter === 'real'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : isDarkMode 
                    ? 'text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10' 
                    : 'text-slate-400 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              <Target className="w-4 h-4" />
              真题
            </button>
            <button
              onClick={() => setModeFilter('practice')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                modeFilter === 'practice'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : isDarkMode 
                    ? 'text-slate-500 hover:text-blue-400 hover:bg-blue-500/10' 
                    : 'text-slate-400 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Zap className="w-4 h-4" />
              测试
            </button>
          </div>
        </div>
        <div className="grid gap-4">
          {filteredChapters.map((chapter) => {
            const chapterQuestions = getQuestionsByChapter(chapter.id);
            const chapterCompleted = chapterQuestions.filter(q => progress.completed.includes(q.id)).length;
            const chapterCorrect = chapterQuestions.filter(q => progress.correct.includes(q.id)).length;
            const chapterProgress = chapterQuestions.length > 0 ? (chapterCompleted / chapterQuestions.length) * 100 : 0;

            return (
              <button
                key={chapter.id}
                onClick={() => onStartChapter(chapter.id)}
                className={`chapter-card glass rounded-xl p-5 text-left group ${isDarkMode ? '' : 'bg-white/60 border-slate-200'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center text-3xl">
                    {(() => {
                      const IconComponent = iconMap[chapter.icon] || BookOpen;
                      return <IconComponent className="w-8 h-8" />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold group-hover:text-emerald-400 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                        {chapter.name}
                      </h3>
                      {chapter.mode && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          chapter.mode === 'real' 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {chapter.mode === 'real' ? '真题' : '测试'}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm mt-0.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{chapter.description}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden max-w-48">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-500"
                          style={{ width: `${chapterProgress}%` }}
                        />
                      </div>
                      <span className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        {chapterCorrect}/{chapterQuestions.length}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 group-hover:text-emerald-400 transition-colors ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Training modes */}
      <div className={`mt-8 p-6 glass rounded-xl ${isDarkMode ? '' : 'bg-white/60 border-slate-200'}`}>
        <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
          <Zap className="w-5 h-5 text-yellow-400" />
          四大训练模式
        </h3>
        <div className="grid sm:grid-cols-5 gap-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-500/5 border border-blue-500/20' : 'bg-blue-50 border border-blue-200'}`}>
            <Code2 className="w-6 h-6 text-blue-400 mb-2" />
            <h4 className={`font-medium text-blue-400 mb-1`}>代码填空</h4>
            <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>亲手输入关键字，强化记忆</p>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-500/5 border border-green-500/20' : 'bg-green-50 border border-green-200'}`}>
            <Terminal className="w-6 h-6 text-green-400 mb-2" />
            <h4 className={`font-medium text-green-400 mb-1`}>输出预测</h4>
            <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>读懂代码逻辑，预测运行结果</p>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-red-500/5 border border-red-500/20' : 'bg-red-50 border border-red-200'}`}>
            <Bug className="w-6 h-6 text-red-400 mb-2" />
            <h4 className={`font-medium text-red-400 mb-1`}>Debug找错</h4>
            <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>像编译器一样找Bug</p>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-amber-500/5 border border-amber-500/20' : 'bg-amber-50 border border-amber-200'}`}>
            <Shuffle className="w-6 h-6 text-amber-400 mb-2" />
            <h4 className={`font-medium text-amber-400 mb-1`}>代码排序</h4>
            <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>理解程序结构，排列代码</p>
          </div>
          <button
            onClick={onStartTyping}
            className={`p-4 rounded-lg transition-all hover:scale-105 ${isDarkMode ? 'bg-cyan-500/5 border border-cyan-500/20 hover:bg-cyan-500/10' : 'bg-cyan-50 border border-cyan-200 hover:bg-cyan-100'}`}
          >
            <Keyboard className="w-6 h-6 text-cyan-400 mb-2" />
            <h4 className={`font-medium text-cyan-400 mb-1`}>代码跟打</h4>
            <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>看着代码练习敲写</p>
          </button>
        </div>
      </div>
    </div>
  );
});

// Stats View
const StatsView = memo(function StatsView({ progress, onReset, isDarkMode }: { progress: Progress; onReset: () => void; isDarkMode: boolean }) {
  const accuracy = progress.completed.length > 0
    ? Math.round((progress.correct.length / progress.completed.length) * 100)
    : 0;

  const chapterStats = chapters.map(chapter => {
    const chapterQuestions = getQuestionsByChapter(chapter.id);
    const completed = chapterQuestions.filter(q => progress.completed.includes(q.id)).length;
    const correct = chapterQuestions.filter(q => progress.correct.includes(q.id)).length;
    return {
      ...chapter,
      total: chapterQuestions.length,
      completed,
      correct,
      accuracy: completed > 0 ? Math.round((correct / completed) * 100) : 0
    };
  });

  const { stats } = useUserStats();

  return (
    <div className="animate-fadeIn">
      <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
        <Trophy className="w-6 h-6 text-yellow-400" />
        训练统计
      </h2>

      {/* Stats Panel - 详细统计 */}
      <div className="mb-6">
        <StatsPanel stats={stats} isDarkMode={isDarkMode} />
      </div>

      {/* Achievements Panel - 成就系统 */}
      <div className="mb-6">
        <AchievementsPanel achievements={stats.achievements} isDarkMode={isDarkMode} />
      </div>

      {/* Overall stats */}
      <div className={`glass rounded-2xl p-6 mb-6 ${isDarkMode ? '' : 'bg-white/60 border-slate-200'}`}>
        <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>总体进度</h3>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-400">{progress.completed.length}</p>
            <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>已完成</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-400">{progress.correct.length}</p>
            <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>答对</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-400">{progress.wrong.length}</p>
            <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>答错</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex justify-between text-sm mb-1">
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>正确率</span>
              <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{accuracy}%</span>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${accuracy}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Chapter breakdown */}
      <div className={`glass rounded-2xl p-6 mb-6 ${isDarkMode ? '' : 'bg-white/60 border-slate-200'}`}>
        <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>章节详情</h3>
        <div className="space-y-4">
          {chapterStats.map(chapter => (
            <div key={chapter.id} className="flex items-center gap-4">
              <span className="text-2xl">{chapter.icon}</span>
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className={isDarkMode ? 'text-white' : 'text-slate-800'}>{chapter.name}</span>
                  <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                    {chapter.correct}/{chapter.total} ({chapter.accuracy}%)
                  </span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-500"
                    style={{ width: `${(chapter.correct / chapter.total) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reset button */}
      <button
        onClick={onReset}
        className={`w-full py-3 px-6 rounded-xl text-red-400 font-medium transition-all ${isDarkMode ? 'bg-red-500/10 border border-red-500/30 hover:bg-red-500/20' : 'bg-red-50 border border-red-200 hover:bg-red-100'}`}
      >
        重置所有进度
      </button>
    </div>
  );
});

// Training View
const TrainingView = memo(function TrainingView({
  chapter,
  progress,
  setProgress,
  onBack,
  isDarkMode,
  setView
}: {
  chapter: Chapter;
  progress: Progress;
  setProgress: (p: Progress) => void;
  onBack: () => void;
  isDarkMode: boolean;
  setView: (v: string) => void;
}) {
  const [showLesson, setShowLesson] = useState(true);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [answersMap, setAnswersMap] = useState<Record<number, { answers: string[], isCorrect: boolean, showResult: boolean }>>({});

  const chapterQuestions = getQuestionsByChapter(chapter.id);
  const currentLesson = chapter.lessons[lessonIndex];
  const currentQuestion = chapterQuestions[questionIndex];

  useEffect(() => {
    const firstUnanswered = chapterQuestions.findIndex(q => !progress.completed.includes(q.id));
    if (firstUnanswered !== -1) {
      setQuestionIndex(firstUnanswered);
    }
  }, []);

  const handleLessonComplete = useCallback(() => {
    if (lessonIndex < chapter.lessons.length - 1) {
      setLessonIndex(lessonIndex + 1);
    } else {
      setShowLesson(false);
    }
  }, [lessonIndex, chapter.lessons.length]);

  const goToPrevLesson = useCallback(() => {
    if (lessonIndex > 0) {
      setLessonIndex(lessonIndex - 1);
    }
  }, [lessonIndex]);

  const goToNextLesson = useCallback(() => {
    if (lessonIndex < chapter.lessons.length - 1) {
      setLessonIndex(lessonIndex + 1);
    } else {
      setShowLesson(false);
    }
  }, [lessonIndex, chapter.lessons.length]);

  const goToPractice = useCallback(() => {
    setShowLesson(false);
  }, []);

  const goToNext = useCallback(() => {
    if (questionIndex < chapterQuestions.length - 1) {
      const nextIndex = questionIndex + 1;
      const savedAnswer = answersMap[nextIndex];
      
      setQuestionIndex(nextIndex);
      
      if (savedAnswer) {
        setUserAnswers(savedAnswer.answers);
        setIsCorrect(savedAnswer.isCorrect);
        setShowResult(savedAnswer.showResult);
      } else {
        setShowResult(false);
        setUserAnswers([]);
        setIsCorrect(false);
      }
    }
  }, [questionIndex, chapterQuestions.length, answersMap]);

  const handleAnswer = useCallback((answers: string[], correct: boolean) => {
    setUserAnswers(answers);
    setIsCorrect(correct);
    setShowResult(true);

    setAnswersMap(prev => ({
      ...prev,
      [questionIndex]: { answers, isCorrect: correct, showResult: true }
    }));

    const qId = currentQuestion.id;
    const newProgress = {
      ...progress,
      completed: [...new Set([...progress.completed, qId])],
      correct: correct
        ? [...new Set([...progress.correct, qId])]
        : progress.correct.filter(id => id !== qId),
      wrong: !correct
        ? [...new Set([...progress.wrong, qId])]
        : progress.wrong.filter(id => id !== qId),
      bookmarked: !correct && !progress.bookmarked.includes(qId)
        ? [...progress.bookmarked, qId]
        : progress.bookmarked,
      attempts: {
        ...progress.attempts,
        [qId]: (progress.attempts[qId] || 0) + 1
      }
    };

    setProgress(newProgress);

    // 答对后自动进入下一题
    if (correct && questionIndex < chapterQuestions.length - 1) {
      setTimeout(() => {
        goToNext();
      }, 1500);
    }
  }, [currentQuestion, progress, setProgress, questionIndex, chapterQuestions.length, goToNext]);

  const goToPrev = useCallback(() => {
    if (questionIndex > 0) {
      const prevIndex = questionIndex - 1;
      const savedAnswer = answersMap[prevIndex];
      
      setQuestionIndex(prevIndex);
      
      if (savedAnswer) {
        setUserAnswers(savedAnswer.answers);
        setIsCorrect(savedAnswer.isCorrect);
        setShowResult(savedAnswer.showResult);
      } else {
        setShowResult(false);
        setUserAnswers([]);
        setIsCorrect(false);
      }
    }
  }, [questionIndex, answersMap]);

  const toggleBookmark = useCallback(() => {
    const qId = currentQuestion.id;
    const isCurrentlyBookmarked = progress.bookmarked.includes(qId);
    const newProgress = {
      ...progress,
      bookmarked: isCurrentlyBookmarked
        ? progress.bookmarked.filter(id => id !== qId)
        : [...progress.bookmarked, qId]
    };
    setProgress(newProgress);
  }, [currentQuestion, progress, setProgress]);

  const progressPercent = ((questionIndex + 1) / chapterQuestions.length) * 100;

  return (
    <div className="animate-fadeIn">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-800'}`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>返回</span>
        </button>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{chapter.icon}</span>
          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{chapter.name}</span>
        </div>
      </div>

      {showLesson && currentLesson ? (
        <LessonView 
          lesson={currentLesson} 
          onComplete={handleLessonComplete} 
          isDarkMode={isDarkMode}
          onPrev={goToPrevLesson}
          onNext={goToNextLesson}
          hasPrev={lessonIndex > 0}
          hasNext={lessonIndex < chapter.lessons.length - 1}
          onStartPractice={goToPractice}
        />
      ) : currentQuestion ? (
        <>
          {/* Progress bar */}
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>练习进度</span>
              <span className="text-emerald-400 font-medium">{questionIndex + 1} / {chapterQuestions.length}</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full progress-bar rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Navigation buttons - always visible */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={goToPrev}
              disabled={questionIndex === 0}
              className={`flex-1 py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all ${isDarkMode ? 'glass glass-hover text-white' : 'bg-white/60 border border-slate-200 text-slate-800 hover:bg-white/80'}`}
            >
              <ChevronLeft className="w-4 h-4" />
              上一题
            </button>
            <button
              onClick={goToNext}
              disabled={questionIndex === chapterQuestions.length - 1}
              className={`flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-medium flex items-center justify-center gap-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-emerald-500/25 transition-all`}
            >
              下一题
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Question */}
          <QuestionView
            question={currentQuestion}
            onAnswer={handleAnswer}
            showResult={showResult}
            isCorrect={isCorrect}
            userAnswers={userAnswers}
            isDarkMode={isDarkMode}
            isBookmarked={progress.bookmarked.includes(currentQuestion.id)}
            onToggleBookmark={toggleBookmark}
            onNext={goToNext}
            onPrev={goToPrev}
          />

          {/* Completion message */}
          {questionIndex === chapterQuestions.length - 1 && showResult && (
            <div className={`mt-4 glass rounded-xl p-4 text-center animate-fadeIn ${isDarkMode ? '' : 'bg-white/60 border-slate-200'}`}>
              <Trophy className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}><Trophy className="w-5 h-5 inline mr-1" />章节完成！</h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400 mb-3' : 'text-slate-600 mb-3'}`}>
                你已完成 {chapter.name} 的所有练习
              </p>
              <button
                onClick={onBack}
                className="py-2 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
              >
                返回首页
              </button>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
});

// Review View
const ReviewView = memo(function ReviewView({
  progress,
  setProgress,
  onBack,
  isDarkMode
}: {
  progress: Progress;
  setProgress: (p: Progress) => void;
  onBack: () => void;
  isDarkMode: boolean;
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const wrongQuestions = questions.filter(q => progress.wrong.includes(q.id));
  const currentQuestion = wrongQuestions[questionIndex];

  if (wrongQuestions.length === 0) {
    return (
      <div className="text-center py-12 animate-fadeIn">
        <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>太棒了！</h2>
        <p className={isDarkMode ? 'text-slate-400 mb-6' : 'text-slate-600 mb-6'}>没有需要复习的错题</p>
        <button
          onClick={onBack}
          className="py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-medium"
        >
          返回首页
        </button>
      </div>
    );
  }

  const handleAnswer = useCallback((answers: string[], correct: boolean) => {
    setUserAnswers(answers);
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      const qId = currentQuestion.id;
      const newProgress = {
        ...progress,
        correct: [...new Set([...progress.correct, qId])],
        wrong: progress.wrong.filter(id => id !== qId)
      };
      setProgress(newProgress);

      setTimeout(() => {
        if (questionIndex < wrongQuestions.length - 1) {
          setQuestionIndex(questionIndex + 1);
          setShowResult(false);
          setUserAnswers([]);
        } else {
          onBack();
        }
      }, 1500);
    }
  }, [currentQuestion, progress, setProgress, questionIndex, wrongQuestions.length, onBack]);

  const goToNext = useCallback(() => {
    if (questionIndex < wrongQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setShowResult(false);
      setUserAnswers([]);
    } else {
      onBack();
    }
  }, [questionIndex, wrongQuestions.length, onBack]);

  const toggleBookmark = useCallback(() => {
    const qId = currentQuestion.id;
    const isCurrentlyBookmarked = progress.bookmarked.includes(qId);
    const newProgress = {
      ...progress,
      bookmarked: isCurrentlyBookmarked
        ? progress.bookmarked.filter(id => id !== qId)
        : [...progress.bookmarked, qId]
    };
    setProgress(newProgress);
  }, [currentQuestion, progress, setProgress]);

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-800'}`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>返回</span>
        </button>
        <div className="flex items-center gap-2">
          <RotateCcw className="w-5 h-5 text-orange-400" />
          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>错题复习</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>复习进度</span>
          <span className="text-orange-400 font-medium">{questionIndex + 1} / {wrongQuestions.length}</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-500"
            style={{ width: `${((questionIndex + 1) / wrongQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <QuestionView
        question={currentQuestion}
        onAnswer={handleAnswer}
        showResult={showResult}
        isCorrect={isCorrect}
        userAnswers={userAnswers}
        isDarkMode={isDarkMode}
        isBookmarked={progress.bookmarked.includes(currentQuestion.id)}
        onToggleBookmark={toggleBookmark}
        onNext={goToNext}
      />

      {!isCorrect && showResult && (
        <button
          onClick={goToNext}
          className="w-full mt-6 py-3 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
        >
          {questionIndex < wrongQuestions.length - 1 ? '下一题' : '完成复习'}
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
});

// Bookmarked View - 收藏列表
const BookmarkedView = memo(function BookmarkedView({
  progress,
  setProgress,
  onBack,
  isDarkMode
}: {
  progress: Progress;
  setProgress: (p: Progress) => void;
  onBack: () => void;
  isDarkMode: boolean;
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const bookmarkedQuestions = questions.filter(q => progress.bookmarked.includes(q.id));
  const currentQuestion = bookmarkedQuestions[questionIndex];

  if (bookmarkedQuestions.length === 0) {
    return (
      <div className="text-center py-12 animate-fadeIn">
        <Bookmark className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>暂无收藏</h2>
        <p className={isDarkMode ? 'text-slate-400 mb-6' : 'text-slate-600 mb-6'}>在刷题时点击收藏按钮添加题目</p>
        <button
          onClick={onBack}
          className="py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-medium"
        >
          返回首页
        </button>
      </div>
    );
  }

  const handleAnswer = useCallback((answers: string[], correct: boolean) => {
    setUserAnswers(answers);
    setIsCorrect(correct);
    setShowResult(true);

    if (correct && questionIndex < bookmarkedQuestions.length - 1) {
      setTimeout(() => {
        goToNext();
      }, 1500);
    }
  }, [questionIndex, bookmarkedQuestions.length]);

  const goToNext = useCallback(() => {
    if (questionIndex < bookmarkedQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setShowResult(false);
      setUserAnswers([]);
    }
  }, [questionIndex]);

  const goToPrev = useCallback(() => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setShowResult(false);
      setUserAnswers([]);
    }
  }, [questionIndex]);

  const toggleBookmark = useCallback(() => {
    const qId = currentQuestion.id;
    const newProgress = {
      ...progress,
      bookmarked: progress.bookmarked.filter(id => id !== qId)
    };
    setProgress(newProgress);
    if (questionIndex >= newProgress.bookmarked.length && questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
    if (newProgress.bookmarked.length === 0) {
      onBack();
    }
  }, [currentQuestion, progress, setProgress, questionIndex, onBack]);

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-800'}`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>返回</span>
        </button>
        <div className="flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-yellow-400" />
          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>收藏题目</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>浏览进度</span>
          <span className="text-yellow-400 font-medium">{questionIndex + 1} / {bookmarkedQuestions.length}</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full transition-all duration-500"
            style={{ width: `${((questionIndex + 1) / bookmarkedQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={goToPrev}
          disabled={questionIndex === 0}
          className={`flex-1 py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all ${isDarkMode ? 'glass glass-hover text-white' : 'bg-white/60 border border-slate-200 text-slate-800 hover:bg-white/80'}`}
        >
          <ChevronLeft className="w-4 h-4" />
          上一题
        </button>
        <button
          onClick={goToNext}
          disabled={questionIndex === bookmarkedQuestions.length - 1}
          className={`flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-medium flex items-center justify-center gap-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-yellow-500/25 transition-all`}
        >
          下一题
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <QuestionView
        question={currentQuestion}
        onAnswer={handleAnswer}
        showResult={showResult}
        isCorrect={isCorrect}
        userAnswers={userAnswers}
        isDarkMode={isDarkMode}
        isBookmarked={true}
        onToggleBookmark={toggleBookmark}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </div>
  );
});

// Projects List View
const ProjectsListView = memo(function ProjectsListView({
  onSelectProject,
  isDarkMode
}: {
  onSelectProject: (project: Project) => void;
  isDarkMode: boolean;
}) {
  const projects = getAllProjects();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-orange-400';
      case 'expert': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'intermediate': return '中等';
      case 'advanced': return '进阶';
      case 'expert': return '专家';
      default: return difficulty;
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
          项目实战
        </h2>
        <p className={`text-base max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          通过完整的项目案例学习嵌入式Linux应用开发，每个项目拆分成多个片段详细讲解
        </p>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelectProject(project)}
            className={`text-left p-5 rounded-xl transition-all hover:scale-[1.01] ${
              isDarkMode
                ? 'glass glass-hover'
                : 'bg-white/80 border border-slate-200 hover:shadow-lg'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <FolderOpen className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                    {project.name}
                  </h3>
                  <span className={`text-sm font-medium ${getDifficultyColor(project.difficulty)}`}>
                    {getDifficultyText(project.difficulty)}
                  </span>
                </div>
                <p className={`text-sm mb-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <span className={isDarkMode ? 'text-slate-500' : 'text-slate-500'}>
                    <Layers className="w-3 h-3 inline mr-1" />
                    {project.fragments.length} 个片段
                  </span>
                  <span className={isDarkMode ? 'text-slate-500' : 'text-slate-500'}>
                    <Code2 className="w-3 h-3 inline mr-1" />
                    {project.totalLines} 行代码
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-full ${
                        isDarkMode
                          ? 'bg-slate-700/50 text-slate-300'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ChevronRight className={`w-6 h-6 ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
});

// Main App
export function App() {
  const [view, setView] = useState('home');
  const [progress, setProgress] = useState<Progress>({
    completed: [],
    correct: [],
    wrong: [],
    attempts: {},
    bookmarked: [],
    analyzed: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [backendAlive, setBackendAlive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    loadProgressApi().then(data => {
      setProgress(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        await fetch('http://localhost:3001/api/heartbeat');
        setBackendAlive(true);
      } catch {
        setBackendAlive(false);
      }
    };
    
    checkBackend();
    const heartbeat = setInterval(checkBackend, 5000);

    return () => {
      clearInterval(heartbeat);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveProgressApi(progress);
    }
  }, [progress, isLoading]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleStartChapter = useCallback((chapterId: string) => {
    const chapter = getChapterById(chapterId);
    if (chapter) {
      setCurrentChapter(chapter);
      setView('training');
    }
  }, []);

  const handleSelectProject = useCallback((project: Project) => {
    setCurrentProject(project);
    setView('project');
  }, []);

  const handleReview = useCallback(() => {
    setView('review');
  }, []);

  const handleViewBookmarks = useCallback(() => {
    setView('bookmarked');
  }, []);

  const handleStartTyping = useCallback(() => {
    setView('typing');
  }, []);

  const handleReset = useCallback(() => {
    if (confirm('确定要重置所有进度吗？此操作不可撤销。')) {
      setProgress({ completed: [], correct: [], wrong: [], attempts: {}, bookmarked: [], analyzed: [] });
    }
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? '' : 'bg-gradient-to-br from-slate-50 to-slate-100'}`}>
      <Header view={view} setView={setView} progress={progress} isDarkMode={isDarkMode} toggleTheme={toggleTheme} backendAlive={backendAlive} />

      <main className={`mx-auto px-4 py-8 ${view === 'project' ? 'max-w-none h-[calc(100vh-140px)]' : 'max-w-5xl'}`}>
        {view === 'home' && (
          <HomeView
            progress={progress}
            onStartChapter={handleStartChapter}
            onReview={handleReview}
            onViewBookmarks={handleViewBookmarks}
            onStartTyping={handleStartTyping}
            isDarkMode={isDarkMode}
          />
        )}
        {view === 'stats' && (
          <StatsView progress={progress} onReset={handleReset} isDarkMode={isDarkMode} />
        )}
        {view === 'training' && currentChapter && (
          <TrainingView
            chapter={currentChapter}
            progress={progress}
            setProgress={setProgress}
            onBack={() => setView('home')}
            isDarkMode={isDarkMode}
            setView={setView}
          />
        )}
        {view === 'review' && (
          <ReviewView
            progress={progress}
            setProgress={setProgress}
            onBack={() => setView('home')}
            isDarkMode={isDarkMode}
          />
        )}
        {view === 'bookmarked' && (
          <BookmarkedView
            progress={progress}
            setProgress={setProgress}
            onBack={() => setView('home')}
            isDarkMode={isDarkMode}
          />
        )}
        {view === 'projects' && (
          <ProjectsListView
            onSelectProject={handleSelectProject}
            isDarkMode={isDarkMode}
          />
        )}
        {view === 'project' && currentProject && (
          <ProjectView
            project={currentProject}
            onBack={() => setView('projects')}
          />
        )}
        {view === 'lab' && (
          <LabView onBack={() => setView('home')} isDarkMode={isDarkMode} />
        )}
        {view === 'typing' && (
          <Suspense fallback={<div className="p-4 text-center text-slate-500">加载代码打字练习...</div>}>
            <CodeTypingPractice />
          </Suspense>
        )}
      </main>

      {view !== 'project' && (
        <footer className={`text-center py-8 text-sm ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>
          <p>用 <Heart className="w-4 h-4 inline" /> 打造 · C语言代码思维训练器</p>
        </footer>
      )}
    </div>
  );
}
