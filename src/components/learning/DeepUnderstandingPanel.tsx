import { useState } from 'react';
import { BookOpen, Lightbulb, Target, AlertTriangle, ArrowRight, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

// 深入理解面板组件
interface DeepUnderstandingPanelProps {
  question: any;
  isCorrect: boolean;
  userAnswers: string[];
  isDarkMode: boolean;
  onGoToLab?: (type: string) => void;
}

export function DeepUnderstandingPanel({
  question,
  isCorrect,
  userAnswers,
  isDarkMode,
  onGoToLab
}: DeepUnderstandingPanelProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['concept']));

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  // 根据题目类型和内容生成相关概念
  const getRelatedConcepts = () => {
    const concepts: { title: string; explanation: string; keywords: string[] }[] = [];
    const code = question.code || '';
    const title = question.title || '';
    const explanation = question.explanation || '';

    // 指针相关
    if (code.includes('*') || title.includes('指针') || explanation.includes('指针')) {
      concepts.push({
        title: '指针基础',
        explanation: '指针是一个变量，其值为另一个变量的地址。通过指针可以直接操作内存。',
        keywords: ['地址', '解引用', '&', '*']
      });
    }

    // 数组相关
    if (code.includes('[') || title.includes('数组')) {
      concepts.push({
        title: '数组与内存',
        explanation: '数组在内存中连续存储，数组名是首元素地址。arr[i] 等价于 *(arr+i)。',
        keywords: ['连续存储', '下标', '越界']
      });
    }

    // 循环相关
    if (code.includes('for') || code.includes('while')) {
      concepts.push({
        title: '循环控制',
        explanation: '循环用于重复执行代码块。注意循环条件和边界，避免死循环或越界。',
        keywords: ['循环条件', '迭代', 'break', 'continue']
      });
    }

    // 字符串相关
    if (code.includes('char') || code.includes('strlen') || code.includes('strcpy')) {
      concepts.push({
        title: '字符串处理',
        explanation: 'C语言字符串以\\0结尾。strlen不包含结尾符，strcpy需要目标足够大。',
        keywords: ['\\0', 'strlen', 'strcpy', '字符串']
      });
    }

    // 递归相关
    if (code.includes('factorial') || explanation.includes('递归') || title.includes('递归')) {
      concepts.push({
        title: '递归原理',
        explanation: '递归是函数调用自身。必须有终止条件，否则栈溢出。每次调用创建新的栈帧。',
        keywords: ['终止条件', '栈帧', '递归深度']
      });
    }

    // 结构体相关
    if (code.includes('struct') || title.includes('结构体')) {
      concepts.push({
        title: '结构体与内存对齐',
        explanation: '结构体成员按声明顺序存储，编译器可能插入填充字节以满足对齐要求。',
        keywords: ['内存对齐', 'padding', 'sizeof']
      });
    }

    // 位运算相关
    if (code.includes('&') || code.includes('|') || code.includes('^') || code.includes('<<') || code.includes('>>')) {
      if (!code.includes('&&') && !code.includes('||')) {
        concepts.push({
          title: '位运算',
          explanation: '位运算直接操作二进制位。&与、|或、^异或、~取反、<<左移、>>右移。',
          keywords: ['二进制', '位操作', '掩码']
        });
      }
    }

    // 条件判断
    if (code.includes('if') || code.includes('else') || code.includes('switch')) {
      concepts.push({
        title: '条件分支',
        explanation: '条件语句根据表达式的真假选择执行路径。注意==和=的区别。',
        keywords: ['条件表达式', '逻辑运算', '分支']
      });
    }

    // 默认概念
    if (concepts.length === 0) {
      concepts.push({
        title: '代码执行流程',
        explanation: '理解代码的执行顺序是关键。从main开始，逐行执行，遇到函数调用则跳转。',
        keywords: ['执行顺序', '函数调用', '返回值']
      });
    }

    return concepts;
  };

  // 分析错误原因
  const analyzeMistakes = () => {
    const mistakes: string[] = [];
    const code = question.code || '';
    const userAnswer = userAnswers.join(', ');

    if (!isCorrect) {
      // 填空题常见错误
      if (question.type === 'fill' || question.type === 'multi-fill') {
        if (userAnswer.includes(' ')) {
          mistakes.push('答案中可能有多余空格，请检查是否需要精确匹配');
        }
        if (code.includes('==') && userAnswer.includes('=')) {
          mistakes.push('注意区分赋值运算符 = 和比较运算符 ==');
        }
        if (code.includes('*') && !userAnswer.includes('*')) {
          mistakes.push('指针相关题目，注意指针运算符 * 和取地址符 &');
        }
      }

      // 输出题常见错误
      if (question.type === 'output') {
        mistakes.push('检查输出格式是否完全一致（空格、换行、大小写）');
        mistakes.push('建议在纸上模拟执行过程，跟踪每个变量的变化');
        if (code.includes('printf')) {
          mistakes.push('注意printf格式字符串中的转义字符（如\\n、\\t）');
        }
      }

      // Debug题常见错误
      if (question.type === 'debug') {
        mistakes.push('检查语法错误：分号、括号、引号是否匹配');
        mistakes.push('检查逻辑错误：条件判断、循环边界是否正确');
        mistakes.push('检查类型错误：格式符与变量类型是否匹配');
      }

      if (mistakes.length === 0) {
        mistakes.push('仔细阅读题目要求和代码逻辑');
        mistakes.push('参考下方解析理解正确答案');
      }
    }

    return mistakes;
  };

  // 获取学习建议
  const getStudyTips = () => {
    const tips: string[] = [];
    const chapter = question.chapter;

    if (chapter === 'basics') {
      tips.push('多练习基础语法，形成肌肉记忆');
      tips.push('理解每个关键字的作用和使用场景');
    } else if (chapter === 'interview') {
      tips.push('面试题需要深入理解底层原理');
      tips.push('不仅要会做，还要能解释为什么');
    } else if (chapter === 'linux') {
      tips.push('Linux编程需要理解系统调用原理');
      tips.push('建议结合实验加深理解');
    }

    tips.push('错题要反复练习，直到完全掌握');
    tips.push('可以到实验室进行交互式学习');

    return tips;
  };

  // 推荐相关实验室
  const getRecommendedLabs = () => {
    const labs: { id: string; name: string; reason: string }[] = [];
    const code = question.code || '';
    const title = question.title || '';

    if (code.includes('*') || title.includes('指针')) {
      labs.push({
        id: 'pointer',
        name: 'Target 指针与内存',
        reason: '通过交互式操作理解指针、地址、解引用'
      });
    }

    if (title.includes('结构体') || code.includes('struct')) {
      labs.push({
        id: 'struct',
        name: 'Package 内存对齐',
        reason: '可视化结构体内存布局和填充字节'
      });
    }

    if (code.includes('0x') || code.includes('&') || code.includes('|')) {
      if (!code.includes('&&') && !code.includes('||')) {
        labs.push({
          id: 'bits',
          name: 'Plug 位运算',
          reason: '通过开关理解二进制和十六进制转换'
        });
      }
    }

    if (title.includes('递归') || title.includes('函数') || code.includes('factorial')) {
      labs.push({
        id: 'stack',
        name: 'BookOpen 函数栈帧',
        reason: '观察函数调用时栈的变化'
      });
    }

    if (title.includes('fork') || title.includes('进程')) {
      labs.push({
        id: 'cow',
        name: 'RefreshCcw COW机制',
        reason: '理解fork的写时复制原理'
      });
    }

    // 默认推荐
    if (labs.length === 0) {
      labs.push({
        id: 'pointer',
        name: 'Target 指针与内存',
        reason: '深入理解内存和指针是C语言的核心'
      });
    }

    return labs;
  };

  const concepts = getRelatedConcepts();
  const mistakes = analyzeMistakes();
  const tips = getStudyTips();
  const recommendedLabs = getRecommendedLabs();

  return (
    <div className={`rounded-2xl overflow-hidden border ${
      isCorrect 
        ? isDarkMode ? 'bg-emerald-900/10 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'
        : isDarkMode ? 'bg-amber-900/10 border-amber-500/30' : 'bg-amber-50 border-amber-200'
    }`}>
      {/* 标题 */}
      <div className={`px-5 py-4 ${isDarkMode ? 'bg-slate-800/50' : 'bg-white/50'}`}>
        <div className="flex items-center gap-3">
          {isCorrect ? (
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Target className="w-5 h-5 text-emerald-400" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-amber-400" />
            </div>
          )}
          <div>
            <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              {isCorrect ? '深入理解' : '需要加强'}
            </h4>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {isCorrect ? '巩固知识点，举一反三' : '分析错误原因，查漏补缺'}
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* 相关概念 */}
        <div className={`rounded-xl overflow-hidden ${isDarkMode ? 'bg-slate-800/30' : 'bg-white'}`}>
          <button
            onClick={() => toggleSection('concept')}
            className={`w-full px-4 py-3 flex items-center justify-between ${
              isDarkMode ? 'hover:bg-slate-700/30' : 'hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>相关概念</span>
            </div>
            {expandedSections.has('concept') ? (
              <ChevronUp className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
            ) : (
              <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
            )}
          </button>
          {expandedSections.has('concept') && (
            <div className="px-4 pb-4 space-y-3">
              {concepts.map((concept, i) => (
                <div key={i} className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-700/30' : 'bg-slate-50'}`}>
                  <h5 className={`font-medium mb-1 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                    {concept.title}
                  </h5>
                  <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {concept.explanation}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {concept.keywords.map((kw, j) => (
                      <span key={j} className={`px-2 py-0.5 rounded text-xs ${
                        isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 错误分析（仅答错时显示） */}
        {!isCorrect && mistakes.length > 0 && (
          <div className={`rounded-xl overflow-hidden ${isDarkMode ? 'bg-slate-800/30' : 'bg-white'}`}>
            <button
              onClick={() => toggleSection('mistakes')}
              className={`w-full px-4 py-3 flex items-center justify-between ${
                isDarkMode ? 'hover:bg-slate-700/30' : 'hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className={`w-4 h-4 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>错误分析</span>
              </div>
              {expandedSections.has('mistakes') ? (
                <ChevronUp className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
              ) : (
                <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
              )}
            </button>
            {expandedSections.has('mistakes') && (
              <div className="px-4 pb-4">
                <ul className="space-y-2">
                  {mistakes.map((mistake, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      <span className="text-red-400 mt-0.5">•</span>
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* 学习建议 */}
        <div className={`rounded-xl overflow-hidden ${isDarkMode ? 'bg-slate-800/30' : 'bg-white'}`}>
          <button
            onClick={() => toggleSection('tips')}
            className={`w-full px-4 py-3 flex items-center justify-between ${
              isDarkMode ? 'hover:bg-slate-700/30' : 'hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Target className={`w-4 h-4 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-500'}`} />
              <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>学习建议</span>
            </div>
            {expandedSections.has('tips') ? (
              <ChevronUp className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
            ) : (
              <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
            )}
          </button>
          {expandedSections.has('tips') && (
            <div className="px-4 pb-4">
              <ul className="space-y-2">
                {tips.map((tip, i) => (
                  <li key={i} className={`flex items-start gap-2 text-sm ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    <span className="text-emerald-400 mt-0.5">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 推荐实验室 */}
        <div className={`rounded-xl overflow-hidden ${isDarkMode ? 'bg-slate-800/30' : 'bg-white'}`}>
          <button
            onClick={() => toggleSection('labs')}
            className={`w-full px-4 py-3 flex items-center justify-between ${
              isDarkMode ? 'hover:bg-slate-700/30' : 'hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <ExternalLink className={`w-4 h-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-500'}`} />
              <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>推荐实验</span>
            </div>
            {expandedSections.has('labs') ? (
              <ChevronUp className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
            ) : (
              <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
            )}
          </button>
          {expandedSections.has('labs') && (
            <div className="px-4 pb-4 space-y-2">
              {recommendedLabs.map((lab, i) => (
                <button
                  key={i}
                  onClick={() => onGoToLab?.(lab.id)}
                  className={`w-full p-3 rounded-lg flex items-center justify-between group transition-all ${
                    isDarkMode 
                      ? 'bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30' 
                      : 'bg-purple-50 hover:bg-purple-100 border border-purple-200'
                  }`}
                >
                  <div className="text-left">
                    <div className={`font-medium ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                      {lab.name}
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {lab.reason}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${
                    isDarkMode ? 'text-purple-400 group-hover:translate-x-1' : 'text-purple-500 group-hover:translate-x-1'
                  } transition-transform`} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
