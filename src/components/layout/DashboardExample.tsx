import React, { useState } from 'react';
import { DashboardLayout } from '../layout/DashboardLayout';
import { Code2, Terminal, Bug, Brain } from 'lucide-react';

// ============================================
// 样例展示：指针强制转换 + 链表插入
// 展示新3栏仪表盘布局的完整效果
// ============================================

export const DashboardExample: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // 样例题目1：结构体指针强制转换
  const pointerCastViz = {
    type: 'pointer' as const,
    title: '指针强制转换可视化',
    description: '观察字节数组如何被解释为结构体',
    steps: [
      {
        description: '初始状态：buf数组包含原始字节数据',
        variables: {
          buf: { type: 'array', value: '[0x01, 0x00, 0x00, 0x00, 0xFF]' },
          h: { type: 'pointer', address: '未初始化' }
        },
        memory: [
          { address: '0x1000', value: '0x01' },
          { address: '0x1001', value: '0x00' },
          { address: '0x1002', value: '0x00' },
          { address: '0x1003', value: '0x00' },
          { address: '0x1004', value: '0xFF' }
        ]
      },
      {
        description: '强制转换后：h指向buf的起始地址',
        variables: {
          buf: { type: 'array', value: '[0x01, 0x00, 0x00, 0x00, 0xFF]' },
          h: { type: 'pointer', address: '0x1000' }
        },
        memory: [
          { address: '0x1000', value: '0x01 (type)' },
          { address: '0x1001', value: '0x00' },
          { address: '0x1002', value: '0x00' },
          { address: '0x1003', value: '0x00' },
          { address: '0x1004', value: '0xFF (flags)' }
        ],
        highlight: [0, 4]
      },
      {
        description: '访问h->type：读取4字节作为整数',
        variables: {
          h: { type: 'pointer', address: '0x1000' },
          'h->type': 1,
          'h->flags': 255
        },
        memory: [
          { address: '0x1000', value: '0x01 (type=1)' },
          { address: '0x1001', value: '0x00' },
          { address: '0x1002', value: '0x00' },
          { address: '0x1003', value: '0x00' },
          { address: '0x1004', value: '0xFF (flags=255)' }
        ],
        highlight: [0, 4]
      }
    ]
  };

  // 样例题目2：链表插入
  const linkedListViz = {
    type: 'linkedlist' as const,
    title: '链表插入可视化',
    description: '在链表头部插入新节点',
    steps: [
      {
        description: '初始链表：1 → 2 → 3 → NULL',
        nodes: [
          { value: 1, next: 1 },
          { value: 2, next: 2 },
          { value: 3, next: null }
        ],
        variables: { head: '0x1000', new_node: '0x2000' }
      },
      {
        description: '新节点的next指向原头节点',
        nodes: [
          { value: 'NEW', next: 0 },
          { value: 1, next: 1 },
          { value: 2, next: 2 },
          { value: 3, next: null }
        ],
        highlight: [0, 1],
        variables: { head: '0x1000', new_node: '0x2000', 'new_node->next': '0x1000' }
      },
      {
        description: 'head指向新节点，插入完成',
        nodes: [
          { value: 'NEW', next: 1 },
          { value: 1, next: 2 },
          { value: 2, next: 3 },
          { value: 3, next: null }
        ],
        highlight: [0],
        variables: { head: '0x2000', new_node: '0x2000' }
      }
    ]
  };

  // 中间栏内容 - 代码编辑器
  const centerContent = (
    <div className="code-editor">
      {/* 题目描述 */}
      <div className="question-header">
        <div className="type-badge">
          <Code2 size={14} />
          <span>代码填空</span>
        </div>
        <h2 className="question-title">结构体强制类型转换</h2>
        <p className="question-desc">协议解析常用技巧：将字节数组强制转换为结构体指针</p>
      </div>

      {/* 代码区域 */}
      <div className="code-block">
        <pre className="code-content">
          <code>{`uint8_t buf[] = {0x01, 0x00, 0x00, 0x00, 0xFF};

struct header {
    uint32_t type;   // 4字节
    uint8_t  flags;  // 1字节
};

// 将字节数组强制转换为结构体指针
struct header *h = (struct header ___①)buf;

printf("type = %d\\n", h->type);   // 输出: 1
printf("flags = %d\\n", h->flags); // 输出: 255`}</code>
        </pre>
      </div>

      {/* 答题区域 */}
      <div className="answer-section">
        <label className="answer-label">填写缺失的符号：</label>
        <input 
          type="text" 
          className="answer-input" 
          placeholder="___"
        />
        <button className="submit-btn">
          <Brain size={16} />
          提交答案
        </button>
      </div>

      <style>{`
        .code-editor {
          font-family: 'SF Mono', Monaco, monospace;
        }

        .question-header {
          margin-bottom: 24px;
        }

        .type-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .question-title {
          font-size: 24px;
          font-weight: 700;
          color: ${isDarkMode ? '#f8fafc' : '#1e293b'};
          margin: 0 0 8px 0;
        }

        .question-desc {
          font-size: 14px;
          color: ${isDarkMode ? '#94a3b8' : '#64748b'};
          margin: 0;
        }

        .code-block {
          background: ${isDarkMode ? '#0f172a' : '#f8fafc'};
          border: 1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'};
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 24px;
        }

        .code-content {
          padding: 20px;
          margin: 0;
          font-size: 14px;
          line-height: 1.8;
          color: ${isDarkMode ? '#e2e8f0' : '#334155'};
          overflow-x: auto;
        }

        .answer-section {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px;
          background: ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'};
          border-radius: 12px;
        }

        .answer-label {
          font-size: 14px;
          color: ${isDarkMode ? '#94a3b8' : '#64748b'};
        }

        .answer-input {
          width: 80px;
          padding: 10px 16px;
          border: 2px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'};
          border-radius: 8px;
          background: ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'white'};
          color: ${isDarkMode ? '#e2e8f0' : '#1e293b'};
          font-size: 16px;
          font-family: monospace;
          text-align: center;
        }

        .answer-input:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </div>
  );

  // 右侧栏内容 - 运行监控
  const rightContent = (
    <div className="monitor-panel">
      {/* 预期输出 */}
      <div className="monitor-section">
        <h4 className="section-title">
          <Terminal size={14} />
          预期输出
        </h4>
        <div className="output-preview">
          <div className="output-line">
            <span className="prompt">$</span>
            <span className="command">./program</span>
          </div>
          <div className="output-content">
            type = 1
            flags = 255
          </div>
        </div>
      </div>

      {/* 关键概念 */}
      <div className="monitor-section">
        <h4 className="section-title">
          <Brain size={14} />
          关键概念
        </h4>
        <ul className="concept-list">
          <li>
            <span className="concept-term">强制类型转换</span>
            <span className="concept-desc">改变编译器对内存的解释方式</span>
          </li>
          <li>
            <span className="concept-term">内存对齐</span>
            <span className="concept-desc">结构体成员按对齐规则排列</span>
          </li>
          <li>
            <span className="concept-term">大小端</span>
            <span className="concept-desc">多字节数据的存储顺序</span>
          </li>
        </ul>
      </div>

      {/* 常见错误 */}
      <div className="monitor-section">
        <h4 className="section-title">
          <Bug size={14} />
          常见错误
        </h4>
        <div className="error-item">
          <span className="error-tag">错误</span>
          <span className="error-desc">忽略内存对齐导致解析错误</span>
        </div>
        <div className="error-item">
          <span className="error-tag">警告</span>
          <span className="error-desc">大小端不匹配导致数据错乱</span>
        </div>
      </div>

      <style>{`
        .monitor-panel {
          font-size: 13px;
        }

        .monitor-section {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
        }

        .monitor-section:last-child {
          border-bottom: none;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: ${isDarkMode ? '#64748b' : '#94a3b8'};
          margin: 0 0 12px 0;
        }

        .output-preview {
          background: ${isDarkMode ? '#0f172a' : '#f8fafc'};
          border-radius: 8px;
          padding: 12px;
          font-family: monospace;
        }

        .output-line {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .prompt {
          color: #10b981;
        }

        .command {
          color: ${isDarkMode ? '#94a3b8' : '#64748b'};
        }

        .output-content {
          color: ${isDarkMode ? '#e2e8f0' : '#1e293b'};
          line-height: 1.6;
          white-space: pre-line;
        }

        .concept-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .concept-list li {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 10px 0;
          border-bottom: 1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
        }

        .concept-list li:last-child {
          border-bottom: none;
        }

        .concept-term {
          font-weight: 600;
          color: ${isDarkMode ? '#e2e8f0' : '#1e293b'};
        }

        .concept-desc {
          font-size: 12px;
          color: ${isDarkMode ? '#94a3b8' : '#64748b'};
        }

        .error-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 0;
        }

        .error-tag {
          padding: 2px 8px;
          background: ${isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)'};
          color: #ef4444;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
        }

        .error-desc {
          color: ${isDarkMode ? '#94a3b8' : '#64748b'};
          font-size: 12px;
        }
      `}</style>
    </div>
  );

  return (
    <div className="example-container">
      {/* 主题切换 */}
      <div className="theme-toggle">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="theme-btn"
        >
          {isDarkMode ? 'Sun️ 浅色模式' : 'Moon 深色模式'}
        </button>
      </div>

      {/* 3栏仪表盘布局 */}
      <DashboardLayout
        title="结构体强制类型转换"
        difficulty={4}
        type="代码填空"
        isDarkMode={isDarkMode}
        centerContent={centerContent}
        rightContent={rightContent}
      />

      <style>{`
        .example-container {
          height: 100vh;
        }

        .theme-toggle {
          position: fixed;
          top: 80px;
          right: 24px;
          z-index: 200;
        }

        .theme-btn {
          padding: 8px 16px;
          background: ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'};
          border: none;
          border-radius: 20px;
          color: ${isDarkMode ? '#e2e8f0' : '#475569'};
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .theme-btn:hover {
          background: ${isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)'};
        }
      `}</style>
    </div>
  );
};

export default DashboardExample;
