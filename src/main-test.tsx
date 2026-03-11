import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// 简单测试组件
function TestApp() {
  return (
    <div style={{ padding: '20px', color: '#fff', background: '#0a0e17', minHeight: '100vh' }}>
      <h1>CheckCircle React 正常渲染！</h1>
      <p>时间：{new Date().toLocaleString()}</p>
      <p>如果看到这个页面，说明 React 和 CSS 都正常工作</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TestApp />
  </StrictMode>
);
