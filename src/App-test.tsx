// 简化的 App - 用于诊断问题
import { useState, useEffect } from 'react';
import './index.css';

export function App() {
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      console.log('App 开始加载');
      setLoaded(true);
      console.log('App 加载完成');
    } catch (e) {
      console.error('App 加载错误:', e);
      setError(String(e));
    }
  }, []);

  if (error) {
    return (
      <div style={{ padding: '20px', color: '#ff6b6b', background: '#1a1a1a', minHeight: '100vh' }}>
        <h1>XCircle 错误</h1>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{error}</pre>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', color: '#fff', background: '#0a0e17', minHeight: '100vh' }}>
      <h1>CheckCircle App 正常加载！</h1>
      <p>加载状态：{loaded ? '已加载' : '未加载'}</p>
      <p>时间：{new Date().toLocaleString()}</p>
    </div>
  );
}
