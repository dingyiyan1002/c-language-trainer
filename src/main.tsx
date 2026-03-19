import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { ErrorBoundary } from "./components/layout/ErrorBoundary";
import { App } from "./App";
import "./index.css";

// 性能监控 - 仅在开发环境启用
if (import.meta.env.DEV) {
  import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
    const reportMetric = (metric: any) => {
      console.log(`[Web Vitals] ${metric.name}:`, {
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        navigationType: metric.navigationType,
      });
    };

    onCLS(reportMetric);
    onFCP(reportMetric);
    onLCP(reportMetric);
    onTTFB(reportMetric);
    onINP?.(reportMetric);
  }).catch((err) => {
    console.error('[Web Vitals] 加载失败:', err);
  });
}

// 全局错误监听 - 捕获未处理的 Promise 拒绝
window.addEventListener('unhandledrejection', (event) => {
  console.error('[Global] 未处理的 Promise 拒绝:', event.reason);
  // 不阻止默认行为，让错误继续传播
});

// 全局错误监听 - 捕获运行时错误
window.addEventListener('error', (event) => {
  console.error('[Global] 运行时错误:', {
    message: event.message,
    source: event.filename,
    line: event.lineno,
    column: event.colno,
    error: event.error
  });
});

// 初始化 React 应用
function initApp() {
  const container = document.getElementById("root");

  if (!container) {
    console.error('[Init] 找不到 #root 元素，使用备用方案');
    // 创建备用容器
    const fallbackContainer = document.createElement('div');
    fallbackContainer.id = 'root';
    fallbackContainer.style.cssText = 'min-height:100vh;display:flex;align-items:center;justify-center;background:#0f172a;color:#fff;font-family:system-ui';
    fallbackContainer.innerHTML = '<div style="text-align:center;padding:20px"><h1>初始化失败</h1><p>无法找到根容器元素</p></div>';
    document.body.appendChild(fallbackContainer);
    return;
  }

  // 检查是否有内容
  if (!container.hasChildNodes() && container.parentElement?.tagName === 'BODY') {
    console.log('[Init] 首次加载，正常渲染');
  }

  let root: Root | null = null;

  try {
    root = createRoot(container);
    root.render(
      <ErrorBoundary>
        <StrictMode>
          <App />
        </StrictMode>
      </ErrorBoundary>
    );
    console.log('[Init] React 应用初始化成功');
  } catch (error) {
    console.error('[Init] React 初始化失败:', error);
    // 降级处理：显示错误信息
    container.innerHTML = `
      <div style="min-height:100vh;display:flex;align-items:center;justify-center;background:#0f172a;color:#fff;font-family:system-ui;padding:20px">
        <div style="max-width:500px;text-align:center">
          <h2 style="color:#ef4444;margin-bottom:16px">应用初始化失败</h2>
          <p style="color:#94a3b8;margin-bottom:16px">${error instanceof Error ? error.message : '未知错误'}</p>
          <button onclick="window.location.reload()" style="padding:8px 16px;background:#10b981;color:#fff;border:none;border-radius:6px;cursor:pointer">刷新页面</button>
        </div>
      </div>
    `;
  }
}

// DOM 准备就绪后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp, { once: true });
} else {
  initApp();
}

// 页面卸载时清理
window.addEventListener('beforeunload', () => {
  console.log('[App] 页面卸载，清理资源...');
});
