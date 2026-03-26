import React from 'react';
import { Home, BookOpen, Target, Code2, BarChart3, Trophy, Settings } from 'lucide-react';
import { CollapsibleSidebar } from './CollapsibleSidebar';

interface SidebarIntegrationProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
  streak?: number;
}

export const SidebarIntegration: React.FC<SidebarIntegrationProps> = ({
  isDarkMode,
  onToggleTheme,
  currentView,
  onNavigate,
  streak = 0,
}) => {
  return (
    <CollapsibleSidebar
      isDarkMode={isDarkMode}
      onToggleTheme={onToggleTheme}
      currentView={currentView}
      onNavigate={onNavigate}
      streak={streak}
    />
  );
};

export default SidebarIntegration;
