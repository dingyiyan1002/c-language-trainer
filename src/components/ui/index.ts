/**
 * UI 组件库 - 现代化设计系统
 *
 * 导出所有优化后的 UI 组件
 * 使用示例:
 * ```tsx
 * import { Button, Card, Badge, Input, Header } from '@/components/ui';
 * ```
 */

// 从 OptimizedUI 导出
export {
  OptimizedHeader as Header,
  Card,
  Button,
  Badge,
  Input,
} from './OptimizedUI';

// 从 RippleButton 导出
export {
  RippleButton,
  Button as RippleButton2,
} from './RippleButton';

// 重新导出常用类型
export type {
  CardProps,
  ButtonProps,
  BadgeProps,
  InputProps,
  RippleButtonProps,
} from './OptimizedUI';
