import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { Settings, Check, X, Loader2, TestTube, ChevronDown, ChevronUp, RefreshCw, MessageSquare } from 'lucide-react';
import {
  loadAIConfig,
  saveAIConfig,
  testAIProvider,
  getSupportedModels,
  type AIProviderConfig,
  type AIProviderTestResult,
  type AIModel
} from '../services/aiConfigService';
import { AIPromptConfigPanel } from '../ai/AIPromptConfigPanel';

interface AIConfigPanelProps {
  isDarkMode: boolean;
  onClose: () => void;
}

export const AIConfigPanel = memo(function AIConfigPanel({ isDarkMode, onClose }: AIConfigPanelProps) {
  const [providers, setProviders] = useState<AIProviderConfig[]>([]);
  const [selectedId, setSelectedId] = useState<string>('deepseek');
  const [testingProvider, setTestingProvider] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<Record<string, AIProviderTestResult>>({});
  const [expanded, setExpanded] = useState(false);
  const [editForm, setEditForm] = useState<Partial<AIProviderConfig>>({});
  const [availableModels, setAvailableModels] = useState<AIModel[]>([]);
  const [loadingModels, setLoadingModels] = useState(false);
  const [showPromptConfig, setShowPromptConfig] = useState(false);

  useEffect(() => {
    const configs = loadAIConfig();
    setProviders(configs);
    // 默认选中第一个启用的提供商
    const defaultProvider = configs.find(p => p.enabled && p.isDefault) || configs[0];
    if (defaultProvider) {
      setSelectedId(defaultProvider.id);
      // 加载可用模型列表
      loadModels(defaultProvider);
    }
  }, []);

  const selectedProvider = useMemo(() => providers.find(p => p.id === selectedId), [providers, selectedId]);

  const loadModels = useCallback(async (provider: AIProviderConfig) => {
    if (!provider.apiKey) return;
    
    setLoadingModels(true);
    try {
      const result = await getSupportedModels(provider);
      if (result.success && result.models) {
        setAvailableModels(result.models);
      }
    } catch (error) {
      console.error('Failed to load models:', error);
    } finally {
      setLoadingModels(false);
    }
  }, []);

  const handleTestProvider = useCallback(async (provider: AIProviderConfig) => {
    setTestingProvider(provider.id);
    const result = await testAIProvider(provider);
    setTestResults(prev => ({ ...prev, [provider.id]: result }));
    setTestingProvider(null);
  }, []);

  const handleSaveProvider = useCallback(() => {
    if (!selectedProvider) return;

    const updated = providers.map(p => {
      if (p.id === selectedProvider.id) {
        return { ...p, ...editForm } as AIProviderConfig;
      }
      return p;
    });

    setProviders(updated);
    saveAIConfig(updated);
    setExpanded(false);
    setEditForm({});
  }, [selectedProvider, providers, editForm]);

  const handleToggleProvider = useCallback((providerId: string) => {
    const updated = providers.map(p => {
      if (p.id === providerId) {
        return { ...p, enabled: !p.enabled };
      }
      return p;
    });

    setProviders(updated);
    saveAIConfig(updated);
  }, [providers]);

  const handleSetDefault = useCallback((providerId: string) => {
    const updated = providers.map(p => ({
      ...p,
      isDefault: p.id === providerId
    }));

    setProviders(updated);
    saveAIConfig(updated);
  }, [providers]);

  const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedId = e.target.value;
    setSelectedId(newSelectedId);

    // 自动启用并设为默认
    const updated = providers.map(p => ({
      ...p,
      enabled: p.id === newSelectedId,
      isDefault: p.id === newSelectedId
    }));

    setProviders(updated);
    saveAIConfig(updated);

    // 加载新选中提供商的模型列表
    const newProvider = updated.find(p => p.id === newSelectedId);
    if (newProvider) {
      loadModels(newProvider);
    }
  }, [providers, loadModels]);

  if (!selectedProvider) {
    return null;
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'} border-t shadow-2xl`}>
      <div className="p-4 max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Settings className={`w-5 h-5 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
            <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              AI 模型配置
            </h2>
          </div>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Select */}
        <div className="mb-4">
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            选择 AI 提供商
          </label>
          <select
            value={selectedId}
            onChange={handleSelectChange}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm font-medium ${
              isDarkMode 
                ? 'bg-slate-800 border-slate-600 text-white focus:border-cyan-500' 
                : 'bg-white border-slate-300 text-slate-800 focus:border-cyan-600'
            } focus:outline-none focus:ring-2 focus:ring-cyan-500/20`}
          >
            {providers.map(provider => (
              <option key={provider.id} value={provider.id}>
                {provider.name} - {provider.model} {provider.enabled && provider.isDefault ? '(当前使用)' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Single Provider Card */}
        <div
          className={`rounded-xl border transition-all ${
            isDarkMode 
              ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' 
              : 'bg-slate-50 border-slate-200 hover:border-slate-300'
          } ${selectedProvider.enabled && selectedProvider.isDefault ? 'ring-2 ring-cyan-500' : ''}`}
        >
          {/* Card Header */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-2.5 h-2.5 rounded-full ${selectedProvider.enabled ? 'bg-green-500' : 'bg-slate-400'}`} />
                <div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                    {selectedProvider.name}
                  </h3>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {selectedProvider.model}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {selectedProvider.isDefault && selectedProvider.enabled && (
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-700'}`}>
                    默认
                  </span>
                )}
                {testResults[selectedProvider.id] && (
                  <span className={`text-xs px-2 py-1 rounded ${
                    testResults[selectedProvider.id].success 
                      ? isDarkMode ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'
                      : isDarkMode ? 'bg-red-500/20 text-red-300' : 'bg-red-100 text-red-700'
                  }`}>
                    {testResults[selectedProvider.id].success ? 'Check' : 'X'}
                  </span>
                )}
                
                <button
                  onClick={() => setShowPromptConfig(true)}
                  className={`p-1 rounded transition-colors ${
                    isDarkMode
                      ? 'hover:bg-purple-900/30 text-purple-400'
                      : 'hover:bg-purple-100 text-purple-600'
                  }`}
                  title="配置提示词"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className={`p-1 rounded transition-colors ${isDarkMode ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-200 text-slate-500'}`}
                >
                  {expanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Status */}
            <div className={`mt-3 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <div>API Key: {selectedProvider.apiKey ? '••••••••' : <span className="text-red-400">未配置</span>}</div>
              {testResults[selectedProvider.id] && (
                <div className={`text-xs mt-1 ${
                  testResults[selectedProvider.id].success 
                    ? isDarkMode ? 'text-green-400' : 'text-green-600'
                    : isDarkMode ? 'text-red-400' : 'text-red-600'
                }`}>
                  {testResults[selectedProvider.id].message}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <button
                onClick={() => handleTestProvider(selectedProvider)}
                disabled={testingProvider === selectedProvider.id || !selectedProvider.apiKey}
                className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 disabled:bg-slate-500 text-white text-xs font-medium transition-colors flex items-center gap-1"
              >
                {testingProvider === selectedProvider.id ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <TestTube className="w-3 h-3" />
                )}
                测试连接
              </button>
              
              <button
                onClick={() => handleToggleProvider(selectedProvider.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedProvider.enabled 
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-slate-300' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                }`}
              >
                {selectedProvider.enabled ? '禁用' : '启用'}
              </button>
              
              {!selectedProvider.isDefault && (
                <button
                  onClick={() => handleSetDefault(selectedProvider.id)}
                  disabled={!selectedProvider.enabled}
                  className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-500 text-white text-xs font-medium transition-colors"
                >
                  设为默认
                </button>
              )}
            </div>
          </div>

          {/* Expanded Content */}
          {expanded && (
            <div className={`px-4 pb-4 border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
              <div className="grid grid-cols-1 gap-3 mt-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className={`block text-xs font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      模型
                    </label>
                    <button
                      onClick={() => loadModels(selectedProvider)}
                      disabled={loadingModels || !selectedProvider.apiKey}
                      className={`p-1 rounded transition-colors ${
                        isDarkMode 
                          ? 'hover:bg-slate-700 text-slate-400 disabled:opacity-50' 
                          : 'hover:bg-slate-200 text-slate-500 disabled:opacity-50'
                      }`}
                      title="刷新模型列表"
                    >
                      <RefreshCw className={`w-3 h-3 ${loadingModels ? 'animate-spin' : ''}`} />
                    </button>
                  </div>
                  {availableModels.length > 0 ? (
                    <select
                      value={editForm.model || selectedProvider.model}
                      onChange={(e) => setEditForm({ ...editForm, model: e.target.value })}
                      className={`w-full px-3 py-2 rounded-lg border text-sm ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-slate-300 text-slate-800'
                      }`}
                    >
                      {availableModels.map(model => (
                        <option key={model.id} value={model.id}>
                          {model.name} {model.description ? `- ${model.description}` : ''}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={editForm.model || selectedProvider.model}
                      onChange={(e) => setEditForm({ ...editForm, model: e.target.value })}
                      className={`w-full px-3 py-2 rounded-lg border text-sm ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-slate-300 text-slate-800'
                      }`}
                      placeholder={loadingModels ? "加载中..." : "输入模型名称"}
                    />
                  )}
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    API Key
                  </label>
                  <input
                    type="password"
                    value={editForm.apiKey || selectedProvider.apiKey}
                    onChange={(e) => setEditForm({ ...editForm, apiKey: e.target.value })}
                    className={`w-full px-3 py-2 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-800'}`}
                    placeholder="sk-..."
                  />
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Base URL
                  </label>
                  <input
                    type="url"
                    value={editForm.baseUrl || selectedProvider.baseUrl}
                    onChange={(e) => setEditForm({ ...editForm, baseUrl: e.target.value })}
                    className={`w-full px-3 py-2 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-800'}`}
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-3">
                <button
                  onClick={handleSaveProvider}
                  className="px-4 py-1.5 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition-colors flex items-center gap-1"
                >
                  <Check className="w-4 h-4" />
                  保存
                </button>
                <button
                  onClick={() => { setExpanded(false); setEditForm({}); }}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-slate-300' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'}`}
                >
                  取消
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className={`mt-4 p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-blue-500/10 border-blue-500/30 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
          <strong>提示：</strong>切换后会自动保存并启用，无需额外操作。
        </div>
      </div>

      {/* 提示词配置面板 */}
      {showPromptConfig && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <AIPromptConfigPanel
            isDarkMode={isDarkMode}
            onSave={(prompt) => {
              console.log('提示词已保存:', prompt);
              setShowPromptConfig(false);
            }}
            onClose={() => setShowPromptConfig(false)}
          />
        </div>
      )}
    </div>
  );
});

export default AIConfigPanel;
