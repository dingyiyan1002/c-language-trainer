/**
 * 图标组件 - 性能优化版本
 * 
 * 使用动态导入和缓存机制减少初始包大小
 * 支持按需加载 lucide-react 图标
 */

import { memo, useState, useEffect, useCallback } from 'react';

// 预加载常用图标
const PRELOAD_ICONS = [
  'BookOpen', 'Target', 'Trophy', 'BarChart3', 'ChevronRight', 'ChevronLeft',
  'CheckCircle', 'XCircle', 'Lightbulb', 'Sparkles', 'Terminal', 'RotateCcw',
  'Home', 'Flame', 'Award', 'Zap', 'Code2', 'Bug', 'Play', 'GraduationCap',
  'Brain', 'AlertTriangle', 'Shuffle', 'Undo2', 'Sun', 'Moon', 'FolderOpen',
  'Layers', 'Bookmark', 'BookmarkCheck', 'Keyboard', 'BookMarked', 'Clapperboard',
  'Beaker', 'Cpu', 'Microscope', 'GitBranch', 'Binary', 'CircleHelp',
  'CircleArrowRight', 'CircleDot', 'Boxes', 'Timer', 'Upload', 'Wrench',
  'RefreshCcw', 'ScanLine', 'Lock', 'FastForward', 'Repeat2', 'Ruler',
  'TableProperties',
  'Type', 'Package', 'SquareFunction', 'Eye', 'HardDrive', 'Network', 'Hash',
  'Thermometer', 'CircuitBoard', 'Link', 'Smartphone', 'Phone', 'Eraser',
  'FileText', 'HelpCircle', 'ArrowLeft', 'Globe', 'Construction', 'Save',
  'Hammer', 'Circle', 'Heart', 'Pointer', 'Tv', 'Star', 'X', 'Check',
  'Loader2', 'AlertCircle', 'CheckCircle2', 'Copy', 'Maximize2', 'Minimize2',
  'Settings', 'Volume2', 'VolumeX', 'ChevronUp', 'ChevronDown', 'Search',
  'Filter', 'SortAsc', 'SortDesc', 'MoreHorizontal', 'MoreVertical', 'Dots',
  'Menu', 'XOctagon', 'Info', 'MessageSquare', 'Send', 'Paperclip',
  'Image', 'Video', 'Music', 'File', 'Folder', 'Download', 'Share',
  'ExternalLink', 'Clock', 'Calendar', 'Bell', 'Mail', 'User', 'Users',
  'LogIn', 'LogOut', 'Settings2', 'Sliders', 'Tool', 'Database',
  'Server', 'Cloud', 'Wifi', 'Bluetooth', 'Usb', 'Battery', 'Power',
  'Monitor', 'Laptop', 'Tablet', 'Tv2', 'Radio', 'Camera', 'Aperture',
  'Film', 'Image2', 'Eye2', 'Watch', 'Smartphone2', 'Headphones',
  'Mic', 'MicOff', 'Volume1', 'Volume2', 'Globe2', 'Map', 'Navigation',
  'Compass', 'Flag', 'MapPin', 'Route', 'TrendingUp', 'TrendingDown',
  'Activity', 'Pulse', 'Heart2', 'Brain2', 'Dna', 'Atom', 'Zap2',
  'Flame2', 'Sun2', 'Moon2', 'Cloud2', 'Rain', 'Wind', 'Snowflake',
  'Thermometer2', 'Droplet', 'Droplets', 'Umbrella', 'CloudLightning',
  'CloudSnow', 'CloudRain', 'CloudDrizzle', 'CloudFog', 'Sunrise', 'Sunset',
  'Timer2', 'AlarmClock', 'Stopwatch', 'Hourglass', 'Calendar2', 'Clock2',
  'History', 'Bookmark2', 'Tag', 'Tags', 'Hash2', 'AtSign', 'Phone2',
  'Call', 'Video2', 'Camera2', 'Image3', 'Film2', 'Tv3', 'Radio2',
  'Monitor2', 'Laptop2', 'Tablet2', 'Smartphone3', 'Watch2', 'Headphones2',
  'Mic2', 'Speaker', 'Volume', 'Music2', 'Play2', 'Pause', 'Stop',
  'SkipBack', 'SkipForward', 'FastForward2', 'Rewind', 'Repeat', 'Shuffle2',
  'List', 'Grid', 'Layout', 'Columns', 'Rows', 'Box', 'Package2',
  'Container', 'Database2', 'Server2', 'Cloud2', 'Download2', 'Upload2',
  'CloudUpload', 'CloudDownload', 'CloudOff', 'Wifi2', 'WifiOff', 'Signal',
  'Battery2', 'BatteryCharging', 'BatteryFull', 'BatteryLow', 'BatteryMedium',
  'Plug', 'Power2', 'Cpu2', 'Gpu', 'Memory', 'HardDrive2', 'SdCard',
  'Usb2', 'Bluetooth2', 'Wifi3', 'Ethernet', 'Router', 'Switch', 'Hub',
  'Cable', 'Connector', 'Port', 'Jack', 'Socket', 'Outlet', 'Adapter',
  'Converter', 'Transformer', 'Regulator', 'Controller', 'Processor', 'Chip',
  'Circuit', 'Board', 'Pcb', 'Solder', 'Wire', 'Cable2', 'Connector2',
  // 章节图标
  'Hand', 'Shield', 'Bird', 'Briefcase', 'Sprout', 'Plus', 'Crown', 'Code2',
] as const;

export type IconName = typeof PRELOAD_ICONS[number];

// 图标缓存
type IconComponentType = (props: { className?: string }) => React.JSX.Element | null;
const iconCache = new Map<string, IconComponentType>();

// 动态导入图标
async function loadIcon(name: string): Promise<IconComponentType | null> {
  // 检查缓存
  if (iconCache.has(name)) {
    return iconCache.get(name)!;
  }

  try {
    // 动态导入 lucide-react
    const lucideReact = await import('lucide-react');
    const icon = (lucideReact as any)[name];
    
    if (icon) {
      iconCache.set(name, icon);
      return icon;
    }
  } catch (error) {
    console.warn(`[Icon] 加载图标 ${name} 失败:`, error);
  }
  
  return null;
}

// 预加载所有图标
export async function preloadIcons(): Promise<void> {
  const promises = PRELOAD_ICONS.map(name => loadIcon(name));
  await Promise.all(promises);
  console.log('[Icon] 图标预加载完成');
}

// 预加载关键图标（首屏必需）
const CRITICAL_ICONS: IconName[] = [
  'Terminal', 'Home', 'FolderOpen', 'BarChart3', 'Zap', 'Keyboard',
  'Sun', 'Moon', 'Play', 'CheckCircle', 'XCircle', 'ChevronRight', 'ChevronLeft',
  'BookOpen', 'Target', 'Trophy', 'Award', 'Flame', 'Brain', 'Code2',
  'Lightbulb', 'Sparkles', 'AlertTriangle', 'RotateCcw', 'Undo2', 'Shuffle',
];

export async function preloadCriticalIcons(): Promise<void> {
  const promises = CRITICAL_ICONS.map(name => loadIcon(name));
  await Promise.all(promises);
  console.log('[Icon] 关键图标预加载完成');
}

interface IconProps {
  name: IconName;
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

// 单个图标组件 - 异步加载
export const Icon = memo(function Icon({ name, className = '', size = 24, color, strokeWidth }: IconProps) {
  const [IconComponent, setIconComponent] = useState<IconComponentType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    loadIcon(name).then((component) => {
      if (mounted) {
        if (component) {
          setIconComponent(() => component);
        }
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, [name]);

  if (loading) {
    // 加载占位符 - 避免布局偏移
    return (
      <span
        className={`inline-block bg-slate-700/20 rounded ${className}`}
        style={{ width: size, height: size }}
        aria-label={`加载图标 ${name}`}
      />
    );
  }

  if (!IconComponent) {
    // 加载失败
    return null;
  }

  return (
    <IconComponent
      className={className}
      size={typeof size === 'string' ? parseInt(size) : size}
      color={color}
      strokeWidth={strokeWidth}
    />
  );
});

// 同步图标组件 - 用于已缓存的图标
interface SyncIconProps {
  name: IconName;
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export function SyncIcon({ name, className = '', size = 24, color, strokeWidth }: SyncIconProps) {
  const lucideReact = require('lucide-react') as Record<string, IconComponentType>;
  const IconComponent = lucideReact[name];

  if (!IconComponent) {
    console.warn(`[SyncIcon] 图标 ${name} 不存在`);
    return null;
  }

  return (
    <IconComponent
      className={className}
      size={typeof size === 'string' ? parseInt(size) : size}
      color={color}
      strokeWidth={strokeWidth}
    />
  );
}

// 批量预加载钩子
export function useIconPreload(iconNames: IconName[]) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    Promise.all(iconNames.map(name => loadIcon(name))).then(() => {
      if (mounted) {
        setLoaded(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, [iconNames]);

  return loaded;
}

// 导出所有图标名称
export { PRELOAD_ICONS, CRITICAL_ICONS };
