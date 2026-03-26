import React from 'react';

type CardVariant = 'default' | 'interactive' | 'glass' | 'gradient';

interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const variantStyles: Record<CardVariant, React.CSSProperties> = {
  default: {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all 200ms ease',
  },
  interactive: {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all 200ms ease',
    cursor: 'pointer',
  },
  glass: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 'var(--radius-lg)',
    transition: 'all 200ms ease',
  },
  gradient: {
    background: 'linear-gradient(135deg, var(--primary-600), var(--accent-600))',
    border: 'none',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-glow-primary)',
    color: 'white',
    transition: 'all 200ms ease',
  },
};

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  className,
  style,
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const baseStyle: React.CSSProperties = {
    padding: 'var(--space-4)',
    ...variantStyles[variant],
  };

  const getHoverStyle = (): React.CSSProperties => {
    if (variant === 'default') {
      return {
        boxShadow: 'var(--shadow-md)',
        transform: 'translateY(-2px)',
      };
    }
    if (variant === 'interactive') {
      return {
        borderColor: 'rgba(59, 130, 246, 0.5)',
        boxShadow: 'var(--shadow-glow-primary)',
        transform: 'translateY(-2px)',
      };
    }
    if (variant === 'glass') {
      return {
        background: 'rgba(255, 255, 255, 0.08)',
      };
    }
    if (variant === 'gradient') {
      return {
        filter: 'brightness(1.1)',
        transform: 'translateY(-2px)',
      };
    }
    return {};
  };

  const combinedStyle = {
    ...baseStyle,
    ...(isHovered ? getHoverStyle() : {}),
    ...style,
  };

  return (
    <div
      className={className}
      style={combinedStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
