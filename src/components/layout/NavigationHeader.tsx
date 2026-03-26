import React from 'react';
import { Sun, Moon, Search, Bell, User, Menu, X } from 'lucide-react';

interface NavigationHeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  breadcrumb?: string[];
  progressPercent?: number;
  showProgress?: boolean;
  onMenuClick?: () => void;
  isSidebarOpen?: boolean;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  isDarkMode,
  onToggleTheme,
  breadcrumb = [],
  progressPercent = 0,
  showProgress = false,
  onMenuClick,
  isSidebarOpen,
}) => {
  return (
    <header
      className="sticky top-0 z-50 h-16 flex items-center justify-between px-4 lg:px-6"
      style={{
        background: isDarkMode
          ? 'rgba(17, 24, 39, 0.8)'
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
      }}
    >
      <div className="flex items-center gap-4">
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}

        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-sm">
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <span className="text-slate-400 dark:text-slate-500">/</span>
                )}
                <span
                  className={
                    index === breadcrumb.length - 1
                      ? isDarkMode
                        ? 'text-white font-medium'
                        : 'text-slate-800 font-medium'
                      : isDarkMode
                        ? 'text-slate-400'
                        : 'text-slate-500'
                  }
                >
                  {item}
                </span>
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>

      <div className="flex items-center gap-2">
        {showProgress && (
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg className="w-10 h-10 transform -rotate-90">
              <circle
                cx="20"
                cy="20"
                r="16"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-slate-200 dark:text-slate-700"
              />
              <circle
                cx="20"
                cy="20"
                r="16"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeDasharray={`${(progressPercent / 100) * 100} 100`}
                className="text-emerald-500"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-xs font-medium">
              {progressPercent}%
            </span>
          </div>
        )}

        <button
          onClick={onToggleTheme}
          className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          style={{
            transform: 'rotate(0deg)',
            transition: 'transform 0.3s ease, background 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(180deg)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')}
          aria-label={isDarkMode ? '切换到亮色模式' : '切换到深色模式'}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors relative"
          aria-label="通知"
        >
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <button
          className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          aria-label="用户设置"
        >
          <User size={20} />
        </button>
      </div>
    </header>
  );
};

export default NavigationHeader;
