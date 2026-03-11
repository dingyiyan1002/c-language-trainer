/**
 * UI 优化组件 - 现代化设计系统
 * 包含优化后的 Header、Button、Card 等组件
 */

import React from 'react';
import { Sun, Moon, Home, FolderOpen, BarChart3, Zap, Keyboard, Terminal } from 'lucide-react';

// 现代化的 Header 组件
interface OptimizedHeaderProps {
  view: string;
  setView: (v: string) => void;
  progress: { completed: any[]; correct: any[] };
  isDarkMode: boolean;
  toggleTheme: () => void;
  backendAlive: boolean;
}

export function OptimizedHeader({
  view,
  setView,
  progress,
  isDarkMode,
  toggleTheme,
  backendAlive
}: OptimizedHeaderProps) {
  const accuracy = progress.completed.length > 0
    ? Math.round((progress.correct.length / progress.completed.length) * 100)
    : 0;

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${isDarkMode ? 'bg-slate-900/60 border-white/10' : 'bg-white/70 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo 区域 */}
        <button
          onClick={() => setView('home')}
          className="flex items-center gap-3 group"
        >
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover:shadow-emerald-500/30 group-hover:scale-105 ${isDarkMode ? 'bg-gradient-to-br from-emerald-500 to-cyan-600' : 'bg-gradient-to-br from-emerald-500 to-cyan-600'}`}>
            <Terminal className="w-6 h-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <h1 className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-800'} transition-colors`}>
              C 语言思维训练器
            </h1>
            <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>硬核代码训练</p>
          </div>
          {/* 后端状态指示器 */}
          <div className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full ${isDarkMode ? 'bg-slate-800/60' : 'bg-slate-100'}`} title={backendAlive ? 'GCC 后端已连接' : 'GCC 后端未连接'}>
            <div className={`w-2.5 h-2.5 rounded-full ${backendAlive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
            <span className={`text-xs font-medium ${backendAlive ? 'text-green-500' : 'text-red-500'}`}>
              {backendAlive ? 'GCC 已连接' : '离线模式'}
            </span>
          </div>
        </button>

        {/* 导航区域 */}
        <nav className="flex items-center gap-2">
          {/* 主题切换按钮 */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl transition-all duration-200 ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-200'}`}
            title={isDarkMode ? '切换到浅色模式' : '切换到深色模式'}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* 分隔线 */}
          <div className={`w-px h-6 mx-1 ${isDarkMode ? 'bg-white/10' : 'bg-slate-300'}`} />

          {/* 导航按钮 */}
          <NavItem
            icon={<Home className="w-4 h-4" />}
            label="首页"
            active={view === 'home'}
            onClick={() => setView('home')}
            color="emerald"
            isDarkMode={isDarkMode}
          />
          <NavItem
            icon={<FolderOpen className="w-4 h-4" />}
            label="项目"
            active={view === 'projects' || view === 'project'}
            onClick={() => setView('projects')}
            color="emerald"
            isDarkMode={isDarkMode}
          />
          <NavItem
            icon={<BarChart3 className="w-4 h-4" />}
            label="统计"
            active={view === 'stats'}
            onClick={() => setView('stats')}
            color="emerald"
            badge={progress.completed.length > 0 ? `${accuracy}%` : undefined}
            isDarkMode={isDarkMode}
          />
          <NavItem
            icon={<Zap className="w-4 h-4" />}
            label="实验室"
            active={view === 'lab'}
            onClick={() => setView('lab')}
            color="purple"
            isDarkMode={isDarkMode}
          />
          <NavItem
            icon={<Keyboard className="w-4 h-4" />}
            label="跟打"
            active={view === 'typing'}
            onClick={() => setView('typing')}
            color="cyan"
            isDarkMode={isDarkMode}
          />
        </nav>
      </div>
    </header>
  );
}

// 导航项组件
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  color: 'emerald' | 'purple' | 'cyan';
  badge?: string;
  isDarkMode: boolean;
}

function NavItem({ icon, label, active, onClick, color, badge, isDarkMode }: NavItemProps) {
  const colorClasses = {
    emerald: active ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20' : '',
    purple: active ? 'bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/20' : '',
    cyan: active ? 'bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20' : ''
  };

  const hoverClass = isDarkMode
    ? 'text-slate-400 hover:text-white hover:bg-white/5'
    : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100';

  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
        active ? colorClasses[color] : hoverClass
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      {badge && (
        <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-medium ${
          color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
          color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
          'bg-cyan-500/20 text-cyan-400'
        }`}>
          {badge}
        </span>
      )}
    </button>
  );
}

// 现代化卡片组件
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'accent';
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', variant = 'default', hover = false, onClick }: CardProps) {
  const baseClasses = 'rounded-2xl transition-all duration-300';

  const variantClasses = {
    default: 'bg-white/5 border border-white/10',
    elevated: 'bg-white/8 border border-white/15 shadow-xl',
    accent: 'bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30'
  };

  const hoverClasses = hover
    ? 'hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-500/40'
    : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// 现代化按钮组件
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30',
    ghost: 'text-slate-400 hover:text-white hover:bg-white/5'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}

// 徽章组件
export interface BadgeProps {
  children: React.ReactNode;
  color?: 'emerald' | 'purple' | 'cyan' | 'red' | 'amber';
  className?: string;
}

export function Badge({ children, color = 'emerald', className = '' }: BadgeProps) {
  const colorClasses = {
    emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    purple: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    red: 'bg-red-500/15 text-red-400 border-red-500/30',
    amber: 'bg-amber-500/15 text-amber-400 border-amber-500/30'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorClasses[color]} ${className}`}>
      {children}
    </span>
  );
}

// 输入框组件
export interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string;
  disabled?: boolean;
}

export function Input({ value, onChange, placeholder, className = '', type = 'text', disabled = false }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 disabled:opacity-50 ${className}`}
    />
  );
}
