import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { Save, RotateCcw, MessageSquare, Check, X } from 'lucide-react';
import {
  PROMPT_TEMPLATES,
  PromptTemplate,
  getTemplateById
} from '../utils/promptTemplates';
import {
  generatePrompt,
  PromptConfig,
  GeneratedPrompt,
  savePromptConfig,
  loadPromptConfig,
  getDefaultConfig
} from '../utils/promptGenerator';

interface AIPromptConfigPanelProps {
  isDarkMode?: boolean;
  onSave?: (prompt: string) => void;
  onClose?: () => void;
}

export const AIPromptConfigPanel = memo(function AIPromptConfigPanel({
  isDarkMode = false,
  onSave,
  onClose
}: AIPromptConfigPanelProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('concise');
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [generatedPrompt, setGeneratedPrompt] = useState<GeneratedPrompt | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // 加载保存的配置
  useEffect(() => {
    const savedConfig = loadPromptConfig();
    if (savedConfig) {
      setSelectedTemplate(savedConfig.templateId);
      setCustomPrompt(savedConfig.customPrompt || '');
    }
  }, []);

  // 生成提示词
  useEffect(() => {
    try {
      const config: PromptConfig = {
        templateId: selectedTemplate,
        customPrompt: customPrompt || undefined
      };
      const generated = generatePrompt(config);
      setGeneratedPrompt(generated);
    } catch (error) {
      console.error('生成提示词失败:', error);
    }
  }, [selectedTemplate, customPrompt]);

  const handleSave = useCallback(() => {
    if (!generatedPrompt) return;

    const config: PromptConfig = {
      templateId: selectedTemplate,
      customPrompt: customPrompt || undefined
    };

    savePromptConfig(config);
    setIsSaved(true);

    // 通知父组件
    if (onSave) {
      onSave(generatedPrompt.systemPrompt);
    }

    // 2 秒后关闭保存成功提示
    setTimeout(() => setIsSaved(false), 2000);
  }, [generatedPrompt, selectedTemplate, customPrompt, onSave]);

  const handleReset = useCallback(() => {
    const defaultConfig = getDefaultConfig();
    setSelectedTemplate(defaultConfig.templateId);
    setCustomPrompt('');
    setIsEditing(false);
  }, []);

  const handleTemplateSelect = useCallback((templateId: string) => {
    setSelectedTemplate(templateId);
    setCustomPrompt('');
    setIsEditing(false);
  }, []);

  const template = useMemo(() => getTemplateById(selectedTemplate), [selectedTemplate]);

  return (
    <div className={`w-full max-w-4xl ${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg shadow-lg`}>
      {/* 头部 */}
      <div className={`px-6 py-4 border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className={`w-5 h-5 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              AI 提示词配置
            </h2>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className={`p-1 rounded hover:bg-slate-100 ${isDarkMode ? 'hover:bg-slate-700' : ''}`}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* 内容区域 */}
      <div className="p-6">
        {/* 模板选择 */}
        <div className="mb-6">
          <h3 className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            选择提示词模板
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {PROMPT_TEMPLATES.map((t) => (
              <div
                key={t.id}
                onClick={() => handleTemplateSelect(t.id)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedTemplate === t.id
                    ? isDarkMode
                      ? 'border-purple-500 bg-purple-900/20'
                      : 'border-purple-500 bg-purple-50'
                    : isDarkMode
                    ? 'border-slate-600 hover:border-slate-500'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                    {t.name}
                  </h4>
                  {selectedTemplate === t.id && (
                    <Check className={`w-4 h-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  )}
                </div>
                <p className={`text-xs mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {t.description}
                </p>
                <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                  Pin {t.scenario}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 预览区域 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              提示词预览
            </h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`text-xs px-3 py-1 rounded ${
                isEditing
                  ? isDarkMode
                    ? 'bg-slate-700 text-white'
                    : 'bg-slate-200 text-slate-700'
                  : isDarkMode
                  ? 'bg-purple-900/30 text-purple-400'
                  : 'bg-purple-100 text-purple-600'
              }`}
            >
              {isEditing ? '取消编辑' : '自定义编辑'}
            </button>
          </div>
          
          {isEditing ? (
            <textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              className={`w-full h-64 px-4 py-3 rounded-lg border font-mono text-sm ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-600 text-white'
                  : 'bg-white border-slate-300 text-slate-800'
              }`}
              placeholder="输入自定义提示词..."
            />
          ) : (
            <div
              className={`w-full h-64 px-4 py-3 rounded-lg border font-mono text-sm overflow-auto ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-600 text-slate-300'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <pre className="whitespace-pre-wrap">{generatedPrompt?.systemPrompt}</pre>
            </div>
          )}
        </div>

        {/* 信息提示 */}
        {template && !isEditing && (
          <div className={`mb-6 p-4 rounded-lg ${
            isDarkMode ? 'bg-blue-900/20 border-blue-800' : 'bg-blue-50 border-blue-200'
          } border`}>
            <p className={`text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              <strong>当前模板：</strong>{template.name} - {template.description}
            </p>
          </div>
        )}

        {/* 操作按钮 */}
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            保存配置
          </button>
          
          {isSaved && (
            <div className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'
            }`}>
              <Check className="w-4 h-4" />
              <span>已保存</span>
            </div>
          )}

          <button
            onClick={handleReset}
            className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
              isDarkMode
                ? 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            重置
          </button>
        </div>
      </div>
    </div>
  );
});

export default AIPromptConfigPanel;
