import React, { useState } from 'react';
import {
  BookOpen,
  BarChart3,
  Trophy,
  Settings,
  ChevronLeft,
  ChevronRight,
  Flame,
  Sun,
  Moon,
  Home,
  Target,
  Code2,
  GraduationCap,
} from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  id: string;
}

interface NavGroup {
  title?: string;
  items: NavItem[];
}

interface CollapsibleSidebarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
  streak?: number;
}

const navGroups: NavGroup[] = [
  {
    items: [
      { icon: <Home size={20} />, label: '首页', id: 'home' },
      { icon: <BookOpen size={20} />, label: '基础学习', id: 'learning' },
      { icon: <Target size={20} />, label: '专项训练', id: 'training' },
      { icon: <Code2 size={20} />, label: '实战项目', id: 'projects' },
    ],
  },
  {
    title: '统计',
    items: [
      { icon: <BarChart3 size={20} />, label: '学习统计', id: 'stats' },
      { icon: <Trophy size={20} />, label: '成就中心', id: 'achievements' },
    ],
  },
  {
    title: '设置',
    items: [
      { icon: <Settings size={20} />, label: '偏好设置', id: 'settings' },
    ],
  },
];

export const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({
  isDarkMode,
  onToggleTheme,
  currentView,
  onNavigate,
  streak = 0,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const sidebarWidth = collapsed ? 'w-16' : 'w-70';

  const getFlameDisplay = () => {
    if (streak === 0) return null;
    if (streak < 7) return '🔥';
    if (streak < 14) return '🔥🔥';
    if (streak < 30) return '🔥🔥🔥';
    return '🔥🔥🔥✨';
  };

  return (
    <aside
      className={`${sidebarWidth} min-h-screen flex flex-col border-r transition-all duration-300 ease-in-out`}
      style={{
        background: isDarkMode ? '#111827' : '#ffffff',
        borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        width: collapsed ? '64px' : '280px',
      }}
    >
      {/* Logo Area */}
      <div
        className="h-16 flex items-center justify-center gap-3 border-b"
        style={{
          borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
          background: isDarkMode ? '#0a0e1a' : '#f8fafc',
        }}
      >
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-lg"
          style={{
            background: 'linear-gradient(135deg, #3b7bf6, #8b5cf6)',
            color: 'white',
            textShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
          }}
        >
          {'</>'}
        </div>
        {!collapsed && (
          <span
            className="font-semibold text-base whitespace-nowrap"
            style={{ color: isDarkMode ? '#f1f5f9' : '#0f172a' }}
          >
            C语言训练器
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {navGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-4">
            {group.title && !collapsed && (
              <div
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                style={{
                  color: isDarkMode ? '#64748b' : '#94a3b8',
                }}
              >
                {group.title}
              </div>
            )}
            <div className="space-y-1 px-2">
              {group.items.map((item) => {
                const isActive = currentView === item.id;
                const isHovered = hoveredItem === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="w-full flex items-center gap-3 h-10 px-3 rounded-lg transition-all duration-200 relative"
                    style={{
                      background: isActive
                        ? 'rgba(59, 130, 246, 0.1)'
                        : isHovered
                          ? 'rgba(255,255,255,0.05)'
                          : 'transparent',
                      color: isActive
                        ? '#60a5fa'
                        : isHovered
                          ? isDarkMode
                            ? '#f1f5f9'
                            : '#0f172a'
                          : isDarkMode
                            ? '#94a3b8'
                            : '#64748b',
                    }}
                  >
                    {/* Active indicator */}
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full transition-all duration-200"
                      style={{
                        height: isActive || isHovered ? '24px' : '0px',
                        background: '#3b7bf6',
                      }}
                    />

                    <span className="flex-shrink-0">{item.icon}</span>
                    {!collapsed && (
                      <span className="text-sm font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Streak Display */}
      {!collapsed && streak > 0 && (
        <div
          className="mx-3 mb-3 p-3 rounded-lg text-center"
          style={{
            background: isDarkMode ? 'rgba(245, 158, 11, 0.1)' : 'rgba(245, 158, 11, 0.1)',
            border: `1px solid ${isDarkMode ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.2)'}`,
          }}
        >
          <div className="text-2xl mb-1">{getFlameDisplay()}</div>
          <div
            className="text-xs font-medium"
            style={{ color: isDarkMode ? '#fbbf24' : '#d97706' }}
          >
            连续学习{streak}天
          </div>
        </div>
      )}

      {/* Bottom Controls */}
      <div
        className="border-t p-3 space-y-2"
        style={{
          borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        }}
      >
        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          className="w-full flex items-center justify-center gap-2 h-10 rounded-lg transition-all duration-200 hover:bg-slate-200 dark:hover:bg-slate-700"
          style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}
        >
          <span
            style={{
              transform: 'rotate(0deg)',
              transition: 'transform 0.5s ease',
            }}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </span>
          {!collapsed && (
            <span className="text-sm">
              {isDarkMode ? '亮色模式' : '深色模式'}
            </span>
          )}
        </button>

        {/* Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 h-10 rounded-lg transition-all duration-200 hover:bg-slate-200 dark:hover:bg-slate-700"
          style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          {!collapsed && <span className="text-sm">收起</span>}
        </button>
      </div>
    </aside>
  );
};

export default CollapsibleSidebar;
