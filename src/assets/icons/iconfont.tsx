/**
 * 自定义图标字体配置文件
 * 
 * 使用方式:
 * import { IconFont } from '@/assets/icons/iconfont';
 * 
 * <IconFont name="spark" size={24} className="custom-class" />
 */

import React from 'react';
import {
  IconSpark,
  IconGraduation,
  IconTrending,
  IconBrain,
  IconZap,
  IconCrown,
  IconHand,
  IconShield,
  IconBird,
  IconCpu,
  IconCode2,
} from './index';

export type IconName = 
  | 'spark'
  | 'graduation'
  | 'trending'
  | 'brain'
  | 'zap'
  | 'crown'
  | 'hand'
  | 'shield'
  | 'bird'
  | 'cpu'
  | 'code2';

interface IconFontProps {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
}

export const IconFont: React.FC<IconFontProps> = ({ 
  name, 
  size = 24, 
  className = '',
  color 
}) => {
  const iconMap: Record<IconName, React.FC<{ className?: string; size?: number }>> = {
    spark: IconSpark,
    graduation: IconGraduation,
    trending: IconTrending,
    brain: IconBrain,
    zap: IconZap,
    crown: IconCrown,
    hand: IconHand,
    shield: IconShield,
    bird: IconBird,
    cpu: IconCpu,
    code2: IconCode2,
  };

  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} size={size} />;
};

// 导出所有图标
export const Icons = {
  Spark: IconSpark,
  Graduation: IconGraduation,
  Trending: IconTrending,
  Brain: IconBrain,
  Zap: IconZap,
  Crown: IconCrown,
  Hand: IconHand,
  Shield: IconShield,
  Bird: IconBird,
  Cpu: IconCpu,
  Code2: IconCode2,
};

// 导出图标名称列表
export const ICON_NAMES: IconName[] = [
  'spark',
  'graduation',
  'trending',
  'brain',
  'zap',
  'crown',
  'hand',
  'shield',
  'bird',
  'cpu',
  'code2',
];
