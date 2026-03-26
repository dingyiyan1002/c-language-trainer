import React from 'react';
import { BookOpen, Code, Brain, Loader2 } from 'lucide-react';

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', style }) => (
  <div
    className={`skeleton-liquid ${className}`}
    style={style}
  />
);

export const CardSkeleton: React.FC = () => (
  <div className="rounded-xl p-5 space-y-4">
    <div className="flex items-center gap-3">
      <Skeleton className="w-10 h-10 rounded-lg" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
    <Skeleton className="h-20 w-full rounded-lg" />
    <div className="flex justify-between items-center">
      <Skeleton className="h-3 w-1/4" />
      <Skeleton className="h-8 w-20 rounded-full" />
    </div>
  </div>
);

export const ListSkeleton: React.FC<{ count?: number }> = ({ count = 5 }) => (
  <div className="space-y-3">
    {Array.from({ length: count }, (_, i) => (
      <div key={i} className="flex items-center gap-3 p-3 rounded-lg">
        <Skeleton className="w-8 h-8 rounded" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-2 w-2/3" />
        </div>
      </div>
    ))}
  </div>
);

export const CodeBlockSkeleton: React.FC = () => (
  <div className="rounded-xl overflow-hidden">
    <div className="bg-slate-800/50 px-4 py-2 flex items-center gap-2">
      <Skeleton className="w-3 h-3 rounded-full" />
      <Skeleton className="w-3 h-3 rounded-full" />
      <Skeleton className="w-3 h-3 rounded-full" />
      <Skeleton className="h-3 w-20 ml-2" />
    </div>
    <div className="p-4 space-y-2">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-4 flex-1" style={{ width: `${60 + Math.random() * 40}%` }} />
        </div>
      ))}
    </div>
  </div>
);

export const QuestionSkeleton: React.FC = () => (
  <div className="space-y-6">
    <div className="space-y-2">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
    <CodeBlockSkeleton />
    <div className="space-y-3">
      {Array.from({ length: 4 }, (_, i) => (
        <Skeleton key={i} className="h-12 w-full rounded-lg" />
      ))}
    </div>
  </div>
);

type EmptyStateType = 'no-content' | 'no-results' | 'error' | 'loading';

interface EmptyStateProps {
  type?: EmptyStateType;
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const defaultContent: Record<EmptyStateType, { icon: React.ReactNode; title: string; description: string }> = {
  'no-content': {
    icon: <BookOpen className="w-16 h-16" />,
    title: '暂无内容',
    description: '这里还没有任何内容，快去探索吧！',
  },
  'no-results': {
    icon: <Search className="w-16 h-16" />,
    title: '没有找到结果',
    description: '尝试调整搜索条件或筛选器',
  },
  'error': {
    icon: <AlertCircle className="w-16 h-16" />,
    title: '出错了',
    description: '加载内容时出现问题，请稍后重试',
  },
  'loading': {
    icon: <Loader2 className="w-16 h-16 animate-spin" />,
    title: '加载中...',
    description: '正在获取数据，请稍候',
  },
};

import { Search, AlertCircle } from 'lucide-react';

export const EmptyState: React.FC<EmptyStateProps> = ({
  type = 'no-content',
  title,
  description,
  action,
}) => {
  const content = defaultContent[type];

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="text-slate-500 dark:text-slate-400 mb-4">
        {content.icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">
        {title || content.title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
        {description || content.description}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

export default {
  Skeleton,
  CardSkeleton,
  ListSkeleton,
  CodeBlockSkeleton,
  QuestionSkeleton,
  EmptyState,
};
