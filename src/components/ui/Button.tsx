import React from 'react';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
    color: white;
    &:hover:not(:disabled) {
      filter: brightness(1.1);
      box-shadow: var(--shadow-glow-primary);
    }
  `,
  secondary: `
    background: var(--bg-overlay);
    color: var(--text-primary);
    border: 1px solid var(--border-default);
    &:hover:not(:disabled) {
      background: var(--bg-elevated);
      border-color: var(--border-strong);
    }
  `,
  ghost: `
    background: transparent;
    color: var(--text-secondary);
    &:hover:not(:disabled) {
      background: var(--bg-overlay);
      color: var(--text-primary);
    }
  `,
  danger: `
    background: var(--danger-500);
    color: white;
    &:hover:not(:disabled) {
      background: var(--danger-600);
      box-shadow: var(--shadow-glow-danger);
    }
  `,
  success: `
    background: var(--success-500);
    color: white;
    &:hover:not(:disabled) {
      background: var(--success-600);
      box-shadow: var(--shadow-glow-success);
    }
  `,
  outline: `
    background: transparent;
    color: var(--primary-400);
    border: 1.5px solid var(--primary-500);
    &:hover:not(:disabled) {
      background: rgba(59, 130, 246, 0.1);
    }
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'height: 32px; padding: 0 12px; font-size: 13px;',
  md: 'height: 40px; padding: 0 16px; font-size: 14px;',
  lg: 'height: 48px; padding: 0 24px; font-size: 16px;',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  children,
  disabled,
  style,
  ...props
}) => {
  const isDisabled = disabled || loading;

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: icon && children ? '8px' : '0',
    fontWeight: 600,
    fontFamily: 'var(--font-sans)',
    borderRadius: 'var(--radius-md)',
    border: 'none',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.5 : 1,
    transition: 'all 200ms ease',
    ...(sizeStyles[size] as unknown as React.CSSProperties),
  };

  const getVariantStyle = (): React.CSSProperties => {
    const styleMap: Record<ButtonVariant, React.CSSProperties> = {
      primary: {
        background: 'linear-gradient(135deg, var(--primary-500), var(--primary-600))',
        color: 'white',
      },
      secondary: {
        background: 'var(--bg-overlay)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-default)',
      },
      ghost: {
        background: 'transparent',
        color: 'var(--text-secondary)',
      },
      danger: {
        background: 'var(--danger-500)',
        color: 'white',
      },
      success: {
        background: 'var(--success-500)',
        color: 'white',
      },
      outline: {
        background: 'transparent',
        color: 'var(--primary-400)',
        border: '1.5px solid var(--primary-500)',
      },
    };
    return styleMap[variant];
  };

  const combinedStyle = {
    ...baseStyle,
    ...getVariantStyle(),
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) return;
    const target = e.currentTarget;
    switch (variant) {
      case 'primary':
        target.style.filter = 'brightness(1.1)';
        target.style.boxShadow = 'var(--shadow-glow-primary)';
        break;
      case 'secondary':
        target.style.background = 'var(--bg-elevated)';
        target.style.borderColor = 'var(--border-strong)';
        break;
      case 'ghost':
        target.style.background = 'var(--bg-overlay)';
        target.style.color = 'var(--text-primary)';
        break;
      case 'danger':
        target.style.background = 'var(--danger-600)';
        target.style.boxShadow = 'var(--shadow-glow-danger)';
        break;
      case 'success':
        target.style.background = 'var(--success-600)';
        target.style.boxShadow = 'var(--shadow-glow-success)';
        break;
      case 'outline':
        target.style.background = 'rgba(59, 130, 246, 0.1)';
        break;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.filter = '';
    target.style.boxShadow = '';
    if (variant === 'secondary') {
      target.style.background = 'var(--bg-overlay)';
      target.style.borderColor = 'var(--border-default)';
    } else if (variant === 'ghost') {
      target.style.background = 'transparent';
      target.style.color = 'var(--text-secondary)';
    } else if (variant === 'outline') {
      target.style.background = 'transparent';
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) return;
    e.currentTarget.style.transform = 'scale(0.97)';
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <button
      {...props}
      disabled={isDisabled}
      style={combinedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {loading ? (
        <Loader2 size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} style={{ animation: 'spin 1s linear infinite' }} />
      ) : (
        <>
          {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
